/* 无桌面部署的目录选择与位置回执，共用 BoardUI 弹层。 */
import { useState, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Heading } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { ModalFrame } from './modal-frame';
import { Help, ErrorText } from '../settings/section';

export interface FolderReply {
  path: string | null;
  mode?: 'server';
  roots?: string[];
  parent?: string | null;
  directories?: { name: string; path: string }[];
  truncated?: boolean;
}

type RequestFolder = (initial: string) => Promise<FolderReply>;

function mountDialog<T>(render: (close: (value: T) => void) => ReactNode): Promise<T> {
  const host = document.createElement('div');
  host.className = 'peach-react';
  document.body.append(host);
  const root = createRoot(host);
  return new Promise(resolve => {
    const close = (value: T) => {
      root.unmount(); host.remove(); resolve(value);
    };
    root.render(render(close));
  });
}

export async function pickServerFolder(initial: string, request: RequestFolder): Promise<string | null> {
  const reply = await request(initial);
  if (reply.mode !== 'server') return reply.path;
  return mountDialog<string | null>(close => <FolderDialog initial={reply} request={request} close={close} />);
}

function FolderDialog({ initial, request, close }: {
  initial: FolderReply; request: RequestFolder; close(path: string | null): void;
}) {
  const [reply, setReply] = useState(initial);
  const [path, setPath] = useState(initial.path || '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const browse = async (next: string) => {
    if (busy) return;
    setBusy(true); setError('');
    try {
      const result = await request(next);
      setReply(result); setPath(result.path || '');
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : '目录读取失败，请重试');
    } finally { setBusy(false) }
  };
  return <ModalFrame isOpen onOpenChange={open => { if (!open) close(null) }} width="form" surfaceClassName="peach-react">
    <div className="flex flex-col gap-4 p-5">
      <Heading slot="title" className="text-title-2-semibold text-text-primary">选择服务端目录</Heading>
      <Help>这里显示 NAS 或容器内的路径。新挂载目录也可以直接填在媒体目录输入框中。</Help>
      <Input aria-label="服务端目录路径" value={path} onChange={setPath} />
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" isDisabled={busy} onClick={() => void browse(path)}>读取目录</Button>
        <Button variant="secondary" isDisabled={busy} onClick={() => void browse('')}>挂载目录</Button>
        {reply.parent ? <Button variant="secondary" isDisabled={busy} onClick={() => void browse(reply.parent!)}>上一级</Button> : null}
      </div>
      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto">
        {(reply.path ? reply.directories || [] : (reply.roots || []).map(root => ({ name: root, path: root }))).map(item =>
          <Button key={item.path} variant="ghost" className="min-w-0 break-all" isDisabled={busy} onClick={() => void browse(item.path)}>{item.name}</Button>)}
      </div>
      {busy ? <p role="status">正在读取目录</p> : null}
      {!busy && reply.path && !reply.directories?.length ? <Help>这个目录下没有可选择的子目录。</Help> : null}
      {reply.truncated ? <Help>仅显示前 500 个条目中的目录。可在上方填写完整路径继续读取。</Help> : null}
      {!reply.roots?.length ? <Help>尚未配置媒体挂载目录，请先手动填写容器内的路径。</Help> : null}
      {error ? <ErrorText>{error}</ErrorText> : null}
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={() => close(null)}>取消</Button>
        <Button isDisabled={busy || !reply.path || path !== reply.path} onClick={() => close(reply.path)}>选择此目录</Button>
      </div>
    </div>
  </ModalFrame>;
}

export function showServerPath(path: string): Promise<void> {
  return mountDialog<void>(close => <ModalFrame isOpen onOpenChange={open => { if (!open) close() }} width="form" surfaceClassName="peach-react">
    <div className="flex flex-col gap-4 p-5">
      <Heading slot="title" className="text-title-2-semibold text-text-primary">服务端文件位置</Heading>
      <Help>文件位于 NAS 或容器中。复制此路径后，可在 NAS 文件管理器中按挂载映射查找。</Help>
      <Input aria-label="服务端文件位置" value={path} isReadOnly onFocus={event => event.target.select()} />
      <div className="flex justify-end"><Button onClick={() => close()}>关闭</Button></div>
    </div>
  </ModalFrame>);
}
