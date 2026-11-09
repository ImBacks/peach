(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "de32eb8a-c390-4c10-90fe-bc4b2ce2d036", e._sentryDebugIdIdentifier = "sentry-dbid-de32eb8a-c390-4c10-90fe-bc4b2ce2d036");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as a, $fe21c36db05242bb$export$d7b12c4107be0d61 as o, ArtSlot as s, Button as c, ButtonLink as l, Bx as u, COVER_STATE_TITLE as d, CatalogViewToggle as f, Checkbox as p, ChevronSortDown as m, Chip as h, CloudDownloadDialog as g, CoverQueue as _, DISCOVERY_METADATA_KEY as v, DISCOVERY_REFRESH_MS as y, DISCOVERY_SORTS as b, DOWNLOADS_KEY as x, DOWNLOADS_URL as S, DataTableFooter as C, DataTableFrame as w, E3 as T, EmptyFocusButton as E, EmptyState as ee, FilterGlassRows as te, FilterIconButton as ne, FilterPill as re, GlassPill as ie, Help as D, IndexSearch as O, Input as ae, JAV_LAYOUTS as oe, JAV_RECOMMENDATION_GRID as se, JAV_SELECTION_EVENT as k, JavHeader as A, LibraryShortcuts as j, M6 as M, ModalFrame as N, Note as P, P7 as F, PHASES as I, RELEASE_COLUMN_VISIBILITY_KEY as L, RELEASE_COLUMN_WIDTHS_KEY as R, RELEASE_PAGE_SIZES as ce, RELEASE_SORTS as le, RELEASE_SORT_COLUMNS as z, SEGMENT as B, SEGMENTED_TRACK as V, SegmentedRadioGroup as H, Segments as ue, SelectionDock as U, Shuffle as de, SortKeys as fe, SourceAvatar as pe, Table as me, TableColumnControls as he, TableColumnResizer as ge, TaskProgress as _e, WANTS_KEY as W, WantMagnets as ve, Wt as ye, __toESM as be, addWant as xe, apiGet as Se, appSettingsStore as Ce, avatarInner as we, busyProps as G, cachedMagnetStates as Te, cardClass as Ee, cardRatio as De, catalogListSkeletonCellHtml as Oe, composingKey as ke, controlDiscoveryMetadata as Ae, controlReleaseMetadata as je, coverArrived as Me, coverFetching as Ne, coverFetchingHtml as Pe, coverStateAction as Fe, coverUrl as Ie, discoveryArtwork as Le, discoveryKey as Re, discoveryScore as ze, entityDisplayName as Be, entityFaceImg as Ve, entityPath as He, errorMessage as K, esc as Ue, facePos as We, fetchCoverNow as Ge, fetchDiscoveries as Ke, fetchDiscoveryMetadata as qe, fetchReleases as Je, fetchWants as Ye, firstGrapheme as Xe, fmtDur as Ze, gridLayout as Qe, invalidateWants as q, javContentSkeleton as $e, javLayout as et, javTagSkeleton as tt, joinList as nt, keepPreviousData as rt, leadingGraphemes as it, logoUrl as at, pageWindow as ot, qE as st, queryClient as ct, recommendationScore as lt, relayoutCovers as ut, releaseColumns as dt, releaseFilters as ft, releaseKey as pt, removeWants as mt, require_jsx_runtime as ht, require_react as gt, resetWants as _t, searchNote as vt, selectRange as yt, selectionSummary as bt, spriteGlyph as xt, storeJavLayout as St, suppressShiftTextSelection as Ct, t as J, textLang as wt, tierPlaceholdersHtml as Tt, useAction as Y, useCatalogView as Et, useEntityNames as Dt, useQuery as X, useTablePreferences as Ot, wantName as kt, wireHorizontalScroller as At, writeJavQuery as Z } from "./peach-app.js";
import { ErrorLine as jt } from "./peach-app.source-view--K6uWAMi.js";
// src/react/wants/want-list.tsx
var Q = /* @__PURE__ */ be(gt(), 1), $ = ht(), Mt = {
	code: J("catalog:wants.originManual"),
	feed: J("catalog:entityHero.subscribeNewReleases"),
	follow: J("catalog:entityHero.following")
}, Nt = [
	["all", J("catalog:shared.all")],
	["available", J("catalog:wants.hasMagnet")],
	["missing", J("catalog:wants.noMagnet")]
], Pt = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Mt[e.origin]
].filter(Boolean).join(" · ");
function Ft({ want: e }) {
	return /* @__PURE__ */ (0, $.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, $.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: J("catalog:shared.noCover")
		}), e.cover ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function It({ want: e, readOnly: t, busy: n, onReset: r, onRemove: i, onCloudDownload: a, downloads: o, provider: s, toast: u }) {
	let [d, f] = (0, Q.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, $.jsxs)("li", {
		"data-want-id": e.id,
		className: Ee({ className: "flex flex-col gap-4 max-sm:p-4" }),
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, $.jsx)(Ft, { want: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, $.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, $.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: kt(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					Pt(e) ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Pt(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, $.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: vt(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, $.jsx)(jt, {
						text: e.scrape_error,
						prefix: J("catalog:wants.metadataNotFound"),
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, $.jsx)(l, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: ye,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: J("catalog:wants.sourcePage")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								leadingIcon: M,
								disabled: t,
								...G(n === `remove:${e.id}`),
								onClick: i,
								children: J("catalog:shared.remove")
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...G(n === `reset:${e.id}`),
								onClick: r,
								children: J("catalog:wants.searchAgain")
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, $.jsx)(c, {
								variant: "secondary",
								size: "small",
								onClick: a,
								children: J("catalog:shared.searchTorrents")
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, $.jsx)(ve, {
			want: e,
			readOnly: t,
			downloads: o,
			provider: s,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Lt({ phase: e, label: t, rows: n, row: r }) {
	let [i, a] = (0, Q.useState)(1), [s, l] = (0, Q.useState)(20), [u, d] = (0, Q.useState)("all"), f = Te(n), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = n.filter(p), h = e !== "searching" || u === "all" ? n : n.filter((e) => p(e) === (u === "available")), g = ot(h.length, s, i);
	return /* @__PURE__ */ (0, $.jsxs)("section", {
		"aria-label": t,
		"data-want-phase": e,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: n.length.toLocaleString()
					})]
				}), e === "searching" ? /* @__PURE__ */ (0, $.jsx)(H, {
					name: "want-magnet-filter",
					"aria-label": J("catalog:wants.magnetFilter"),
					orientation: "horizontal",
					value: u,
					className: V,
					onChange: (e) => {
						d(e), a(1);
					},
					children: Nt.map(([e, t]) => /* @__PURE__ */ (0, $.jsxs)(o, {
						value: e,
						"aria-label": t,
						className: B,
						children: [t, /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (e === "all" ? n.length : e === "available" ? m.length : n.length - m.length).toLocaleString()
						})]
					}, e))
				}) : null]
			}),
			h.length ? null : /* @__PURE__ */ (0, $.jsx)(ee, {
				size: "compact",
				icon: st,
				title: J("catalog:wants.noFilterMatches"),
				actions: /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: () => {
						d("all"), a(1);
					},
					children: J("catalog:shared.viewAll")
				}),
				children: null
			}),
			/* @__PURE__ */ (0, $.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: h.slice(g.start, g.end).map(r)
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-want-pager": "",
				children: /* @__PURE__ */ (0, $.jsx)(C, {
					label: t,
					total: g.total,
					pagination: {
						pageIndex: g.page - 1,
						pageSize: s
					},
					onChange: (e) => {
						l(e.pageSize), a(e.pageIndex + 1);
					},
					unit: J("catalog:wants.itemUnit")
				})
			})
		]
	});
}
function Rt({ readOnly: e, toast: t, query: n = "", clearQuery: r }) {
	let [i, a] = (0, Q.useState)(""), [o, s] = (0, Q.useState)(null), l = Y(), u = X({
		queryKey: W,
		queryFn: ({ signal: e }) => Ye(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), d = () => {
		let n = i.trim();
		n && !e && l.run("add", (e) => xe({ code: n }, e), (e) => {
			t(e.created ? J("catalog:wants.added", { name: kt(e.want) }) : J("catalog:wants.alreadyAdded", { name: kt(e.want) })), a(""), q();
		});
	}, f = (e) => {
		e.key === "Enter" && !ke(e.nativeEvent) && (e.preventDefault(), d());
	}, p = (e) => {
		l.run(`remove:${e.id}`, (t) => mt([e.id], t), () => {
			t(J("catalog:wants.removed", { name: kt(e) })), q();
		});
	}, m = (e) => {
		l.run(`reset:${e.id}`, (t) => _t([e.id], t), () => {
			t(J("catalog:wants.backToSearching", { name: kt(e) })), q();
		});
	}, h = u.data, _ = (h?.items || []).filter((e) => !n || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(n.toLocaleLowerCase())), v = X({
		queryKey: x,
		queryFn: ({ signal: e }) => Se(`${S}?limit=100`, e),
		enabled: _.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), y = v.data?.providers.filter((e) => e.configured) || [], b = y[0]?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"aria-busy": u.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: Ee({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: J("catalog:wants.addByCode")
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, $.jsx)(ae, {
								"aria-label": J("catalog:shared.code"),
								placeholder: J("catalog:wants.codePlaceholder"),
								value: i,
								isDisabled: e,
								onChange: a,
								onKeyDown: f
							})
						}), /* @__PURE__ */ (0, $.jsx)(c, {
							variant: "primary",
							disabled: e || !i.trim(),
							...G(l.busy === "add"),
							onClick: d,
							children: J("catalog:shared.add")
						})]
					}),
					l.error ? /* @__PURE__ */ (0, $.jsx)(P, {
						tone: "error",
						title: J("catalog:wants.actionFailed"),
						children: l.error
					}) : null
				]
			}),
			u.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:wants.loadFailed"),
				children: K(u.error)
			}) : null,
			u.isPending ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:wants.loading"),
				dangerouslySetInnerHTML: { __html: $e("wants") }
			}) : null,
			h?.scraping ? /* @__PURE__ */ (0, $.jsx)(D, {
				role: "status",
				children: J("catalog:wants.fetchingNew")
			}) : null,
			v.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:wants.downloadSettingsFailed"),
				children: K(v.error)
			}) : null,
			v.data && !y.length ? /* @__PURE__ */ (0, $.jsxs)(P, {
				tone: "neutral",
				children: [
					J("shell:downloadChannels.notConfigured"),
					J("shell:format.sentenceGap"),
					/* @__PURE__ */ (0, $.jsx)("a", {
						href: "/settings/downloads",
						children: J("shell:downloadChannels.settingsLink")
					})
				]
			}) : null,
			v.data && !v.data.available ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "neutral",
				children: J("catalog:wants.cloudPrimaryOnly")
			}) : null,
			h && !_.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				size: "compact",
				icon: st,
				title: J(n ? "catalog:wants.noSearchMatches" : "catalog:wants.empty"),
				actions: n && r ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: r,
					children: J("catalog:shared.clearSearch")
				}) : !n && !e ? /* @__PURE__ */ (0, $.jsx)(E, {
					target: `input[aria-label="${J("catalog:shared.code")}"]`,
					children: J("catalog:wants.addWork")
				}) : void 0,
				children: J(n ? "catalog:wants.tryOtherSearch" : "catalog:wants.emptyHint")
			}) : null,
			I.map(([n, r]) => {
				let i = _.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, $.jsx)(Lt, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, $.jsx)(It, {
						want: n,
						readOnly: e,
						busy: l.busy,
						downloads: v.data,
						provider: b,
						toast: t,
						onReset: () => m(n),
						onRemove: () => p(n),
						onCloudDownload: () => s({
							code: n.code || "",
							title: n.title || "",
							origin: `wishlist:${n.id}`,
							cover: n.cover || "",
							performers: n.performers || "",
							release_date: n.release_date || "",
							studio: n.studio || ""
						})
					}, n.id)
				}, n) : null;
			}),
			/* @__PURE__ */ (0, $.jsx)(g, {
				prefill: o,
				close: () => s(null),
				receipt: t,
				provider: b
			})
		]
	});
}
// src/react/jav/jav-batch-resources.tsx
function zt({ items: t, close: n, readOnly: r, receipt: i }) {
	let a = X({
		queryKey: x,
		queryFn: ({ signal: e }) => Se(`${S}?limit=50`, e),
		enabled: !!t
	}), o = a.data?.providers.find((e) => e.configured)?.key || "";
	return /* @__PURE__ */ (0, $.jsxs)(N, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || n();
		},
		width: "collections",
		children: [/* @__PURE__ */ (0, $.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-separator-border bg-background-full px-5 py-4",
			children: [/* @__PURE__ */ (0, $.jsxs)(e, {
				slot: "title",
				className: "text-title-2-medium text-text-primary",
				children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-copy-key": "jav.resources.title",
						children: J("catalog:javBatch.title")
					}),
					" · ",
					J("catalog:countLabel.works", { count: t?.length || 0 })
				]
			}), /* @__PURE__ */ (0, $.jsx)(c, {
				iconOnly: !0,
				variant: "ghost",
				leadingIcon: F,
				"aria-label": J("catalog:javBatch.close"),
				onClick: n
			})]
		}), /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-6 p-5",
			children: [a.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: J("catalog:javBatch.downloadSettingsFailed", { error: K(a.error) })
			}) : null, t?.map((e) => /* @__PURE__ */ (0, $.jsxs)("section", {
				"aria-label": e.code,
				className: "flex min-w-0 flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, $.jsx)("h3", {
						className: "text-headline-medium text-text-primary",
						children: e.code
					}),
					e.title ? /* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.title
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(ve, {
						want: {
							id: e.id,
							code: e.code,
							title: e.title,
							release_date: e.release_date || null
						},
						queryUrl: `/api/jav/resources?code=${encodeURIComponent(e.code)}`,
						eager: !0,
						readOnly: r,
						downloads: a.data,
						provider: o,
						toast: i
					})
				]
			}, e.code))]
		})]
	});
}
// src/react/jav/jav-selection.tsx
function Bt(e) {
	let t = new MutationObserver(e);
	return t.observe(document.body, {
		attributes: !0,
		attributeFilter: ["data-density"]
	}), () => t.disconnect();
}
var Vt = () => document.body.dataset.density === "dense", Ht = (0, Q.createContext)(null), Ut = () => (0, Q.useContext)(Ht);
function Wt(e) {
	let t = Ut()?.visible;
	(0, Q.useEffect)(() => {
		t?.(e);
	}, [e, t]);
}
function Gt({ children: e, readOnly: t, receipt: n }) {
	let r = (0, Q.useSyncExternalStore)(Bt, Vt, () => !1), [i, a] = (0, Q.useState)(!1), [o, s] = (0, Q.useState)(/* @__PURE__ */ new Map()), [l, u] = (0, Q.useState)([]), [d, f] = (0, Q.useState)(null), p = (0, Q.useRef)(null), m = Y(), h = new Set(o.keys()), g = bt(h, l.map((e) => e.code)), _ = (0, Q.useCallback)((e) => {
		u((t) => t.length === e.length && t.every((t, n) => t === e[n]) ? t : e), s((t) => {
			let n = e.filter((e) => t.has(e.code) && t.get(e.code) !== e);
			return n.length ? new Map([...t, ...n.map((e) => [e.code, e])]) : t;
		});
	}, []), v = m.cancel, y = (0, Q.useCallback)(() => {
		v(), a(!1), s(/* @__PURE__ */ new Map()), p.current = null;
	}, [v]), b = () => s((e) => {
		let t = new Map(e);
		return l.forEach((e) => g.all ? t.delete(e.code) : t.set(e.code, e)), t;
	});
	(0, Q.useEffect)(() => {
		let e = () => {
			i ? y() : a(!0);
		};
		return window.addEventListener(k, e), () => window.removeEventListener(k, e);
	}, [i, y]), (0, Q.useEffect)(() => (i || (s(/* @__PURE__ */ new Map()), p.current = null), document.getElementById("selectMode")?.setAttribute("aria-pressed", String(i)), () => document.getElementById("selectMode")?.setAttribute("aria-pressed", "false")), [i]), (0, Q.useEffect)(() => {
		if (!i) return;
		let e = (e) => {
			e.target.closest("input,textarea,[contenteditable]:not([contenteditable=\"false\"]),[role=\"dialog\"]") || (e.key === "Escape" && (e.preventDefault(), y()), (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "a" && (e.preventDefault(), s((e) => new Map([...e, ...l.map((e) => [e.code, e])]))));
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [
		i,
		y,
		l
	]);
	let x = (e, t = !1) => {
		a(!0);
		let n = p.current;
		p.current = e.code, s((r) => {
			let i = new Set(r.keys());
			yt(i, l.map((e) => e.code), n, e.code, t);
			let a = new Map([
				...r,
				...l.map((e) => [e.code, e]),
				[e.code, e]
			]);
			return new Map([...i].map((e) => [e, a.get(e)]));
		});
	}, S = [...o.values()].filter((e) => !e.wanted && !e.asset_id), C = () => {
		m.run("want", async (e) => {
			let t = 0;
			try {
				for (let n of S) {
					e.throwIfAborted();
					try {
						await xe({ code: n.code }, e);
					} catch (e) {
						throw Error(J("catalog:javSelection.wantPartialFailed", {
							count: t,
							code: n.code,
							error: K(e)
						}));
					}
					e.throwIfAborted(), t++, s((e) => {
						let t = new Map(e);
						return t.delete(n.code), t;
					});
				}
				return t;
			} finally {
				q();
			}
		}, (e) => n(J("catalog:javSelection.wantAdded", { count: e })));
	};
	return /* @__PURE__ */ (0, $.jsxs)(Ht.Provider, {
		value: {
			dense: r,
			mode: i,
			selected: h,
			toggle: x,
			visible: _,
			selectPage: b,
			all: g.all,
			mixed: g.mixed
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-selection": "",
				"data-select-mode": i ? "" : void 0,
				className: "flex min-w-0 flex-col gap-4",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsxs)(U, {
				visible: i,
				count: J("catalog:javSelection.selectedCount", { count: o.size }),
				label: J("catalog:javSelection.dockLabel"),
				children: [
					m.error ? /* @__PURE__ */ (0, $.jsx)("p", {
						role: "alert",
						className: "w-full px-2 text-caption-1-regular text-text-error-primary",
						children: m.error
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !l.length || !!m.busy,
						onClick: b,
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-copy-key": `jav.selection.page.${g.all ? "clear" : "all"}`,
							children: g.all ? J("catalog:javSelection.deselectPage") : J("catalog:javSelection.selectPage")
						})
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: t || !S.length,
						...G(m.busy === "want"),
						onClick: C,
						children: J("catalog:javSelection.addToWants")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "secondary",
						disabled: !o.size || !!m.busy,
						onClick: () => f([...o.values()]),
						children: J("catalog:shared.searchTorrents")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						size: "small",
						variant: "ghost",
						onClick: y,
						children: J("catalog:javSelection.exit")
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(zt, {
				items: d,
				close: () => f(null),
				readOnly: t,
				receipt: n
			})
		]
	});
}
// src/react/jav/discovery-faces.tsx
function Kt({ item: e }) {
	Dt();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, $.jsx)(pe, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: we(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, $.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: He("performer", t.name, t.id),
			"aria-label": J("catalog:javDiscovery.openActress", { name: Be("performer", t.name, t.id) }),
			...i
		}, t.name) : /* @__PURE__ */ (0, $.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: Be("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ (0, $.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/jav/discovery-card.tsx
var qt = (e) => ({
	...e,
	cover: e.has_cover ? Ie(e, !0) : e.cover_url,
	origin: `${e.asset_id ? "asset" : "feed"}:${e.id}`
}), Jt = "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default";
function Yt({ item: e, readOnly: t }) {
	let n = Y(), [r, i] = (0, Q.useState)("");
	(0, Q.useSyncExternalStore)(Ne.subscribe, Ne.revision);
	let a = e.cover_state;
	if (!a) return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-media-nopic": "",
		children: J("catalog:shared.noCover")
	});
	if (a === "fetching" || Ne.has(e.code)) return /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Pe() } });
	let o = () => {
		n.run("cover", (t) => Ge(e.code, t), (t) => {
			t.has_cover ? Me(e.code, t) : i(t.message || J("catalog:javDiscovery.noOfficialCover"));
		});
	}, s = r || n.error ? "missing" : a, l = n.error || r || e.cover_reason;
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-cover-state": s,
		className: "flex max-w-full flex-col items-center gap-1.5 px-4 text-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)("span", {
				"data-media-nopic": "",
				children: d[s]
			}),
			l ? /* @__PURE__ */ (0, $.jsx)("span", {
				className: "line-clamp-3 text-caption-1-regular text-text-secondary",
				title: l,
				children: l
			}) : null,
			t ? null : /* @__PURE__ */ (0, $.jsx)(c, {
				size: "small",
				variant: "secondary",
				className: "mt-1",
				onClick: o,
				children: Fe(s)
			})
		]
	});
}
function Xt({ item: e, layout: t, javImage: n, readOnly: r, navigate: i, tag: a, onTag: o, wanting: u, onWant: d, onResource: f, badge: p }) {
	let m = Ut(), h = m?.selected.has(e.code), g = !!m?.dense, _ = e.performer_refs?.length ? nt(e.performer_refs.map((e) => e.name)) : e.performers, v = Le(e, t, n), y = e.asset_id ? `/assets/${e.asset_id}` : `/works/${encodeURIComponent(e.code)}`;
	return /* @__PURE__ */ (0, $.jsxs)("article", {
		"data-media-card": "",
		"data-jav-card": "",
		"data-selected": h ? "" : void 0,
		onMouseDown: Ct,
		onClickCapture: (t) => {
			m && (m.mode || t.shiftKey || t.ctrlKey || t.metaKey) && (t.preventDefault(), t.stopPropagation(), m.toggle(e, t.shiftKey));
		},
		onClick: (e) => {
			e.target.closest("a,button,input") || i(y);
		},
		children: [
			v ? /* @__PURE__ */ (0, $.jsx)("a", {
				href: y,
				"aria-label": J("catalog:javDiscovery.viewDetails", { code: e.code }),
				onClick: (e) => {
					e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), i(y));
				},
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Jt,
				children: /* @__PURE__ */ (0, $.jsx)(s, {
					artwork: {
						kind: "cover",
						html: v
					},
					identity: Le(e, "small", n),
					relayout: (e) => ut(e, t)
				})
			}) : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-pic": "",
				"data-jav-cover-box": "",
				className: Jt,
				children: /* @__PURE__ */ (0, $.jsx)(Yt, {
					item: e,
					readOnly: r
				})
			}),
			m?.mode ? /* @__PURE__ */ (0, $.jsx)("button", {
				type: "button",
				"data-media-check": "",
				"aria-label": J("catalog:javDiscovery.select", { code: e.code }),
				"aria-pressed": !!h,
				children: /* @__PURE__ */ (0, $.jsx)("svg", {
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-check" })
				})
			}) : null,
			/* @__PURE__ */ (0, $.jsxs)("div", {
				"data-media-meta": "",
				children: [/* @__PURE__ */ (0, $.jsx)(Kt, { item: e }), /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-media-text": "",
					children: [
						/* @__PURE__ */ (0, $.jsxs)("h3", {
							"data-jav-title": "",
							"data-media-title": "",
							title: `${e.code} · ${e.title || J("catalog:javDiscovery.titleNotFound")}`,
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: e.code }),
								" ",
								e.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: wt(e.title),
									children: e.title
								}) : J("catalog:javDiscovery.titleNotFound")
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-media-byline": "",
							children: [
								e.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsxs)("a", {
									"data-media-who": "",
									href: He("performer", e.performer_refs[0].name),
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs[0].name })]
								}) : /* @__PURE__ */ (0, $.jsxs)("span", {
									"data-media-who": "",
									title: _,
									children: [/* @__PURE__ */ (0, $.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-user-round" })
									}), /* @__PURE__ */ (0, $.jsx)("span", { children: e.performer_refs?.[0]?.name || _ })]
								}),
								(e.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-who-more": "",
									children: J("catalog:javDiscovery.morePeople", {
										count: e.performer_refs.length - 1,
										total: e.performer_refs.length
									})
								}) : null,
								e.release_date ? /* @__PURE__ */ (0, $.jsx)("span", {
									"data-media-facts": "",
									children: /* @__PURE__ */ (0, $.jsxs)("time", {
										"data-media-release": "",
										dateTime: e.release_date,
										children: [/* @__PURE__ */ (0, $.jsx)("svg", {
											viewBox: "0 0 24 24",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, $.jsx)("use", { href: "#i-calendar" })
										}), e.release_date]
									})
								}) : null
							]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", {
							"data-jav-tags": "",
							"data-media-tags": "",
							children: [p, (e.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
								type: "button",
								"data-media-tag": "",
								"aria-pressed": a === e,
								onClick: () => o(a === e ? "" : e),
								children: e
							}, e))]
						})
					]
				})]
			}),
			m?.mode ? null : /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-jav-actions": "",
				"data-compact": g ? "" : void 0,
				"data-has-source": e.link ? "" : void 0,
				className: "flex flex-wrap gap-2",
				children: [
					e.link ? /* @__PURE__ */ (0, $.jsx)(l, {
						"data-button-link": "",
						"data-jav-source": "",
						variant: "secondary",
						size: g ? "small" : "medium",
						iconOnly: g,
						"aria-label": J("catalog:shared.viewOnSite"),
						title: J("catalog:shared.viewOnSite"),
						leadingIcon: g ? ye : void 0,
						trailingIcon: g ? void 0 : ye,
						href: e.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: g ? null : J("catalog:shared.viewOnSite")
					}) : null,
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "ghost",
						size: g ? "small" : "medium",
						disabled: r || e.wanted || !!e.asset_id,
						...G(u),
						onClick: d,
						children: e.asset_id ? J("catalog:javWant.imported") : e.wanted ? J("catalog:javWant.wanted") : J("catalog:javWant.want")
					}),
					/* @__PURE__ */ (0, $.jsx)(c, {
						variant: "secondary",
						size: g ? "small" : "medium",
						onClick: f,
						children: J("catalog:shared.searchTorrents")
					})
				]
			})
		]
	});
}
// src/react/jav/jav-release-table.tsx
var Zt = {
	widths: R,
	visibility: L
};
function Qt({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return e?.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
		"data-list-studio-mark": "",
		src: at(e.name, "icon", e.logo_version),
		alt: "",
		width: 16,
		height: 16,
		loading: "lazy",
		decoding: "async",
		onError: () => n(!0)
	}) : /* @__PURE__ */ (0, $.jsx)("span", {
		"data-list-studio-mark": "",
		"aria-hidden": "true",
		children: it(e?.name || "", 1)
	});
}
function $t({ items: e, waiting: o, filters: l, studios: u, javImage: f, readOnly: h, navigate: g, onTag: _, onSort: v, wanting: y, onWant: b, onResource: x }) {
	let S = Ut(), C = Ot("jav-releases", dt, Zt), T = dt.filter((e) => e.required || C.visibility[e.id] !== !1), E = Object.entries(z).find(([, e]) => e === l.sort)?.[0], ee = new Map(u.map((e) => [e.name, e])), te = (e) => (t) => {
		t.preventDefault(), S?.mode || t.shiftKey || t.ctrlKey || t.metaKey ? S?.toggle(e, t.shiftKey) : g(`/works/${encodeURIComponent(e.code)}`);
	}, ne = (e, t) => {
		let n = t.performer_refs?.[0]?.name || t.performers.split(/[,，、;/]/)[0] || "";
		switch (e) {
			case "name": {
				let e = Le(t, "small", f);
				return /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-list-identity": "",
					children: [/* @__PURE__ */ (0, $.jsx)("button", {
						type: "button",
						"data-list-open": "",
						tabIndex: -1,
						"aria-hidden": "true",
						onClick: te(t),
						children: /* @__PURE__ */ (0, $.jsx)("span", {
							"data-list-picture": "",
							children: e ? /* @__PURE__ */ (0, $.jsx)(s, {
								artwork: {
									kind: "cover",
									html: e
								},
								relayout: (e) => ut(e, "small")
							}) : /* @__PURE__ */ (0, $.jsx)("span", {
								title: t.cover_reason || void 0,
								children: t.cover_state ? d[t.cover_state] : J("catalog:shared.noCover")
							})
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						"data-list-text": "",
						children: /* @__PURE__ */ (0, $.jsxs)("button", {
							type: "button",
							"data-list-name": "",
							title: `${t.code} · ${t.title || J("catalog:javDiscovery.titleNotFound")}`,
							"aria-label": J("catalog:javDiscovery.viewDetails", { code: t.code }),
							onClick: te(t),
							children: [
								/* @__PURE__ */ (0, $.jsx)("b", { children: t.code }),
								" ",
								t.title ? /* @__PURE__ */ (0, $.jsx)("span", {
									lang: wt(t.title),
									children: t.title
								}) : J("catalog:javDiscovery.titleNotFound")
							]
						})
					})]
				});
			}
			case "people": return n ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-list-people": "",
				children: [
					/* @__PURE__ */ (0, $.jsx)(Kt, { item: t }),
					t.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, $.jsx)("a", {
						"data-media-who": "",
						href: He("performer", n),
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}) : /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who": "",
						children: /* @__PURE__ */ (0, $.jsx)("span", { children: n })
					}),
					(t.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, $.jsx)("span", {
						"data-media-who-more": "",
						children: J("catalog:javDiscovery.morePeople", {
							count: t.performer_refs.length - 1,
							total: t.performer_refs.length
						})
					}) : null
				]
			}) : "—";
			case "studio": return t.studio ? /* @__PURE__ */ (0, $.jsxs)("span", {
				"data-list-library": "",
				title: t.studio,
				children: [/* @__PURE__ */ (0, $.jsx)(Qt, { studio: ee.get(t.studio) }), /* @__PURE__ */ (0, $.jsx)("span", { children: t.studio })]
			}) : "—";
			case "tags": return t.tags?.length ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-tags": "",
				"data-list-tags": "",
				children: t.tags.map((e) => /* @__PURE__ */ (0, $.jsx)("button", {
					type: "button",
					"data-media-tag": "",
					"aria-pressed": l.tag === e,
					onClick: () => _(l.tag === e ? "" : e),
					children: e
				}, e))
			}) : "—";
			case "code": return t.code;
			case "dur": return Ze(t.duration) || "—";
			case "score": return t.source_score == null ? "—" : `${t.source_score.toFixed(2)} / 5`;
			case "release": return t.release_date || "—";
			default: return /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-release-actions": "",
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "ghost",
					disabled: h || t.wanted || !!t.asset_id,
					...G(y(t)),
					onClick: () => b(t),
					children: t.wanted ? J("catalog:javWant.wanted") : J("catalog:javWant.want")
				}), /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					variant: "secondary",
					onClick: () => x(t),
					children: J("catalog:shared.searchTorrents")
				})]
			});
		}
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		"data-catalog-table": "",
		"data-release-table": "",
		className: "flex min-w-0 flex-col gap-4",
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: "flex flex-wrap justify-end gap-2",
			role: "toolbar",
			"aria-label": J("catalog:javReleases.toolbar"),
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				"data-toolbar-actions": "",
				children: /* @__PURE__ */ (0, $.jsx)(he, {
					preferences: C,
					label: J("catalog:javReleases.list")
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(w, {
			follow: !0,
			preferences: C,
			children: /* @__PURE__ */ (0, $.jsxs)(me, {
				"aria-label": J("catalog:javReleases.list"),
				size: "sm",
				sortDescriptor: E ? {
					column: E,
					direction: l.dir === "asc" ? "ascending" : "descending"
				} : void 0,
				onSortChange: (e) => {
					let t = z[String(e.column)];
					t && v(t, e.direction === "ascending" ? "asc" : "desc");
				},
				children: [/* @__PURE__ */ (0, $.jsxs)(a, { children: [
					S?.mode ? /* @__PURE__ */ (0, $.jsx)(n, {
						id: "selection",
						width: 44,
						"aria-label": J("catalog:javReleases.selectVideos"),
						children: /* @__PURE__ */ (0, $.jsx)(p, {
							slot: null,
							"aria-label": J("catalog:catalogList.selectAllOnPage"),
							isSelected: S.all,
							isIndeterminate: S.mixed,
							isDisabled: o || !e.length,
							onChange: S.selectPage
						})
					}) : null,
					T.map((e) => /* @__PURE__ */ (0, $.jsx)(n, {
						id: e.id,
						isRowHeader: e.id === "name",
						allowsSorting: e.id in z,
						...C.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [e.label, e.id in z ? /* @__PURE__ */ (0, $.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, $.jsx)(m, {})
							}) : null]
						}), /* @__PURE__ */ (0, $.jsx)(ge, {
							preferences: C,
							id: e.id
						})] })
					}, e.id)),
					/* @__PURE__ */ (0, $.jsx)(n, {
						id: "remaining-space",
						"aria-label": J("catalog:catalogList.rowSpacer"),
						"data-table-space": "",
						width: C.spaceWidth,
						minWidth: 0
					})
				] }), /* @__PURE__ */ (0, $.jsx)(t, {
					renderEmptyState: () => J("catalog:javReleases.noMatches"),
					children: o ? Array.from({ length: 6 }, (e, t) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: `skeleton-${t}`,
						"data-list-skeleton-row": "",
						"aria-hidden": "true",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, {}) : null,
							T.map((e) => /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)("span", { dangerouslySetInnerHTML: { __html: Oe(e.id) } }) }, e.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, `skeleton-${t}`)) : e.map((e) => /* @__PURE__ */ (0, $.jsxs)(r, {
						id: String(e.id),
						"data-catalog-row": "",
						"data-release-row": "",
						children: [
							S?.mode ? /* @__PURE__ */ (0, $.jsx)(i, { children: /* @__PURE__ */ (0, $.jsx)(p, {
								slot: null,
								"aria-label": J("catalog:javDiscovery.select", { code: e.code }),
								isSelected: S.selected.has(e.code),
								onChange: () => S.toggle(e)
							}) }) : null,
							T.map((t) => /* @__PURE__ */ (0, $.jsx)(i, { children: ne(t.id, e) }, t.id)),
							/* @__PURE__ */ (0, $.jsx)(i, { "data-table-space": "" })
						]
					}, e.id))
				})]
			})
		})]
	});
}
// src/react/jav/jav-releases.tsx
var en = `<div data-catalog-tier="performers" data-skeleton="tiers">${Tt("performer")}</div><div data-catalog-tier="studios">${Tt("studio")}</div>`, tn = (e) => `<span data-tier-initial>${Ue(Xe(Be("performer", e.name, e.id)))}</span>${Ve({
	id: e.id,
	hasImage: e.has_image,
	version: e.image_version,
	style: We(e.avatar_focus),
	focus: e.avatar_focus,
	standIn: e.avatar_stand_in
})}`;
function nn({ value: e }) {
	let t = lt(e);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-jav-taste-score": "",
		title: J("catalog:javScore.taste", { score: t.score }),
		children: /* @__PURE__ */ (0, $.jsx)(h, {
			color: t.color,
			children: t.label
		})
	});
}
function rn({ studio: e }) {
	let [t, n] = (0, Q.useState)(!1);
	return /* @__PURE__ */ (0, $.jsx)("span", {
		"data-tier-mark": "",
		children: e.has_logo && !t ? /* @__PURE__ */ (0, $.jsx)("img", {
			src: at(e.name, "icon", e.logo_version),
			alt: "",
			width: 28,
			height: 28,
			loading: "lazy",
			decoding: "async",
			onError: () => n(!0)
		}) : it(e.name, 2)
	});
}
var an = (e) => Ge(e).then((t) => (t.has_cover && Me(e, t), t.has_cover));
function on({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	Dt();
	let [o, s] = (0, Q.useState)(() => ft(location.search));
	(0, Q.useEffect)(() => {
		r !== o.q && (s((e) => ({
			...e,
			q: r,
			page: 1
		})), Z({ page: "" }));
	}, [r, o.q]);
	let d = (e, t) => {
		let n = o[e] === t ? "" : t;
		s((t) => ({
			...t,
			[e]: n,
			page: 1
		})), Z({
			[e]: n,
			page: ""
		});
	}, p = (0, Q.useRef)(null), m = ({ pageIndex: e, pageSize: t }) => {
		let n = e + 1;
		s((e) => ({
			...e,
			page: n,
			size: t
		})), Z({
			page: n > 1 ? String(n) : "",
			size: t === 24 ? "" : String(t)
		}), p.current?.scrollIntoView({ block: "start" });
	}, h = () => {
		s((e) => ({
			...e,
			performer: "",
			studio: "",
			tag: "",
			q: "",
			page: 1
		})), Z({
			performer: "",
			studio: "",
			tag: "",
			page: ""
		}), a();
	}, g = (e) => b(e, e === o.sort ? o.dir === "asc" ? "desc" : "asc" : e === "code" ? "asc" : "desc"), b = (e, t) => {
		s((n) => ({
			...n,
			sort: e,
			dir: t,
			seed: "",
			page: 1
		})), Z({
			sort: e === "release_date" ? "" : e,
			dir: t === "asc" ? "asc" : "",
			seed: "",
			page: ""
		});
	}, x = () => {
		let e = Math.random().toString(36).slice(2, 10);
		s((t) => ({
			...t,
			sort: "random",
			dir: "desc",
			seed: e,
			page: 1
		})), Z({
			sort: "random",
			dir: "",
			seed: e,
			page: ""
		});
	};
	(0, Q.useEffect)(() => {
		let e = [...p.current?.querySelectorAll("[data-catalog-tier],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => At(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let S = Ce();
	(0, Q.useSyncExternalStore)(S.subscribe, S.version, S.version);
	let w = et(), T = Et(), E = De(Qe({
		active: !0,
		home: !1,
		portrait: !1
	})), ne = (0, Q.useRef)(!1), D = X({
		queryKey: pt(o),
		queryFn: ({ signal: e }) => Je(o, e),
		placeholderData: rt,
		retry: !1,
		refetchOnWindowFocus: !1,
		refetchInterval: () => ne.current ? y : !1
	}), O = D.data?.metadata_job, ae = (0, Q.useRef)(!1);
	ae.current = O?.status === "running";
	let k = ct.getQueryData(v)?.metadata_job, A = X({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: O?.status === "running" || k?.status === "running",
		queryFn: ({ signal: e }) => qe(e),
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" || ae.current ? Math.max(1e3, e.state.data?.poll_after_ms || 3e3) : !1
	}), j = A.data && A.dataUpdatedAt >= D.dataUpdatedAt ? A.data.metadata_job : O, M = j?.status === "running";
	ne.current = M;
	let N = (0, Q.useRef)(!1);
	(0, Q.useEffect)(() => {
		N.current && !M && D.refetch(), N.current = M;
	}, [M, D]);
	let F = (0, Q.useRef)(""), I = JSON.stringify([
		o.performer,
		o.studio,
		o.tag,
		o.q,
		o.sort,
		o.dir,
		o.seed
	]), L = !D.isPlaceholderData && (D.data?.metadata_unread || 0) > 0 && !M;
	(0, Q.useEffect)(() => {
		L && F.current !== I && (F.current = I, je("start", o).then(async (e) => {
			await ct.cancelQueries({ queryKey: v }), ct.setQueryData(v, e);
		}).catch(() => {}));
	}, [L, I]);
	let R = Y(), z = (e) => {
		R.run(String(e.id), (t) => xe({ code: e.code }, t), () => {
			t(J("catalog:javWant.added")), q(), D.refetch();
		});
	}, B = D.data;
	Wt(B?.items || []);
	let V = D.isPending, H = !!(o.performer || o.studio || o.tag || o.q), U = Math.max(1, Math.ceil((B?.total || 0) / o.size));
	return (0, Q.useEffect)(() => {
		!B || D.isPlaceholderData || o.page <= U || (s((e) => ({
			...e,
			page: U
		})), Z({ page: U > 1 ? String(U) : "" }));
	}, [
		B,
		D.isPlaceholderData,
		o.page,
		U
	]), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: p,
		"aria-label": J("catalog:entityHero.subscribeNewReleases"),
		"aria-busy": V || D.isFetching,
		className: "flex min-w-0 scroll-mt-24 flex-col gap-4",
		children: [
			V ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-catalog-tiers": "",
				"aria-busy": "true",
				dangerouslySetInnerHTML: { __html: en }
			}) : null,
			B && (B.facets.performers.length || B.facets.studios.length) ? /* @__PURE__ */ (0, $.jsxs)("div", {
				"data-catalog-tiers": "",
				"data-release-tiers": "",
				children: [B.facets.performers.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "performers",
					role: "group",
					"aria-label": J("catalog:javReleases.filterByActress"),
					children: B.facets.performers.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-performer": "",
						"aria-pressed": o.performer === e.name,
						title: J("catalog:javReleases.facetCount", {
							name: Be("performer", e.name, e.id),
							count: e.count
						}),
						onClick: () => d("performer", e.name),
						children: [/* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-ring": "",
							dangerouslySetInnerHTML: { __html: tn(e) }
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-tier-name": "",
							children: Be("performer", e.name, e.id)
						})]
					}, e.name))
				}) : null, B.facets.studios.length ? /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-tier": "studios",
					role: "group",
					"aria-label": J("catalog:javReleases.filterByLabel"),
					children: B.facets.studios.map((e) => /* @__PURE__ */ (0, $.jsxs)("button", {
						type: "button",
						"data-tier-studio": "",
						"aria-pressed": o.studio === e.name,
						title: J("catalog:javReleases.facetCount", {
							name: e.name,
							count: e.count
						}),
						onClick: () => d("studio", e.name),
						children: [
							/* @__PURE__ */ (0, $.jsx)(rn, { studio: e }),
							e.name,
							/* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})
						]
					}, e.name))
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, $.jsx)(te, {
				label: J("catalog:javReleases.filtersLabel"),
				topLabel: J("catalog:javReleases.tagsLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: V,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsx)("div", {
					"data-catalog-scroll": "",
					children: /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: V ? { __html: tt() } : void 0,
						children: V ? null : B?.facets.tags.map((e) => /* @__PURE__ */ (0, $.jsxs)(re, {
							"data-catalog-tag": e.name,
							"data-entity-press": "",
							pressed: o.tag === e.name,
							onPress: () => d("tag", e.name),
							children: [e.name, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: e.count
							})]
						}, e.name))
					})
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: V ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : H ? J("catalog:javReleases.matchedCount", {
							matched: B?.total || 0,
							count: B?.candidate_total || 0
						}) : J("catalog:countLabel.works", { count: B?.total || 0 })
					}),
					H ? /* @__PURE__ */ (0, $.jsx)(ie, {
						onPress: h,
						children: J("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							/* @__PURE__ */ (0, $.jsx)(de, {
								onPress: x,
								busy: o.sort === "random" && D.isFetching
							}),
							T === "cards" ? /* @__PURE__ */ (0, $.jsx)(ue, {
								label: J("catalog:entityFilter.javCardLayout"),
								value: w,
								options: oe,
								onChange: St
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(f, {}),
							/* @__PURE__ */ (0, $.jsx)(fe, {
								sorts: le.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === o.sort,
									dir: o.dir
								})),
								onSort: (e) => g(e)
							})
						]
					})
				] })
			}),
			V && T === "cards" ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:javReleases.loading"),
				dangerouslySetInnerHTML: { __html: $e("discover", w) }
			}) : null,
			D.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:javReleases.failed"),
				children: K(D.error)
			}) : null,
			M && j ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					label: J("catalog:javMetadata.loadingProgress", {
						completed: j.completed,
						count: j.total
					}),
					value: j.completed,
					total: j.total
				})
			}) : null,
			e ? null : /* @__PURE__ */ (0, $.jsx)(_, {
				scope: J("catalog:javReleases.coverQueueScope"),
				fetchOne: an,
				codes: (B?.items || []).filter((e) => e.cover_state === "queued" && !e.cover_url).map((e) => e.code),
				settled: (e, n) => {
					t(e === n ? J("catalog:javReleases.coversFetched", { count: n }) : J("catalog:javReleases.coversPartial", {
						got: e,
						count: n
					})), D.refetch();
				}
			}),
			!V && !D.error && !B?.items.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				icon: u,
				title: J(H ? "catalog:javReleases.noMatches" : "catalog:javReleases.emptyTitle"),
				actions: H ? /* @__PURE__ */ (0, $.jsx)(c, {
					size: "small",
					onClick: h,
					children: J("catalog:shared.clearFilters")
				}) : /* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/subscriptions?tab=add",
					children: J("catalog:javReleases.addSubscription")
				}),
				children: J(H ? "catalog:javReleases.clearFiltersHint" : "catalog:javReleases.emptyHint")
			}) : null,
			R.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: R.error
			}) : null,
			T === "list" ? V || B?.items.length ? /* @__PURE__ */ (0, $.jsx)($t, {
				items: B?.items || [],
				waiting: V,
				filters: o,
				studios: B?.facets.studios || [],
				javImage: S.value.javImage,
				readOnly: e,
				navigate: i,
				onTag: (e) => d("tag", e || o.tag),
				onSort: b,
				wanting: (e) => R.busy === String(e.id),
				onWant: z,
				onResource: (e) => n(qt(e))
			}) : null : /* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: se,
				style: { "--card-ratio": E },
				children: (B?.items || []).map((t) => /* @__PURE__ */ (0, $.jsx)(Xt, {
					item: t,
					layout: w,
					javImage: S.value.javImage,
					readOnly: e,
					navigate: i,
					tag: o.tag,
					onTag: (e) => d("tag", e || o.tag),
					wanting: R.busy === String(t.id),
					onWant: () => z(t),
					onResource: () => n(qt(t)),
					badge: o.sort === "taste" ? /* @__PURE__ */ (0, $.jsx)(nn, { value: t.taste_score }) : void 0
				}, t.id))
			}),
			B ? /* @__PURE__ */ (0, $.jsx)(C, {
				label: J("catalog:javTabs.newReleases"),
				total: B.total,
				pagination: {
					pageIndex: o.page - 1,
					pageSize: o.size
				},
				onChange: m,
				unit: J("catalog:catalogList.footerUnit"),
				pageUnit: J("catalog:catalogList.footerPageUnit"),
				pageSizes: ce
			}) : null
		]
	});
}
// src/react/jav/jav-page.tsx
var sn = xt("x"), cn = xt("refresh-cw"), ln = {
	releases: J("catalog:javSearch.filterReleases"),
	discover: J("catalog:javSearch.filterRecommended"),
	wants: J("catalog:javSearch.filterWants")
};
function un({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, a] = (0, Q.useState)(null), [o, s] = (0, Q.useState)(() => new URLSearchParams(location.search).get("q") || ""), c = (e) => {
		s(e), Z({ q: e });
	};
	return /* @__PURE__ */ (0, $.jsx)(Gt, {
		readOnly: t,
		receipt: r,
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "flex w-full flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, $.jsx)(A, {
					tab: e,
					navigate: n,
					find: () => a({}),
					search: /* @__PURE__ */ (0, $.jsx)(O, {
						label: ln[e] || J("catalog:javDiscover.filter"),
						value: o,
						onQuery: c
					})
				}),
				e === "releases" ? /* @__PURE__ */ (0, $.jsx)(on, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : e === "discover" ? /* @__PURE__ */ (0, $.jsx)(dn, {
					readOnly: t,
					receipt: r,
					resource: a,
					query: o.trim(),
					navigate: n,
					clearText: () => c("")
				}) : /* @__PURE__ */ (0, $.jsx)(Rt, {
					readOnly: t,
					toast: r,
					query: o.trim(),
					clearQuery: () => c("")
				}),
				/* @__PURE__ */ (0, $.jsx)(g, {
					prefill: i,
					close: () => a(null),
					receipt: r
				})
			]
		})
	}, e);
}
function dn({ readOnly: e, receipt: t, resource: n, query: r, navigate: i, clearText: a }) {
	let o = new URLSearchParams(location.search), [s, u] = (0, Q.useState)(() => o.get("scope") === "library" ? "library" : "external"), [d, f] = (0, Q.useState)(() => o.get("tag") || ""), [p, m] = (0, Q.useState)(() => b.some(([e]) => e === o.get("sort")) ? o.get("sort") : "taste"), [g, _] = (0, Q.useState)(() => o.get("dir") === "asc"), x = (e) => {
		u(e), Z({ scope: e === "external" ? "" : e });
	}, S = (e) => {
		f(e), Z({ tag: e });
	}, C = (e) => {
		m(e), Z({ sort: e === "taste" ? "" : e });
	}, w = (e) => {
		_(e), Z({ dir: e ? "asc" : "" });
	}, E = (0, Q.useRef)(null);
	(0, Q.useEffect)(() => {
		let e = [...E.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => At(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let D = Ce();
	(0, Q.useSyncExternalStore)(D.subscribe, D.version, D.version);
	let O = et(), ae = De(Qe({
		active: !0,
		home: !1,
		portrait: !1
	})), k = g ? "asc" : "desc", A = (0, Q.useRef)(!1), M = X({
		queryKey: Re(s, p, k),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => Ke(s, e, {
			sort: p,
			direction: k
		}),
		refetchInterval: () => A.current ? y : !1
	}), N = M.data?.metadata_job, F = (0, Q.useRef)(!1);
	F.current = N?.status === "running";
	let I = X({
		queryKey: v,
		retry: !1,
		refetchOnWindowFocus: !1,
		enabled: s === "external",
		queryFn: ({ signal: e }) => qe(e),
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" || F.current ? Math.max(1e3, e.state.data?.poll_after_ms || 3e3) : !1
	}), L = I.data && I.dataUpdatedAt >= M.dataUpdatedAt ? I.data.metadata_job : N;
	A.current = s === "external" && L?.status === "running";
	let R = (e) => e ? `${e.job_id}:${e.status}` : "", ce = (0, Q.useRef)(""), le = (0, Q.useRef)(""), z = I.data?.metadata_job;
	(0, Q.useEffect)(() => {
		let e = R(z), t = le.current.endsWith(":running") && z && z.status !== "running";
		le.current = e, t && e !== ce.current && M.refetch();
	}, [R(z)]);
	let B = Y(), V = Y(), H = async (e, t) => {
		let n = await Ae(e, {
			sort: p,
			direction: k,
			jobId: L?.job_id
		}, t);
		e !== "start" && await M.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		}), await ct.cancelQueries({ queryKey: v }), ce.current = R(n.metadata_job), ct.setQueryData(v, n);
	}, U = (e) => {
		V.run(e, (t) => H(e === "stop" ? "cancel" : "refresh", t), () => {});
	}, de = (0, Q.useRef)(!1), pe = s === "external" && L?.status !== "running" && (M.data?.items || []).some((e) => e.metadata_state === "pending" || e.metadata_state === "stale");
	(0, Q.useEffect)(() => {
		pe && !de.current && (de.current = !0, H("start").catch(() => {}));
	}, [pe]);
	let me = M.data?.items || [], he = [...new Set(me.flatMap((e) => e.tags || []))], ge = me.filter((e) => (!d || e.tags?.includes(d)) && (!r || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase()))), W = M.isPending;
	return Wt(ge), /* @__PURE__ */ (0, $.jsxs)("section", {
		ref: E,
		"aria-label": J("catalog:shared.recommendedForYou"),
		"aria-busy": W,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, $.jsx)(te, {
				label: J("catalog:javDiscover.filtersLabel"),
				topLabel: J("catalog:javDiscover.scopeLabel"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: W,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, $.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, $.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", J("catalog:javDiscover.external")], ["library", J("catalog:javDiscover.library")]].map(([e, t]) => /* @__PURE__ */ (0, $.jsx)(re, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: s === e,
							onPress: () => {
								x(e), S("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, $.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: W ? { __html: tt() } : void 0,
						children: W ? null : he.map((e) => /* @__PURE__ */ (0, $.jsxs)(re, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: d === e,
							onPress: () => S(d === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, $.jsx)("span", {
								"data-count-badge": "",
								children: me.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
					/* @__PURE__ */ (0, $.jsx)("span", {
						"data-catalog-readout": "",
						children: W ? /* @__PURE__ */ (0, $.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : J("catalog:countLabel.works", { count: ge.length })
					}),
					/* @__PURE__ */ (0, $.jsx)(j, { currentHref: () => location.pathname + location.search }),
					r || d ? /* @__PURE__ */ (0, $.jsx)(ie, {
						onPress: () => {
							S(""), a();
						},
						children: J("catalog:shared.clearFilters")
					}) : null,
					/* @__PURE__ */ (0, $.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							s === "external" ? /* @__PURE__ */ (0, $.jsx)(ne, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: L?.status === "running" ? J("catalog:javDiscover.stopUpdating") : J("catalog:javDiscover.updateMetadata"),
								disabled: W,
								"data-skeleton-action": W ? "" : void 0,
								busy: !!V.busy,
								icon: L?.status === "running" ? sn : cn,
								onPress: () => U(L?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, $.jsx)(ue, {
								label: J("catalog:entityFilter.javCardLayout"),
								value: O,
								options: oe,
								onChange: St
							}),
							/* @__PURE__ */ (0, $.jsx)(fe, {
								sorts: b.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === p,
									dir: k
								})),
								onSort: (e) => {
									e === p ? w(!g) : (C(e), w(e === "code"));
								}
							})
						]
					})
				] })
			}),
			W ? /* @__PURE__ */ (0, $.jsx)("div", {
				role: "status",
				"aria-label": J("catalog:javDiscover.loading"),
				dangerouslySetInnerHTML: { __html: $e("discover", O) }
			}) : null,
			M.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				title: J("catalog:javDiscover.failed"),
				children: K(M.error)
			}) : null,
			s === "external" && L?.status === "running" ? /* @__PURE__ */ (0, $.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, $.jsx)(_e, {
					label: J("catalog:javMetadata.loadingProgress", {
						completed: L.completed,
						count: L.total
					}),
					value: L.completed,
					total: L.total
				})
			}) : null,
			L && L.status !== "running" && (L.status !== "complete" || L.failed > 0) ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "secondary",
					...G(V.busy === "retry"),
					"aria-label": J("catalog:javMetadata.retry"),
					onClick: () => U("retry"),
					children: J("catalog:shared.retryNow")
				}),
				children: L.message || J("catalog:javMetadata.progress", {
					completed: L.completed,
					count: L.total
				})
			}) : null,
			V.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: V.error
			}) : null,
			!W && !M.error && !ge.length ? /* @__PURE__ */ (0, $.jsx)(ee, {
				icon: T,
				title: J(r || d ? "catalog:javDiscover.noMatches" : "catalog:javDiscover.noTasteMatches"),
				actions: /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(l, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: J("catalog:javDiscover.viewTaste")
				}), r || d ? /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => {
						a(), f(""), Z({
							q: "",
							tag: ""
						});
					},
					children: J("catalog:shared.clearFilters")
				}) : s === "library" ? /* @__PURE__ */ (0, $.jsx)(l, {
					variant: "primary",
					size: "small",
					href: "/",
					children: J("catalog:entityPage.browseCollection")
				}) : /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					size: "small",
					onClick: () => n({}),
					children: J("catalog:javDiscover.findVideos")
				})] }),
				children: J(r || d ? "catalog:javDiscover.clearFiltersHint" : s === "library" ? "catalog:javDiscover.libraryEmptyHint" : "catalog:javDiscover.externalEmptyHint")
			}) : null,
			B.error ? /* @__PURE__ */ (0, $.jsx)(P, {
				tone: "error",
				children: B.error
			}) : null,
			/* @__PURE__ */ (0, $.jsx)("div", {
				"data-media-grid": "",
				className: se,
				style: { "--card-ratio": ae },
				children: ge.map((r) => {
					let a = lt(r.taste_score ?? r.score), o = [
						a.label,
						J("catalog:javScore.taste", { score: ze(r.taste_score ?? r.score) }),
						M.data?.ranking_method === "mmr" && r.ranking_score != null ? J("catalog:javScore.ranking", { score: ze(r.ranking_score) }) : "",
						r.source_score == null ? "" : J("catalog:javScore.siteRating", { rating: r.source_score.toFixed(1) }),
						...r.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, $.jsx)(Xt, {
						item: r,
						layout: O,
						javImage: D.value.javImage,
						readOnly: e,
						navigate: i,
						tag: d,
						onTag: S,
						wanting: B.busy === String(r.id),
						onWant: () => {
							B.run(String(r.id), (e) => xe({ code: r.code }, e), () => {
								t(J("catalog:javWant.added")), q(), M.refetch();
							});
						},
						onResource: () => n(qt(r)),
						badge: /* @__PURE__ */ (0, $.jsx)("button", {
							"data-jav-taste-score": "",
							type: "button",
							title: o,
							"aria-label": J("catalog:javScore.badgeLabel", {
								score: a.score,
								label: a.label
							}),
							className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
							children: /* @__PURE__ */ (0, $.jsx)(h, {
								color: a.color,
								children: a.label
							})
						})
					}, r.id);
				})
			})
		]
	});
}
export { un as JavPage };

//# debugId=de32eb8a-c390-4c10-90fe-bc4b2ce2d036