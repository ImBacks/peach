"""Docker 启动时准备数据目录，并降权到配置的数值 UID/GID。"""
from __future__ import annotations

import glob
import os
import re
import stat
import sys
import tempfile
from dataclasses import dataclass
from pathlib import Path
from typing import Mapping, Sequence


DEFAULT_UID = 1000
DEFAULT_GID = 1000
MAX_ID = 2**32 - 2
DATA_ROOT = Path("/data")
MOUNTINFO_PATH = Path("/proc/self/mountinfo")

EX_CONFIG = 64
EX_DATA = 73
EX_IDENTITY = 77
EX_COMMAND = 127

_DECIMAL = re.compile(r"[0-9]+")


class EntrypointError(RuntimeError):
    """入口无法安全继续时使用的可预期错误。"""

    def __init__(self, message: str, code: int) -> None:
        super().__init__(message)
        self.code = code


@dataclass(frozen=True)
class Identity:
    uid: int
    gid: int


@dataclass(frozen=True)
class DataPreparation:
    old_owner: tuple[int, int]
    changed_entries: int
    skipped_mounts: tuple[str, ...]

    @property
    def migrated(self) -> bool:
        return self.changed_entries > 0


def parse_id(value: str, name: str) -> int:
    """只接受容器 ID 可用的 ASCII 十进制数，拒绝 root 与 -1 哨兵值。"""
    if _DECIMAL.fullmatch(value) is None:
        raise EntrypointError(
            f"{name} 必须是 1..{MAX_ID} 范围内的十进制整数，当前为 {value!r}",
            EX_CONFIG,
        )
    number = int(value, 10)
    if not 1 <= number <= MAX_ID:
        raise EntrypointError(
            f"{name} 必须是 1..{MAX_ID} 范围内的十进制整数，当前为 {value!r}",
            EX_CONFIG,
        )
    return number


def _identity_value(
    environ: Mapping[str, str], primary: str, alias: str, default: int,
) -> int:
    primary_set = primary in environ
    alias_set = alias in environ
    if not primary_set and not alias_set:
        return default

    selected = parse_id(environ[primary], primary) if primary_set else None
    compatible = parse_id(environ[alias], alias) if alias_set else None
    if selected is not None and compatible is not None and selected != compatible:
        raise EntrypointError(
            f"{primary} 与 {alias} 同时设置但数值不同：{selected} != {compatible}",
            EX_CONFIG,
        )
    if selected is not None:
        return selected
    assert compatible is not None
    return compatible


def identity_from_environment(environ: Mapping[str, str]) -> Identity:
    """读取主变量；兼容 issue 原文的 UID/GID 别名，但不静默解决冲突。"""
    return Identity(
        uid=_identity_value(environ, "PEACH_UID", "UID", DEFAULT_UID),
        gid=_identity_value(environ, "PEACH_GID", "GID", DEFAULT_GID),
    )


def groups_for_drop(groups: Sequence[int], primary_gid: int) -> list[int]:
    """保留 Docker group_add 的补充组，但不把 root 组带过降权边界。"""
    return sorted({gid for gid in groups if gid not in {0, primary_gid}})


def _log(message: str) -> None:
    print(f"[docker] {message}", file=sys.stderr, flush=True)


def _lchown_changed(
    path: Path, current: os.stat_result, identity: Identity,
) -> bool:
    if (current.st_uid, current.st_gid) == (identity.uid, identity.gid):
        return False
    try:
        os.lchown(path, identity.uid, identity.gid)
    except OSError as exc:
        raise EntrypointError(f"/data 所有者迁移失败：{path}：{exc}", EX_DATA) from exc
    return True


def _raise_walk_error(error: OSError) -> None:
    raise error


def _mountinfo_field(value: str) -> str:
    """解码 mountinfo 中空白字符和反斜杠的八进制转义。"""
    return re.sub(r"\\([0-7]{3})", lambda match: chr(int(match.group(1), 8)), value)


