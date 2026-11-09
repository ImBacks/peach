"""后端发给界面的中文逐文件只减不增（ADR-0156 第五条）。

计数的是还没带 `message_code` 的中文字符串：路由模块（`api.py`、`routes_*.py`、`web_*.py`）里的全部中文，
加上所有模块里 `raise` 的中文消息。docstring、日志、命令行输出和比较、正则里的中文不算；
写在带 `code=`／`message_code=` 的调用、`message_fields(...)` 或带 `message_code` 键的字典里的中文是回落原文，也不算。

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
SERVER_LOCALES = ROOT / "frontend" / "src" / "locales"

HAN = re.compile(r"[㐀-鿿]")
ROUTE_MODULE = re.compile(r"^(api|routes_\w+|web_\w+)\.py$")
LOG_METHODS = {"debug", "info", "warning", "warn", "error", "exception", "critical", "log"}
CLI_CALLS = {"print", "echo", "secho", "write", "SystemExit", "exit", "add_argument", "ArgumentParser",
             "add_parser", "add_subparsers", "add_argument_group", "add_mutually_exclusive_group"}
MATCH_CALLS = {"startswith", "endswith", "replace", "split", "rsplit", "strip", "lstrip", "rstrip", "partition",
               "rpartition", "find", "index", "count", "removeprefix", "removesuffix", "compile", "search", "match",
               "fullmatch", "sub", "subn", "findall", "finditer"}
CODE_KEYWORDS = {"code", "message_code"}
CODED_CALLS = {"message_fields"}
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


def _coded(node: ast.AST) -> bool:
    if isinstance(node, ast.Call):
        return _call_name(node) in CODED_CALLS or any(kw.arg in CODE_KEYWORDS for kw in node.keywords)
    if isinstance(node, ast.Dict):
        return any(isinstance(key, ast.Constant) and key.value == "message_code" for key in node.keys)
    return False


def _context(node: ast.AST, parents: dict[int, ast.AST]) -> str | None:
    """沿父节点往上看这句中文在哪：`raise`、`skip`（不计）或 `None`（普通字符串）。"""
    child, current = node, parents.get(id(node))
    while current is not None and not isinstance(current, (ast.FunctionDef, ast.AsyncFunctionDef, ast.Lambda)):
        if _coded(current):
            return "skip"
        if isinstance(current, ast.Call):
            name = _call_name(current)
            if (isinstance(current.func, ast.Attribute) and name in LOG_METHODS
                    and re.search(r"log", ast.unparse(current.func.value), re.I)):
                return "skip"
            if name in CLI_CALLS or (name in MATCH_CALLS and child is not current.func):
                return "skip"
        elif isinstance(current, (ast.Compare, ast.Set)):
            return "skip"
        elif isinstance(current, ast.Raise):
            return "raise"
        if isinstance(current, ast.stmt) and not isinstance(current, ast.Raise):
            return None
        child, current = current, parents.get(id(current))
    return None


def count_literals(name: str, source: str) -> int:
    """一个模块里还没带 code 的界面中文条数。"""
    tree = ast.parse(source)
    parents = {id(child): node for node in ast.walk(tree) for child in ast.iter_child_nodes(node)}
    route = bool(ROUTE_MODULE.match(Path(name).name))
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
        context = _context(node, parents)
        if context == "raise" or (context is None and route):
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
    """源码里写死的 message code：`code=`／`message_code=` 关键字、`message_fields` 的第二个参数、
    字典里 `message_code` 键的值，以及名字以 `_CODE` 结尾的常量。"""
    found = set()
    for node in ast.walk(ast.parse(source)):
        values: list[ast.AST] = []
        if isinstance(node, ast.Call):
            values += [kw.value for kw in node.keywords if kw.arg in CODE_KEYWORDS]
            if _call_name(node) in CODED_CALLS and len(node.args) > 1:
                values.append(node.args[1])
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
    locales = SERVER_LOCALES if root == ROOT else root / "frontend" / "src" / "locales"
    return walk(json.loads((locales / language / "server.json").read_text(encoding="utf-8")))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="后端界面中文逐文件只减不增")
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
