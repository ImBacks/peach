"""可选的容器渲染节点准备入口；只改容器 /dev 中的节点，随后永久降权。"""
from __future__ import annotations

import os
import pwd
import re
import stat
import sys

from .user_messages import UserFacingError


class RenderDeviceError(UserFacingError, ValueError):
    """渲染节点不符合设备透传约束。"""


class RenderPermissionError(UserFacingError, PermissionError):
    """渲染节点权限或降权不符合服务身份约束。"""


def prepare(device: str) -> None:
    if not re.fullmatch(r'/dev/dri/renderD(?:12[89]|1[3-8][0-9]|19[01])', device):
        raise RenderDeviceError('只允许 /dev/dri/renderD128 到 renderD191', code='dockerVaapi.invalidRenderDevice')
    if os.geteuid() != 0:
        raise RenderPermissionError('设备权限准备入口需要 root；服务会在准备后以 peach 用户运行',
                                    code='dockerVaapi.rootRequired')
    info = os.lstat(device)
    if (not stat.S_ISCHR(info.st_mode) or os.major(info.st_rdev) != 226
            or os.minor(info.st_rdev) != int(device.rsplit('renderD', 1)[1])):
        raise RenderDeviceError('目标不是 DRM 渲染节点', code='dockerVaapi.notRenderDevice')
    # --device 在容器 /dev 的 tmpfs 创建独立节点。绑定宿主机的节点或整个 /dev/dri
    # 属于另一文件系统，不能在这里 chmod，否则会改变宿主机权限。
    if info.st_dev != os.stat('/dev').st_dev:
        raise RenderPermissionError('请使用 Compose devices 透传单个节点，不能绑定宿主机 /dev/dri',
                                    code='dockerVaapi.hostBindRejected')
    account = pwd.getpwnam('peach')
    if account.pw_uid == 0 or account.pw_gid == 0:
        raise RenderPermissionError('peach 必须使用非 root 身份', code='dockerVaapi.nonRootAccountRequired')
    os.chown(device, 0, account.pw_gid)
    os.chmod(device, 0o660)
    groups = sorted({group for group in os.getgroups() if group != 0} | {account.pw_gid})
    os.setgroups(groups)
    os.setgid(account.pw_gid)
    os.setuid(account.pw_uid)
    if os.getuid() != account.pw_uid or os.geteuid() != account.pw_uid:
        raise RenderPermissionError('服务身份切换未完成', code='dockerVaapi.identitySwitchFailed')


def main() -> int:
    prepare(os.environ.get('PEACH_VAAPI_DEVICE', '/dev/dri/renderD128'))
    os.execv(sys.executable, [sys.executable, '-m', 'peach.server'])
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
