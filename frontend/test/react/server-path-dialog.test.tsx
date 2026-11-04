import { act } from 'react';
import { expect, it, vi } from 'vitest';
import { pickServerFolder, showServerPath } from '../../src/react/components/server-path-dialog';
import { buttonNamed, click, flush, type } from './render';

it('桌面选择直接沿用系统结果，服务端选择支持取消与只读浏览', async () => {
  expect(await pickServerFolder('', vi.fn().mockResolvedValue({ path: '/desktop' }))).toBe('/desktop');
  const request = vi.fn().mockResolvedValueOnce({ mode: 'server', path: null, roots: ['/media'], directories: [] })
    .mockResolvedValue({ mode: 'server', path: '/media', roots: ['/media'], directories: [] });
  let selected!: Promise<string | null>;
  await act(async () => { selected = pickServerFolder('', request) });
  await flush();
  expect(buttonNamed('选择此目录')?.disabled).toBe(true);
  await click(buttonNamed('/media'));
  expect(request).toHaveBeenLastCalledWith('/media');
  await click(buttonNamed('选择此目录'));
  expect(await selected).toBe('/media');
  await act(async () => { selected = pickServerFolder('', request) });
  await click(buttonNamed('取消'));
  expect(await selected).toBeNull();
});

it('手输路径须先读取成功才能选择，失败保留当前目录', async () => {
  const request = vi.fn().mockResolvedValueOnce({ mode: 'server', path: '/media', roots: ['/media'], directories: [] })
    .mockRejectedValue(new Error('只能浏览媒体目录'));
  let selected!: Promise<string | null>;
  await act(async () => { selected = pickServerFolder('/media', request) });
  await type(document.querySelector<HTMLInputElement>('input[aria-label="服务端目录路径"]'), '/etc');
  expect(buttonNamed('选择此目录')?.disabled).toBe(true);
  await click(buttonNamed('读取目录'));
  expect(document.body.textContent).toContain('只能浏览媒体目录');
  expect(buttonNamed('选择此目录')?.disabled).toBe(true);
  await click(buttonNamed('取消'));
  await selected;
});

it('服务端位置提供可选中的路径，不声称已打开桌面', async () => {
  let done!: Promise<void>;
  await act(async () => { done = showServerPath('/media/影片.mp4') });
  const input = document.querySelector<HTMLInputElement>('input[aria-label="服务端文件位置"]')!;
  expect(input.value).toBe('/media/影片.mp4');
  expect(input.readOnly).toBe(true);
  await click(buttonNamed('关闭'));
  await done;
  expect(document.querySelector('[role="dialog"]')).toBeNull();
});
