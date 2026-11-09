/** 外网连不上时的通栏横幅：读服务端按 Peach 代理探测的快照，联网后自己消失。 */
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../api';
import { t } from '../i18n';

export interface NetworkStatus { state: 'checking' | 'online' | 'offline' | 'unknown'; checked_at: number | null }

export const NETWORK_STATUS_KEY = ['network-status'] as const;
export const NETWORK_OFFLINE_TEXT = t('shell:networkBanner.offline');

/** 服务端联网时十分钟才复查一次，断网或刚开始探测时一分钟一次；页面跟着它的节奏读。 */
export function networkPollInterval(data?: NetworkStatus): number {
  return data?.state === 'online' ? 120_000 : 30_000;
}

export function NetworkBanner() {
  const query = useQuery({
    queryKey: NETWORK_STATUS_KEY,
    queryFn: ({ signal }) => apiGet<NetworkStatus>('/api/network-status', signal),
    refetchInterval: current => networkPollInterval(current.state.data),
    retry: false,
  });
  const host = document.querySelector('[data-network-banner]');
  if (query.data?.state !== 'offline' || !host) return null;
  return createPortal(
    <aside className="ui-project-banner ui-project-banner-warning" role="status" data-network-offline="">
      <div><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-alert" /></svg><p>{NETWORK_OFFLINE_TEXT}</p></div>
      <a href="/settings/network#peachProxy">{t('shell:networkBanner.checkProxy')}</a>
    </aside>,
    host,
  );
}
