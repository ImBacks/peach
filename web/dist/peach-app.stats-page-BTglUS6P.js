(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7605abbc-298b-44d9-8268-2ac91145e9c4", e._sentryDebugIdIdentifier = "sentry-dbid-7605abbc-298b-44d9-8268-2ac91145e9c4");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as r, ButtonLink as i, EmptyState as a, LOC as o, MEDIA_SOURCE_ICONS as s, NR as c, Note as l, Progress as u, SEGMENT as d, SEGMENTED_TRACK as f, STATS_KEY as p, STAT_STRIP as m, SegmentedTabList as h, SourceMark as g, StatCard as _, StatusLabel as v, Xc as y, Xt as b, _8 as x, __toESM as S, bandRows as C, cardClass as w, clsx as T, errorMessage as E, fetchStats as ee, fmtCount as D, fmtSize as O, known as k, lengthRows as te, mM as ne, mediumRows as re, percentText as ie, playedFor as ae, playedItemUrl as oe, radialArc as se, radialBarSize as ce, radialCeiling as le, radialSlices as ue, reachedShare as de, replayRows as fe, require_jsx_runtime as pe, require_react as me, settingsPath as he, statCardClass as ge, t as A, uo as _e, useQuery as ve, watchNote as ye, watchedShare as be } from "./peach-app.js";
import { ActivityHeat as xe, BarCard as j, ExpandableRanking as Se, PolarAngleAxis as Ce, selectPolarAxisScale as we, selectPolarAxisTicks as Te, selectPolarGraphicalItemAxisTicks as Ee } from "./peach-app.expandable-ranking-msnIi2GJ.js";
import { AnimatedItems as De, CHART_CARD as Oe, CHART_COLORS as ke, Cell as Ae, ChartBackground as je, ChartContainer as Me, ChartEmpty as Ne, ChartLegend as Pe, ChartLegendContent as Fe, ChartTip as Ie, ChartTooltip as Le, ChartTooltipContent as Re, DefaultZIndexes as ze, LabelListFromLabelProp as Be, Layer as M, LoadingIndicator as Ve, PolarChart as He, PolarLabelListContextProvider as Ue, RegisterGraphicalItemId as We, Sector as N, SetPolarGraphicalItem as Ge, SetPolarLegendPayload as Ke, SetTooltipEntrySettings as qe, Shape as Je, ZIndexLayer as Ye, adaptEventsOfChild as Xe, arrayTooltipSearcher as Ze, combineAllBarPositions as Qe, combineBarPosition as $e, combineBarSizeList as et, combineDisplayedStackedData as tt, combineStackGroups as nt, combineStackedData as rt, createSelector as P, defaultPolarChartProps as it, findAllByType as at, getBandSizeOfAxis as F, getBaseValueOfBar as ot, getCateCoordinateOfBar as st, getColorsCount as ct, getNormalizedStackId as lt, getTooltipNameProp as ut, getValueByDataKey as dt, getZIndexFromUnknown as ft, interpolate as pt, isCategoricalAxis as mt, isNullish as ht, isStacked as gt, matchAppend as _t, mathSign as vt, noop as yt, resolveDefaultProps as bt, selectActiveTooltipIndex as xt, selectAngleAxis as St, selectBarCategoryGap as Ct, selectBarGap as wt, selectChartDataAndAlwaysIgnoreIndexes as Tt, selectChartDataWithIndexes as Et, selectChartLayout as I, selectPolarItemsSettings as Dt, selectPolarViewBox as Ot, selectRadiusAxis as kt, selectReverseStackOrder as At, selectRootBarSize as jt, selectRootMaxBarSize as Mt, selectStackOffsetType as Nt, selectTooltipAxis as Pt, selectUnfilteredPolarItems as Ft, sliceConfig as It, sliceKey as Lt, svgPropertiesNoEvents as Rt, svgPropertiesNoEventsFromUnknown as zt, truncateByDomain as Bt, useAnimationCallbacks as Vt, useAppSelector as L, useMouseClickItemDispatch as Ht, useMouseEnterItemDispatch as Ut, useMouseLeaveItemDispatch as Wt, usePolarChartLayout as Gt } from "./peach-app.chart-tip-CRxYp6KT.js";
import { ConnectionStatus as Kt } from "./peach-app.connection-status-BrXhLGSm.js";
import { Page as qt } from "./peach-app.page-QAncjzM1.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var R = /* @__PURE__ */ S(me()), Jt = ["option"];
function Yt(e, t) {
	if (e == null) return {};
	var n, r, i = Xt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Xt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Zt = N;
function Qt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function $t(e) {
	var t = e.option, n = Yt(e, Jt);
	return /*#__PURE__*/ R.createElement(Je, {
		option: t,
		DefaultShape: Zt,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function en(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function z(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? en(Object(n), !0).forEach(function(t) {
			tn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function tn(e, t, n) {
	return (t = nn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function nn(e) {
	var t = rn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function rn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var B = P([(e, t) => kt(e, t), (e, t) => we(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return z(z({}, e), {}, { scale: t });
}), an = (e, t) => Ee(e, "radiusAxis", t, !1), V = P([(e, t, n) => St(e, n), (e, t, n) => we(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return z(z({}, e), {}, { scale: t });
}), H = (e, t, n) => Te(e, "angleAxis", n, !1), U = P([Ft, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), on = P([
	I,
	B,
	an,
	V,
	H
], (e, t, n, r, i) => mt(e, "radiusAxis") ? F(t, n, !1) : F(r, i, !1)), sn = P([
	V,
	B,
	I
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return ot({ numericAxis: r });
}), cn = (e, t, n, r, i) => i, ln = (e, t, n, r, i) => n, un = (e, t, n, r, i) => t, dn = (e, t, n, r, i) => r.maxBarSize, fn = (e) => e.type === "radialBar", pn = P([
	I,
	Ft,
	ln,
	un
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(fn)), mn = P([
	pn,
	jt,
	() => void 0
], et), hn = P([
	I,
	Mt,
	V,
	H,
	B,
	an,
	dn
], (e, t, n, r, i, a, o) => {
	var s = ht(o) ? t : o;
	return e === "centric" ? F(n, r, !0) ?? s ?? 0 : F(i, a, !0) ?? s ?? 0;
}), gn = P([
	mn,
	Mt,
	wt,
	Ct,
	hn,
	on,
	dn
], Qe), _n = P([gn, U], $e), vn = P([Dt], (e) => e.filter(fn).filter(gt)), yn = P([
	vn,
	Tt,
	Pt
], tt), bn = P([
	yn,
	vn,
	Nt,
	At
], nt), xn = P([(e, t, n) => I(e) === "centric" ? bn(e, "radiusAxis", t) : bn(e, "angleAxis", n), U], rt), Sn = P([
	V,
	H,
	B,
	an,
	Et,
	U,
	on,
	I,
	sn,
	Ot,
	cn,
	_n,
	xn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Hn({
		angleAxis: e,
		angleAxisTicks: t,
		bandSize: o,
		baseValue: c,
		cells: u,
		cx: v,
		cy: y,
		dataKey: g,
		dataStartIndex: m,
		displayedData: p.slice(m, h + 1),
		endAngle: x,
		layout: s,
		minPointSize: _,
		pos: d,
		radiusAxis: n,
		radiusAxisTicks: r,
		stackedData: f,
		stackedDomain: f ? (s === "centric" ? n : e).scale.domain() : null,
		startAngle: b
	});
}), Cn = P([Tt, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), wn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], Tn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], En = ["value", "background"];
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(null, arguments);
}
function Dn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function G(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Dn(Object(n), !0).forEach(function(t) {
			On(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dn(Object(n)).forEach(function(t) {
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
function K(e, t) {
	if (e == null) return {};
	var n, r, i = jn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function jn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Mn = [];
function Nn(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = n.map((e) => ({
		value: e.value,
		payload: e.payload,
		parentViewBox: void 0,
		clockWise: !1,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	}));
	return /*#__PURE__*/ R.createElement(Ue, { value: t ? i : void 0 }, r);
}
function Pn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = K(n, wn), f = Rt(d), p = L(xt), m = n.onMouseEnter, h = n.onClick, g = n.onMouseLeave, _ = K(n, Tn), v = Ut(m, n.dataKey, u), y = Wt(g), b = Ht(h, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ R.createElement(Nn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && p === String(t)), r = v(e, t), u = y(e, t), m = b(e, t), h = G(G(G(G({}, f), {}, { cornerRadius: Qt(l) }, e), Xe(_, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: m,
			className: `recharts-radial-bar-sector ${e.className}`,
			forceCornerRadius: d.forceCornerRadius,
			cornerIsExternal: d.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ R.createElement(Ye, {
			zIndex: ze.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ R.createElement($t, h)) : /*#__PURE__*/ R.createElement($t, W({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, h));
	}), /*#__PURE__*/ R.createElement(Be, { label: n.label }), n.children);
}
var Fn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [G(G({}, e.next), {}, {
	startAngle: pt(e.prev.startAngle, e.next.startAngle, t),
	endAngle: pt(e.prev.endAngle, e.next.endAngle, t)
})] : [G(G({}, e.next), {}, { endAngle: pt(e.next.startAngle, e.next.endAngle, t) })]);
function In(e) {
	var t = e.props, n = e.previousSectorsRef, r = t.sectors, i = t.isAnimationActive, a = t.animationBegin, o = t.animationDuration, s = t.animationEasing, c = t.onAnimationStart, l = t.onAnimationEnd, u = Vt(c, l), d = u.isAnimating, f = u.handleAnimationStart, p = u.handleAnimationEnd, m = Gt();
	return m == null ? null : /*#__PURE__*/ R.createElement(De, {
		animationInput: t,
		animationIdPrefix: "recharts-radialbar-",
		items: r,
		previousItemsRef: n,
		isAnimationActive: i,
		animationBegin: a,
		animationDuration: o,
		animationEasing: s,
		onAnimationStart: f,
		onAnimationEnd: p,
		animationInterpolateFn: t.animationInterpolateFn,
		animationMatchBy: t.animationMatchBy,
		layout: m
	}, (e, n, r) => /*#__PURE__*/ R.createElement(Pn, {
		sectors: e,
		allOtherRadialBarProps: t,
		showLabels: !d,
		animationElapsedTime: n,
		isAnimating: d || n < 1,
		isEntrance: r
	}));
}
function Ln(e) {
	var t = (0, R.useRef)(null);
	return /*#__PURE__*/ R.createElement(In, {
		props: e,
		previousSectorsRef: t
	});
}
function Rn(e) {
	var t = L((t) => Cn(t, e.legendType));
	return /*#__PURE__*/ R.createElement(Ke, { legendPayload: t ?? [] });
}
var zn = /*#__PURE__*/ R.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: yt,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: ut(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ R.createElement(qe, { tooltipEntrySettings: d });
}), Bn = class extends R.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = zt(this.props.background);
		return /*#__PURE__*/ R.createElement(Ye, { zIndex: ft(this.props.background, ze.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = K(e, En);
			if (!i) return null;
			var o = G(G(G(G(G({ cornerRadius: Qt(t) }, a), {}, { fill: "#eee" }, i), n), Xe(this.props, e, r)), {}, {
				index: r,
				className: T("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ R.createElement($t, W({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = T("recharts-area", r);
		return /*#__PURE__*/ R.createElement(Ye, { zIndex: this.props.zIndex }, /*#__PURE__*/ R.createElement(M, { className: a }, i && /*#__PURE__*/ R.createElement(M, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ R.createElement(M, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ R.createElement(Ln, this.props))));
	}
};
function Vn(e) {
	var t = R.useMemo(() => at(e.children, Ae), [e.children]), n = R.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: lt(e.stackId),
		maxBarSize: e.maxBarSize,
		barSize: e.barSize,
		type: "radialBar",
		angleAxisId: e.angleAxisId,
		radiusAxisId: e.radiusAxisId
	}), [
		e.id,
		e.dataKey,
		e.minPointSize,
		e.stackId,
		e.maxBarSize,
		e.barSize,
		e.angleAxisId,
		e.radiusAxisId
	]), r = L((r) => Sn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? Mn;
	return /*#__PURE__*/ R.createElement(R.Fragment, null, /*#__PURE__*/ R.createElement(zn, {
		dataKey: e.dataKey,
		sectors: r,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id
	}), /*#__PURE__*/ R.createElement(Bn, W({}, e, { sectors: r })));
}
var q = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: _t,
	animationInterpolateFn: Fn,
	background: !1,
	cornerIsExternal: !1,
	cornerRadius: 0,
	forceCornerRadius: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: 0,
	radiusAxisId: 0,
	shape: Zt,
	zIndex: ze.bar
};
function Hn(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? Mn : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = Bt(n[r + t], i) : (b = dt(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = st({
				axis: c,
				ticks: l,
				bandSize: u,
				offset: d.offset,
				entry: e,
				index: t
			}), x != null && w != null && C != null) {
				S = x + d.size;
				var E = w - C;
				if (Math.abs(p) > 0 && Math.abs(E) < Math.abs(p)) {
					var ee = vt(E || p) * (Math.abs(p) - Math.abs(E));
					w += ee;
				}
				T = { background: {
					cx: m,
					cy: h,
					innerRadius: x,
					outerRadius: S,
					startAngle: v,
					endAngle: y
				} };
			}
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = st({
			axis: f,
			ticks: g,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), x != null && S != null && C != null) {
			w = C + d.size;
			var D = S - x;
			if (Math.abs(p) > 0 && Math.abs(D) < Math.abs(p)) {
				var O = vt(D || p) * (Math.abs(p) - Math.abs(D));
				S += O;
			}
		}
		return G(G(G({}, e), T), {}, {
			payload: e,
			value: n ? b : b[1],
			cx: m,
			cy: h,
			innerRadius: x,
			outerRadius: S,
			startAngle: C,
			endAngle: w
		}, _ && _[t] && _[t].props);
	});
}
function Un(e) {
	var t = bt(e, q);
	return /*#__PURE__*/ R.createElement(We, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ R.createElement(R.Fragment, null, /*#__PURE__*/ R.createElement(Ge, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? q.hide,
		angleAxisId: t.angleAxisId ?? q.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? q.radiusAxisId,
		stackId: lt(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ R.createElement(Rn, t), /*#__PURE__*/ R.createElement(Vn, W({}, t, { id: e }))));
}
Un.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
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
function Gn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wn(Object(n), !0).forEach(function(t) {
			Kn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Kn(e, t, n) {
	return (t = qn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function qn(e) {
	var t = Jn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Jn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Yn = ["axis", "item"], Xn = Gn(Gn({}, it), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Zn = /*#__PURE__*/ (0, R.forwardRef)((e, t) => {
	var n = bt(e, Xn);
	return /*#__PURE__*/ R.createElement(He, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Yn,
		tooltipPayloadSearcher: Ze,
		categoricalChartProps: n,
		ref: t
	});
}), J = pe(), Qn = "30%", $n = "100%", er = 5, tr = 14, nr = 5, rr = 1500, ir = (0, R.createContext)(null);
function ar() {
	let e = (0, R.use)(ir);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function Y({ config: e, data: t, nameKey: n, children: r, className: i, chartProps: a, variant: o = "full", max: s, innerRadius: c = Qn, outerRadius: l = $n, defaultSelectedDataKey: u = null, onSelectionChange: d, isLoading: f = !1, backgroundVariant: p }) {
	let m = (0, R.useId)().replace(/:/g, ""), [h, g] = (0, R.useState)(u), _ = fr(f), v = lr(o), y = (0, R.useCallback)((e, t) => {
		g(e), d?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [d]), b = (0, R.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${m}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		m
	]), x = (0, R.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: m,
		isLoading: f,
		selectedBar: h,
		selectBar: y
	}), [
		e,
		n,
		m,
		f,
		h,
		y
	]);
	return /* @__PURE__ */ (0, J.jsx)(ir, {
		value: x,
		children: /* @__PURE__ */ (0, J.jsxs)(Me, {
			className: i,
			config: e,
			children: [/* @__PURE__ */ (0, J.jsx)(Ve, { isLoading: f }), /* @__PURE__ */ (0, J.jsxs)(Zn, {
				id: m,
				data: f ? _ : b,
				innerRadius: c,
				outerRadius: l,
				startAngle: v.startAngle,
				endAngle: v.endAngle,
				cx: v.cx,
				cy: v.cy,
				...a,
				children: [
					s != null && s > 0 && /* @__PURE__ */ (0, J.jsx)(Ce, {
						type: "number",
						domain: [0, s],
						tick: !1,
						axisLine: !1
					}),
					p && /* @__PURE__ */ (0, J.jsx)(je, { variant: p }),
					r,
					f && /* @__PURE__ */ (0, J.jsx)(pr, {}),
					/* @__PURE__ */ (0, J.jsx)("defs", { children: /* @__PURE__ */ (0, J.jsx)(ur, {
						config: e,
						chartId: m
					}) })
				]
			})]
		})
	});
}
function or({ dataKey: e, cornerRadius: t = er, barSize: n = tr, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = ar();
	return s ? null : /* @__PURE__ */ (0, J.jsx)(Un, {
		dataKey: e,
		cornerRadius: t,
		barSize: n,
		background: r,
		className: "drop-shadow-sm",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: (t, n) => {
			if (!i) return;
			let r = t, a = r?.[o] ?? String(n), s = Number(r?.[e] ?? 0);
			l(c === a ? null : a, s);
		},
		shape: (e) => {
			let t = e[o], n = c === null || c === t;
			return /* @__PURE__ */ (0, J.jsx)(N, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function sr({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = ar();
	return i ? null : /* @__PURE__ */ (0, J.jsx)(Le, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, J.jsx)(Re, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function cr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: s } = ar();
	return a ? null : /* @__PURE__ */ (0, J.jsx)(Pe, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, J.jsx)(Fe, {
			selected: o,
			onSelectChange: s,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function lr(e) {
	switch (e) {
		case "semi": return {
			startAngle: 180,
			endAngle: 0,
			cx: "50%",
			cy: "70%"
		};
		default: return {
			startAngle: 90,
			endAngle: -270,
			cx: "50%",
			cy: "50%"
		};
	}
}
var ur = ({ config: e, chartId: t }) => /* @__PURE__ */ (0, J.jsx)(J.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = ct(n);
	return /* @__PURE__ */ (0, J.jsx)("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, J.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, J.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function dr() {
	return Array.from({ length: nr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function fr(e) {
	let [t, n] = (0, R.useState)(0);
	return (0, R.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, rr);
		return () => clearInterval(t);
	}, [e]), (0, R.useMemo)(() => dr(), [t]);
}
var pr = () => /* @__PURE__ */ (0, J.jsx)(Un, {
	dataKey: "value",
	cornerRadius: er,
	barSize: tr,
	background: !0,
	isAnimationActive: !0,
	animationDuration: rr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ (0, J.jsx)(N, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
Y.RadialBar = or, Y.Tooltip = sr, Y.Legend = cr;
// src/react/stats/radial-card.tsx
var mr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], hr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function gr({ title: e, rows: t, empty: n, unit: r = (e) => A("manage:radialCard.videoUnit", { count: e }) }) {
	let [i, a] = (0, R.useState)(-1), [o, s] = (0, R.useState)(-1), c = ue(t);
	if (!c.length) return /* @__PURE__ */ (0, J.jsx)(Ne, {
		title: e,
		children: n
	});
	let l = o >= 0 ? o : i, u = c.reduce((e, t) => e + t.value, 0), d = c[l], f = (e) => a((t) => t === e ? -1 : e), p = le(c.map((e) => e.value)), m = c.map((e, t) => ({
		slice: Lt(t),
		count: e.value,
		arc: se(e.value, p)
	}));
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		className: Oe,
		children: [
			/* @__PURE__ */ (0, J.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, J.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, J.jsxs)("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [d?.mark ? /* @__PURE__ */ (0, J.jsx)(g, { mark: d.mark }) : null, d ? d.name : e]
					}), /* @__PURE__ */ (0, J.jsx)("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (d ? d.value : u).toLocaleString()
					})]
				}), /* @__PURE__ */ (0, J.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: r(d ? d.value : u)
				})]
			}),
			/* @__PURE__ */ (0, J.jsx)("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => s(-1),
				children: /* @__PURE__ */ (0, J.jsxs)(Y, {
					data: m,
					nameKey: "slice",
					config: It(c.map((e) => e.name)),
					max: p,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ (0, J.jsx)(Y.RadialBar, {
						dataKey: "arc",
						barSize: ce(c.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ (0, J.jsx)(N, {
								...e,
								opacity: l >= 0 && l !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => f(t),
							onMouseEnter: (e, t) => s(t)
						}
					}), /* @__PURE__ */ (0, J.jsx)(Ie, {
						nameKey: "slice",
						valueKey: "count",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ (0, J.jsx)("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: c.map((e, t) => /* @__PURE__ */ (0, J.jsxs)("button", {
					type: "button",
					"aria-pressed": i === t,
					onClick: () => f(t),
					onPointerEnter: () => s(t),
					onPointerLeave: () => s(-1),
					onFocus: () => s(t),
					onBlur: () => s(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${hr[t % 6]}`,
					children: [
						/* @__PURE__ */ (0, J.jsxs)("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ (0, J.jsx)("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${mr[t % 6]}`
							}), /* @__PURE__ */ (0, J.jsxs)("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ (0, J.jsx)(g, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ (0, J.jsx)("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ (0, J.jsx)("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: O(e.bytes)
						})
					]
				}, Lt(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var _r = he("library"), vr = 10, yr = ke[5], br = ke[4], xr = `${w()} flex flex-col gap-4`, Sr = (e) => A("manage:radialCard.videoUnit", { count: e }), Cr = (e) => A("manage:stats.viewingUnit", { count: e }), wr = A("manage:stats.noVideoHint"), Tr = A("manage:stats.noTagHint"), Er = A("manage:stats.noWatchHint"), Dr = A("manage:stats.noTagSourceHint"), Or = A("manage:stats.noVolumeHint"), kr = A("manage:stats.noLibraryHint"), Ar = A("manage:stats.noLengthHint"), jr = A("manage:stats.noQualityHint"), Mr = A("manage:stats.noPlayTimeHint"), Nr = A("manage:stats.noReplayHint"), X = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, J.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, J.jsx)("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: D(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, J.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, J.jsx)("span", { children: e }), /* @__PURE__ */ (0, J.jsxs)("b", {
				className: "tabular-nums",
				children: [D(t), k(t) ? /* @__PURE__ */ (0, J.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: ie(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ (0, J.jsx)(u, {
			meter: !0,
			label: A("manage:shared.termProgress", {
				term: e,
				value: D(t),
				total: n.toLocaleString()
			}),
			value: k(t) ? X(t, r) : 0,
			max: r
		})]
	});
}
function Pr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ (0, J.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, J.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, J.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Fr({ headline: e, children: t }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: `${xr} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ (0, J.jsx)("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Ir({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, J.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, J.jsx)(gr, {
				title: A("manage:stats.cloudAndLocal"),
				empty: wr,
				rows: e.by_loc.map((e) => ({
					name: o[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: s[e.k] || "database"
				}))
			}), /* @__PURE__ */ (0, J.jsx)(gr, {
				title: A("manage:shared.library"),
				empty: kr,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: s[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ (0, J.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, J.jsx)(j, {
					title: A("manage:shared.duration"),
					unit: Sr,
					series: A("manage:processingTraffic.sourceVideos"),
					color: yr,
					rows: te(e.by_length),
					empty: Ar
				}),
				/* @__PURE__ */ (0, J.jsx)(j, {
					title: A("manage:shared.quality"),
					unit: Sr,
					series: A("manage:processingTraffic.sourceVideos"),
					color: yr,
					rows: C(e.by_quality),
					empty: jr
				}),
				/* @__PURE__ */ (0, J.jsx)(j, {
					title: A("manage:stats.fileTypes"),
					unit: (e) => A("manage:stats.itemsUnit", { count: e }),
					series: A("manage:stats.itemsSeries"),
					color: yr,
					layout: "horizontal",
					rows: re(e.by_medium),
					empty: wr
				})
			]
		})]
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		icon: c,
		title: A("manage:stats.noVideosTitle"),
		actions: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(i, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: A("manage:stats.newFollow")
		}), /* @__PURE__ */ (0, J.jsx)(i, {
			variant: "primary",
			href: _r,
			size: "small",
			children: A("manage:shared.addMedia")
		})] }),
		children: wr
	});
}
function Lr({ data: e }) {
	return /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)(xe, {
		activity: e.play_activity,
		title: A("manage:stats.playTimes"),
		dailyTitle: A("manage:stats.dailyPlays"),
		words: {
			unit: Cr,
			series: A("manage:shared.video"),
			cell: (e) => A("manage:stats.viewingCell", { count: e })
		},
		tone: 5,
		empty: Mr
	}), /* @__PURE__ */ (0, J.jsx)(j, {
		title: A("manage:stats.plays"),
		unit: Cr,
		series: A("manage:shared.video"),
		color: br,
		rows: fe(e.replays),
		empty: Nr
	})] });
}
function Rr({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: A("manage:stats.hasCreator"),
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: A("manage:stats.hasCode"),
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: A("manage:stats.hasLabel"),
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: A("manage:stats.framesExtracted"),
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ (0, J.jsx)(Q, {
				term: A("manage:stats.durationProbed"),
				value: e.duration,
				total: t
			})
		]
	});
}
function zr({ volume: e }) {
	let t = e.total, n = e.used ?? 0;
	return /* @__PURE__ */ (0, J.jsxs)("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, J.jsxs)("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ (0, J.jsx)("h3", {
					className: "min-w-0 break-words",
					children: e.label
				}), t == null ? e.online ? /* @__PURE__ */ (0, J.jsx)(v, { children: A("manage:stats.capacityNotFound") }) : /* @__PURE__ */ (0, J.jsx)(Kt, { online: !1 }) : /* @__PURE__ */ (0, J.jsxs)("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [O(n), /* @__PURE__ */ (0, J.jsx)("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: ie(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ (0, J.jsx)(u, {
				meter: !0,
				label: A("manage:stats.volumeUsage", { volume: e.label }),
				value: X(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ (0, J.jsxs)("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ (0, J.jsx)("span", {
					className: "min-w-0 break-words",
					children: e.root ?? A("manage:stats.notMapped")
				}), t == null ? null : /* @__PURE__ */ (0, J.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: A("manage:stats.volumeFreeTotal", {
						free: O(e.free ?? 0),
						total: O(t)
					})
				})]
			})
		]
	});
}
function Br({ volumes: e }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ (0, J.jsx)(zr, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		icon: y,
		title: A("manage:stats.noStorageTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(i, {
			variant: "primary",
			href: _r,
			size: "small",
			children: A("manage:shared.addMedia")
		}),
		children: Or
	});
}
function Vr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)(Se, {
		previewCount: vr,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ (0, J.jsx)("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ (0, J.jsxs)("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ (0, J.jsx)("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ (0, J.jsx)("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ (0, J.jsx)("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		icon: ne,
		title: A("manage:stats.noContentTagsTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(i, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: A(r ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Tr
	});
}
function Hr({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = be(e);
			return /* @__PURE__ */ (0, J.jsxs)("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, J.jsxs)("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ (0, J.jsx)("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ (0, J.jsx)("a", {
							href: oe(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ (0, J.jsxs)("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ (0, J.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ (0, J.jsx)("span", { children: ye(e) })]
					})]
				}), /* @__PURE__ */ (0, J.jsxs)("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ (0, J.jsx)(u, {
						meter: !0,
						label: A("manage:stats.watchedShare", { percent: t.toFixed(0) }),
						value: t
					}), /* @__PURE__ */ (0, J.jsx)("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: A("manage:stats.watchedReached", {
							watched: t.toFixed(0),
							reached: de(e).toFixed(0)
						})
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		icon: _e,
		title: A("manage:stats.noWatchHistoryTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(i, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: A(t ? "manage:shared.browseCollection" : "manage:shared.addMedia")
		}),
		children: Er
	});
}
function Ur({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ (0, J.jsx)("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ (0, J.jsxs)("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, J.jsxs)("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, J.jsx)("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ (0, J.jsxs)("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ (0, J.jsx)("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: Sr(e.assets)
						})]
					})]
				}),
				/* @__PURE__ */ (0, J.jsx)(u, {
					meter: !0,
					label: A("manage:stats.tagSourceCoverage", { source: e.k }),
					value: X(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ (0, J.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: A("manage:stats.tagsCount", { count: e.n })
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ (0, J.jsx)(a, {
		icon: ne,
		title: A("manage:stats.noTagSourcesTitle"),
		actions: /* @__PURE__ */ (0, J.jsx)(i, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: A(t ? "manage:shared.fillInMetadata" : "manage:shared.addMedia")
		}),
		children: Dr
	});
}
function $({ id: e, label: n, figure: r, detail: i, icon: a, accent: o }) {
	return /* @__PURE__ */ (0, J.jsx)(t, {
		id: e,
		className: ge({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ (0, J.jsx)(_, {
			label: n,
			icon: a,
			accent: o,
			figure: r,
			footer: i
		})
	});
}
function Wr(i) {
	let a = ve({
		queryKey: p,
		queryFn: ({ signal: e }) => ee(e)
	}), o = a.data;
	if (!o) return /* @__PURE__ */ (0, J.jsx)(qt, { children: /* @__PURE__ */ (0, J.jsx)(l, {
		tone: "error",
		title: A("manage:stats.loadFailedTitle"),
		children: a.error ? E(a.error) : A("manage:stats.loadFailedHint")
	}) });
	let s = o.consumption, c = o.storage_summary, u = o.by_loc.reduce((e, t) => e + t.videos, 0), g = o.by_loc.reduce((e, t) => e + t.bytes, 0), _ = k(o.tag_cov) ? ie(o.tag_cov, o.attribution.videos) : A("manage:shared.notFound"), v = `${D(o.tag_cov)} / ${o.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ (0, J.jsxs)(qt, { children: [/* @__PURE__ */ (0, J.jsxs)(n, {
		defaultSelectedKey: "inventory",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, J.jsxs)(r, {
				"aria-label": A("manage:stats.viewsLabel"),
				className: m,
				children: [
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "inventory",
						label: A("manage:statsSkeleton.collection"),
						icon: x,
						accent: 0,
						figure: u.toLocaleString(),
						detail: O(g)
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "viewing",
						label: A("manage:shared.watched"),
						icon: b,
						accent: 1,
						figure: D(s.played),
						detail: ae(s.play_seconds)
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "coverage",
						label: A("manage:statsSkeleton.contentTags"),
						icon: ne,
						accent: 2,
						figure: _,
						detail: v
					}),
					/* @__PURE__ */ (0, J.jsx)($, {
						id: "storage",
						label: A("manage:statsSkeleton.spaceUsed"),
						icon: y,
						accent: 3,
						figure: A("manage:stats.volumeCount", { count: c.online }),
						detail: c.measured ? A("manage:stats.usedSize", { size: O(c.used) }) : A("manage:stats.capacityNotFound")
					})
				]
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "inventory",
				children: /* @__PURE__ */ (0, J.jsx)(Ir, {
					data: o,
					...i
				})
			}),
			/* @__PURE__ */ (0, J.jsxs)(e, {
				id: "viewing",
				className: "flex flex-col gap-5",
				children: [/* @__PURE__ */ (0, J.jsx)(Fr, {
					headline: /* @__PURE__ */ (0, J.jsx)(Pr, {
						term: A("manage:stats.watchedTerm"),
						figure: D(s.played),
						unit: A("manage:stats.videosWithPlays", { count: s.played ?? 0 })
					}),
					children: /* @__PURE__ */ (0, J.jsxs)("div", {
						className: "inline-grid w-full gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.watchedInCollection"),
								value: s.library_played
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.watchedOnline"),
								value: s.online_played
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.climaxCount"),
								value: s.o_total
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.skimmed"),
								value: s.skimmed
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:shared.like"),
								value: s.liked
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.disliked"),
								value: s.dislike
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:stats.seenIt"),
								value: s.seen
							}),
							/* @__PURE__ */ (0, J.jsx)(Z, {
								term: A("manage:managePages.trash"),
								value: s.trash
							})
						]
					})
				}), /* @__PURE__ */ (0, J.jsx)(Lr, { data: o })]
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "coverage",
				children: /* @__PURE__ */ (0, J.jsx)(Fr, {
					headline: /* @__PURE__ */ (0, J.jsx)(Pr, {
						term: A("manage:stats.contentTagCoverage"),
						figure: _,
						unit: v
					}),
					children: /* @__PURE__ */ (0, J.jsx)(Rr, { attribution: o.attribution })
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "storage",
				children: /* @__PURE__ */ (0, J.jsx)(Fr, {
					headline: /* @__PURE__ */ (0, J.jsx)(Pr, {
						term: A("manage:statsSkeleton.spaceUsed"),
						figure: c.measured.toLocaleString(),
						unit: A("manage:stats.volumesMeasured", { count: c.measured })
					}),
					children: /* @__PURE__ */ (0, J.jsx)(Br, {
						volumes: o.storage_volumes,
						...i
					})
				})
			})
		]
	}), /* @__PURE__ */ (0, J.jsxs)(n, {
		defaultSelectedKey: "tags",
		className: `${w({ padding: "none" })} flex flex-col`,
		children: [
			/* @__PURE__ */ (0, J.jsx)("div", {
				className: "px-4 pt-3",
				children: /* @__PURE__ */ (0, J.jsxs)(h, {
					"aria-label": A("manage:stats.breakdownsLabel"),
					className: f,
					children: [
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "tags",
							className: d,
							children: A("manage:statsSkeleton.contentTags")
						}),
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "recent",
							className: d,
							children: A("manage:stats.recentlyWatched")
						}),
						/* @__PURE__ */ (0, J.jsx)(t, {
							id: "sources",
							className: d,
							children: A("manage:stats.tagSources")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "tags",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(Vr, {
					tags: o.top_tags,
					hasMedia: u > 0,
					...i
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "recent",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(Hr, {
					rows: o.recent,
					hasMedia: u > 0
				})
			}),
			/* @__PURE__ */ (0, J.jsx)(e, {
				id: "sources",
				className: "px-4 pt-3.5 pb-4",
				children: /* @__PURE__ */ (0, J.jsx)(Ur, {
					sources: o.tag_source,
					videos: o.attribution.videos
				})
			})
		]
	})] });
}
export { Wr as StatsPage };

//# debugId=7605abbc-298b-44d9-8268-2ac91145e9c4