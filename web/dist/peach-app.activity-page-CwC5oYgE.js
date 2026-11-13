(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3124c8f4-af00-4bee-b981-dac97b913b6a", e._sentryDebugIdIdentifier = "sentry-dbid-3124c8f4-af00-4bee-b981-dac97b913b6a");
	} catch {}
})();
import { Button as e, Bx as t, Chip as n, DataTableFooter as r, Disclosure as i, DownloadsPanel as a, EmptyState as o, Gg as s, HN as c, IssueRow as l, LinkButton as u, Lo as d, LoadingDots as f, Ma as p, NameLink as m, Note as h, OV as g, Pf as _, ProcessingMode as v, Progress as y, RB as b, Rk as x, Su as S, TASKS_KEY as C, TRIGGER_LABELS as w, Xl as T, __toESM as E, apiGet as D, apiSend as ee, busyProps as O, cardClass as k, codedText as A, confirmModal as te, controlTask as ne, cx as re, elapsedText as ie, errorMessage as j, fetchTasks as ae, fmtSize as oe, foldByKind as se, foldRoutine as ce, followupDetail as le, followupTally as M, groupFollowups as ue, hasResultProblems as N, i2 as de, interfaceLanguage as fe, isActive as P, isRoutine as pe, latestOfKind as me, momentText as F, notifyManager as he, oe as ge, pollInterval as _e, problemDestination as ve, progressLabel as ye, progressText as I, readableErrorHeadline as L, replaceEqualDeep as be, require_jsx_runtime as xe, require_react as Se, runError as R, setTaskSpeed as Ce, statusLabel as we, summaryItems as Te, t as z, taskIssues as Ee, taskName as B, taskSubject as V, um as De, uo as Oe, useMutation as H, useQuery as U, useQueryClient as W, vl as ke } from "./peach-app.js";
import { CodeBlock as Ae } from "./peach-app.code-block-CXu10nIP.js";
import { Page as je } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as Me, ErrorExcerpt as Ne } from "./peach-app.error-excerpt-Ugft6I5o.js";
// node_modules/@tanstack/react-query/build/modern/useMutationState.js
var G = /* @__PURE__ */ E(Se(), 1);
function Pe() {
	let e;
	return (t, n) => {
		let r = [], i;
		return () => {
			let a = t.findAll(n.filters), o = a.flatMap((e) => [e, e.state]);
			return (!i || o.length !== r.length || o.some((e, t) => !Object.is(e, r[t]))) && (r = o, i = be(e, a.map((e) => n.select ? n.select(e) : e.state)), e = i), i;
		};
	};
}
function Fe(e = {}, t) {
	let n = W(t).getMutationCache(), [r] = G.useState(() => Pe()), i = r(n, e);
	return G.useSyncExternalStore(G.useCallback((e) => n.subscribe(he.batchCalls(e)), [n]), i, i);
}
// src/react/activity/background-issues.tsx
var K = xe(), q = ["background-issues"];
function Ie() {
	let e = (0, G.useId)(), t = U({
		queryKey: q,
		queryFn: ({ signal: e }) => D("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, K.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, K.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: z("manage:backgroundIssues.title")
		}), /* @__PURE__ */ (0, K.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, K.jsx)("li", { children: /* @__PURE__ */ (0, K.jsx)(Le, { issue: e }) }, e.key))
		})]
	}) : null;
}
function Le({ issue: t }) {
	let n = W(), r = H({
		mutationFn: () => ee(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: q });
		}
	}), i = t.since ? z("manage:backgroundIssues.since", { time: F(t.since) }) : z("manage:backgroundIssues.detectedAt", { time: F(t.noticed_at) });
	return /* @__PURE__ */ (0, K.jsx)(h, {
		tone: "error",
		title: A(t, "title"),
		action: /* @__PURE__ */ (0, K.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, K.jsx)(u, {
				href: t.href,
				size: "small",
				trailingIcon: de,
				children: A(t, "link_label")
			}), t.retry ? /* @__PURE__ */ (0, K.jsx)(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...O(r.isPending),
				onClick: () => r.mutate(),
				children: z("manage:shared.retryNow")
			}) : null]
		}),
		children: r.error ? z("manage:backgroundIssues.retryFailed", {
			moment: i,
			error: j(r.error)
		}) : i
	});
}
// src/react/activity/task-controls.tsx
var J = ["task-control"], Re = {
	pause: g,
	resume: s,
	cancel: c
}, ze = {
	pause: z("manage:shared.pause"),
	resume: z("manage:shared.resume"),
	cancel: z("manage:taskControls.cancelTask")
}, Be = {
	pause: z("manage:taskControls.pauseFollowups"),
	resume: z("manage:taskControls.resumeFollowups"),
	cancel: z("manage:taskControls.cancelFollowups")
};
function Ve() {
	let e = Fe({
		filters: { mutationKey: J },
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
	return n.length ? /* @__PURE__ */ (0, K.jsx)("div", {
		"data-task-control-feedback": "",
		className: "flex min-w-0 flex-col gap-2",
		children: n.map(({ command: e, error: t }) => /* @__PURE__ */ (0, K.jsx)(h, {
			tone: "error",
			title: z("manage:taskControls.actionFailed", {
				task: e.label,
				action: (e.followups ? Be : ze)[e.action]
			}),
			children: j(t)
		}, e.id))
	}) : null;
}
function He({ run: t, runs: n = [t] }) {
	let r = W(), i = (0, G.useRef)({
		change: !1,
		cancel: !1,
		confirmation: !1
	}), a = () => {
		r.invalidateQueries({ queryKey: C });
	}, o = async (e) => {
		let t = null;
		for (let r of n) try {
			await ne(r.id, e.action);
		} catch (e) {
			t ??= e;
		}
		if (t !== null) throw t;
	}, s = H({
		mutationKey: [
			...J,
			t.id,
			"change"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.change = !1, a();
		}
	}), c = H({
		mutationKey: [
			...J,
			t.id,
			"cancel"
		],
		mutationFn: o,
		onSettled: () => {
			i.current.cancel = !1, a();
		}
	}), l = H({
		mutationFn: async (e) => {
			let t = (await Promise.allSettled(n.map((t) => Ce(t.id, e)))).find((e) => e.status === "rejected");
			if (t?.status === "rejected") throw t.reason;
		},
		onSettled: a
	}), u = (t.control?.actions || []).filter((e) => e !== "set_speed"), d = !!(t.control?.actions.includes("set_speed") && t.control.speed_mode), f = !P(t), p = c.isPending || c.isSuccess;
	if (!u.length && !d) return null;
	let m = (e) => {
		let r = {
			id: t.id,
			label: B(t),
			action: e,
			followups: f
		};
		if (e === "cancel") {
			if (i.current.cancel || i.current.confirmation || c.isSuccess) return;
			i.current.confirmation = !0, te({
				title: z(f ? "manage:taskControls.cancelFollowupsTitle" : "manage:taskControls.cancelTaskTitle", { task: B(t) }),
				body: f ? n.length > 1 ? z("manage:taskControls.cancelBatchFollowupsBody", { count: n.length }) : z("manage:taskControls.cancelFollowupsBody") : z("manage:taskControls.cancelTaskBody"),
				confirmLabel: z(f ? "manage:taskControls.cancelFollowups" : "manage:shared.cancelTask"),
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
	return /* @__PURE__ */ (0, K.jsxs)("div", {
		className: "ml-auto min-w-0",
		"data-task-controls": t.id,
		children: [/* @__PURE__ */ (0, K.jsxs)("div", {
			role: "group",
			"aria-label": z(f ? "manage:taskControls.followupsGroupLabel" : "manage:taskControls.groupLabel", { task: B(t) }),
			className: "flex flex-wrap items-center justify-end gap-2",
			children: [d ? /* @__PURE__ */ (0, K.jsx)(v, {
				value: t.control.speed_mode,
				busy: l.isPending || p,
				animate: t.control?.state === "running",
				onChange: (e) => l.mutate(e)
			}) : null, u.map((t) => {
				let n = (f ? Be : ze)[t], r = t === "cancel" ? c.isPending : s.isPending && s.variables?.action === t, i = t === "cancel" ? p : s.isPending || p;
				return /* @__PURE__ */ (0, K.jsx)(e, {
					type: "button",
					variant: "secondary",
					size: "small",
					iconOnly: !0,
					leadingIcon: Re[t],
					"aria-label": n,
					title: n,
					...O(r),
					"aria-disabled": i || void 0,
					onClick: () => m(t),
					"data-tooltip-copy-key": `tasks.control.action.${f ? "followups." : ""}${t}`
				}, t);
			})]
		}), l.error ? /* @__PURE__ */ (0, K.jsx)(h, {
			tone: "error",
			children: j(l.error)
		}) : null]
	});
}
// src/react/activity/task-icon.tsx
var Ue = new Map([
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
	[ke, [
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
	[De, [
		"link-check",
		"link-prune",
		"source-check"
	]],
	[ge, ["download-postprocess"]],
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
function We({ taskKey: e, className: t }) {
	let n = Ue.get(e) ?? S;
	return /* @__PURE__ */ (0, K.jsx)(n, {
		className: t,
		"aria-hidden": !0
	});
}
// src/react/activity/resource-chip.tsx
var Ge = {
	blue: "bg-status-blue-text text-background-primary-default",
	purple: "bg-status-purple-text text-background-primary-default",
	cyan: "bg-status-cyan-text text-background-primary-default"
};
function Ke({ color: e, high: t, ...r }) {
	return t ? /* @__PURE__ */ (0, K.jsx)("span", {
		...r,
		className: re("inline-flex items-center justify-center rounded-md px-1.5 py-1 whitespace-nowrap text-caption-1-medium", Ge[e])
	}) : /* @__PURE__ */ (0, K.jsx)(n, {
		variant: "caption",
		color: e,
		...r
	});
}
// src/react/activity/task-resources.tsx
var qe = {
	cpu: {
		name: "CPU",
		color: "blue"
	},
	gpu: {
		name: "GPU",
		color: "purple"
	},
	network: {
		name: z("manage:taskResources.network"),
		color: "cyan"
	}
};
function Je(e) {
	return e.state === "sampling" ? z("manage:taskResources.sampling") : e.via === "cloud" ? z("manage:taskResources.viaCloudDrive") : z("manage:taskResources.unavailable");
}
function Ye(e, t) {
	return t === 0 ? z("manage:taskResources.idle") : e === "network" ? `${oe(t)}/s` : `${t.toLocaleString(fe, { maximumFractionDigits: 1 })}%`;
}
function Xe({ run: e, active: t = P(e) || !!e.control }) {
	if (!t || !e.resources) return null;
	let n = e.resources;
	return /* @__PURE__ */ (0, K.jsx)("div", {
		"data-task-resources": e.id,
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			"cpu",
			"gpu",
			"network"
		].map((e) => {
			let t = n[e], r = qe[e], i = e === "network" ? n.network.bytes_per_second : n[e].percent, a = t.state === "ready" && i !== null, o = a && t.high, s = a ? Ye(e, i) : Je(t), c = [t.reason, o ? z("manage:taskResources.highUsage") : ""].filter(Boolean).join("\n");
			return /* @__PURE__ */ (0, K.jsxs)(Ke, {
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
var Ze = /* @__PURE__ */ new Set(["upgrade-repairs"]), Qe = /* @__PURE__ */ new Set(["asset_id", "name"]), $e = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "rose",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
}, Y = {
	running: z("manage:taskStatus.running"),
	pausing: z("manage:taskStatus.pausing"),
	paused: z("manage:taskStatus.paused"),
	cancelling: z("manage:taskStatus.canceling")
};
function X({ run: e }) {
	let t = e.control?.state;
	if (t && (t !== "running" || !P(e))) return /* @__PURE__ */ (0, K.jsx)(n, {
		color: t === "running" ? "blue" : "neutral",
		children: /* @__PURE__ */ (0, K.jsx)("span", {
			"data-copy-key": `tasks.control.state.${t}`,
			children: Y[t]
		})
	});
	let r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && N(e);
	return /* @__PURE__ */ (0, K.jsx)(n, {
		color: i ? "yellow" : $e[e.status] ?? "neutral",
		children: r ? z("manage:taskStatus.partial") : i ? z("manage:taskStatus.issuesFound") : we(e.status)
	});
}
function et({ rows: e }) {
	let [t, n] = (0, G.useState)({
		pageIndex: 0,
		pageSize: 20
	}), { pageSize: a } = t, o = Math.min(t.pageIndex, Math.max(0, Math.ceil(e.length / a) - 1));
	return /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("ul", {
		className: "-mr-5 flex min-w-0 flex-col",
		children: e.slice(o * a, (o + 1) * a).map((e) => {
			let t = le(e);
			return /* @__PURE__ */ (0, K.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-col gap-1 border-t border-separator-border py-2.5 pr-10 pl-5",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-40 flex-wrap items-center gap-x-2 gap-y-1",
							children: [
								/* @__PURE__ */ (0, K.jsx)(We, {
									taskKey: e.task_key,
									className: "size-4 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, K.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-primary",
									children: B(e)
								}),
								/* @__PURE__ */ (0, K.jsx)(X, { run: e }),
								t ? /* @__PURE__ */ (0, K.jsx)("span", {
									className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
									children: t
								}) : null
							]
						}), /* @__PURE__ */ (0, K.jsx)(He, { run: e })]
					}),
					/* @__PURE__ */ (0, K.jsx)(Xe, { run: e }),
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, K.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, K.jsx)(i, {
							summary: z("manage:taskCenter.technicalDetails"),
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, K.jsx)(Ae, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: z("manage:taskCenter.taskTechnicalDetails", { task: B(e) })
							})
						})
					}) : null
				]
			}, e.id);
		})
	}), /* @__PURE__ */ (0, K.jsx)(r, {
		label: z("manage:taskCenter.taskDetails"),
		total: e.length,
		pagination: {
			...t,
			pageIndex: o
		},
		onChange: n
	})] });
}
function Z({ run: e, meta: t, children: n, error: r, issues: a, followups: o, followupTotal: s = 0, badge: c, resourceActive: l, controlled: u }) {
	let [d, f] = (0, G.useState)(!!o?.some(P)), p = (u || [e]).map((e) => e.id), g = s > (o?.length || 0), _ = U({
		queryKey: [
			...C,
			"followups",
			p
		],
		enabled: d && g,
		queryFn: async ({ signal: e }) => (await Promise.all(p.map((t) => D(`/api/tasks/${t}`, e)))).flatMap((e) => e.followups),
		refetchInterval: l ? 2e3 : !1
	}), v = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), y = [...(g ? _.data : void 0) || o || []].sort((e, t) => v(t) - v(e) || t.id - e.id), b = y.length, x = Math.max(o?.length || 0, s), S = V(e), w = String(r || "").trim(), T = L(w);
	return /* @__PURE__ */ (0, K.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: k({
			padding: "none",
			bordered: e.status === "failed" ? "error" : void 0,
			className: "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "flex min-w-0 flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "flex min-w-0 flex-1 basis-48 flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, K.jsx)(We, {
									taskKey: e.task_key,
									className: "size-5 shrink-0 text-text-secondary"
								}),
								/* @__PURE__ */ (0, K.jsx)("strong", {
									className: "min-w-0 break-words text-title-3-medium text-text-primary",
									children: B(e)
								}),
								c ?? /* @__PURE__ */ (0, K.jsx)(X, { run: e })
							]
						}), /* @__PURE__ */ (0, K.jsx)(He, {
							run: e,
							runs: u
						})]
					}),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					/* @__PURE__ */ (0, K.jsx)(Xe, {
						run: e,
						active: l
					}),
					S ? /* @__PURE__ */ (0, K.jsx)(m, {
						href: S.href,
						"data-task-subject": e.id,
						title: S.label,
						className: "min-w-0 max-w-full self-start truncate text-text-primary",
						children: S.label
					}) : null,
					T ? /* @__PURE__ */ (0, K.jsx)("p", {
						"data-task-error": "",
						className: "text-caption-1-regular text-text-secondary wrap-anywhere",
						children: T
					}) : null,
					n
				]
			}),
			a ? /* @__PURE__ */ (0, K.jsx)("div", {
				className: "border-t border-separator-border",
				children: a
			}) : null,
			T && w !== T ? /* @__PURE__ */ (0, K.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, K.jsx)(i, {
					row: !0,
					summary: z("manage:taskCenter.errorDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, K.jsx)(Me, {
						label: z("manage:taskCenter.taskErrorDetails", { task: B(e) }),
						children: w
					})
				})
			}) : null,
			x ? /* @__PURE__ */ (0, K.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, K.jsxs)(i, {
					row: !0,
					summary: z("manage:taskCenter.taskDetailsCount", { count: x }),
					contentClassName: "pb-5",
					isOpen: d,
					onOpenChange: f,
					children: [
						_.error ? /* @__PURE__ */ (0, K.jsx)(h, {
							tone: "error",
							children: j(_.error)
						}) : null,
						b < x ? /* @__PURE__ */ (0, K.jsx)("p", {
							className: "text-caption-1-regular text-text-secondary",
							children: z("manage:taskCenter.showingCount", { count: b })
						}) : null,
						/* @__PURE__ */ (0, K.jsx)(et, { rows: y })
					]
				})
			}) : null,
			Object.keys(e.result_summary || {}).some((e) => !(S && Qe.has(e))) ? /* @__PURE__ */ (0, K.jsx)("div", {
				className: "border-t border-separator-border",
				children: /* @__PURE__ */ (0, K.jsx)(i, {
					row: !0,
					summary: z("manage:taskCenter.technicalDetails"),
					contentClassName: "pb-5",
					children: /* @__PURE__ */ (0, K.jsx)(Ae, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: z("manage:taskCenter.taskTechnicalDetails", { task: B(e) })
					})
				})
			}) : null
		]
	});
}
function tt({ run: e, followups: t, followupTotal: n }) {
	let r = e.progress_total || 0, i = e.progress_current || 0, a = e.control?.state, o = a && a !== "running", s = o ? Y[a] : ye(e) || z("manage:taskCenter.inProgress"), c = ie(e.elapsed_seconds), l = [w[e.trigger] || e.trigger, c && z("manage:taskCenter.runningFor", { elapsed: c })].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, K.jsx)(Z, {
		run: e,
		meta: l,
		followups: t,
		followupTotal: n,
		children: r > 0 ? /* @__PURE__ */ (0, K.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, K.jsx)(y, {
				label: s,
				value: Math.min(i, r),
				max: r
			}), /* @__PURE__ */ (0, K.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					s,
					" · ",
					z("manage:taskCenter.progressItems", { progress: I(i, r) })
				]
			})]
		}) : o ? /* @__PURE__ */ (0, K.jsx)("p", {
			"data-copy-key": `tasks.control.state.${a}`,
			className: "text-caption-1-regular text-text-secondary",
			children: s
		}) : /* @__PURE__ */ (0, K.jsx)(f, { label: s })
	});
}
function nt({ run: e, followups: t, runs: r, latest: a, followupTotal: o, followupFailed: s = 0, followupCancelled: c = 0 }) {
	let d = !!(r && r.length > 1 && o), f = d ? [z("manage:taskCenter.processedTotal", { count: o }), s ? z("manage:taskCenter.failedCount", { count: s }) : ""].filter(Boolean) : Te(V(e) ? {
		...e.result_summary,
		name: ""
	} : e.result_summary).filter((t) => t !== R(e) && t !== L(R(e))), p = Ee(e), m = ve(e, a), h = ie(e.elapsed_seconds), g = r && r.length > 1 ? r[r.length - 1] : void 0, _ = (g ? [
		w[e.trigger] || e.trigger,
		z("manage:taskCenter.lastRuns", { count: r.length }),
		`${F(g.finished_at)} – ${F(e.finished_at)}`
	] : [
		w[e.trigger] || e.trigger,
		F(e.finished_at),
		h && z("manage:taskCenter.took", { elapsed: h })
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, K.jsxs)(Z, {
		run: e,
		meta: _,
		error: R(e),
		followups: t,
		followupTotal: o,
		controlled: r,
		issues: p.length ? /* @__PURE__ */ (0, K.jsx)(i, {
			row: !0,
			summary: z("manage:taskCenter.issueDetailsCount", { count: p.length }),
			contentClassName: "pb-5",
			children: /* @__PURE__ */ (0, K.jsx)(Me, {
				label: z("manage:taskCenter.issueDetails"),
				children: /* @__PURE__ */ (0, K.jsx)("ul", {
					className: "flex min-w-0 flex-col whitespace-normal",
					"data-task-issues": "",
					children: p.map((e, t) => /* @__PURE__ */ (0, K.jsx)(l, {
						title: /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [e.label, e.provider || e.kind ? /* @__PURE__ */ (0, K.jsxs)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: [" · ", [e.provider, e.kind].filter(Boolean).join(" · ")]
						}) : null] }),
						children: /* @__PURE__ */ (0, K.jsx)(Ne, {
							text: e.error,
							className: "text-caption-1-regular text-text-secondary"
						})
					}, `${e.source}-${t}`))
				})
			})
		}) : void 0,
		badge: c && e.status === "succeeded" ? /* @__PURE__ */ (0, K.jsx)(n, {
			color: "rose",
			children: /* @__PURE__ */ (0, K.jsx)("span", {
				"data-copy-key": `tasks.followups.cancelled.${c === o ? "all" : "partial"}`,
				children: z(c === o ? "manage:taskCenter.followupsCanceled" : "manage:taskCenter.someFollowupsCanceled")
			})
		}) : d && s ? /* @__PURE__ */ (0, K.jsx)(n, {
			color: "yellow",
			children: z("manage:taskStatus.issuesFound")
		}) : void 0,
		children: [
			c ? /* @__PURE__ */ (0, K.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: z("manage:taskCenter.followupsCanceledCount", { count: c })
			}) : null,
			f.length === 1 ? /* @__PURE__ */ (0, K.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f[0]
			}) : f.length ? /* @__PURE__ */ (0, K.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f.map((e, t) => /* @__PURE__ */ (0, K.jsx)("li", { children: e }, t))
			}) : null,
			!p.length && N(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, K.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: z("manage:taskCenter.noIssueDetails")
			}) : null,
			m ? /* @__PURE__ */ (0, K.jsx)(u, {
				href: m.href,
				size: "small",
				trailingIcon: de,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function rt({ runs: e, followups: t, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = M(r, e), s = Math.max(o.total, t.length), c = o.total ? o.settled : t.filter((e) => !P(e)).length, l = o.total ? o.failed : t.filter((e) => e.status === "failed" || e.status === "interrupted").length, u = [
		w[i.trigger] || i.trigger,
		e.length > 1 ? z("manage:taskCenter.batches", { count: e.length }) : "",
		z("manage:taskCenter.startedAt", { time: F(a.started_at || a.finished_at) })
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, K.jsx)(Z, {
		run: i,
		meta: u,
		followups: t,
		followupTotal: s,
		resourceActive: !0,
		controlled: e,
		badge: i.control ? /* @__PURE__ */ (0, K.jsx)(X, { run: i }) : /* @__PURE__ */ (0, K.jsx)(n, {
			color: "blue",
			children: z("manage:taskStatus.running")
		}),
		children: /* @__PURE__ */ (0, K.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, K.jsx)(y, {
				label: z("manage:taskCenter.taskProgress", { task: B(i) }),
				value: c,
				max: s
			}), /* @__PURE__ */ (0, K.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [z("manage:taskCenter.processedProgress", { progress: I(c, s) }), l ? z("manage:taskCenter.failedSuffix", { count: l }) : ""]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, G.useId)();
	return /* @__PURE__ */ (0, K.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, K.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, paginate: t = !0, children: n }) {
	let [i, a] = (0, G.useState)({
		pageIndex: 0,
		pageSize: 20
	}), o = G.Children.toArray(n), { pageSize: s } = i, c = Math.min(i.pageIndex, Math.max(0, Math.ceil(o.length / s) - 1));
	return /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t ? o.slice(c * s, (c + 1) * s) : o
	}), t ? /* @__PURE__ */ (0, K.jsx)(r, {
		label: z("manage:taskCenter.taskList"),
		total: o.length,
		pagination: {
			...i,
			pageIndex: c
		},
		onChange: a
	}) : null] });
}
function it() {
	let [e, t] = (0, G.useState)(1), [n, i] = (0, G.useState)(20), s = U({
		queryKey: e === 1 && n === 20 ? C : [
			...C,
			"page",
			e,
			n
		],
		queryFn: ({ signal: t }) => ae(t, e, n),
		refetchInterval: (e) => _e(e.state.data),
		placeholderData: (e) => e
	}), [c, l] = (0, G.useState)(s.data);
	s.data && s.data !== c && l(s.data);
	let u = s.data || c, d = s.error ? j(s.error) : "";
	if (!u) return /* @__PURE__ */ (0, K.jsx)(je, { children: /* @__PURE__ */ (0, K.jsx)(h, {
		tone: "error",
		children: d || z("manage:taskCenter.loadFailed")
	}) });
	let f = u.finished || [], p = u.working_parents || [], m = [
		...u.running || [],
		...u.skipped || [],
		...f,
		...p
	], g = ue(m), _ = new Set(m.map((e) => e.id)), v = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && _.has(e.parent_run_id))), y = v(f), b = u.followup_counts || {}, x = (e) => e.flatMap((e) => g.get(e.id) || []), S = [...y, ...v(p)].filter((e) => M(b, [e]).active > 0 || g.get(e.id)?.some(P)).sort((e, t) => t.id - e.id), w = v(u.running || []), T = v(u.skipped || []), E = y.filter((e) => !S.includes(e) && !T.some((t) => t.id === e.id)), D = (e) => (g.get(e.id) || []).every((e) => e.status === "succeeded" && !N(e)) && M(b, [e]).failed === 0, ee = ce(E, (e) => pe(e) && (D(e) || Ze.has(e.task_key))), O = se(S, (e) => e.control?.state || "").sort((e, t) => t.run.id - e.run.id), k = me(m), A = !w.length && !S.length && !T.length && !E.length;
	return /* @__PURE__ */ (0, K.jsxs)(je, { children: [
		d ? /* @__PURE__ */ (0, K.jsx)(h, {
			tone: "error",
			children: d
		}) : null,
		/* @__PURE__ */ (0, K.jsx)(Ve, {}),
		u.available === !1 ? /* @__PURE__ */ (0, K.jsx)(h, {
			tone: "warning",
			children: u.message || z("manage:taskCenter.tableNotReady")
		}) : null,
		/* @__PURE__ */ (0, K.jsx)(Ie, {}),
		A ? /* @__PURE__ */ (0, K.jsx)(o, {
			icon: Oe,
			title: z("manage:taskCenter.emptyTitle"),
			children: z("manage:taskCenter.emptyText")
		}) : /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
			/* @__PURE__ */ (0, K.jsx)(Q, {
				title: z("manage:taskCenter.inProgress"),
				children: w.length || S.length ? /* @__PURE__ */ (0, K.jsxs)($, {
					live: !0,
					children: [w.map((e) => /* @__PURE__ */ (0, K.jsx)(tt, {
						run: e,
						followups: g.get(e.id),
						followupTotal: M(b, [e]).total
					}, e.id)), O.map(({ run: e, runs: t }) => /* @__PURE__ */ (0, K.jsx)(rt, {
						runs: t,
						followups: x(t),
						counts: b
					}, e.id))]
				}) : /* @__PURE__ */ (0, K.jsx)(h, {
					tone: "neutral",
					children: z("manage:taskCenter.noneRunning")
				})
			}),
			T.length ? /* @__PURE__ */ (0, K.jsx)(Q, {
				title: z("manage:taskCenter.skipped"),
				children: /* @__PURE__ */ (0, K.jsx)($, { children: T.map((e) => /* @__PURE__ */ (0, K.jsx)(nt, {
					run: e,
					latest: k.has(e.id),
					followups: g.get(e.id)
				}, e.id)) })
			}) : null,
			E.length || u.finished_total ? /* @__PURE__ */ (0, K.jsxs)(Q, {
				title: z("manage:taskCenter.recentlyCompleted"),
				children: [E.length ? /* @__PURE__ */ (0, K.jsx)($, {
					paginate: !1,
					children: ee.map(({ run: e, runs: t }) => {
						let n = M(b, t);
						return /* @__PURE__ */ (0, K.jsx)(nt, {
							run: e,
							runs: t,
							latest: k.has(e.id),
							followups: x(t),
							followupTotal: n.total,
							followupFailed: n.failed,
							followupCancelled: n.cancelled
						}, e.id);
					})
				}) : null, /* @__PURE__ */ (0, K.jsx)(r, {
					label: z("manage:taskCenter.recentlyCompleted"),
					total: u.finished_total ?? y.length,
					unit: z("manage:taskCenter.footerUnit"),
					pageUnit: z("manage:taskCenter.footerPageUnit"),
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
		/* @__PURE__ */ (0, K.jsx)(a, {})
	] });
}
export { it as ActivityPage };

//# debugId=3124c8f4-af00-4bee-b981-dac97b913b6a