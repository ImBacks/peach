import { act } from 'react';
import { expect, it, vi } from 'vitest';

import { ClientUpdateBanner, CLIENT_UPDATES_INTERVAL, RELEASE_UPDATES_PATH, type ClientUpdates } from '../../src/react/client-updates';
import { buttonNamed, click, linkNamed, mountRoot, pending, settle } from './render';

const current: ClientUpdates = {
  runtime: { version: '0.9.0', build_id: 'build-a' },
  release: { current_version: '0.9.0', latest_version: '0.9.0', channel: '测试版', installation: '独立测试包', installation_code: 'standalone',
    state: 'current', message: '已是最新测试版。', release_url: 'https://example.test/releases' },
  update_job: { state: 'idle', progress: 0 },
  userscript: { version: '0.8.0', minimum_version: '0.7.0', install_url: '/peach.user.js' },
  repairs: { state: 'ready', items: [] },
};

function available(version = '0.10.0'): ClientUpdates {
  return { ...current, release: { ...current.release, latest_version: version, state: 'available' } };
}

function response(body: ClientUpdates) {
  return { ok: true, json: async () => body };
}

function visible(state: DocumentVisibilityState) {
  vi.spyOn(document, 'visibilityState', 'get').mockReturnValue(state);
}

async function render(initial = current, firstError = false, state: DocumentVisibilityState = 'visible') {
  vi.useFakeTimers();
  visible(state);
  const fetcher = vi.fn(async (_path: string, _init?: RequestInit) => response(initial));
  if (firstError) fetcher.mockRejectedValueOnce(new Error('连接失败'));
  vi.stubGlobal('fetch', fetcher);
  const slot = document.createElement('div');
  slot.setAttribute('data-network-banner', '');
  document.body.append(slot);
  const navigate = vi.fn();
  const root = await mountRoot(<ClientUpdateBanner navigate={navigate} />);
  await settle();
  return { ...root, slot, fetcher, navigate };
}

async function tick() {
  await act(async () => { await vi.advanceTimersByTimeAsync(CLIENT_UPDATES_INTERVAL); });
  await settle();
}

function seedRuntime() {
  const marker = document.createElement('script');
  marker.id = 'peach-client-runtime';
  marker.type = 'application/json';
  marker.textContent = JSON.stringify(current.runtime);
  document.body.append(marker);
}

it('后台首次打开的页面按文档标记识别升级，恢复可见后提示刷新', async () => {
  seedRuntime();
  const { slot, fetcher } = await render({ ...current, runtime: { ...current.runtime, build_id: 'build-b' } }, false, 'hidden');
  expect(fetcher).not.toHaveBeenCalled();
  visible('visible');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  await settle();
  expect(slot.querySelector('[data-client-update="refresh"]')).not.toBeNull();
});

it('首次断连恢复后按文档标记提示刷新', async () => {
  seedRuntime();
  const { slot, fetcher } = await render(current, true);
  fetcher.mockResolvedValue(response({ ...current, runtime: { ...current.runtime, build_id: 'build-b' } }));
  await tick();
  expect(slot.querySelector('[data-client-update="refresh"]')).not.toBeNull();
});

it('首次读取只保存运行基线，发行版可更新时提供现有设置入口', async () => {
  const reload = vi.spyOn(window.location, 'reload').mockImplementation(() => {});
  const { slot, fetcher, navigate } = await render(available());
  expect(slot.querySelector('[data-client-update]')?.getAttribute('data-client-update')).toBe('available');
  expect(slot.textContent).toContain('有可用更新。');
  expect(slot.textContent).toContain('Peach 0.10.0');
  expect(linkNamed('查看更新', slot)?.getAttribute('href')).toBe(RELEASE_UPDATES_PATH);
  await click(linkNamed('查看更新', slot));
  expect(navigate).toHaveBeenCalledWith(RELEASE_UPDATES_PATH);
  expect(fetcher.mock.calls.map(([path]) => path)).toEqual(['/api/client-updates']);
  expect(reload).not.toHaveBeenCalled();
});

it.each([
  { version: '0.10.0', build_id: 'build-a' },
  { version: '0.9.0', build_id: 'build-b' },
])('运行标记变为 %j 时等待用户点击刷新', async (runtime) => {
  const reload = vi.spyOn(window.location, 'reload').mockImplementation(() => {});
  const { slot, fetcher } = await render();
  expect(slot.childElementCount).toBe(0);
  fetcher.mockResolvedValue(response({ ...current, runtime }));
  await tick();
  expect(slot.querySelector('[data-client-update="refresh"]')).not.toBeNull();
  expect(reload).not.toHaveBeenCalled();
  await click(buttonNamed('刷新页面', slot));
  expect(reload).toHaveBeenCalledTimes(1);
});

