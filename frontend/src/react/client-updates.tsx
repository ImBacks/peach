/** 应用级更新提示读取本机快照；刷新由用户明确触发。 */
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { LinkButton } from '@/components/base/buttons/link-button';

import { apiGet } from '../api';
import type { ReleaseState, UpdateJob } from './bundle';
import { t } from '../i18n';

export interface ClientUpdates {
  runtime: { version: string; build_id: string };
  release: ReleaseState;
  update_job: UpdateJob;
  userscript: { version: string; minimum_version: string; install_url: string };
  repairs: { state: string; available?: boolean; message?: string; items: {
    id: string; label: string; state: string; changed?: Record<string, number>;
    pending?: number; failed?: number; queued?: number; review_count?: number;
  }[] };
}

export const CLIENT_UPDATES_INTERVAL = 120_000;
const REQUEST_TIMEOUT = 15_000;
const visible = () => document.visibilityState !== 'hidden';
const ACTIVE = new Set(['downloading', 'verifying', 'extracting', 'preparing', 'restarting', 'installing']);
export const RELEASE_UPDATES_PATH = '/settings/maintenance#releaseUpdates';

function pageRuntime(): ClientUpdates['runtime'] | null {
  try {
    const value = JSON.parse(document.getElementById('peach-client-runtime')?.textContent || 'null');
    return typeof value?.version === 'string' && typeof value?.build_id === 'string'
      ? { version: value.version, build_id: value.build_id } : null;
  } catch { return null; }
}

/** 文档携带加载时的运行标记，后台标签和首次断连也保留同一份基线。 */
export function useClientUpdates() {
  const baseline = useRef<ClientUpdates['runtime'] | null>(pageRuntime());
  const [snapshot, setSnapshot] = useState<ClientUpdates | null>(null);
  useEffect(() => {
    let disposed = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let request: AbortController | undefined;
    const poll = async () => {
      if (disposed || !visible()) return;
      const controller = new AbortController();
      request = controller;
      const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
      controller.signal.addEventListener('abort', () => clearTimeout(timeout), { once: true });
      try {
        const next = await apiGet<ClientUpdates>('/api/client-updates', controller.signal);
        if (!disposed && !controller.signal.aborted && typeof next?.runtime?.version === 'string'
          && typeof next.runtime.build_id === 'string') {
          baseline.current ??= { ...next.runtime };
          setSnapshot(next);
        }
      } catch {
        // 服务重启、断连和未取得快照都保留当前提示。
      } finally {
        clearTimeout(timeout);
        if (request === controller) {
          request = undefined;
          if (!disposed && visible()) timer = setTimeout(poll, CLIENT_UPDATES_INTERVAL);
        }
      }
    };
    const visibility = () => {
      clearTimeout(timer);
      request?.abort();
      request = undefined;
      if (visible()) void poll();
    };
    document.addEventListener('visibilitychange', visibility);
    document.addEventListener('peach:client-updates', visibility);
    void poll();
    return () => {
      disposed = true;
      clearTimeout(timer);
      request?.abort();
      document.removeEventListener('visibilitychange', visibility);
      document.removeEventListener('peach:client-updates', visibility);
    };
  }, []);
  const refresh = !!snapshot && !!baseline.current && (snapshot.runtime.version !== baseline.current.version
    || snapshot.runtime.build_id !== baseline.current.build_id);
  return { snapshot, refresh };
}

/** 横幅复用项目 Banner，动作使用 BoardUI；关闭只作用于当前状态。 */
export function ClientUpdateBanner({ navigate }: { navigate(path: string): void }) {
  const { snapshot, refresh } = useClientUpdates();
  const [dismissed, setDismissed] = useState('');
  const host = document.querySelector('[data-network-banner]');
  if (!snapshot || !host) return null;
  const { release, update_job: job, runtime } = snapshot;
  const kind = refresh ? 'refresh' : job.state === 'ready' ? 'ready' : ACTIVE.has(job.state) ? 'preparing'
    : release.state === 'available' && release.latest_version ? 'available' : null;
  if (!kind) return null;
  const version = job.state === 'ready' || ACTIVE.has(job.state) ? job.version || release.latest_version : release.latest_version;
  const identity = JSON.stringify(kind === 'refresh' ? [kind, runtime.version, runtime.build_id] : [kind, version]);
  if (identity === dismissed) return null;
  const message = kind === 'refresh' ? t('shell:clientUpdate.refreshReady')
    : kind === 'ready' ? t('shell:clientUpdate.restartReady')
      : kind === 'preparing' ? t('shell:clientUpdate.preparing') : t('shell:clientUpdate.available');
  const openUpdates = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(RELEASE_UPDATES_PATH);
  };
  return createPortal(
    <aside key={identity} className="ui-project-banner peach-react" role="status" data-client-update={kind}>
      <div><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-info" /></svg>
        <p><span data-copy-key={`clientUpdates.${kind}.message`}>{message}</span>
          {kind !== 'refresh' && version ? <span data-copy-ignore=""> Peach {version}</span> : null}</p></div>
      <div className="flex-wrap">
        {kind === 'refresh'
          ? <LinkButton variant="secondary" size="small" onClick={() => window.location.reload()}
            data-copy-key="clientUpdates.refresh.action">{t('shell:clientUpdate.refreshPage')}</LinkButton>
          : <LinkButton variant="secondary" size="small" href={RELEASE_UPDATES_PATH} onClick={openUpdates}
            data-copy-key={`clientUpdates.${kind}.action`}>{kind === 'preparing' ? t('shell:clientUpdate.viewProgress') : t('shell:clientUpdate.viewUpdate')}</LinkButton>}
        <LinkButton variant="secondary" size="small" onClick={() => setDismissed(identity)}
          data-copy-key={`clientUpdates.${kind}.later`}>{t('shell:clientUpdate.later')}</LinkButton>
      </div>
    </aside>, host,
  );
}