def _nested_mounts(root: Path) -> set[Path]:
    """读取 Linux 挂载表；同一文件系统上的 bind mount 也必须在迁移时跳过。"""
    try:
        lines = MOUNTINFO_PATH.read_text(
            encoding="utf-8", errors="surrogateescape"
        ).splitlines()
    except OSError:
        return set()

    root = Path(root)
    nested: set[Path] = set()
    for line in lines:
        before, separator, _after = line.partition(" - ")
        if not separator:
            continue
        fields = before.split()
        if len(fields) < 5:
            continue
        mountpoint = Path(_mountinfo_field(fields[4]))
        if mountpoint != root:
            try:
                mountpoint.relative_to(root)
            except ValueError:
                continue
            nested.add(mountpoint)
    return nested


def prepare_data(root: Path, identity: Identity) -> DataPreparation:
    """仅在数据根仍属于旧身份时迁移整棵树，成功后最后再改数据根。"""
    try:
        root_stat = os.lstat(root)
    except OSError as exc:
        raise EntrypointError(f"无法读取数据目录 {root}：{exc}", EX_DATA) from exc
    if not stat.S_ISDIR(root_stat.st_mode):
        raise EntrypointError(f"数据目录不是目录：{root}", EX_DATA)

    old_owner = (root_stat.st_uid, root_stat.st_gid)
    if old_owner == (identity.uid, identity.gid):
        return DataPreparation(old_owner, 0, ())

    changed = 0
    skipped_mounts: list[str] = []
    nested_mounts = _nested_mounts(root)
    try:
        walker = os.walk(root, topdown=True, onerror=_raise_walk_error, followlinks=False)
        for current_root, directories, files in walker:
            current_path = Path(current_root)
            for name in list(directories):
                path = current_path / name
                if path in nested_mounts:
                    skipped_mounts.append(str(path))
                    directories.remove(name)
                    continue
                child = os.lstat(path)
                if stat.S_ISLNK(child.st_mode):
                    changed += _lchown_changed(path, child, identity)
                    directories.remove(name)
                    continue
                if child.st_dev != root_stat.st_dev:
                    skipped_mounts.append(str(path))
                    directories.remove(name)
                    continue
                changed += _lchown_changed(path, child, identity)
            for name in files:
                path = current_path / name
                if path in nested_mounts:
                    skipped_mounts.append(str(path))
                    continue
                child = os.lstat(path)
                if child.st_dev != root_stat.st_dev:
                    skipped_mounts.append(str(path))
                    continue
                changed += _lchown_changed(path, child, identity)
        changed += _lchown_changed(root, root_stat, identity)
    except EntrypointError:
        raise
    except OSError as exc:
        raise EntrypointError(f"/data 所有者迁移失败：{exc}", EX_DATA) from exc
    return DataPreparation(old_owner, changed, tuple(skipped_mounts))


def drop_privileges(identity: Identity) -> list[int]:
    """先固定补充组，再同时替换 gid/uid；不允许保留可回提权的身份。"""
    if os.geteuid() != 0:
        effective = Identity(os.getuid(), os.getgid())
        if effective != identity:
            raise EntrypointError(
                f"容器不是以 root 启动，实际身份 {effective.uid}:{effective.gid} "
                f"与要求的 {identity.uid}:{identity.gid} 不同",
                EX_IDENTITY,
            )
        return os.getgroups()

    groups = groups_for_drop(os.getgroups(), identity.gid)
    try:
        os.setgroups(groups)
        if hasattr(os, "setresgid"):
            os.setresgid(identity.gid, identity.gid, identity.gid)
        else:
            os.setgid(identity.gid)
        if hasattr(os, "setresuid"):
            os.setresuid(identity.uid, identity.uid, identity.uid)
        else:
            os.setuid(identity.uid)
    except OSError as exc:
        raise EntrypointError(
            f"无法降权到 {identity.uid}:{identity.gid}：{exc}", EX_IDENTITY
        ) from exc

    effective = Identity(os.getuid(), os.getgid())
    if effective != identity or os.geteuid() != identity.uid or os.getegid() != identity.gid:
        raise EntrypointError(
            f"降权后身份为 {effective.uid}:{effective.gid}，"
            f"要求 {identity.uid}:{identity.gid}",
            EX_IDENTITY,
        )
    return os.getgroups()


