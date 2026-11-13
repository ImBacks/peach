/* 「账本备份」：立即备份当前账本，或从一份备份恢复（ADR-0138）。
 *
 * 列表里是两处备份目录里能恢复的全部备份，新的在前：手动备份与写入前的自动备份同一套保留规则。
 * 备份与恢复都是服务端的后台任务，进行中每 1.5 秒问一次状态，进度同时进任务中心。
 * 恢复会替换当前账本，确认框写清这一点；只读端只看列表，不能恢复。 */
import { useEffect, useRef, useState } from 'react';
import { confirmModal } from '@peach/legacy/ui';
import { fmtSize } from '@peach/legacy/core';

import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Button } from '@/components/base/buttons/button';

import { apiGet, apiSend } from '../../api';
import { LoadingDots } from '../components/loading-dots';
import { Progress } from '../components/progress';
import { ErrorText, Footer, Help, Rows, Section, Stack, TaskCenterLink } from './section';
import { busyProps, useAction } from './use-action';
import { serverLabel } from '../../core/server-text';
import { interfaceLanguage, t } from '../../i18n';

export const LEDGER_BACKUPS_URL = '/api/configuration/ledger-backups';
const POLL_MS = 1500;

export interface LedgerBackup {
  id: string;
  name: string;
  bytes: number;
  modified_at: number;
  source: 'manual' | 'auto';
  purpose: string;
  /** 用途的 id，按它取译文；没有译文时显示 `purpose`。 */
  purpose_code?: string;
}

export interface LedgerBackupJob {
  status: 'idle' | 'running' | 'complete' | 'failed' | 'cancelled';
  stage?: string;
  done?: number;
  total?: number;
  error?: string;
  name?: string;
  saved?: string;
}

export interface LedgerBackupState {
  backups: LedgerBackup[];
  backup: LedgerBackupJob;
  restore: LedgerBackupJob;
  writer: boolean;
  writer_reason: string;
  last_restore: { state: 'interrupted' | 'failed'; outcome: string; message: string; finished_at: number } | null;
}

const when = (backup: LedgerBackup) => new Date(backup.modified_at * 1000).toLocaleString(interfaceLanguage);

function describe(backup: LedgerBackup) {
  return [backup.source === 'manual' ? t('settings:databaseBackups.manual') : t('settings:databaseBackups.automatic', { purpose: serverLabel(`ledgerBackup.purpose.${backup.purpose_code}`, backup.purpose) }), fmtSize(backup.bytes)].join(' · ');
}

/** 进行中的那一个任务：知道页数就画进度条，否则只说在做哪一步。 */
function Running({ job, label }: { job: LedgerBackupJob; label: string }) {
  return (
    <div aria-live="polite" className="flex flex-col gap-2">
      {job.total
        ? <Progress label={label} value={job.done || 0} max={job.total} />
        : <LoadingDots label={label} />}
      <Help>{job.stage || label}</Help>
      <TaskCenterLink />
    </div>
  );
}

export function LedgerBackupSettings({ receipt }: { receipt(message: string): void }) {
  const [state, setState] = useState<LedgerBackupState | null>(null);
  const [loadError, setLoadError] = useState('');
  const action = useAction();
  const backingUp = state?.backup.status === 'running';
  const restoring = state?.restore.status === 'running';
  const running = backingUp || restoring;
  const reported = useRef({ backup: false, restore: false });

  useEffect(() => {
    const controller = new AbortController();
    apiGet<LedgerBackupState>(LEDGER_BACKUPS_URL, controller.signal)
      .then(setState, (cause) => { if (!controller.signal.aborted) setLoadError(String(cause?.message || cause)); });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!running) return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      apiGet<LedgerBackupState>(LEDGER_BACKUPS_URL, controller.signal).then(setState, () => {
        if (!controller.signal.aborted) setState((current) => current && { ...current });
      });
    }, POLL_MS);
    return () => { controller.abort(); clearTimeout(timer); };
  }, [state]);

  // 一轮结束：成功的回执走 Toast，失败的原因留在分区里。只报这一页上看着开始的那一轮。
  useEffect(() => {
    if (!state) return;
    for (const key of ['backup', 'restore'] as const) {
      const job = state[key];
      if (job.status === 'running') { reported.current[key] = true; continue; }
      if (!reported.current[key]) continue;
      reported.current[key] = false;
      if (job.status !== 'complete') continue;
      receipt(key === 'backup'
        ? t('settings:databaseBackups.backedUp', { name: job.name })
        : t('settings:databaseBackups.restored', { name: job.saved }));
    }
  }, [state]);

  if (!state) {
    return (
      <Section id="ledgerBackups" guide="ledger-backups" title={t('settings:databaseBackups.title')}>
        <Stack>{loadError ? <ErrorText>{loadError}</ErrorText> : <LoadingDots label={t('settings:databaseBackups.loading')} />}</Stack>
      </Section>
    );
  }

  const backup = () => void action.run('backup', (signal) =>
    apiSend<LedgerBackupState>(`${LEDGER_BACKUPS_URL}/backup`, {}, 'POST', signal), setState);

  const restore = (item: LedgerBackup) => void confirmModal({
    title: t('settings:databaseBackups.restoreTitle'),
    danger: true,
    body: t('settings:databaseBackups.restoreBody', { time: when(item), details: describe(item) }),
    confirmLabel: t('settings:databaseBackups.replaceCurrent'),
    onConfirm: async () => {
      reported.current.restore = true;
      setState(await apiSend<LedgerBackupState>(`${LEDGER_BACKUPS_URL}/restore`, { id: item.id, confirm: true }));
    },
  });

  const failed = [state.backup, state.restore].find((job) => job.status === 'failed');
  const last = state.last_restore;
  const status = backingUp ? t('settings:databaseBackups.backingUp') : restoring ? t('settings:databaseBackups.restoring')
    : state.backups.length ? t('settings:databaseBackups.count', { count: state.backups.length }) : t('settings:databaseBackups.empty');
  return (
    <Section id="ledgerBackups" guide="ledger-backups" title={t('settings:databaseBackups.title')}>
      <Stack>
        <Help>{t('settings:databaseBackups.help')}</Help>
        {!state.writer ? <Help>{t('settings:databaseBackups.notPrimary')}{state.writer_reason}</Help> : null}
        {backingUp ? <Running job={state.backup} label={t('settings:databaseBackups.backupProgress')} /> : null}
        {restoring ? <Running job={state.restore} label={t('settings:databaseBackups.restoreProgress')} /> : null}
        {failed ? <ErrorText>{failed.error || t('settings:databaseBackups.jobIncomplete')}</ErrorText> : null}
        {last ? (last.outcome === 'kept' || last.outcome === 'completed'
          ? <Help>{last.message}</Help> : <ErrorText>{last.message}</ErrorText>) : null}
        {action.error ? <ErrorText>{action.error}</ErrorText> : null}
      </Stack>
      {state.backups.length
        ? <div className="border-t border-separator-border" data-ledger-backups="">
            <Rows>
              {state.backups.map((item) => (
                <SettingsRow key={item.id} label={when(item)} description={describe(item)}>
                  <Button variant="secondary" disabled={!state.writer || running}
                    onClick={() => restore(item)}>{t('settings:databaseBackups.restore')}</Button>
                </SettingsRow>
              ))}
            </Rows>
          </div>
        : null}
      <Footer status={<p>{status}</p>}>
        <Button disabled={running} onClick={backup}
          {...busyProps(action.busy === 'backup' || backingUp)}>{t('settings:databaseBackups.backUpNow')}</Button>
      </Footer>
    </Section>
  );
}
