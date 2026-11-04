/* 无桌面部署的目录选择与位置回执，共用 BoardUI 弹层。 */
import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Heading } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { ModalFrame } from './modal-frame';
import { Help, ErrorText } from '../settings/section';
import { busyProps } from '../settings/busy-props';

export interface FolderReply {
  path: string | null;
  mode?: 'server' | 'manual';
  roots?: string[];
  parent?: string | null;
  directories?: { name: string; path: string }[];
  next_offset?: number | null;
  message?: string;
  editable?: boolean;
}

export interface FolderRequest {
  initial: string;
  purpose: 'media' | 'data';
  start?: boolean;
  offset?: number;
}
type RequestFolder = (body: FolderRequest) => Promise<FolderReply>;

function PathModalFrame(props: ComponentProps<typeof ModalFrame>) {
  return <ModalFrame {...props} portalContainer={document.querySelector('dialog[open]') || undefined} />;
}

function mountDialog<T>(render: (close: (value: T) => void) => ReactNode): Promise<T> {
  const host = document.createElement('div');
  host.className = 'peach-react';
  (document.querySelector('dialog[open]') || document.body).append(host);
  const root = createRoot(host);
  return new Promise(resolve => {
    const close = (value: T) => {
      root.unmount(); host.remove(); resolve(value);
    };
    root.render(render(close));
  });
}

export async function pickServerFolder(initial: string, request: RequestFolder, purpose: FolderRequest['purpose'] = 'media'): Promise<string | null> {
  const reply = await request({ initial, purpose, start: true });
  if (reply.mode === 'manual') return mountDialog<string | null>(close => <DataFolderDialog reply={reply} close={close} />);
  if (reply.mode !== 'server') return reply.path;
  return mountDialog<string | null>(close => <FolderDialog initial={reply} initialPath={initial} request={request} close={close} />);
}

function DataFolderDialog({ reply, close }: { reply: FolderReply; close(path: string | null): void }) {
  const [path, setPath] = useState(reply.path || '');
  return <PathModalFrame isOpen onOpenChange={open => { if (!open) close(null) }} width="form" surfaceClassName="peach-react">
    <div className="flex flex-col gap-4 p-5">
      <Heading slot="title" className="text-title-2-semibold text-text-primary">数据目录</Heading>
      <Help>{reply.message}</Help>
      <Input aria-label="服务端数据目录" value={path} onChange={setPath} isReadOnly={reply.editable === false} />
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={() => close(null)}>{reply.editable === false ? '关闭' : '取消'}</Button>
        {reply.editable !== false ? <Button disabled={!path.trim()} onClick={() => close(path.trim())}>使用此目录</Button> : null}
      </div>
    </div>
  </PathModalFrame>;
}

function FolderDialog({ initial, initialPath, request, close }: {
  initial: FolderReply; initialPath: string; request: RequestFolder; close(path: string | null): void;
}) {
  const [reply, setReply] = useState(initial);
  const [path, setPath] = useState(initialPath);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const active = useRef(false);
  const reading = useRef(false);
  const browse = async (next: string, offset = 0) => {
    if (reading.current) return;
    reading.current = true;
    setBusy(true); setError('');
    try {
      const result = await request({ initial: next, purpose: 'media', offset });
      if (!active.current) return;
      setReply(previous => offset && previous.path === result.path ? {
        ...result, directories: [...new Map([...(previous.directories || []), ...(result.directories || [])].map(item => [item.path, item])).values()],
      } : result);
      setPath(result.path || '');
    } catch (cause) {
      if (active.current) setError(cause instanceof Error ? cause.message : '目录读取失败，请重试');
    } finally {
      reading.current = false;
      if (active.current) setBusy(false);
    }
  };
  useEffect(() => {
    active.current = true;
    if (initialPath) void browse(initialPath);
    return () => { active.current = false };
  }, []);
  return <PathModalFrame isOpen onOpenChange={open => { if (!open) close(null) }} width="form" surfaceClassName="peach-react">
    <div className="flex flex-col gap-4 p-5">
      <Heading slot="title" className="text-title-2-semibold text-text-primary">选择服务端目录</Heading>
      <Help>这里显示 NAS 或容器内的路径，输入后按回车读取。新挂载目录也可以直接填在媒体目录输入框中。</Help>
      <Input aria-label="服务端目录路径" value={path} onChange={setPath} onKeyDown={event => {
        if (event.key === 'Enter' && !event.nativeEvent.isComposing) { event.preventDefault(); void browse(path) }
      }} />
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" {...busyProps(busy)} onClick={() => void browse('')}>挂载目录</Button>
        {reply.parent ? <Button variant="secondary" {...busyProps(busy)} onClick={() => void browse(reply.parent!)}>上一级</Button> : null}
      </div>
      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto">
        {(reply.path ? reply.directories || [] : (reply.roots || []).map(root => ({ name: root, path: root }))).map(item =>
          <Button key={item.path} variant="ghost" className="min-w-0 break-all" {...busyProps(busy)} onClick={() => void browse(item.path)}>{item.name}</Button>)}
      </div>
      {busy ? <p role="status">正在读取目录</p> : null}
      {!busy && reply.path && !reply.directories?.length ? <Help>{reply.next_offset != null ? '本批条目中没有子目录，可以继续读取。' : '这个目录下没有可选择的子目录。'}</Help> : null}
      {reply.path && reply.next_offset != null ? <Button variant="secondary" {...busyProps(busy)} onClick={() => void browse(reply.path!, reply.next_offset!)}>继续读取</Button> : null}
      {!reply.roots?.length ? <Help>尚未配置媒体挂载目录，请先手动填写容器内的路径。</Help> : null}
      {error ? <ErrorText>{error}</ErrorText> : null}
      <div className="flex justify-end gap-2">
        <Button variant="secondary" onClick={() => close(null)}>取消</Button>
        <Button disabled={!reply.path || path !== reply.path} {...busyProps(busy)} onClick={() => {
          if (!reading.current && reply.path && path === reply.path) close(reply.path);
        }}>选择此目录</Button>
      </div>
    </div>
  </PathModalFrame>;
}

export interface ServerPathReply { path: string; container?: boolean; media_root?: string; relative_path?: string }

export function showServerPath(reply: ServerPathReply): Promise<void> {
  return mountDialog<void>(close => <PathModalFrame isOpen onOpenChange={open => { if (!open) close() }} width="form" surfaceClassName="peach-react">
    <div className="flex flex-col gap-4 p-5">
      <Heading slot="title" className="text-title-2-semibold text-text-primary">查看文件位置</Heading>
      <Help>{reply.container ? '在 NAS 文件管理器中打开挂载给 Peach 的共享文件夹，再按目录内位置查找。容器路径与 NAS 共享路径可能不同。' : '文件位于运行 Peach 的服务器上，可以复制路径后在服务器中查找。'}</Help>
      <Input label={reply.container ? '容器内路径' : '服务端路径'} aria-label="服务端文件位置" value={reply.path} isReadOnly onFocus={event => event.target.select()} />
      {reply.media_root ? <Input label="媒体目录" value={reply.media_root} isReadOnly onFocus={event => event.target.select()} /> : null}
      {reply.relative_path ? <Input label="目录内位置" value={reply.relative_path} isReadOnly onFocus={event => event.target.select()} /> : null}
      <div className="flex justify-end"><Button onClick={() => close()}>关闭</Button></div>
    </div>
  </PathModalFrame>);
}
