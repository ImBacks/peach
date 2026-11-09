"""统一测试入口的定向调试；不签发正式验收记录。"""
from __future__ import annotations

import re
import sys
import unittest
from pathlib import Path
from functools import partial

VITEST_SUITE = "test_frontend_build.VitestTests.test_the_island_suite_passes"


def selection(root: Path, selectors: list[str]) -> tuple[unittest.TestSuite, tuple[str, ...], tuple[str, ...]]:
    """定向选择器对应的用例；另返回要跑的浏览器文件与 vitest 文件（相对 `frontend/`）。"""
    suite = unittest.TestSuite()
    browsers = []
    islands = []
    names = []
    # pwsh -File 将 -Focus a,b 作为一个参数传入；交互式数组和重复 --focus 共用边界。
    for selector in dict.fromkeys(part.strip() for value in selectors for part in value.split(',')):
        if selector.startswith("frontend/e2e/") and selector.endswith(".test.ts"):
            path = (root / selector).resolve()
            if not path.is_relative_to((root / "frontend/e2e").resolve()) or not path.is_file():
                raise ValueError(f"浏览器用例不存在或超出 e2e 目录：{selector}")
            browsers.append(path.relative_to(root / "frontend").as_posix())
        elif selector.startswith("frontend/test/") and selector.endswith((".test.ts", ".test.tsx")):
            path = (root / selector).resolve()
            if not path.is_relative_to((root / "frontend/test").resolve()) or not path.is_file():
                raise ValueError(f"vitest 用例不存在或超出 test 目录：{selector}")
            islands.append(path.relative_to(root / "frontend").as_posix())
        else:
            name = selector.removeprefix("tests/").removesuffix(".py")
            if not re.fullmatch(r"test_\w+(?:\.\w+)*", name, flags=re.ASCII) \
                    or not (root / "tests" / (name.split(".")[0] + ".py")).is_file():
                raise ValueError("用例必须是 tests/test_*.py、Python 用例名、frontend/e2e/*.test.ts "
                                 f"或 frontend/test/**/*.test.ts(x)：{selector}")
            names.append(name)
    if "e2e/setup.test.ts" in browsers:
        names.append("test_web_e2e.SetupE2ETests")
    if any(name != "e2e/setup.test.ts" for name in browsers):
        names.append("test_web_e2e.WebE2ESmokeTests")
    if islands:
        names.append(VITEST_SUITE)
    sys.path[:0] = [str(root), str(root / "tests")]
    try:
        for name in dict.fromkeys(names):
            suite.addTests(unittest.defaultTestLoader.loadTestsFromName(name))
    finally:
        del sys.path[:2]
    return suite, tuple(browsers), tuple(islands)


def run(runner, args) -> int:
    try:
        suite, browsers, islands = selection(runner.ROOT, args.focus)
    except ValueError as error:
        print(error, file=sys.stderr)
        return 2
    print("定向调试：只运行指定用例，不签发正式记录；提交前仍需 auto。", flush=True)
    external = {}
    if browsers:
        external['test_web_e2e.py'] = ['frontend/' + name for name in browsers]
    if islands:
        external['test_frontend_build.py'] = ['frontend/' + name for name in islands]
    plan = {'external': external, 'focus': True}
    with runner.test_history.running():
        result = unittest.TextTestRunner(verbosity=2,
            resultclass=partial(runner.TimedResult, selection=plan)).run(suite)
    rows = result.results + runner.test_history.take_external()
    runner.test_history.append(runner.ROOT, scope="focus:" + " ".join(args.focus),
                               rows=rows, files=sorted(result.files))
    passed = result.wasSuccessful() and result.testsRun > 0
    if not passed and rows and getattr(args, "rerun_failures", False):
        passed = runner.rerun_failures(rows)
    return 0 if passed else 1