it('稍后隐藏相同更新，发行版本和准备状态变化时重新提示', async () => {
  const { slot, fetcher } = await render(available());
  await click(buttonNamed('稍后', slot));
  await tick();
  expect(slot.childElementCount).toBe(0);
  fetcher.mockResolvedValue(response(available('0.11.0')));
  await tick();
  expect(slot.textContent).toContain('Peach 0.11.0');
  await click(buttonNamed('稍后', slot));
  fetcher.mockResolvedValue(response({ ...available('0.11.0'), update_job: { state: 'ready', progress: 100, version: '0.11.0' } }));
  await tick();
  expect(slot.querySelector('[data-client-update="ready"]')).not.toBeNull();
  expect(slot.textContent).toContain('可重启安装');
});

it('刷新提示稍后保持关闭，新运行标记重新提示', async () => {
  const { slot, fetcher } = await render();
  fetcher.mockResolvedValue(response({ ...current, runtime: { ...current.runtime, build_id: 'build-b' } }));
  await tick();
  await click(buttonNamed('稍后', slot));
  await tick();
  expect(slot.childElementCount).toBe(0);
  fetcher.mockResolvedValue(response({ ...current, runtime: { ...current.runtime, build_id: 'build-c' } }));
  await tick();
  expect(slot.querySelector('[data-client-update="refresh"]')).not.toBeNull();
});

it('后台失败保持安静并保留已取得的更新提示', async () => {
  const { slot, fetcher } = await render(available());
  fetcher.mockRejectedValue(new Error('连接失败'));
  await tick();
  expect(slot.textContent).toContain('有可用更新');
  expect(slot.querySelector('[role="alert"]')).toBeNull();
  expect(slot.textContent).not.toContain('已是最新');
});

it('未取得首次快照时不显示成功状态，恢复后建立运行基线', async () => {
  const { slot, fetcher } = await render(current, true);
  expect(slot.childElementCount).toBe(0);
  fetcher.mockResolvedValue(response({ ...current, runtime: { ...current.runtime, build_id: 'build-b' } }));
  await tick();
  expect(slot.childElementCount).toBe(0);
});

it('页面隐藏停止轮询，恢复可见立即读取且只请求本机快照', async () => {
  const { fetcher } = await render();
  visible('hidden');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  await tick();
  expect(fetcher).toHaveBeenCalledTimes(1);
  visible('visible');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  await settle();
  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(fetcher.mock.calls.every(([path]) => path === '/api/client-updates')).toBe(true);
});

it('卸载中止请求，迟到响应不再显示提示，监听和定时器释放', async () => {
  const { slot, fetcher, unmount } = await render();
  const late = pending<ReturnType<typeof response>>();
  fetcher.mockImplementation(async () => late.answer);
  visible('visible');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  const signal = fetcher.mock.calls.at(-1)?.[1]?.signal;
  expect(signal?.aborted).toBe(false);
  await unmount();
  expect(signal?.aborted).toBe(true);
  await late.release(response(available()));
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  await tick();
  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(slot.childElementCount).toBe(0);
});

it('隐藏中止在途请求，恢复后忽略迟到快照并立即读取当前状态', async () => {
  const { slot, fetcher } = await render();
  const late = pending<ReturnType<typeof response>>();
  fetcher.mockImplementationOnce(async () => late.answer);
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  const signal = fetcher.mock.calls.at(-1)?.[1]?.signal;
  visible('hidden');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  expect(signal?.aborted).toBe(true);
  await late.release(response(available()));
  expect(slot.childElementCount).toBe(0);
  visible('visible');
  await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
  expect(fetcher).toHaveBeenCalledTimes(3);
  expect(slot.childElementCount).toBe(0);
});

it('准备更新中的稍后选择贯穿下载、校验和解压，准备好时重新提示', async () => {
  const preparing = { ...available(), update_job: { state: 'downloading', progress: 10, version: '0.10.0' } };
  const { slot, fetcher } = await render(preparing);
  expect(linkNamed('查看进度', slot)).not.toBeNull();
  await click(buttonNamed('稍后', slot));
  for (const state of ['verifying', 'extracting']) {
    fetcher.mockResolvedValue(response({ ...preparing, update_job: { ...preparing.update_job, state } }));
    await tick();
    expect(slot.childElementCount).toBe(0);
  }
  fetcher.mockResolvedValue(response({ ...preparing, update_job: { ...preparing.update_job, state: 'ready' } }));
  await tick();
  expect(slot.textContent).toContain('可重启安装');
});
