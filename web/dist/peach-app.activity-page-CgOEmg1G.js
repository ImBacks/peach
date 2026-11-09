(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f39a8f77-54e7-4516-b885-362ea8d0a784", e._sentryDebugIdIdentifier = "sentry-dbid-f39a8f77-54e7-4516-b885-362ea8d0a784");
	} catch {}
})();
import { Button as e, Bx as t, Chip as n, DataTableFooter as r, Disclosure as i, DownloadsPanel as a, EmptyState as o, Gg as s, HN as c, IssueRow as l, LinkButton as u, Lo as d, LoadingDots as f, Ma as p, NameLink as m, Note as h, OV as g, Pf as _, ProcessingMode as v, Progress as y, RB as b, Rk as x, Su as S, TASKS_KEY as C, TRIGGER_LABELS as w, Xl as T, __toESM as E, apiGet as D, apiSend as O, busyProps as k, cardClass as A, confirmModal as ee, controlTask as te, cx as ne, elapsedText as j, errorMessage as M, fetchTasks as re, fmtSize as ie, foldByKind as ae, foldRoutine as oe, followupDetail as se, followupTally as N, groupFollowups as ce, hasResultProblems as P, i2 as F, isActive as I, isRoutine as le, latestOfKind as ue, momentText as L, notifyManager as de, oe as fe, pollInterval as pe, problemDestination as me, progressText as he, readableErrorHeadline as ge, replaceEqualDeep as _e, require_jsx_runtime as ve, require_react as ye, setTaskSpeed as be, statusLabel as xe, summaryItems as Se, t as R, taskIssues as Ce, taskSubject as z, um as we, uo as Te, useMutation as B, useQuery as V, useQueryClient as H, vl as Ee } from "./peach-app.js";
import { CodeBlock as De } from "./peach-app.code-block-CXu10nIP.js";
import { Page as Oe } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as U, ErrorExcerpt as ke } from "./peach-app.error-excerpt-Ugft6I5o.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var W = /* @__PURE__ */ E(ye(), 1);
function Ae() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = _e(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function je(e = {}, t) {
	let n = H(t).getMutationCache(), [r] = W.useState(() => Ae()), i = r(n, e);
	return W.useSyncExternalStore(W.useCallback((e) => n.subscribe(de.batchCalls(e)), [n]), i, i);
}
// src/react/activity/background-issues.tsx
var G = ve(), K = ["background-issues"];
function Me() {
	let e = (0, W.useId)(), t = V({
		queryKey: K,
		queryFn: ({ signal: e }) => D("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, G.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, G.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: R("manage:backgroundIssues.title")
		}), /* @__PURE__ */ (0, G.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, G.jsx)("li", { children: /* @__PURE__ */ (0, G.jsx)(Ne, { issue: e }) }, e.key))
		})]
	}) : null;
}
function Ne({ issue: t }) {
	let n = H(), r = B({
		mutationFn: () => O(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: K });
		}
	}), i = t.since ? R("manage:backgroundIssues.since", { time: L(t.since) }) : R("manage:backgroundIssues.detectedAt", { time: L(t.noticed_at) });
	return /* @__PURE__ */ (0, G.jsx)(h, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, G.jsx)(u, {
				href: t.href,
				size: "small",
				trailingIcon: F,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ (0, G.jsx)(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...k(r.isPending),
				onClick: () => r.mutate(),
				children: R("manage:shared.retryNow")
			}) : null]
		}),
		children: r.error ? R("manage:backgroundIssues.retryFailed", {
			moment: i,
			error: M(r.error)
		}) : i
	});
}
// src/react/activity/task-controls.tsx
var q = ["task-control"], Pe = {
	pause: g,
	resume: s,
	cancel: c
}, J = {
	pause: R("manage:shared.pause"),
	resume: R("manage:shared.resume"),
	cancel: R("manage:taskControls.cancelTask")
}, Y = {
	pause: R("manage:taskControls.pauseFollowups"),
	resume: R("manage:taskControls.resumeFollowups"),
	cancel: R("manage:taskControls.cancelFollowups")
};
function Fe() {
	let e = je({
		filters: { mutationKey: q },
		select: (e) => ({
			id: e.mutationId,
			command: e.state.variables,
			status: e.state.status,
			error: e.state.error
		})
	}), t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.command;
		if (!e) continue;
		let r = t.get(e.id);
		(!r || r.id < n.id) && t.set(e.id, {
			...n,
			command: e
		});
	}
	let n = [...t.values()].filter((e) => e.status === "error");
	return n.length ? /* @__PURE__ */ (0, G.jsx)("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ (0, G.jsx)(h, {
			tone: "error",
			title: R("manage:taskControls.actionFailed", {
				task: e.label,
				action: (e.followups ? Y : J)[e.action]
			}),
			children: M(t)
		}, e.id))
	}) : null;
}
function Ie({ run: t, runs: n = [t] }) {
	let r = H(), i = (0, W.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), a = () => {
		r.invalidateQueries({ queryKey: C });
	}, o = async (e) => {
		let t = null;
		for (let r of n) try {
			await te(r.id, e.action);
		} catch (e) {
			t ??= e;
		}
		if (t !== null) throw t;
	}, s = B({
		mutationKey: [
			...q,
			t.id,
			"change"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.change = !1, a();
		}
	}), c = B({
		mutationKey: [
			...q,
			t.id,
			"cancel"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.cancel = !1, a();
		}
	}), l = B({
		mutationFn: async (e) => {
			let t = (await Promise.allSettled(n.map((t) => be(t.id, e)))).find((e) => e.status === "rejected");
			if (t?.status === "rejected") throw t.reason;
		},
		onSettled: a
	}), u = (t.control?.actions || []).filter((e) => e !== "set_speed"), d = !!(t.control?.actions.includes("set_speed") && t.control.speed_mode), f = !I(t), p = c.isPending || c.isSuccess;
	if (!u.length && !d) return null;
	let m = (e) => {
		let r = {
			id: t.id,
			label: t.task_label,
			action: e,
			followups: f
		};
		if (e === "cancel") {
			if (i.current.cancel || i.current.confirmation || c.isSuccess) return;
			i.current.confirmation = !0, ee({
				title: R(f ? "manage:taskControls.cancelFollowupsTitle" : "manage:taskControls.cancelTaskTitle", { task: t.task_label }),
				body: f ? n.length > 1 ? R("manage:taskControls.cancelBatchFollowupsBody", { count: n.length }) : R("manage:taskControls.cancelFollowupsBody") : R("manage:taskControls.cancelTaskBody"),
				confirmLabel: R(f ? "manage:taskControls.cancelFollowups" : "manage:shared.cancelTask"),
				danger: !0,
				onConfirm: async () => (i.current.cancel = !0, await c.mutateAsync(r))
			}).finally(() => {
				i.current.confirmation = !1;
			});
		} else {
			if (i.current.change || i.current.cancel || p) return;
			i.current.change = !0, s.mutate(r);
		}
	};
	return /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "ml-auto min-w-0",
		"data-task-controls": t.id,
		children: [/* @__PURE__ */ (0, G.jsxs)("div", {
			role: "group",
			"aria-label": R(f ? "manage:taskControls.followupsGroupLabel" : "manage:taskControls.groupLabel", { task: t.task_label }),
			className: "flex flex-wrap items-center justify-end gap-2",
			children: [d ? /* @__PURE__ */ (0, G.jsx)(v, {
				value: t.control.speed_mode,
				busy: l.isPending || p,
				animate: t.control?.state === "running",
				onChange: (e) => l.mutate(e)
			}) : null, u.map((t) => {
				let n = (f ? Y : J)[t], r = t === "cancel" ? c.isPending : s.isPending && s.variables?.action === t, i = t === "cancel" ? p : s.isPending || p;
				return /* @__PURE__ */ (0, G.jsx)(e, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: Pe[t],
					"aria-label": n,
					title: n,
					...k(r),
					"aria-disabled": i || void 0,
					onClick: () => m(t),
					"data-tooltip-copy-key": `tasks.control.action.${f ? "followups." : ""}${t}`
				}, t);
			})]
		}), l.error ? /* @__PURE__ */ (0, G.jsx)(h, {
			tone: "error",
			children: M(l.error)
		}) : null]
	});
}
// src/react/activity/task-icon.tsx
var Le = new Map([
	[t, [
		"follow-check",
		"follow-resolve",
		"follow-creator",
		"follow-evidence-reclaim",
		"feed-check",
		"feed-scrape",
		"feed-cover"
	]],
	[x, [
		"library-processing",
		"organize",
		"batch",
		"resource-scan",
		"resource-apply",
		"seed-import"
	]],
	[Ee, [
		"scrape-codes",
		"jav-discovery-metadata",
		"want-scrape",
		"upgrade-library"
	]],
	[p, [
		"scraping-cover",
		"jav-covers",
		"code-samples",
		"timeline-thumbnails",
		"entity-avatar"
	]],
	[_, [
		"performer-profile",
		"performer-alias",
		"creator-identity",
		"studio-mark"
	]],
	[T, ["media-repair", "mp4-header-repair"]],
	[we, [
		"link-check",
		"link-prune",
		"source-check"
	]],
	[fe, ["download-postprocess"]],
	[d, ["taste-refresh"]],
	[b, [
		"upgrade-repairs",
		"diagnostic-export",
		"amane-bridge",
		"face-models",
		"ledger-backup",
		"ledger-restore"
	]]
].flatMap(([e, t]) => t.map((t) => [t, e])));
function Re({ taskKey: e, className: t }) {
	let n = Le.get(e) ?? S;
	return /* @__PURE__ */ (0, G.jsx)(n, {
		className: t,
		"aria-hidden": !0
	});
}
// src/react/activity/resource-chip.tsx
var ze = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function Be({ color: e, high: t, ...r }) {
	return t ? /* @__PURE__ */ (0, G.jsx)("span", {
		...r,
		className: ne("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", ze[e])
	}) : /* @__PURE__ */ (0, G.jsx)(n, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var Ve = {
	cpu: {
		name: "CPU",
		color: "blue"
	},
	gpu: {
		name: "GPU",
		color: "purple"
	},
	network: {
		name: R("manage:taskResources.network"),
		color: "cyan"
	}
};
function He(e) {
	return e.state === "sampling" ? R("manage:taskResources.sampling") : e.via === "cloud" ? R("manage:taskResources.viaCloudDrive") : R("manage:taskResources.unavailable");
}
function Ue(e, t) {
	return t === 0 ? R("manage:taskResources.idle") : e === "network" ? `${ie(t)}/s` : `${t.toLocaleString(void 0, { maximumFractionDigits: 1 })}%`;
}
function We({ run: e, active: t = I(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ (0, G.jsx)("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = Ve[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? Ue(e, i) : He(t), c = [t.reason, o ? R("manage:taskResources.highUsage") : ""].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, G.jsxs)(Be, {
				color: r.color,
				high: o,
				tabIndex: c ? 0 : void 0,
				title: c || void 0,
				"data-task-resource": e,
				"data-resource-state": t.state,
				"data-resource-via": t.via,
				"data-resource-high": o || void 0,
				"data-resource-idle": a && i === 0 || void 0,
				"data-copy-ignore": "",
				children: [
					r.name,
					" ",
					s
				]
			}, e);
		})
	});
}
// src/react/activity/activity-page.tsx
var Ge = /* @__PURE__ */ new Set(["upgrade-repairs"]), Ke = /* @__PURE__ */ new Set(["asset_id", "name"]), qe = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, Je = {
	running: R("manage:taskStatus.running"),
	pausing: R("manage:taskStatus.pausing"),
	paused: R("manage:taskStatus.paused"),
	cancelling: R("manage:taskStatus.canceling")
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !I(e))) return /* @__PURE__ */ (0, G.jsx)(n, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, G.jsx)("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: Je[t]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && P(e);
	return /* @__PURE__ */ (0, G.jsx)(n, {
		color: i ? "yellow" : qe[e.status] ?? "neutral",
		children: r ? R("manage:taskStatus.partial") : i ? R("manage:taskStatus.issuesFound") : xe(e.status)
	});
}
function Ye({ rows: e }) {
	let [t, n] = (0, W.useState)({
		pageIndex: 0,
		pageSize: 20
	}), { pageSize: a } = t, o = Math.min(t.pageIndex, Math.max(0, Math.ceil(e.length / a) - 1));
	return /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.slice(o * a, (o + 1) * a).map((e) => {
			let t = se(e);
			return /* @__PURE__ */ (0, G.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border py-2.5 pr-10 pl-5",
				children: [
					/* @__PURE__ */ (0, G.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, G.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-40 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, G.jsx)(Re, {
									taskKey: e.task_key,
									className: "size-4 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, G.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: e.task_label
								}),
								/* @__PURE__ */ (0, G.jsx)(X, { run: e }),
								t ? /* @__PURE__ */ (0, G.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ (0, G.jsx)(Ie, { run: e })]
					}),
					/* @__PURE__ */ (0, G.jsx)(We, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, G.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, G.jsx)(i, {
							summary: R("manage:taskCenter.technicalDetails"),
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, G.jsx)(De, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: R("manage:taskCenter.taskTechnicalDetails", { task: e.task_label })
							})
						})
					}) : null
				]
			}, e.id);
		})
	}), /* @__PURE__ */ (0, G.jsx)(r, {
		label: R("manage:taskCenter.taskDetails"),
		total: e.length,
		pagination: {
			...t,
			pageIndex: o
		},
		onChange: n
	})] });
}
function Z({ run: e, meta: t, children: n, error: r, issues: a, followups: o, followupTotal: s = 0, badge: c, resourceActive: l, controlled: u }) {
	let [d, f] = (0, W.useState)(!!o?.some(I)), p = (u || [e]).map((e) => e.id), g = s > (o?.length || 0), _ = V({
		queryKey: [
			...C,
			"followups",
			p
		],
		enabled: d && g,
		queryFn: async ({ signal: e }) => (await Promise.all(p.map((t) => D(`/api/tasks/${t}`, e)))).flatMap((e) => e.followups),
		refetchInterval: l ? 2e3 : !1
	}), v = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), y = [...(g ? _.data : void 0) || o || []].sort((e, t) => v(t) - v(e) || t.id - e.id), b = y.length, x = Math.max(o?.length || 0, s), S = z(e), w = String(r || "").trim(), T = ge(w);
	return /* @__PURE__ */ (0, G.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: A({
			padding: "none",
			bordered: e.status === "failed" ? "error" : void 0,
			className: "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, G.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, G.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, G.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-48 flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, G.jsx)(Re, {
									taskKey: e.task_key,
									className: "size-5 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, G.jsx)("strong", {
									className: "min-w-0 break-words text-title-3-medium text-text-primary",
									children: e.task_label
								}),
								c ?? /* @__PURE__ */ (0, G.jsx)(X, { run: e })
							]
						}), /* @__PURE__ */ (0, G.jsx)(Ie, {
							run: e,
							runs: u
						})]
					}),
					/* @__PURE__ */ (0, G.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ (0, G.jsx)(We, {
						run: e,
						active: l
					}),
					S ? /* @__PURE__ */ (0, G.jsx)(m, {
						href: S.href,
						"data-task-subject": e.id,
						title: S.label,
						className: "min-w-0 max-w-full self-start truncate text-text-primary",
						children: S.label
					}) : null,
					T ? /* @__PURE__ */ (0, G.jsx)("p", {
						"data-task-error": "",
						className: "text-caption-1-regular text-text-secondary wrap-anywhere",
						children: T
					}) : null,
					n
				]
			}),
			a ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border",
				children: a
			}) : null,
			T && w !== T ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, G.jsx)(i, {
					row: !0,
					summary: R("manage:taskCenter.errorDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, G.jsx)(U, {
						label: R("manage:taskCenter.taskErrorDetails", { task: e.task_label }),
						children: w
					})
				})
			}) : null,
			x ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, G.jsxs)(i, {
					row: !0,
					summary: R("manage:taskCenter.taskDetailsCount", { count: x }),
					contentClassName: "pb-5",
					isOpen: d,
					onOpenChange: f,
					children: [
						_.error ? /* @__PURE__ */ (0, G.jsx)(h, {
							tone: "error",
							children: M(_.error)
						}) : null,
						b < x ? /* @__PURE__ */ (0, G.jsx)("p", {
							className: "text-caption-1-regular text-text-secondary",
							children: R("manage:taskCenter.showingCount", { count: b })
						}) : null,
						/* @__PURE__ */ (0, G.jsx)(Ye, { rows: y })
					]
				})
			}) : null,
			Object.keys(e.result_summary || {}).some((e) => !(S && Ke.has(e))) ? /* @__PURE__ */ (0, G.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, G.jsx)(i, {
					row: !0,
					summary: R("manage:taskCenter.technicalDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, G.jsx)(De, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: R("manage:taskCenter.taskTechnicalDetails", { task: e.task_label })
					})
				})
			}) : null
		]
	});
}
function Xe({ run: e, followups: t, followupTotal: n }) {
	let r = e.progress_total || 0, i = e.progress_current || 0, a = e.control?.state, o = a && a !== "running", s = o ? Je[a] : e.progress_label || R("manage:taskCenter.inProgress"), c = j(e.elapsed_seconds), l = [w[e.trigger] || e.trigger, c && R("manage:taskCenter.runningFor", { elapsed: c })].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsx)(Z, {
		run: e,
		meta: l,
		followups: t,
		followupTotal: n,
		children: r > 0 ? /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, G.jsx)(y, {
				label: s,
				value: Math.min(i, r),
				max: r
			}), /* @__PURE__ */ (0, G.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					s,
					" · ",
					R("manage:taskCenter.progressItems", { progress: he(i, r) })
				]
			})]
		}) : o ? /* @__PURE__ */ (0, G.jsx)("p", {
			"data-copy-key": `tasks.control.state.${a}`,
			className: "text-caption-1-regular text-text-secondary",
			children: s
		}) : /* @__PURE__ */ (0, G.jsx)(f, { label: s })
	});
}
function Ze({ run: e, followups: t, runs: r, latest: a, followupTotal: o, followupFailed: s = 0, followupCancelled: c = 0 }) {
	let d = !!(r && r.length > 1 && o), f = d ? [R("manage:taskCenter.processedTotal", { count: o }), s ? R("manage:taskCenter.failedCount", { count: s }) : ""].filter(Boolean) : Se(z(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== e.error && t !== ge(e.error)), p = Ce(e), m = me(e, a), h = j(e.elapsed_seconds), g = r && r.length > 1 ? r[r.length - 1] : void 0, _ = (g ? [
		w[e.trigger] || e.trigger,
		R("manage:taskCenter.lastRuns", { count: r.length }),
		`${L(g.finished_at)} – ${L(e.finished_at)}`
	] : [
		w[e.trigger] || e.trigger,
		L(e.finished_at),
		h && R("manage:taskCenter.took", { elapsed: h })
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsxs)(Z, {
		run: e,
		meta: _,
		error: e.error,
		followups: t,
		followupTotal: o,
		controlled: r,
		issues: p.length ? /* @__PURE__ */ (0, G.jsx)(i, {
			row: !0,
			summary: R("manage:taskCenter.issueDetailsCount", { count: p.length }),
			contentClassName: "pb-5",
			children: /* @__PURE__ */ (0, G.jsx)(U, {
				label: R("manage:taskCenter.issueDetails"),
				children: /* @__PURE__ */ (0, G.jsx)("ul", {
					className: "flex min-w-0 flex-col whitespace-normal",
					"data-task-issues": "",
					children: p.map((e, t) => /* @__PURE__ */ (0, G.jsx)(l, {
						title: /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [e.label, e.provider || e.kind ? /* @__PURE__ */ (0, G.jsxs)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: [" · ", [e.provider, e.kind].filter(Boolean).join(" · ")]
						}) : null] }),
						children: /* @__PURE__ */ (0, G.jsx)(ke, {
							text: e.error,
							className: "text-caption-1-regular text-text-secondary"
						})
					}, `${e.source}-${t}`))
				})
			})
		}) : void 0,
		badge: c && e.status === "succeeded" ? /* @__PURE__ */ (0, G.jsx)(n, {
			color: "rose",
			children: /* @__PURE__ */ (0, G.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${c === o ? "all" : "partial"}`,
				children: R(c === o ? "manage:taskCenter.followupsCanceled" : "manage:taskCenter.someFollowupsCanceled")
			})
		}) : d && s ? /* @__PURE__ */ (0, G.jsx)(n, {
			color: "yellow",
			children: R("manage:taskStatus.issuesFound")
		}) : void 0,
		children: [
			c ? /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: R("manage:taskCenter.followupsCanceledCount", { count: c })
			}) : null,
			f.length === 1 ? /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f[0]
			}) : f.length ? /* @__PURE__ */ (0, G.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f.map((e, t) => /* @__PURE__ */ (0, G.jsx)("li", { children: e }, t))
			}) : null,
			!p.length && P(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: R("manage:taskCenter.noIssueDetails")
			}) : null,
			m ? /* @__PURE__ */ (0, G.jsx)(u, {
				href: m.href,
				size: "small",
				trailingIcon: F,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function Qe({ runs: e, followups: t, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = N(r, e), s = Math.max(o.total, t.length), c = o.total ? o.settled : t.filter((e) => !I(e)).length, l = o.total ? o.failed : t.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		w[i.trigger] || i.trigger,
		e.length > 1 ? R("manage:taskCenter.batches", { count: e.length }) : "",
		R("manage:taskCenter.startedAt", { time: L(a.started_at || a.finished_at) })
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, G.jsx)(Z, {
		run: i,
		meta: u,
		followups: t,
		followupTotal: s,
		resourceActive: !0,
		controlled: e,
		badge: i.control ? /* @__PURE__ */ (0, G.jsx)(X, { run: i }) : /* @__PURE__ */ (0, G.jsx)(n, {
			color: "blue",
			children: R("manage:taskStatus.running")
		}),
		children: /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, G.jsx)(y, {
				label: R("manage:taskCenter.taskProgress", { task: i.task_label }),
				value: c,
				max: s
			}), /* @__PURE__ */ (0, G.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [R("manage:taskCenter.processedProgress", { progress: he(c, s) }), l ? R("manage:taskCenter.failedSuffix", { count: l }) : ""]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, W.useId)();
	return /* @__PURE__ */ (0, G.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, G.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, paginate: t = !0, children: n }) {
	let [i, a] = (0, W.useState)({
		pageIndex: 0,
		pageSize: 20
	}), o = W.Children.toArray(n), { pageSize: s } = i, c = Math.min(i.pageIndex, Math.max(0, Math.ceil(o.length / s) - 1));
	return /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t ? o.slice(c * s, (c + 1) * s) : o
	}), t ? /* @__PURE__ */ (0, G.jsx)(r, {
		label: R("manage:taskCenter.taskList"),
		total: o.length,
		pagination: {
			...i,
			pageIndex: c
		},
		onChange: a
	}) : null] });
}
function $e() {
	let [e, t] = (0, W.useState)(1), [n, i] = (0, W.useState)(20), s = V({
		queryKey: e === 1 && n === 20 ? C : [
			...C,
			"page",
			e,
			n
		],
		queryFn: ({ signal: t }) => re(t, e, n),
		refetchInterval: (e) => pe(e.state.data),
		placeholderData: (e) => e
	}), [c, l] = (0, W.useState)(s.data);
	s.data && s.data !== c && l(s.data);
	let u = s.data || c, d = s.error ? M(s.error) : "";
	if (!u) return /* @__PURE__ */ (0, G.jsx)(Oe, { children: /* @__PURE__ */ (0, G.jsx)(h, {
		tone: "error",
		children: d || R("manage:taskCenter.loadFailed")
	}) });
	let f = u.finished || [], p = u.working_parents || [], m = [
		...u.running || [],
		...u.skipped || [],
		...f,
		...p
	], g = ce(m), _ = new Set(m.map((e) => e.id)), v = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && _.has(e.parent_run_id))), y = v(f), b = u.followup_counts || {}, x = (e) => e.flatMap((e) => g.get(e.id) || []), S = [...y, ...v(p)].filter((e) => N(b, [e]).active > 0 || g.get(e.id)?.some(I)).sort((e, t) => t.id - e.id), w = v(u.running || []), T = v(u.skipped || []), E = y.filter((e) => !S.includes(e) && !T.some((t) => t.id === e.id)), D = (e) => (g.get(e.id) || []).every((e) => e.status === "succeeded" && !P(e)) && N(b, [e]).failed === 0, O = oe(E, (e) => le(e) && (D(e) || Ge.has(e.task_key))), k = ae(S, (e) => e.control?.state || "").sort((e, t) => t.run.id - e.run.id), A = ue(m), ee = !w.length && !S.length && !T.length && !E.length;
	return /* @__PURE__ */ (0, G.jsxs)(Oe, { children: [
		d ? /* @__PURE__ */ (0, G.jsx)(h, {
			tone: "error",
			children: d
		}) : null,
		/* @__PURE__ */ (0, G.jsx)(Fe, {}),
		u.available === !1 ? /* @__PURE__ */ (0, G.jsx)(h, {
			tone: "warning",
			children: u.message || R("manage:taskCenter.tableNotReady")
		}) : null,
		/* @__PURE__ */ (0, G.jsx)(Me, {}),
		ee ? /* @__PURE__ */ (0, G.jsx)(o, {
			icon: Te,
			title: R("manage:taskCenter.emptyTitle"),
			children: R("manage:taskCenter.emptyText")
		}) : /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
			/* @__PURE__ */ (0, G.jsx)(Q, {
				title: R("manage:taskCenter.inProgress"),
				children: w.length || S.length ? /* @__PURE__ */ (0, G.jsxs)($, {
					live: !0,
					children: [w.map((e) => /* @__PURE__ */ (0, G.jsx)(Xe, {
						run: e,
						followups: g.get(e.id),
						followupTotal: N(b, [e]).total
					}, e.id)), k.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, G.jsx)(Qe, {
						runs: t,
						followups: x(t),
						counts: b
					}, e.id))]
				}) : /* @__PURE__ */ (0, G.jsx)(h, {
					tone: "neutral",
					children: R("manage:taskCenter.noneRunning")
				})
			}),
			T.length ? /* @__PURE__ */ (0, G.jsx)(Q, {
				title: R("manage:taskCenter.skipped"),
				children: /* @__PURE__ */ (0, G.jsx)($, { children: T.map((e) => /* @__PURE__ */ (0, G.jsx)(Ze, {
					run: e,
					latest: A.has(e.id),
					followups: g.get(e.id)
				}, e.id)) })
			}) : null,
			E.length || u.finished_total ? /* @__PURE__ */ (0, G.jsxs)(Q, {
				title: R("manage:taskCenter.recentlyCompleted"),
				children: [E.length ? /* @__PURE__ */ (0, G.jsx)($, {
					paginate: !1,
					children: O.map(({ run: e, runs: t }) => {
						let n = N(b, t);
						return /* @__PURE__ */ (0, G.jsx)(Ze, {
							run: e,
							runs: t,
							latest: A.has(e.id),
							followups: x(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					})
				}) : null, /* @__PURE__ */ (0, G.jsx)(r, {
					label: R("manage:taskCenter.recentlyCompleted"),
					total: u.finished_total ?? y.length,
					unit: R("manage:taskCenter.footerUnit"),
					pageUnit: R("manage:taskCenter.footerPageUnit"),
					pagination: {
						pageIndex: (u.finished_page || e) - 1,
						pageSize: n
					},
					onChange: (r) => {
						r.pageIndex + 1 === e && r.pageSize === n ? s.refetch() : (t(r.pageIndex + 1), i(r.pageSize));
					}
				})]
			}) : null
		] }),
		/* @__PURE__ */ (0, G.jsx)(a, {})
	] });
}
export { $e as ActivityPage };

//# debugId=f39a8f77-54e7-4516-b885-362ea8d0a784