"""无桌面部署的只读目录选择；访问限制在明确配置的媒体根内。"""
from __future__ import annotations

from itertools import islice
import json
import os
from pathlib import Path


def available() -> bool:
    import sys
    return sys.platform in {'win32', 'darwin'} and os.environ.get('PEACH_HEADLESS_MANAGED') != '1'


def roots(config) -> list[str]:
    values = [value for group in config.mounts.values() for value in group]
    if os.environ.get('PEACH_DISTRIBUTION') == 'docker':
        values.insert(0, '/media')
    return list(dict.fromkeys(str(Path(value)) for value in values
                             if Path(value).is_absolute() and Path(value) != Path(Path(value).anchor)))


def browse(config, initial: str) -> dict:
    from .media_io import _request
    allowed = roots(config)
    if not initial:
        return {'mode': 'server', 'path': None, 'parent': None, 'roots': allowed,
                'directories': [], 'truncated': False}
    candidate = Path(initial)
    if not candidate.is_absolute() or not any(candidate.is_relative_to(Path(root)) for root in allowed):
        raise ValueError('只能浏览已配置的媒体挂载目录；新挂载路径可在媒体目录输入框中填写')
    return _request('browse', initial, value=json.dumps(allowed), timeout=10)


def list_directory(path, allowed: list[str]) -> dict:
    """由可终止的媒体读取子进程调用；不跟随列表中的符号链接。"""
    candidate = Path(path)
    if not candidate.is_absolute():
        raise ValueError('请填写容器内的媒体绝对路径')
    target = candidate.resolve(strict=True)
    boundaries = [Path(root).resolve(strict=True) for root in allowed
                  if Path(root).exists()]
    boundaries = [root for root in boundaries if root != Path(root.anchor)]
    boundary = next((root for root in sorted(boundaries, key=lambda item: len(item.parts), reverse=True)
                     if target.is_relative_to(root)), None)
    if boundary is None:
        raise ValueError('只能浏览已配置的媒体挂载目录；新挂载路径可在媒体目录输入框中填写')
    directories = []
    with os.scandir(target) as entries:
        limited = list(islice(entries, 501))
        for entry in limited[:500]:
            if entry.is_dir(follow_symlinks=False):
                directories.append({'name': entry.name, 'path': str(target / entry.name)})
    return {'mode': 'server', 'path': str(target),
            'parent': str(target.parent) if target != boundary else None,
            'roots': allowed, 'directories': sorted(directories, key=lambda item: item['name'].casefold()),
            'truncated': len(limited) > 500}
