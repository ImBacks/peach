(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d23b3bb-c032-492a-a931-a639c79756dc", e._sentryDebugIdIdentifier = "sentry-dbid-7d23b3bb-c032-492a-a931-a639c79756dc");
	} catch {}
})();
import { BATCH_DELETE_TEXT as e, Button as t, CLEANUP_ENTRY as n, CLEANUP_ENTRY_GRID as r, CLEANUP_HASH_REDIRECTS as i, CLEANUP_TOOLS as a, Chip as o, DIRECTORY_TEMPLATE_ERROR as s, DUPLICATES_KEY as c, Fieldset as l, FieldsetTitle as u, IDLE_REPAIR as d, IconButton as f, IndexSearch as p, Input as m, JUNK_KEY as h, LINKS_KEY as g, LINK_CHECK_KEY as _, LINK_KINDS as v, LINK_PRUNE_KEY as ee, LOC as y, LibraryLabel as b, LibraryProcessingCard as x, MEDIA_REPAIR_KEY as S, MEDIA_REPAIR_URL as C, MEDIA_SOURCES_KEY as w, MEDIA_SOURCE_ICONS as T, Note as E, ORGANIZE_KEY as te, ORGANIZE_PARAMETER_HINT as ne, ORGANIZE_SCOPE_HINT as re, ORGANIZE_TEXT as D, ORPHAN_RECORDS_KEY as O, ORPHAN_RECORDS_TEXT as k, PERFORMER_DELETE_KEY as A, PLAIN_STAT_STRIP as j, PlainStat as M, Progress as ie, QUALITY_GOALS_KEY as N, REPAIR_CARD_TEXT as ae, REPAIR_LIBRARIES_KEY as oe, RESOURCE_APPLY_KEY as P, RESOURCE_SCAN_KEY as F, RESOURCE_SYNC_TEXT as I, RESULT_PANEL as se, RESULT_SECTION as ce, REVIEW_COUNTS_KEY as L, SOURCE_LABELS as le, SectionHeading as ue, Select as de, SelectItem as fe, SourceLabel as pe, SourceMark as me, StatusLabel as he, TRASH_KEY as ge, TaskProgress as R, Wt as _e, __toESM as ve, apiSend as z, applyConfirmText as ye, applyLeftovers as B, applyPlanText as be, applyText as xe, attachOrphan as Se, baseName as Ce, busyProps as V, candidateText as we, checkLine as Te, confirmModal as H, cx as Ee, deletePerformerVideos as De, entityDisplayName as Oe, entityFaceImg as ke, entityPath as Ae, errorMessage as U, esc as je, fetchDeletePerformers as Me, fetchDeletePlan as Ne, fetchDuplicates as Pe, fetchJunkSummary as Fe, fetchLinkCheck as Ie, fetchLinkPrune as Le, fetchLinkStats as Re, fetchMediaRepair as ze, fetchMediaSources as Be, fetchOrganize as Ve, fetchOrganizeExample as He, fetchOrphanRecords as Ue, fetchQualityGoals as We, fetchRepairLibraries as Ge, fetchResourceApply as Ke, fetchResourceScan as qe, fetchReviewCounts as Je, fetchTrashSummary as Ye, firstGrapheme as Xe, fmtSize as W, hasChanges as Ze, hasResourceRoots as Qe, jobText as G, junkBreakdown as $e, missingToolText as et, organizeOutcome as tt, peachHistory$1 as nt, pickOrganizeFolder as rt, plainStatClass as K, planSummary as it, previewOrganize as at, pruneText as ot, purgeCount as st, purgeOrphan as ct, queryClient as q, recordsText as lt, rememberTemplates as ut, require_jsx_runtime as dt, require_react as ft, reviewSummary as pt, scanLine as mt, serverLabel as ht, sourceMeta as gt, spriteGlyph as J, stageText as _t, startLinkCheck as vt, startLinkPrune as yt, startOrganize as bt, startResourceApply as xt, startResourceScan as St, statusLine as Ct, t as Y, useAction as wt, useBackgroundJob as X, useEntityNames as Tt, useMutation as Et, useOrderedLibraries as Dt, useQuery as Z, withOrganizeJob as Ot } from "./peach-app.js";
import { Page as kt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as At } from "./peach-app.error-excerpt-Ugft6I5o.js";
import { DataTable as jt } from "./peach-app.data-table-C4egVbd2.js";
import { SiteMark as Mt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as Nt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as Pt } from "./peach-app.folder-rows-C3hhF_90.js";
import { ConnectionStatus as Ft } from "./peach-app.connection-status-BrXhLGSm.js";
// src/react/data-cleanup/cleanup-entry-card.tsx
var Q = /* @__PURE__ */ ve(ft(), 1), $ = dt(), It = J("chevron-right");
function Lt({ label: e, icon: t, summary: r, detail: i, state: a, attributes: o, onOpen: s }) {
	return /* @__PURE__ */ (0, $.jsxs)("button", {
		type: "button",
		...o,
		className: n.face,
		onClick: s,
		"data-entry-state": a,
		"aria-busy": a === "loading" || void 0,
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"aria-hidden": !0,
				className: n.icon,
				children: /* @__PURE__ */ (0, $.jsx)(t, {
					"aria-hidden": !0,
					className: "size-5"
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)("span", {
				className: n.body,
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: n.title,
						children: e
					}),
					/* @__PURE__ */ (0, $.jsx)("span", {
						className: Ee(n.summary, a === "error" && "text-text-error-primary"),
						children: r
					}),
					i ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: n.detail,
						children: i
					}) : null
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(It, {
				"aria-hidden": !0,
				className: n.arrow
			})
		]
	});
}
// src/react/media-repair/media-repair-card.tsx
var Rt = (e) => T[e] || e, zt = (e) => q.setQueryData(S, e);
function Bt({ toast: e = () => {} }) {
	let n = X({
		queryKey: S,
		queryFn: ({ signal: e }) => ze(e),
		start: (e) => z(C, {
			library: e,
			restart: !0
		}),
		onFinish: (t) => {
			t.status === "complete" && !t.failed && !t.missing_tool && e(t.repaired ? Y("cleanup:mediaRepair.repaired", { count: t.repaired }) : Y("cleanup:mediaRepair.nothingToRepair"));
		}
	}), r = Z({
		queryKey: oe,
		queryFn: ({ signal: e }) => Ge(e)
	}), [i, a] = (0, Q.useState)(""), o = wt(), s = n.job ?? d, c = Dt(r.data ?? [], (e) => e.id), f = s.status === "running", p = c.find((e) => e.id === (f ? s.library : i)) ?? c.find((e) => e.id === s.library) ?? c[0], m = () => {
		p && H({
			title: Y("cleanup:mediaRepair.confirmTitle", { name: p.name }),
			body: [Y("cleanup:mediaRepair.body"), ...p.metered ? [Y("cleanup:mediaRepair.meteredWarning")] : []].join(Y("cleanup:shared.sentenceGap")),
			confirmLabel: Y("cleanup:mediaRepair.confirm"),
			onConfirm: async () => {
				await n.start.mutateAsync(p.id);
			}
		});
	}, h = () => void o.run("stop", (e) => z(C, { stop: !0 }, "POST", e), zt), g = n.outcome, _ = Ct(f ? s : g ?? d), v = o.error || G(g, "error") || (n.query.error ? Y("cleanup:mediaRepair.statusUnavailable") : "");
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)(l, {
			layout: "split",
			label: Y("cleanup:tools.mediaRepair"),
			footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(de, {
				"aria-label": Y("cleanup:mediaRepair.library"),
				prefix: Y("cleanup:mediaRepair.library"),
				className: "w-48",
				selectedKey: p?.id ?? null,
				isDisabled: f || !c.length,
				"aria-busy": r.isPending || void 0,
				onSelectionChange: (e) => {
					e !== null && a(String(e));
				},
				children: c.map((e) => /* @__PURE__ */ (0, $.jsx)(fe, {
					id: e.id,
					textValue: e.name,
					children: /* @__PURE__ */ (0, $.jsx)(b, { library: {
						id: e.id,
						name: e.name,
						icon: Rt(e.icon)
					} })
				}, e.id))
			}), f ? /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: h,
				...V(o.busy === "stop"),
				children: Y("cleanup:shared.stop")
			}) : /* @__PURE__ */ (0, $.jsx)(t, {
				onClick: m,
				disabled: !p,
				children: Y("cleanup:mediaRepair.start")
			})] }),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.mediaRepair") }),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: ae
					}),
					f && s.total ? /* @__PURE__ */ (0, $.jsx)(ie, {
						label: Y("cleanup:mediaRepair.progress"),
						value: s.checked,
						max: s.total
					}) : null,
					_ ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: _
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [
				g?.status === "complete" && g.missing_tool ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "warning",
					title: Y("cleanup:mediaRepair.missingTool"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "ghost",
						size: "small",
						onClick: n.dismiss,
						children: Y("cleanup:mediaRepair.dismiss")
					}),
					children: et(g)
				}) : null,
				r.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:mediaRepair.librariesUnavailable")
				}) : null,
				v ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: v
				}) : null
			]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function Vt({ className: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, $.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, $.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, $.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var Ht = J("rotate-cw"), Ut = Y("cleanup:links.goneHint"), Wt = Y("cleanup:links.unclearHint"), Gt = Y("cleanup:links.pruneHint"), Kt = Y("cleanup:shared.reconnecting"), qt = (e) => Number(e || 0).toLocaleString();
function Jt({ label: e, value: t, note: n }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, $.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: n
			}) : null
		]
	});
}
function Yt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	if (!t.length) return null;
	let c = [
		{
			id: "entity",
			label: Y("cleanup:links.columnEntry"),
			width: 180,
			min: 128,
			value: (e) => e.entity,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
				href: e.entity_id && e.entity_kind ? Ae(e.entity_kind, e.entity, e.entity_id) : void 0,
				"data-link-identity": "",
				children: [/* @__PURE__ */ (0, $.jsx)("span", {
					"data-link-avatar": "",
					className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${Nt}`,
					"aria-hidden": !0,
					dangerouslySetInnerHTML: { __html: `<span>${je(Xe(e.entity))}</span>` + ke({
						kind: e.entity_kind,
						id: e.entity_id,
						hasImage: e.face?.has_image,
						version: e.face?.image_version,
						focus: e.face?.avatar_focus,
						thumb: !0,
						mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
					}) }
				}), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.entity
				})]
			})
		},
		{
			id: "kind",
			label: Y("cleanup:shared.type"),
			width: 128,
			value: (e) => v[e.link_kind] || e.link_kind,
			render: (e) => v[e.link_kind] || e.link_kind
		},
		{
			id: "label",
			label: Y("cleanup:links.columnName"),
			min: 128,
			value: (e) => e.label || "",
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "flex min-w-24 items-center gap-2",
				"data-link-name": "",
				children: /* @__PURE__ */ (0, $.jsx)("span", {
					className: "min-w-0 wrap-anywhere",
					children: e.label || new URL(e.url).hostname
				})
			})
		},
		{
			id: "note",
			label: Y("cleanup:links.columnResult"),
			width: 320,
			min: 192,
			value: (e) => e.note,
			render: (e) => /* @__PURE__ */ (0, $.jsx)("div", {
				className: "min-w-0 w-full",
				"data-link-result": s ? "gone" : "unclear",
				children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, $.jsx)(he, {
					tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
					"data-link-code": "",
					children: e.note.trim()
				}) : /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex flex-col items-start gap-1",
					children: [/* @__PURE__ */ (0, $.jsx)(he, {
						tone: s ? "error" : "warning",
						children: Y(s ? "cleanup:links.dead" : "cleanup:links.inconclusive")
					}), /* @__PURE__ */ (0, $.jsx)(At, {
						text: ht(e.note_code ?? "", e.note, e.note_params),
						className: "tabular-nums text-text-secondary"
					})]
				})
			})
		},
		{
			id: "url",
			label: Y("cleanup:links.columnUrl"),
			width: 360,
			min: 180,
			value: (e) => e.url,
			render: (e) => /* @__PURE__ */ (0, $.jsxs)("a", {
				href: e.url,
				target: "_blank",
				rel: "noopener noreferrer",
				title: e.url,
				"data-link-address": "",
				className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)(Mt, { linkId: e.id }),
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-middle-truncate": !0,
						className: "min-w-0 truncate",
						children: e.url
					}),
					/* @__PURE__ */ (0, $.jsx)(_e, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})
				]
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: ce,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, $.jsx)(jt, {
			label: e,
			items: t,
			columns: c,
			rowId: (e) => String(e.id),
			description: n,
			unit: Y("cleanup:links.unit"),
			panel: !1,
			footerActions: o,
			rowLabel: (e) => Y("cleanup:links.rowLabel", {
				entity: e.entity,
				link: e.label || e.url
			}),
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	});
}
function Xt() {
	let e = Z({
		queryKey: g,
		queryFn: ({ signal: e }) => Re(e)
	}), [n, r] = (0, Q.useState)([]), [i, a] = (0, Q.useState)([]), s = X({
		queryKey: ee,
		queryFn: ({ signal: e }) => Le(e),
		start: yt,
		onFinish: () => {
			q.invalidateQueries({
				queryKey: g,
				exact: !0
			}), q.invalidateQueries({
				queryKey: _,
				exact: !0
			});
		}
	}), c = X({
		queryKey: _,
		queryFn: ({ signal: e }) => Ie(e),
		start: vt,
		onStarted: () => {
			s.dismiss(), r([]), a([]);
		}
	}), d = c.job, f = d?.check_id ?? "";
	(0, Q.useEffect)(() => {
		r([]), a([]);
	}, [f]);
	let p = c.running || c.start.isPending, m = s.running || s.start.isPending, h = !!c.job && !!s.job, y = d?.status === "complete", b = d?.gone ?? [], x = d?.unclear ?? [], S = y ? x : [], C = b.filter((e) => i.includes(e.id)).map((e) => e.id), w = S.filter((e) => n.includes(e.id)).map((e) => e.id), T = e.data, te = (T?.top_hosts ?? []).slice(0, 3), ne = (e) => {
		!h || p || e && !e.length || c.start.mutate(e ? {
			retry: e,
			checkId: f
		} : {});
	}, re = (e) => {
		h && !m && b.length && H({
			title: Y("cleanup:links.deleteDead"),
			body: Y("cleanup:links.deleteDeadBody", { count: e?.length ?? b.length }),
			confirmLabel: Y("cleanup:links.deleteDead"),
			danger: !0,
			onConfirm: () => s.start.mutateAsync({
				checkId: f,
				ids: e
			})
		});
	}, D = s.outcome, O = c.start.error ?? s.start.error, k = null, A = null;
	if (D?.status === "failed") A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.pruneIncomplete"),
		children: G(D, "error") || Y("cleanup:links.checkTaskLog")
	});
	else if (D && !b.length && !x.length) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "success",
		title: Y("cleanup:links.pruneDone"),
		children: ot(D)
	});
	else if (O) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: U(O)
	});
	else if (c.query.isError && d) A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: Kt
	});
	else if (d?.status === "failed") A = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:links.checkFailed"),
		children: G(d, "error") || Y("cleanup:links.checkFailed")
	});
	else if (d && d.status !== "idle") {
		k = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [d.status === "running" ? /* @__PURE__ */ (0, $.jsx)(R, {
			embedded: !0,
			label: Te(d),
			value: Math.min(d.checked || 0, d.total || 0),
			total: d.total
		}) : null, m ? /* @__PURE__ */ (0, $.jsx)(R, {
			embedded: !0,
			label: G(s.job) || Y("cleanup:links.pruning"),
			value: Math.min(s.job?.checked || 0, s.job?.total || 0),
			total: s.job?.total
		}) : null] });
		let e = Y("cleanup:links.retrySelected", { count: w.length });
		A = y || b.length || x.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
			className: se,
			children: [
				D?.status === "complete" ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "success",
					title: Y("cleanup:links.pruneDone"),
					children: ot(D)
				}) : null,
				/* @__PURE__ */ (0, $.jsx)(Yt, {
					title: Y("cleanup:links.dead"),
					items: b,
					hint: Ut,
					picked: i,
					onPick: a,
					confirmed: !0,
					footer: y && b.length ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: Gt
					}), /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						...V(m),
						onClick: () => re(),
						children: Y("cleanup:links.deleteDeadCount", { count: b.length })
					})] }) : null,
					children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "danger",
						size: "small",
						disabled: !y || !C.length,
						...V(m),
						onClick: () => re(C),
						children: Y("cleanup:links.deleteSelected", { count: C.length })
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(Yt, {
					title: Y("cleanup:links.unreached"),
					items: x,
					hint: Wt,
					picked: n,
					onPick: r,
					footer: S.length ? /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "primary",
						leadingIcon: Ht,
						...V(p),
						onClick: () => ne(S.map((e) => e.id)),
						children: Y("cleanup:links.retryAll", { count: S.length })
					}) : null,
					children: S.length ? /* @__PURE__ */ (0, $.jsx)($.Fragment, { children: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						leadingIcon: Ht,
						disabled: !w.length,
						...V(p),
						onClick: () => ne(w),
						children: e
					}) }) : null
				}),
				y && !b.length && !x.length ? /* @__PURE__ */ (0, $.jsx)("p", {
					className: `${ce} text-body-regular text-notification-success-foreground`,
					children: Y("cleanup:links.allReachable")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-link-check": "",
				leadingIcon: Vt,
				disabled: !h,
				...V(p),
				onClick: () => ne(),
				children: Y(p ? "cleanup:links.checking" : y ? "cleanup:links.checkAgain" : "cleanup:links.checkLinks")
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "link-manager-title",
					gap: "small",
					children: Y("cleanup:tools.links")
				}),
				e.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:links.statsLoadFailed"),
					children: U(e.error)
				}) : T ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, $.jsx)(Jt, {
						label: Y("cleanup:links.totalLinks"),
						value: qt(T.total),
						note: Y("cleanup:links.entitySpread", { count: Number(T.entities || 0) })
					}), Object.entries(T.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(Jt, {
						label: v[e] || e,
						value: qt(t)
					}, e))]
				}), te.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("cleanup:links.topSites")
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: te.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, $.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, $.jsx)(Mt, { linkId: T.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, $.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, $.jsx)(_e, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, $.jsx)(o, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "tabular-nums",
									children: qt(t)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: k
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: A
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Zt = (e, t) => t ? Y("cleanup:organize.applyBodyPath", {
	name: e,
	path: t
}) : Y("cleanup:organize.applyBodyAll", { name: e }), Qt = Y("cleanup:organize.rollbackBody"), $t = 8;
function en({ plan: e }) {
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, $t).map((e) => /* @__PURE__ */ (0, $.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: Ce(e.current_path)
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, $.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: Ce(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > $t ? /* @__PURE__ */ (0, $.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: Y("cleanup:organize.planTruncated")
	}) : null] });
}
function tn({ toast: e, failure: n }) {
	let r = Z({
		queryKey: te,
		queryFn: ({ signal: e }) => Ve(e)
	}), i = r.data, a = i?.locations ?? [], [o, c] = (0, Q.useState)(""), d = a.some((e) => e.location === o) ? o : a[0]?.location ?? "", p = i?.templates?.[d], [h, g] = (0, Q.useState)(null), _ = h?.location === d ? h : {
		location: d,
		file: p?.file ?? "",
		dir: p?.dir ?? ""
	}, v = (e) => {
		g({
			..._,
			...e
		}), P.reset();
	}, [ee, b] = (0, Q.useState)({
		location: "",
		path: ""
	}), x = ee.location === d ? ee.path : "", S = (0, Q.useRef)({
		location: d,
		path: x
	});
	S.current = {
		location: d,
		path: x
	};
	let [C, w] = (0, Q.useState)(null), O = (0, Q.useRef)(null), k = (0, Q.useRef)(null), A = (0, Q.useRef)(null), j = Z({
		queryKey: [
			"organize-example",
			_.file,
			_.dir
		],
		queryFn: ({ signal: e }) => He(_.file, _.dir, e),
		enabled: !!i
	}), [M, ie] = (0, Q.useState)("file"), N = (0, Q.useRef)(!1), ae = (0, Q.useRef)(null);
	(0, Q.useLayoutEffect)(() => {
		let e = ae.current;
		if (!e) return;
		ae.current = null;
		let t = (e.field === "file" ? O : k).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let oe = () => ({
		location: d,
		path: x.trim(),
		file_template: _.file.trim(),
		dir_template: _.dir.trim()
	}), P = Et({
		mutationFn: at,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : s.test(U(e)) ? "dir" : "file";
			w(t), (t === "path" ? A : t === "dir" ? k : O).current?.focus();
		}
	}), F = Et({
		mutationFn: ({ initial: e }) => rt(e),
		onSuccess: (e, t) => {
			e.path && t.location === S.current.location && t.path === S.current.path && (b({
				location: t.location,
				path: e.path
			}), w(null), P.reset(), A.current?.focus());
		}
	}), I = X({
		queryKey: te,
		queryFn: ({ signal: e }) => Ve(e),
		start: bt,
		jobOf: (e) => e,
		withJob: Ot,
		onStarted: () => P.reset(),
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: te,
				exact: !0
			}), t.status !== "complete") return;
			let { text: r, failed: i } = tt(t);
			i ? n(Y("cleanup:tools.organize"), Error(Y("cleanup:organize.rowsFailed", { count: i }))) : e(r.replace(/。$/, ""));
		}
	}), se = I.running || I.start.isPending, ce = JSON.stringify(P.variables) === JSON.stringify(oe()), L = ce ? P.data : void 0, le = Number(L?.counts?.change || 0), ue = y[d] || d, pe = (e) => {
		v(e), w(null), P.reset();
	}, he = (e) => {
		let t = (M === "file" ? O : k).current, n = _[M], r = N.current ? t?.selectionStart ?? n.length : n.length, i = N.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ae.current = {
			field: M,
			caret: r + a.length
		}, pe({ [M]: n.slice(0, r) + a + n.slice(i) });
	}, ge = () => {
		P.isPending || se || !d || (I.dismiss(), I.start.reset(), w(null), P.mutate(oe()));
	}, _e = () => {
		let e = P.variables;
		e && L && le && H({
			title: Y("cleanup:tools.organize"),
			body: Zt(ue, e.path),
			confirmLabel: Y("cleanup:tools.organize"),
			onConfirm: async () => {
				await I.start.mutateAsync({
					kind: "apply",
					request: e
				}), ut({
					...i?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, ve = () => void H({
		title: Y("cleanup:organize.rollbackTitle"),
		body: Qt,
		confirmLabel: Y("cleanup:organize.rollbackConfirm"),
		onConfirm: () => I.start.mutateAsync({ kind: "rollback" })
	}), z = null, ye = !!le && !se && !I.outcome, B = I.job, be = I.outcome;
	if (B?.status === "running") {
		let e = G(B) || _t(B) || Y("cleanup:organize.running");
		z = /* @__PURE__ */ (0, $.jsx)(R, {
			embedded: !0,
			label: e,
			value: Math.min(B.checked || 0, B.total || 0),
			total: B.total
		});
	} else if (be?.status === "failed") z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.incomplete"),
		children: G(be, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (be) {
		let { text: e, failed: t } = tt(be);
		z = /* @__PURE__ */ (0, $.jsx)(E, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:organize.result"),
			children: e
		});
	} else I.start.isError ? z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.failed"),
		children: U(I.start.error)
	}) : P.isPending ? z = /* @__PURE__ */ (0, $.jsx)(R, {
		embedded: !0,
		label: Y("cleanup:organize.checkingPlan")
	}) : P.isError && ce ? z = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:organize.previewFailed"),
		children: U(P.error)
	}) : L && (z = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:organize.previewResult"),
		children: it(L)
	}), le ? /* @__PURE__ */ (0, $.jsx)(en, { plan: L }) : null] }));
	return /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			i?.last_batch ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "secondary",
				...V(se),
				onClick: ve,
				children: Y("cleanup:organize.rollbackLastBatch")
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: ye ? "secondary" : "primary",
				disabled: !a.length || se,
				...V(P.isPending),
				onClick: ge,
				children: Y("cleanup:organize.preview")
			}),
			ye ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				onClick: _e,
				children: Y("cleanup:organize.apply")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: Y("cleanup:organize.title")
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: D
			}),
			r.isError ? /* @__PURE__ */ (0, $.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:organize.settingsLoadFailed"),
					children: U(r.error)
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [a.length ? /* @__PURE__ */ (0, $.jsx)(de, {
							"aria-label": Y("cleanup:organize.storageLabel"),
							prefix: Y("cleanup:organize.storagePrefix"),
							className: "w-fit min-w-25",
							selectedKey: d || null,
							onSelectionChange: (e) => {
								e !== null && (c(String(e)), b({
									location: String(e),
									path: ""
								}), w(null), P.reset(), F.reset(), N.current = !1);
							},
							children: a.map((e) => /* @__PURE__ */ (0, $.jsxs)(fe, {
								id: e.location,
								textValue: y[e.location] || e.location,
								children: [/* @__PURE__ */ (0, $.jsx)(me, { mark: T[e.location] || "database" }), y[e.location] || e.location]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, $.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, $.jsx)(m, {
								"aria-label": Y("cleanup:organize.pathLabel"),
								className: "min-w-0 flex-1",
								placeholder: Y("cleanup:organize.pathPlaceholder"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: x,
								ref: A,
								isInvalid: C === "path",
								onChange: (e) => {
									b({
										location: d,
										path: e
									}), w(null), P.reset(), F.reset();
								}
							}), /* @__PURE__ */ (0, $.jsx)(f, {
								icon: Pt,
								"aria-label": Y("cleanup:organize.choosePath"),
								...V(F.isPending),
								onClick: () => F.mutate({
									initial: x || a.find((e) => e.location === d)?.roots[0] || "",
									location: d,
									path: x
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: re
					}),
					F.isError ? /* @__PURE__ */ (0, $.jsxs)(E, {
						tone: "error",
						title: Y("cleanup:organize.pickerFailed"),
						children: [U(F.error), Y("cleanup:organize.pickerFallback")]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.fileTemplate"),
						placeholder: "{code}[ {title}]",
						value: _.file,
						ref: O,
						spellCheck: "false",
						isInvalid: C === "file",
						onFocus: () => {
							ie("file"), N.current = !0;
						},
						onChange: (e) => pe({ file: e })
					}),
					/* @__PURE__ */ (0, $.jsx)(m, {
						label: Y("cleanup:organize.dirTemplate"),
						placeholder: Y("cleanup:organize.dirTemplatePlaceholder"),
						value: _.dir,
						ref: k,
						spellCheck: "false",
						isInvalid: C === "dir",
						onFocus: () => {
							ie("dir"), N.current = !0;
						},
						onChange: (e) => pe({ dir: e })
					}),
					i?.presets?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.applyPreset"),
						children: [/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: Y("cleanup:organize.applyPreset")
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: i.presets.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
								variant: "secondary",
								size: "small",
								title: e.example || e.label,
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									pe({
										file: e.file,
										dir: e.dir
									}), N.current = !1;
								},
								children: /* @__PURE__ */ (0, $.jsx)("span", {
									className: "truncate",
									children: e.label
								})
							}, e.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": j.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [Y("cleanup:organize.examplePath"), /* @__PURE__ */ (0, $.jsx)("code", {
							className: "wrap-anywhere",
							children: j.data?.example || j.data?.error || (j.isError ? U(j.error) : Y("cleanup:organize.previewLoading"))
						})]
					}),
					i?.placeholders?.length ? /* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": Y("cleanup:organize.insertParameter"),
						children: [/* @__PURE__ */ (0, $.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, $.jsx)("strong", {
								className: "text-caption-1-semibold text-text-primary",
								children: Y("cleanup:organize.insertParameter")
							}), Y("cleanup:organize.insertTarget", { target: Y(M === "file" ? "cleanup:organize.fileTemplate" : "cleanup:organize.dirTemplate") })]
						}), /* @__PURE__ */ (0, $.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: i.placeholders.map((e) => /* @__PURE__ */ (0, $.jsx)(t, {
								variant: "ghost",
								size: "small",
								"aria-label": `${e.label} {${e.key}}`,
								onClick: () => he(e.key),
								children: /* @__PURE__ */ (0, $.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, $.jsx)("code", { children: `{${e.key}}` }), /* @__PURE__ */ (0, $.jsx)("span", {
										className: "text-text-secondary",
										children: e.label
									})]
								})
							}, e.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: ne
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: z
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var nn = J("play"), rn = () => q.invalidateQueries({
	queryKey: O,
	exact: !0
});
function an({ item: e, toast: n }) {
	let [r, i] = (0, Q.useState)(e.candidates[0]?.id ?? null), a = Et({
		mutationFn: () => Se(e.id, Number(r)),
		onSuccess: () => {
			let t = e.candidates.find((e) => e.id === r);
			n(Y("cleanup:orphans.attached", {
				name: e.name,
				target: t?.name ?? Y("cleanup:orphans.selectedFile")
			})), rn();
		},
		onError: (e) => n(U(e))
	}), o = Et({
		mutationFn: () => ct(e.id),
		onSuccess: (t) => {
			n(t.blocked.length ? Y("cleanup:orphans.fileRestored", { name: e.name }) : Y("cleanup:orphans.recordDeleted", { name: e.name })), rn();
		}
	}), s = () => {
		H({
			title: Y("cleanup:orphans.deleteRecord"),
			body: lt(e.records) ? Y("cleanup:orphans.deleteBodyWithActivity", {
				name: e.name,
				records: lt(e.records)
			}) : Y("cleanup:orphans.deleteBody", { name: e.name }),
			confirmLabel: Y("cleanup:orphans.deleteRecord"),
			danger: !0,
			onConfirm: () => o.mutateAsync()
		});
	}, c = a.isPending || o.isPending;
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				...V(c),
				onClick: s,
				children: Y("cleanup:orphans.deleteRecord")
			}),
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(de, {
				"aria-label": Y("cleanup:orphans.targetLabel", { name: e.name }),
				prefix: Y("cleanup:orphans.targetPrefix"),
				className: "w-52",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(Number(e));
				},
				children: e.candidates.map((e) => /* @__PURE__ */ (0, $.jsx)(fe, {
					id: e.id,
					textValue: we(e),
					children: we(e)
				}, e.id))
			}) : null,
			e.candidates.length ? /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "primary",
				size: "small",
				disabled: r === null,
				...V(c),
				onClick: () => a.mutate(),
				children: Y("cleanup:orphans.moveActivity")
			}) : null
		]
	});
}
function on({ item: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, $.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, $.jsx)(nn, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, $.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, $.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, $.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, $.jsxs)("small", {
				className: "flex min-w-0 items-center gap-1.5 text-caption-1-regular text-text-secondary",
				children: [
					e.code ? /* @__PURE__ */ (0, $.jsx)("span", {
						className: "shrink-0",
						children: e.code
					}) : null,
					e.code && e.location ? /* @__PURE__ */ (0, $.jsx)("span", {
						"aria-hidden": "true",
						children: "·"
					}) : null,
					e.location ? /* @__PURE__ */ (0, $.jsx)(pe, {
						source: e.location,
						label: y[e.location] || e.location
					}) : null
				]
			})]
		})]
	});
}
function sn({ toast: e }) {
	let [n, r] = (0, Q.useState)([]), i = Z({
		queryKey: O,
		queryFn: ({ signal: e }) => Ue(e)
	}), a = i.data?.items ?? [], o = Et({
		mutationFn: (e) => ct(e),
		onSuccess: (t) => {
			e(Y("cleanup:orphans.purged", { count: t.purged }) + (t.blocked.length ? Y("cleanup:orphans.purgedBlocked", { count: t.blocked.length }) : "")), r([]), rn();
		}
	}), s = (e) => void H({
		title: Y("cleanup:orphans.deleteSelectedTitle"),
		body: Y("cleanup:orphans.deleteSelectedBody", { count: e.length }),
		items: e.map((e) => e.name),
		confirmLabel: Y("cleanup:orphans.deleteSelectedTitle"),
		danger: !0,
		onConfirm: () => o.mutateAsync(e.map((e) => e.id))
	}), c = [
		{
			id: "item",
			label: Y("cleanup:shared.video"),
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(on, { item: e })
		},
		{
			id: "records",
			label: Y("cleanup:orphans.columnActivity"),
			width: 176,
			min: 144,
			value: (e) => lt(e.records),
			render: (e) => /* @__PURE__ */ (0, $.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: lt(e.records) || Y("cleanup:shared.none")
			})
		},
		{
			id: "target",
			label: Y("cleanup:shared.actions"),
			width: a.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (t) => /* @__PURE__ */ (0, $.jsx)(an, {
				item: t,
				toast: e
			})
		}
	];
	return /* @__PURE__ */ (0, $.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: i.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, $.jsx)(u, {
				id: "orphan-records-title",
				children: Y("cleanup:tools.orphanRecords")
			}), /* @__PURE__ */ (0, $.jsx)(E, {
				tone: "error",
				title: Y("cleanup:orphans.loadFailed"),
				children: U(i.error)
			})]
		}) : /* @__PURE__ */ (0, $.jsx)(jt, {
			label: Y("cleanup:orphans.tableLabel"),
			items: a,
			columns: c,
			title: Y("cleanup:tools.orphanRecords"),
			titleId: "orphan-records-title",
			unit: Y("cleanup:orphans.unit"),
			description: k,
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: n,
			onSelected: r,
			actions: (e) => /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				size: "small",
				disabled: !e.length,
				...V(o.isPending),
				onClick: () => s(e),
				children: Y("cleanup:orphans.deleteSelectedCount", { count: e.length })
			})
		})
	});
}
// src/react/data-cleanup/performer-delete-card.tsx
function cn({ person: e }) {
	let t = Oe("performer", e.k, e.entity_id);
	return /* @__PURE__ */ (0, $.jsxs)("a", {
		href: Ae("performer", e.k, e.entity_id),
		title: t,
		className: "flex min-w-0 items-center gap-3 text-text-primary",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			"aria-hidden": !0,
			className: Ee("relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium", Nt),
			dangerouslySetInnerHTML: { __html: `<span>${je(Xe(t))}</span>` + ke({
				kind: "performer",
				id: e.entity_id,
				hasImage: e.has_image,
				version: e.image_version,
				focus: e.avatar_focus,
				thumb: !0
			}) }
		}), /* @__PURE__ */ (0, $.jsx)("span", {
			className: "min-w-0 wrap-anywhere",
			children: t
		})]
	});
}
function ln(e, t, n) {
	let r = (e) => e.slice(0, 5).join(Y("cleanup:shared.listSeparator")), i = e.length > 5 ? Y("cleanup:performerDelete.moreNames", {
		names: r(e),
		total: e.length
	}) : r(e), a = t.length > 5 ? Y("cleanup:performerDelete.moreExamples", {
		examples: r(t),
		total: t.length
	}) : r(t);
	return [
		Y("cleanup:performerDelete.bodyScope", {
			names: i,
			count: n.total,
			size: W(n.bytes)
		}),
		Y("cleanup:performerDelete.bodyWarning"),
		...n.shared ? [Y("cleanup:performerDelete.sharedFiles", { count: n.shared })] : [],
		Y("cleanup:performerDelete.bodyExamples", { examples: a })
	].join(Y("cleanup:shared.sentenceGap"));
}
function un({ toast: n }) {
	Tt();
	let r = Z({
		queryKey: A,
		queryFn: ({ signal: e }) => Me(e)
	}), [i, a] = (0, Q.useState)([]), [o, s] = (0, Q.useState)(""), [c, d] = (0, Q.useState)(!1), [f, m] = (0, Q.useState)(null), [h, g] = (0, Q.useState)(""), _ = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => () => _.current?.abort(), []);
	let v = (0, Q.useMemo)(() => [
		{
			id: "name",
			label: Y("cleanup:shared.actress"),
			width: 280,
			min: 160,
			value: (e) => e.k,
			render: (e) => /* @__PURE__ */ (0, $.jsx)(cn, { person: e })
		},
		{
			id: "works",
			label: Y("cleanup:shared.videos"),
			width: 104,
			min: 80,
			value: (e) => e.n,
			render: (e) => Y("cleanup:performerDelete.videoCount", { count: e.n })
		},
		{
			id: "files",
			label: Y("cleanup:shared.files"),
			width: 104,
			min: 80,
			value: (e) => e.file_count,
			render: (e) => Y("cleanup:performerDelete.fileCount", { count: e.file_count })
		},
		{
			id: "bytes",
			label: Y("cleanup:performerDelete.columnSize"),
			width: 136,
			min: 104,
			value: (e) => e.bytes,
			render: (e) => W(e.bytes)
		}
	], []), ee = o.toLocaleLowerCase(), y = (r.data?.items || []).filter((e) => !ee || [
		e.k,
		Oe("performer", e.k, e.entity_id),
		...e.aliases
	].some((e) => e.toLocaleLowerCase().includes(ee))), b = async (e, t) => {
		if (c) return;
		d(!0), g("");
		let r = new AbortController();
		_.current = r;
		try {
			let i = await Ne(e.map((e) => e.entity_id), r.signal);
			if (r.signal.throwIfAborted(), !i.total) {
				n(Y("cleanup:performerDelete.nothingToDelete"));
				return;
			}
			let a = i.performers.map((e) => Oe("performer", e.name, e.id)), o = [...new Set(i.items.map((e) => e.code || e.name || `#${e.id}`))], s = await H({
				title: Y("cleanup:performerDelete.confirmTitle"),
				body: ln(a, o, i),
				confirmLabel: Y("cleanup:performerDelete.confirm"),
				danger: !0,
				onConfirm: () => De(i)
			});
			if (!s.confirmed) return;
			let c = s.result;
			m(c), t(), await Promise.all([q.invalidateQueries({
				queryKey: A,
				exact: !0
			}), q.invalidateQueries({
				queryKey: ge,
				exact: !0
			})]), n(Y("cleanup:performerDelete.purged", { count: c.purged }) + (c.blocked.length ? Y("cleanup:performerDelete.doneBlocked", { count: c.blocked.length }) : ""));
		} catch (e) {
			r.signal.aborted || g(U(e));
		} finally {
			r.signal.aborted || d(!1);
		}
	}, x = f ? [
		...f.blocked.map((e) => ({
			path: e.path,
			reason: ht(e.reason_code ?? "", e.reason, e.reason_params)
		})),
		...f.cleanup_pending,
		...f.cache_blocked.map((e) => ({
			path: e.name,
			reason: e.reason
		}))
	] : [];
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "batch-delete",
		className: "flex min-w-0 scroll-mt-20 flex-col gap-3",
		"aria-label": Y("cleanup:tools.bulkDelete"),
		children: [
			r.isPending || r.isError ? /* @__PURE__ */ (0, $.jsxs)(l, {
				layout: "stack",
				labelledBy: "batch-delete-title",
				children: [/* @__PURE__ */ (0, $.jsx)(u, {
					id: "batch-delete-title",
					children: Y("cleanup:tools.bulkDelete")
				}), r.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					title: Y("cleanup:performerDelete.loadFailed"),
					action: /* @__PURE__ */ (0, $.jsx)(t, {
						variant: "secondary",
						size: "small",
						onClick: () => void r.refetch(),
						children: Y("cleanup:shared.retry")
					}),
					children: U(r.error)
				}) : /* @__PURE__ */ (0, $.jsx)("p", {
					role: "status",
					className: "text-body-regular text-text-secondary",
					children: Y("cleanup:performerDelete.loading")
				})]
			}) : /* @__PURE__ */ (0, $.jsx)(jt, {
				label: Y("cleanup:performerDelete.tableLabel"),
				title: Y("cleanup:tools.bulkDelete"),
				titleId: "batch-delete-title",
				unit: Y("cleanup:performerDelete.unit"),
				description: e,
				items: y,
				columns: v,
				rowId: (e) => String(e.entity_id),
				rowLabel: (e) => Oe("performer", e.k, e.entity_id),
				selected: i,
				onSelected: a,
				toolbarActions: /* @__PURE__ */ (0, $.jsx)(p, {
					label: Y("cleanup:performerDelete.search"),
					value: o,
					onQuery: (e) => {
						s(e), a([]);
					}
				}),
				actions: (e, n) => /* @__PURE__ */ (0, $.jsx)(t, {
					variant: "danger",
					size: "small",
					...V(c),
					onClick: () => void b(e, n),
					children: Y("cleanup:performerDelete.deleteSelected")
				})
			}),
			h ? /* @__PURE__ */ (0, $.jsx)(E, {
				tone: "error",
				title: Y("cleanup:performerDelete.planFailed"),
				children: h
			}) : null,
			f ? /* @__PURE__ */ (0, $.jsx)(E, {
				tone: x.length ? "warning" : "info",
				title: Y("cleanup:performerDelete.purged", { count: f.purged }),
				extra: x.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex flex-col gap-2 text-body-2-regular wrap-anywhere",
					children: x.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, $.jsx)("p", { children: Y("shell:format.withNote", {
						text: e.path,
						note: e.reason
					}) }, t))
				}) : null,
				children: x.length ? Y("cleanup:performerDelete.partialFailure", {
					count: f.blocked.length,
					quarantined: f.cleanup_pending.length,
					cacheFiles: f.cache_blocked.length
				}) : Y("cleanup:performerDelete.done")
			}) : null
		]
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var dn = J("git-compare"), fn = J("rotate-cw"), pn = Y("cleanup:shared.reconnecting"), mn = Y("cleanup:resourceSync.cleanUpDead"), hn = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", gn = (e) => Number(e || 0).toLocaleString();
function _n({ scan: e, partial: t = !1 }) {
	let n = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: hn,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, $.jsxs)("article", {
			className: K(),
			children: [/* @__PURE__ */ (0, $.jsx)(M, {
				label: le[e.location] || Y("cleanup:resourceSync.storageFallback"),
				mark: /* @__PURE__ */ (0, $.jsx)(me, { mark: T[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, $.jsx)(Ft, {
					online: e.online,
					children: e.online ? Y("cleanup:resourceSync.online") : Y("cleanup:resourceSync.offline")
				}),
				figure: e.online ? Y("cleanup:resourceSync.missingCount", { count: Number(e.missing || 0) }) : "—",
				meta: e.online ? gt(e) : Y("cleanup:resourceSync.skipped", { summary: gt(e) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, $.jsxs)(he, {
					tone: "warning",
					children: [
						gn(e.unreadable),
						" ",
						Y("cleanup:resourceSync.unreadableDirs")
					]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, $.jsxs)("div", {
		className: hn,
		children: [
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(M, {
					label: Y("cleanup:resourceSync.toPurge"),
					figure: Y("cleanup:resourceSync.purgeCount", { count: Number(st(e) || 0) }),
					meta: Y("cleanup:resourceSync.purgeHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(M, {
					label: Y("cleanup:resourceSync.toVanish"),
					figure: Y("cleanup:resourceSync.vanishCount", { count: Number(e.vanish || 0) }),
					meta: Y("cleanup:resourceSync.vanishHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(M, {
					label: Y("cleanup:resourceSync.emptyDirs"),
					figure: Y("cleanup:resourceSync.emptyDirCount", { count: Number(e.empty || 0) }),
					meta: Y("cleanup:resourceSync.emptyDirsHint")
				})
			}),
			/* @__PURE__ */ (0, $.jsx)("article", {
				className: K(),
				children: /* @__PURE__ */ (0, $.jsx)(M, {
					label: Y("cleanup:resourceSync.cache"),
					figure: Y("cleanup:resourceSync.cacheCount", { count: Number(n.files || 0) }),
					meta: n.files ? W(n.bytes) : ""
				})
			})
		]
	})] });
}
function vn({ toast: e }) {
	let n = X({
		queryKey: P,
		queryFn: ({ signal: e }) => Ke(e),
		start: xt,
		onFinish: (t) => {
			if (q.invalidateQueries({
				queryKey: ge,
				exact: !0
			}), q.invalidateQueries({
				queryKey: F,
				exact: !0
			}), t.status !== "complete") return;
			let { done: n, left: r } = B(t);
			r ? e(Y("cleanup:resourceSync.applyLeftovers", {
				done: gn(n),
				count: Number(r || 0)
			}), { warning: !0 }) : e(Y("cleanup:resourceSync.cleaned"));
		}
	}), r = X({
		queryKey: F,
		queryFn: ({ signal: e }) => qe(e),
		start: St,
		onStarted: () => n.dismiss()
	}), i = r.job, a = r.running || r.start.isPending, o = n.running || n.start.isPending, s = !!r.job && !!n.job, c = i?.status === "complete" || i?.status === "failed", d = Y(a ? "cleanup:resourceSync.scanning" : c ? "cleanup:resourceSync.scanAgain" : "cleanup:resourceSync.checkFiles"), f = (e) => void H({
		title: mn,
		body: ye(e),
		confirmLabel: mn,
		danger: !0,
		onConfirm: () => n.start.mutateAsync(e.scan_id || "")
	}), p = n.outcome, m = (e) => {
		let t = B(e).left > 0;
		return /* @__PURE__ */ (0, $.jsx)(E, {
			tone: t ? "warning" : "success",
			title: Y(t ? "cleanup:shared.partiallyCompleted" : "cleanup:resourceSync.cleanupResult"),
			children: xe(e, W)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupIncomplete"),
		children: G(p, "error") || Y("cleanup:shared.checkTaskLogFiles")
	});
	else if (p) g = m(p);
	else if (n.running) h = /* @__PURE__ */ (0, $.jsx)(R, {
		embedded: !0,
		label: G(n.job) || Y("cleanup:resourceSync.applying")
	});
	else if (r.start.isError) g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: U(r.start.error)
	});
	else if (r.query.isError && i) g = /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:shared.taskStatus"),
		children: pn
	});
	else if (i?.status === "running") {
		let e = mt(i);
		h = /* @__PURE__ */ (0, $.jsx)(R, {
			embedded: !0,
			label: e,
			value: i.completed_sources,
			total: i.total_sources
		}), i.sources?.length && (g = /* @__PURE__ */ (0, $.jsx)(_n, {
			scan: i,
			partial: !0
		}));
	} else if (i?.status === "failed") g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [i.sources?.length ? /* @__PURE__ */ (0, $.jsx)(_n, {
		scan: i,
		partial: !0
	}) : null, /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.scanFailed"),
		children: G(i, "error") || Y("cleanup:resourceSync.backgroundScanFailed")
	})] });
	else if (i?.status === "complete" && i.applied) g = n.job?.status === "complete" ? m(n.job) : /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "neutral",
		title: Y("cleanup:resourceSync.cleanupResult"),
		children: Y("cleanup:resourceSync.alreadyCleaned")
	});
	else if (i?.status === "complete") {
		let e = Ze(i);
		g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(_n, { scan: i }), e ? /* @__PURE__ */ (0, $.jsx)(E, {
			tone: "neutral",
			title: Y("cleanup:resourceSync.toClean"),
			action: /* @__PURE__ */ (0, $.jsx)(t, {
				variant: "danger",
				disabled: !s,
				...V(o),
				onClick: () => {
					s && f(i);
				},
				children: o ? Y("cleanup:resourceSync.applyingButton") : mn
			}),
			children: be(i)
		}) : /* @__PURE__ */ (0, $.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: Y("cleanup:resourceSync.nothingToClean")
		})] });
	}
	return n.start.isError && !p && (g = /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [g, /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.cleanupFailed"),
		children: U(n.start.error)
	})] })), /* @__PURE__ */ (0, $.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsxs)(l, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, $.jsx)(t, {
				"data-resource-scan": !0,
				leadingIcon: c && !a ? fn : dn,
				disabled: !s,
				...V(a),
				onClick: () => {
					s && !a && r.start.mutate();
				},
				children: d
			}),
			children: [
				/* @__PURE__ */ (0, $.jsx)(u, {
					id: "resource-sync-title",
					gap: "small",
					children: Y("cleanup:tools.resourceSync")
				}),
				r.query.isPending || n.query.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
					role: "status",
					"aria-label": Y("cleanup:resourceSync.statusLoading"),
					"data-skeleton": "",
					className: "skeleton-sheen h-6 rounded-md"
				}) : null,
				!r.job && r.query.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:resourceSync.scanStatusUnavailable")
				}) : null,
				!n.job && n.query.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
					tone: "error",
					children: Y("cleanup:resourceSync.applyStatusUnavailable")
				}) : null,
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: I
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-tool-page.tsx
function yn({ toast: e }) {
	let t = Z({
		queryKey: w,
		queryFn: ({ signal: e }) => Be(e)
	});
	return t.isError ? /* @__PURE__ */ (0, $.jsx)(E, {
		tone: "error",
		title: Y("cleanup:resourceSync.storageLoadFailed"),
		children: U(t.error)
	}) : t.isPending ? /* @__PURE__ */ (0, $.jsx)("p", {
		role: "status",
		children: Y("cleanup:resourceSync.storageLoading")
	}) : Qe(t.data) ? /* @__PURE__ */ (0, $.jsx)(vn, { toast: e }) : /* @__PURE__ */ (0, $.jsxs)(l, {
		layout: "stack",
		label: Y("cleanup:tools.resourceSync"),
		children: [
			/* @__PURE__ */ (0, $.jsx)(u, { children: Y("cleanup:tools.resourceSync") }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: Y("cleanup:resourceSync.noDirectories")
			}),
			/* @__PURE__ */ (0, $.jsx)("a", {
				href: "/settings/library",
				className: "text-body-medium text-accent-600 underline",
				children: Y("cleanup:resourceSync.setUpLibrary")
			})
		]
	});
}
function bn({ tool: e, toast: t, failure: n }) {
	let r = (e) => t(e), i;
	switch (e) {
		case "organize":
			i = /* @__PURE__ */ (0, $.jsx)(tn, {
				toast: r,
				failure: n
			});
			break;
		case "resource-sync":
			i = /* @__PURE__ */ (0, $.jsx)(yn, { toast: t });
			break;
		case "orphan-records":
			i = /* @__PURE__ */ (0, $.jsx)(sn, { toast: r });
			break;
		case "media-repair":
			i = /* @__PURE__ */ (0, $.jsx)(Bt, { toast: r });
			break;
		case "links":
			i = /* @__PURE__ */ (0, $.jsx)(Xt, {});
			break;
		case "batch-delete": i = /* @__PURE__ */ (0, $.jsx)(un, { toast: r });
	}
	return /* @__PURE__ */ (0, $.jsx)(kt, { children: i });
}
// src/react/data-cleanup/data-cleanup-page.tsx
function xn(e, t) {
	return e.data === void 0 ? e.isError ? {
		figure: Y("cleanup:overview.loadFailed"),
		state: "error"
	} : {
		figure: Y("cleanup:overview.loading"),
		state: "loading"
	} : t(e.data);
}
function Sn({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, $.jsx)("button", {
		type: "button",
		className: K({ interactive: !0 }),
		"data-cleanup-go": e,
		"data-entry-state": r.state,
		"aria-busy": r.state === "loading" || void 0,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, $.jsx)(M, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
function Cn({ tool: e, navigate: t }) {
	let n = J(e.icon);
	return /* @__PURE__ */ (0, $.jsx)(Lt, {
		label: e.title,
		icon: n,
		summary: e.description,
		attributes: { "data-cleanup-tool": e.key },
		onOpen: () => t(e.path + location.search)
	});
}
var wn = J("square-check-big"), Tn = J("sparkles"), En = J("file-stack"), Dn = J("file-archive"), On = J("trash"), kn = () => {
	for (let e of [
		L,
		N,
		c,
		h
	]) q.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function An({ toast: e, open: t, navigate: n }) {
	let o = Z({
		queryKey: L,
		queryFn: ({ signal: e }) => Je(e)
	}), s = Z({
		queryKey: N,
		queryFn: ({ signal: e }) => We(e)
	}), l = Z({
		queryKey: c,
		queryFn: ({ signal: e }) => Pe(e)
	}), u = Z({
		queryKey: h,
		queryFn: ({ signal: e }) => Fe(e)
	}), d = Z({
		queryKey: ge,
		queryFn: ({ signal: e }) => Ye(e)
	});
	return (0, Q.useEffect)(() => {
		let e = i[location.hash];
		e && nt.replace(e + location.search);
	}, []), /* @__PURE__ */ (0, $.jsxs)(kt, { children: [
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-pending",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(ue, {
				id: "cleanup-pending",
				children: Y("cleanup:overview.needsAttention")
			}), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: j,
				children: [
					/* @__PURE__ */ (0, $.jsx)(Sn, {
						section: "review",
						label: Y("cleanup:overview.review"),
						icon: wn,
						open: t,
						value: xn(o, pt)
					}),
					/* @__PURE__ */ (0, $.jsx)(Sn, {
						section: "duplicates",
						label: Y("cleanup:overview.duplicates"),
						icon: En,
						open: t,
						value: xn(l, (e) => Number(e.total || 0) ? {
							figure: Y("cleanup:overview.duplicateGroups", {
								count: Number(e.total),
								files: Number(e.files || 0).toLocaleString()
							}),
							meta: Y("cleanup:overview.reclaimable", { size: W(e.reclaimable || 0) })
						} : { figure: Y("cleanup:overview.noDuplicates") })
					}),
					/* @__PURE__ */ (0, $.jsx)(Sn, {
						section: "ads",
						label: Y("cleanup:overview.junkFiles"),
						icon: Dn,
						open: t,
						value: xn(u, (e) => ({
							figure: Y("cleanup:overview.junkUndecided", { count: Number(e.pending_total || 0) }),
							meta: $e(e)
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)(Sn, {
						section: "quality",
						label: Y("cleanup:overview.hdUpgrades"),
						icon: Tn,
						open: t,
						value: xn(s, (e) => ({ figure: Y("cleanup:overview.upgradesPending", { count: Number(e.total || 0) }) }))
					}),
					/* @__PURE__ */ (0, $.jsx)(Sn, {
						section: "trash",
						label: Y("cleanup:overview.trash"),
						icon: On,
						open: t,
						value: xn(d, (e) => ({
							figure: Y("cleanup:overview.trashCount", { count: Number(e.total || 0) }),
							meta: e.total ? Y("cleanup:overview.trashSize", { size: W(e.bytes || 0) }) : Y("cleanup:overview.trashEmptyHint")
						}))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, $.jsx)("div", {
			id: "libraryProcessing",
			className: "scroll-mt-20",
			children: /* @__PURE__ */ (0, $.jsx)(x, {
				toast: (t) => e(t),
				monitor: !0,
				onComplete: kn
			})
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-maintenance",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(ue, {
				id: "cleanup-maintenance",
				children: Y("cleanup:overview.maintenanceSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key !== "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Cn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		}),
		/* @__PURE__ */ (0, $.jsxs)("section", {
			"aria-labelledby": "cleanup-deletion",
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, $.jsx)(ue, {
				id: "cleanup-deletion",
				children: Y("cleanup:overview.deletionSection")
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: r,
				children: a.filter((e) => e.key === "batch-delete").map((e) => /* @__PURE__ */ (0, $.jsx)(Cn, {
					tool: e,
					navigate: n
				}, e.key))
			})]
		})
	] });
}
export { An as DataCleanupPage, bn as DataCleanupToolPage };

//# debugId=7d23b3bb-c032-492a-a931-a639c79756dc