"""后端源码里的中文字符串逐文件只减不增（ADR-0159 第六条）。

界面文字只在 `resources/locales/` 里，日志与命令行用英文，所以源码里的中文字符串都在计数之内：
带不带 code、是报错、日志还是命令行输出都算。docstring 不算；内容数据文件（`CONTENT_FILES`：标签词表、
汉字转换表、番号与标题规则的词表）整份不算。

用法：
  python scripts/check_backend_copy.py          列出超过基线的文件，有就以 1 退出
  python scripts/check_backend_copy.py --write  按当前计数重写基线（只在抽走中文之后用来收紧）
"""
from __future__ import annotations

import argparse
import ast
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "peach"
BASELINE = ROOT / "scripts" / "backend-copy-baseline.json"
SERVER_LOCALES = ROOT / "resources" / "locales"

HAN = re.compile(r"[㐀-鿿]")
#: 内容数据：词表与规则里的中文是数据本身，不是界面文字。
CONTENT_FILES = {
    "genre_taxonomy.py",  # 标签的中文规范名、别名与分组
    "javdb_genres.py",    # JavDB 类别名到本地标签的对照
    "kanji.py",           # 繁简与日文汉字转换表
    "catalog_rules.py",   # 番号、标题、转载站与特典版的识别词
}
CODE_KEYWORDS = {"code", "message_code"}
CODED_CALLS = {"message_fields", "UserFacingError", "UserValueError", "UserRuntimeError", "UserPermissionError",
               "UserOSError", "UserTimeoutError", "UserInterruptedError", "CodePatternError"}
#: 一个 code 是用点分开的 camelCase 段，末段可以是带连字符的显示表 id。
CODE_SHAPE = re.compile(r"^[a-z][A-Za-z0-9]*(\.[A-Za-z0-9][A-Za-z0-9-]*)+$")


def _call_name(call: ast.Call) -> str:
    func = call.func
    return func.attr if isinstance(func, ast.Attribute) else func.id if isinstance(func, ast.Name) else ""


def _docstrings(tree: ast.AST) -> set[int]:
    found = set()
    for node in ast.walk(tree):
        if isinstance(node, (ast.Module, ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)) and node.body:
            first = node.body[0]
            if isinstance(first, ast.Expr) and isinstance(first.value, ast.Constant) and isinstance(first.value.value, str):
                found.add(id(first.value))
    return found


def count_literals(name: str, source: str) -> int:
    """一个模块里的中文字符串条数。f-string 整条算一处；内容数据文件记 0。"""
    if Path(name).name in CONTENT_FILES:
        return 0
    tree = ast.parse(source)
    parents = {id(child): node for node in ast.walk(tree) for child in ast.iter_child_nodes(node)}
    skip = _docstrings(tree)
    total = 0
    for node in ast.walk(tree):
        if isinstance(node, ast.Constant) and isinstance(node.value, str):
            if id(node) in skip or isinstance(parents.get(id(node)), ast.JoinedStr) or not HAN.search(node.value):
                continue
        elif isinstance(node, ast.JoinedStr):
            if not any(isinstance(part, ast.Constant) and HAN.search(str(part.value)) for part in node.values):
                continue
        else:
            continue
        total += 1
    return total


def scan(root: Path = ROOT) -> dict[str, int]:
    counts = {}
    for path in sorted((root / "src" / "peach").rglob("*.py")):
        if "__pycache__" in path.parts:
            continue
        found = count_literals(path.name, path.read_text(encoding="utf-8"))
        if found:
            counts[path.relative_to(root).as_posix()] = found
    return counts


def codes_in(source: str) -> set[str]:
    """源码里写死的 message code：`code=`／`message_code=` 关键字、`message_fields`、`UserFacingError` 及其子类的第一个参数、
    字典里 `message_code` 键的值，以及名字以 `_CODE` 结尾的常量。"""
    found = set()
    tree = ast.parse(source)
    # 同一模块里继承 `UserFacingError` 的异常类，构造方式与它相同。
    coded = CODED_CALLS | {node.name for node in ast.walk(tree) if isinstance(node, ast.ClassDef)
                           and any(isinstance(base, ast.Name) and base.id in CODED_CALLS for base in node.bases)}
    for node in ast.walk(tree):
        values: list[ast.AST] = []
        if isinstance(node, ast.Call):
            values += [kw.value for kw in node.keywords if kw.arg in CODE_KEYWORDS]
            if _call_name(node) in coded and node.args:
                values.append(node.args[0])
        elif isinstance(node, ast.Dict):
            values += [value for key, value in zip(node.keys, node.values)
                       if isinstance(key, ast.Constant) and key.value == "message_code"]
        elif isinstance(node, ast.Assign):
            if any(isinstance(target, ast.Name) and target.id.endswith("_CODE") for target in node.targets):
                values.append(node.value)
        found |= {value.value for value in values
                  if isinstance(value, ast.Constant) and isinstance(value.value, str) and CODE_SHAPE.match(value.value)}
    return found


def used_codes(root: Path = ROOT) -> set[str]:
    return set().union(*(codes_in(path.read_text(encoding="utf-8"))
                         for path in (root / "src" / "peach").rglob("*.py") if "__pycache__" not in path.parts))


def server_keys(language: str, root: Path = ROOT) -> set[str]:
    """`server` 命名空间里的全部键，写成点分路径。"""
    def walk(tree: dict, prefix: str = "") -> set[str]:
        keys = set()
        for key, value in tree.items():
            keys |= walk(value, f"{prefix}{key}.") if isinstance(value, dict) else {prefix + key}
        return keys
    locales = SERVER_LOCALES if root == ROOT else root / "resources" / "locales"
    return walk(json.loads((locales / language / "server.json").read_text(encoding="utf-8")))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="后端源码中文字符串逐文件只减不增")
    parser.add_argument("--write", action="store_true", help="按当前计数重写基线")
    args = parser.parse_args(argv)
    counts = scan()
    if args.write:
        BASELINE.write_text(json.dumps(counts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
        print(f"已写入 {len(counts)} 个文件、{sum(counts.values())} 条")
        return 0
    baseline = json.loads(BASELINE.read_text(encoding="utf-8"))
    raised = [f"{file}: {count}（基线 {baseline.get(file, 0)}）" for file, count in counts.items() if count > baseline.get(file, 0)]
    print("\n".join(raised) or "没有超过基线的文件")
    return 1 if raised else 0


if __name__ == "__main__":
    sys.exit(main())
