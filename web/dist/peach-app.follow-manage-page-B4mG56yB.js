(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ab84d920-993f-4f1e-bd3d-b239190b44b7", e._sentryDebugIdIdentifier = "sentry-dbid-ab84d920-993f-4f1e-bd3d-b239190b44b7");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, $76d00c5a4edb230a$export$76ccd210b9029917 as n, $76d00c5a4edb230a$export$816b5d811295e6bc as r, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as i, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as a, $76d00c5a4edb230a$export$f850895b287ef28e as o, $ea3928288112382f$export$439d29a4e110a164 as s, $l as c, Button as l, ButtonLink as u, Bx as d, COLUMN_SORT as f, Checkbox as p, ChevronSortDown as m, Chip as h, CollapseChevron as g, CollapseRegion as _, DataTableFooter as v, DataTableFrame as y, DataTableSort as b, EmptyFocusButton as x, EmptyState as S, ErrorText as C, ExternalLink as w, FEEDS_KEY as ee, FOLLOW_CHECK_KEY as T, FOLLOW_CREDENTIALS_KEY as te, FOLLOW_MANAGE_KEY as E, FOLLOW_MANAGE_NAV as D, FOLLOW_RESOLVE_KEY as O, FieldLabel as k, Help as A, Input as j, LAYOUTS as M, LoadingDots as N, M6 as P, MENU_ITEM as F, MENU_ITEM_INTERACTIVE as I, MENU_POPOVER_SURFACE as L, ModalFrame as R, Note as z, P7 as ne, SORT_DEFAULT_DIR as B, SORT_OPTIONS as re, STAT_STRIP_SIX as ie, Select as ae, SelectItem as V, SelectionDock as oe, SelectionPopover as H, SiteLabel as U, SortDirectionIcon as se, SortableBoardTabs as ce, Switch as le, Table as ue, TableColumnControls as de, TableColumnResizer as fe, TableSelectionHeader as pe, TagManager as W, TaskProgress as me, Un as he, Wt as G, Xf as ge, __toESM as _e, addAlias as ve, addSource as ye, authorGroups as be, authorName as xe, avatarInner as Se, busyProps as K, cardClass as Ce, checkEvidenceGap as we, checkFailures as Te, checkFeeds as Ee, checkReceipt as De, checkSummary as Oe, checkedText as ke, clickedBlank as Ae, columnVisibilityFeature as je, composingKey as Me, confirmModal as Ne, createColumnHelper as Pe, credentialDone as Fe, cx as Ie, dZ as Le, dropSources as Re, du as ze, errorHeadline as Be, errorMessage as q, feedIntervalText as Ve, fetchCheckJob as He, fetchCredentials as Ue, fetchFeeds as We, fetchFollow as Ge, fetchResolveJob as Ke, fetchSuggestions as qe, flexRender as Je, followFeedByName as Ye, followFeedEntity as Xe, followSuggestKey as Ze, groupByAuthor as Qe, isBroken as $e, isLayout as et, jobText as tt, joinList as J, keepSelected as nt, l7 as rt, localTime as it, lookupFeedActor as at, mapLimit as ot, markAllPending as st, pageSizeOf as ct, pageWindow as lt, patchSource as ut, pv as dt, queryClient as ft, quoted as pt, reloadFollowManage as mt, removeAlias as ht, removeFeed as gt, removeSource as _t, renameAliasGroup as vt, require_jsx_runtime as yt, require_react as bt, resolveFollowSort as xt, rowPaginationFeature as St, rowSelectionFeature as Ct, rowSortingFeature as wt, selectionState as Tt, serverLabel as Et, setFeedEnabled as Dt, setSourceEnabled as Ot, sortLabel as kt, startCheck as At, startResolve as jt, t as Y, tableFeatures as Mt, tableRows as Nt, toggleGroup as Pt, useAction as Ft, useBackgroundJob as It, useMutation as Lt, useQuery as Rt, useTable as zt, useTablePreferences as Bt } from "./peach-app.js";
import { Page as Vt } from "./peach-app.page-QAncjzM1.js";
import { AuthorAvatar as Ht, ErrorLine as Ut, SourceIcon as Wt, SourceLink as Gt, StatusBadge as Kt } from "./peach-app.source-view--K6uWAMi.js";
import { createPaginatedRowModel as qt, createSortedRowModel as Jt, useTableSelection as Yt } from "./peach-app.use-table-selection-CnuGRvGn.js";
import { LEGACY_AVATAR_IMG as Xt } from "./peach-app.legacy-avatar-NSITxLRS.js";
// src/react/follow-manage/add-source.tsx
var X = /* @__PURE__ */ _e(bt(), 1), Z = yt(), Zt = Ie(F, I, "text-body-2-medium"), Qt = Y("follow:addCreatorSource.placeholder"), $t = Y("follow:addCreatorSource.title"), en = Y("follow:addCreatorSource.searchingByName"), tn = Y("follow:addCreatorSource.recognizing"), nn = Y("follow:addCreatorSource.noSourceFound"), rn = "/settings/subscriptions", an = (e, t) => `${e}:${t.url}`;
function on({ field: e, menu: n, options: r, active: i, busy: a, onPick: o, onClose: s }) {
	return (0, X.useEffect)(() => {
		n.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [n, i]), /* @__PURE__ */ (0, Z.jsxs)(t, {
		ref: n,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": Y("follow:addCreatorSource.suggestions"),
		className: Ie(L, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !r.length ? /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Z.jsx)(N, { label: Y("follow:addCreatorSource.findingSuggestions") })
		}) : null, r.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(X.Fragment, { children: [e.group === r[t - 1]?.group ? null : /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Z.jsxs)("button", {
			type: "button",
			"aria-current": t === i ? "true" : void 0,
			className: t === i ? Ie(Zt, "bg-background-secondary-default") : Zt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function sn({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? Y("follow:addCreatorSource.allSources") : Y("follow:addCreatorSource.shownSources", {
		shown: i,
		count: r.length
	});
	return /* @__PURE__ */ (0, Z.jsx)(H, {
		label: Y("follow:addCreatorSource.sourceFilter"),
		triggerLabel: a,
		leadingIcon: c,
		empty: Y("follow:addCreatorSource.noSources"),
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: Y("follow:shared.selectAll"),
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: Y("follow:shared.selectNone"),
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: Y("follow:addCreatorSource.credentialSettings"),
				href: rn
			}
		]
	});
}
function cn({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Z.jsx)(z, {
		tone: "error",
		title: e.line,
		children: tt(e, "error") || Y("follow:addCreatorSource.searchFailed")
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Ce({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = an(t, e);
				return /* @__PURE__ */ (0, Z.jsx)(p, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }),
							/* @__PURE__ */ (0, Z.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Z.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Z.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? Y("follow:addCreatorSource.alreadyFollowing") : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Z.jsx)(A, { children: nn }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Z.jsx)(w, {
					href: e.url,
					children: Y("follow:shared.labeled", {
						label: e.label,
						value: e.query
					})
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Z.jsx)(A, { children: J(o.map(([e, t]) => Y("follow:shared.labeled", {
				label: e,
				value: t
			}))) }) : null
		]
	});
}
function ln({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, X.useState)(""), [o, s] = (0, X.useState)(!1), [c, u] = (0, X.useState)(""), [d, f] = (0, X.useState)(""), [p, m] = (0, X.useState)(!1), [h, g] = (0, X.useState)(null), [_, v] = (0, X.useState)(-1), y = (0, X.useRef)(null), b = (0, X.useRef)(null), [x, S] = (0, X.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, X.useState)(/* @__PURE__ */ new Set()), [ee, T] = (0, X.useState)(""), [te, E] = (0, X.useState)(0);
	(0, X.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let D = Rt({
		queryKey: Ze(d),
		queryFn: ({ signal: e }) => qe(d, e),
		enabled: d.length > 0 && p && !o && h !== i
	}), A = (0, X.useMemo)(() => (D.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: Et(e.label_code ?? "", e.label)
	}))), [D.data]), { job: M, running: N, outcome: P, start: F, dismiss: I } = It({
		queryKey: O,
		queryFn: ({ signal: e }) => Ke(e),
		start: (e) => jt([e]),
		onStarted: () => w(/* @__PURE__ */ new Set()),
		onError: (e) => T(q(e)),
		onFinish: (e) => {
			e.status === "failed" && T(tt(e, "error") || Y("follow:addCreatorSource.searchFailed"));
		}
	}), L = (e) => {
		let t = e.trim();
		!t || n || o || N || F.isPending || (T(""), v(-1), u(t), a(t), f(""), g(t), F.mutate(t));
	}, R = D.isFetching, ne = p && !o && h !== i && (A.length > 0 || R), B = () => {
		v(-1), g(i);
	}, re = (e) => {
		if (!(o || Me(e.nativeEvent))) {
			if (e.key === "Escape" && ne) B();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!A.length) return;
				if (e.preventDefault(), !ne) {
					g(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				v((e) => {
					let n = e + t;
					return n < 0 ? A.length - 1 : n >= A.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), L(A[_]?.value || i));
		}
	}, ie = P?.results || [], ae = ie.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !x.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: an(t, e)
	})).filter((e) => !C.has(e.key))), V = Lt({
		mutationFn: async (e) => {
			let t = [], n = [];
			E(0);
			for (let r of e) {
				try {
					let e = await ye(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(Y("follow:shared.labeled", {
						label: r.candidate.label,
						value: q(e)
					}));
				}
				E((e) => e + 1);
			}
			if (n.length) try {
				await At(n);
			} catch (e) {
				t.push(q(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			mt(), e.failures.length ? T(J(e.failures)) : (T(""), I(), r(Y("follow:addCreatorSource.sourcesAdded", { count: e.sources.length })));
		},
		onError: (e) => T(q(e))
	}), oe = e.suggestions || [], H = !c.includes("/");
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": $t,
		className: Ce({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: $t
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						ref: y,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !b.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Z.jsx)(j, {
							"aria-label": Y("follow:addCreatorSource.inputLabel"),
							placeholder: Qt,
							value: i,
							leadingIcon: dt,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), v(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: re
						}), ne ? /* @__PURE__ */ (0, Z.jsx)(on, {
							field: y,
							menu: b,
							options: A,
							active: _,
							busy: R,
							onPick: L,
							onClose: B
						}) : null]
					}),
					/* @__PURE__ */ (0, Z.jsx)(sn, {
						credentials: t,
						hidden: x,
						onHidden: S
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "primary",
						disabled: n || !i.trim(),
						...K(N || F.isPending),
						onClick: () => L(i),
						children: Y("follow:shared.search")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [N || F.isPending ? /* @__PURE__ */ (0, Z.jsx)(me, {
					embedded: !0,
					label: tt(M) || (M?.total ? Y("follow:addCreatorSource.searchProgress", {
						checked: M.checked || 0,
						count: M.total
					}) : H ? en : tn),
					value: M?.checked,
					total: M?.total
				}) : null, ee ? /* @__PURE__ */ (0, Z.jsx)(z, {
					tone: "error",
					title: Y("follow:addJavFeed.notCompleted"),
					children: ee
				}) : null]
			}),
			ie.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:addCreatorSource.results") }),
					ie.map((e, t) => /* @__PURE__ */ (0, Z.jsx)(cn, {
						row: e,
						at: t,
						hidden: x,
						unpicked: C,
						onPick: (e, t) => {
							let n = new Set(C);
							t ? n.delete(e) : n.add(e), w(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: () => I(),
								children: Y("follow:shared.close")
							}),
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: n || !ae.length,
								...K(V.isPending),
								onClick: () => V.mutate(ae),
								children: Y("follow:addCreatorSource.addSelected", { count: ae.length })
							}),
							V.isPending ? /* @__PURE__ */ (0, Z.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:addCreatorSource.addingProgress", {
									added: te,
									count: ae.length
								})
							}) : null
						]
					})
				]
			}) : null,
			oe.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: Y("follow:addCreatorSource.suggested")
				}), oe.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: e.origin ? Y("follow:addCreatorSource.historyVisitsFrom", {
						count: e.visits,
						origin: e.origin
					}) : Y("follow:addCreatorSource.historyVisits", { count: e.visits }),
					onClick: () => L(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var un = Y("follow:addJavFeed.placeholder"), dn = Y("follow:addJavFeed.title");
function fn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: Y("follow:addJavFeed.cardsSplitAcrossPeople", { names: J([...n.values()]) }),
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: Y("follow:addJavFeed.willAddUnder", { name: r }),
		blocked: !1
	} : e.known ? {
		text: Y("follow:addJavFeed.willAddUnderKnown", { name: e.known.name }),
		blocked: !1
	} : {
		text: Y("follow:addJavFeed.willCreate", { name: e.q }),
		blocked: !1
	};
}
function pn({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(p, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: J(e.names)
					}),
					e.record ? /* @__PURE__ */ (0, Z.jsx)(h, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Z.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: Y("follow:addJavFeed.alreadyUnder", { name: e.held_by.name })
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Z.jsx)(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function mn({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, X.useState)(""), [a, o] = (0, X.useState)(null), [s, c] = (0, X.useState)(/* @__PURE__ */ new Set()), u = Ft(), d = () => {
		let t = r.trim();
		t && !e && u.run("lookup", (e) => at(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !Me(e.nativeEvent) && (e.preventDefault(), d());
	}, p = () => {
		o(null), c(/* @__PURE__ */ new Set()), u.setError("");
	}, m = () => {
		a && u.run("follow", (e) => Ye(a.q, [...s], e), (e) => {
			t(e.created ? Y("follow:addJavFeed.createdAndSubscribed", { name: e.entity_name }) : Y("follow:addJavFeed.subscribed", { name: e.entity_name })), i(""), p(), n();
		});
	}, h = () => {
		let e = a?.known;
		e && u.run("known", (t) => Xe(e.id, t), () => {
			t(Y("follow:addJavFeed.subscribed", { name: e.name })), i(""), p(), n();
		});
	}, g = a ? fn(a, s) : null, _ = a && !a.candidates.length && a.known?.subscribable ? a.known : null;
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": dn,
		className: Ce({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: dn
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Z.jsx)(j, {
						"aria-label": Y("follow:addJavFeed.actressName"),
						placeholder: un,
						value: r,
						leadingIcon: dt,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: f
					})
				}), /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "primary",
					disabled: e || !r.trim(),
					...K(u.busy === "lookup"),
					onClick: d,
					children: Y("follow:shared.search")
				})]
			}),
			u.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
				tone: "error",
				title: Y("follow:addJavFeed.notCompleted"),
				children: u.error
			}) : null,
			a ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					a.unavailable ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "warning",
						title: Y("follow:addJavFeed.javdbSearchFailed"),
						children: Et(a.unavailable_code ?? "", a.unavailable, a.unavailable_params)
					}) : null,
					/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:addJavFeed.javdbCards") }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Z.jsx)(pn, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Z.jsx)(A, { children: a.unavailable ? Y("follow:addJavFeed.noCardsThisTime") : Y("follow:addJavFeed.noJavdbMatch") }),
					a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(A, {
						role: "status",
						children: s.size ? g.text : Y("follow:addJavFeed.pickCardsHint")
					}) : null,
					_ ? /* @__PURE__ */ (0, Z.jsx)(A, {
						role: "status",
						children: _.following ? Y("follow:addJavFeed.alreadySubscribed", { name: _.name }) : Y("follow:addJavFeed.canSubscribeDirectly", { name: _.name })
					}) : null,
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "secondary",
								size: "small",
								onClick: p,
								children: Y("follow:shared.close")
							}),
							a.candidates.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: e || !s.size || g.blocked,
								...K(u.busy === "follow"),
								onClick: m,
								children: Y("follow:addJavFeed.subscribePicked", { count: s.size })
							}) : null,
							_ && !_.following ? /* @__PURE__ */ (0, Z.jsx)(l, {
								variant: "primary",
								size: "small",
								disabled: e,
								...K(u.busy === "known"),
								onClick: h,
								children: Y("follow:addJavFeed.subscribeTo", { name: _.name })
							}) : null
						]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function hn({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Z.jsx)(R, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: Y("follow:creatorAliases.rename"),
		children: e ? /* @__PURE__ */ (0, Z.jsx)(gn, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function gn({ group: t, close: n, receipt: r }) {
	let [i, a] = (0, X.useState)(t.canonical_name), o = Ft();
	return /* @__PURE__ */ (0, Z.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault(), i.trim() && i.trim() !== t.canonical_name && o.run("rename", (e) => vt(t.canonical_key, i.trim(), e), () => {
				mt(), r(Y("follow:creatorAliases.renamed", { name: i.trim() })), n();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Z.jsx)(e, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: Y("follow:creatorAliases.rename")
			}),
			/* @__PURE__ */ (0, Z.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: [Y("follow:creatorAliases.currentName"), t.canonical_name]
			}),
			/* @__PURE__ */ (0, Z.jsx)(j, {
				"aria-label": Y("follow:creatorAliases.displayName"),
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:creatorAliases.chooseExisting") }), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: t.aliases.map((e) => /* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: Y("follow:creatorAliases.renameHint")
			}),
			o.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					onClick: n,
					children: Y("follow:shared.cancel")
				}), /* @__PURE__ */ (0, Z.jsx)(l, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === t.canonical_name,
					...K(!!o.busy),
					children: Y("follow:creatorAliases.rename")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var _n = (e) => Y("follow:creatorAliases.removeBody", { alias: e }), vn = Mt({
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	rowPaginationFeature: St,
	columnVisibilityFeature: je,
	sortedRowModel: Jt(),
	paginatedRowModel: qt()
}), yn = vn, bn = {
	id: "select",
	label: Y("follow:shared.select"),
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, xn = {
	id: "canonical",
	label: Y("follow:creatorAliases.displayName"),
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Sn = [
	bn,
	xn,
	{
		id: "alias",
		label: Y("follow:creatorAliases.platformAlias"),
		width: 240
	},
	{
		id: "evidence",
		label: Y("follow:creatorAliases.evidence"),
		width: 320
	},
	{
		id: "actions",
		label: Y("follow:shared.actions"),
		width: 112
	}
], Cn = [
	bn,
	xn,
	{
		id: "aliases",
		label: Y("follow:creatorAliases.platformAlias"),
		width: 400
	},
	{
		id: "actions",
		label: Y("follow:shared.actions"),
		width: 184,
		min: 168
	}
], wn = (e) => e.alias;
function Tn(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function En({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Z.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Z.jsx)(Ht, {
			group: Tn(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Z.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Dn({ groups: e, suggestions: t, sources: s = [], readOnly: c, toast: u }) {
	let d = Bt("alias-suggestions", Sn), f = Bt("alias-saved", Cn), [h, g] = (0, X.useState)(null), [_, w] = (0, X.useState)({}), [ee, T] = (0, X.useState)({}), te = Yt(() => w({})), E = Yt(() => T({})), [D, O] = (0, X.useState)([]), [A, M] = (0, X.useState)([]), [N, P] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [F, I] = (0, X.useState)({
		pageIndex: 0,
		pageSize: 20
	}), L = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(t.length / N.pageSize) - 1))
	}, R = {
		...F,
		pageIndex: Math.min(F.pageIndex, Math.max(0, Math.ceil(e.length / F.pageSize) - 1))
	}, [z, B] = (0, X.useState)(""), [re, ie] = (0, X.useState)(""), [ae, V] = (0, X.useState)(""), H = Lt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await ve(n.canonical, n.alias);
				} catch (n) {
					throw t && mt(), Error(Y("follow:creatorAliases.mergePartialError", {
						error: q(n),
						count: e.length - t
					}));
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			B(""), w({}), mt(), u(Y("follow:creatorAliases.merged", { count: e.done }));
		},
		onError: (e) => B(q(e))
	}), U = Lt({
		mutationFn: (e) => ve(e.canonical, e.alias),
		onSuccess: () => {
			B(""), ie(""), V(""), mt(), u(Y("follow:creatorAliases.saved"));
		},
		onError: (e) => B(q(e))
	}), se = Lt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await ht(e), n += 1;
			} catch (e) {
				throw Error(Y("follow:creatorAliases.removePartialError", {
					error: q(e),
					removed: n,
					count: t.length - n
				}));
			} finally {
				mt();
			}
		},
		onSuccess: () => {
			B(""), T({}), u(Y("follow:creatorAliases.removed"));
		},
		onError: (e) => B(q(e))
	}), ce = (e, t) => {
		e.length && Ne({
			title: Y(t ? "follow:creatorAliases.mergeAllTitle" : "follow:creatorAliases.mergeSelectedTitle"),
			body: Y("follow:creatorAliases.mergeBody", {
				count: e.length,
				pairs: J(e.map((e) => Y("follow:creatorAliases.mergePair", {
					alias: pt(e.alias),
					canonical: pt(e.canonical)
				})))
			}),
			confirmLabel: Y(t ? "follow:creatorAliases.mergeAllConfirm" : "follow:creatorAliases.mergeSelectedConfirm"),
			onConfirm: () => H.mutateAsync(e)
		});
	}, le = (e) => void Ne({
		title: Y("follow:creatorAliases.removeTitle"),
		body: _n(e),
		confirmLabel: Y("follow:creatorAliases.removeTitle"),
		onConfirm: () => se.mutateAsync(e)
	}), W = (0, X.useRef)({
		sources: s,
		readOnly: c,
		merging: H.isPending,
		removing: se.isPending,
		merge: ce,
		remove: le,
		rename: g
	});
	W.current = {
		sources: s,
		readOnly: c,
		merging: H.isPending,
		removing: se.isPending,
		merge: ce,
		remove: le,
		rename: g
	};
	let me = (0, X.useMemo)(() => {
		let e = Pe();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: Y("follow:creatorAliases.selectAllPending")
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": Y("follow:creatorAliases.selectPendingRow", {
						alias: e.row.original.alias,
						name: e.row.original.canonical
					}),
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: Y("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(En, {
					sources: W.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: Y("follow:creatorAliases.platformAlias"),
				cell: (e) => e.getValue()
			}),
			e.accessor((e) => Et(e.evidence_code ?? "", e.evidence, e.evidence_params), {
				id: "evidence",
				header: Y("follow:creatorAliases.evidence"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: Y("follow:shared.actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					...K(W.current.merging),
					onClick: () => W.current.merge([e.row.original], !1),
					children: Y("follow:shared.merge")
				})
			})
		]);
	}, []), he = (0, X.useMemo)(() => {
		let e = Pe();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e,
					label: Y("follow:creatorAliases.selectAllSaved")
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					"aria-label": Y("follow:creatorAliases.selectSavedRow", { name: e.original.canonical_name }),
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: Y("follow:creatorAliases.displayName"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(En, {
					sources: W.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: Y("follow:creatorAliases.platformAlias"),
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: ne,
							"aria-label": Y("follow:creatorAliases.removeAliasNamed", { name: e.name }),
							disabled: W.current.readOnly,
							...K(W.current.removing),
							onClick: () => W.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: Y("follow:shared.actions"),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Z.jsx)(l, {
					variant: "secondary",
					size: "small",
					disabled: W.current.readOnly,
					"aria-label": Y("follow:creatorAliases.renameRowLabel", { name: e.original.canonical_name }),
					onClick: () => W.current.rename(e.original),
					children: Y("follow:creatorAliases.rename")
				})
			})
		]);
	}, []), G = zt({
		features: vn,
		data: t,
		columns: me,
		getRowId: wn,
		state: {
			rowSelection: _,
			sorting: D,
			pagination: L,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			te(), w(e);
		},
		onSortingChange: (e) => {
			O(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P,
		enableRowSelection: !0
	}), _e = zt({
		features: yn,
		data: e,
		columns: he,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: ee,
			sorting: A,
			pagination: R,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			E(), T(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			M(e), I((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: I
	}), ye = G.getSelectedRowModel().rows.map((e) => e.original), be = _e.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), xe = K(H.isPending);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Ce({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Y("follow:creatorAliases.title")
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:creatorAliases.addManually") }), /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(j, {
							"aria-label": Y("follow:creatorAliases.displayName"),
							placeholder: Y("follow:creatorAliases.displayNamePlaceholder"),
							value: re,
							onChange: ie,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(j, {
							"aria-label": Y("follow:creatorAliases.platformAlias"),
							placeholder: Y("follow:creatorAliases.platformAlias"),
							value: ae,
							onChange: V,
							isDisabled: c,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							disabled: c || !re.trim() || !ae.trim(),
							...K(U.isPending),
							onClick: () => U.mutate({
								canonical: re.trim(),
								alias: ae.trim()
							}),
							children: Y("follow:creatorAliases.saveAlias")
						})
					]
				})]
			}),
			z ? /* @__PURE__ */ (0, Z.jsx)(C, { children: z }) : null,
			t.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:creatorAliases.pending") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: t.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "primary",
									size: "small",
									disabled: c,
									...xe,
									onClick: () => ce(t, !0),
									children: Y("follow:creatorAliases.mergeAllCount", { count: t.length })
								}),
								/* @__PURE__ */ (0, Z.jsx)(b, {
									label: Y("follow:creatorAliases.pendingTable"),
									sorting: D,
									options: [
										{
											id: "canonical",
											label: Y("follow:creatorAliases.displayName")
										},
										{
											id: "alias",
											label: Y("follow:creatorAliases.platformAlias")
										},
										{
											id: "evidence",
											label: Y("follow:creatorAliases.evidence")
										}
									],
									onChange: (e) => {
										O(e), P((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: d,
									label: Y("follow:creatorAliases.pendingTable")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: Y("follow:creatorAliases.pendingBulkActions"),
						visible: ye.length > 0,
						count: Y("follow:creatorAliases.groupsSelected", { count: ye.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...xe,
							onClick: () => ce(ye, !1),
							children: Y("follow:creatorAliases.mergeSelectedCount", { count: ye.length })
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: Y("follow:shared.clearSelection")
						})]
					}),
					/* @__PURE__ */ (0, Z.jsx)(y, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => G.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
							"aria-label": Y("follow:creatorAliases.pendingTable"),
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => G.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [G.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Je(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: G.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.pendingTable"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: t.length,
						pagination: L,
						onChange: P
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(k, { children: Y("follow:creatorAliases.savedAliases") }), /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: Y("follow:creatorAliases.groupCount", { count: e.length })
							})]
						}), /* @__PURE__ */ (0, Z.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Z.jsx)(b, {
								label: Y("follow:creatorAliases.saved"),
								sorting: A,
								options: [{
									id: "canonical",
									label: Y("follow:creatorAliases.displayName")
								}, {
									id: "aliases",
									label: Y("follow:creatorAliases.platformAlias")
								}],
								onChange: (e) => {
									M(e), I((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Z.jsx)(de, {
								preferences: f,
								label: Y("follow:creatorAliases.saved")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(oe, {
						label: Y("follow:creatorAliases.savedBulkActions"),
						visible: be.length > 0,
						count: Y("follow:creatorAliases.aliasesSelected", { count: be.length }),
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: c,
							...K(se.isPending),
							onClick: () => void Ne({
								title: Y("follow:creatorAliases.removeSelectedTitle"),
								body: Y("follow:creatorAliases.removeSelectedBody", { count: be.length }),
								items: be,
								confirmLabel: Y("follow:creatorAliases.removeSelectedConfirm"),
								onConfirm: () => se.mutateAsync(be)
							}),
							children: Y("follow:creatorAliases.removeSelectedCount", { count: be.length })
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => T({}),
							children: Y("follow:shared.clearSelection")
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(y, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => _e.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
							"aria-label": Y("follow:creatorAliases.saved"),
							size: "sm",
							sortDescriptor: A[0] ? {
								column: A[0].id,
								direction: A[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => _e.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [_e.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Je(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Z.jsx)(r, {
								id: "remaining-space",
								"aria-label": Y("follow:shared.rowSpacer"),
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: _e.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Z.jsx)(v, {
						label: Y("follow:creatorAliases.saved"),
						unit: Y("follow:creatorAliases.groupUnit"),
						total: e.length,
						pagination: R,
						onChange: I
					})] }) : /* @__PURE__ */ (0, Z.jsx)(S, {
						size: "compact",
						icon: ge,
						title: Y("follow:creatorAliases.emptyTitle"),
						actions: c ? void 0 : /* @__PURE__ */ (0, Z.jsx)(x, {
							target: `input[aria-label="${Y("follow:creatorAliases.displayName")}"]`,
							children: Y("follow:creatorAliases.addAlias")
						}),
						children: Y("follow:creatorAliases.emptyBody")
					})
				]
			}),
			/* @__PURE__ */ (0, Z.jsx)(hn, {
				group: h,
				close: () => g(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var On = Mt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: je,
	sortedRowModel: Jt(),
	paginatedRowModel: qt()
}), kn = {
	select: Y("follow:shared.select"),
	name: Y("follow:shared.name"),
	kind: Y("follow:shared.type"),
	origin: Y("follow:followFeed.filterKindSource"),
	status: Y("follow:shared.status"),
	interval: Y("follow:feedSources.colInterval"),
	fetched: Y("follow:feedSources.colLastFetched"),
	fresh: Y("follow:feedSources.colLastAdded"),
	actions: Y("follow:shared.actions")
}, An = /* @__PURE__ */ new Set(["actions"]), jn = Object.entries(kn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : e === "origin" ? 184 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Mn = () => ft.invalidateQueries({
	queryKey: ee,
	exact: !0
}), Nn = (e) => e.name || e.url;
function Pn(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Fn({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "rose",
		children: Y("follow:feedSources.fetchFailed")
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "lime",
		children: Y("follow:shared.ok")
	}) : /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "gray",
		children: Y("follow:feedSources.notChecked")
	}) : /* @__PURE__ */ (0, Z.jsx)(h, {
		variant: "caption",
		color: "gray",
		children: Y("follow:shared.paused")
	});
}
function In({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Z.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${Xt}`,
		dangerouslySetInnerHTML: { __html: Se(Nn(e), t, null, "performer") }
	});
}
var Ln = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function Rn(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function zn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return Ne({
		title: n ? Y("follow:feedSources.removeOne") : Y("follow:feedSources.removeMany", { count: e.length }),
		body: n ? Y("follow:feedSources.removeOneBody", { name: Nn(n) }) : Y("follow:feedSources.removeManyBody"),
		confirmLabel: Y(n ? "follow:feedSources.removeOne" : "follow:feedSources.removeSelected"),
		danger: !0,
		onConfirm: t
	});
}
function Bn({ readOnly: e, toast: t, onAdd: c, selection: u }) {
	let f = Rt({
		queryKey: ee,
		queryFn: ({ signal: e }) => We(e)
	}), h = Ft(), g = Bt("jav-feeds", jn), _ = f.data, x = (0, X.useMemo)(() => _?.sources ?? [], [_]), [w, T] = (0, X.useState)(/* @__PURE__ */ new Set()), te = u?.ids ?? w, E = u?.onChange ?? T, [D, O] = (0, X.useState)(1), [k, j] = (0, X.useState)(20), [M, N] = (0, X.useState)([]), F = lt(x.length, k, D);
	(0, X.useEffect)(() => {
		O((e) => Math.min(e, F.pages));
	}, [F.pages]), (0, X.useEffect)(() => {
		E((e) => {
			let t = new Set(x.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [x, E]);
	let I = Lt({
		mutationFn: async (e) => {
			let t = await ot(e.ids, 4, async (t) => {
				e.action === "remove" ? await gt(t) : await Dt(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (E(/* @__PURE__ */ new Set()), Mn(), e.action === "remove" && r && t(Y("follow:feedSources.removedMany", { count: r })), n.length) {
				let e = n[0];
				h.setError(Y("follow:feedSources.writeFailed", {
					count: n.length,
					error: e.ok ? "" : q(e.error)
				}));
			}
		},
		onError: (e) => h.setError(q(e))
	}), L = (0, X.useMemo)(() => Rn(x), [x]), R = (0, X.useRef)({
		readOnly: e,
		shared: L,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	R.current = {
		readOnly: e,
		shared: L,
		busy: h.busy,
		toggle: (e, t) => void h.run(`enabled-${e.id}`, (n) => Dt(e.id, t, n), () => void Mn()),
		fetch: (e) => void h.run(`check-${e.id}`, (t) => Ee(t, [e.id]), () => void Mn()),
		remove: (e) => void zn([e], async () => {
			await gt(e.id), t(Y("follow:feedSources.removedOne", { name: Nn(e) })), Mn();
		})
	};
	let ne = (0, X.useMemo)(() => {
		let e = Pe(), t = (e) => () => kn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: Y("follow:feedSources.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: Nn(e.row.original) })
				})
			}),
			e.accessor(Nn, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Ln(e.row.original, R.current.shared);
					return /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(In, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: Y("follow:feedSources.aliasTitle", { alias: t }),
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: Y("follow:followDetail.viewOnSite"),
					className: "max-w-full text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Z.jsx)(U, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : e.row.original.kind.startsWith("dmm") ? "dmm" : Pn(e.getValue()),
						label: Pn(e.getValue())
					}), /* @__PURE__ */ (0, Z.jsx)(G, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? Y("follow:feedSources.fetchFailed") : e.enabled ? Y("follow:shared.enabled") : Y("follow:shared.paused"), {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Fn, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ve(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? it(e.row.original.last_fetched_at) : Y("follow:feedSources.neverFetched")
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: Y("follow:feedSources.itemCount", { count: e.getValue() })
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": Y("follow:shared.enableNamed", { name: Nn(e.row.original) }),
							isSelected: e.row.original.enabled,
							isDisabled: R.current.readOnly,
							onChange: (t) => R.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Le,
							"aria-label": Y("follow:feedSources.fetchNamed", { name: Nn(e.row.original) }),
							disabled: R.current.readOnly,
							...K(R.current.busy === `check-${e.row.original.id}`),
							onClick: () => R.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": Y("follow:shared.removeNamed", { name: Nn(e.row.original) }),
							disabled: R.current.readOnly,
							onClick: () => R.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), B = (0, X.useMemo)(() => Object.fromEntries([...te].map((e) => [String(e), !0])), [te]), re = zt({
		features: On,
		data: x,
		columns: ne,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: B,
			sorting: M,
			pagination: {
				pageIndex: F.page - 1,
				pageSize: k
			},
			columnVisibility: g.visibility
		},
		onColumnVisibilityChange: g.change,
		onSortingChange: (e) => {
			N(e), O(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			u?.onActivate();
			let t = typeof e == "function" ? e(B) : e;
			E(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!_) return f.error ? /* @__PURE__ */ (0, Z.jsx)(z, {
		tone: "error",
		title: Y("follow:feedSources.loadFailed"),
		children: q(f.error)
	}) : /* @__PURE__ */ (0, Z.jsx)(A, { children: Y("follow:feedSources.loading") });
	let ie = () => void h.run("check", (e) => Ee(e), () => void Mn()), ae = (e) => {
		u?.onActivate(), E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, V = x.filter((e) => te.has(e.id)), H = x.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Z.jsxs)("section", {
			"aria-label": Y("follow:feedSources.listLabel"),
			className: Ce({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: Y("follow:feedSources.title")
						}), /* @__PURE__ */ (0, Z.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: Y("follow:feedSources.summary", {
								count: x.length,
								unread: Number(_.unread) || 0
							})
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Z.jsx)(l, {
								onClick: ie,
								disabled: e,
								...K(h.busy === "check"),
								children: Y("follow:feedSources.fetchNow")
							}),
							/* @__PURE__ */ (0, Z.jsx)(de, {
								preferences: g,
								label: Y("follow:feedSources.title")
							}),
							/* @__PURE__ */ (0, Z.jsx)(b, {
								label: Y("follow:feedSources.title"),
								sorting: M,
								onChange: (e) => {
									N(e), O(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: kn[e]
								}))
							})
						]
					})]
				}),
				H.length || h.error ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [H.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:feedSources.failedTitle", { count: H.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: H.map((e) => /* @__PURE__ */ (0, Z.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: Y("follow:shared.labeled", {
									label: Nn(e),
									value: Be(e.last_error || "") || Y("follow:shared.noReason")
								})
							}, e.id))
						}),
						children: Y("follow:feedSources.failedBody")
					}) : null, h.error ? /* @__PURE__ */ (0, Z.jsx)(C, { children: h.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Z.jsxs)(oe, {
					visible: V.length > 0,
					label: Y("follow:feedSources.bulkActions"),
					count: Y("follow:feedSources.selectedCount", { count: V.length }),
					children: [
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => I.mutate({
								ids: V.map((e) => e.id),
								action: "enabled"
							}),
							children: Y("follow:shared.enable")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => I.mutate({
								ids: V.map((e) => e.id),
								action: "paused"
							}),
							children: Y("follow:shared.pause")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "danger",
							size: "small",
							disabled: e,
							...K(I.isPending),
							onClick: () => void zn(V, () => I.mutateAsync({
								ids: V.map((e) => e.id),
								action: "remove"
							})),
							children: Y("follow:shared.remove")
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "ghost",
							size: "small",
							onClick: () => E(/* @__PURE__ */ new Set()),
							children: Y("follow:shared.clearSelection")
						})
					]
				}),
				x.length ? /* @__PURE__ */ (0, Z.jsx)(y, {
					follow: !0,
					preferences: g,
					onRowClick: (e) => ae(Number(e)),
					children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
						"aria-label": Y("follow:feedSources.title"),
						size: "sm",
						sortDescriptor: M[0] ? {
							column: M[0].id,
							direction: M[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => re.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [re.getHeaderGroups()[0].headers.map((e) => {
							let t = Je(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Z.jsx)(r, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...g.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [An.has(e.column.id) ? /* @__PURE__ */ (0, Z.jsx)(s, { children: t }) : /* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Z.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Z.jsx)(m, {})
									}) : null]
								}), /* @__PURE__ */ (0, Z.jsx)(fe, {
									preferences: g,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Z.jsx)(r, {
							id: "remaining-space",
							"aria-label": Y("follow:shared.rowSpacer"),
							"data-table-space": "",
							width: g.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Z.jsx)(n, { children: re.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Z.jsx)(S, {
					icon: d,
					title: Y("follow:feedSources.empty"),
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						onClick: c,
						children: Y("follow:feedSources.add")
					}),
					children: Y("follow:feedSources.emptyHint")
				}),
				x.length ? /* @__PURE__ */ (0, Z.jsx)(v, {
					label: Y("follow:feedSources.footerLabel"),
					total: F.total,
					unit: Y("follow:feedSources.unit"),
					pagination: {
						pageIndex: F.page - 1,
						pageSize: k
					},
					onChange: (e) => {
						j(e.pageSize), O(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Z.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Z.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:feedSources.footerSummary", {
							unread: Number(_.unread) || 0,
							enabled: x.filter((e) => e.enabled).length,
							total: x.length
						})
					})
				})
			]
		})
	});
}
// src/react/follow-manage/source-list.tsx
var Vn = Mt({
	rowPaginationFeature: St,
	rowSelectionFeature: Ct,
	rowSortingFeature: wt,
	columnVisibilityFeature: je,
	paginatedRowModel: qt()
}), Hn = Object.fromEntries(Object.entries(f).map(([e, t]) => [t, e])), Un = 740;
function Wn() {
	let [e, t] = (0, X.useState)(!1), n = (0, X.useRef)(null), r = (0, X.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < Un));
		r.observe(e), n.current = r, t(e.clientWidth < Un);
	}, []);
	return (0, X.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var Gn = {
	select: Y("follow:shared.select"),
	author: Y("follow:shared.creator"),
	source: Y("follow:followFeed.filterKindSource"),
	provider: Y("follow:shared.site"),
	status: Y("follow:shared.status"),
	checked: Y("follow:sourceList.colLastChecked"),
	actions: Y("follow:shared.actions")
}, Kn = Object.entries(Gn).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function qn({ source: e, selected: t, onToggle: n, handlers: r }) {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			Ae(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, Z.jsx)(p, {
				isSelected: t,
				onChange: n,
				"aria-label": Y("follow:shared.selectNamed", { name: e.label })
			}),
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider })
				}), /* @__PURE__ */ (0, Z.jsx)(Gt, { source: e })]
			}),
			/* @__PURE__ */ (0, Z.jsx)(s, { children: e.provider_label }),
			/* @__PURE__ */ (0, Z.jsx)(Kt, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, Z.jsx)(Ut, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, Z.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: ke(e)
					}),
					/* @__PURE__ */ (0, Z.jsx)(le, {
						"aria-label": Y("follow:shared.enableNamed", { name: e.label }),
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Le,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.label }),
							disabled: !e.enabled || r.readOnly,
							...K(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": Y("follow:shared.removeNamed", { name: e.label }),
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function Jn({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: a, onToggleGroup: o, onToggle: c }) {
	let u = e.map((e) => e.id), d = e.filter((e) => e.enabled).map((e) => e.id), f = e.filter($e).length, p = J([...new Set(e.map((e) => e.provider_label || e.provider))]), m = `follow-author-${e[0].id}`, h = Tt(r, u);
	return /* @__PURE__ */ (0, Z.jsxs)("section", {
		"aria-label": Y("follow:sourceList.groupLabel", { name: t }),
		className: Ce({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Ht, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Z.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: p,
						children: [
							e.map((e) => /* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, Z.jsx)(s, { children: Y("follow:sourceList.providers", { providers: p }) }),
							f ? /* @__PURE__ */ (0, Z.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: Y("follow:shared.failedCount", { count: f })
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: Le,
						"aria-label": Y("follow:sourceList.checkGroup", { name: t }),
						disabled: !d.length || i.readOnly,
						...K(i.busy),
						onClick: () => i.check(d)
					}), /* @__PURE__ */ (0, Z.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							leadingIcon: rt,
							"aria-pressed": h.all ? "true" : h.some ? "mixed" : "false",
							"aria-label": Y(h.all ? "follow:sourceList.deselectGroup" : "follow:sourceList.selectGroup", { name: t }),
							onClick: () => o(!h.all),
							children: h.all ? Y("follow:shared.deselectAll") : Y("follow:shared.selectAll")
						}), /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": m,
							leadingIcon: g,
							"aria-label": Y(n ? "follow:sourceList.collapseGroup" : "follow:sourceList.expandGroup", { name: t }),
							onClick: () => a(!n),
							children: Y(n ? "follow:shared.collapse" : "follow:shared.expand")
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, Z.jsx)(_, {
			id: m,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(qn, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => c(e.id, t)
			}, e.id))
		})]
	});
}
function Yn(e) {
	let { data: t, sort: c, dir: u, page: h, layout: _, pageSize: b, selected: x, readOnly: C, onSort: w, onPage: ee, onLayout: te, onPageSize: E, onSelected: D, toast: O, openFollow: k, onAdd: A } = e, j = t.sources, N = (0, X.useMemo)(() => t.author_aliases || [], [t.author_aliases]), F = t.counts || {}, [I, L] = (0, X.useState)(/* @__PURE__ */ new Set()), [R, ne] = Wn(), [ie, H] = (0, X.useState)(""), U = (0, X.useMemo)(() => be(j, c, u, N), [
		j,
		c,
		u,
		N
	]), ce = (0, X.useMemo)(() => Nt(U, c, u, N), [
		U,
		c,
		u,
		N
	]), { job: W, running: G, outcome: ge, start: _e } = It({
		queryKey: T,
		queryFn: ({ signal: e }) => He(e),
		start: (e) => At(e),
		onError: (e) => H(q(e)),
		onFinish: (e) => {
			mt(), O(e.status === "failed" ? tt(e, "error") || Y("follow:followCheck.checkFailed") : De(e));
		}
	}), ve = (e) => {
		G || _e.isPending || (H(""), _e.mutate(e));
	}, ye = (e, t) => D(Pt(x, [e], t)), Se = (e, t) => D(Pt(x, e, t)), Ee = Lt({
		mutationFn: (e) => _t(e),
		onSuccess: (e, t) => {
			Re([t]), D(Pt(x, [t], !1)), O(Y("follow:sourceList.unfollowed"));
		},
		onError: (e) => H(q(e))
	}), Ae = Lt({
		mutationFn: (e) => Ot(e.id, e.enabled),
		onSuccess: (e, t) => {
			ut(t.id, { enabled: t.enabled }), H("");
		},
		onError: (e) => H(q(e))
	}), je = (e) => void Ne({
		title: Y("follow:sourceList.unfollow"),
		body: Y("follow:sourceList.unfollowBody"),
		confirmLabel: Y("follow:sourceList.unfollow"),
		danger: !0,
		onConfirm: () => Ee.mutateAsync(e.id)
	}), Me = Lt({
		mutationFn: async (e) => {
			let t = await ot(e.ids, 4, async (t) => {
				e.action === "remove" ? await _t(t) : await Ot(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Re(e.done);
			else for (let t of e.done) ut(t, { enabled: e.action === "enabled" });
			D(Pt(x, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				H(Y("follow:sourceList.bulkPartialFail", {
					failed: t.length,
					total: e.ids.length,
					error: q(t[0]?.error)
				}));
				return;
			}
			H("");
			let n = e.action === "remove" ? "follow:sourceList.bulkDeleted" : e.action === "enabled" ? "follow:sourceList.bulkEnabled" : "follow:sourceList.bulkPaused";
			O(Y(n, { count: e.done.length }));
		},
		onError: (e) => H(q(e))
	}), Fe = Lt({
		mutationFn: st,
		onSuccess: (e) => {
			mt(), e.failed ? H(Y("follow:sourceList.bulkMarkFailed", {
				failed: e.failed,
				total: e.total,
				error: q(e.error)
			})) : (H(""), O(Y("follow:sourceList.bulkMarked", { count: e.total })));
		},
		onError: (e) => H(q(e))
	}), Ie = (e, t) => Ae.mutate({
		id: e.id,
		enabled: t
	}), Ve = (0, X.useRef)({
		check: ve,
		toggle: Ie,
		remove: je,
		busy: !1,
		readOnly: C
	});
	Ve.current = {
		check: ve,
		toggle: Ie,
		remove: je,
		busy: G || _e.isPending,
		readOnly: C
	};
	let Ue = Ve.current, We = (0, X.useMemo)(() => {
		let e = Pe(), t = (e) => () => Gn[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Z.jsx)(pe, {
					table: e.table,
					label: Y("follow:sourceList.selectPage"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(p, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": Y("follow:shared.selectNamed", { name: e.row.original.source.label })
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, Z.jsx)(Ht, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Gt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, Z.jsx)(Ut, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, Z.jsx)(Wt, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsx)(Kt, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => ke(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Z.jsx)(le, {
							"aria-label": Y("follow:shared.enableNamed", { name: e.row.original.source.label }),
							isSelected: e.row.original.source.enabled,
							isDisabled: Ue.readOnly,
							onChange: (t) => Ve.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: Le,
							"aria-label": Y("follow:sourceList.checkNamed", { name: e.row.original.source.label }),
							disabled: !e.row.original.source.enabled || Ue.readOnly,
							...K(Ue.busy),
							onClick: () => Ve.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: P,
							"aria-label": Y("follow:shared.removeNamed", { name: e.row.original.source.label }),
							disabled: Ue.readOnly,
							onClick: () => Ve.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [Ue]), Ge = (0, X.useMemo)(() => {
		let e = Hn[c];
		return e ? [{
			id: e,
			desc: u === "desc"
		}] : [];
	}, [c, u]), Ke = (0, X.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), qe = _ === "table", Ye = Bt("follow-sources", Kn), Xe = lt(qe ? ce.length : U.length, b, h), Ze = zt({
		features: Vn,
		data: ce,
		columns: We,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: Ge,
			rowSelection: Ke,
			pagination: {
				pageIndex: Xe.page - 1,
				pageSize: b
			},
			columnVisibility: Ye.visibility
		},
		onColumnVisibilityChange: Ye.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(Ge) : e)[0];
			if (!t) return;
			let n = f[t.id];
			n && w(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Ke) : e;
			D(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: Xe.page - 1,
				pageSize: b
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === b ? n.pageIndex !== t.pageIndex && ee(n.pageIndex + 1) : E(n.pageSize);
		}
	}), Qe = Ze.getRowModel().rows, $e = qe ? Qe.map((e) => e.original.source.id) : U.slice(Xe.start, Xe.end).flatMap((e) => e.map((e) => e.id)), et = Tt(x, $e), J = [...x], nt = Te(ge), rt = j.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), it = we(ge), at = U.length > 0 && I.size >= U.length;
	return j.length ? /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: Ce({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				ref: R,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, Z.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, Z.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: Y("follow:followManageNav.list")
					}), /* @__PURE__ */ (0, Z.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: F.new ? Y("follow:sourceList.sourceCountUnseen", {
							count: j.length,
							unseen: Number(F.new) || 0
						}) : Y("follow:sourceList.sourceCount", { count: j.length })
					})]
				}), /* @__PURE__ */ (0, Z.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						rt.length ? /* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "secondary",
							disabled: C,
							...K(Ue.busy),
							onClick: () => ve(rt),
							children: Y("follow:sourceList.checkFailed")
						}) : null,
						/* @__PURE__ */ (0, Z.jsx)(l, {
							variant: "primary",
							leadingIcon: Le,
							disabled: C,
							"aria-label": Y("follow:sourceList.checkAll"),
							iconOnly: ne,
							...K(Ue.busy),
							onClick: () => ve([]),
							children: Y("follow:sourceList.checkAll")
						}),
						/* @__PURE__ */ (0, Z.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": Y("follow:sourceList.layout"),
									children: [/* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: he,
										"aria-label": M[0][1],
										"aria-pressed": !qe,
										onClick: () => te("default")
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: ze,
										"aria-label": M[1][1],
										"aria-pressed": qe,
										onClick: () => te("table")
									})]
								}),
								qe ? /* @__PURE__ */ (0, Z.jsx)(de, {
									preferences: Ye,
									label: Y("follow:sourceList.tableLabel")
								}) : null,
								/* @__PURE__ */ (0, Z.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, Z.jsx)(ae, {
										"aria-label": Y("follow:sourceList.sortLabel"),
										prefix: Y("follow:shared.sort"),
										selectedKey: c,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											w(t, B[t]);
										},
										children: re.map(([e, t]) => /* @__PURE__ */ (0, Z.jsx)(V, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, Z.jsx)(l, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: se,
										"data-icon-state": u === "asc" ? "a" : "b",
										"aria-label": kt(c, u),
										onClick: () => w(c, u === "asc" ? "desc" : "asc")
									})]
								}),
								qe ? null : /* @__PURE__ */ (0, Z.jsx)(l, {
									variant: "secondary",
									iconOnly: ne,
									leadingIcon: g,
									"aria-expanded": !at,
									"aria-label": Y(at ? "follow:shared.expandAll" : "follow:shared.collapseAll"),
									onClick: () => L(at ? /* @__PURE__ */ new Set() : new Set(U.map((e) => String(e[0].author_key || e[0].id)))),
									children: Y(at ? "follow:shared.expandAll" : "follow:shared.collapseAll")
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					G ? /* @__PURE__ */ (0, Z.jsx)(me, {
						embedded: !0,
						label: tt(W) || (W?.total ? Y(W.older ? "follow:sourceList.backfillProgress" : "follow:sourceList.checkProgress", {
							checked: W.checked || 0,
							count: W.total
						}) : Y("follow:sourceList.preparingCheck")),
						value: W?.checked,
						total: W?.total
					}) : null,
					ie ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:shared.actionFailed"),
						children: ie
					}) : null,
					!G && ge?.results?.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "neutral",
						title: Y("follow:followFeed.checkResults"),
						children: Oe(ge)
					}) : null,
					nt.length ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						title: Y("follow:sourceList.failedTitle", { count: nt.length }),
						extra: /* @__PURE__ */ (0, Z.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: nt.map((e, t) => /* @__PURE__ */ (0, Z.jsx)("li", { children: Y("follow:shared.labeled", {
								label: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}`.trim(),
								value: Be(e.error || "") || Y("follow:shared.noReason")
							}) }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: Y("follow:sourceList.failedBody")
					}) : null,
					it ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "warning",
						children: Y("follow:sourceList.evidenceGap", { error: it })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(oe, {
				label: Y("follow:sourceList.bulkActions"),
				visible: J.length > 0,
				count: Y("follow:sourceList.selectedCount", { count: J.length }),
				children: [
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...K(Ue.busy),
						onClick: () => ve(J),
						children: Y("follow:sourceList.checkSelected")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...K(Me.isPending),
						onClick: () => Me.mutate({
							ids: J,
							action: "enabled"
						}),
						children: Y("follow:shared.enable")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...K(Me.isPending),
						onClick: () => Me.mutate({
							ids: J,
							action: "paused"
						}),
						children: Y("follow:shared.pause")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "danger",
						size: "small",
						disabled: C,
						...K(Me.isPending),
						onClick: () => void Ne({
							title: Y("follow:sourceList.deleteManyTitle", { count: J.length }),
							body: Y("follow:sourceList.deleteManyBody"),
							confirmLabel: Y("follow:sourceList.deleteSelected"),
							danger: !0,
							onConfirm: () => Me.mutateAsync({
								ids: J,
								action: "remove"
							})
						}),
						children: Y("follow:shared.delete")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "ghost",
						size: "small",
						onClick: () => D(/* @__PURE__ */ new Set()),
						children: Y("follow:shared.clearSelection")
					})
				]
			}),
			qe ? /* @__PURE__ */ (0, Z.jsx)(y, {
				follow: !0,
				preferences: Ye,
				onRowClick: (e) => ye(Number(e), !x.has(Number(e))),
				children: /* @__PURE__ */ (0, Z.jsxs)(ue, {
					"aria-label": Y("follow:sourceList.tableLabel"),
					size: "sm",
					sortDescriptor: Ge[0] ? {
						column: Ge[0].id,
						direction: Ge[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Ze.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, Z.jsxs)(o, { children: [Ze.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in f, n = Je(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, Z.jsx)(r, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Ye.columnProps(e.id),
							children: ({ sortDirection: r }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [e.id === "select" ? n : t ? /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [n, /* @__PURE__ */ (0, Z.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": r || void 0,
									children: /* @__PURE__ */ (0, Z.jsx)(m, {})
								})]
							}) : /* @__PURE__ */ (0, Z.jsx)(s, { children: n }), /* @__PURE__ */ (0, Z.jsx)(fe, {
								preferences: Ye,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, Z.jsx)(r, {
						id: "remaining-space",
						"aria-label": Y("follow:shared.rowSpacer"),
						"data-table-space": "",
						width: Ye.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, Z.jsx)(n, {
						renderEmptyState: () => Y("follow:sourceList.pageEmpty"),
						children: Qe.map((e) => /* @__PURE__ */ (0, Z.jsxs)(i, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Z.jsx)(a, { children: Je(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Z.jsx)(a, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(p, {
				isSelected: et.all,
				isIndeterminate: et.some,
				onChange: (e) => Se($e, e),
				"aria-label": Y("follow:sourceList.selectPage"),
				children: Y("follow:sourceList.selectPageShort")
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col gap-3",
				children: U.slice(Xe.start, Xe.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, Z.jsx)(Jn, {
						group: e,
						name: xe(e, N),
						handlers: Ue,
						selected: x,
						open: !I.has(t),
						onOpen: (e) => {
							let n = new Set(I);
							e ? n.delete(t) : n.add(t), L(n);
						},
						onToggleGroup: (t) => Se(e.map((e) => e.id), t),
						onToggle: ye
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, Z.jsx)(v, {
				label: Y("follow:followManageNav.list"),
				total: Xe.total,
				pagination: {
					pageIndex: Xe.page - 1,
					pageSize: b
				},
				unit: Y(qe ? "follow:followOverview.sourceUnit" : "follow:sourceList.creatorUnit"),
				pageUnit: Y(qe ? "follow:followOverview.itemUnit" : "follow:followOverview.creatorUnit"),
				onChange: (e) => {
					e.pageSize === b ? Ze.setPageIndex(e.pageIndex) : Ze.setPageSize(e.pageSize);
				}
			}),
			F.new ? /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: Y("follow:sourceList.markSummary", {
							unwatched: Number(F.new) || 0,
							watched: Number(F.seen) || 0,
							saved: Number(F.saved) || 0,
							ignored: Number(F.ignored) || 0
						})
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						onClick: k,
						children: Y("follow:sourceList.seeUpdates")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...K(Fe.isPending),
						onClick: () => void Ne({
							title: Y("follow:followDetail.markSeen"),
							body: Y("follow:sourceList.markWatchedBody"),
							confirmLabel: Y("follow:followDetail.markSeen"),
							onConfirm: () => Fe.mutateAsync("seen")
						}),
						children: Y("follow:sourceList.markAllWatched")
					}),
					/* @__PURE__ */ (0, Z.jsx)(l, {
						variant: "secondary",
						size: "small",
						disabled: C,
						...K(Fe.isPending),
						onClick: () => void Ne({
							title: Y("follow:sourceList.markIgnored"),
							body: Y("follow:sourceList.markIgnoredBody"),
							confirmLabel: Y("follow:sourceList.markIgnored"),
							onConfirm: () => Fe.mutateAsync("ignored")
						}),
						children: Y("follow:sourceList.ignoreAll")
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, Z.jsx)(S, {
		icon: d,
		title: Y("follow:sourceList.empty"),
		actions: /* @__PURE__ */ (0, Z.jsx)(l, {
			variant: "primary",
			size: "small",
			onClick: A,
			children: Y("follow:followFeed.addFollow")
		}),
		children: Y("follow:sourceList.emptyHint")
	});
}
// node_modules/skullet/dist/index.mjs
var Xn = "skullet-reveal", Zn = "skullet-pane", Qn = "skullet-loading", $n = "skullet-ghost", er = "skullet-snapshot", tr = "skullet-layer", nr = "skullet-rect", rr = "skullet-bar", ir = "skullet-inactive", ar = "skullet-exiting", or = "skullet-covered", sr = "skullet-own", cr = "skullet-block", lr = Symbol.for("skullet.ghost"), ur = Symbol.for("skullet.uncover"), dr = "skullet-status", fr = "skullet-xray", pr = "var(--skullet-base, rgb(128 128 128 / 0.2))", mr = "var(--skullet-highlight, rgb(255 255 255 / 0.12))", hr = 280, gr = 1e4, _r = {
	shimmer: {
		slow: 4e3,
		fast: 2e3
	},
	pulse: {
		slow: 2400,
		fast: 1200
	}
}, vr = [
	"a",
	"b",
	"code",
	"dd",
	"dt",
	"em",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"i",
	"label",
	"li",
	"p",
	"small",
	"span",
	"strong",
	"td",
	"th",
	"time"
], yr = [
	"audio",
	"canvas",
	"embed",
	"iframe",
	"img",
	"input",
	"object",
	"picture",
	"select",
	"svg",
	"textarea",
	"video"
], br = yr.join(", "), xr = `
[${Xn}] {
  position: relative;
}

skullet-reveal {
  display: block;
}

skullet-reveal[loading]:not(:defined) {
  visibility: hidden;
}

[${Zn}] {
  display: block;
}

[${Qn}] {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

[${ir}] {
  display: none !important;
}

[${tr}] {
  position: absolute;
  inset: 0;
  overflow: visible;
}

[${rr}] {
  display: block;
  background-color: ${pr};
  background-repeat: no-repeat;
}

/* Containers keep their surface; what they hold is drawn by bones, measured before the first paint */
@scope ([${Qn}]) to ([${sr}], [${tr}]) {
  :scope,
  :scope * {
    color: transparent !important;
    -webkit-text-fill-color: transparent !important;
    text-shadow: none !important;
    text-decoration-color: transparent !important;
  }

  :scope ::placeholder {
    color: transparent !important;
  }

  /* A line to measure in empty text; content only, never a size, or a dot-sized span would grow round it */
  :scope :is(${vr.join(", ")}):empty:not(svg *)::before {
    content: "000000";
  }

  /* Leaves are drawn by bones, so their own paint never shows; visibility, as measuring reads it */
  :scope :is(:not(:has(*)), ${br}, [${or}], [${cr}]):not(svg *) {
    visibility: hidden !important;
  }

  /* No script to measure: a bar struck through each line of text instead */
  @media (scripting: none) {
    :scope :not(:has(*)):not(svg *) {
      visibility: visible !important;
    }

    :scope,
    :scope * {
      text-decoration: line-through ${pr} !important;
      text-decoration-thickness: 0.72em !important;
      text-decoration-skip-ink: none !important;
    }

    :scope :is(${br}, [${cr}]):not(svg *) {
      visibility: visible !important;
      background: ${pr} !important;
    }

    :scope svg * {
      fill: transparent !important;
      stroke: transparent !important;
    }

    :scope :is(img, video) {
      object-position: -100vw 0;
    }
  }
}

/* Read by screen readers in the skeleton's place, never seen */
[${dr}] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Debug x-ray: the ghost shown through its bones, to see what was measured */
[${fr}] [${Qn}] [${$n}],
[${fr}] [${Qn}] [${$n}] *:not(svg *) {
  visibility: visible !important;
  color: rgb(255 0 80 / 0.7) !important;
  -webkit-text-fill-color: rgb(255 0 80 / 0.7) !important;
}

/* Lets addStyles see a stylesheet already on the page, from styles.css or a server render */
:root {
  --skullet: 1;
}`, Sr = null, Cr = 0, wr;
function Tr() {
	Cr++, !Sr && (wr ??= !!getComputedStyle(document.documentElement).getPropertyValue("--skullet"), !wr && (Sr = document.createElement("style"), Sr.dataset.skullet = "true", Sr.textContent = xr, document.head.appendChild(Sr)));
}
function Er() {
	Cr--, !(Cr > 0 || !Sr) && (Sr.remove(), Sr = null);
}
var Dr = "\"use strict\";(()=>{var B=\"skullet-ghost\";var D=\"skullet-layer\",L=\"skullet-rect\";var R=\"skullet-covered\",$=\"skullet-own\",v=\"skullet-ignore\",H=\"skullet-block\",I=Symbol.for(\"skullet.ghost\"),G=Symbol.for(\"skullet.uncover\"),P=\"skullet.boot\";var W=\"var(--skullet-base, rgb(128 128 128 / 0.2))\",z=\"var(--skullet-highlight, rgb(255 255 255 / 0.12))\";var F={shimmer:{slow:4e3,fast:2e3},pulse:{slow:2400,fast:1200}},X=[\"a\",\"b\",\"code\",\"dd\",\"dt\",\"em\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"i\",\"label\",\"li\",\"p\",\"small\",\"span\",\"strong\",\"td\",\"th\",\"time\"],U=[\"audio\",\"canvas\",\"embed\",\"iframe\",\"img\",\"input\",\"object\",\"picture\",\"select\",\"svg\",\"textarea\",\"video\"];var gt,V=()=>gt??(gt=/jsdom/.test(navigator.userAgent)?null:document.createElement(\"canvas\").getContext(\"2d\"));var J=(t,n)=>t?{left:Math.max(t.left,n.left),right:Math.min(t.right,n.right),top:Math.max(t.top,n.top),bottom:Math.min(t.bottom,n.bottom)}:n,A=t=>[[t.left,t.top],[t.right,t.top],[t.right,t.bottom],[t.left,t.bottom]],k=(t,n)=>Math.abs(t[0]-n[0])<1&&Math.abs(t[1]-n[1])<1;function Q(t,n){let e=Math.min(n.right-n.left,n.bottom-n.top),o=r=>r.endsWith(\"%\")?parseFloat(r)/100*e:parseFloat(r)||0;return[o(t.borderTopLeftRadius),o(t.borderTopRightRadius),o(t.borderBottomRightRadius),o(t.borderBottomLeftRadius)]}function bt(t,n,e){let o=J(t,n),r=Q(e,n),c=t?A(t):[],a=A(n),l=A(o).map((f,T)=>k(f,a[T])?r[T]:t&&k(f,c[T])?t.corners[T]:0),{left:s,right:i,top:u,bottom:h}=o;return{left:s,right:i,top:u,bottom:h,corners:l}}function Tt(t,n,e,o){if(!t)return e;let r=A(t),c=A(n).map((l,s)=>t.corners[s]>0&&k(l,r[s]));if(!c.some(Boolean))return e;let a=Q(o,n);return c.map((l,s)=>l?Math.max(a[s],t.corners[s]):a[s]).map(l=>`${l}px`).join(\" \")}var j=(t,n)=>{let e=J(n,t);return e.right-e.left>=2&&e.bottom-e.top>=2?e:null},q={top:\"ascender\",bottom:\"descender\"},C=new Map,tt=t=>[...t.getClientRects?.()??[]];function St(t){let n=`${t.fontStyle} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;if(C.has(n))return C.get(n);let e=V(),o=null;if(e){e.font=n;let r=e.measureText(\"H\"),c=a=>e.measureText(a).actualBoundingBoxAscent;o={ascent:r.fontBoundingBoxAscent,descent:r.fontBoundingBoxDescent,ascender:c(\"bdfhkl\"),capHeight:r.actualBoundingBoxAscent,xHeight:c(\"xz\"),descender:e.measureText(\"gjpqy\").actualBoundingBoxDescent}}return C.set(n,o),o}var Y={ascender:\"ascender\",\"cap-height\":\"capHeight\",\"x-height\":\"xHeight\"},K=(t,n,e,o)=>{let r=t.getPropertyValue(n).trim();return e.includes(r)?r:o};function xt(t,n,e){let o=St(n);if(!o){let s=Math.min(e*.72,t.bottom-t.top),i=(t.top+t.bottom)/2;return{barTop:i-s/2,barBottom:i+s/2}}let r=K(n,\"--skullet-text-top\",Object.keys(Y),q.top),c=K(n,\"--skullet-text-bottom\",[\"baseline\",\"descender\"],q.bottom),a=o.ascent+o.descent,l=t.top+(t.bottom-t.top-a)/2+o.ascent;return{barTop:l-o[Y[r]],barBottom:l+(c===\"descender\"?o.descender:0)}}var Et=new Set(U),Rt=new Set(X),et=.4,At=/[,/]\\s*0\\)$/,y=(t,n)=>t!==\"\"&&t!==n,yt=[\"Top\",\"Right\",\"Bottom\",\"Left\"],Mt=t=>yt.every(n=>y(t[`border${n}Style`],\"none\")&&y(t[`border${n}Width`],\"0px\")),Ct=t=>{let[n=0,e=0,o=0,r=0]=(t.replace(/rgba?\\([^)]*\\)|#\\w+/g,\"\").match(/-?[\\d.]+px/g)??[]).map(parseFloat);return t.includes(\"inset\")&&!o&&!r&&n===0!=(e===0)&&Math.abs(n+e)<=2},kt=t=>y(t,\"none\")&&!t.split(/,(?![^(]*\\))/).every(Ct),Ot=t=>y(t.backgroundColor,\"transparent\")&&!At.test(t.backgroundColor)||y(t.backgroundImage,\"none\")||kt(t.boxShadow)||Mt(t),ot=t=>Et.has(t.localName),nt=t=>Rt.has(t.localName)&&!t.firstElementChild&&!t.textContent?.trim(),wt=t=>{let n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT),e=document.createRange(),o=[],r=0;for(;n.nextNode();){let i=n.currentNode;if(i.nodeType===Node.TEXT_NODE){let u=i.parentElement;if(!i.textContent?.trim()||!u)continue;r++;let h=u.getBoundingClientRect();if(h.width<=1||h.height<=1)continue;e.selectNodeContents(i),o.push(tt(e).filter(f=>f.width||f.height))}else nt(i)&&(r++,o.push([...i.getClientRects()]))}if(!o.some(i=>i.length))return r;let c=(parseFloat(getComputedStyle(t).fontSize)||16)*et,a=(i,u)=>Math.min(i.bottom,u.bottom)-Math.max(i.top,u.top)>=Math.min(i.height,u.height)/2&&Math.max(i.left,u.left)-Math.min(i.right,u.right)<=c,l=o.map((i,u)=>u),s=i=>l[i]===i?i:l[i]=s(l[i]);for(let i=0;i<o.length;i++)for(let u=i+1;u<o.length;u++)o[i].some(h=>o[u].some(f=>a(h,f)))&&(l[s(u)]=s(i));return new Set(o.map((i,u)=>s(u))).size},Nt=(t,n)=>t.hasAttribute(H)||ot(t)||Ot(n)&&wt(t)<=1;function _t(t,n){if(parseFloat(n.borderRadius)||!t.parentElement)return n.borderRadius||\"0px\";let e=t.parentElement,o=getComputedStyle(e),r=t.getBoundingClientRect(),c=e.getBoundingClientRect();return Math.abs(r.width-c.width)<1&&Math.abs(r.height-c.height)<1&&o.overflow!==\"visible\"?o.borderRadius:n.borderRadius||\"0px\"}function Z(t){t.sort((e,o)=>e.left-o.left);let n=[];for(let e of t){let o=n.find(r=>{let c=Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top),a=Math.min(r.bottom-r.top,e.bottom-e.top),l=e.left-r.right;return c>=a/2&&l<=Math.max(r.fontSize,e.fontSize)*et});o?(o.left=Math.min(o.left,e.left),o.right=Math.max(o.right,e.right),o.top=Math.min(o.top,e.top),o.bottom=Math.max(o.bottom,e.bottom),o.fontSize=Math.max(o.fontSize,e.fontSize),o.barTop=Math.min(o.barTop,e.barTop),o.barBottom=Math.max(o.barBottom,e.barBottom)):n.push({...e})}return n.map(e=>{let o=e.barBottom-e.barTop;return{x:e.left,y:e.barTop,width:e.right-e.left,height:o,radius:e.radius||`${Math.round(o/3)}px`}})}function rt(t,n,{mark:e=!0,onCovered:o}={}){let r=n.getBoundingClientRect(),c=n.offsetWidth?r.width/n.offsetWidth:1,a=n.offsetHeight?r.height/n.offsetHeight:1,l=m=>({left:(m.left-r.left)/c,right:(m.right-r.left)/c,top:(m.top-r.top)/a,bottom:(m.bottom-r.top)/a}),s=[],i=[],u=new Set,h=document.createRange(),f=(m,g,b)=>{let d=j(m,b);if(!d)return;let p=parseFloat(g.fontSize)||16,M=l(d);i.push({...M,fontSize:p,...xt(M,g,p),radius:g.getPropertyValue(\"--skullet-radius\").trim()})},T=(m,g)=>{let b=m.data.search(/\\S/);if(b<0||!m.parentElement)return;h.setStart(m,b),h.setEnd(m,m.data.trimEnd().length);let d=getComputedStyle(m.parentElement);for(let p of tt(h))f(p,d,g)},_=(m,g)=>{for(let b of m.childNodes){if(b.nodeType===Node.TEXT_NODE){T(b,g);continue}if(b.nodeType!==Node.ELEMENT_NODE)continue;let d=b;if(d.hasAttribute(v)||d.hasAttribute($))continue;let p=getComputedStyle(d);if(p.display===\"none\")continue;if(Nt(d,p)){let E=j(d.getBoundingClientRect(),g);if(E){let S=l(E);s.push({x:S.left,y:S.top,width:S.right-S.left,height:S.bottom-S.top,radius:Tt(g,E,_t(d,p),p)})}ot(d)||u.add(d);continue}if(nt(d)){for(let E of d.getClientRects())f(E,p,g);continue}let M=p.overflowX!==\"visible\"||p.overflowY!==\"visible\";_(d,M?bt(g,d.getBoundingClientRect(),p):g)}};if(_(t,null),o?.(u),!e)return[...s,...Z(i)];for(let m of t.querySelectorAll(`[${R}]`))u.has(m)||m.removeAttribute(R);for(let m of u)m.hasAttribute(R)||m.setAttribute(R,\"\");return[...s,...Z(i)]}var Bt=t=>typeof matchMedia<\"u\"&&matchMedia(t).matches,Dt=()=>typeof Element<\"u\"&&typeof Element.prototype.animate==\"function\",st=()=>!Dt()||Bt(\"(prefers-reduced-motion: reduce)\");var it=t=>t.getAnimations?.()??[];var Lt=.7,$t=1280,at=320,vt=2.5,Ht=.45,It=[\"shimmer\",\"group-shimmer\",\"pulse\",\"none\"];function lt(t){let n=getComputedStyle(t),e=(c,a,l)=>{let s=n.getPropertyValue(c).trim();return a.includes(s)?s:l},o=e(\"--skullet-animation\",It,\"shimmer\"),r=e(\"--skullet-speed\",[\"slow\",\"fast\"],\"slow\");return{animation:o,duration:F[o===\"pulse\"?\"pulse\":\"shimmer\"][r]}}var w=20,Gt=Math.sin(w*Math.PI/180),ut=Math.cos(w*Math.PI/180),Pt=Gt/ut;var Wt=`${90+w}deg`,O=.85,x=12,ct=t=>(1-Math.cos(Math.PI*t))/2;function zt(t){let n=t*vt,e=(r,c)=>`color-mix(in srgb, ${z} ${(c*100).toFixed(1)}%, transparent) ${(r*t).toFixed(2)}px`,o=[];for(let r=0;r<=x;r++)o.push(e(r/x*O,ct(r/x)));for(let r=1;r<=x;r++)o.push(e(O+r/x*(1-O),ct(1-r/x)));return{width:n/ut,image:`repeating-linear-gradient(${Wt}, ${o.join(\", \")}, transparent ${n.toFixed(2)}px)`}}function Ft(t,n,e=lt(t)){for(let f of it(t))f.cancel();if(t.style.backgroundImage=\"\",t.style.backgroundRepeat=\"\",st()||typeof t.animate!=\"function\"||e.animation===\"none\")return;let o={duration:e.duration,iterations:1/0};if(e.animation===\"pulse\"){t.animate([{opacity:1,easing:\"ease-in-out\"},{opacity:Ht,easing:\"ease-in-out\"},{opacity:1}],o).startTime=0;return}let r=t.getBoundingClientRect(),c=r.left+scrollX,a=e.animation===\"group-shimmer\"?n??{left:c,top:r.top,width:r.width,height:r.height}:{left:0,top:0,width:document.documentElement.clientWidth||innerWidth,height:innerHeight},l=Math.min(Math.max(a.width*.4,80),at),{width:s,image:i}=zt(l),u=c-a.left+(r.top-a.top)*Pt,h=e.duration*Lt/($t+at);t.style.backgroundImage=i,t.style.backgroundSize=`${s}px 100%`,t.style.backgroundRepeat=\"repeat-x\",t.animate([{backgroundPosition:`${-u}px 0`},{backgroundPosition:`${s-u}px 0`}],{duration:s*h,iterations:1/0}).startTime=0}var Xt=t=>t.shadowRoot??t.attachShadow({mode:\"open\"});function mt(t,n){let e=Xt(t),o=t.getBoundingClientRect(),r={left:o.left+scrollX,top:o.top,width:o.width,height:o.height},c=lt(t);for(n.forEach((a,l)=>{let s=e.children[l];s||(s=document.createElement(\"div\"),s.setAttribute(L,\"\"),s.style.cssText=`position:absolute;display:block;pointer-events:none;background-color:${W};background-repeat:no-repeat`,e.append(s)),Object.assign(s.style,{left:`${a.x}px`,top:`${a.y}px`,width:`${a.width}px`,height:`${a.height}px`,borderRadius:a.radius});let i=`${Math.round(r.left+a.x)}|${Math.round(a.y)}|${Math.round(a.height)}|${Math.round(r.left)}|${Math.round(r.width)}|${Math.round(r.height)}|${document.documentElement.clientWidth}|${c.animation}|${c.duration}`;s.dataset.motion!==i&&(s.dataset.motion=i,Ft(s,r,c))});e.children.length>n.length;)e.lastElementChild.remove()}var pt=t=>t.parentElement?`${pt(t.parentElement)} > :nth-child(${[...t.parentElement.children].indexOf(t)+1})`:\":root\";function N(t){let n=t?.previousElementSibling,e=n?.querySelector(`:scope > [${B}]`),o=n?.querySelector(`:scope > [${D}]`);if(!n||!e||!o)return;let r=typeof CSSStyleSheet==\"function\"&&\"replaceSync\"in CSSStyleSheet.prototype?new CSSStyleSheet:null;r&&(document.adoptedStyleSheets=[...document.adoptedStyleSheets,r],n[G]=()=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(s=>s!==r)});let c=s=>r?.replaceSync(s.size?`${[...s].map(pt).join(\", \")} { visibility: hidden !important; }`:\"\"),a=()=>{if(!o.isConnected||n[I])return l.disconnect();e.getClientRects().length&&mt(o,rt(e,o,{mark:!1,onCovered:c}))},l=new ResizeObserver(a);l.observe(n),document.fonts?.ready.then(a)}var ht=self,ft=Symbol.for(P),dt=ht[ft];ht[ft]=N;Array.isArray(dt)&&dt.forEach(N);N(document.currentScript);})();", Or = {
	light: {
		base: "rgb(0 0 0 / 0.07)",
		highlight: "rgb(255 255 255 / 0.6)"
	},
	dark: {
		base: "rgb(255 255 255 / 0.08)",
		highlight: "rgb(255 255 255 / 0.1)"
	}
};
({ ...Or });
function kr(e = {}, t = null) {
	let n = {}, r = t && (e[t] ?? Or[t]);
	return r && (n["--skullet-base"] = r.base, n["--skullet-highlight"] = r.highlight), e.radius && (n["--skullet-radius"] = e.radius), e.animation && (n["--skullet-animation"] = e.animation), e.speed && (n["--skullet-speed"] = e.speed), e.text?.top && (n["--skullet-text-top"] = e.text.top), e.text?.bottom && (n["--skullet-text-bottom"] = e.text.bottom), n;
}
var Ar = (e) => Object.entries(e).map(([e, t]) => `${e}: ${t};`).join(" ");
function jr({ theme: e = {}, mode: t, text: n, selector: r = ":root" }) {
	let i = {
		...e,
		text: {
			...e.text,
			...n
		}
	}, a = t ?? (e.light || e.dark ? "system" : null), o = kr(i, a === "dark" ? "dark" : a ? "light" : null), s = [];
	if (Object.keys(o).length && s.push(`${r} { ${Ar(o)} }`), a === "system") {
		let t = kr({ dark: e.dark }, "dark");
		s.push(`@media (prefers-color-scheme: dark) { ${r} { ${Ar(t)} } }`);
	}
	return s.join("\n");
}
var Mr = /* @__PURE__ */ new Map(), Nr, Q = null, Pr = 0;
function Fr() {
	try {
		return new URLSearchParams(location.search).has("skullet-debug") || localStorage.getItem("skullet:debug") === "1";
	} catch {
		return !1;
	}
}
var Ir = () => Nr ??= typeof window < "u" && Fr(), Lr = (e) => Ir() || !!e?.closest("[skullet-debug]");
function Rr(e) {
	Nr = e, e ? Ur() : Wr();
}
function zr(e, t) {
	!e || !Lr(e) || (Mr.set(e, {
		state: "loading",
		source: t
	}), Vr());
}
function Br(e, t) {
	!e || !Lr(e) || (Mr.set(e, {
		...Mr.get(e),
		state: "shown",
		moved: t
	}), Vr());
}
function Vr() {
	Ur(), cancelAnimationFrame(Pr), Kr();
}
var Hr = "\n:host { all: initial; }\n.box { position: fixed; box-sizing: border-box; border: 1px dashed; border-radius: 4px; }\n.label {\n  position: absolute; left: -1px; bottom: 100%; margin-bottom: 2px;\n  padding: 1px 6px; border-radius: 4px; white-space: nowrap;\n  font: 500 11px/16px ui-monospace, SFMono-Regular, Menlo, monospace; color: #fff;\n}\n.loading { border-color: #3b82f6; } .loading .label { background: #3b82f6; }\n.still { border-color: #22c55e; } .still .label { background: #16a34a; }\n.moved { border-color: #ef4444; border-style: solid; } .moved .label { background: #dc2626; }\n.panel {\n  position: fixed; right: 12px; bottom: 12px; display: flex; gap: 8px; align-items: center;\n  padding: 6px 10px; border-radius: 8px; background: #111; color: #fff; pointer-events: auto;\n  font: 500 12px/16px ui-sans-serif, system-ui, sans-serif; box-shadow: 0 4px 16px rgb(0 0 0 / 0.3);\n}\n.panel label { display: flex; gap: 4px; align-items: center; cursor: pointer; }\n";
function Ur() {
	if (typeof document > "u") return;
	if (!Q?.isConnected) {
		Q = document.createElement("div"), Q.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483647";
		let e = Q.attachShadow({ mode: "open" });
		e.innerHTML = `<style>${Hr}</style><div class="boxes"></div>`, document.body.append(Q);
	}
	let e = Q.shadowRoot;
	if (Nr && !e.querySelector(".panel")) {
		let t = document.createElement("div");
		t.className = "panel", t.innerHTML = "skullet debug <label><input type=\"checkbox\" class=\"xray\"> x-ray</label>", t.querySelector(".xray").addEventListener("change", (e) => {
			document.documentElement.toggleAttribute(fr, e.target.checked);
		}), e.append(t);
	}
	Pr ||= requestAnimationFrame(Kr);
}
function Wr() {
	Q?.shadowRoot?.querySelector(".panel")?.remove(), document.documentElement.removeAttribute(fr), ![...Mr.keys()].some((e) => Lr(e)) && (cancelAnimationFrame(Pr), Pr = 0, Q?.remove(), Q = null);
}
var Gr = ({ state: e, source: t, moved: n }) => {
	let r = t ? ` \xB7 ${t}` : "";
	return e === "loading" ? {
		kind: "loading",
		text: `skeleton${r}`
	} : !n || n.width === 0 && n.height === 0 ? {
		kind: "still",
		text: `\u2713 no movement${r}`
	} : {
		kind: "moved",
		text: `\u2717 moved ${n.width}\xD7${n.height}px${r}`
	};
};
function Kr() {
	if (Pr = 0, !Q?.shadowRoot) return;
	let e = Q.shadowRoot.querySelector(".boxes");
	for (let e of Mr.keys()) e.isConnected && Lr(e) || Mr.delete(e);
	let t = [...Mr];
	for (; e.children.length > t.length;) e.lastElementChild.remove();
	t.forEach(([t, n], r) => {
		let i = e.children[r];
		i || (i = e.appendChild(document.createElement("div")), i.innerHTML = "<span class=\"label\"></span>");
		let a = t.getBoundingClientRect(), { kind: o, text: s } = Gr(n);
		i.className = `box ${o}`, Object.assign(i.style, {
			left: `${a.left - 2}px`,
			top: `${a.top - 2}px`,
			width: `${a.width + 4}px`,
			height: `${a.height + 4}px`
		}), i.firstElementChild.textContent = s;
	}), (Nr || Mr.size) && (Pr = requestAnimationFrame(Kr));
}
var qr, Jr = () => qr ??= /jsdom/.test(navigator.userAgent) ? null : document.createElement("canvas").getContext("2d"), Yr = (e, t) => e ? {
	left: Math.max(e.left, t.left),
	right: Math.min(e.right, t.right),
	top: Math.max(e.top, t.top),
	bottom: Math.min(e.bottom, t.bottom)
} : t, Xr = (e) => [
	[e.left, e.top],
	[e.right, e.top],
	[e.right, e.bottom],
	[e.left, e.bottom]
], Zr = (e, t) => Math.abs(e[0] - t[0]) < 1 && Math.abs(e[1] - t[1]) < 1;
function Qr(e, t) {
	let n = Math.min(t.right - t.left, t.bottom - t.top), r = (e) => e.endsWith("%") ? parseFloat(e) / 100 * n : parseFloat(e) || 0;
	return [
		r(e.borderTopLeftRadius),
		r(e.borderTopRightRadius),
		r(e.borderBottomRightRadius),
		r(e.borderBottomLeftRadius)
	];
}
function $r(e, t, n) {
	let r = Yr(e, t), i = Qr(n, t), a = e ? Xr(e) : [], o = Xr(t), s = Xr(r).map((t, n) => Zr(t, o[n]) ? i[n] : e && Zr(t, a[n]) ? e.corners[n] : 0), { left: c, right: l, top: u, bottom: d } = r;
	return {
		left: c,
		right: l,
		top: u,
		bottom: d,
		corners: s
	};
}
function ei(e, t, n, r) {
	if (!e) return n;
	let i = Xr(e), a = Xr(t).map((t, n) => e.corners[n] > 0 && Zr(t, i[n]));
	if (!a.some(Boolean)) return n;
	let o = Qr(r, t);
	return a.map((t, n) => t ? Math.max(o[n], e.corners[n]) : o[n]).map((e) => `${e}px`).join(" ");
}
var ti = (e, t) => {
	let n = Yr(t, e);
	return n.right - n.left >= 2 && n.bottom - n.top >= 2 ? n : null;
}, ni = {
	top: "ascender",
	bottom: "descender"
}, ri = /* @__PURE__ */ new Map(), ii = (e) => [...e.getClientRects?.() ?? []];
function ai(e) {
	let t = `${e.fontStyle} ${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;
	if (ri.has(t)) return ri.get(t);
	let n = Jr(), r = null;
	if (n) {
		n.font = t;
		let e = n.measureText("H"), i = (e) => n.measureText(e).actualBoundingBoxAscent;
		r = {
			ascent: e.fontBoundingBoxAscent,
			descent: e.fontBoundingBoxDescent,
			ascender: i("bdfhkl"),
			capHeight: e.actualBoundingBoxAscent,
			xHeight: i("xz"),
			descender: n.measureText("gjpqy").actualBoundingBoxDescent
		};
	}
	return ri.set(t, r), r;
}
var oi = {
	ascender: "ascender",
	"cap-height": "capHeight",
	"x-height": "xHeight"
}, si = (e, t, n, r) => {
	let i = e.getPropertyValue(t).trim();
	return n.includes(i) ? i : r;
};
function ci(e, t, n) {
	let r = ai(t);
	if (!r) {
		let t = Math.min(n * .72, e.bottom - e.top), r = (e.top + e.bottom) / 2;
		return {
			barTop: r - t / 2,
			barBottom: r + t / 2
		};
	}
	let i = si(t, "--skullet-text-top", Object.keys(oi), ni.top), a = si(t, "--skullet-text-bottom", ["baseline", "descender"], ni.bottom), o = r.ascent + r.descent, s = e.top + (e.bottom - e.top - o) / 2 + r.ascent;
	return {
		barTop: s - r[oi[i]],
		barBottom: s + (a === "descender" ? r.descender : 0)
	};
}
var li = new Set(yr), ui = new Set(vr), di = .4, fi = /[,/]\s*0\)$/, pi = (e, t) => e !== "" && e !== t, mi = [
	"Top",
	"Right",
	"Bottom",
	"Left"
], hi = (e) => mi.every((t) => pi(e[`border${t}Style`], "none") && pi(e[`border${t}Width`], "0px")), gi = (e) => {
	let [t = 0, n = 0, r = 0, i = 0] = (e.replace(/rgba?\([^)]*\)|#\w+/g, "").match(/-?[\d.]+px/g) ?? []).map(parseFloat);
	return e.includes("inset") && !r && !i && t === 0 != (n === 0) && Math.abs(t + n) <= 2;
}, _i = (e) => pi(e, "none") && !e.split(/,(?![^(]*\))/).every(gi), vi = (e) => pi(e.backgroundColor, "transparent") && !fi.test(e.backgroundColor) || pi(e.backgroundImage, "none") || _i(e.boxShadow) || hi(e), yi = (e) => li.has(e.localName), bi = (e) => ui.has(e.localName) && !e.firstElementChild && !e.textContent?.trim(), xi = (e) => {
	let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT), n = document.createRange(), r = [], i = 0;
	for (; t.nextNode();) {
		let e = t.currentNode;
		if (e.nodeType === Node.TEXT_NODE) {
			let t = e.parentElement;
			if (!e.textContent?.trim() || !t) continue;
			i++;
			let a = t.getBoundingClientRect();
			if (a.width <= 1 || a.height <= 1) continue;
			n.selectNodeContents(e), r.push(ii(n).filter((e) => e.width || e.height));
		} else bi(e) && (i++, r.push([...e.getClientRects()]));
	}
	if (!r.some((e) => e.length)) return i;
	let a = (parseFloat(getComputedStyle(e).fontSize) || 16) * di, o = (e, t) => Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >= Math.min(e.height, t.height) / 2 && Math.max(e.left, t.left) - Math.min(e.right, t.right) <= a, s = r.map((e, t) => t), c = (e) => s[e] === e ? e : s[e] = c(s[e]);
	for (let e = 0; e < r.length; e++) for (let t = e + 1; t < r.length; t++) r[e].some((e) => r[t].some((t) => o(e, t))) && (s[c(t)] = c(e));
	return new Set(r.map((e, t) => c(t))).size;
}, Si = (e, t) => e.hasAttribute("skullet-block") || yi(e) || vi(t) && xi(e) <= 1;
function Ci(e, t) {
	if (parseFloat(t.borderRadius) || !e.parentElement) return t.borderRadius || "0px";
	let n = e.parentElement, r = getComputedStyle(n), i = e.getBoundingClientRect(), a = n.getBoundingClientRect();
	return Math.abs(i.width - a.width) < 1 && Math.abs(i.height - a.height) < 1 && r.overflow !== "visible" ? r.borderRadius : t.borderRadius || "0px";
}
function wi(e) {
	e.sort((e, t) => e.left - t.left);
	let t = [];
	for (let n of e) {
		let e = t.find((e) => {
			let t = Math.min(e.bottom, n.bottom) - Math.max(e.top, n.top), r = Math.min(e.bottom - e.top, n.bottom - n.top), i = n.left - e.right;
			return t >= r / 2 && i <= Math.max(e.fontSize, n.fontSize) * di;
		});
		e ? (e.left = Math.min(e.left, n.left), e.right = Math.max(e.right, n.right), e.top = Math.min(e.top, n.top), e.bottom = Math.max(e.bottom, n.bottom), e.fontSize = Math.max(e.fontSize, n.fontSize), e.barTop = Math.min(e.barTop, n.barTop), e.barBottom = Math.max(e.barBottom, n.barBottom)) : t.push({ ...n });
	}
	return t.map((e) => {
		let t = e.barBottom - e.barTop;
		return {
			x: e.left,
			y: e.barTop,
			width: e.right - e.left,
			height: t,
			radius: e.radius || `${Math.round(t / 3)}px`
		};
	});
}
function Ti(e, t, { mark: n = !0, onCovered: r } = {}) {
	let i = t.getBoundingClientRect(), a = t.offsetWidth ? i.width / t.offsetWidth : 1, o = t.offsetHeight ? i.height / t.offsetHeight : 1, s = (e) => ({
		left: (e.left - i.left) / a,
		right: (e.right - i.left) / a,
		top: (e.top - i.top) / o,
		bottom: (e.bottom - i.top) / o
	}), c = [], l = [], u = /* @__PURE__ */ new Set(), d = document.createRange(), f = (e, t, n) => {
		let r = ti(e, n);
		if (!r) return;
		let i = parseFloat(t.fontSize) || 16, a = s(r);
		l.push({
			...a,
			fontSize: i,
			...ci(a, t, i),
			radius: t.getPropertyValue("--skullet-radius").trim()
		});
	}, p = (e, t) => {
		let n = e.data.search(/\S/);
		if (n < 0 || !e.parentElement) return;
		d.setStart(e, n), d.setEnd(e, e.data.trimEnd().length);
		let r = getComputedStyle(e.parentElement);
		for (let e of ii(d)) f(e, r, t);
	}, m = (e, t) => {
		for (let n of e.childNodes) {
			if (n.nodeType === Node.TEXT_NODE) {
				p(n, t);
				continue;
			}
			if (n.nodeType !== Node.ELEMENT_NODE) continue;
			let e = n;
			if (e.hasAttribute("skullet-ignore") || e.hasAttribute("skullet-own")) continue;
			let r = getComputedStyle(e);
			if (r.display === "none") continue;
			if (Si(e, r)) {
				let n = ti(e.getBoundingClientRect(), t);
				if (n) {
					let i = s(n);
					c.push({
						x: i.left,
						y: i.top,
						width: i.right - i.left,
						height: i.bottom - i.top,
						radius: ei(t, n, Ci(e, r), r)
					});
				}
				yi(e) || u.add(e);
				continue;
			}
			if (bi(e)) {
				for (let n of e.getClientRects()) f(n, r, t);
				continue;
			}
			let i = r.overflowX !== "visible" || r.overflowY !== "visible";
			m(e, i ? $r(t, e.getBoundingClientRect(), r) : t);
		}
	};
	if (m(e, null), r?.(u), !n) return [...c, ...wi(l)];
	for (let t of e.querySelectorAll(`[${or}]`)) u.has(t) || t.removeAttribute(or);
	for (let e of u) e.hasAttribute(or) || e.setAttribute(or, "");
	return [...c, ...wi(l)];
}
var Ei = (e) => typeof matchMedia < "u" && matchMedia(e).matches, Di = () => typeof Element < "u" && typeof Element.prototype.animate == "function", Oi = () => !Di() || Ei("(prefers-reduced-motion: reduce)"), ki = () => Ei("(prefers-reduced-transparency: reduce)"), Ai = (e) => e.getAnimations?.() ?? [], ji = .7, Mi = 1280, Ni = 320, Pi = 2.5, Fi = .45, Ii = [
	"shimmer",
	"group-shimmer",
	"pulse",
	"none"
];
function Li(e) {
	let t = getComputedStyle(e), n = (e, n, r) => {
		let i = t.getPropertyValue(e).trim();
		return n.includes(i) ? i : r;
	}, r = n("--skullet-animation", Ii, "shimmer"), i = n("--skullet-speed", ["slow", "fast"], "slow");
	return {
		animation: r,
		duration: _r[r === "pulse" ? "pulse" : "shimmer"][i]
	};
}
var Ri = 20, zi = Math.sin(Ri * Math.PI / 180), Bi = Math.cos(Ri * Math.PI / 180), Vi = zi / Bi, Hi = Bi, Ui = `${90 + Ri}deg`, Wi = .85, $ = 12, Gi = (e) => (1 - Math.cos(Math.PI * e)) / 2;
function Ki(e) {
	let t = e * Pi, n = (t, n) => `color-mix(in srgb, ${mr} ${(n * 100).toFixed(1)}%, transparent) ${(t * e).toFixed(2)}px`, r = [];
	for (let e = 0; e <= $; e++) r.push(n(e / $ * Wi, Gi(e / $)));
	for (let e = 1; e <= $; e++) r.push(n(Wi + e / $ * (1 - Wi), Gi(1 - e / $)));
	return {
		width: t / Bi,
		image: `repeating-linear-gradient(${Ui}, ${r.join(", ")}, transparent ${t.toFixed(2)}px)`
	};
}
function qi(e, t, n = Li(e)) {
	for (let t of Ai(e)) t.cancel();
	if (e.style.backgroundImage = "", e.style.backgroundRepeat = "", Oi() || typeof e.animate != "function" || n.animation === "none") return;
	let r = {
		duration: n.duration,
		iterations: 1 / 0
	};
	if (n.animation === "pulse") {
		e.animate([
			{
				opacity: 1,
				easing: "ease-in-out"
			},
			{
				opacity: Fi,
				easing: "ease-in-out"
			},
			{ opacity: 1 }
		], r).startTime = 0;
		return;
	}
	let i = e.getBoundingClientRect(), a = i.left + scrollX, o = n.animation === "group-shimmer" ? t ?? {
		left: a,
		top: i.top,
		width: i.width,
		height: i.height
	} : {
		left: 0,
		top: 0,
		width: document.documentElement.clientWidth || innerWidth
	}, { width: s, image: c } = Ki(Math.min(Math.max(o.width * .4, 80), Ni)), l = a - o.left + (i.top - o.top) * Vi, u = n.duration * ji / (Mi + Ni);
	e.style.backgroundImage = c, e.style.backgroundSize = `${s}px 100%`, e.style.backgroundRepeat = "repeat-x", e.animate([{ backgroundPosition: `${-l}px 0` }, { backgroundPosition: `${s - l}px 0` }], {
		duration: s * u,
		iterations: 1 / 0
	}).startTime = 0;
}
function Ji(e) {
	if (Oi()) return null;
	let t = Li(e);
	return t.animation !== "shimmer" && t.animation !== "group-shimmer" ? null : t.duration * ji / (Mi + Ni);
}
var Yi = (e) => e.shadowRoot ?? e.attachShadow({ mode: "open" }), Xi = (e) => e.shadowRoot ? [...e.shadowRoot.children] : [];
function Zi(e, t) {
	let n = Yi(e), r = e.getBoundingClientRect(), i = {
		left: r.left + scrollX,
		top: r.top,
		width: r.width,
		height: r.height
	}, a = Li(e);
	for (t.forEach((e, t) => {
		let r = n.children[t];
		r || (r = document.createElement("div"), r.setAttribute("skullet-rect", ""), r.style.cssText = `position:absolute;display:block;pointer-events:none;background-color:${pr};background-repeat:no-repeat`, n.append(r)), Object.assign(r.style, {
			left: `${e.x}px`,
			top: `${e.y}px`,
			width: `${e.width}px`,
			height: `${e.height}px`,
			borderRadius: e.radius
		});
		let o = `${Math.round(i.left + e.x)}|${Math.round(e.y)}|${Math.round(e.height)}|${Math.round(i.left)}|${Math.round(i.width)}|${Math.round(i.height)}|${document.documentElement.clientWidth}|${a.animation}|${a.duration}`;
		r.dataset.motion !== o && (r.dataset.motion = o, qi(r, i, a));
	}); n.children.length > t.length;) n.lastElementChild.remove();
}
var Qi = 120, $i = 72, ea = 3, ta = 60, na = 150, ra = 400, ia = 1.5, aa = 1e3, oa = 1e3, sa = /* @__PURE__ */ new Set([
	"filter",
	"transform",
	"translate",
	"scale",
	"rotate",
	"clipPath",
	"easing",
	"composite"
]), ca = -1 / 0, la = !1;
function ua() {
	if (!(la || typeof addEventListener > "u")) {
		la = !0;
		for (let e of [
			"wheel",
			"touchmove",
			"keydown"
		]) addEventListener(e, () => ca = performance.now(), {
			passive: !0,
			capture: !0
		});
	}
}
var da = /* @__PURE__ */ new WeakMap();
function fa(e, { served: t, refetch: n }) {
	ua();
	let r = da.get(e)?.since ?? performance.now();
	da.set(e, {
		since: t ? -1 / 0 : r,
		refetch: n
	});
}
function pa(e) {
	let t = [], n = (e) => {
		for (let r of e.children) {
			let e = [...r.childNodes].some((e) => e.nodeType === Node.TEXT_NODE && e.textContent?.trim());
			!r.firstElementChild || e || r.localName === "svg" ? t.push(r) : n(r);
		}
	};
	return n(e), t;
}
function ma(e, t) {
	for (let n = e; n && n !== t; n = n.parentElement) {
		let e = n.parentElement;
		if (!e) break;
		if ([...e.children].filter((e) => e.localName === n.localName && e.className === n.className).length >= 3) return n;
	}
	return e;
}
var ha = (e, t) => {
	let n = t.left + t.width / 2, r = t.top + t.height / 2;
	return n >= e.left && n <= e.right && r >= e.top && r <= e.bottom;
};
function ga(e) {
	let { left: t, top: n, right: r, bottom: i } = e.getBoundingClientRect();
	for (let a of e.querySelectorAll(`:scope > [${ar}]`)) {
		let e = a.getBoundingClientRect();
		t = Math.min(t, e.left), n = Math.min(n, e.top), r = Math.max(r, e.right), i = Math.max(i, e.bottom);
	}
	return new DOMRect(t, n, r - t, i - n);
}
var _a = (e, t) => Math.min(Math.max(e, 0), t), va = -1 / 0;
function ya(e, t, n, r, i) {
	let a = performance.now();
	a - va > na && (va = a);
	let o = a - va, s = t.getBoundingClientRect(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = (e) => parseFloat(getComputedStyle(e).fontSize) || 16;
	for (let t of pa(e)) {
		let n = ma(t, e), r = c.get(n);
		r || (r = {
			rect: n.getBoundingClientRect(),
			size: 0
		}, c.set(n, r));
		let i = u(t);
		r.size = Math.max(r.size, i), l.set(t, {
			unit: r,
			size: i
		});
	}
	let d = (e) => {
		let t = n(e);
		return t === null ? null : _a(t, aa) + Math.max(r.delay ?? 0, 0);
	};
	return {
		kind: "sequence",
		duration: i,
		enter: r.enter,
		pieceDelay: (e) => {
			let t = l.get(e);
			return t ? d({
				rect: e.getBoundingClientRect(),
				unit: t.unit.rect,
				secondary: t.size < t.unit.size,
				reveal: s,
				late: o
			}) : null;
		},
		boneDelay: (e) => {
			let t = [...c.values()].find((t) => ha(t.rect, e));
			return d({
				rect: e,
				unit: t?.rect ?? null,
				secondary: !!t && e.height < t.size * .8,
				reveal: s,
				late: o
			});
		}
	};
}
function ba(e, t) {
	if (!e) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) sa.has(r) ? n[r] = i : r !== "opacity" && t(r);
	return n;
}
function xa(e, t, n, r = () => {}) {
	let i = da.get(t);
	da.delete(t);
	let a = n;
	for (; a.choose;) {
		let { choose: n, ...r } = a;
		a = {
			...r,
			...n({
				content: e,
				reveal: t,
				waited: i ? performance.now() - i.since : 1 / 0,
				input: performance.now() - ca < ra,
				refetch: !!i?.refetch,
				height: e.getBoundingClientRect().height,
				pieces: pa(e).length
			})
		};
	}
	let o = _a(a.duration ?? 200, oa);
	if (a = {
		...a,
		delay: Math.min(a.delay ?? 0, aa)
	}, !o) return { kind: "instant" };
	let s = ba(a.enter, r);
	if (a.wipe) {
		let e = ga(t);
		if (e.width * e.height <= innerWidth * innerHeight * ia) return {
			kind: "wipe",
			wipe: a.wipe,
			start: performance.now() + (a.delay ?? 0),
			duration: o,
			reveal: e,
			enter: s
		};
	} else if (typeof a.order == "function") return ya(e, t, a.order, {
		...a,
		enter: s
	}, o);
	return {
		kind: "together",
		delay: Math.max(a.delay ?? 0, 0),
		duration: o,
		enter: s
	};
}
var Sa = ({ rect: e, reveal: t }) => {
	let n = (e.top - t.top) / Math.max(t.height, 1), r = (e.left - t.left) / Math.max(t.width, 1);
	return _a(n * .8 + r * .2, 1) * 320;
}, Ca = (e) => e.bottom > 0 && e.top < innerHeight, wa = ({ rect: e, unit: t, secondary: n, late: r }) => {
	if (!t) return Ca(e) ? 0 : null;
	if (!Ca(t)) return null;
	let i = _a(t.top / innerHeight, 1) * 320;
	return Math.max(i - r, 0) + (n ? ta : 0);
}, Ta = { duration: 0 }, Ea = { order: "together" }, Da = { order: Sa }, Oa = (e) => e.input || e.waited < 150 ? Ta : e.refetch ? {
	order: "together",
	duration: Qi
} : null, ka = (e) => e.height < $i || e.pieces <= ea ? Ea : { order: wa }, Aa = {
	hold: 150,
	choose: (e) => Oa(e) ?? ka(e)
}, ja = new Set(yr), Ma = "script, noscript, template, base, meta, link", Na = /* @__PURE__ */ new Set([
	"iframe",
	"object",
	"embed"
]), Pa = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"sizes",
	"poster",
	"data",
	"srcdoc",
	"action",
	"formaction",
	"value",
	"alt",
	or
]), Fa = (e) => e.replace(/[A-Z]/g, "X").replace(/[a-z]/g, "x").replace(/\d/g, "0");
function Ia(e, t) {
	let n = Fa(t.data);
	t.data = n;
	let r = e.parentElement, i = Jr();
	if (!r || !i || !n.trim()) return;
	let a = getComputedStyle(r);
	i.font = `${a.fontStyle} ${a.fontWeight} ${a.fontSize} ${a.fontFamily}`;
	let o = (e) => {
		let t = e.replace(/\s+/g, " ");
		return a.textTransform === "uppercase" ? t.toUpperCase() : a.textTransform === "lowercase" ? t.toLowerCase() : t;
	}, s = (i.measureText(o(e.data)).width - i.measureText(o(n)).width) / o(n).length;
	if (Math.abs(s) < .01) return;
	let c = document.createElement("span");
	c.style.letterSpacing = `${(parseFloat(a.letterSpacing) || 0) + s}px`, t.replaceWith(c), c.append(t);
}
function La(e) {
	for (let t of e.querySelectorAll(Ma)) t.remove();
	for (let t of e.querySelectorAll("*")) if (Na.has(t.localName)) {
		let e = document.createElement("span");
		e.style.cssText = t.getAttribute("style") ?? "", e.style.display ||= "inline-block", t.replaceWith(e);
	} else {
		for (let { name: e, value: n } of [...t.attributes]) {
			let r = e.toLowerCase();
			(r.startsWith("on") || Pa.has(r) || r.endsWith("href") && /^\s*javascript:/i.test(n)) && t.removeAttribute(e);
		}
		t.localName === "img" && t.setAttribute("alt", "");
	}
	for (let t of e.querySelectorAll("video source, picture source")) t.remove();
}
function Ra(e, t) {
	let n = e.cloneNode(!0), r = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, i = document.createTreeWalker(e, r), a = document.createTreeWalker(n, r), o = [], s = [];
	for (; i.nextNode() && a.nextNode();) {
		let e = i.currentNode, n = a.currentNode;
		e.nodeType === Node.TEXT_NODE ? t && o.push([e, n]) : (ja.has(e.localName) || Na.has(e.localName)) && s.push([e, n]);
	}
	for (let [e, t] of s) {
		let n = e.getBoundingClientRect();
		t.style.boxSizing = "border-box", t.style.width = `${n.width}px`, n.width && n.height ? (t.style.maxWidth = "100%", t.style.height = "auto", t.style.aspectRatio = `${n.width} / ${n.height}`) : t.style.height = `${n.height}px`;
	}
	for (let [e, t] of o) Ia(e, t);
	return La(n), n.innerHTML;
}
function za(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, La(t.content), t.content;
}
var Ba = (e, t) => [...e.children].map((e) => {
	let n = [...e.classList].sort().join("."), r = t > 1 && e.firstElementChild ? `(${Ba(e, t - 1)})` : "";
	return `${e.localName}${n ? `.${n}` : ""}${r}`;
}).join(","), Va = (e) => {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = t * 33 ^ e.charCodeAt(n);
	return (t >>> 0).toString(36);
};
function Ha(e) {
	let t = Ba(e, 2);
	return t ? `${location.pathname}|${Va(t)}` : null;
}
var Ua = !1;
try {
	Ua = !1;
} catch {
	Ua = !1;
}
var Wa = Ua, Ga = /* @__PURE__ */ new Set();
function Ka(e, t) {
	!Wa || Ga.has(e) || (Ga.add(e), console.warn(`[skullet] ${t}`));
}
var qa = /^(https?:|\/|data:|blob:)/;
function Ja(e) {
	return typeof e == "string" ? qa.test(e) ? "" : Fa(e) : Array.isArray(e) ? e.map(Ja) : e instanceof Date ? e : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ja(t)])) : e;
}
var Ya = "skullet:shapes", Xa = 2, Za = 50, Qa = 2e4, $a = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map();
function to(e, t) {
	return eo.has(e) || eo.set(e, /* @__PURE__ */ new Set()), eo.get(e).add(t), () => eo.get(e)?.delete(t);
}
function no(e) {
	for (let t of eo.get(e) ?? []) t();
}
function ro() {
	try {
		let e = JSON.parse(localStorage.getItem(Ya) ?? "null");
		return e?.v === Xa ? e.shapes : {};
	} catch {
		return {};
	}
}
function io(e) {
	try {
		localStorage.setItem(Ya, JSON.stringify({
			v: Xa,
			shapes: e
		}));
	} catch {}
}
function ao(e, t) {
	$a.set(e, Ra(t, !1));
	let n = Ra(t, !0);
	if (n.length > Qa) return;
	let r = ro();
	delete r[e], r[e] = n;
	let i = Object.keys(r);
	for (let e of i.slice(0, i.length - Za)) delete r[e];
	io(r);
}
function oo(e) {
	return $a.get(e) ?? ro()[e] ?? null;
}
var so = [
	100,
	90,
	60
].map((e) => `<div ${cr} style="width:${e}%;height:0.75em;margin:0.5em 0;border-radius:0.25em"></div>`).join(""), co = new WeakSet(typeof document > "u" ? [] : document.querySelectorAll(`[${Qn}]`)), lo = /* @__PURE__ */ new WeakMap();
function uo(e) {
	if (!e) return;
	let t = lo.get(e);
	return lo.delete(e), t;
}
function fo(e, t) {
	for (let n of e.children) if (n.hasAttribute(t)) return n;
	let n = document.createElement("div");
	return n.setAttribute(t, ""), e.append(n), n;
}
var po = (e) => !!e.firstElementChild || !!e.textContent?.trim(), mo = class {
	constructor(e, t = {}) {
		this.root = e, this.options = t, Tr(), e[lr] = !0, e.setAttribute(Qn, ""), e.setAttribute("aria-hidden", "true"), e.inert = !0, this.ghost = fo(e, $n), this.snapshot = fo(e, er), this.layer = fo(e, tr), this.hadContent = po(this.ghost);
		let n = e.closest(`[${Xn}]`);
		n && fa(n, {
			served: co.has(e),
			refetch: !!t.refetch && this.hadContent
		}), this.choose(), this.measure(), e[ur]?.(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(this.ghost, {
			childList: !0,
			subtree: !0,
			characterData: !0,
			attributes: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0), addEventListener("resize", this.schedule), document.fonts?.ready.then(this.schedule);
	}
	root;
	options;
	ghost;
	snapshot;
	layer;
	source = null;
	hadContent = !1;
	frame = 0;
	mutations;
	resize;
	schedule = () => {
		this.root.closest(`[${ar}]`) || (cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(() => {
			let e = po(this.ghost);
			e !== this.hadContent && (this.hadContent = e, this.choose()), this.measure();
		}));
	};
	choose() {
		let e = "fallback", t = null, n = this.options.exact || co.has(this.root), r = !!this.ghost.querySelector(`[${sr}]`);
		if ((n || r) && this.hadContent) e = "ghost";
		else {
			let n = this.options.id ?? Ha(this.ghost);
			n && (no(n), t = oo(n)), t ? e = "recall" : this.hadContent && (e = "ghost");
		}
		e !== this.source && (e === "recall" && t ? this.snapshot.replaceChildren(za(t)) : e === "fallback" ? (this.snapshot.innerHTML = so, Ka(`fallback:${this.options.id}`, `Nothing to draw a skeleton from${this.options.id ? ` for "${this.options.id}"` : ""}. Pass \`sample\` data, or an \`id\` so its shape is remembered after the first load. For a lone placeholder box, use \`SkeletonBox\`.`)) : this.snapshot.replaceChildren()), this.ghost.toggleAttribute(ir, e !== "ghost"), this.snapshot.toggleAttribute(ir, e === "ghost"), this.source = e, zr(this.root.closest(`[${Xn}]`), e === "recall" ? "remembered shape" : e === "fallback" ? "fallback" : this.options.exact ? "data" : co.has(this.root) ? "server render" : "sample");
	}
	measure() {
		let e = this.source === "ghost" ? this.ghost : this.snapshot;
		Zi(this.layer, Ti(e, this.layer));
		let t = this.root.closest(`[${Xn}]`);
		t && lo.set(t, {
			width: this.root.offsetWidth,
			height: this.root.offsetHeight,
			guessed: !(this.options.exact && this.source === "ghost"),
			images: [...e.querySelectorAll("img")].map((e) => e.getBoundingClientRect().height)
		});
	}
	destroy() {
		cancelAnimationFrame(this.frame), this.mutations.disconnect(), this.resize?.disconnect(), this.root.removeEventListener("load", this.schedule, !0), removeEventListener("resize", this.schedule), Er();
	}
}, ho = 250, go = class {
	constructor(e, t = {}) {
		this.element = e, this.options = t, this.key = t.id ?? Ha(e), this.untrack = this.key ? to(this.key, () => this.save()) : () => {}, (Wa || Lr(e)) && this.check(), this.save(), this.mutations = new MutationObserver(this.schedule), this.mutations.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), this.resize = typeof ResizeObserver > "u" ? null : new ResizeObserver(this.schedule), this.resize?.observe(e), e.addEventListener("load", this.schedule, !0);
	}
	element;
	options;
	key;
	timer;
	mutations;
	resize;
	untrack;
	schedule = () => {
		clearTimeout(this.timer), this.timer = setTimeout(() => this.save(), ho);
	};
	save() {
		clearTimeout(this.timer), this.key && this.element.isConnected && this.element.offsetHeight && ao(this.key, this.element);
	}
	check() {
		let { data: e, id: t, rendered: n, sample: r } = this.options, i = t ? `<Skeleton id="${t}">` : "<Skeleton>", a = this.element.closest(`[${Xn}]`), o = uo(a);
		if (!o) return;
		o.guessed && n && !r && e != null && Ka(`sample:${this.key}`, `${i} has no \`sample\`, so a first load guesses its shape${t ? "" : " and it can't be remembered"}. Pass this to make it exact:
  sample={${JSON.stringify(Ja(e))}}`);
		let s = [...this.element.querySelectorAll("img")].filter((e) => !e.complete);
		Promise.all(s.map((e) => new Promise((t) => {
			e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
		}))).then(() => {
			if (!this.element.isConnected) return;
			let e = this.element.offsetWidth, t = this.element.offsetHeight;
			if (Br(a, {
				width: e - o.width,
				height: t - o.height
			}), Math.abs(e - o.width) <= 1 && Math.abs(t - o.height) <= 1) return;
			let r = [...this.element.querySelectorAll("img")].filter((e, t) => (o.images[t] ?? 0) < 1 && e.getBoundingClientRect().height >= 1).map((e) => e.currentSrc.split("/").pop() || "an image");
			r.length ? Ka(`unsized:${this.key}`, `${i}'s skeleton had no room for ${r.length === 1 ? "an image" : `${r.length} images`} (${r.slice(0, 3).join(", ")}${r.length > 3 ? ", …" : ""}), so the layout jumped when they loaded. Give each \`width\` and \`height\` attributes, or an \`aspect-ratio\`, so its space is known before it loads.`) : Ka(`jump:${this.key}`, o.guessed ? `${i}'s skeleton was ${o.width}\xD7${o.height}px but its content is ${e}\xD7${t}px, so the layout jumped on reveal. ${n ? "Pass `sample` data shaped like the real thing" : "Pass an `id` so its shape is remembered"}, and give images a size.` : `${i}'s skeleton was drawn from the data on screen (${o.width}\xD7${o.height}px), but the new data is ${e}\xD7${t}px, so the layout jumped on reveal. When new data adds to what's shown \u2014 another page of a list \u2014 give the addition a reveal of its own.`);
		});
	}
	destroy() {
		this.save(), clearTimeout(this.timer), this.mutations.disconnect(), this.resize?.disconnect(), this.element.removeEventListener("load", this.schedule, !0), this.untrack();
	}
}, _o = () => {}, vo = (e) => {
	if (e.loading !== "lazy") return !1;
	let t = e.getBoundingClientRect();
	return t.bottom < -innerHeight || t.top > innerHeight * 2;
}, yo = (e) => [...e.querySelectorAll("img")].filter((e) => !e.complete && !vo(e));
function bo(e) {
	let t = e.complete ? Promise.resolve() : new Promise((t) => {
		e.addEventListener("load", () => t(), { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
	});
	return Promise.race([t.then(() => e.decode?.()).then(_o, _o), new Promise((e) => setTimeout(e, gr))]);
}
var xo = 360, So = 2, Co = 600, wo = 40, To = wo / Hi, Eo = 320, Do = 120, Oo = .45, ko = (e) => e.left + e.top * Vi, Ao = (e) => e.width + e.height * Vi, jo = (e, t) => ko(t) - To + (Ao(t) + 2 * To) * e, Mo = {
	start: -1 / 0,
	origin: 0,
	speed: 1
};
function No(e) {
	let t = e.querySelector(`:scope > [${ar}] [${tr}]`), n = t && Ji(t);
	if (!n) return null;
	let r = ga(e);
	if (r.width * r.height > innerWidth * innerHeight * ia) return null;
	let i = ko(r), a = i + Ao(r), o = performance.now(), s = o - Mo.start;
	s <= na && (i - Mo.origin) / Mo.speed >= s && (a - Mo.origin) / Mo.speed - s <= Co || (Mo = {
		start: o,
		origin: i,
		speed: Math.max(So / n, (a - i) / xo)
	});
	let { start: c, origin: l, speed: u } = Mo;
	return {
		delay: (i - To - l) / u - (o - c),
		duration: (a - i + 2 * To) / u
	};
}
var Po = (e) => (t, { rect: n, reveal: r }) => {
	let i = (jo(t, r) - ko(n)) * Hi;
	return `linear-gradient(${Ui}, ${Array.from({ length: $ + 1 }, (t, n) => {
		let r = e ? 1 - Gi(n / $) : Gi(n / $), a = -wo + 2 * wo * n / $;
		return `rgb(0 0 0 / ${r.toFixed(3)}) ${(i + a).toFixed(2)}px`;
	}).join(", ")})`;
}, Fo = "http://www.w3.org/2000/svg", Io = null, Lo = 0;
function Ro() {
	return Io?.isConnected || (Io = document.createElementNS(Fo, "svg"), Io.setAttribute("aria-hidden", "true"), Io.style.cssText = "position:absolute;width:0;height:0;overflow:hidden", document.body.append(Io)), Io;
}
var zo = (e, t) => {
	let n = document.createElementNS(Fo, e);
	for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
	return n;
}, Bo = {
	mask: Po(!0),
	out: Po(!1),
	effect: (e, { rect: t, reveal: n, progress: r }) => {
		if (ki()) return;
		let i = ko(t), a = Ao(t), o = Eo / 2 / Hi, s = () => jo(r(), n) - i - Do / Hi;
		if (s() - o > a) return;
		let c = 2 * o + t.height * Vi, l = c / 2, u = t.height / 2, d = Eo / 2 * Hi, f = Eo / 2 * Vi * Hi, p = document.createElement("canvas");
		p.width = Math.ceil(c), p.height = Math.ceil(t.height);
		let m = p.getContext("2d");
		if (!m) return;
		let h = m.createLinearGradient(l - d, u - f, l + d, u + f);
		for (let e = 0; e <= $; e++) {
			let t = e / $;
			h.addColorStop(t, `rgb(255 255 255 / ${Gi(1 - Math.abs(t * 2 - 1)).toFixed(3)})`);
		}
		m.fillStyle = h, m.fillRect(0, 0, p.width, p.height);
		let g = `skullet-gloss-${++Lo}`, _ = zo("filter", {
			id: g,
			"color-interpolation-filters": "sRGB",
			primitiveUnits: "objectBoundingBox"
		}), v = zo("feComponentTransfer", {
			in: "SourceGraphic",
			result: "lit"
		});
		for (let e of [
			"R",
			"G",
			"B"
		]) v.append(zo(`feFunc${e}`, {
			type: "linear",
			slope: 1 - Oo,
			intercept: Oo
		}));
		let y = zo("feImage", {
			href: p.toDataURL(),
			y: 0,
			width: c / t.width,
			height: 1,
			preserveAspectRatio: "none",
			result: "band"
		});
		_.append(v, y, zo("feComposite", {
			in: "lit",
			in2: "band",
			operator: "in",
			result: "shine"
		}), zo("feComposite", {
			in: "shine",
			in2: "SourceGraphic",
			operator: "over"
		})), Ro().append(_), e.style.filter = `url(#${g})`;
		let b = () => {
			let n = s();
			n - o > a || !e.isConnected ? (e.style.filter.includes(g) && (e.style.filter = ""), _.remove()) : (y.setAttribute("x", ((n - l - u * Vi) / t.width).toFixed(4)), requestAnimationFrame(b));
		};
		b();
	}
}, Vo = {
	together: Ea,
	sequence: Da,
	smart: Aa,
	sweep: {
		hold: 150,
		choose: (e) => {
			let t = Oa(e);
			if (t) return t;
			let n = No(e.reveal);
			return n ? {
				wipe: Bo,
				...n
			} : ka(e);
		}
	}
}, Ho = (e = "smart") => typeof e == "string" ? Vo[e] : e, Uo = () => {}, Wo = (e) => e.finished.then(Uo, Uo), Go = /* @__PURE__ */ new WeakMap();
function Ko(e, t = 0, n = 200, r = 0, i) {
	return Oi() ? Promise.resolve() : Wo(e.animate([{
		...i,
		opacity: r
	}, { opacity: 1 }], {
		duration: n,
		delay: t,
		easing: "ease",
		fill: "backwards"
	}));
}
var qo = (e) => !!e.querySelector(`[${tr}], [${$n}], :scope > [${sr}]`), Jo = (e, t) => Math.abs(e.left - t.left) < 2 && Math.abs(e.top - t.top) < 2 && Math.abs(e.width - t.width) < 2 && Math.abs(e.height - t.height) < 2, Yo = /* @__PURE__ */ new WeakMap();
function Xo(e) {
	for (let t of Yo.get(e) ?? []) t.remove();
	Yo.delete(e);
}
function Zo(e, t) {
	let n = yo(e), r = [...t.children].some((t) => t !== e && t.hasAttribute("skullet-pane") && qo(t));
	if (n.length && r) {
		for (let e of n) e.style.opacity = "0";
		queueMicrotask(() => {
			if (!e.isConnected) return;
			let r = t.getBoundingClientRect(), i = [...t.querySelectorAll(`:scope > [${ar}] [${tr}]`)].flatMap(Xi), a = Yo.get(t) ?? /* @__PURE__ */ new Set();
			Yo.set(t, a);
			for (let e of n) {
				let n = e.getBoundingClientRect(), o = i.find((e) => Jo(e.getBoundingClientRect(), n)), s = o?.getBoundingClientRect() ?? n, c = document.createElement("div");
				c.setAttribute(nr, ""), Object.assign(c.style, {
					position: "absolute",
					left: `${s.left - r.left - t.clientLeft}px`,
					top: `${s.top - r.top - t.clientTop}px`,
					width: `${s.width}px`,
					height: `${s.height}px`,
					borderRadius: o?.style.borderRadius || getComputedStyle(e).borderRadius,
					backgroundColor: pr,
					backgroundRepeat: "no-repeat",
					pointerEvents: "none"
				}), t.append(c), a.add(c), o && (o.style.visibility = "hidden"), qi(c), bo(e).then(() => {
					if (a.has(c)) {
						if (a.delete(c), e.style.opacity = "", Ko(e), Oi()) return c.remove();
						Wo(c.animate([{ opacity: 1 }, { opacity: 0 }], {
							duration: 200,
							easing: "ease",
							fill: "forwards"
						})).then(() => c.remove());
					}
				});
			}
		});
	}
}
function Qo(e, t) {
	return Oi() ? Promise.resolve() : Promise.all(pa(e).map((e) => {
		let n = t.pieceDelay(e);
		if (n !== null) return Ko(e, n, t.duration, 0, t.enter);
	})).then(Uo);
}
function $o(e) {
	for (let t of e.querySelectorAll(`:scope > [${ar}]`)) {
		for (let e of Ai(t)) e.finish();
		t.style.opacity = "0";
	}
}
function es(e) {
	let t = 0;
	for (let n of e.querySelectorAll(`:scope > [${ar}]`)) if (!qo(n)) {
		t = Math.max(t, parseFloat(getComputedStyle(n).opacity) || 0);
		for (let e of Ai(n)) e.finish();
		n.style.opacity = "0";
	}
	return t;
}
function ts(e, t = "smart", { initial: n = !1 } = {}) {
	let r = ns.get(e);
	return r || (r = rs(e, t, n), ns.set(e, r)), r;
}
var ns = /* @__PURE__ */ new WeakMap();
function rs(e, t, n) {
	let r = e.parentElement, i = Ho(t);
	if (qo(e)) {
		r && Xo(r);
		let t = Math.max(i.hold ?? 0, 0);
		return t ? (r && Go.set(r, {
			kind: "skeleton",
			hold: t
		}), n ? Promise.resolve() : Ko(e, t)) : (r && Go.delete(r), n ? Promise.resolve() : Ko(e));
	}
	if (n || !r) return Promise.resolve();
	let a = es(r);
	if (a > .01) {
		let t = 200 * (1 - a);
		return Go.set(r, {
			kind: "together",
			delay: 0,
			duration: t
		}), Ko(e, 0, t, a);
	}
	Zo(e, r);
	let o = xa(e, r, i, (e) => Ka(`enter:${e}`, `\`enter\` can't set \`${e}\`: only properties that change nothing's layout animate, so the reveal never moves the page.`));
	return Go.set(r, o), o.kind === "instant" ? ($o(r), Promise.resolve()) : o.kind === "sequence" ? Qo(e, o) : o.kind === "wipe" ? gs(e, o, !0) : Ko(e, o.delay, o.duration, 0, o.enter);
}
function is(e) {
	let t = e.getBoundingClientRect(), n = e.offsetParent ?? document.documentElement, r = n.getBoundingClientRect();
	return {
		top: t.top - r.top - n.clientTop,
		left: t.left - r.left - n.clientLeft,
		width: t.width,
		height: t.height
	};
}
function as(e, t = is(e)) {
	return Object.assign(e.style, {
		position: "absolute",
		top: `${t.top}px`,
		left: `${t.left}px`,
		width: `${t.width}px`,
		height: `${t.height}px`,
		margin: "0",
		boxSizing: "border-box",
		pointerEvents: "none"
	}), e.inert = !0, e.setAttribute(ar, ""), t;
}
var os = /* @__PURE__ */ new WeakMap();
function ss(e, t) {
	let n = e.querySelector(`:scope > [${Zn}]:not([${ar}])`);
	if (!n) return;
	let r = os.get(e), i = e.getBoundingClientRect().height;
	r?.animation.cancel();
	let a = e.getBoundingClientRect().height, o = r ? i : a - n.getBoundingClientRect().height + t.height;
	if (Math.abs(o - a) < .5) {
		r && cs(e, r);
		return;
	}
	let { overflow: s, boxSizing: c } = r ?? e.style;
	Object.assign(e.style, {
		overflow: "clip",
		boxSizing: "border-box"
	});
	let l = e.animate([{ height: `${o}px` }, { height: `${a}px` }], {
		duration: hr,
		easing: "cubic-bezier(0.2, 0, 0, 1)"
	}), u = {
		animation: l,
		overflow: s,
		boxSizing: c
	};
	os.set(e, u), Wo(l).then(() => {
		os.get(e) === u && cs(e, u);
	});
}
function cs(e, { overflow: t, boxSizing: n }) {
	os.delete(e), Object.assign(e.style, {
		overflow: t,
		boxSizing: n
	});
}
function ls(e, t) {
	let n = parseFloat(getComputedStyle(e).opacity), r = Number.isNaN(n) ? 1 : n;
	for (let t of Ai(e)) t.cancel();
	hs(e), e.style.filter = "";
	let i = e.parentElement;
	i && !qo(e) && Xo(i);
	let a = as(e, t), o = (t, n) => Di() ? Wo(e.animate([{ opacity: r }, { opacity: 0 }], {
		duration: n * r,
		delay: t,
		easing: "ease",
		fill: "forwards"
	})) : (e.style.opacity = "0", Promise.resolve());
	return Promise.resolve().then(() => {
		let t = i && Go.get(i), n = Oi() || t?.kind === "instant";
		if (i && !n && ss(i, a), t?.kind === "skeleton") return o(t.hold, 200);
		if (n) e.style.opacity = "0";
		else return t?.kind === "sequence" && qo(e) ? us(e, t) : t?.kind === "wipe" && qo(e) ? gs(e, t, !1) : t?.kind === "together" ? o(t.delay, t.duration) : o(0, 200);
	});
}
function us(e, t) {
	for (let t of e.querySelectorAll(`[${$n}], [${er}]`)) t.style.visibility = "hidden";
	let n = [...e.querySelectorAll(`[${$n}] [${sr}]`)].filter((e) => !e.parentElement?.closest(`[${sr}]`));
	for (let e of n) e.style.visibility = "visible";
	let r = [...[...e.querySelectorAll(`[${tr}]`)].flatMap(Xi), ...n];
	return Promise.all(r.map((e) => {
		let n = e.getBoundingClientRect(), r = (n) => Wo(e.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: t.duration,
			delay: n,
			easing: "ease",
			fill: "forwards"
		})), i = t.boneDelay(n);
		if (i === null) e.style.opacity = "0";
		else return r(i);
	})).then(Uo);
}
var ds = 100, fs = /* @__PURE__ */ new WeakMap();
function ps(e, t) {
	e.style.setProperty("mask-image", t), e.style.setProperty("-webkit-mask-image", t);
}
function ms(e, t) {
	ps(e, `linear-gradient(#000 0 0), ${t}`), e.style.setProperty("-webkit-mask-composite", "xor"), e.style.setProperty("mask-composite", "exclude");
}
function hs(e) {
	fs.get(e)?.();
	for (let t of [
		"mask-image",
		"-webkit-mask-image",
		"mask-composite",
		"-webkit-mask-composite"
	]) e.style.removeProperty(t);
}
function gs(e, t, n) {
	let r = {
		rect: e.getBoundingClientRect(),
		reveal: t.reveal
	}, { mask: i, out: a } = t.wipe, o = (t) => {
		n ? ps(e, i(t, r)) : a ? ps(e, a(t, r)) : ms(e, i(t, r));
	}, s = () => (performance.now() - t.start) / t.duration;
	return s() >= 1 ? (n || (e.style.opacity = "0"), Promise.resolve()) : (n && (t.wipe.effect?.(e, {
		...r,
		progress: s
	}), t.enter && e.animate([t.enter, {}], {
		duration: t.duration,
		delay: Math.max(t.start - performance.now(), 0),
		easing: "ease",
		fill: "backwards"
	})), new Promise((n) => {
		let r = 0, i = performance.now(), a = 0, c = () => {
			let e = performance.now();
			if (e - i > ds && (t.stalled = !0), i = e, t.stalled) return l(a);
			a = Math.min(Math.max(s(), 0), 1), o(a), a < 1 ? r = requestAnimationFrame(c) : l(null);
		}, l = (t = null) => {
			cancelAnimationFrame(r), clearTimeout(u), fs.delete(e), n(t);
		}, u = setTimeout(() => l(null), Math.max(t.start + t.duration - performance.now(), 0) + ds);
		fs.set(e, l), c();
	}).then((t) => {
		if (hs(e), t === null) {
			n || (e.style.opacity = "0");
			return;
		}
		let r = 200 * (1 - t);
		return n ? Ko(e, 0, r, t) : Wo(e.animate([{ opacity: 1 - t }, { opacity: 0 }], {
			duration: r,
			easing: "ease",
			fill: "forwards"
		})).then(() => {
			e.style.opacity = "0";
		});
	}));
}
// node_modules/skullet/dist/react/index.mjs
var _s = X.createContext({}), vs = X.createContext(null), ys = () => X.useContext(_s), bs = () => X.useContext(vs), xs = () => ys().reveal;
function Ss({ children: e, ...t }) {
	let { debug: n, theme: r, mode: i, text: a, nonce: o } = t, s = jr({
		theme: r,
		mode: i,
		text: a
	}), [c] = X.useState(() => ({ sent: !1 }));
	return X.useEffect(() => {
		n !== void 0 && Rr(n);
	}, [n]), (0, Z.jsx)(_s.Provider, {
		value: t,
		children: (0, Z.jsxs)(vs.Provider, {
			value: c,
			children: [s && (0, Z.jsx)("style", {
				nonce: o,
				children: s
			}), e]
		})
	});
}
var Cs = typeof window > "u" ? X.useEffect : X.useLayoutEffect, ws = () => X.useInsertionEffect(() => (Tr(), Er), []), Ts = Number("19.3.1".split(".")[0]) >= 19, Es = () => {
	let { nonce: e } = ys();
	return Ts ? (0, Z.jsx)("style", {
		href: "skullet",
		precedence: "medium",
		nonce: e,
		children: xr
	}) : null;
}, Ds = Ts ? { inert: !0 } : { inert: "" }, Os = (e) => X.Children.map(e, (e) => {
	if (!X.isValidElement(e)) return e;
	let t = e.type.Skeleton;
	return t ? (0, Z.jsx)("span", {
		[sr]: "",
		children: (0, Z.jsx)(t, { ...e.props })
	}) : e.props.children && typeof e.props.children != "function" ? X.cloneElement(e, void 0, Os(e.props.children)) : e;
}), ks = () => () => {}, As = () => X.useSyncExternalStore(ks, () => !1, () => !0), js = ({ children: e, id: t, exact: n, refetch: r, label: i }) => {
	let a = X.useRef(null), { nonce: o } = ys(), s = bs(), c = As(), l = Dr;
	return c && s && (s.sent && (l = "(s=>{let k=Symbol.for(\"skullet.boot\"),b=self[k];typeof b==\"function\"?b(s):(self[k]=b||[]).push(s)})(document.currentScript)"), s.sent = !0), Cs(() => {
		if (!a.current) return;
		let e = new mo(a.current, {
			id: t,
			exact: n,
			refetch: r
		});
		return () => e.destroy();
	}, [
		t,
		n,
		r
	]), (0, Z.jsxs)(Z.Fragment, { children: [
		i && (0, Z.jsx)("span", {
			"skullet-status": "",
			children: i
		}),
		(0, Z.jsxs)("div", {
			ref: a,
			[Qn]: "",
			"aria-hidden": !0,
			...Ds,
			children: [
				(0, Z.jsx)("div", {
					[$n]: "",
					children: Os(e)
				}),
				(0, Z.jsx)("div", { [er]: "" }),
				(0, Z.jsx)("div", { [tr]: "" })
			]
		}),
		c && (0, Z.jsx)("script", {
			nonce: o,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: l }
		})
	] });
}, Ms = ({ children: e, id: t, registry: n, enter: r, exiting: i, onExited: a, memory: o, onEntered: s }) => {
	let c = X.useRef(null), l = xs();
	return Cs(() => {
		if (!c.current) return;
		let e = {
			element: c.current,
			memory: null
		};
		return n.set(t, e), ts(c.current, l, { initial: !r }).then(s), o && (e.memory = new go(c.current, o)), () => {
			e.memory?.destroy(), n.delete(t);
		};
	}, []), Cs(() => {
		!i || !c.current || ls(c.current, n.get(t)?.box).then(a);
	}, [i]), (0, Z.jsx)("div", {
		ref: c,
		[Zn]: "",
		children: e
	});
}, Ns = class extends X.Component {
	getSnapshotBeforeUpdate(e) {
		for (let t of this.props.exiting) {
			if (e.exiting.includes(t)) continue;
			let n = this.props.registry.get(t);
			n && (n.memory?.save(), n.box = is(n.element));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Ps(e) {
	let { id: t, label: n, skeleton: r, empty: i, emptyMessage: a, error: o, className: s, style: c } = e;
	ws();
	let l = typeof e.children == "function" ? e.children : null, u = l ? e.data : void 0, d = l ? e.sample : void 0, f = l ? null : e.children, p = X.useRef(null);
	Cs(() => {
		u != null && (p.current = {
			id: t,
			data: u
		});
	});
	let m = (e) => l ? e == null ? null : l(e) : f, h = !!e.loading || !!l && u == null && !o && !i, g, _, v;
	if (h) {
		let e = p.current, i = u ?? (e && e.id === t ? e.data : null);
		g = "skeleton", _ = r ? (0, Z.jsx)("div", {
			[sr]: "",
			"aria-hidden": !0,
			children: r
		}) : (0, Z.jsx)(js, {
			id: t,
			exact: i != null,
			refetch: u != null,
			label: n,
			children: m(i ?? d)
		});
	} else o ? (g = "error", _ = o) : i ? (g = "empty", _ = a ?? m(u)) : (g = "content", _ = m(u), v = {
		id: t,
		data: u,
		rendered: !!l,
		sample: d !== void 0
	});
	let [y, b] = X.useState({
		id: 0,
		key: g
	}), [x, S] = X.useState([]), C = X.useRef(/* @__PURE__ */ new Map()).current, w = X.useRef(_);
	if (Cs(() => {
		w.current = _;
	}), y.key !== g) {
		let e = {
			id: y.id,
			node: w.current
		};
		S((t) => t.some((t) => t.id === e.id) ? t : [...t, e]), b({
			id: y.id + 1,
			key: g,
			from: y.key
		});
	}
	let ee = X.useRef(e.onReveal);
	Cs(() => {
		ee.current = e.onReveal;
	});
	let T = y.key === "content" && y.from === "skeleton" ? () => ee.current?.() : void 0, te = (e) => S((t) => t.filter((t) => t.id !== e)), E = [...x.map((e) => (0, Z.jsx)(Ms, {
		id: e.id,
		registry: C,
		enter: !1,
		exiting: !0,
		onExited: () => te(e.id),
		children: e.node
	}, e.id)), (0, Z.jsx)(Ms, {
		id: y.id,
		registry: C,
		enter: y.id > 0,
		exiting: !1,
		onExited: () => {},
		memory: v,
		onEntered: T,
		children: _
	}, y.id)];
	return (0, Z.jsxs)("div", {
		[Xn]: "",
		"aria-busy": g === "skeleton" || void 0,
		className: s,
		style: c,
		children: [(0, Z.jsx)(Es, {}), (0, Z.jsx)(Ns, {
			exiting: x.map((e) => e.id),
			registry: C,
			children: E
		})]
	});
}
// src/react/follow-manage/measured-reading.tsx
var Fs = {
	creators: [Y("follow:followOverview.creators"), Y("follow:followOverview.creatorUnit")],
	enabled: [Y("follow:followOverview.enabledSources"), ""],
	failed: [Y("follow:followCheck.checkFailed"), Y("follow:followOverview.sourceUnit")],
	updates: [Y("follow:followOverview.unwatchedUpdates"), Y("follow:followOverview.itemUnit")],
	subscriptions: [Y("follow:feedSources.footerLabel"), Y("follow:followOverview.actressUnit")],
	releases: [Y("follow:followOverview.unwatchedReleases"), Y("follow:followOverview.itemUnit")]
}, Is = {
	duration: 0,
	delay: 0,
	hold: 150
}, Ls;
function Rs() {
	return Ls || (Ls = new CSSStyleSheet(), Ls.replaceSync("\n      @keyframes peach-skeleton-sweep { to { transform: translateX(-50%); } }\n      [skullet-rect] { overflow: hidden; }\n      [skullet-rect]::after {\n        content: ''; position: absolute; inset: 0; right: -200%; border-radius: inherit;\n        background: linear-gradient(to right, var(--skullet-base), var(--skullet-highlight) 50%, var(--skullet-base));\n        background-size: 50% 100%; animation: peach-skeleton-sweep 1.5s ease-in-out infinite reverse;\n      }\n      @media (prefers-reduced-motion: reduce) { [skullet-rect]::after { animation: none; } }\n    ")), Ls;
}
function zs({ figure: e, unit: t }) {
	return /* @__PURE__ */ (0, Z.jsxs)("b", {
		"data-follow-reading": "",
		className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${e >= 1e6 ? "text-headline-medium" : e >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
		children: [/* @__PURE__ */ (0, Z.jsx)("span", { children: e.toLocaleString() }), /* @__PURE__ */ (0, Z.jsx)("small", {
			className: "whitespace-nowrap text-body-2-regular text-text-secondary",
			children: ` ${t}`
		})]
	});
}
function Bs({ field: e, figure: t, total: n, failed: r = !1 }) {
	let [i, a] = Fs[e], o = (0, X.useRef)(null);
	return (0, X.useLayoutEffect)(() => {
		let e = [...o.current.querySelectorAll("[skullet-layer]")].map((e) => e.shadowRoot).filter((e) => !!e);
		if (!e.length) return;
		let t = Rs();
		for (let n of e) n.adoptedStyleSheets = [...n.adoptedStyleSheets, t];
		return () => {
			for (let n of e) n.adoptedStyleSheets = n.adoptedStyleSheets.filter((e) => e !== t);
		};
	}, [t, r]), /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: o,
		"data-measured-reading": e,
		className: Ce({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Z.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: i
		}), t === void 0 && r ? /* @__PURE__ */ (0, Z.jsx)("b", {
			"data-follow-reading": "",
			className: "text-title-1-medium text-text-primary",
			children: Y("follow:shared.notFound")
		}) : /* @__PURE__ */ (0, Z.jsx)(Ss, {
			reveal: Is,
			children: /* @__PURE__ */ (0, Z.jsx)(Ps, {
				id: `peach:follow-reading:v1:${e}`,
				data: t,
				sample: 12345,
				label: Y("follow:followOverview.loading", { term: i }),
				children: (t) => /* @__PURE__ */ (0, Z.jsx)(zs, {
					figure: t,
					unit: e === "enabled" ? `/ ${n ?? 0}` : a
				})
			})
		})]
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var Vs = (e) => D.some(([t]) => t === e);
function Hs(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, X.useState)(Vs(e.tab) ? e.tab : "list"), [d, f] = (0, X.useState)(Math.max(1, Math.floor(e.page) || 1)), [p, m] = (0, X.useState)(() => xt(e.sort, e.dir).sort), [h, g] = (0, X.useState)(() => xt(e.sort, e.dir).dir), [_, v] = (0, X.useState)(et(e.layout) ? e.layout : "default"), [y, b] = (0, X.useState)(ct(e.pageSize)), [x, S] = (0, X.useState)(/* @__PURE__ */ new Set()), [C, T] = (0, X.useState)(/* @__PURE__ */ new Set()), O = Rt({
		queryKey: E,
		queryFn: ({ signal: e }) => Ge(e)
	}), k = Rt({
		queryKey: te,
		queryFn: ({ signal: e }) => Ue(e)
	}), A = Rt({
		queryKey: ee,
		queryFn: ({ signal: e }) => We(e)
	}), j = O.data || { sources: [] }, M = k.data || {
		root: "",
		providers: []
	}, N = j.sources;
	(0, X.useEffect)(() => {
		S((e) => {
			let t = nt(e, N);
			return t.size === e.size ? e : t;
		});
	}, [N]);
	let P = (e) => {
		let n = e.sort ?? p, r = e.dir ?? h;
		t({
			tab: e.tab ?? c,
			page: e.page ?? d,
			sort: n === "checked" ? "" : n,
			dir: r === B[n] ? "" : r
		});
	}, F = Qe(N), I = N.filter($e).length, L = N.filter((e) => e.enabled).length, R = (M.providers || []).filter((e) => e.requirement === "required" && !Fe(e)).length, ne = new Set((A.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Z.jsxs)(Vt, { children: [
		a ? /* @__PURE__ */ (0, Z.jsx)(z, {
			tone: "warning",
			title: Y("follow:followManagePage.readOnly"),
			extra: s ? /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Z.jsx)(w, {
					href: s,
					children: Y("follow:followManagePage.goToPrimary")
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: ie,
			"aria-label": Y("follow:followManagePage.overview"),
			children: [
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "creators",
					figure: O.data ? F.length : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "enabled",
					figure: O.data ? L : void 0,
					total: N.length,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "failed",
					figure: O.data ? I : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "updates",
					figure: O.data ? j.counts?.new || 0 : void 0,
					failed: O.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "subscriptions",
					figure: A.data ? ne : void 0,
					failed: A.isError
				}),
				/* @__PURE__ */ (0, Z.jsx)(Bs, {
					field: "releases",
					figure: A.data ? A.data.unread || 0 : void 0,
					failed: A.isError
				})
			]
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Z.jsx)("div", {
					"data-section-nav": !0,
					children: /* @__PURE__ */ (0, Z.jsx)(ce, {
						group: "follow",
						label: Y("follow:followManagePage.sectionTabs"),
						value: c,
						panelPrefix: "follow",
						sectionItems: !0,
						tabs: D.map(([e, t]) => ({
							value: e,
							label: t
						})),
						className: "",
						itemClassName: "cursor-pointer whitespace-nowrap",
						onChange: (e) => {
							S(/* @__PURE__ */ new Set()), T(/* @__PURE__ */ new Set()), l(e), P({ tab: e });
						}
					})
				}),
				c === "list" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-list",
					"aria-labelledby": "follow-tab-list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Z.jsx)(Bn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), P({ tab: "add" });
						},
						selection: {
							ids: C,
							onChange: T,
							onActivate: () => S(/* @__PURE__ */ new Set())
						}
					}), O.data ? /* @__PURE__ */ (0, Z.jsx)(Yn, {
						data: j,
						sort: p,
						dir: h,
						page: d,
						layout: _,
						pageSize: y,
						selected: x,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), P({ tab: "add" });
						},
						onSort: (e, t) => {
							m(e), g(t), f(1), P({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							f(e), P({ page: e });
						},
						onSelected: (e) => {
							S(e), T(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							v(e), f(1), n({ layout: e }), P({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), f(1), n({ pageSize: e }), P({ page: 1 });
						}
					}) : O.isError ? /* @__PURE__ */ (0, Z.jsx)(z, {
						tone: "error",
						children: Y("follow:followManagePage.listFailed")
					}) : /* @__PURE__ */ (0, Z.jsx)("div", {
						role: "status",
						"aria-label": Y("follow:followManagePage.listLoading"),
						"data-skeleton": "",
						className: "skeleton-sheen h-32 rounded-lg"
					})]
				}) : null,
				c === "add" ? /* @__PURE__ */ (0, Z.jsxs)("div", {
					role: "tabpanel",
					id: "follow-panel-add",
					"aria-labelledby": "follow-tab-add",
					className: "flex flex-col gap-8",
					children: [
						k.data && O.data ? /* @__PURE__ */ (0, Z.jsx)(ln, {
							data: j,
							credentials: M,
							readOnly: a,
							toast: r
						}) : k.isError || O.isError ? /* @__PURE__ */ (0, Z.jsx)(z, {
							tone: "error",
							children: Y("follow:followManagePage.credentialsFailed")
						}) : /* @__PURE__ */ (0, Z.jsx)("div", {
							role: "status",
							"aria-label": Y("follow:followManagePage.credentialsLoading"),
							"data-skeleton": "",
							className: "skeleton-sheen h-32 rounded-lg"
						}),
						/* @__PURE__ */ (0, Z.jsx)(mn, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								A.refetch(), l("list"), P({ tab: "list" });
							}
						}),
						O.data ? /* @__PURE__ */ (0, Z.jsx)(Dn, {
							groups: j.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: j.alias_suggestions || [],
							sources: j.sources
						}) : null
					]
				}) : null,
				c === "tags" ? /* @__PURE__ */ (0, Z.jsx)("div", {
					role: "tabpanel",
					id: "follow-panel-tags",
					"aria-labelledby": "follow-tab-tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Z.jsx)(W, { scope: "online" })
				}) : null
			]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsx)(u, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: R ? Y("follow:followManagePage.feedSettingsPending", { count: R }) : Y("follow:followManagePage.feedSettings")
		}) })
	] });
}
export { Hs as FollowManagePage };

//# debugId=ab84d920-993f-4f1e-bd3d-b239190b44b7