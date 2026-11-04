"""生成可导入 NAS 容器管理器的 Compose；不连接 Docker、不启动或覆盖已有部署。"""
from __future__ import annotations

import argparse
import ipaddress
import json
from pathlib import Path, PurePosixPath
import re


def _quoted(value: str) -> str:
    # YAML 接受 JSON 字符串；Compose 还会处理美元符号，必须独立转义。
    return json.dumps(value.replace('$', '$$'), ensure_ascii=False)


def compose(*, bind: str, media: str, port: int = 8900,
            image: str = 'longmeidao/peach:edge', hostname: str = 'peach-nas',
            render_device: str = '', render_gid: int | None = None,
            prepare_render: bool = False) -> str:
    address = ipaddress.ip_address(bind)
    if address.is_unspecified or address.is_multicast or address.is_link_local:
        raise ValueError('请填写 NAS 的局域网 IP 或回环地址')
    if not 1 <= port <= 65535:
        raise ValueError('端口应在 1 到 65535 之间')
    if not PurePosixPath(media).is_absolute() or any(c in media for c in '\r\n\0'):
        raise ValueError('请填写宿主机上的媒体目录绝对路径')
    if not re.fullmatch(r'[a-zA-Z0-9][a-zA-Z0-9.-]{0,62}', hostname):
        raise ValueError('主机名只接受字母、数字、点和连字符')
    if not image or any(c.isspace() or c == '\0' for c in image):
        raise ValueError('镜像名称无效')
    if render_device and not re.fullmatch(r'/dev/dri/renderD(?:12[89]|1[3-8][0-9]|19[01])', render_device):
        raise ValueError('请选择 /dev/dri 下的渲染节点 renderD128 到 renderD191')
    if render_gid is not None and (type(render_gid) is not int or not 0 <= render_gid < 2**32 - 1):
        raise ValueError('渲染节点 GID 无效')
    if (render_gid is not None or prepare_render) and not render_device:
        raise ValueError('设置核显权限时须同时指定渲染节点')
    if render_device and sum((render_gid is not None, prepare_render)) != 1:
        raise ValueError('核显请选择额外组 GID，或选择容器内设备权限准备，不能同时使用')
    endpoint = f'[{address}]' if address.version == 6 else str(address)
    lines = ['services:', '  peach:', f'    image: {_quoted(image)}',
             f'    hostname: {_quoted(hostname)}', '    init: true',
             '    restart: unless-stopped', '    stop_grace_period: 75s',
             '    ports:', f'      - {_quoted(f"{endpoint}:{port}:8900")}',
             '    volumes:', '      - peach-data:/data', '      - type: bind',
             f'        source: {_quoted(media)}', '        target: /media',
             '        read_only: true', '        bind:', '          propagation: rslave',
             '          create_host_path: false']
    if render_device:
        lines.extend(['    devices:', f'      - {_quoted(render_device + ":" + render_device)}',
                      '    environment:', f'      PEACH_VAAPI_DEVICE: {_quoted(render_device)}'])
        if prepare_render:
            lines.extend(['    user: "0:0"',
                          '    entrypoint: ["python", "-m", "peach.docker_vaapi"]'])
        else:
            lines.extend(['    group_add:', f'      - "{render_gid}"'])
    return '\n'.join([*lines, 'volumes:', '  peach-data:', ''])


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--bind', required=True, help='NAS 的局域网 IP')
    parser.add_argument('--media', required=True, help='宿主机已有的媒体目录，容器中为 /media，只读')
    parser.add_argument('--port', type=int, default=8900)
    parser.add_argument('--image', default='longmeidao/peach:edge')
    parser.add_argument('--hostname', default='peach-nas', help='保持此名称可在重建容器后恢复任务')
    parser.add_argument('--render-device', default='')
    permission = parser.add_mutually_exclusive_group()
    permission.add_argument('--render-gid', type=int)
    permission.add_argument('--prepare-render', action='store_true',
                            help='为 0600 节点准备容器内权限，再以 peach 用户运行；不修改宿主机节点')
    parser.add_argument('--output', type=Path, help='保存为新文件；已存在时拒绝覆盖，默认写到标准输出')
    args = vars(parser.parse_args(argv))
    output = args.pop('output')
    try:
        result = compose(**args)
        if output is None:
            print(result, end='')
        else:
            with output.open('x', encoding='utf-8') as stream:
                stream.write(result)
    except (ValueError, OSError) as error:
        parser.error(str(error))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
