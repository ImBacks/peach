(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8b951119-09ec-4462-871a-796e01c213db", e._sentryDebugIdIdentifier = "sentry-dbid-8b951119-09ec-4462-871a-796e01c213db");
	} catch {}
})();
import { ApiError as e, Button as t, ButtonLink as n, Chip as r, DIAGNOSTICS_KEY as i, Disclosure as a, EmptyState as o, Fact as s, FactList as c, Fieldset as l, FieldsetTitle as u, Input as d, LOC as f, LinkButton as p, Note as m, Section as h, SettingsCard as g, SettingsSectionLabel as _, Stack as v, TaskProgress as y, __toESM as b, apiGet as x, apiSend as S, busyProps as C, configurationSection as w, cx as T, diagnosticHeaders as E, diagnosticsSkeleton as ee, errorMessage as D, fetchDiagnostics as O, fmtDur as k, fmtSize as A, queryClient as j, require_jsx_runtime as M, require_react as N, settingsPath as P, t as F, tl as I, useAction as L, useQuery as R } from "./peach-app.js";
import { ErrorExcerpt as z } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { SiteMark as B } from "./peach-app.site-mark-D_VlIyJz.js";
import { DataTable as V } from "./peach-app.data-table-C4egVbd2.js";
// src/react/diagnostics/health-list.tsx
var H = /* @__PURE__ */ b(N(), 1), U = M(), W = (e) => e.title || e.name || e.code || F("manage:healthList.videoFallback", { id: e.id }), G = (e) => [[
	F("manage:shared.video"),
	F("manage:shared.code"),
	F("manage:shared.fileName"),
	F("manage:shared.library"),
	F("manage:shared.path"),
	F("manage:healthList.durationSeconds"),
	F("manage:healthList.sizeBytes")
], ...e.map((e) => [
	W(e),
	e.code ?? "",
	e.name,
	f[e.location] || e.location,
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function K({ group: e, openItem: n, receipt: r }) {
	let i = L(), [s, c] = (0, H.useState)([]), l = (e) => void i.run("copy", () => navigator.clipboard.writeText(G(e)), () => r(F("manage:healthList.copied"))), u = [
		{
			id: "title",
			label: F("manage:shared.video"),
			value: W,
			render: (e) => /* @__PURE__ */ (0, U.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, U.jsx)(p, {
					variant: "primary",
					className: "justify-start whitespace-normal text-left",
					onClick: () => n(e.id),
					children: W(e)
				}), e.name && e.name !== W(e) ? /* @__PURE__ */ (0, U.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.name,
					className: "block min-w-0 text-caption-1-regular text-text-secondary",
					children: e.name
				}) : null]
			})
		},
		{
			id: "code",
			label: F("manage:shared.code"),
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ (0, U.jsx)("span", {
				className: "whitespace-nowrap",
				children: e.code || F("manage:shared.unrecognized")
			})
		},
		{
			id: "location",
			label: F("manage:shared.library"),
			width: 128,
			value: (e) => f[e.location] || e.location,
			render: (e) => f[e.location] || e.location || F("manage:shared.notFound")
		},
		{
			id: "path",
			label: F("manage:healthList.filePath"),
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ (0, U.jsx)("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || F("manage:shared.notFound")
			})
		},
		{
			id: "duration",
			label: F("manage:shared.duration"),
			width: 112,
			value: (e) => e.duration ?? 0,
			render: (e) => e.duration && e.duration > 0 ? k(e.duration) : F("manage:shared.notFound")
		},
		{
			id: "size",
			label: F("manage:shared.size"),
			width: 112,
			value: (e) => e.size ?? 0,
			render: (e) => e.size === null ? F("manage:shared.notFound") : A(e.size)
		}
	];
	return /* @__PURE__ */ (0, U.jsx)(a, {
		summary: e.count === null ? `${e.label} · ${F("manage:shared.notFound")}` : F("manage:healthList.groupSummary", {
			label: e.label,
			count: e.count
		}),
		children: e.count === null ? /* @__PURE__ */ (0, U.jsx)(m, {
			tone: "neutral",
			children: F("manage:healthList.listNotFound")
		}) : e.items.length ? /* @__PURE__ */ (0, U.jsxs)(v, { children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [e.truncated ? /* @__PURE__ */ (0, U.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: F("manage:healthList.loadedCount", {
						loaded: e.items.length,
						count: e.count
					})
				}) : null, /* @__PURE__ */ (0, U.jsx)(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => l(e.items),
					children: F("manage:healthList.copyList")
				})]
			}),
			i.error ? /* @__PURE__ */ (0, U.jsx)(m, {
				tone: "error",
				children: i.error
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(V, {
				label: e.label,
				title: F("manage:healthList.tableTitle"),
				unit: F("manage:healthList.tableUnit"),
				panel: !1,
				items: e.items,
				columns: u,
				rowId: (e) => String(e.id),
				rowLabel: W,
				selected: s,
				onSelected: c,
				actions: (e) => /* @__PURE__ */ (0, U.jsx)(t, {
					size: "small",
					variant: "secondary",
					...C(i.busy === "copy"),
					onClick: () => l(e),
					children: F("manage:healthList.copySelected")
				})
			})
		] }) : /* @__PURE__ */ (0, U.jsx)(o, {
			icon: I,
			title: F("manage:healthList.emptyTitle"),
			size: "compact",
			children: F("manage:healthList.emptyBody")
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var q = "/api/diagnostics/exports", J = ["diagnostic-export"];
function Y({ kind: r, codes: i = "", children: a }) {
	let o = L(), s = R({
		queryKey: J,
		queryFn: ({ signal: e }) => x(q, e),
		refetchInterval: (e) => ["running", "cancelling"].includes(e.state.data?.status || "") ? 1e3 : !1
	}), c = s.data, l = c?.kind === r, u = c?.status === "running" || c?.status === "cancelling", d = F(r === "support" ? "manage:diagnosticsExport.downloadReport" : "manage:diagnosticsExport.exportFetchLog"), f = (e) => {
		j.setQueryData(J, e);
	}, p = () => void o.run("start", async (t) => {
		let n = await fetch(q, {
			method: "POST",
			signal: t,
			credentials: "same-origin",
			headers: {
				...await E(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: r,
				codes: i
			})
		}), a = await n.json().catch(() => null);
		if (!n.ok) throw new e(a?.detail || a?.error || F("manage:diagnosticsExport.startFailed"), n.status, a);
		if (!a || !a.job_id) throw Error(F("manage:diagnosticsExport.statusNotFound"));
		return a;
	}, f), h = () => void o.run("cancel", (e) => S(`${q}/${c.job_id}/cancel`, {}, "POST", e), f);
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: r === "support" ? "flex flex-wrap justify-end gap-2" : "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, U.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: u,
						...C(o.busy === "start"),
						onClick: p,
						children: d
					}),
					l && u ? /* @__PURE__ */ (0, U.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: c.status === "cancelling",
						...C(o.busy === "cancel"),
						onClick: h,
						children: F("manage:diagnosticsExport.cancelExport")
					}) : null,
					l && c.status === "complete" && c.download_url ? /* @__PURE__ */ (0, U.jsx)(n, {
						variant: "secondary",
						href: c.download_url,
						children: F("manage:diagnosticsExport.downloadFile")
					}) : null,
					a
				]
			}),
			l && u ? /* @__PURE__ */ (0, U.jsx)(y, {
				embedded: r === "scraping",
				value: c.done || 0,
				total: c.total,
				label: c.total ? F("manage:diagnosticsExport.progress", {
					stage: c.stage,
					done: c.done || 0,
					count: c.total
				}) : [
					c.stage || F("manage:diagnosticsExport.preparing"),
					c.rows ? F("manage:diagnosticsExport.candidateCount", { count: c.rows }) : "",
					c.files ? F("manage:diagnosticsExport.fileCount", { count: c.files }) : ""
				].filter(Boolean).join(" · ")
			}) : null,
			l && c.status === "complete" ? /* @__PURE__ */ (0, U.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: F("manage:diagnosticsExport.completedSize", { size: ((c.bytes || 0) / 1024 / 1024).toFixed(2) })
			}) : null,
			l && c.status === "cancelled" ? /* @__PURE__ */ (0, U.jsx)(m, {
				tone: "neutral",
				children: F("manage:diagnosticsExport.canceled")
			}) : null,
			s.isError ? /* @__PURE__ */ (0, U.jsx)(m, {
				tone: "error",
				action: /* @__PURE__ */ (0, U.jsx)(t, {
					type: "button",
					variant: "secondary",
					...C(s.isFetching),
					onClick: () => {
						s.refetch();
					},
					children: F("manage:diagnosticsExport.reload")
				}),
				children: F("manage:diagnosticsExport.progressNotFound")
			}) : null,
			o.error || l && c.status === "failed" ? /* @__PURE__ */ (0, U.jsx)(m, {
				tone: "error",
				children: o.error || c?.error
			}) : null
		]
	});
}
function X() {
	let [e, t] = (0, H.useState)("");
	return /* @__PURE__ */ (0, U.jsx)(l, {
		layout: "stack",
		labelledBy: "scraping-export-title",
		footer: /* @__PURE__ */ (0, U.jsx)(Y, {
			kind: "scraping",
			codes: e
		}),
		children: /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			"aria-label": F("manage:diagnosticsExport.exportFetchLog"),
			children: [
				/* @__PURE__ */ (0, U.jsx)(u, {
					id: "scraping-export-title",
					children: F("manage:diagnosticsExport.fetchLogTitle")
				}),
				/* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: F("manage:diagnosticsExport.fetchLogHint")
				}),
				/* @__PURE__ */ (0, U.jsx)(d, {
					label: F("manage:diagnosticsExport.codesLabel"),
					name: "scraping-codes",
					value: e,
					onChange: t,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: F("manage:diagnosticsExport.codesPlaceholder"),
					hint: F("manage:diagnosticsExport.codesHint")
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var te = {
	ok: F("manage:diagnostics.statusOk"),
	warning: F("manage:diagnostics.statusWarning"),
	failed: F("manage:diagnostics.statusFailed"),
	unknown: F("manage:shared.notFound"),
	disabled: F("manage:diagnostics.statusDisabled"),
	stale: F("manage:diagnostics.statusStale"),
	unchecked: F("manage:diagnostics.statusUnchecked")
}, ne = { "/tasks": F("manage:diagnostics.viewTasks") }, re = [
	[F("manage:diagnostics.groupLibraries"), ["media_mounts", "data_root"]],
	[F("manage:diagnostics.groupDatabase"), ["database", "schema"]],
	[F("manage:diagnostics.groupTools"), ["ffmpeg"]],
	[F("manage:diagnostics.groupConfig"), [
		"configured",
		"security",
		"port",
		"version"
	]],
	[F("manage:diagnostics.groupTasks"), ["tasks"]]
], Z = (e) => new Date(e).toLocaleString();
function Q({ status: e }) {
	return /* @__PURE__ */ (0, U.jsx)(r, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: te[e] ?? F("manage:shared.notFound")
	});
}
function ie() {
	return /* @__PURE__ */ (0, U.jsx)(Y, { kind: "support" });
}
function $({ name: e, check: t, compact: r = !1 }) {
	let i = t.target === "/settings/library" && (e === "security" || e === "port") ? P("network") : t.target, a = r ? "h4" : "h3";
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		"data-diagnostic-check": e,
		className: T("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", r ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, U.jsxs)("div", {
			className: T("flex min-w-0 flex-1 flex-col", r ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ (0, U.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, U.jsx)(a, {
						className: T("text-text-primary", r ? "text-body-2-medium" : "text-body-medium"),
						children: t.label
					}), /* @__PURE__ */ (0, U.jsx)(Q, { status: t.status })]
				}),
				/* @__PURE__ */ (0, U.jsx)("p", {
					"data-check-reason": !0,
					className: T("text-body-2-regular break-words", r ? "text-text-secondary" : "text-text-primary"),
					children: t.reason
				}),
				t.action ? /* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: F("manage:diagnostics.suggestedFixText", { action: t.action })
				}) : null
			]
		}), i ? /* @__PURE__ */ (0, U.jsx)("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ (0, U.jsx)(n, {
				size: "small",
				variant: "secondary",
				href: i,
				children: i.startsWith("/settings/") ? F("manage:diagnostics.openSection", { section: w(i) }) : ne[i] ?? F("manage:diagnostics.openRelated")
			})
		}) : null]
	});
}
function ae(e) {
	let r = R({
		queryKey: i,
		queryFn: ({ signal: e }) => O(e),
		staleTime: 1e4
	}), o = L(), [l, u] = (0, H.useState)(""), d = () => void o.run("refresh", async () => {
		let e = await r.refetch();
		if (e.error) throw e.error;
		return e.data;
	}, () => u(""), (e) => u(D(e))), f = r.data;
	if (!f && r.isPending) return /* @__PURE__ */ (0, U.jsx)("div", {
		role: "status",
		"aria-label": F("manage:diagnostics.loading"),
		dangerouslySetInnerHTML: { __html: ee() }
	});
	if (!f) return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "ui-configpage",
		children: [
			/* @__PURE__ */ (0, U.jsx)(ie, {}),
			/* @__PURE__ */ (0, U.jsx)(m, {
				tone: "error",
				title: F("manage:diagnostics.loadFailed"),
				action: /* @__PURE__ */ (0, U.jsx)(t, {
					variant: "secondary",
					onClick: d,
					...C(o.busy === "refresh"),
					children: F("manage:diagnostics.checkAgain")
				}),
				children: r.error ? D(r.error) : F("manage:diagnostics.reportNotFound")
			}),
			/* @__PURE__ */ (0, U.jsx)(X, {})
		]
	});
	let p = Object.entries(f.checks).filter(([, e]) => [
		"warning",
		"failed",
		"unknown"
	].includes(e.status)), y = Object.entries(f.checks).filter(([, e]) => ![
		"warning",
		"failed",
		"unknown"
	].includes(e.status));
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, U.jsx)("div", {
				"data-guide-target": "report",
				children: /* @__PURE__ */ (0, U.jsx)(Y, {
					kind: "support",
					children: /* @__PURE__ */ (0, U.jsx)(t, {
						variant: "secondary",
						onClick: d,
						...C(o.busy === "refresh"),
						children: F("manage:diagnostics.checkAgain")
					})
				})
			}),
			l ? /* @__PURE__ */ (0, U.jsx)(m, {
				tone: "error",
				children: l
			}) : null,
			p.length ? /* @__PURE__ */ (0, U.jsx)(h, {
				guide: "attention",
				title: F("manage:diagnostics.attentionTitle", { count: p.length }),
				children: p.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)($, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(h, {
				guide: "health",
				title: F("manage:diagnostics.collectionHealth"),
				children: /* @__PURE__ */ (0, U.jsxs)(v, { children: [f.library.issue_at ? /* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: F("manage:diagnostics.healthRecordedAtTime", { time: Z(f.library.issue_at) })
				}) : null, Object.entries(f.library.groups).map(([t, n]) => /* @__PURE__ */ (0, U.jsx)(K, {
					group: n,
					...e
				}, t))] })
			}),
			y.length ? /* @__PURE__ */ (0, U.jsx)("section", {
				"aria-label": F("manage:diagnostics.systemChecks"),
				children: /* @__PURE__ */ (0, U.jsx)(a, {
					summary: F("manage:diagnostics.otherChecks", { count: y.length }),
					contentClassName: "gap-5",
					children: re.map(([e, t]) => {
						let n = y.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ (0, U.jsxs)("section", {
							"aria-label": e,
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, U.jsxs)("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [e, /* @__PURE__ */ (0, U.jsx)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: F("manage:diagnostics.groupCount", { count: n.length })
								})]
							}), /* @__PURE__ */ (0, U.jsx)(g, { children: n.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)($, {
								name: e,
								check: t,
								compact: !0
							}, e)) })]
						}, e) : null;
					})
				})
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(X, {}),
			/* @__PURE__ */ (0, U.jsxs)("section", {
				"data-guide-target": "sessions",
				"aria-label": F("manage:diagnostics.sourceSessions"),
				className: "flex min-w-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, U.jsx)(_, { children: F("manage:diagnostics.sourceSessions") }),
					f.sources.map((e) => /* @__PURE__ */ (0, U.jsx)("article", {
						"data-diagnostic-source": e.source,
						children: /* @__PURE__ */ (0, U.jsx)(g, { children: /* @__PURE__ */ (0, U.jsxs)(v, { children: [
							/* @__PURE__ */ (0, U.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, U.jsxs)("h3", {
									className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
									children: [/* @__PURE__ */ (0, U.jsx)(B, { source: e.source }), e.label]
								}), /* @__PURE__ */ (0, U.jsx)(Q, { status: e.status })]
							}),
							/* @__PURE__ */ (0, U.jsx)(z, {
								text: e.reason,
								className: "text-body-regular text-text-primary"
							}),
							/* @__PURE__ */ (0, U.jsxs)(c, { children: [
								/* @__PURE__ */ (0, U.jsx)(s, {
									term: F("manage:diagnostics.lastSuccess"),
									children: e.last_success_at ? Z(e.last_success_at) : F("manage:diagnostics.noSuccessYet")
								}),
								e.last_check_at ? /* @__PURE__ */ (0, U.jsxs)(s, {
									term: F("manage:diagnostics.lastChecked"),
									children: [Z(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? F("manage:diagnostics.checkDuration", { seconds: e.elapsed_s.toFixed(2) }) : ""]
								}) : null,
								/* @__PURE__ */ (0, U.jsx)(s, {
									term: F("manage:diagnostics.pausedUntil"),
									children: e.cooldown_until ? Z(e.cooldown_until) : F("manage:diagnostics.notPaused")
								})
							] })
						] }) })
					}, e.source)),
					/* @__PURE__ */ (0, U.jsx)("div", { children: /* @__PURE__ */ (0, U.jsx)(n, {
						size: "small",
						variant: "secondary",
						href: "/sources",
						children: F("manage:diagnostics.openSources")
					}) })
				]
			})
		]
	});
}
export { ae as DiagnosticsPage };

//# debugId=8b951119-09ec-4462-871a-796e01c213db