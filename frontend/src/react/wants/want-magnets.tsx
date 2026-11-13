/* 卡片下方的磁链候选。可见时查询，提交复用云下载的幂等与失败分类。 */
import { useEffect, useMemo, useRef, useState, type ComponentType, type ReactNode } from 'react';
import { RiLink, RiHardDrive2Line, RiFileList2Line,
  RiCalendarLine, RiPriceTag3Line, RiExternalLinkLine, RiFileCopyLine, RiCloudLine, RiRefreshLine } from '@remixicon/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, ButtonLink } from '@/components/base/buttons/button';
import { Chip } from '@/components/base/badges/chip';
import { apiGet, apiSend, errorMessage } from '../../api';
import type { DownloadsSnapshot, DownloadSubmitResult } from '../bundle';
import { DOWNLOADS_KEY, DOWNLOADS_URL } from '../activity/downloads-panel';
import { LoadingDots } from '../components/loading-dots';
import { Note } from '../components/note';
import { busyProps, useAction } from '../settings/use-action';
import type { Want } from './wants';
import { recordWantMagnets } from './wants';
import { Disclosure } from '../settings/section';
import { cachedResources, rememberResources, resourcesFresh } from './resource-cache';
import { providerIcon } from '../components/source-label';
import { resourceNotice, resourceSize } from './resource-display';
import { serverLabel } from '../../core/server-text';
import { t } from '../../i18n';
import './want-magnets.css';

export interface MagnetCandidate {
  id: string; protocol: 'magnet' | 'ed2k' | 'url'; info_hash: string; uri: string;
  name: string; size: string; files: string; date: string;
  attributes: string[]; source: string; source_url: string; origins: string[];
}
export interface MagnetResult {
  state: 'ready' | 'error' | 'busy' | 'unavailable'; items: MagnetCandidate[];
  error: string; checked_at: string | null; warnings?: string[];
  source_url?: string;
  cache_stale?: boolean;
  complete?: boolean;
}

function ResourceFact({ icon: Icon, children, title }: { icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>; children: ReactNode; title?: string }) {
  return <span title={title} className="inline-flex items-center gap-1"><Icon aria-hidden className="size-(--icon-inline) shrink-0" />{children}</span>;
}

