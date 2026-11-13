(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c74db8d2-148a-4ac3-8dc8-03739ae90735", e._sentryDebugIdIdentifier = "sentry-dbid-c74db8d2-148a-4ac3-8dc8-03739ae90735");
	} catch {}
})();
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as e, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as t, $b4f18e3395fe64d7$export$3e41faf802a29e71 as n, $b4f18e3395fe64d7$export$b2539bed5023c21c as r, Button as i, ButtonLink as a, Disclosure as o, E3 as s, EmptyState as c, FLOW_LABEL_X as l, FLOW_VIEWBOX as u, Gg as d, IDLE_POLL_MS as f, Input as p, M6 as m, MENU_ITEM as h, MENU_ITEM_INTERACTIVE as g, MENU_POPOVER_SURFACE as _, MenuDialog as v, Note as y, OV as b, Progress as x, Rf as S, SEGMENT as ee, SEGMENTED_TRACK as te, STAT_STRIP as ne, SegmentedTabList as re, Select$1 as ie, SelectItem as ae, StatCard as C, TASTE_REFRESH_KEY as oe, TASTE_WINDOWS as se, TaskProgress as ce, Wt as w, Xt as le, _8 as T, __toESM as ue, aB as de, avatarInner as fe, busyProps as E, cB as pe, cardClass as D, clsx as O, codedText as k, configureTasteBrowser as A, confirmModal as j, cx as M, errorMessage as N, f1 as me, fetchTaste as he, fetchTasteJob as ge, firstGrapheme as _e, flowGraph as ve, flowLabel as ye, fmtSize as be, g4 as xe, historySpan as Se, importTasteExport as Ce, jobText as we, joinList as Te, keepPreviousData as Ee, mM as De, pv as Oe, queryClient as P, r2 as ke, radarRows as Ae, rankDetail as je, rankShares as Me, removeTasteSource as Ne, require_jsx_runtime as Pe, require_react as Fe, serverLabel as Ie, serverLabelList as Le, siteMarkUrl as Re, startTasteRefresh as ze, statCardClass as Be, t as F, tasteDate as Ve, tasteDimensions as He, tasteHours as Ue, tasteKey as I, tasteRefetchInterval as We, tasteTime as Ge, topScores as Ke, uo as qe, useBackgroundJob as Je, useMutation as Ye, useQuery as Xe } from "./peach-app.js";
import { ActivityHeat as Ze, BAR_DOMAIN as Qe, ExpandableRanking as $e, PolarAngleAxis as et, Polygon as tt, barLabel as nt, selectPolarAxisScale as rt, selectPolarAxisTicks as L } from "./peach-app.expandable-ranking-msnIi2GJ.js";
import { LEGACY_AVATAR_IMG as it } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { Page as at } from "./peach-app.page-QAncjzM1.js";
import { ActivePoints as ot, AnimatedItems as st, CHART_CARD as ct, CHART_COLORS as lt, CartesianLabelListContextProvider as ut, CategoryTick as dt, ChartBackground as ft, ChartContainer as pt, ChartHead as mt, ChartLegend as ht, ChartLegendContent as gt, ChartTip as _t, ChartTooltip as vt, ChartTooltipContent as yt, DefaultZIndexes as bt, Dots as xt, EvilBarChart as St, LabelListFromLabelProp as Ct, Layer as R, LoadingIndicator as wt, PolarChart as Tt, PolarLabelContextProvider as Et, PolarLabelFromLabelProp as Dt, RegisterGraphicalItemId as Ot, SetPolarGraphicalItem as kt, SetPolarLegendPayload as At, SetTooltipEntrySettings as jt, Text as Mt, ZIndexLayer as Nt, adaptEventsOfChild as Pt, addRadiusAxis as Ft, arrayTooltipSearcher as It, categoryAxisWidth as Lt, cn as Rt, createSelector as z, defaultPolarChartProps as zt, defaultPolarRadiusAxisProps as Bt, fitLabel as Vt, getAxisTypeBasedOnLayout as Ht, getBandSizeOfAxis as Ut, getClassNameFromUnknown as Wt, getColorsCount as Gt, getTooltipNameProp as Kt, getValueByDataKey as qt, identity as Jt, interpolate as Yt, isArrayLike as Xt, isCategoricalAxis as Zt, isNullish as Qt, iteratee as $t, matchAnimationItems as en, matchByIndex as tn, noop as nn, polarToCartesian as B, removeRadiusAxis as rn, resolveDefaultProps as an, selectAngleAxis as on, selectChartDataAndAlwaysIgnoreIndexes as sn, selectChartLayout as cn, selectPolarViewBox as ln, selectRadiusAxis as un, selectUnfilteredPolarItems as dn, svgPropertiesAndEvents as fn, svgPropertiesNoEvents as V, svgPropertiesNoEventsFromUnknown as pn, tone as mn, useAnimationCallbacks as hn, useAnimationStartSnapshot as gn, useAppDispatch as _n, useAppSelector as H, useIsPanorama as vn, usePolarChartLayout as yn } from "./peach-app.chart-tip-CRxYp6KT.js";
import { BrowserIcon as bn } from "./peach-app.browser-icon-N9Od-bAf.js";
var xn = z([(e, t) => L(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), Sn = z([(e, t) => L(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), U = /* @__PURE__ */ ue(Fe()), Cn = [
	"gridType",
	"radialLines",
	"angleAxisId",
	"radiusAxisId",
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"polarAngles",
	"polarRadius",
	"zIndex"
];
function wn(e, t) {
	if (e == null) return {};
	var n, r, i = Tn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Tn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(null, arguments);
}
function En(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Dn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? En(Object(n), !0).forEach(function(t) {
			On(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : En(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function On(e, t, n) {
	return (t = kn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kn(e) {
	var t = An(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function An(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var jn = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = B(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, Mn = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = Dn({}, V(e));
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = B(t, n, r, e), o = B(t, n, i, e);
		return /*#__PURE__*/ U.createElement("line", W({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Nn = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = Dn({}, V(e));
	return /*#__PURE__*/ U.createElement("circle", W({}, i, {
		className: O("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, Pn = (e) => {
	var t = e.radius, n = Dn({}, V(e));
	return /*#__PURE__*/ U.createElement("path", W({}, n, {
		className: O("recharts-polar-grid-concentric-polygon", e.className),
		d: jn(t, e.cx, e.cy, e.polarAngles)
	}));
}, Fn = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ U.createElement(Nn, W({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ U.createElement(Pn, W({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ U.createElement(Nn, W({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ U.createElement(Pn, W({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, In = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: bt.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, Ln = (e) => {
	var t = an(e, In), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = wn(t, Cn), m = H(ln), h = H((e) => xn(e, i)), g = H((e) => Sn(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = Dn({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ U.createElement(Nt, { zIndex: y.zIndex }, /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ U.createElement(Fn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ U.createElement(Mn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
Ln.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function Rn(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function zn(e, t = Jt) {
	if (e == null) return;
	let n = Rn(e);
	if (n.length === 0) return;
	let r = $t(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function Bn(e, t = Jt) {
	if (e == null) return;
	let n = Rn(e);
	if (n.length === 0) return;
	let r = $t(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var Vn = ["type"], Hn = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], Un = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function G() {
	return G = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, G.apply(null, arguments);
}
function Wn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function K(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wn(Object(n), !0).forEach(function(t) {
			Gn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Gn(e, t, n) {
	return (t = Kn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kn(e) {
	var t = qn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Jn(e, t) {
	if (e == null) return {};
	var n, r, i = Yn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Yn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Xn = "radiusAxis";
function Zn(e) {
	var t = _n(), n = yn(), r = (0, U.useMemo)(() => {
		var t = e.type, r = Jn(e, Vn), i = Ht(n, "radiusAxis", t);
		if (i != null) return K(K({}, r), {}, { type: i });
	}, [e, n]);
	return (0, U.useEffect)(() => r == null ? nn : (t(Ft(r)), () => {
		t(rn(r));
	}), [t, r]), null;
}
var Qn = (e, t, n, r) => {
	var i = e.coordinate;
	return B(n, r, i, t);
}, $n = (e) => {
	var t;
	switch (e) {
		case "left":
			t = "end";
			break;
		case "right":
			t = "start";
			break;
		default: t = "middle";
	}
	return t;
}, er = (e, t, n, r) => {
	var i = zn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: Bn(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, tr = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = Jn(e, Hn), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = B(n, r, s[0], i), l = B(n, r, s[1], i), u = K(K(K({}, V(o)), {}, { fill: "none" }, V(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ U.createElement("line", G({ className: "recharts-polar-radius-axis-line" }, u));
}, nr = (e, t, n) => /*#__PURE__*/ U.isValidElement(e) ? /*#__PURE__*/ U.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ U.createElement(Mt, G({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), rr = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = Jn(e, Un), s = $n(e.orientation), c = V(o), l = pn(a), u = t.map((t, o) => {
		var u = Qn(t, e.angle, e.cx, e.cy), d = K(K(K(K({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ U.createElement(R, G({
			className: O("recharts-polar-radius-axis-tick", Wt(a)),
			key: `tick-${t.coordinate}`
		}, Pt(e, t, o)), nr(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ U.createElement(R, { className: "recharts-polar-radius-axis-ticks" }, u);
}, ir = (e) => {
	var t = e.radiusAxisId, n = H(ln), r = H((e) => rt(e, "radiusAxis", t)), i = H((e) => L(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = K(K({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ U.createElement(Nt, { zIndex: a.zIndex }, /*#__PURE__*/ U.createElement(R, { className: O("recharts-polar-radius-axis", Xn, a.className) }, s && tr(a, i), o && rr(a, i), /*#__PURE__*/ U.createElement(Et, er(a.angle, a.cx, a.cy, i), /*#__PURE__*/ U.createElement(Dt, { label: a.label }), a.children)));
};
function ar(e) {
	var t = an(e, Bt);
	return /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(Zn, {
		domain: t.domain,
		id: t.radiusAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDataOverflow: t.allowDataOverflow,
		reversed: t.reversed,
		includeHidden: t.includeHidden,
		allowDecimals: t.allowDecimals,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tickCount: t.tickCount,
		tick: t.tick
	}), /*#__PURE__*/ U.createElement(ir, t));
}
ar.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function or(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function sr(e) {
	if (Xt(e) && e.length !== 0) return or(Rn(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function cr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function lr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? cr(Object(n), !0).forEach(function(t) {
			ur(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ur(e, t, n) {
	return (t = dr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function dr(e) {
	var t = fr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function fr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var pr = (e, t) => rt(e, "radiusAxis", t), mr = z([pr], (e) => {
	if (e != null) return { scale: e };
}), hr = z([un, pr], (e, t) => {
	if (e != null && t != null) return lr(lr({}, e), {}, { scale: t });
}), gr = (e, t, n, r) => L(e, "radiusAxis", t, r), _r = (e, t, n) => on(e, n), vr = (e, t, n) => rt(e, "angleAxis", n), yr = z([_r, vr], (e, t) => {
	if (e != null && t != null) return lr(lr({}, e), {}, { scale: t });
}), br = (e, t, n, r) => L(e, "angleAxis", n, r), xr = z([
	_r,
	vr,
	ln
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), Sr = (e, t, n, r, i) => i, Cr = z([
	cn,
	hr,
	gr,
	yr,
	br
], (e, t, n, r, i) => Zt(e, "radiusAxis") ? Ut(t, n, !1) : Ut(r, i, !1)), wr = z([dn, Sr], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), Tr = z([
	mr,
	xr,
	sn,
	wr,
	Cr
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return Lr({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), Er = ["id"];
function q() {
	return q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, q.apply(null, arguments);
}
function Dr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function J(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Dr(Object(n), !0).forEach(function(t) {
			Or(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Or(e, t, n) {
	return (t = kr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kr(e) {
	var t = Ar(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ar(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function jr(e, t) {
	if (e == null) return {};
	var n, r, i = Mr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Mr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Nr(e, t) {
	return e && e !== "none" ? e : t;
}
var Pr = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: Nr(r, i),
		value: Kt(n, t),
		payload: e
	}];
}, Fr = /*#__PURE__*/ U.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: nn,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: Kt(a, t),
			hide: o,
			type: s,
			color: Nr(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ U.createElement(jt, { tooltipEntrySettings: l });
});
function Ir(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = jr(n, Er), o = V(a);
	return /*#__PURE__*/ U.createElement(xt, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function Lr(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = qt(e, n.dataKey, r), d = qt(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? sr(d) : d, m = Qt(p) ? 0 : t.scale.map(p) ?? 0;
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(J(J({}, B(o, s, m, f)), {}, {
			name: a,
			value: d,
			cx: o,
			cy: s,
			radius: m,
			angle: f,
			payload: e
		}));
	});
	var d = [];
	return c && l.forEach((e) => {
		if (Array.isArray(e.value)) {
			var n = e.value[0], r = Qt(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(J(J({}, e), {}, { radius: r }, B(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Rr(e) {
	var t = e.showLabels, n = e.points, r = e.children, i = n.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return J(J({}, t), {}, {
			value: e.value ?? "",
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ U.createElement(ut, { value: t ? i : void 0 }, r);
}
function zr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ U.isValidElement(i) ? /*#__PURE__*/ U.cloneElement(i, J(J({}, r), {}, { points: t })) : typeof i == "function" ? i(J(J({}, r), {}, { points: t })) : /*#__PURE__*/ U.createElement(tt, q({}, fn(r), {
		onMouseEnter: (e) => {
			var t = r.onMouseEnter;
			t && t(r, e);
		},
		onMouseLeave: (e) => {
			var t = r.onMouseLeave;
			t && t(r, e);
		},
		points: t,
		baseLinePoints: a ? n : void 0,
		connectNulls: o
	}));
	return /*#__PURE__*/ U.createElement(R, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ U.createElement(Ir, {
		props: r,
		points: t
	}));
}
var Br = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [J(J({}, e.next), {}, {
	x: Yt(e.prev.x, e.next.x, t),
	y: Yt(e.prev.y, e.next.y, t)
})] : [J(J({}, e.next), {}, {
	x: Yt(e.next.cx, e.next.x, t),
	y: Yt(e.next.cy, e.next.y, t)
})]);
function Vr(e) {
	var t = e.props, n = e.previousPointsRef, r = e.previousBaseLinePointsRef, i = t.points, a = t.baseLinePoints, o = t.isAnimationActive, s = t.animationBegin, c = t.animationDuration, l = t.animationEasing, u = t.animationMatchBy, d = t.animationInterpolateFn, f = t.onAnimationStart, p = t.onAnimationEnd, m = gn(t, r), h = m.startValue, g = en(h ?? null, a, u), _ = hn(f, p), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = yn();
	return x == null ? null : /*#__PURE__*/ U.createElement(Rr, {
		showLabels: !v,
		points: i
	}, /*#__PURE__*/ U.createElement(st, {
		animationInput: t,
		animationIdPrefix: "recharts-radar-",
		items: i,
		previousItemsRef: n,
		isAnimationActive: o,
		animationBegin: s,
		animationDuration: c,
		animationEasing: l,
		onAnimationStart: y,
		onAnimationEnd: b,
		animationInterpolateFn: d,
		animationMatchBy: u,
		layout: x
	}, (e, n) => {
		var r = n === 1 ? a : d(g, n, x);
		return m.syncStepValue(r, n), /*#__PURE__*/ U.createElement(zr, {
			points: e,
			baseLinePoints: r,
			props: t
		});
	}), /*#__PURE__*/ U.createElement(Ct, { label: t.label }), t.children);
}
function Hr(e) {
	var t = (0, U.useRef)(void 0), n = (0, U.useRef)(void 0);
	return /*#__PURE__*/ U.createElement(Vr, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var Ur = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: tn,
	animationInterpolateFn: Br,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: bt.area
};
function Wr(e) {
	var t = e.hide, n = e.className, r = e.points;
	if (t) return null;
	var i = O("recharts-radar", n);
	return /*#__PURE__*/ U.createElement(Nt, { zIndex: e.zIndex }, /*#__PURE__*/ U.createElement(R, { className: i }, /*#__PURE__*/ U.createElement(Hr, e)), /*#__PURE__*/ U.createElement(ot, {
		points: r,
		mainColor: Nr(e.stroke, e.fill),
		itemDataKey: e.dataKey,
		activeDot: e.activeDot
	}));
}
function Gr(e) {
	var t = vn(), n = H((n) => Tr(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ U.createElement(Wr, q({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Kr(e) {
	var t = an(e, Ur);
	return /*#__PURE__*/ U.createElement(Ot, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(kt, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ U.createElement(At, { legendPayload: Pr(t) }), /*#__PURE__*/ U.createElement(Fr, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ U.createElement(Gr, q({}, t, { id: e }))));
}
Kr.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function qr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Jr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? qr(Object(n), !0).forEach(function(t) {
			Yr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Yr(e, t, n) {
	return (t = Xr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Xr(e) {
	var t = Zr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Zr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Qr = ["axis"], $r = Jr(Jr({}, zt), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), ei = /*#__PURE__*/ (0, U.forwardRef)((e, t) => {
	var n = an(e, $r);
	return /*#__PURE__*/ U.createElement(Tt, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Qr,
		tooltipPayloadSearcher: It,
		categoricalChartProps: n,
		ref: t
	});
}), Y = Pe(), ti = U.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = U.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ (0, Y.jsx)(ri, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ (0, Y.jsx)(ii, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ (0, Y.jsx)(ni, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), ni = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
	className: a,
	mask: o ? `url(#${o})` : void 0,
	children: [/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)("clipPath", {
		id: `dot-clip-${n}`,
		children: /* @__PURE__ */ (0, Y.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3
		})
	}) }), /* @__PURE__ */ (0, Y.jsx)("rect", {
		x: "0",
		y: t - 3,
		width: "100%",
		height: 6,
		fill: i,
		fillOpacity: r,
		clipPath: `url(#dot-clip-${n})`
	})]
}));
ni.displayName = "DefaultDot";
var ri = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
	className: Rt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, Y.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6
			})
		}) }),
		/* @__PURE__ */ (0, Y.jsx)("circle", {
			cx: e,
			cy: t,
			r: 6,
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, Y.jsx)("rect", {
			x: "0",
			y: t - (6 - 5 / 2),
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-inner-${n})`
		}),
		/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)("clipPath", {
			id: `dot-clip-inner-${n}`,
			children: /* @__PURE__ */ (0, Y.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6 - 5 / 2
			})
		}) })
	]
}));
ri.displayName = "PrimaryBorderDot";
var ii = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
	className: Rt(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, Y.jsx)("circle", {
				cx: e,
				cy: t,
				r: 3.5
			})
		}) }),
		/* @__PURE__ */ (0, Y.jsx)("rect", {
			x: "0",
			y: t - 3 - 1 / 2,
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-${n})`
		}),
		/* @__PURE__ */ (0, Y.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3 - 1 / 2,
			fill: "currentColor"
		})
	]
}));
ii.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var ai = 1, oi = .3, si = 6, ci = 1500, li = "value", ui = (0, U.createContext)(null);
function X() {
	let e = (0, U.use)(ui);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Z({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: o = null, onSelectionChange: s, isLoading: c = !1, loadingPoints: l }) {
	let u = (0, U.useId)().replace(/:/g, ""), [d, f] = (0, U.useState)(o), p = Ei(c, l), m = (0, U.useCallback)((e) => {
		f(e), s?.(e);
	}, [s]), h = (0, U.useMemo)(() => ({
		config: e,
		isLoading: c,
		selectedDataKey: d,
		selectDataKey: m
	}), [
		e,
		c,
		d,
		m
	]);
	return /* @__PURE__ */ (0, Y.jsx)(ui, {
		value: h,
		children: /* @__PURE__ */ (0, Y.jsxs)(pt, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ (0, Y.jsx)(wt, { isLoading: c }), /* @__PURE__ */ (0, Y.jsxs)(ei, {
				id: u,
				data: c ? p : t,
				...i,
				children: [
					a && /* @__PURE__ */ (0, Y.jsx)(ft, { variant: a }),
					n,
					c && /* @__PURE__ */ (0, Y.jsx)(Di, {})
				]
			})]
		})
	});
}
function di({ dataKey: e, variant: t = "filled", fillOpacity: n = oi, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = X(), d = (0, U.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = yi(a, d, e, p.dot);
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(Kr, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: ai,
		fill: m ? `url(#${d}-radar-fill-${e})` : "none",
		fillOpacity: m ? n * p.fill : 0,
		dot: h,
		activeDot: g,
		filter: r ? `url(#${d}-radar-glow-${e})` : void 0,
		className: "transition-opacity duration-200",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: () => {
			i && u(l === e ? null : e);
		},
		...o
	}), /* @__PURE__ */ (0, Y.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, Y.jsx)(xi, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ (0, Y.jsx)(Si, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ (0, Y.jsx)(Ci, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ (0, Y.jsx)(wi, {
			id: d,
			dataKey: e
		})
	] })] });
}
var fi = () => null, pi = () => null;
function mi({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ (0, Y.jsx)(Ln, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function hi({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = X();
	return r ? null : /* @__PURE__ */ (0, Y.jsx)(et, {
		tick: e,
		tickLine: t,
		...n
	});
}
function gi({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = X();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(ar, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function _i({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = X();
	return r ? null : /* @__PURE__ */ (0, Y.jsx)(vt, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, Y.jsx)(yt, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function vi({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = X();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(ht, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Y.jsx)(gt, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var yi = (e, t, n, r) => {
	let i = !1, a = !1;
	return U.Children.forEach(e, (e) => {
		if ((0, U.isValidElement)(e)) {
			if (e.type === fi) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ (0, Y.jsx)(ti, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === pi) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ (0, Y.jsx)(ti, {
					type: i,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
		}
	}), {
		dot: i,
		activeDot: a
	};
}, bi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("stop", {
	offset: "0%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[0]
}), /* @__PURE__ */ (0, Y.jsx)("stop", {
	offset: "100%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[n.length - 1]
})] }) : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: Array.from({ length: t }, (r, i) => {
	let a = `${i / (t - 1) * 100}%`;
	return /* @__PURE__ */ (0, Y.jsx)("stop", {
		offset: a,
		stopColor: `var(--color-${e}-${i}, var(--color-${e}-0))`,
		stopOpacity: n?.[i]
	}, a);
}) }), xi = ({ id: e, dataKey: t, config: n }) => {
	let r = Gt(n[t] ?? {});
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ (0, Y.jsx)(bi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, Si = ({ id: e, dataKey: t, config: n }) => {
	let r = Gt(n[t] ?? {});
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ (0, Y.jsx)(bi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, Ci = ({ id: e, dataKey: t, config: n }) => {
	let r = Gt(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ (0, Y.jsx)("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ (0, Y.jsx)(bi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, wi = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, Y.jsxs)("filter", {
	id: `${e}-radar-glow-${t}`,
	x: "-50%",
	y: "-50%",
	width: "200%",
	height: "200%",
	children: [
		/* @__PURE__ */ (0, Y.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "4",
			result: "blur"
		}),
		/* @__PURE__ */ (0, Y.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, Y.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, Y.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, Y.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}), Ti = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[li]: 30 + Math.random() * 70
}));
function Ei(e, t = si) {
	let [n, r] = (0, U.useState)(0);
	return (0, U.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, ci);
		return () => clearInterval(t);
	}, [e]), (0, U.useMemo)(() => Ti(t), [t, n]);
}
var Di = () => /* @__PURE__ */ (0, Y.jsx)(Kr, {
	dataKey: li,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: ci,
	animationEasing: "ease-in-out"
});
Z.Radar = di, Z.Dot = fi, Z.ActiveDot = pi, Z.PolarGrid = mi, Z.PolarAngleAxis = hi, Z.PolarRadiusAxis = gi, Z.Tooltip = _i, Z.Legend = vi;
// src/react/taste/charts.tsx
function Oi(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ (0, Y.jsxs)("g", { children: [/* @__PURE__ */ (0, Y.jsx)("title", { children: o }), /* @__PURE__ */ (0, Y.jsx)(Mt, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: Vt(o, c - 4)
	})] });
}
var ki = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], Ai = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], ji = { value: {
	label: F("manage:tasteCharts.tagOccurrences"),
	colors: mn(lt[3])
} }, Mi = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], Ni = 26, Pi = { radius: ji.value }, Fi = (e, t) => Math.sqrt(e / t);
function Ii({ rows: e, label: t }) {
	let n = Ae(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: Fi(e.value, r)
	}));
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		role: "img",
		"aria-label": F("manage:tasteCharts.radarSummary", {
			label: t,
			items: Te(i.map((e) => e.name))
		}),
		children: /* @__PURE__ */ (0, Y.jsxs)(Z, {
			data: i,
			config: Pi,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarGrid, {}),
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ (0, Y.jsx)(Oi, {})
				}),
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ (0, Y.jsx)(Z.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ (0, Y.jsx)(_t, { valueKey: "value" })
			]
		})
	});
}
function Li({ rows: e, label: t }) {
	let n = Ke(e, 8);
	return n.length ? /* @__PURE__ */ (0, Y.jsx)("section", {
		"aria-label": t,
		className: `flex grow flex-col ${Mi[n.length]}`,
		children: /* @__PURE__ */ (0, Y.jsxs)(St, {
			data: n,
			config: ji,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: Ni,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(St.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, Y.jsx)(dt, { along: "y" }),
					width: Lt(n.map((e) => e.name))
				}),
				/* @__PURE__ */ (0, Y.jsx)(St.XAxis, {
					hide: !0,
					domain: Qe
				}),
				/* @__PURE__ */ (0, Y.jsx)(St.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: nt("right")
					}
				}),
				/* @__PURE__ */ (0, Y.jsx)(_t, {})
			]
		})
	}) : null;
}
function Ri({ flows: e }) {
	let [t, n] = (0, U.useState)(null), r = ve(e);
	if (!r) return null;
	let i = t?.node ?? null, a = (e, n) => t ? i === null ? t.label === n : e.source === i || e.target === i : !0;
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: ct,
		children: [
			/* @__PURE__ */ (0, Y.jsx)(mt, {
				title: F("manage:tasteCharts.creatorLeadSources"),
				figure: (t ? t.value : r.total).toLocaleString(),
				note: t ? t.label : F("manage:tasteCharts.leadsUnit", { count: r.total })
			}),
			/* @__PURE__ */ (0, Y.jsx)("ol", {
				"aria-label": F("manage:tasteCharts.sitesAndCreatorLeads"),
				className: "flex flex-col sm:hidden",
				children: [...r.links].sort((e, t) => t.value - e.value).map((e) => /* @__PURE__ */ (0, Y.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 border-b border-separator-border py-2 text-body-2-regular text-text-primary last:border-b-0",
					children: [/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "min-w-0 wrap-anywhere",
						children: e.label
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "shrink-0 tabular-nums",
						children: e.value.toLocaleString()
					})]
				}, e.key))
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "min-w-0 max-sm:hidden",
				children: /* @__PURE__ */ (0, Y.jsxs)("svg", {
					viewBox: `0 0 ${u.width} ${r.height}`,
					fill: "none",
					role: "img",
					"aria-label": F("manage:tasteCharts.sitesAndCreatorLeads"),
					className: "block h-auto w-full",
					onPointerLeave: () => n(null),
					children: [/* @__PURE__ */ (0, Y.jsx)("g", { children: r.links.map((e) => /* @__PURE__ */ (0, Y.jsx)("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": F("manage:tasteCharts.leadCount", {
							name: e.label,
							count: e.value
						}),
						fillOpacity: 0,
						strokeOpacity: a(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${ki[e.color]}`,
						onPointerEnter: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onFocus: () => n({
							value: e.value,
							label: e.label,
							node: null
						}),
						onBlur: () => n(null)
					}, e.key)) }), /* @__PURE__ */ (0, Y.jsx)("g", { children: r.nodes.map((e) => /* @__PURE__ */ (0, Y.jsxs)("g", {
						tabIndex: 0,
						role: "img",
						"aria-label": F("manage:tasteCharts.leadCount", {
							name: e.name,
							count: e.value
						}),
						className: "outline-none focus-visible:opacity-100",
						onPointerEnter: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onFocus: () => n({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onBlur: () => n(null),
						children: [/* @__PURE__ */ (0, Y.jsx)("rect", {
							x: e.x,
							y: e.y,
							width: 10,
							height: e.height,
							rx: 5,
							className: e.side === "source" ? Ai[e.color] : "fill-text-secondary"
						}), /* @__PURE__ */ (0, Y.jsxs)("text", {
							x: l[e.side],
							y: e.y + e.height / 2,
							textAnchor: e.side === "source" ? "end" : "start",
							dominantBaseline: "middle",
							className: "fill-text-secondary text-caption-1-regular",
							children: [ye(e.name), /* @__PURE__ */ (0, Y.jsx)("tspan", {
								x: l[e.side],
								dy: 15,
								children: e.side === "source" ? e.value.toLocaleString() : `${e.share.toFixed(1)}%`
							})]
						})]
					}, e.id)) })]
				})
			}),
			/* @__PURE__ */ (0, Y.jsxs)("footer", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary max-sm:hidden",
				children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: F("manage:tasteCharts.sourceSites") }), /* @__PURE__ */ (0, Y.jsx)("span", { children: F("manage:tasteCharts.creatorsLeadShare") })]
			})
		]
	});
}
// src/react/taste/browser-sources.tsx
var zi = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function Bi({ browsers: e, sources: t, range: n, children: r }) {
	let [a, o] = (0, U.useState)(!1), [s, c] = (0, U.useState)(""), [l, u] = (0, U.useState)(""), f = Ye({
		mutationFn: (e) => A(e, n),
		onSuccess: (e) => {
			P.setQueryData(I(n), e.dashboard), o(!1), c(""), u("");
		}
	});
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: `${D()} flex flex-col gap-4`,
		"aria-label": F("manage:tasteSources.dataSources"),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
					className: "text-title-2-medium text-text-primary",
					children: F("manage:tasteSources.dataSources")
				}), /* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					onClick: () => o(!0),
					disabled: a,
					children: F("manage:tasteSources.addBrowser")
				})]
			}),
			f.error ? /* @__PURE__ */ (0, Y.jsx)(y, {
				tone: "error",
				children: N(f.error)
			}) : null,
			a ? /* @__PURE__ */ (0, Y.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault(), f.isPending || f.mutate({
						operation: "add",
						name: s,
						path: l
					});
				},
				children: [
					/* @__PURE__ */ (0, Y.jsx)(p, {
						label: F("manage:tasteSources.browserName"),
						value: s,
						onChange: c,
						maxLength: 80,
						isRequired: !0,
						isDisabled: f.isPending
					}),
					/* @__PURE__ */ (0, Y.jsx)(p, {
						label: F("manage:tasteSources.profilePath"),
						value: l,
						onChange: u,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: f.isPending,
						hint: F("manage:tasteSources.profilePathHint")
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, Y.jsx)(i, {
							variant: "ghost",
							disabled: f.isPending,
							onClick: () => {
								o(!1), f.reset();
							},
							children: F("manage:shared.cancel")
						}), /* @__PURE__ */ (0, Y.jsx)(i, {
							type: "submit",
							variant: "secondary",
							disabled: !s.trim() || !l.trim(),
							...E(f.isPending),
							children: F("manage:shared.add")
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "inline-grid w-full min-w-0 gap-2 sm:grid-cols-2",
				children: [r, e.map((e) => {
					let n = t.filter((t) => e.source_keys?.includes(t.source_key)), r = n.reduce((e, t) => e + (t.visits || 0), 0), a = n.reduce((e, t) => e + (t.bookmarks || 0), 0);
					return /* @__PURE__ */ (0, Y.jsxs)("div", {
						"data-taste-source": "browser",
						className: zi,
						children: [
							/* @__PURE__ */ (0, Y.jsx)("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ (0, Y.jsx)(bn, { name: e.name })
							}),
							/* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex min-w-0 grow flex-col gap-0.5",
								children: [
									/* @__PURE__ */ (0, Y.jsx)("b", {
										className: "text-body-2-medium break-words text-text-primary",
										children: e.name
									}),
									/* @__PURE__ */ (0, Y.jsx)("span", {
										className: "break-all text-caption-1-regular text-text-secondary",
										children: e.path
									}),
									/* @__PURE__ */ (0, Y.jsx)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: e.enabled ? e.available ? F("manage:tasteSources.profileCount", { count: e.profiles }) : F("manage:tasteSources.profileUnavailable") : F("manage:tasteSources.readingStopped")
									}),
									n.length ? /* @__PURE__ */ (0, Y.jsxs)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											F("manage:tasteSources.historyCount", { count: r }),
											" · ",
											F("manage:tasteSources.bookmarkCount", { count: a })
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, Y.jsxs)("span", {
								className: "flex shrink-0 gap-1",
								children: [/* @__PURE__ */ (0, Y.jsx)(i, {
									variant: "secondary",
									size: "small",
									...E(f.isPending),
									iconOnly: !0,
									leadingIcon: e.enabled ? b : d,
									"aria-label": `${e.enabled ? F("manage:tasteSources.stopReading") : F("manage:customSources.enable")} ${e.name}`,
									onClick: () => {
										e.enabled ? j({
											title: F("manage:tasteSources.stopReadingTitle", { browser: e.name }),
											body: F("manage:tasteSources.stopReadingBody"),
											confirmLabel: F("manage:tasteSources.stopReading"),
											onConfirm: () => f.mutateAsync({
												operation: "disable",
												id: e.id
											})
										}) : f.mutate({
											operation: "enable",
											id: e.id
										});
									}
								}), /* @__PURE__ */ (0, Y.jsx)(i, {
									variant: "secondary",
									size: "small",
									iconOnly: !0,
									leadingIcon: m,
									...E(f.isPending),
									"aria-label": F("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
									onClick: () => {
										j({
											title: F("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
											body: F("manage:tasteSources.deleteBrowserBody"),
											confirmLabel: F("manage:tasteSources.deleteBrowser"),
											danger: !0,
											onConfirm: () => f.mutateAsync({
												operation: "delete_browser",
												id: e.id
											})
										});
									}
								})]
							})
						]
					}, e.id);
				})]
			})
		]
	});
}
// src/react/taste/taste-page.tsx
var Vi = 10, Hi = M(h, g, "text-body-2-medium"), Q = `${D()} flex flex-col gap-4`, Ui = "rounded-xl bg-background-primary-default p-3", Wi = F("manage:taste.readHistoryTooltip"), Gi = F("manage:taste.noSourceHint"), Ki = F("manage:taste.noLeadHint"), qi = F("manage:taste.noCategoryHint"), Ji = F("manage:taste.gapHint"), Yi = F("manage:taste.noBrowserTagHint"), Xi = F("manage:taste.noBrowserCreatorHint"), Zi = F("manage:taste.noDomainHint"), Qi = F("manage:taste.noPeachTagHint"), $i = F("manage:taste.noPeachCreatorHint"), ea = F("manage:taste.noPeachActressHint"), ta = F("manage:taste.guideLocal"), na = F("manage:taste.guideRemote"), ra = F("manage:taste.guideRefresh"), ia = F("manage:taste.removeSourceBody"), aa = "peach-taste-guide-dismissed", oa = "\0", sa = (e, t) => {
	let [n = "", r = ""] = e.split(oa);
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
		n,
		t,
		r
	] });
}, ca = (0, U.createContext)(/* @__PURE__ */ (0, Y.jsx)(a, {
	size: "small",
	href: "/",
	children: F("manage:shared.browseCollection")
}));
function la() {
	return (0, U.useContext)(ca);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: Be(),
		children: /* @__PURE__ */ (0, Y.jsx)(C, {
			label: t,
			icon: e,
			accent: a,
			figure: n,
			footer: /* @__PURE__ */ (0, Y.jsx)("span", {
				className: "block min-w-0 truncate",
				title: i || r,
				children: r ?? ""
			})
		})
	});
}
function ua({ name: e, domain: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [_e(e).toUpperCase(), /* @__PURE__ */ (0, Y.jsx)("img", {
			src: Re({ domain: t }),
			alt: "",
			loading: "lazy",
			width: 20,
			height: 20,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute size-5 object-contain"
		})]
	});
}
function da({ html: e }) {
	return /* @__PURE__ */ (0, Y.jsx)("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${it}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function fa({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ (0, Y.jsx)(c, {
		size: "compact",
		icon: Oe,
		title: F("manage:taste.notEnoughData"),
		actions: /* @__PURE__ */ (0, Y.jsx)(la, {}),
		children: r
	});
	let a = Me(e);
	return /* @__PURE__ */ (0, Y.jsx)($e, {
		previewCount: Vi,
		className: "inline-grid w-full gap-x-7 gap-y-2 sm:grid-cols-2",
		children: e.map((e, r) => {
			let o = !!t && !!e.peach_items, s = String(e.source_domain || ""), c = /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
				/* @__PURE__ */ (0, Y.jsx)("svg", {
					viewBox: "0 0 100 1",
					preserveAspectRatio: "none",
					"aria-hidden": !0,
					className: "absolute inset-0 -z-10 size-full overflow-hidden rounded-lg opacity-15",
					children: /* @__PURE__ */ (0, Y.jsx)("rect", {
						width: a[r],
						height: 1,
						className: "fill-chart-4"
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
					children: r + 1
				}),
				n === "domain" ? /* @__PURE__ */ (0, Y.jsx)(ua, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ (0, Y.jsx)(ua, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ (0, Y.jsx)(da, { html: fe(e.name, e.entity_id ? {
					id: e.entity_id,
					has_image: !!e.has_image,
					image_version: e.image_version,
					avatar_focus: e.avatar_focus,
					avatar_stand_in: e.avatar_stand_in
				} : null, e.has_avatar ? e.representative_asset_id ?? null : null, n === "creator" ? "creator" : t || "performer") }) : null,
				/* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Y.jsx)("b", {
						className: "min-w-0 text-body-medium break-words text-text-primary",
						children: e.name
					}), /* @__PURE__ */ (0, Y.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: je(e)
					})]
				}),
				o ? /* @__PURE__ */ (0, Y.jsx)(ke, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-text-tertiary"
				}) : null
			] }), l = "relative isolate flex min-h-11 w-full min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left";
			return /* @__PURE__ */ (0, Y.jsx)("li", {
				className: "min-w-0",
				children: o ? /* @__PURE__ */ (0, Y.jsx)("button", {
					type: "button",
					onClick: () => i(t, e.name),
					className: `${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: c
				}) : /* @__PURE__ */ (0, Y.jsx)("div", {
					className: l,
					children: c
				})
			}, `${e.name}:${r}`);
		})
	});
}
function pa({ label: e, panels: i, onSignal: a }) {
	return /* @__PURE__ */ (0, Y.jsxs)(r, {
		className: `${D({ padding: "none" })} flex flex-col`,
		children: [/* @__PURE__ */ (0, Y.jsx)("div", {
			className: "px-4 pt-3",
			children: /* @__PURE__ */ (0, Y.jsx)(re, {
				"aria-label": e,
				className: te,
				children: i.map((e) => /* @__PURE__ */ (0, Y.jsx)(n, {
					id: e.id,
					className: ee,
					children: e.name
				}, e.id))
			})
		}), i.map((e) => /* @__PURE__ */ (0, Y.jsx)(t, {
			id: e.id,
			className: "px-4 pt-3.5 pb-4",
			children: /* @__PURE__ */ (0, Y.jsx)(fa, {
				...e.props,
				onSignal: a
			})
		}, e.id))]
	});
}
function ma({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, o = [...(r.explore || []).map((e) => ({
		key: `tag:${e.tag}`,
		title: k(e, "title"),
		detail: k(e, "detail"),
		act: () => t("tag", e.tag)
	})), ...(r.next_steps || []).map((e) => ({
		key: `route:${e.route}`,
		title: k(e, "title"),
		detail: k(e, "detail"),
		act: () => n(e.route)
	}))];
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: Q,
		"aria-label": F("manage:taste.summary"),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: F("manage:taste.summary")
					}),
					/* @__PURE__ */ (0, Y.jsx)("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: k(r, "headline")
					}),
					/* @__PURE__ */ (0, Y.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ (0, Y.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: k(i, "label") || F("manage:taste.stillLearning")
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: `flex min-w-0 flex-col gap-1 ${Ui}`,
					children: [/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: k(e, "label")
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: k(e, "text")
					})]
				}, e.label))
			}) : null,
			o.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex flex-col gap-2",
				children: o.map((e) => /* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${Ui} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ (0, Y.jsx)("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ (0, Y.jsx)(ke, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ (0, Y.jsx)(c, {
				size: "compact",
				icon: Oe,
				title: F("manage:taste.nothingToExplore"),
				actions: /* @__PURE__ */ (0, Y.jsx)(a, {
					size: "small",
					href: "/",
					children: F("manage:shared.browseCollection")
				}),
				children: Ki
			})
		]
	});
}
function ha({ onboarding: e, done: t }) {
	let [n, r] = (0, U.useState)(() => {
		try {
			return localStorage.getItem(aa) === "1";
		} catch {
			return !1;
		}
	});
	return t || n ? null : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: D({
			padding: "none",
			className: "p-4"
		}),
		children: /* @__PURE__ */ (0, Y.jsxs)(o, {
			summary: F("manage:taste.importGuide"),
			defaultOpen: e,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ta
				}),
				/* @__PURE__ */ (0, Y.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: na
				}),
				/* @__PURE__ */ (0, Y.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ (0, Y.jsx)("li", { children: sa(F("manage:taste.guideChrome", { link: oa }), /* @__PURE__ */ (0, Y.jsxs)("a", {
						href: "https://takeout.google.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-text-primary underline-offset-4 hover:underline",
						children: ["Google Takeout", /* @__PURE__ */ (0, Y.jsx)(w, {
							"aria-hidden": !0,
							className: "size-(--icon-inline) shrink-0"
						})]
					})) }), /* @__PURE__ */ (0, Y.jsx)("li", { children: sa(F("manage:taste.guideOther", { link: oa }), /* @__PURE__ */ (0, Y.jsxs)("a", {
						href: "https://github.com/purarue/browserexport",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-text-primary underline-offset-4 hover:underline",
						children: ["browserexport", /* @__PURE__ */ (0, Y.jsx)(w, {
							"aria-hidden": !0,
							className: "size-(--icon-inline) shrink-0"
						})]
					})) })]
				}),
				/* @__PURE__ */ (0, Y.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ra
				}),
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "self-start",
					children: /* @__PURE__ */ (0, Y.jsx)(i, {
						variant: "secondary",
						size: "small",
						onClick: () => {
							try {
								localStorage.setItem(aa, "1");
							} catch {}
							r(!0);
						},
						children: F("manage:shared.skip")
					})
				})
			]
		})
	});
}
function ga({ busy: t, onRefresh: n, onImport: r, onImportBookmarks: a }) {
	let o = (0, U.useRef)(null), [c, l] = (0, U.useState)(!1), u = (e) => {
		l(!1), e();
	};
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
		"data-guide-target": "history-import",
		"data-button-group": !0,
		"data-split-button": !0,
		"data-variant": "primary",
		children: [/* @__PURE__ */ (0, Y.jsx)(i, {
			leadingIcon: s,
			title: Wi,
			onClick: n,
			...E(t),
			children: F("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, Y.jsx)(i, {
			ref: o,
			iconOnly: !0,
			leadingIcon: me,
			"aria-label": F("manage:taste.moreHistoryOptions"),
			"aria-haspopup": "dialog",
			"aria-expanded": c,
			...E(t),
			onClick: () => {
				t || l(!0);
			}
		})]
	}), /* @__PURE__ */ (0, Y.jsx)(e, {
		triggerRef: o,
		isOpen: c,
		onOpenChange: l,
		placement: "bottom end",
		offset: 4,
		className: _,
		children: /* @__PURE__ */ (0, Y.jsxs)(v, {
			"aria-label": F("manage:taste.moreHistoryOptions"),
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Hi,
					onClick: () => u(n),
					children: [/* @__PURE__ */ (0, Y.jsx)(s, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), F("manage:taste.readBrowserHistory")]
				}),
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Hi,
					onClick: () => u(r),
					children: [/* @__PURE__ */ (0, Y.jsx)(S, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), F("manage:taste.importHistoryFile")]
				}),
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Hi,
					onClick: () => u(a),
					children: [/* @__PURE__ */ (0, Y.jsx)(xe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), F("manage:taste.importBookmarksFile")]
				})
			]
		})
	})] });
}
function _a({ sources: e, browsers: t, window: n, toast: r, emptyActions: a }) {
	let o = Ye({
		mutationFn: (e) => Ne(e, n),
		onSuccess: (e) => {
			P.setQueryData(I(n), e.dashboard), r(F("manage:taste.sourceRemoved"));
		}
	});
	return /* @__PURE__ */ (0, Y.jsxs)(Bi, {
		browsers: t,
		sources: e,
		range: n,
		children: [o.error ? /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ (0, Y.jsx)(y, {
				tone: "error",
				children: N(o.error)
			})
		}) : null, e.length ? /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ (0, Y.jsxs)("div", {
			"data-taste-source": "import",
			className: zi,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
					children: e.browser === "browserexport" ? /* @__PURE__ */ (0, Y.jsx)(S, {
						"aria-hidden": !0,
						className: "size-4"
					}) : /* @__PURE__ */ (0, Y.jsx)(T, {
						"aria-hidden": !0,
						className: "size-4"
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Y.jsx)("b", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.profile
					}), /* @__PURE__ */ (0, Y.jsx)("small", {
						className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
						children: F(e.bookmarks ? "manage:taste.importedBookmarks" : "manage:taste.importedHistory", {
							host: e.host,
							count: Number(e.visits || e.bookmarks || 0)
						})
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					size: "small",
					"aria-label": F("manage:taste.removeSourceLabel", { source: e.profile }),
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: m,
					...E(o.isPending),
					onClick: () => {
						o.isPending || j({
							title: F("manage:taste.removeSource"),
							body: ia,
							confirmLabel: F("manage:taste.removeSource"),
							onConfirm: () => o.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ (0, Y.jsx)(c, {
			size: "compact",
			icon: T,
			title: F("manage:taste.noSourcesTitle"),
			actions: a,
			children: Gi
		})]
	});
}
function va(e) {
	let { onSignal: o, navigate: s, toast: l, onboarding: u } = e, [d, p] = (0, U.useState)("all"), [m, h] = (0, U.useState)("browser"), g = (0, U.useRef)(null), _ = (0, U.useRef)(null), v = Xe({
		queryKey: I(d),
		queryFn: ({ signal: e }) => he(d, e),
		placeholderData: Ee,
		refetchInterval: (e) => We(e.state.data)
	}), { job: b, running: x, outcome: S, start: C } = Je({
		queryKey: oe,
		queryFn: ({ signal: e }) => ge(e),
		start: () => ze(d),
		idlePollMs: f,
		onFinish: (e) => {
			e.status !== "failed" && (P.invalidateQueries({ queryKey: ["taste"] }), l(e.warnings?.length ? F("manage:taste.partialHistory") : F("manage:taste.analysisUpdated")));
		}
	}), w = Ye({
		mutationFn: (e) => he(e, void 0, !0),
		onSuccess: (e, t) => {
			P.setQueryData(I(t), e);
		}
	}), T = Ye({
		mutationFn: (e) => Ce(e),
		onSuccess: (e) => {
			P.setQueryData(I("all"), e.dashboard), p("all"), l(F("manage:taste.dataImported"));
		}
	}), ue = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !T.isPending && (T.reset(), T.mutate(t));
	}, fe = () => {
		x || C.isPending || (C.reset(), C.mutate());
	}, D = v.data;
	if (!D) return /* @__PURE__ */ (0, Y.jsx)(at, { children: /* @__PURE__ */ (0, Y.jsx)(y, {
		tone: "error",
		title: F("manage:taste.loadFailedTitle"),
		children: v.error ? N(v.error) : F("manage:taste.loadFailedBody")
	}) });
	let O = D.summary || {}, k = D.coverage || {}, A = D.rankings || {}, j = D.storage || {}, M = He(A.browser_categories || []), me = Ae(M).length > 0, _e = D.gaps || [], ve = k.tagged || 0, ye = k.identified || 0, Te = C.error ? N(C.error) : T.error ? N(T.error) : w.error ? N(w.error) : S?.status === "failed" ? we(S, "error") || F("manage:taste.readNotFound") : "", ke = /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ (0, Y.jsx)(i, {
			variant: "secondary",
			...E(x || C.isPending || T.isPending),
			onClick: fe,
			children: F("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, Y.jsx)(i, {
			variant: "secondary",
			...E(T.isPending),
			onClick: () => g.current?.click(),
			children: F("manage:taste.importHistoryFile")
		})]
	});
	return /* @__PURE__ */ (0, Y.jsx)(at, { children: /* @__PURE__ */ (0, Y.jsxs)(ca, {
		value: d === "all" ? m === "peach" ? /* @__PURE__ */ (0, Y.jsx)(a, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: F("manage:shared.browseCollection")
		}) : ke : /* @__PURE__ */ (0, Y.jsx)(i, {
			size: "small",
			variant: "secondary",
			onClick: () => p("all"),
			children: F("manage:taste.viewAllTime")
		}),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)(r, {
				selectedKey: m,
				onSelectionChange: (e) => h(String(e)),
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, Y.jsxs)(re, {
							"aria-label": F("manage:taste.evidenceLabel"),
							className: te,
							children: [/* @__PURE__ */ (0, Y.jsx)(n, {
								id: "peach",
								className: ee,
								children: F("manage:taste.peachActivity")
							}), /* @__PURE__ */ (0, Y.jsx)(n, {
								id: "browser",
								className: ee,
								children: F("manage:taste.browserHistory")
							})]
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(ie, {
									"aria-label": F("manage:taste.rangeLabel"),
									selectedKey: d,
									onSelectionChange: (e) => {
										e !== null && p(String(e));
									},
									children: se.map(([e, t]) => /* @__PURE__ */ (0, Y.jsx)(ae, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ (0, Y.jsx)(ga, {
									busy: x || C.isPending || T.isPending,
									onRefresh: fe,
									onImport: () => g.current?.click(),
									onImportBookmarks: () => _.current?.click()
								}),
								/* @__PURE__ */ (0, Y.jsx)("input", {
									ref: g,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: ue
								}),
								/* @__PURE__ */ (0, Y.jsx)("input", {
									ref: _,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									"data-bookmark-import": !0,
									onChange: ue
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Y.jsx)(ha, {
						onboarding: u,
						done: !!(O.history_sources || D.updated_at)
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							x ? /* @__PURE__ */ (0, Y.jsx)(ce, {
								label: we(b, "message") || F("manage:taste.refreshing"),
								value: b?.checked,
								total: b?.total
							}) : null,
							T.isPending ? /* @__PURE__ */ (0, Y.jsx)(ce, { label: F("manage:taste.importing") }) : null,
							D.stale && D.error ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "error",
								action: /* @__PURE__ */ (0, Y.jsx)(i, {
									variant: "secondary",
									size: "small",
									...E(w.isPending),
									onClick: () => w.mutate(d),
									children: F("manage:shared.retryNow")
								}),
								children: F("manage:taste.updateFailedStale", {
									time: Ge(D.computed_at),
									error: Ie(D.message_code ?? "", D.error, D.message_params)
								})
							}) : D.stale ? /* @__PURE__ */ (0, Y.jsx)(ce, { label: F("manage:taste.updatingStale", { time: Ge(D.computed_at) }) }) : null,
							Te ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "error",
								children: Te
							}) : null,
							S?.warnings?.length ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "warning",
								children: Le(S.warnings, S.warning_codes, S.warning_params).join(F("shell:format.semicolonSeparator"))
							}) : null
						]
					}),
					/* @__PURE__ */ (0, Y.jsxs)(t, {
						id: "browser",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, Y.jsxs)("div", {
								className: ne,
								children: [
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 0,
										icon: qe,
										term: F("manage:tasteSkeleton.browsingHistory"),
										figure: Number(O.history_visits || 0).toLocaleString(),
										detail: Se(O),
										detailTitle: `${Ve(O.range_start)}—${Ve(O.range_end)}`
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 1,
										icon: De,
										term: F("manage:tasteSkeleton.tasteDimensions"),
										figure: M.length.toLocaleString(),
										detail: M[0]?.name || F("manage:taste.noTopDimension")
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 2,
										icon: Oe,
										term: F("manage:tasteSkeleton.browsingLeads"),
										figure: _e.length.toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 3,
										icon: xe,
										term: F("manage:taste.bookmarks"),
										figure: Number(O.bookmarks || 0).toLocaleString(),
										detail: F("manage:taste.privateExports", {
											count: Number(j.exports || 0),
											size: be(j.bytes || 0)
										})
									})
								]
							}),
							/* @__PURE__ */ (0, Y.jsxs)("section", {
								className: me ? `${Q} md:flex-row md:gap-6` : Q,
								"aria-label": F("manage:taste.browsingProfile"),
								children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
									className: me ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: F("manage:taste.browsingProfile")
										}),
										me ? /* @__PURE__ */ (0, Y.jsx)(Ii, {
											rows: M,
											label: F("manage:taste.topDimensions")
										}) : null,
										/* @__PURE__ */ (0, Y.jsx)("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: D.updated_at ? F("manage:taste.updatedAt", { date: Ve(D.updated_at) }) : F("manage:taste.historyNotFetched")
										})
									]
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: "flex min-w-0 grow flex-col",
									children: M.length ? /* @__PURE__ */ (0, Y.jsx)(Li, {
										rows: M,
										label: F("manage:taste.dimensionRanking")
									}) : /* @__PURE__ */ (0, Y.jsx)(c, {
										size: "compact",
										icon: Oe,
										title: F("manage:taste.noDimensions"),
										actions: /* @__PURE__ */ (0, Y.jsx)(la, {}),
										children: qi
									})
								})]
							}),
							/* @__PURE__ */ (0, Y.jsx)(Ze, {
								activity: D.activity,
								title: F("manage:taste.browsingActivity"),
								dailyTitle: F("manage:taste.dailyActivity"),
								words: {
									unit: (e) => F("manage:taste.siteVisitsUnit", { count: e }),
									series: F("manage:taste.visitsSeries"),
									cell: (e) => F("manage:taste.visitsCell", { count: e })
								},
								tone: 4,
								empty: F("manage:taste.noVisitsHint")
							}),
							/* @__PURE__ */ (0, Y.jsx)(Ri, { flows: D.creator_flows }),
							/* @__PURE__ */ (0, Y.jsx)(pa, {
								label: F("manage:taste.browserDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: F("manage:shared.tags"),
										props: {
											rows: A.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: Yi
										}
									},
									{
										id: "creators",
										name: F("manage:shared.creators"),
										props: {
											rows: A.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Xi
										}
									},
									{
										id: "performers",
										name: F("manage:shared.actresses"),
										props: {
											rows: A.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: F("manage:taste.noActressHistory")
										}
									},
									{
										id: "domains",
										name: F("manage:taste.topSites"),
										props: {
											rows: A.domains || [],
											kind: "",
											visual: "domain",
											empty: Zi
										}
									},
									{
										id: "gaps",
										name: F("manage:tasteSkeleton.browsingLeads"),
										props: {
											rows: _e,
											kind: "",
											visual: "none",
											empty: Ji
										}
									}
								]
							})
						]
					}),
					/* @__PURE__ */ (0, Y.jsxs)(t, {
						id: "peach",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, Y.jsxs)("div", {
								className: ne,
								children: [
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 0,
										icon: le,
										term: F("manage:taste.watchedInPeach"),
										figure: Number(O.peach_items || 0).toLocaleString(),
										detail: Ue(O.peach_seconds || 0)
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 1,
										icon: de,
										term: F("manage:shared.like"),
										figure: Number(O.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 2,
										icon: pe,
										term: F("manage:taste.disliked"),
										figure: Number(O.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 3,
										icon: De,
										term: F("manage:taste.tagged"),
										figure: ve.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ (0, Y.jsxs)("section", {
								className: `${Q} md:flex-row md:gap-6`,
								"aria-label": F("manage:taste.peachViewing"),
								children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: F("manage:taste.peachViewing")
										}),
										/* @__PURE__ */ (0, Y.jsx)("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(O.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-body-2-regular text-text-secondary",
											children: F("manage:taste.watchedOrRatedUnit", { count: Number(O.peach_items || 0) })
										})
									]
								}), /* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ (0, Y.jsx)(ya, {
										term: F("manage:taste.tagged"),
										value: ve,
										rest: k.untagged || 0
									}), /* @__PURE__ */ (0, Y.jsx)(ya, {
										term: F("manage:taste.identified"),
										value: ye,
										rest: k.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ (0, Y.jsx)(pa, {
								label: F("manage:taste.peachDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: F("manage:shared.tags"),
										props: {
											rows: A.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: Qi
										}
									},
									{
										id: "creators",
										name: F("manage:shared.creators"),
										props: {
											rows: A.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: $i
										}
									},
									{
										id: "performers",
										name: F("manage:shared.actresses"),
										props: {
											rows: A.peach_performers || [],
											kind: "performer",
											visual: "entity",
											empty: ea
										}
									}
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, Y.jsx)(ma, {
				data: D,
				onSignal: o,
				navigate: s
			}),
			/* @__PURE__ */ (0, Y.jsx)(_a, {
				sources: D.sources || [],
				browsers: D.browsers || [],
				window: d,
				toast: l,
				emptyActions: ke
			})
		]
	}) });
}
function ya({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, Y.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: e }), /* @__PURE__ */ (0, Y.jsxs)("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: F("manage:taste.remainingCount", { count: n })
				})]
			})]
		}), /* @__PURE__ */ (0, Y.jsx)(x, {
			meter: !0,
			label: F("manage:shared.termProgress", {
				term: e,
				value: t.toLocaleString(),
				total: r.toLocaleString()
			}),
			value: t,
			max: r
		})]
	});
}
export { aa as TASTE_GUIDE_KEY, va as TastePage };

//# debugId=c74db8d2-148a-4ac3-8dc8-03739ae90735