def verify_data_writable(root: Path) -> None:
    """用最终身份实际创建文件；os.access 无法覆盖 ACL 和全部挂载实现。"""
    try:
        with tempfile.NamedTemporaryFile(prefix=".peach-write-", dir=root):
            pass
    except OSError as exc:
        raise EntrypointError(f"/data 对目标身份不可写：{root}：{exc}", EX_DATA) from exc

    database = root / "database" / "ledger.db"
    try:
        database_stat = os.stat(database)
    except FileNotFoundError:
        return
    except OSError as exc:
        raise EntrypointError(
            f"无法检查已有账本权限：{database}：{exc}", EX_DATA
        ) from exc
    if not stat.S_ISREG(database_stat.st_mode):
        raise EntrypointError(f"已有账本不是普通文件：{database}", EX_DATA)
    try:
        descriptor = os.open(database, os.O_RDWR)
        os.close(descriptor)
    except OSError as exc:
        raise EntrypointError(
            f"已有账本对目标身份不可写：{database}：{exc}", EX_DATA
        ) from exc


def _media_status(path: Path) -> str:
    if not path.exists():
        return "missing"
    return "readable" if os.access(path, os.R_OK | os.X_OK) else "permission_denied"


def _render_status() -> str:
    nodes = sorted(glob.glob("/dev/dri/renderD*"))
    if not nodes:
        return "not-present"
    return ",".join(
        f"{node}:{'rw' if os.access(node, os.R_OK | os.W_OK) else 'denied'}"
        for node in nodes
    )


def _report(
    data_root: Path, identity: Identity, groups: Sequence[int], preparation: DataPreparation,
) -> None:
    root_stat = os.lstat(data_root)
    owner = f"{root_stat.st_uid}:{root_stat.st_gid}"
    mode = stat.filemode(root_stat.st_mode)
    if preparation.migrated:
        _log(
            f"/data owner {preparation.old_owner[0]}:{preparation.old_owner[1]} "
            f"-> {identity.uid}:{identity.gid}; changed={preparation.changed_entries}"
        )
    for path in preparation.skipped_mounts:
        _log(f"跳过 /data 内的嵌套挂载点：{path}")
    _log(
        f"effective uid={os.getuid()} gid={os.getgid()} groups={','.join(map(str, groups)) or '-'}; "
        f"/data owner={owner} mode={mode} writable=yes; "
        f"/media={_media_status(Path('/media'))}; render={_render_status()}"
    )


def _run(
    command: Sequence[str], environ: Mapping[str, str], data_root: Path,
) -> None:
    if not command:
        raise EntrypointError("没有可执行命令；镜像应通过 CMD 提供 Peach 启动命令", EX_CONFIG)

    identity = identity_from_environment(environ)
    if os.geteuid() == 0:
        preparation = prepare_data(data_root, identity)
    else:
        actual = Identity(os.getuid(), os.getgid())
        if actual != identity:
            raise EntrypointError(
                f"容器不是以 root 启动，实际身份 {actual.uid}:{actual.gid} "
                f"与要求的 {identity.uid}:{identity.gid} 不同",
                EX_IDENTITY,
            )
        preparation = DataPreparation((actual.uid, actual.gid), 0, ())

    groups = drop_privileges(identity)
    verify_data_writable(data_root)
    child_environment = dict(environ)
    child_environment["HOME"] = str(data_root)
    _report(data_root, identity, groups, preparation)
    try:
        os.execvpe(command[0], list(command), child_environment)
    except OSError as exc:
        raise EntrypointError(f"无法执行 {command[0]!r}：{exc}", EX_COMMAND) from exc


def main(
    argv: Sequence[str] | None = None,
    *,
    environ: Mapping[str, str] | None = None,
    data_root: Path = DATA_ROOT,
) -> int:
    command = tuple(sys.argv[1:] if argv is None else argv)
    environment = os.environ if environ is None else environ
    try:
        _run(command, environment, data_root)
    except EntrypointError as exc:
        _log(str(exc))
        return exc.code
    except OSError as exc:
        _log(f"入口初始化失败：{exc}")
        return EX_DATA
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
