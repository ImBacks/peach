"""发给界面的文字带 `message_code`（ADR-0156 第三条）：信封字段、统一出口、code 都有译文、后端中文只减不增。"""
from __future__ import annotations

import importlib.util
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from support.ledger import fresh_ledger

from peach import release_updates, repair_center
from peach.user_messages import UserFacingError, error_fields, message_fields

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import check_backend_copy as checker  # noqa: E402

HAS_DEPS = all(importlib.util.find_spec(name) for name in ("fastapi", "httpx"))
LOCALES = ROOT / "frontend" / "src" / "locales"


def server_resource(language: str) -> dict:
    return json.loads((LOCALES / language / "server.json").read_text(encoding="utf-8"))


class EnvelopeTests(unittest.TestCase):
    def test_coded_text_carries_code_and_params_beside_the_original(self):
        self.assertEqual(message_fields("已整理 3 部", "organize.done", {"count": 3}),
                         {"message": "已整理 3 部", "message_code": "organize.done", "message_params": {"count": 3}})
        self.assertEqual(message_fields("尚未检查"), {"message": "尚未检查"})

    def test_user_facing_errors_keep_their_code_and_other_errors_keep_their_text(self):
        error = UserFacingError("整理路径不在所选来源内", code="organize.pathOutsideSource", params={"path": "R:/x"},
                                status_code=409)
        self.assertEqual(error.status_code, 409)
        self.assertEqual(error_fields(error), {"error": "整理路径不在所选来源内", "message_code": "organize.pathOutsideSource",
                                               "message_params": {"path": "R:/x"}})
        self.assertEqual(error_fields(ValueError("旧的报错")), {"error": "旧的报错"})


class TranslationCoverageTests(unittest.TestCase):
    def test_every_code_written_in_the_backend_has_both_languages(self):
        used = checker.used_codes()
        self.assertTrue(used)
        for language in ("zh-CN", "en"):
            with self.subTest(language):
                self.assertEqual(sorted(used - checker.server_keys(language)), [],
                                 "新的 message code 要在 frontend/src/locales/<语言>/server.json 里同时写中文和英文")

    def test_display_tables_keep_their_chinese_in_step_with_the_source_resource(self):
        zh = server_resource("zh-CN")
        self.assertEqual(zh["release"]["installation"], release_updates.INSTALLATIONS)
        self.assertEqual({key: (row["title"], row["summary"]) for key, row in zh["repairCenter"]["items"].items()},
                         {key: (title, summary) for key, title, summary, _ in repair_center.ITEMS})
        self.assertEqual(zh["repairCenter"]["history"], {prefix.rstrip("-"): title for prefix, title, _ in repair_center.RULES})


class BackendCopyRatchetTests(unittest.TestCase):
    def test_no_module_has_more_uncoded_interface_chinese_than_its_baseline(self):
        baseline = json.loads(checker.BASELINE.read_text(encoding="utf-8"))
        raised = [f"{name}: {count}（基线 {baseline.get(name, 0)}）"
                  for name, count in checker.scan().items() if count > baseline.get(name, 0)]
        self.assertEqual(raised, [], "给人看的中文改用 UserFacingError 或 message_fields 带上 message_code；"
                                     "抽走后跑 python scripts/check_backend_copy.py --write 收紧基线")

    def test_routes_count_every_string_and_other_modules_count_only_raise(self):
        source = "\n".join([
            '"""模块说明不算。"""',
            'import logging',
            'LOGGER = logging.getLogger(__name__)',
            'TITLE = "界面标题"',
            'def handler(value):',
            '    LOGGER.warning("日志不算")',
            '    if value == "比较不算":',
            '        print("命令行不算")',
            '    if value:',
            '        raise ValueError(f"报错 {value}")',
            '    raise UserFacingError("带 code 的不算", code="x.y")',
            '    return {"error": "回执", "message_code": "x.z"} or message_fields("也不算", "x.w")',
        ])
        self.assertEqual(checker.count_literals("routes_sample.py", source), 2)
        self.assertEqual(checker.count_literals("sample.py", source), 1)

    def test_codes_are_found_wherever_the_backend_writes_them(self):
        source = "\n".join([
            'SAMPLE_CODE = "sample.constant"',
            'def handler():',
            '    message_fields("原文", "sample.positional")',
            '    raise UserFacingError("原文", code="sample.keyword")',
            '    return {"message": "原文", "message_code": "sample.dict"}',
        ])
        self.assertEqual(checker.codes_in(source),
                         {"sample.constant", "sample.positional", "sample.keyword", "sample.dict"})


@unittest.skipUnless(HAS_DEPS, "fastapi/httpx not installed")
class ResponseExitTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        import httpx
        from peach.api import create_app
        from peach.config import PeachSettings
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        root = Path(tmp.name).resolve()
        app = create_app(PeachSettings(configured=True, db_path=fresh_ledger(root), follow_state_root=root / "state"))
        self.addCleanup(app.state.http_transport.close)

        def refuse():
            raise UserFacingError("来源正在冷却", code="sample.coolingDown", params={"minutes": 5}, status_code=409)

        def crash():
            raise RuntimeError("boom")
        # 插到路由表最前面：应用末尾有兜底路由，追加在后面的路由永远匹配不到。
        for path, endpoint in (("/api/sample-refusal", refuse), ("/sample-refusal", refuse), ("/api/sample-crash", crash)):
            app.add_api_route(path, endpoint)
            app.router.routes.insert(0, app.router.routes.pop())
        self.client = httpx.AsyncClient(transport=httpx.ASGITransport(app=app, raise_app_exceptions=False),
                                        base_url="http://testserver")
        self.addAsyncCleanup(self.client.aclose)

    async def test_user_facing_errors_leave_through_one_exit(self):
        response = await self.client.get("/api/sample-refusal")
        self.assertEqual(response.status_code, 409)
        self.assertEqual(response.json(), {"error": "来源正在冷却", "message_code": "sample.coolingDown",
                                           "message_params": {"minutes": 5}})
        page = await self.client.get("/sample-refusal", headers={"Accept": "text/html"})
        self.assertEqual(page.status_code, 409)
        self.assertIn('data-detail="来源正在冷却"', page.text)

    async def test_starlette_and_unexpected_errors_carry_codes(self):
        missing = await self.client.get("/dist/no-such.js")
        self.assertEqual(missing.json()["message_code"], "http.notFound")
        wrong = await self.client.delete("/healthz")
        self.assertEqual(wrong.json()["message_code"], "http.methodNotAllowed")
        with patch("peach.api._server_error_headers", return_value={"X-Peach-Error-ID": "test"}):
            crashed = await self.client.get("/api/sample-crash")
        self.assertEqual(crashed.status_code, 500)
        self.assertEqual(crashed.json(), {"error": "服务处理失败，请导出诊断报告", "message_code": "http.serverError",
                                          "message_params": {}, "error_id": "test"})


if __name__ == "__main__":
    unittest.main()
