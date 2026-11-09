(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "82269ec7-19b3-470f-8edb-5896e9f7f0fc", e._sentryDebugIdIdentifier = "sentry-dbid-82269ec7-19b3-470f-8edb-5896e9f7f0fc");
	} catch {}
})();
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as e, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as t, $b4f18e3395fe64d7$export$3e41faf802a29e71 as n, $b4f18e3395fe64d7$export$b2539bed5023c21c as r, Button as i, ButtonLink as a, Disclosure as o, E3 as s, EmptyState as c, FLOW_LABEL_X as l, FLOW_VIEWBOX as u, Gg as d, IDLE_POLL_MS as f, Input as p, M6 as m, MENU_ITEM as h, MENU_ITEM_INTERACTIVE as g, MENU_POPOVER_SURFACE as _, MenuDialog as v, Note as y, OV as b, Progress as x, Rf as S, SEGMENT as ee, SEGMENTED_TRACK as te, STAT_STRIP as ne, SegmentedTabList as re, Select$1 as ie, SelectItem as ae, StatCard as C, TASTE_REFRESH_KEY as oe, TASTE_WINDOWS as se, TaskProgress as ce, Wt as w, Xt as le, _8 as T, __toESM as ue, aB as de, avatarInner as fe, busyProps as E, cB as pe, cardClass as D, clsx as O, configureTasteBrowser as k, confirmModal as A, cx as me, errorMessage as j, f1 as M, fetchTaste as he, fetchTasteJob as ge, firstGrapheme as _e, flowGraph as ve, flowLabel as ye, fmtSize as be, g4 as xe, historySpan as Se, importTasteExport as Ce, joinList as we, keepPreviousData as Te, mM as Ee, pv as De, queryClient as N, r2 as Oe, radarRows as ke, rankDetail as Ae, rankShares as je, removeTasteSource as Me, require_jsx_runtime as Ne, require_react as Pe, siteMarkUrl as Fe, startTasteRefresh as Ie, statCardClass as Le, t as P, tasteDate as Re, tasteDimensions as ze, tasteHours as Be, tasteKey as F, tasteRefetchInterval as Ve, tasteTime as He, topScores as Ue, uo as We, useBackgroundJob as Ge, useMutation as I, useQuery as Ke } from "./peach-app.js";
import { ActivityHeat as qe, BAR_DOMAIN as Je, ExpandableRanking as Ye, PolarAngleAxis as Xe, Polygon as Ze, barLabel as Qe, selectPolarAxisScale as $e, selectPolarAxisTicks as L } from "./peach-app.expandable-ranking-msnIi2GJ.js";
import { LEGACY_AVATAR_IMG as et } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { Page as tt } from "./peach-app.page-QAncjzM1.js";
import { ActivePoints as nt, AnimatedItems as rt, CHART_CARD as it, CHART_COLORS as at, CartesianLabelListContextProvider as ot, CategoryTick as st, ChartBackground as ct, ChartContainer as lt, ChartHead as ut, ChartLegend as dt, ChartLegendContent as ft, ChartTip as pt, ChartTooltip as mt, ChartTooltipContent as ht, DefaultZIndexes as gt, Dots as _t, EvilBarChart as vt, LabelListFromLabelProp as yt, Layer as R, LoadingIndicator as bt, PolarChart as xt, PolarLabelContextProvider as St, PolarLabelFromLabelProp as Ct, RegisterGraphicalItemId as wt, SetPolarGraphicalItem as Tt, SetPolarLegendPayload as Et, SetTooltipEntrySettings as Dt, Text as Ot, ZIndexLayer as kt, adaptEventsOfChild as At, addRadiusAxis as jt, arrayTooltipSearcher as Mt, categoryAxisWidth as Nt, cn as Pt, createSelector as z, defaultPolarChartProps as Ft, defaultPolarRadiusAxisProps as It, fitLabel as Lt, getAxisTypeBasedOnLayout as Rt, getBandSizeOfAxis as zt, getClassNameFromUnknown as Bt, getColorsCount as Vt, getTooltipNameProp as Ht, getValueByDataKey as Ut, identity as Wt, interpolate as Gt, isArrayLike as Kt, isCategoricalAxis as qt, isNullish as Jt, iteratee as Yt, matchAnimationItems as Xt, matchByIndex as Zt, noop as Qt, polarToCartesian as B, removeRadiusAxis as $t, resolveDefaultProps as en, selectAngleAxis as tn, selectChartDataAndAlwaysIgnoreIndexes as nn, selectChartLayout as rn, selectPolarViewBox as an, selectRadiusAxis as on, selectUnfilteredPolarItems as sn, svgPropertiesAndEvents as cn, svgPropertiesNoEvents as V, svgPropertiesNoEventsFromUnknown as ln, tone as un, useAnimationCallbacks as dn, useAnimationStartSnapshot as fn, useAppDispatch as pn, useAppSelector as H, useIsPanorama as mn, usePolarChartLayout as hn } from "./peach-app.chart-tip-CRxYp6KT.js";
import { BrowserIcon as gn } from "./peach-app.browser-icon-N9Od-bAf.js";
var _n = z([(e, t) => L(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), vn = z([(e, t) => L(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), U = /* @__PURE__ */ ue(Pe()), yn = [
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
function bn(e, t) {
	if (e == null) return {};
	var n, r, i = xn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function xn(e, t) {
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
function Sn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Cn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Sn(Object(n), !0).forEach(function(t) {
			wn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wn(e, t, n) {
	return (t = Tn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Tn(e) {
	var t = En(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function En(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Dn = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = B(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, On = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = Cn({}, V(e));
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = B(t, n, r, e), o = B(t, n, i, e);
		return /*#__PURE__*/ U.createElement("line", W({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, kn = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = Cn({}, V(e));
	return /*#__PURE__*/ U.createElement("circle", W({}, i, {
		className: O("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, An = (e) => {
	var t = e.radius, n = Cn({}, V(e));
	return /*#__PURE__*/ U.createElement("path", W({}, n, {
		className: O("recharts-polar-grid-concentric-polygon", e.className),
		d: Dn(t, e.cx, e.cy, e.polarAngles)
	}));
}, jn = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ U.createElement(kn, W({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ U.createElement(An, W({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ U.createElement(kn, W({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ U.createElement(An, W({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, Mn = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: gt.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, Nn = (e) => {
	var t = en(e, Mn), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = bn(t, yn), m = H(an), h = H((e) => _n(e, i)), g = H((e) => vn(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = Cn({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ U.createElement(kt, { zIndex: y.zIndex }, /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ U.createElement(jn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ U.createElement(On, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
Nn.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function Pn(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function Fn(e, t = Wt) {
	if (e == null) return;
	let n = Pn(e);
	if (n.length === 0) return;
	let r = Yt(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function In(e, t = Wt) {
	if (e == null) return;
	let n = Pn(e);
	if (n.length === 0) return;
	let r = Yt(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var Ln = ["type"], Rn = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], zn = [
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
function Bn(e, t) {
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
		t % 2 ? Bn(Object(n), !0).forEach(function(t) {
			Vn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vn(e, t, n) {
	return (t = Hn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Hn(e) {
	var t = Un(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Un(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Wn(e, t) {
	if (e == null) return {};
	var n, r, i = Gn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Gn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Kn = "radiusAxis";
function qn(e) {
	var t = pn(), n = hn(), r = (0, U.useMemo)(() => {
		var t = e.type, r = Wn(e, Ln), i = Rt(n, "radiusAxis", t);
		if (i != null) return K(K({}, r), {}, { type: i });
	}, [e, n]);
	return (0, U.useEffect)(() => r == null ? Qt : (t(jt(r)), () => {
		t($t(r));
	}), [t, r]), null;
}
var Jn = (e, t, n, r) => {
	var i = e.coordinate;
	return B(n, r, i, t);
}, Yn = (e) => {
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
}, Xn = (e, t, n, r) => {
	var i = Fn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: In(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, Zn = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = Wn(e, Rn), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = B(n, r, s[0], i), l = B(n, r, s[1], i), u = K(K(K({}, V(o)), {}, { fill: "none" }, V(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ U.createElement("line", G({ className: "recharts-polar-radius-axis-line" }, u));
}, Qn = (e, t, n) => /*#__PURE__*/ U.isValidElement(e) ? /*#__PURE__*/ U.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ U.createElement(Ot, G({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), $n = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = Wn(e, zn), s = Yn(e.orientation), c = V(o), l = ln(a), u = t.map((t, o) => {
		var u = Jn(t, e.angle, e.cx, e.cy), d = K(K(K(K({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ U.createElement(R, G({
			className: O("recharts-polar-radius-axis-tick", Bt(a)),
			key: `tick-${t.coordinate}`
		}, At(e, t, o)), Qn(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ U.createElement(R, { className: "recharts-polar-radius-axis-ticks" }, u);
}, er = (e) => {
	var t = e.radiusAxisId, n = H(an), r = H((e) => $e(e, "radiusAxis", t)), i = H((e) => L(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = K(K({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ U.createElement(kt, { zIndex: a.zIndex }, /*#__PURE__*/ U.createElement(R, { className: O("recharts-polar-radius-axis", Kn, a.className) }, s && Zn(a, i), o && $n(a, i), /*#__PURE__*/ U.createElement(St, Xn(a.angle, a.cx, a.cy, i), /*#__PURE__*/ U.createElement(Ct, { label: a.label }), a.children)));
};
function tr(e) {
	var t = en(e, It);
	return /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(qn, {
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
	}), /*#__PURE__*/ U.createElement(er, t));
}
tr.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function nr(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function rr(e) {
	if (Kt(e) && e.length !== 0) return nr(Pn(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function ir(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ar(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ir(Object(n), !0).forEach(function(t) {
			or(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ir(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function or(e, t, n) {
	return (t = sr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function sr(e) {
	var t = cr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function cr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var lr = (e, t) => $e(e, "radiusAxis", t), ur = z([lr], (e) => {
	if (e != null) return { scale: e };
}), dr = z([on, lr], (e, t) => {
	if (e != null && t != null) return ar(ar({}, e), {}, { scale: t });
}), fr = (e, t, n, r) => L(e, "radiusAxis", t, r), pr = (e, t, n) => tn(e, n), mr = (e, t, n) => $e(e, "angleAxis", n), hr = z([pr, mr], (e, t) => {
	if (e != null && t != null) return ar(ar({}, e), {}, { scale: t });
}), gr = (e, t, n, r) => L(e, "angleAxis", n, r), _r = z([
	pr,
	mr,
	an
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), vr = (e, t, n, r, i) => i, yr = z([
	rn,
	dr,
	fr,
	hr,
	gr
], (e, t, n, r, i) => qt(e, "radiusAxis") ? zt(t, n, !1) : zt(r, i, !1)), br = z([sn, vr], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), xr = z([
	ur,
	_r,
	nn,
	br,
	yr
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return Nr({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), Sr = ["id"];
function q() {
	return q = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, q.apply(null, arguments);
}
function Cr(e, t) {
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
		t % 2 ? Cr(Object(n), !0).forEach(function(t) {
			wr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function wr(e, t, n) {
	return (t = Tr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Tr(e) {
	var t = Er(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Er(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Dr(e, t) {
	if (e == null) return {};
	var n, r, i = Or(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Or(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function kr(e, t) {
	return e && e !== "none" ? e : t;
}
var Ar = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: kr(r, i),
		value: Ht(n, t),
		payload: e
	}];
}, jr = /*#__PURE__*/ U.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: Qt,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: Ht(a, t),
			hide: o,
			type: s,
			color: kr(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ U.createElement(Dt, { tooltipEntrySettings: l });
});
function Mr(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = Dr(n, Sr), o = V(a);
	return /*#__PURE__*/ U.createElement(_t, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function Nr(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = Ut(e, n.dataKey, r), d = Ut(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? rr(d) : d, m = Jt(p) ? 0 : t.scale.map(p) ?? 0;
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
			var n = e.value[0], r = Jt(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(J(J({}, e), {}, { radius: r }, B(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Pr(e) {
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
	return /*#__PURE__*/ U.createElement(ot, { value: t ? i : void 0 }, r);
}
function Fr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ U.isValidElement(i) ? /*#__PURE__*/ U.cloneElement(i, J(J({}, r), {}, { points: t })) : typeof i == "function" ? i(J(J({}, r), {}, { points: t })) : /*#__PURE__*/ U.createElement(Ze, q({}, cn(r), {
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
	return /*#__PURE__*/ U.createElement(R, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ U.createElement(Mr, {
		props: r,
		points: t
	}));
}
var Ir = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [J(J({}, e.next), {}, {
	x: Gt(e.prev.x, e.next.x, t),
	y: Gt(e.prev.y, e.next.y, t)
})] : [J(J({}, e.next), {}, {
	x: Gt(e.next.cx, e.next.x, t),
	y: Gt(e.next.cy, e.next.y, t)
})]);
function Lr(e) {
	var t = e.props, n = e.previousPointsRef, r = e.previousBaseLinePointsRef, i = t.points, a = t.baseLinePoints, o = t.isAnimationActive, s = t.animationBegin, c = t.animationDuration, l = t.animationEasing, u = t.animationMatchBy, d = t.animationInterpolateFn, f = t.onAnimationStart, p = t.onAnimationEnd, m = fn(t, r), h = m.startValue, g = Xt(h ?? null, a, u), _ = dn(f, p), v = _.isAnimating, y = _.handleAnimationStart, b = _.handleAnimationEnd, x = hn();
	return x == null ? null : /*#__PURE__*/ U.createElement(Pr, {
		showLabels: !v,
		points: i
	}, /*#__PURE__*/ U.createElement(rt, {
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
		return m.syncStepValue(r, n), /*#__PURE__*/ U.createElement(Fr, {
			points: e,
			baseLinePoints: r,
			props: t
		});
	}), /*#__PURE__*/ U.createElement(yt, { label: t.label }), t.children);
}
function Rr(e) {
	var t = (0, U.useRef)(void 0), n = (0, U.useRef)(void 0);
	return /*#__PURE__*/ U.createElement(Lr, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var zr = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Zt,
	animationInterpolateFn: Ir,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: gt.area
};
function Br(e) {
	var t = e.hide, n = e.className, r = e.points;
	if (t) return null;
	var i = O("recharts-radar", n);
	return /*#__PURE__*/ U.createElement(kt, { zIndex: e.zIndex }, /*#__PURE__*/ U.createElement(R, { className: i }, /*#__PURE__*/ U.createElement(Rr, e)), /*#__PURE__*/ U.createElement(nt, {
		points: r,
		mainColor: kr(e.stroke, e.fill),
		itemDataKey: e.dataKey,
		activeDot: e.activeDot
	}));
}
function Vr(e) {
	var t = mn(), n = H((n) => xr(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ U.createElement(Br, q({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Hr(e) {
	var t = en(e, zr);
	return /*#__PURE__*/ U.createElement(wt, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(Tt, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ U.createElement(Et, { legendPayload: Ar(t) }), /*#__PURE__*/ U.createElement(jr, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ U.createElement(Vr, q({}, t, { id: e }))));
}
Hr.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function Ur(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Wr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Ur(Object(n), !0).forEach(function(t) {
			Gr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Gr(e, t, n) {
	return (t = Kr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kr(e) {
	var t = qr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Jr = ["axis"], Yr = Wr(Wr({}, Ft), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), Xr = /*#__PURE__*/ (0, U.forwardRef)((e, t) => {
	var n = en(e, Yr);
	return /*#__PURE__*/ U.createElement(xt, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Jr,
		tooltipPayloadSearcher: Mt,
		categoricalChartProps: n,
		ref: t
	});
}), Y = Ne(), Zr = U.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = U.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ (0, Y.jsx)($r, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ (0, Y.jsx)(ei, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ (0, Y.jsx)(Qr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), Qr = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
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
Qr.displayName = "DefaultDot";
var $r = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
	className: Pt(a, "text-background"),
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
$r.displayName = "PrimaryBorderDot";
var ei = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, Y.jsxs)("g", {
	className: Pt(a, "text-background"),
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
ei.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var ti = 1, ni = .3, ri = 6, ii = 1500, ai = "value", oi = (0, U.createContext)(null);
function X() {
	let e = (0, U.use)(oi);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Z({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: o = null, onSelectionChange: s, isLoading: c = !1, loadingPoints: l }) {
	let u = (0, U.useId)().replace(/:/g, ""), [d, f] = (0, U.useState)(o), p = Si(c, l), m = (0, U.useCallback)((e) => {
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
	return /* @__PURE__ */ (0, Y.jsx)(oi, {
		value: h,
		children: /* @__PURE__ */ (0, Y.jsxs)(lt, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ (0, Y.jsx)(bt, { isLoading: c }), /* @__PURE__ */ (0, Y.jsxs)(Xr, {
				id: u,
				data: c ? p : t,
				...i,
				children: [
					a && /* @__PURE__ */ (0, Y.jsx)(ct, { variant: a }),
					n,
					c && /* @__PURE__ */ (0, Y.jsx)(Ci, {})
				]
			})]
		})
	});
}
function si({ dataKey: e, variant: t = "filled", fillOpacity: n = ni, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = X(), d = (0, U.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = hi(a, d, e, p.dot);
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(Hr, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: ti,
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
		/* @__PURE__ */ (0, Y.jsx)(_i, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ (0, Y.jsx)(vi, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ (0, Y.jsx)(yi, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ (0, Y.jsx)(bi, {
			id: d,
			dataKey: e
		})
	] })] });
}
var ci = () => null, li = () => null;
function ui({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ (0, Y.jsx)(Nn, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function di({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = X();
	return r ? null : /* @__PURE__ */ (0, Y.jsx)(Xe, {
		tick: e,
		tickLine: t,
		...n
	});
}
function fi({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = X();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(tr, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function pi({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = X();
	return r ? null : /* @__PURE__ */ (0, Y.jsx)(mt, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, Y.jsx)(ht, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function mi({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = X();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(dt, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Y.jsx)(ft, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var hi = (e, t, n, r) => {
	let i = !1, a = !1;
	return U.Children.forEach(e, (e) => {
		if ((0, U.isValidElement)(e)) {
			if (e.type === ci) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ (0, Y.jsx)(Zr, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === li) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ (0, Y.jsx)(Zr, {
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
}, gi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("stop", {
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
}) }), _i = ({ id: e, dataKey: t, config: n }) => {
	let r = Vt(n[t] ?? {});
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ (0, Y.jsx)(gi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, vi = ({ id: e, dataKey: t, config: n }) => {
	let r = Vt(n[t] ?? {});
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ (0, Y.jsx)(gi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, yi = ({ id: e, dataKey: t, config: n }) => {
	let r = Vt(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ (0, Y.jsx)("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ (0, Y.jsx)(gi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, bi = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, Y.jsxs)("filter", {
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
}), xi = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[ai]: 30 + Math.random() * 70
}));
function Si(e, t = ri) {
	let [n, r] = (0, U.useState)(0);
	return (0, U.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, ii);
		return () => clearInterval(t);
	}, [e]), (0, U.useMemo)(() => xi(t), [t, n]);
}
var Ci = () => /* @__PURE__ */ (0, Y.jsx)(Hr, {
	dataKey: ai,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: ii,
	animationEasing: "ease-in-out"
});
Z.Radar = si, Z.Dot = ci, Z.ActiveDot = li, Z.PolarGrid = ui, Z.PolarAngleAxis = di, Z.PolarRadiusAxis = fi, Z.Tooltip = pi, Z.Legend = mi;
// src/react/taste/charts.tsx
function wi(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ (0, Y.jsxs)("g", { children: [/* @__PURE__ */ (0, Y.jsx)("title", { children: o }), /* @__PURE__ */ (0, Y.jsx)(Ot, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: Lt(o, c - 4)
	})] });
}
var Ti = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], Ei = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], Di = { value: {
	label: P("manage:tasteCharts.tagOccurrences"),
	colors: un(at[3])
} }, Oi = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], ki = 26, Ai = { radius: Di.value }, ji = (e, t) => Math.sqrt(e / t);
function Mi({ rows: e, label: t }) {
	let n = ke(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: ji(e.value, r)
	}));
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		role: "img",
		"aria-label": P("manage:tasteCharts.radarSummary", {
			label: t,
			items: we(i.map((e) => e.name))
		}),
		children: /* @__PURE__ */ (0, Y.jsxs)(Z, {
			data: i,
			config: Ai,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarGrid, {}),
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ (0, Y.jsx)(wi, {})
				}),
				/* @__PURE__ */ (0, Y.jsx)(Z.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ (0, Y.jsx)(Z.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ (0, Y.jsx)(pt, { valueKey: "value" })
			]
		})
	});
}
function Ni({ rows: e, label: t }) {
	let n = Ue(e, 8);
	return n.length ? /* @__PURE__ */ (0, Y.jsx)("section", {
		"aria-label": t,
		className: `flex grow flex-col ${Oi[n.length]}`,
		children: /* @__PURE__ */ (0, Y.jsxs)(vt, {
			data: n,
			config: Di,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: ki,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(vt.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, Y.jsx)(st, { along: "y" }),
					width: Nt(n.map((e) => e.name))
				}),
				/* @__PURE__ */ (0, Y.jsx)(vt.XAxis, {
					hide: !0,
					domain: Je
				}),
				/* @__PURE__ */ (0, Y.jsx)(vt.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: Qe("right")
					}
				}),
				/* @__PURE__ */ (0, Y.jsx)(pt, {})
			]
		})
	}) : null;
}
function Pi({ flows: e }) {
	let [t, n] = (0, U.useState)(null), r = ve(e);
	if (!r) return null;
	let i = t?.node ?? null, a = (e, n) => t ? i === null ? t.label === n : e.source === i || e.target === i : !0;
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: it,
		children: [
			/* @__PURE__ */ (0, Y.jsx)(ut, {
				title: P("manage:tasteCharts.creatorLeadSources"),
				figure: (t ? t.value : r.total).toLocaleString(),
				note: t ? t.label : P("manage:tasteCharts.leadsUnit", { count: r.total })
			}),
			/* @__PURE__ */ (0, Y.jsx)("ol", {
				"aria-label": P("manage:tasteCharts.sitesAndCreatorLeads"),
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
					"aria-label": P("manage:tasteCharts.sitesAndCreatorLeads"),
					className: "block h-auto w-full",
					onPointerLeave: () => n(null),
					children: [/* @__PURE__ */ (0, Y.jsx)("g", { children: r.links.map((e) => /* @__PURE__ */ (0, Y.jsx)("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": P("manage:tasteCharts.leadCount", {
							name: e.label,
							count: e.value
						}),
						fillOpacity: 0,
						strokeOpacity: a(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${Ti[e.color]}`,
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
						"aria-label": P("manage:tasteCharts.leadCount", {
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
							className: e.side === "source" ? Ei[e.color] : "fill-text-secondary"
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
				children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: P("manage:tasteCharts.sourceSites") }), /* @__PURE__ */ (0, Y.jsx)("span", { children: P("manage:tasteCharts.creatorsLeadShare") })]
			})
		]
	});
}
// src/react/taste/browser-sources.tsx
var Fi = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function Ii({ browsers: e, sources: t, range: n, children: r }) {
	let [a, o] = (0, U.useState)(!1), [s, c] = (0, U.useState)(""), [l, u] = (0, U.useState)(""), f = I({
		mutationFn: (e) => k(e, n),
		onSuccess: (e) => {
			N.setQueryData(F(n), e.dashboard), o(!1), c(""), u("");
		}
	});
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: `${D()} flex flex-col gap-4`,
		"aria-label": P("manage:tasteSources.dataSources"),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
					className: "text-title-2-medium text-text-primary",
					children: P("manage:tasteSources.dataSources")
				}), /* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					onClick: () => o(!0),
					disabled: a,
					children: P("manage:tasteSources.addBrowser")
				})]
			}),
			f.error ? /* @__PURE__ */ (0, Y.jsx)(y, {
				tone: "error",
				children: j(f.error)
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
						label: P("manage:tasteSources.browserName"),
						value: s,
						onChange: c,
						maxLength: 80,
						isRequired: !0,
						isDisabled: f.isPending
					}),
					/* @__PURE__ */ (0, Y.jsx)(p, {
						label: P("manage:tasteSources.profilePath"),
						value: l,
						onChange: u,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: f.isPending,
						hint: P("manage:tasteSources.profilePathHint")
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, Y.jsx)(i, {
							variant: "ghost",
							disabled: f.isPending,
							onClick: () => {
								o(!1), f.reset();
							},
							children: P("manage:shared.cancel")
						}), /* @__PURE__ */ (0, Y.jsx)(i, {
							type: "submit",
							variant: "secondary",
							disabled: !s.trim() || !l.trim(),
							...E(f.isPending),
							children: P("manage:shared.add")
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
						className: Fi,
						children: [
							/* @__PURE__ */ (0, Y.jsx)("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ (0, Y.jsx)(gn, { name: e.name })
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
										children: e.enabled ? e.available ? P("manage:tasteSources.profileCount", { count: e.profiles }) : P("manage:tasteSources.profileUnavailable") : P("manage:tasteSources.readingStopped")
									}),
									n.length ? /* @__PURE__ */ (0, Y.jsxs)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											P("manage:tasteSources.historyCount", { count: r }),
											" · ",
											P("manage:tasteSources.bookmarkCount", { count: a })
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
									"aria-label": `${e.enabled ? P("manage:tasteSources.stopReading") : P("manage:customSources.enable")} ${e.name}`,
									onClick: () => {
										e.enabled ? A({
											title: P("manage:tasteSources.stopReadingTitle", { browser: e.name }),
											body: P("manage:tasteSources.stopReadingBody"),
											confirmLabel: P("manage:tasteSources.stopReading"),
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
									"aria-label": P("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
									onClick: () => {
										A({
											title: P("manage:tasteSources.deleteBrowserTitle", { browser: e.name }),
											body: P("manage:tasteSources.deleteBrowserBody"),
											confirmLabel: P("manage:tasteSources.deleteBrowser"),
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
var Li = 10, Ri = me(h, g, "text-body-2-medium"), Q = `${D()} flex flex-col gap-4`, zi = "rounded-xl bg-background-primary-default p-3", Bi = P("manage:taste.readHistoryTooltip"), Vi = P("manage:taste.noSourceHint"), Hi = P("manage:taste.noLeadHint"), Ui = P("manage:taste.noCategoryHint"), Wi = P("manage:taste.gapHint"), Gi = P("manage:taste.noBrowserTagHint"), Ki = P("manage:taste.noBrowserCreatorHint"), qi = P("manage:taste.noDomainHint"), Ji = P("manage:taste.noPeachTagHint"), Yi = P("manage:taste.noPeachCreatorHint"), Xi = P("manage:taste.noPeachActressHint"), Zi = P("manage:taste.guideLocal"), Qi = P("manage:taste.guideRemote"), $i = P("manage:taste.guideRefresh"), ea = P("manage:taste.removeSourceBody"), ta = "peach-taste-guide-dismissed", na = "\0", ra = (e, t) => {
	let [n = "", r = ""] = e.split(na);
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
		n,
		t,
		r
	] });
}, ia = (0, U.createContext)(/* @__PURE__ */ (0, Y.jsx)(a, {
	size: "small",
	href: "/",
	children: P("manage:shared.browseCollection")
}));
function aa() {
	return (0, U.useContext)(ia);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: Le(),
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
function oa({ name: e, domain: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [_e(e).toUpperCase(), /* @__PURE__ */ (0, Y.jsx)("img", {
			src: Fe({ domain: t }),
			alt: "",
			loading: "lazy",
			width: 20,
			height: 20,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute size-5 object-contain"
		})]
	});
}
function sa({ html: e }) {
	return /* @__PURE__ */ (0, Y.jsx)("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${et}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function ca({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ (0, Y.jsx)(c, {
		size: "compact",
		icon: De,
		title: P("manage:taste.notEnoughData"),
		actions: /* @__PURE__ */ (0, Y.jsx)(aa, {}),
		children: r
	});
	let a = je(e);
	return /* @__PURE__ */ (0, Y.jsx)(Ye, {
		previewCount: Li,
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
				n === "domain" ? /* @__PURE__ */ (0, Y.jsx)(oa, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ (0, Y.jsx)(oa, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ (0, Y.jsx)(sa, { html: fe(e.name, e.entity_id ? {
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
						children: Ae(e)
					})]
				}),
				o ? /* @__PURE__ */ (0, Y.jsx)(Oe, {
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
function la({ label: e, panels: i, onSignal: a }) {
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
			children: /* @__PURE__ */ (0, Y.jsx)(ca, {
				...e.props,
				onSignal: a
			})
		}, e.id))]
	});
}
function ua({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, o = [...(r.explore || []).map((e) => ({
		key: `tag:${e.tag}`,
		title: e.title,
		detail: e.detail,
		act: () => t("tag", e.tag)
	})), ...(r.next_steps || []).map((e) => ({
		key: `route:${e.route}`,
		title: e.title,
		detail: e.detail,
		act: () => n(e.route)
	}))];
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: Q,
		"aria-label": P("manage:taste.summary"),
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: P("manage:taste.summary")
					}),
					/* @__PURE__ */ (0, Y.jsx)("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: r.headline
					}),
					/* @__PURE__ */ (0, Y.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ (0, Y.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: i.label || P("manage:taste.stillLearning")
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: `flex min-w-0 flex-col gap-1 ${zi}`,
					children: [/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: e.label
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: e.text
					})]
				}, e.label))
			}) : null,
			o.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex flex-col gap-2",
				children: o.map((e) => /* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${zi} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ (0, Y.jsx)("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ (0, Y.jsx)(Oe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ (0, Y.jsx)(c, {
				size: "compact",
				icon: De,
				title: P("manage:taste.nothingToExplore"),
				actions: /* @__PURE__ */ (0, Y.jsx)(a, {
					size: "small",
					href: "/",
					children: P("manage:shared.browseCollection")
				}),
				children: Hi
			})
		]
	});
}
function da({ onboarding: e, done: t }) {
	let [n, r] = (0, U.useState)(() => {
		try {
			return localStorage.getItem(ta) === "1";
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
			summary: P("manage:taste.importGuide"),
			defaultOpen: e,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Zi
				}),
				/* @__PURE__ */ (0, Y.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: Qi
				}),
				/* @__PURE__ */ (0, Y.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ (0, Y.jsx)("li", { children: ra(P("manage:taste.guideChrome", { link: na }), /* @__PURE__ */ (0, Y.jsxs)("a", {
						href: "https://takeout.google.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-text-primary underline-offset-4 hover:underline",
						children: ["Google Takeout", /* @__PURE__ */ (0, Y.jsx)(w, {
							"aria-hidden": !0,
							className: "size-(--icon-inline) shrink-0"
						})]
					})) }), /* @__PURE__ */ (0, Y.jsx)("li", { children: ra(P("manage:taste.guideOther", { link: na }), /* @__PURE__ */ (0, Y.jsxs)("a", {
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
					children: $i
				}),
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "self-start",
					children: /* @__PURE__ */ (0, Y.jsx)(i, {
						variant: "secondary",
						size: "small",
						onClick: () => {
							try {
								localStorage.setItem(ta, "1");
							} catch {}
							r(!0);
						},
						children: P("manage:shared.skip")
					})
				})
			]
		})
	});
}
function fa({ busy: t, onRefresh: n, onImport: r, onImportBookmarks: a }) {
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
			title: Bi,
			onClick: n,
			...E(t),
			children: P("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, Y.jsx)(i, {
			ref: o,
			iconOnly: !0,
			leadingIcon: M,
			"aria-label": P("manage:taste.moreHistoryOptions"),
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
			"aria-label": P("manage:taste.moreHistoryOptions"),
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Ri,
					onClick: () => u(n),
					children: [/* @__PURE__ */ (0, Y.jsx)(s, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.readBrowserHistory")]
				}),
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Ri,
					onClick: () => u(r),
					children: [/* @__PURE__ */ (0, Y.jsx)(S, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.importHistoryFile")]
				}),
				/* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					className: Ri,
					onClick: () => u(a),
					children: [/* @__PURE__ */ (0, Y.jsx)(xe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), P("manage:taste.importBookmarksFile")]
				})
			]
		})
	})] });
}
function pa({ sources: e, browsers: t, window: n, toast: r, emptyActions: a }) {
	let o = I({
		mutationFn: (e) => Me(e, n),
		onSuccess: (e) => {
			N.setQueryData(F(n), e.dashboard), r(P("manage:taste.sourceRemoved"));
		}
	});
	return /* @__PURE__ */ (0, Y.jsxs)(Ii, {
		browsers: t,
		sources: e,
		range: n,
		children: [o.error ? /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ (0, Y.jsx)(y, {
				tone: "error",
				children: j(o.error)
			})
		}) : null, e.length ? /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ (0, Y.jsxs)("div", {
			"data-taste-source": "import",
			className: Fi,
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
						children: P(e.bookmarks ? "manage:taste.importedBookmarks" : "manage:taste.importedHistory", {
							host: e.host,
							count: Number(e.visits || e.bookmarks || 0)
						})
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(i, {
					variant: "secondary",
					size: "small",
					"aria-label": P("manage:taste.removeSourceLabel", { source: e.profile }),
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: m,
					...E(o.isPending),
					onClick: () => {
						o.isPending || A({
							title: P("manage:taste.removeSource"),
							body: ea,
							confirmLabel: P("manage:taste.removeSource"),
							onConfirm: () => o.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ (0, Y.jsx)(c, {
			size: "compact",
			icon: T,
			title: P("manage:taste.noSourcesTitle"),
			actions: a,
			children: Vi
		})]
	});
}
function ma(e) {
	let { onSignal: o, navigate: s, toast: l, onboarding: u } = e, [d, p] = (0, U.useState)("all"), [m, h] = (0, U.useState)("browser"), g = (0, U.useRef)(null), _ = (0, U.useRef)(null), v = Ke({
		queryKey: F(d),
		queryFn: ({ signal: e }) => he(d, e),
		placeholderData: Te,
		refetchInterval: (e) => Ve(e.state.data)
	}), { job: b, running: x, outcome: S, start: C } = Ge({
		queryKey: oe,
		queryFn: ({ signal: e }) => ge(e),
		start: () => Ie(d),
		idlePollMs: f,
		onFinish: (e) => {
			e.status !== "failed" && (N.invalidateQueries({ queryKey: ["taste"] }), l(e.warnings?.length ? P("manage:taste.partialHistory") : P("manage:taste.analysisUpdated")));
		}
	}), w = I({
		mutationFn: (e) => he(e, void 0, !0),
		onSuccess: (e, t) => {
			N.setQueryData(F(t), e);
		}
	}), T = I({
		mutationFn: (e) => Ce(e),
		onSuccess: (e) => {
			N.setQueryData(F("all"), e.dashboard), p("all"), l(P("manage:taste.dataImported"));
		}
	}), ue = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !T.isPending && (T.reset(), T.mutate(t));
	}, fe = () => {
		x || C.isPending || (C.reset(), C.mutate());
	}, D = v.data;
	if (!D) return /* @__PURE__ */ (0, Y.jsx)(tt, { children: /* @__PURE__ */ (0, Y.jsx)(y, {
		tone: "error",
		title: P("manage:taste.loadFailedTitle"),
		children: v.error ? j(v.error) : P("manage:taste.loadFailedBody")
	}) });
	let O = D.summary || {}, k = D.coverage || {}, A = D.rankings || {}, me = D.storage || {}, M = ze(A.browser_categories || []), _e = ke(M).length > 0, ve = D.gaps || [], ye = k.tagged || 0, we = k.identified || 0, Oe = C.error ? j(C.error) : T.error ? j(T.error) : w.error ? j(w.error) : S?.status === "failed" ? S.error || P("manage:taste.readNotFound") : "", Ae = /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ (0, Y.jsx)(i, {
			variant: "secondary",
			...E(x || C.isPending || T.isPending),
			onClick: fe,
			children: P("manage:taste.readBrowserHistory")
		}), /* @__PURE__ */ (0, Y.jsx)(i, {
			variant: "secondary",
			...E(T.isPending),
			onClick: () => g.current?.click(),
			children: P("manage:taste.importHistoryFile")
		})]
	});
	return /* @__PURE__ */ (0, Y.jsx)(tt, { children: /* @__PURE__ */ (0, Y.jsxs)(ia, {
		value: d === "all" ? m === "peach" ? /* @__PURE__ */ (0, Y.jsx)(a, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: P("manage:shared.browseCollection")
		}) : Ae : /* @__PURE__ */ (0, Y.jsx)(i, {
			size: "small",
			variant: "secondary",
			onClick: () => p("all"),
			children: P("manage:taste.viewAllTime")
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
							"aria-label": P("manage:taste.evidenceLabel"),
							className: te,
							children: [/* @__PURE__ */ (0, Y.jsx)(n, {
								id: "peach",
								className: ee,
								children: P("manage:taste.peachActivity")
							}), /* @__PURE__ */ (0, Y.jsx)(n, {
								id: "browser",
								className: ee,
								children: P("manage:taste.browserHistory")
							})]
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(ie, {
									"aria-label": P("manage:taste.rangeLabel"),
									selectedKey: d,
									onSelectionChange: (e) => {
										e !== null && p(String(e));
									},
									children: se.map(([e, t]) => /* @__PURE__ */ (0, Y.jsx)(ae, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ (0, Y.jsx)(fa, {
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
					/* @__PURE__ */ (0, Y.jsx)(da, {
						onboarding: u,
						done: !!(O.history_sources || D.updated_at)
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							x ? /* @__PURE__ */ (0, Y.jsx)(ce, {
								label: b?.message || P("manage:taste.refreshing"),
								value: b?.checked,
								total: b?.total
							}) : null,
							T.isPending ? /* @__PURE__ */ (0, Y.jsx)(ce, { label: P("manage:taste.importing") }) : null,
							D.stale && D.error ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "error",
								action: /* @__PURE__ */ (0, Y.jsx)(i, {
									variant: "secondary",
									size: "small",
									...E(w.isPending),
									onClick: () => w.mutate(d),
									children: P("manage:shared.retryNow")
								}),
								children: P("manage:taste.updateFailedStale", {
									time: He(D.computed_at),
									error: D.error
								})
							}) : D.stale ? /* @__PURE__ */ (0, Y.jsx)(ce, { label: P("manage:taste.updatingStale", { time: He(D.computed_at) }) }) : null,
							Oe ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "error",
								children: Oe
							}) : null,
							S?.warnings?.length ? /* @__PURE__ */ (0, Y.jsx)(y, {
								tone: "warning",
								children: S.warnings.join("；")
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
										icon: We,
										term: P("manage:tasteSkeleton.browsingHistory"),
										figure: Number(O.history_visits || 0).toLocaleString(),
										detail: Se(O),
										detailTitle: `${Re(O.range_start)}—${Re(O.range_end)}`
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 1,
										icon: Ee,
										term: P("manage:tasteSkeleton.tasteDimensions"),
										figure: M.length.toLocaleString(),
										detail: M[0]?.name || P("manage:taste.noTopDimension")
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 2,
										icon: De,
										term: P("manage:tasteSkeleton.browsingLeads"),
										figure: ve.length.toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 3,
										icon: xe,
										term: P("manage:taste.bookmarks"),
										figure: Number(O.bookmarks || 0).toLocaleString(),
										detail: P("manage:taste.privateExports", {
											count: Number(me.exports || 0),
											size: be(me.bytes || 0)
										})
									})
								]
							}),
							/* @__PURE__ */ (0, Y.jsxs)("section", {
								className: _e ? `${Q} md:flex-row md:gap-6` : Q,
								"aria-label": P("manage:taste.browsingProfile"),
								children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
									className: _e ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: P("manage:taste.browsingProfile")
										}),
										_e ? /* @__PURE__ */ (0, Y.jsx)(Mi, {
											rows: M,
											label: P("manage:taste.topDimensions")
										}) : null,
										/* @__PURE__ */ (0, Y.jsx)("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: D.updated_at ? P("manage:taste.updatedAt", { date: Re(D.updated_at) }) : P("manage:taste.historyNotFetched")
										})
									]
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: "flex min-w-0 grow flex-col",
									children: M.length ? /* @__PURE__ */ (0, Y.jsx)(Ni, {
										rows: M,
										label: P("manage:taste.dimensionRanking")
									}) : /* @__PURE__ */ (0, Y.jsx)(c, {
										size: "compact",
										icon: De,
										title: P("manage:taste.noDimensions"),
										actions: /* @__PURE__ */ (0, Y.jsx)(aa, {}),
										children: Ui
									})
								})]
							}),
							/* @__PURE__ */ (0, Y.jsx)(qe, {
								activity: D.activity,
								title: P("manage:taste.browsingActivity"),
								dailyTitle: P("manage:taste.dailyActivity"),
								words: {
									unit: (e) => P("manage:taste.siteVisitsUnit", { count: e }),
									series: P("manage:taste.visitsSeries"),
									cell: (e) => P("manage:taste.visitsCell", { count: e })
								},
								tone: 4,
								empty: P("manage:taste.noVisitsHint")
							}),
							/* @__PURE__ */ (0, Y.jsx)(Pi, { flows: D.creator_flows }),
							/* @__PURE__ */ (0, Y.jsx)(la, {
								label: P("manage:taste.browserDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: P("manage:shared.tags"),
										props: {
											rows: A.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: Gi
										}
									},
									{
										id: "creators",
										name: P("manage:shared.creators"),
										props: {
											rows: A.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Ki
										}
									},
									{
										id: "performers",
										name: P("manage:shared.actresses"),
										props: {
											rows: A.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: P("manage:taste.noActressHistory")
										}
									},
									{
										id: "domains",
										name: P("manage:taste.topSites"),
										props: {
											rows: A.domains || [],
											kind: "",
											visual: "domain",
											empty: qi
										}
									},
									{
										id: "gaps",
										name: P("manage:tasteSkeleton.browsingLeads"),
										props: {
											rows: ve,
											kind: "",
											visual: "none",
											empty: Wi
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
										term: P("manage:taste.watchedInPeach"),
										figure: Number(O.peach_items || 0).toLocaleString(),
										detail: Be(O.peach_seconds || 0)
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 1,
										icon: de,
										term: P("manage:shared.like"),
										figure: Number(O.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 2,
										icon: pe,
										term: P("manage:taste.disliked"),
										figure: Number(O.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, Y.jsx)($, {
										accent: 3,
										icon: Ee,
										term: P("manage:taste.tagged"),
										figure: ye.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ (0, Y.jsxs)("section", {
								className: `${Q} md:flex-row md:gap-6`,
								"aria-label": P("manage:taste.peachViewing"),
								children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: P("manage:taste.peachViewing")
										}),
										/* @__PURE__ */ (0, Y.jsx)("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(O.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "text-body-2-regular text-text-secondary",
											children: P("manage:taste.watchedOrRatedUnit", { count: Number(O.peach_items || 0) })
										})
									]
								}), /* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ (0, Y.jsx)(ha, {
										term: P("manage:taste.tagged"),
										value: ye,
										rest: k.untagged || 0
									}), /* @__PURE__ */ (0, Y.jsx)(ha, {
										term: P("manage:taste.identified"),
										value: we,
										rest: k.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ (0, Y.jsx)(la, {
								label: P("manage:taste.peachDimensions"),
								onSignal: o,
								panels: [
									{
										id: "tags",
										name: P("manage:shared.tags"),
										props: {
											rows: A.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: Ji
										}
									},
									{
										id: "creators",
										name: P("manage:shared.creators"),
										props: {
											rows: A.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Yi
										}
									},
									{
										id: "performers",
										name: P("manage:shared.actresses"),
										props: {
											rows: A.peach_performers || [],
											kind: "performer",
											visual: "entity",
											empty: Xi
										}
									}
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, Y.jsx)(ua, {
				data: D,
				onSignal: o,
				navigate: s
			}),
			/* @__PURE__ */ (0, Y.jsx)(pa, {
				sources: D.sources || [],
				browsers: D.browsers || [],
				window: d,
				toast: l,
				emptyActions: Ae
			})
		]
	}) });
}
function ha({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, Y.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: e }), /* @__PURE__ */ (0, Y.jsxs)("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: P("manage:taste.remainingCount", { count: n })
				})]
			})]
		}), /* @__PURE__ */ (0, Y.jsx)(x, {
			meter: !0,
			label: P("manage:shared.termProgress", {
				term: e,
				value: t.toLocaleString(),
				total: r.toLocaleString()
			}),
			value: t,
			max: r
		})]
	});
}
export { ta as TASTE_GUIDE_KEY, ma as TastePage };

//# debugId=82269ec7-19b3-470f-8edb-5896e9f7f0fc