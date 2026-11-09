"""发给界面的一句话：中文原文旁边带稳定的 `message_code` 与插值参数 `message_params`（ADR-0156 第三条）。

前端按 `server:<message_code>` 取当前界面语言的译文，没有译文时显示同一层的中文原文。
成功回执的原文放在 `message`，失败放在 `error`，两种都用这两个字段带 code。
不用 `code` 这个名字：响应里的 `code` 已普遍表示番号。
"""
from __future__ import annotations

from collections.abc import Mapping
from typing import Any


class UserFacingError(Exception):
    """给人看的错误。`api.py` 统一转成 `{"error", "message_code", "message_params"}`。

    `message` 是中文原文，也是没有译文时的显示；`code` 是 `server` 命名空间里的键，写进去就不再改；
    `params` 填进译文里的 `{{名字}}`。领域异常可以继承它，同时继承原来的 `ValueError` 等基类，
    让还按旧基类捕获的调用方不受影响。
    """

    status_code = 400

    def __init__(self, message: str, *, code: str, params: Mapping[str, Any] | None = None,
                 status_code: int | None = None) -> None:
        super().__init__(message)
        self.message = message
        self.code = code
        self.params = dict(params or {})
        if status_code is not None:
            self.status_code = status_code


def message_fields(text: str, code: str | None = None, params: Mapping[str, Any] | None = None,
                   *, key: str = "message") -> dict[str, Any]:
    """一句界面文字的响应字段。`key` 是原文所在的键：成功用 `message`，失败用 `error`。"""
    fields: dict[str, Any] = {key: text}
    if code:
        fields["message_code"] = code
        fields["message_params"] = dict(params or {})
    return fields


def error_fields(error: BaseException) -> dict[str, Any]:
    """把异常写成失败响应的字段：`UserFacingError` 带上 code，别的异常照旧只给原文。"""
    if isinstance(error, UserFacingError):
        return message_fields(error.message, error.code, error.params, key="error")
    return {"error": str(error)}
