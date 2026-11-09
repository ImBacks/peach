/* 服务端发来的界面文字（ADR-0156 第三条）。
 *
 * 一句话由三样组成：同一层的原文（成功在 `message`，失败在 `error`，FastAPI 默认的 `detail` 也认）、
 * 稳定的 `message_code` 与插值参数 `message_params`。有 code 且 `server` 命名空间里有这条译文就用译文，
 * 否则显示原文。还没迁移的接口只给原文，照样能显示。 */
import { hasTranslation, t } from '../i18n';

type Params = Record<string, unknown>;

/** 显示表里按 id 取的一项：`server:<键>` 有译文用译文，没有就用服务端给的原文。 */
export function serverLabel(key: string, fallback: string, params?: Params): string {
  const full = `server:${key}`;
  return key && hasTranslation(full) ? t(full, params ?? {}) : fallback;
}

/** 响应体里那句给人看的话；没有就是空串，由调用方按状态码给通用句。
 *
 *  没带 code 的原文只有中文才是给人看的话：服务端的界面文字以中文为源文，
 *  英文的是 `not found`、`unavailable` 这类协议值，不直接给人看。 */
export function serverText(payload: unknown): string {
  if (!payload || typeof payload !== 'object') return '';
  const body = payload as Record<string, unknown>;
  const found = ['message', 'detail', 'error'].map((key) => body[key]).find((value) => typeof value === 'string' && value);
  const original = typeof found === 'string' ? found : '';
  const code = typeof body.message_code === 'string' ? body.message_code : '';
  const params = body.message_params && typeof body.message_params === 'object' ? body.message_params as Params : {};
  return serverLabel(code, code || /[㐀-鿿]/.test(original) ? original : '', params);
}