export function WantMagnets({ want, readOnly, downloads, provider, toast, onSource, queryUrl, eager = false }: {
  want: Pick<Want, 'id' | 'code' | 'title' | 'release_date'>; readOnly: boolean; downloads?: DownloadsSnapshot; provider: string; toast(message: string): void;
  onSource?(url: string): void;
  queryUrl?: string;
  eager?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager || typeof IntersectionObserver === 'undefined');
  const [submitted, setSubmitted] = useState<string[]>([]);
  const action = useAction();
  const client = useQueryClient();
  const refresh = useRef(false);
  const cacheCode = queryUrl ? `comment-resources:${queryUrl}:${want.code}` : `all-sources:${want.code || ''}`;
  const cached = useMemo(() => cachedResources(cacheCode, want.release_date), [cacheCode, want.release_date]);
  useEffect(() => {
    if (!root.current || visible) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { setVisible(true); observer.disconnect() }
    }, { rootMargin: '100px' });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [visible]);
  const query = useQuery({
    queryKey: queryUrl ? ['work-resources', queryUrl, want.code] : ['want-magnets', want.id, want.code],
    queryFn: async ({ signal }) => {
      const forced = refresh.current;
      const url = queryUrl || `/api/wants/magnets?id=${want.id}`;
      const result = await apiGet<MagnetResult>(`${url}${forced ? `${url.includes('?') ? '&' : '?'}refresh=1` : ''}`, signal);
      refresh.current = forced && result.state === 'busy';
      rememberResources(cacheCode, result);
      return result;
    },
    initialData: cached?.result, initialDataUpdatedAt: cached?.saved,
    enabled: visible, retry: false,
    // 发行日期与来源时间戳判定有效性，定时器只负责一天内的内存回收。
    staleTime: (state) => resourcesFresh(state.state.data,
      Date.parse(state.state.data?.checked_at || '') || state.state.dataUpdatedAt, want.release_date) ? Infinity : 0,
    gcTime: 86_400_000,
    refetchOnMount: (state) => resourcesFresh(state.state.data,
      Date.parse(state.state.data?.checked_at || '') || state.state.dataUpdatedAt, want.release_date) ? false : 'always',
    refetchOnWindowFocus: false,
    refetchInterval: (state) => state.state.data?.state === 'busy' ? 3000 : false,
  });
  useEffect(() => {
    if (query.data?.source_url) onSource?.(query.data.source_url);
  }, [query.data?.source_url, onSource]);
  useEffect(() => {
    if (!queryUrl && query.data && (query.data.state === 'ready' || query.data.items.length > 0))
      recordWantMagnets(want.id, query.data.items.some(item => item.protocol === 'magnet'));
  }, [query.data, queryUrl, want.id]);
  const configured = downloads?.providers.find((row) => row.key === provider && row.configured);
  const add = (candidate: MagnetCandidate) => {
    if (readOnly || !downloads?.available || !configured || candidate.protocol !== 'magnet') return;
    void action.run(candidate.id, async (signal) => {
      const result = await apiSend<DownloadSubmitResult>(DOWNLOADS_URL, {
        magnet: candidate.uri, provider: configured.key, target: configured.target,
        code: want.code, title: want.title, origin: queryUrl ? `work:${want.code}` : `wishlist:${want.id}`,
      }, 'POST', signal);
      if (!result.ok) throw new Error(result.task.failure_detail
        || (result.task.failure_label && serverLabel(`download.failure.${result.task.failure}`, result.task.failure_label))
        || t('catalog:wantMagnets.addFailed'));
      return result;
    }, (result) => {
      setSubmitted((current) => [...current, candidate.id]);
      toast(result.outcome === 'submitted' ? t('catalog:wantMagnets.downloadAdded', { name: candidate.name }) : t('catalog:wantMagnets.linkedExisting', { name: candidate.name }));
      void client.invalidateQueries({ queryKey: DOWNLOADS_KEY });
    });
  };
  const copy = (candidate: MagnetCandidate) => {
    void action.run(`copy:${candidate.id}`, () => navigator.clipboard.writeText(candidate.uri),
      () => toast(t('catalog:wantMagnets.linkCopied')));
  };
  const waiting = query.isFetching || query.data?.state === 'busy';
  const failure = query.error ? errorMessage(query.error) : query.data?.error;
  return (
    <div ref={root} data-want-magnets="" className="flex min-w-0 flex-col gap-3 border-t border-separator-border pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-body-medium text-text-primary">{t('catalog:wantMagnets.title')}{query.data?.items.length ? ` · ${query.data.items.length}` : ''}</h4>
        <Button variant="secondary" size="small" leadingIcon={RiRefreshLine} {...busyProps(waiting)} onClick={() => {
          if (!waiting) { refresh.current = true; void query.refetch() }
        }}>{t('catalog:wantMagnets.refresh')}</Button>
      </div>
      {waiting ? <LoadingDots label={t('catalog:wantMagnets.searching')} /> : null}
      {failure ? <Note tone="error" title={t('catalog:wantMagnets.notFound')}>{failure}</Note> : null}
      {query.data?.warnings?.map((warning) => <Note key={warning} tone="neutral">{resourceNotice(warning)}</Note>)}
      {query.data?.warnings?.length && query.data.source_url ? <ButtonLink variant="secondary" size="small" className="self-start"
        trailingIcon={RiExternalLinkLine} href={query.data.source_url} target="_blank" rel="noopener noreferrer">{t('catalog:wantMagnets.viewSourcePage')}</ButtonLink> : null}
      {query.data?.state === 'ready' && !query.data.items.length && !query.data.warnings?.length
        ? <Note tone="neutral">{t('catalog:wantMagnets.noneYet')}</Note> : null}
      {action.error ? <Note tone="error" title={t('catalog:shared.actionFailed')}>{action.error}</Note> : null}
      {query.data?.items.length ? (() => {
        const rows = query.data.items.map((candidate) => {
          const added = submitted.includes(candidate.id) || downloads?.tasks.some((task) => candidate.protocol === 'magnet' &&
            task.info_hash === candidate.info_hash && (task.cancellable || task.state === 'ingested'));
          return <li key={candidate.id} data-resource-protocol={candidate.protocol}>
            <div data-resource-main="" className="flex min-w-0 flex-col gap-1">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <Chip variant="caption" color={candidate.protocol === 'magnet' ? 'blue' : candidate.protocol === 'ed2k' ? 'purple' : 'neutral'}>
                  {candidate.protocol === 'magnet' ? t('catalog:wantMagnets.protocolMagnet') : candidate.protocol === 'ed2k' ? 'ED2K' : t('catalog:wantMagnets.protocolWeb')}
                </Chip>
                <p data-resource-title="" title={candidate.name} className="min-w-0 flex-1 text-body-2-medium text-text-primary">{candidate.name}</p>
              </div>
              <div data-resource-facts="" className="flex flex-wrap gap-x-2 gap-y-1 text-caption-1-regular text-text-secondary">
                <ResourceFact icon={RiLink}>{candidate.source}</ResourceFact>
                <ResourceFact icon={RiHardDrive2Line} title={candidate.size ? t('catalog:wantMagnets.sourceSize', { size: candidate.size }) : undefined}>{resourceSize(candidate.size)}</ResourceFact>
                {/* i18n-exempt: 来源给的文件数是内容，只把繁体量词规范成简体 */}
                {candidate.files ? <ResourceFact icon={RiFileList2Line}>{candidate.files.replaceAll('個', '个')}</ResourceFact> : null}
                {/* i18n-exempt: 服务端的来源值「JavDB 评论」，只用来比较 */}
                <ResourceFact icon={RiCalendarLine} title={candidate.source === 'JavDB 评论' ? t('catalog:wantMagnets.commentDate') : t('catalog:wantMagnets.listedDate')}>{candidate.date ? candidate.date.slice(0, 10) : t('catalog:wantMagnets.unknownDate')}</ResourceFact>
                {/* i18n-exempt: 服务端的资源属性值「高清」，只用来过滤 */}
                {candidate.attributes.filter(value => value !== '高清').map((value) => <ResourceFact key={value} icon={RiPriceTag3Line}>{value}</ResourceFact>)}
              </div>
            </div>
            <div data-resource-actions="" className="flex flex-wrap gap-2">
              <ButtonLink data-button-link="" variant="secondary" size="small" trailingIcon={RiExternalLinkLine} href={candidate.source_url} target="_blank" rel="noopener noreferrer">{t('catalog:wantMagnets.linkSource')}</ButtonLink>
              <Button variant="secondary" size="small" leadingIcon={RiFileCopyLine} {...busyProps(action.busy === `copy:${candidate.id}`)}
                onClick={() => copy(candidate)}>{t('catalog:wantMagnets.copyLink')}</Button>
              {candidate.protocol === 'magnet' ?
              <Button variant="primary" size="small" leadingIcon={configured ? providerIcon(configured.key) : RiCloudLine} title={configured ? t('catalog:wantMagnets.downloadTo', { provider: configured.label }) : undefined} disabled={readOnly || !downloads?.available || !configured || added}
                {...busyProps(action.busy === candidate.id)} onClick={() => add(candidate)}>
                {added ? t('catalog:wantMagnets.added') : t('catalog:wantMagnets.addDownload')}
              </Button> : null}
            </div>
          </li>;
        });
        return <>
          <ul className="flex min-w-0 flex-col gap-4">{rows.slice(0, 3)}</ul>
          {rows.length > 3 ? <Disclosure summary={t('catalog:wantMagnets.moreLinks', { count: rows.length - 3 })}>
            <ul className="flex min-w-0 flex-col gap-4">{rows.slice(3)}</ul>
          </Disclosure> : null}
        </>;
      })() : null}
    </div>
  );
}
