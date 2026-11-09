/* 服务端文字的解析（ADR-0156 第三条）：按 message_code 取译文，没有译文回落到原文；
 * 取数入口换好的原因再经过 requestErrorMessage 不会被按状态码换掉。英文界面才看得出这两件事，所以按英文加载。 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { SETTINGS_KEY } from '../src/settings-key';
import enServer from '../src/locales/en/server.json' with { type: 'json' };
import enShell from '../src/locales/en/shell.json' with { type: 'json' };

async function load(language: 'en' | 'zh-CN') {
  vi.resetModules();
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ interfaceLanguage: language }));
  vi.doMock('../src/locales/en/server.json', () => ({
    default: { ...enServer, sample: { withParams: 'Peach found {{count}} files in {{folder}}.' } },
  }));
  const [server, request, api, core] = await Promise.all([
    import('../src/core/server-text'), import('../src/core/request-error'), import('../src/api'), import('../src/core'),
  ]);
  return { ...server, ...request, ...api, legacyApi: core.api };
}

const respond = (status: number, body: unknown) => vi.fn(async () => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json' },
}));

afterEach(() => {
  localStorage.removeItem(SETTINGS_KEY);
  vi.unstubAllGlobals();
  vi.doUnmock('../src/locales/en/server.json');
  vi.resetModules();
});

describe('serverText', () => {
  it('有 code 且有译文时用当前界面语言，参数填进占位', async () => {
    const { serverText } = await load('en');
    expect(serverText({ error: '这个地址下没有页面。', message_code: 'http.notFound', message_params: {} }))
      .toBe(enServer.http.notFound);
    expect(serverText({ message: '在 R:\\media 找到 3 个文件。', message_code: 'sample.withParams', message_params: { count: 3, folder: 'R:\\media' } }))
      .toBe('Peach found 3 files in R:\\media.');
  });

  it('code 没有译文时显示服务端原文，不显示键名', async () => {
    const { serverText, serverLabel } = await load('en');
    expect(serverText({ error: '整理路径不在所选来源内', message_code: 'organize.notYetTranslated' })).toBe('整理路径不在所选来源内');
    expect(serverLabel('release.installation.unknown', '源码运行')).toBe('源码运行');
  });

  it('没带 code 的原文只有中文才显示，英文协议值交给状态码', async () => {
    const { serverText } = await load('en');
    expect(serverText({ error: '媒体盘没有挂载' })).toBe('媒体盘没有挂载');
    expect(serverText({ error: 'not found' })).toBe('');
    expect(serverText(null)).toBe('');
  });
});

describe('取数失败的原因', () => {
  it('apiGet 抛出的译文经过页面再处理一次仍是译文', async () => {
    const { apiGet, ApiError, requestErrorMessage, errorMessage } = await load('en');
    vi.stubGlobal('fetch', respond(404, { error: '这个地址下没有页面。', message_code: 'http.notFound', message_params: {} }));
    const error = await apiGet('/api/missing').catch((cause: unknown) => cause);
    expect(error).toBeInstanceOf(ApiError);
    expect((error as Error).message).toBe(enServer.http.notFound);
    expect(requestErrorMessage(error)).toBe(enServer.http.notFound);
    expect(errorMessage(error)).toBe(enServer.http.notFound);
  });

  it('apiSend 收到英文协议值时按状态码给通用句', async () => {
    const { apiSend } = await load('en');
    vi.stubGlobal('fetch', respond(404, { error: 'no such id' }));
    const error = await apiSend('/api/items/1', {}).catch((cause: unknown) => cause);
    expect((error as Error).message).toBe(enShell.requestError.notFound);
  });

  it('遗留层的 api() 走同一个解析函数，再处理一次也不变', async () => {
    const { legacyApi, requestErrorMessage } = await load('en');
    vi.stubGlobal('fetch', respond(500, { error: '服务处理失败，请导出诊断报告', message_code: 'http.serverError', error_id: 'abc' }));
    const error = await legacyApi('/api/boom').catch((cause: unknown) => cause);
    expect((error as Error).message).toBe(enServer.http.serverError);
    expect(requestErrorMessage(error)).toBe(enServer.http.serverError);
  });

  it('页面自己的英文句子原样显示，运行时异常与 Python 异常行换成通用句', async () => {
    const { requestErrorMessage } = await load('en');
    expect(requestErrorMessage("Couldn't load the list.")).toBe("Couldn't load the list.");
    expect(requestErrorMessage(new TypeError('Failed to fetch'))).toBe(enShell.requestError.unreachable);
    expect(requestErrorMessage(new SyntaxError('Unexpected token < in JSON'))).toBe(enShell.requestError.fallback);
    expect(requestErrorMessage('ConnectionError: HTTPSConnectionPool(host=example.com)')).toBe(enShell.requestError.fallback);
    expect(requestErrorMessage('request failed', 503)).toBe(enShell.requestError.unavailable);
  });
});
