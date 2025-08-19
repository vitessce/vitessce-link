"use strict";
exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 4184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpatialWrapper: () => (/* binding */ Y0)
/* harmony export */ });
/* harmony import */ var _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);



var Bl = { exports: {} }, Bn = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc;
function Jh() {
  return Uc || (Uc = 1, Bn.ConcurrentRoot = 1, Bn.ContinuousEventPriority = 4, Bn.DefaultEventPriority = 16, Bn.DiscreteEventPriority = 1, Bn.IdleEventPriority = 536870912, Bn.LegacyRoot = 0), Bn;
}
var Hc;
function $h() {
  return Hc || (Hc = 1, Bl.exports = Jh()), Bl.exports;
}
var Kr = $h();
function em(o) {
  let n;
  const r = /* @__PURE__ */ new Set(), i = (g, p) => {
    const h = typeof g == "function" ? g(n) : g;
    if (h !== n) {
      const v = n;
      n = p ? h : Object.assign({}, n, h), r.forEach((x) => x(n, v));
    }
  }, l = () => n, u = (g, p = l, h = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let v = p(n);
    function x() {
      const _ = p(n);
      if (!h(v, _)) {
        const A = v;
        g(v = _, A);
      }
    }
    return r.add(x), () => r.delete(x);
  }, f = { setState: i, getState: l, subscribe: (g, p, h) => p || h ? u(g, p, h) : (r.add(g), () => r.delete(g)), destroy: () => r.clear() };
  return n = o(i, l, f), f;
}
const tm = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Vc = tm ? react__WEBPACK_IMPORTED_MODULE_1__.useEffect : react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
function xo(o) {
  const n = typeof o == "function" ? em(o) : o, r = (i = n.getState, l = Object.is) => {
    const [, u] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((T) => T + 1, 0), a = n.getState(), d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(a), f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(i), g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(l), p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1), h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    h.current === void 0 && (h.current = i(a));
    let v, x = !1;
    (d.current !== a || f.current !== i || g.current !== l || p.current) && (v = i(a), x = !l(h.current, v)), Vc(() => {
      x && (h.current = v), d.current = a, f.current = i, g.current = l, p.current = !1;
    });
    const _ = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(a);
    Vc(() => {
      const T = () => {
        try {
          const w = n.getState(), E = f.current(w);
          g.current(h.current, E) || (d.current = w, h.current = E, u());
        } catch {
          p.current = !0, u();
        }
      }, S = n.subscribe(T);
      return n.getState() !== _.current && T(), S;
    }, []);
    const A = x ? v : h.current;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(A), A;
  };
  return Object.assign(r, n), r[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const i = [r, n];
    return {
      next() {
        const l = i.length <= 0;
        return { value: i.shift(), done: l };
      }
    };
  }, r;
}
var jl = { exports: {} }, Ul = { exports: {} }, Hl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc;
function nm() {
  return Gc || (Gc = 1, function(o) {
    function n(W, J) {
      var Z = W.length;
      W.push(J);
      e: for (; 0 < Z; ) {
        var te = Z - 1 >>> 1, ge = W[te];
        if (0 < l(ge, J)) W[te] = J, W[Z] = ge, Z = te;
        else break e;
      }
    }
    function r(W) {
      return W.length === 0 ? null : W[0];
    }
    function i(W) {
      if (W.length === 0) return null;
      var J = W[0], Z = W.pop();
      if (Z !== J) {
        W[0] = Z;
        e: for (var te = 0, ge = W.length, xe = ge >>> 1; te < xe; ) {
          var Fe = 2 * (te + 1) - 1, it = W[Fe], vt = Fe + 1, se = W[vt];
          if (0 > l(it, Z)) vt < ge && 0 > l(se, it) ? (W[te] = se, W[vt] = Z, te = vt) : (W[te] = it, W[Fe] = Z, te = Fe);
          else if (vt < ge && 0 > l(se, Z)) W[te] = se, W[vt] = Z, te = vt;
          else break e;
        }
      }
      return J;
    }
    function l(W, J) {
      var Z = W.sortIndex - J.sortIndex;
      return Z !== 0 ? Z : W.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      o.unstable_now = function() {
        return u.now();
      };
    } else {
      var a = Date, d = a.now();
      o.unstable_now = function() {
        return a.now() - d;
      };
    }
    var f = [], g = [], p = 1, h = null, v = 3, x = !1, _ = !1, A = !1, T = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function E(W) {
      for (var J = r(g); J !== null; ) {
        if (J.callback === null) i(g);
        else if (J.startTime <= W) i(g), J.sortIndex = J.expirationTime, n(f, J);
        else break;
        J = r(g);
      }
    }
    function P(W) {
      if (A = !1, E(W), !_) if (r(f) !== null) _ = !0, ae(M);
      else {
        var J = r(g);
        J !== null && we(P, J.startTime - W);
      }
    }
    function M(W, J) {
      _ = !1, A && (A = !1, S(z), z = -1), x = !0;
      var Z = v;
      try {
        for (E(J), h = r(f); h !== null && (!(h.expirationTime > J) || W && !k()); ) {
          var te = h.callback;
          if (typeof te == "function") {
            h.callback = null, v = h.priorityLevel;
            var ge = te(h.expirationTime <= J);
            J = o.unstable_now(), typeof ge == "function" ? h.callback = ge : h === r(f) && i(f), E(J);
          } else i(f);
          h = r(f);
        }
        if (h !== null) var xe = !0;
        else {
          var Fe = r(g);
          Fe !== null && we(P, Fe.startTime - J), xe = !1;
        }
        return xe;
      } finally {
        h = null, v = Z, x = !1;
      }
    }
    var L = !1, R = null, z = -1, D = 5, I = -1;
    function k() {
      return !(o.unstable_now() - I < D);
    }
    function j() {
      if (R !== null) {
        var W = o.unstable_now();
        I = W;
        var J = !0;
        try {
          J = R(!0, W);
        } finally {
          J ? G() : (L = !1, R = null);
        }
      } else L = !1;
    }
    var G;
    if (typeof w == "function") G = function() {
      w(j);
    };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(), ee = Y.port2;
      Y.port1.onmessage = j, G = function() {
        ee.postMessage(null);
      };
    } else G = function() {
      T(j, 0);
    };
    function ae(W) {
      R = W, L || (L = !0, G());
    }
    function we(W, J) {
      z = T(function() {
        W(o.unstable_now());
      }, J);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, o.unstable_continueExecution = function() {
      _ || x || (_ = !0, ae(M));
    }, o.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < W ? Math.floor(1e3 / W) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, o.unstable_getFirstCallbackNode = function() {
      return r(f);
    }, o.unstable_next = function(W) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = v;
      }
      var Z = v;
      v = J;
      try {
        return W();
      } finally {
        v = Z;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(W, J) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var Z = v;
      v = W;
      try {
        return J();
      } finally {
        v = Z;
      }
    }, o.unstable_scheduleCallback = function(W, J, Z) {
      var te = o.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? te + Z : te) : Z = te, W) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = Z + ge, W = { id: p++, callback: J, priorityLevel: W, startTime: Z, expirationTime: ge, sortIndex: -1 }, Z > te ? (W.sortIndex = Z, n(g, W), r(f) === null && W === r(g) && (A ? (S(z), z = -1) : A = !0, we(P, Z - te))) : (W.sortIndex = ge, n(f, W), _ || x || (_ = !0, ae(M))), W;
    }, o.unstable_shouldYield = k, o.unstable_wrapCallback = function(W) {
      var J = v;
      return function() {
        var Z = v;
        v = J;
        try {
          return W.apply(this, arguments);
        } finally {
          v = Z;
        }
      };
    };
  }(Hl)), Hl;
}
var Wc;
function ld() {
  return Wc || (Wc = 1, Ul.exports = nm()), Ul.exports;
}
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vl, Xc;
function rm() {
  return Xc || (Xc = 1, Vl = function(n) {
    var r = {}, i = react__WEBPACK_IMPORTED_MODULE_1__, l = ld(), u = Object.assign;
    function a(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) t += "&args[]=" + encodeURIComponent(arguments[s]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = Symbol.for("react.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), _ = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), M = Symbol.iterator;
    function L(e) {
      return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function R(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case g:
          return "Portal";
        case v:
          return "Profiler";
        case h:
          return "StrictMode";
        case T:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case _:
          return (e.displayName || "Context") + ".Consumer";
        case x:
          return (e._context.displayName || "Context") + ".Provider";
        case A:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case w:
          return t = e.displayName || null, t !== null ? t : R(e.type) || "Memo";
        case E:
          t = e._payload, e = e._init;
          try {
            return R(e(t));
          } catch {
          }
      }
      return null;
    }
    function z(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return R(t);
        case 8:
          return t === h ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function D(e) {
      var t = e, s = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (s = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? s : null;
    }
    function I(e) {
      if (D(e) !== e) throw Error(a(188));
    }
    function k(e) {
      var t = e.alternate;
      if (!t) {
        if (t = D(e), t === null) throw Error(a(188));
        return t !== e ? null : e;
      }
      for (var s = e, c = t; ; ) {
        var m = s.return;
        if (m === null) break;
        var y = m.alternate;
        if (y === null) {
          if (c = m.return, c !== null) {
            s = c;
            continue;
          }
          break;
        }
        if (m.child === y.child) {
          for (y = m.child; y; ) {
            if (y === s) return I(m), e;
            if (y === c) return I(m), t;
            y = y.sibling;
          }
          throw Error(a(188));
        }
        if (s.return !== c.return) s = m, c = y;
        else {
          for (var C = !1, N = m.child; N; ) {
            if (N === s) {
              C = !0, s = m, c = y;
              break;
            }
            if (N === c) {
              C = !0, c = m, s = y;
              break;
            }
            N = N.sibling;
          }
          if (!C) {
            for (N = y.child; N; ) {
              if (N === s) {
                C = !0, s = y, c = m;
                break;
              }
              if (N === c) {
                C = !0, c = y, s = m;
                break;
              }
              N = N.sibling;
            }
            if (!C) throw Error(a(189));
          }
        }
        if (s.alternate !== c) throw Error(a(190));
      }
      if (s.tag !== 3) throw Error(a(188));
      return s.stateNode.current === s ? e : t;
    }
    function j(e) {
      return e = k(e), e !== null ? G(e) : null;
    }
    function G(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = G(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Y(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        if (e.tag !== 4) {
          var t = Y(e);
          if (t !== null) return t;
        }
        e = e.sibling;
      }
      return null;
    }
    var ee = Array.isArray, ae = n.getPublicInstance, we = n.getRootHostContext, W = n.getChildHostContext, J = n.prepareForCommit, Z = n.resetAfterCommit, te = n.createInstance, ge = n.appendInitialChild, xe = n.finalizeInitialChildren, Fe = n.prepareUpdate, it = n.shouldSetTextContent, vt = n.createTextInstance, se = n.scheduleTimeout, fe = n.cancelTimeout, le = n.noTimeout, Me = n.isPrimaryRenderer, Pe = n.supportsMutation, Ve = n.supportsPersistence, ue = n.supportsHydration, Ie = n.getInstanceFromNode, st = n.preparePortalMount, yt = n.getCurrentEventPriority, Vi = n.detachDeletedInstance, Gi = n.supportsMicrotasks, _o = n.scheduleMicrotask, Yn = n.supportsTestSelectors, Wi = n.findFiberRoot, ei = n.getBoundingRect, ti = n.getTextContent, An = n.isHiddenSubtree, Eo = n.matchAccessibilityRole, To = n.setFocusIfFocusable, Xi = n.setupIntersectionObserver, ni = n.appendChild, Ao = n.appendChildToContainer, Po = n.commitTextUpdate, Ki = n.commitMount, Co = n.commitUpdate, Yi = n.insertBefore, qi = n.insertInContainerBefore, ri = n.removeChild, b = n.removeChildFromContainer, K = n.resetTextContent, ce = n.hideInstance, _e = n.hideTextInstance, Ge = n.unhideInstance, Xt = n.unhideTextInstance, en = n.clearContainer, eu = n.cloneInstance, ii = n.createContainerChildSet, Rt = n.appendChildToContainerChildSet, Kt = n.finalizeContainerChildren, Pn = n.replaceContainerChildren, Cn = n.cloneHiddenInstance, Mn = n.cloneHiddenTextInstance, pr = n.canHydrateInstance, Ud = n.canHydrateTextInstance, Hd = n.canHydrateSuspenseInstance, tu = n.isSuspenseInstancePending, Mo = n.isSuspenseInstanceFallback, Vd = n.registerSuspenseInstanceRetry, si = n.getNextHydratableSibling, Gd = n.getFirstHydratableChild, Wd = n.getFirstHydratableChildWithinContainer, Xd = n.getFirstHydratableChildWithinSuspenseInstance, Kd = n.hydrateInstance, Yd = n.hydrateTextInstance, qd = n.hydrateSuspenseInstance, Qd = n.getNextHydratableInstanceAfterSuspenseInstance, nu = n.commitHydratedContainer, Zd = n.commitHydratedSuspenseInstance, Jd = n.clearSuspenseBoundary, $d = n.clearSuspenseBoundaryFromContainer, ep = n.shouldDeleteUnhydratedTailInstances, tp = n.didNotMatchHydratedContainerTextInstance, np = n.didNotMatchHydratedTextInstance, Lo;
    function oi(e) {
      if (Lo === void 0) try {
        throw Error();
      } catch (s) {
        var t = s.stack.trim().match(/\n( *(at )?)/);
        Lo = t && t[1] || "";
      }
      return `
` + Lo + e;
    }
    var Ro = !1;
    function No(e, t) {
      if (!e || Ro) return "";
      Ro = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (X) {
            var c = X;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (X) {
            c = X;
          }
          e.call(t.prototype);
        }
        else {
          try {
            throw Error();
          } catch (X) {
            c = X;
          }
          e();
        }
      } catch (X) {
        if (X && c && typeof X.stack == "string") {
          for (var m = X.stack.split(`
`), y = c.stack.split(`
`), C = m.length - 1, N = y.length - 1; 1 <= C && 0 <= N && m[C] !== y[N]; ) N--;
          for (; 1 <= C && 0 <= N; C--, N--) if (m[C] !== y[N]) {
            if (C !== 1 || N !== 1)
              do
                if (C--, N--, 0 > N || m[C] !== y[N]) {
                  var H = `
` + m[C].replace(" at new ", " at ");
                  return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                }
              while (1 <= C && 0 <= N);
            break;
          }
        }
      } finally {
        Ro = !1, Error.prepareStackTrace = s;
      }
      return (e = e ? e.displayName || e.name : "") ? oi(e) : "";
    }
    var rp = Object.prototype.hasOwnProperty, Io = [], hr = -1;
    function Ln(e) {
      return { current: e };
    }
    function Re(e) {
      0 > hr || (e.current = Io[hr], Io[hr] = null, hr--);
    }
    function Le(e, t) {
      hr++, Io[hr] = e.current, e.current = t;
    }
    var Rn = {}, ot = Ln(Rn), xt = Ln(!1), qn = Rn;
    function mr(e, t) {
      var s = e.type.contextTypes;
      if (!s) return Rn;
      var c = e.stateNode;
      if (c && c.__reactInternalMemoizedUnmaskedChildContext === t) return c.__reactInternalMemoizedMaskedChildContext;
      var m = {}, y;
      for (y in s) m[y] = t[y];
      return c && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = m), m;
    }
    function St(e) {
      return e = e.childContextTypes, e != null;
    }
    function Qi() {
      Re(xt), Re(ot);
    }
    function ru(e, t, s) {
      if (ot.current !== Rn) throw Error(a(168));
      Le(ot, t), Le(xt, s);
    }
    function iu(e, t, s) {
      var c = e.stateNode;
      if (t = t.childContextTypes, typeof c.getChildContext != "function") return s;
      c = c.getChildContext();
      for (var m in c) if (!(m in t)) throw Error(a(108, z(e) || "Unknown", m));
      return u({}, s, c);
    }
    function Zi(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn, qn = ot.current, Le(ot, e), Le(xt, xt.current), !0;
    }
    function su(e, t, s) {
      var c = e.stateNode;
      if (!c) throw Error(a(169));
      s ? (e = iu(e, t, qn), c.__reactInternalMemoizedMergedChildContext = e, Re(xt), Re(ot), Le(ot, e)) : Re(xt), Le(xt, s);
    }
    var Yt = Math.clz32 ? Math.clz32 : op, ip = Math.log, sp = Math.LN2;
    function op(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (ip(e) / sp | 0) | 0;
    }
    var Ji = 64, $i = 4194304;
    function li(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function es(e, t) {
      var s = e.pendingLanes;
      if (s === 0) return 0;
      var c = 0, m = e.suspendedLanes, y = e.pingedLanes, C = s & 268435455;
      if (C !== 0) {
        var N = C & ~m;
        N !== 0 ? c = li(N) : (y &= C, y !== 0 && (c = li(y)));
      } else C = s & ~m, C !== 0 ? c = li(C) : y !== 0 && (c = li(y));
      if (c === 0) return 0;
      if (t !== 0 && t !== c && (t & m) === 0 && (m = c & -c, y = t & -t, m >= y || m === 16 && (y & 4194240) !== 0)) return t;
      if ((c & 4) !== 0 && (c |= s & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= c; 0 < t; ) s = 31 - Yt(t), m = 1 << s, c |= e[s], t &= ~m;
      return c;
    }
    function lp(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function ap(e, t) {
      for (var s = e.suspendedLanes, c = e.pingedLanes, m = e.expirationTimes, y = e.pendingLanes; 0 < y; ) {
        var C = 31 - Yt(y), N = 1 << C, H = m[C];
        H === -1 ? ((N & s) === 0 || (N & c) !== 0) && (m[C] = lp(N, t)) : H <= t && (e.expiredLanes |= N), y &= ~N;
      }
    }
    function zo(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Oo(e) {
      for (var t = [], s = 0; 31 > s; s++) t.push(e);
      return t;
    }
    function ai(e, t, s) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Yt(t), e[t] = s;
    }
    function up(e, t) {
      var s = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var c = e.eventTimes;
      for (e = e.expirationTimes; 0 < s; ) {
        var m = 31 - Yt(s), y = 1 << m;
        t[m] = 0, c[m] = -1, e[m] = -1, s &= ~y;
      }
    }
    function bo(e, t) {
      var s = e.entangledLanes |= t;
      for (e = e.entanglements; s; ) {
        var c = 31 - Yt(s), m = 1 << c;
        m & t | e[c] & t && (e[c] |= t), s &= ~m;
      }
    }
    var Ee = 0;
    function ou(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Do = l.unstable_scheduleCallback, lu = l.unstable_cancelCallback, cp = l.unstable_shouldYield, fp = l.unstable_requestPaint, Qe = l.unstable_now, ko = l.unstable_ImmediatePriority, dp = l.unstable_UserBlockingPriority, Fo = l.unstable_NormalPriority, pp = l.unstable_IdlePriority, ts = null, tn = null;
    function hp(e) {
      if (tn && typeof tn.onCommitFiberRoot == "function") try {
        tn.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    function mp(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var nn = typeof Object.is == "function" ? Object.is : mp, mn = null, ns = !1, Bo = !1;
    function au(e) {
      mn === null ? mn = [e] : mn.push(e);
    }
    function gp(e) {
      ns = !0, au(e);
    }
    function rn() {
      if (!Bo && mn !== null) {
        Bo = !0;
        var e = 0, t = Ee;
        try {
          var s = mn;
          for (Ee = 1; e < s.length; e++) {
            var c = s[e];
            do
              c = c(!0);
            while (c !== null);
          }
          mn = null, ns = !1;
        } catch (m) {
          throw mn !== null && (mn = mn.slice(e + 1)), Do(ko, rn), m;
        } finally {
          Ee = t, Bo = !1;
        }
      }
      return null;
    }
    var vp = d.ReactCurrentBatchConfig;
    function rs(e, t) {
      if (nn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      var s = Object.keys(e), c = Object.keys(t);
      if (s.length !== c.length) return !1;
      for (c = 0; c < s.length; c++) {
        var m = s[c];
        if (!rp.call(t, m) || !nn(e[m], t[m])) return !1;
      }
      return !0;
    }
    function yp(e) {
      switch (e.tag) {
        case 5:
          return oi(e.type);
        case 16:
          return oi("Lazy");
        case 13:
          return oi("Suspense");
        case 19:
          return oi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = No(e.type, !1), e;
        case 11:
          return e = No(e.type.render, !1), e;
        case 1:
          return e = No(e.type, !0), e;
        default:
          return "";
      }
    }
    function qt(e, t) {
      if (e && e.defaultProps) {
        t = u({}, t), e = e.defaultProps;
        for (var s in e) t[s] === void 0 && (t[s] = e[s]);
        return t;
      }
      return t;
    }
    var is = Ln(null), ss = null, gr = null, jo = null;
    function Uo() {
      jo = gr = ss = null;
    }
    function uu(e, t, s) {
      Me ? (Le(is, t._currentValue), t._currentValue = s) : (Le(is, t._currentValue2), t._currentValue2 = s);
    }
    function Ho(e) {
      var t = is.current;
      Re(is), Me ? e._currentValue = t : e._currentValue2 = t;
    }
    function Vo(e, t, s) {
      for (; e !== null; ) {
        var c = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, c !== null && (c.childLanes |= t)) : c !== null && (c.childLanes & t) !== t && (c.childLanes |= t), e === s) break;
        e = e.return;
      }
    }
    function vr(e, t) {
      ss = e, jo = gr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ct = !0), e.firstContext = null);
    }
    function Nt(e) {
      var t = Me ? e._currentValue : e._currentValue2;
      if (jo !== e) if (e = { context: e, memoizedValue: t, next: null }, gr === null) {
        if (ss === null) throw Error(a(308));
        gr = e, ss.dependencies = { lanes: 0, firstContext: e };
      } else gr = gr.next = e;
      return t;
    }
    var sn = null, Nn = !1;
    function Go(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function cu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
    }
    function gn(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function In(e, t) {
      var s = e.updateQueue;
      s !== null && (s = s.shared, We !== null && (e.mode & 1) !== 0 && (ve & 2) === 0 ? (e = s.interleaved, e === null ? (t.next = t, sn === null ? sn = [s] : sn.push(s)) : (t.next = e.next, e.next = t), s.interleaved = t) : (e = s.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), s.pending = t));
    }
    function os(e, t, s) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (s & 4194240) !== 0)) {
        var c = t.lanes;
        c &= e.pendingLanes, s |= c, t.lanes = s, bo(e, s);
      }
    }
    function fu(e, t) {
      var s = e.updateQueue, c = e.alternate;
      if (c !== null && (c = c.updateQueue, s === c)) {
        var m = null, y = null;
        if (s = s.firstBaseUpdate, s !== null) {
          do {
            var C = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
            y === null ? m = y = C : y = y.next = C, s = s.next;
          } while (s !== null);
          y === null ? m = y = t : y = y.next = t;
        } else m = y = t;
        s = { baseState: c.baseState, firstBaseUpdate: m, lastBaseUpdate: y, shared: c.shared, effects: c.effects }, e.updateQueue = s;
        return;
      }
      e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = t : e.next = t, s.lastBaseUpdate = t;
    }
    function ls(e, t, s, c) {
      var m = e.updateQueue;
      Nn = !1;
      var y = m.firstBaseUpdate, C = m.lastBaseUpdate, N = m.shared.pending;
      if (N !== null) {
        m.shared.pending = null;
        var H = N, X = H.next;
        H.next = null, C === null ? y = X : C.next = X, C = H;
        var $ = e.alternate;
        $ !== null && ($ = $.updateQueue, N = $.lastBaseUpdate, N !== C && (N === null ? $.firstBaseUpdate = X : N.next = X, $.lastBaseUpdate = H));
      }
      if (y !== null) {
        var pe = m.baseState;
        C = 0, $ = X = H = null, N = y;
        do {
          var oe = N.lane, Ce = N.eventTime;
          if ((c & oe) === oe) {
            $ !== null && ($ = $.next = {
              eventTime: Ce,
              lane: 0,
              tag: N.tag,
              payload: N.payload,
              callback: N.callback,
              next: null
            });
            e: {
              var ie = e, ct = N;
              switch (oe = t, Ce = s, ct.tag) {
                case 1:
                  if (ie = ct.payload, typeof ie == "function") {
                    pe = ie.call(Ce, pe, oe);
                    break e;
                  }
                  pe = ie;
                  break e;
                case 3:
                  ie.flags = ie.flags & -65537 | 128;
                case 0:
                  if (ie = ct.payload, oe = typeof ie == "function" ? ie.call(Ce, pe, oe) : ie, oe == null) break e;
                  pe = u({}, pe, oe);
                  break e;
                case 2:
                  Nn = !0;
              }
            }
            N.callback !== null && N.lane !== 0 && (e.flags |= 64, oe = m.effects, oe === null ? m.effects = [N] : oe.push(N));
          } else Ce = { eventTime: Ce, lane: oe, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, $ === null ? (X = $ = Ce, H = pe) : $ = $.next = Ce, C |= oe;
          if (N = N.next, N === null) {
            if (N = m.shared.pending, N === null) break;
            oe = N, N = oe.next, oe.next = null, m.lastBaseUpdate = oe, m.shared.pending = null;
          }
        } while (!0);
        if ($ === null && (H = pe), m.baseState = H, m.firstBaseUpdate = X, m.lastBaseUpdate = $, t = m.shared.interleaved, t !== null) {
          m = t;
          do
            C |= m.lane, m = m.next;
          while (m !== t);
        } else y === null && (m.shared.lanes = 0);
        Pr |= C, e.lanes = C, e.memoizedState = pe;
      }
    }
    function du(e, t, s) {
      if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var c = e[t], m = c.callback;
        if (m !== null) {
          if (c.callback = null, c = s, typeof m != "function") throw Error(a(191, m));
          m.call(c);
        }
      }
    }
    var pu = new i.Component().refs;
    function Wo(e, t, s, c) {
      t = e.memoizedState, s = s(c, t), s = s == null ? t : u({}, t, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
    }
    var as = { isMounted: function(e) {
      return (e = e._reactInternals) ? D(e) === e : !1;
    }, enqueueSetState: function(e, t, s) {
      e = e._reactInternals;
      var c = ht(), m = bn(e), y = gn(c, m);
      y.payload = t, s != null && (y.callback = s), In(e, y), t = Dt(e, m, c), t !== null && os(t, e, m);
    }, enqueueReplaceState: function(e, t, s) {
      e = e._reactInternals;
      var c = ht(), m = bn(e), y = gn(c, m);
      y.tag = 1, y.payload = t, s != null && (y.callback = s), In(e, y), t = Dt(e, m, c), t !== null && os(t, e, m);
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var s = ht(), c = bn(e), m = gn(
        s,
        c
      );
      m.tag = 2, t != null && (m.callback = t), In(e, m), t = Dt(e, c, s), t !== null && os(t, e, c);
    } };
    function hu(e, t, s, c, m, y, C) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(c, y, C) : t.prototype && t.prototype.isPureReactComponent ? !rs(s, c) || !rs(m, y) : !0;
    }
    function mu(e, t, s) {
      var c = !1, m = Rn, y = t.contextType;
      return typeof y == "object" && y !== null ? y = Nt(y) : (m = St(t) ? qn : ot.current, c = t.contextTypes, y = (c = c != null) ? mr(e, m) : Rn), t = new t(s, y), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = as, e.stateNode = t, t._reactInternals = e, c && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = m, e.__reactInternalMemoizedMaskedChildContext = y), t;
    }
    function gu(e, t, s, c) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, c), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, c), t.state !== e && as.enqueueReplaceState(t, t.state, null);
    }
    function Xo(e, t, s, c) {
      var m = e.stateNode;
      m.props = s, m.state = e.memoizedState, m.refs = pu, Go(e);
      var y = t.contextType;
      typeof y == "object" && y !== null ? m.context = Nt(y) : (y = St(t) ? qn : ot.current, m.context = mr(e, y)), m.state = e.memoizedState, y = t.getDerivedStateFromProps, typeof y == "function" && (Wo(e, t, y, s), m.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (t = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), t !== m.state && as.enqueueReplaceState(m, m.state, null), ls(e, s, m, c), m.state = e.memoizedState), typeof m.componentDidMount == "function" && (e.flags |= 4194308);
    }
    var yr = [], xr = 0, us = null, cs = 0, It = [], zt = 0, Qn = null, vn = 1, yn = "";
    function Zn(e, t) {
      yr[xr++] = cs, yr[xr++] = us, us = e, cs = t;
    }
    function vu(e, t, s) {
      It[zt++] = vn, It[zt++] = yn, It[zt++] = Qn, Qn = e;
      var c = vn;
      e = yn;
      var m = 32 - Yt(c) - 1;
      c &= ~(1 << m), s += 1;
      var y = 32 - Yt(t) + m;
      if (30 < y) {
        var C = m - m % 5;
        y = (c & (1 << C) - 1).toString(32), c >>= C, m -= C, vn = 1 << 32 - Yt(t) + m | s << m | c, yn = y + e;
      } else vn = 1 << y | s << m | c, yn = e;
    }
    function Ko(e) {
      e.return !== null && (Zn(e, 1), vu(e, 1, 0));
    }
    function Yo(e) {
      for (; e === us; ) us = yr[--xr], yr[xr] = null, cs = yr[--xr], yr[xr] = null;
      for (; e === Qn; ) Qn = It[--zt], It[zt] = null, yn = It[--zt], It[zt] = null, vn = It[--zt], It[zt] = null;
    }
    var At = null, Pt = null, ze = !1, ui = !1, Qt = null;
    function yu(e, t) {
      var s = kt(5, null, null, 0);
      s.elementType = "DELETED", s.stateNode = t, s.return = e, t = e.deletions, t === null ? (e.deletions = [s], e.flags |= 16) : t.push(s);
    }
    function xu(e, t) {
      switch (e.tag) {
        case 5:
          return t = pr(t, e.type, e.pendingProps), t !== null ? (e.stateNode = t, At = e, Pt = Gd(t), !0) : !1;
        case 6:
          return t = Ud(t, e.pendingProps), t !== null ? (e.stateNode = t, At = e, Pt = null, !0) : !1;
        case 13:
          if (t = Hd(t), t !== null) {
            var s = Qn !== null ? { id: vn, overflow: yn } : null;
            return e.memoizedState = { dehydrated: t, treeContext: s, retryLane: 1073741824 }, s = kt(18, null, null, 0), s.stateNode = t, s.return = e, e.child = s, At = e, Pt = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function qo(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Qo(e) {
      if (ze) {
        var t = Pt;
        if (t) {
          var s = t;
          if (!xu(e, t)) {
            if (qo(e)) throw Error(a(418));
            t = si(s);
            var c = At;
            t && xu(e, t) ? yu(c, s) : (e.flags = e.flags & -4097 | 2, ze = !1, At = e);
          }
        } else {
          if (qo(e)) throw Error(a(418));
          e.flags = e.flags & -4097 | 2, ze = !1, At = e;
        }
      }
    }
    function Su(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      At = e;
    }
    function ci(e) {
      if (!ue || e !== At) return !1;
      if (!ze) return Su(e), ze = !0, !1;
      if (e.tag !== 3 && (e.tag !== 5 || ep(e.type) && !it(e.type, e.memoizedProps))) {
        var t = Pt;
        if (t) {
          if (qo(e)) {
            for (e = Pt; e; ) e = si(e);
            throw Error(a(418));
          }
          for (; t; ) yu(e, t), t = si(t);
        }
      }
      if (Su(e), e.tag === 13) {
        if (!ue) throw Error(a(316));
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
        Pt = Qd(e);
      } else Pt = At ? si(e.stateNode) : null;
      return !0;
    }
    function Sr() {
      ue && (Pt = At = null, ui = ze = !1);
    }
    function Zo(e) {
      Qt === null ? Qt = [e] : Qt.push(e);
    }
    function fi(e, t, s) {
      if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (s._owner) {
          if (s = s._owner, s) {
            if (s.tag !== 1) throw Error(a(309));
            var c = s.stateNode;
          }
          if (!c) throw Error(a(147, e));
          var m = c, y = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y ? t.ref : (t = function(C) {
            var N = m.refs;
            N === pu && (N = m.refs = {}), C === null ? delete N[y] : N[y] = C;
          }, t._stringRef = y, t);
        }
        if (typeof e != "string") throw Error(a(284));
        if (!s._owner) throw Error(a(290, e));
      }
      return e;
    }
    function fs(e, t) {
      throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function wu(e) {
      var t = e._init;
      return t(e._payload);
    }
    function _u(e) {
      function t(F, O) {
        if (e) {
          var U = F.deletions;
          U === null ? (F.deletions = [O], F.flags |= 16) : U.push(O);
        }
      }
      function s(F, O) {
        if (!e) return null;
        for (; O !== null; ) t(F, O), O = O.sibling;
        return null;
      }
      function c(F, O) {
        for (F = /* @__PURE__ */ new Map(); O !== null; ) O.key !== null ? F.set(O.key, O) : F.set(O.index, O), O = O.sibling;
        return F;
      }
      function m(F, O) {
        return F = kn(F, O), F.index = 0, F.sibling = null, F;
      }
      function y(F, O, U) {
        return F.index = U, e ? (U = F.alternate, U !== null ? (U = U.index, U < O ? (F.flags |= 2, O) : U) : (F.flags |= 2, O)) : (F.flags |= 1048576, O);
      }
      function C(F) {
        return e && F.alternate === null && (F.flags |= 2), F;
      }
      function N(F, O, U, Q) {
        return O === null || O.tag !== 6 ? (O = Ol(U, F.mode, Q), O.return = F, O) : (O = m(O, U), O.return = F, O);
      }
      function H(F, O, U, Q) {
        var ne = U.type;
        return ne === p ? $(F, O, U.props.children, Q, U.key) : O !== null && (O.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === E && wu(ne) === O.type) ? (Q = m(O, U.props), Q.ref = fi(F, O, U), Q.return = F, Q) : (Q = Hs(U.type, U.key, U.props, null, F.mode, Q), Q.ref = fi(F, O, U), Q.return = F, Q);
      }
      function X(F, O, U, Q) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = bl(U, F.mode, Q), O.return = F, O) : (O = m(O, U.children || []), O.return = F, O);
      }
      function $(F, O, U, Q, ne) {
        return O === null || O.tag !== 7 ? (O = ir(U, F.mode, Q, ne), O.return = F, O) : (O = m(O, U), O.return = F, O);
      }
      function pe(F, O, U) {
        if (typeof O == "string" && O !== "" || typeof O == "number") return O = Ol("" + O, F.mode, U), O.return = F, O;
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case f:
              return U = Hs(O.type, O.key, O.props, null, F.mode, U), U.ref = fi(F, null, O), U.return = F, U;
            case g:
              return O = bl(O, F.mode, U), O.return = F, O;
            case E:
              var Q = O._init;
              return pe(F, Q(O._payload), U);
          }
          if (ee(O) || L(O)) return O = ir(O, F.mode, U, null), O.return = F, O;
          fs(F, O);
        }
        return null;
      }
      function oe(F, O, U, Q) {
        var ne = O !== null ? O.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number") return ne !== null ? null : N(F, O, "" + U, Q);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case f:
              return U.key === ne ? H(F, O, U, Q) : null;
            case g:
              return U.key === ne ? X(F, O, U, Q) : null;
            case E:
              return ne = U._init, oe(
                F,
                O,
                ne(U._payload),
                Q
              );
          }
          if (ee(U) || L(U)) return ne !== null ? null : $(F, O, U, Q, null);
          fs(F, U);
        }
        return null;
      }
      function Ce(F, O, U, Q, ne) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") return F = F.get(U) || null, N(O, F, "" + Q, ne);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case f:
              return F = F.get(Q.key === null ? U : Q.key) || null, H(O, F, Q, ne);
            case g:
              return F = F.get(Q.key === null ? U : Q.key) || null, X(O, F, Q, ne);
            case E:
              var me = Q._init;
              return Ce(F, O, U, me(Q._payload), ne);
          }
          if (ee(Q) || L(Q)) return F = F.get(U) || null, $(O, F, Q, ne, null);
          fs(O, Q);
        }
        return null;
      }
      function ie(F, O, U, Q) {
        for (var ne = null, me = null, he = O, Te = O = 0, Je = null; he !== null && Te < U.length; Te++) {
          he.index > Te ? (Je = he, he = null) : Je = he.sibling;
          var Ae = oe(F, he, U[Te], Q);
          if (Ae === null) {
            he === null && (he = Je);
            break;
          }
          e && he && Ae.alternate === null && t(F, he), O = y(Ae, O, Te), me === null ? ne = Ae : me.sibling = Ae, me = Ae, he = Je;
        }
        if (Te === U.length) return s(F, he), ze && Zn(F, Te), ne;
        if (he === null) {
          for (; Te < U.length; Te++) he = pe(F, U[Te], Q), he !== null && (O = y(he, O, Te), me === null ? ne = he : me.sibling = he, me = he);
          return ze && Zn(F, Te), ne;
        }
        for (he = c(F, he); Te < U.length; Te++) Je = Ce(he, F, Te, U[Te], Q), Je !== null && (e && Je.alternate !== null && he.delete(Je.key === null ? Te : Je.key), O = y(Je, O, Te), me === null ? ne = Je : me.sibling = Je, me = Je);
        return e && he.forEach(function(Fn) {
          return t(F, Fn);
        }), ze && Zn(F, Te), ne;
      }
      function ct(F, O, U, Q) {
        var ne = L(U);
        if (typeof ne != "function") throw Error(a(150));
        if (U = ne.call(U), U == null) throw Error(a(151));
        for (var me = ne = null, he = O, Te = O = 0, Je = null, Ae = U.next(); he !== null && !Ae.done; Te++, Ae = U.next()) {
          he.index > Te ? (Je = he, he = null) : Je = he.sibling;
          var Fn = oe(F, he, Ae.value, Q);
          if (Fn === null) {
            he === null && (he = Je);
            break;
          }
          e && he && Fn.alternate === null && t(F, he), O = y(Fn, O, Te), me === null ? ne = Fn : me.sibling = Fn, me = Fn, he = Je;
        }
        if (Ae.done) return s(
          F,
          he
        ), ze && Zn(F, Te), ne;
        if (he === null) {
          for (; !Ae.done; Te++, Ae = U.next()) Ae = pe(F, Ae.value, Q), Ae !== null && (O = y(Ae, O, Te), me === null ? ne = Ae : me.sibling = Ae, me = Ae);
          return ze && Zn(F, Te), ne;
        }
        for (he = c(F, he); !Ae.done; Te++, Ae = U.next()) Ae = Ce(he, F, Te, Ae.value, Q), Ae !== null && (e && Ae.alternate !== null && he.delete(Ae.key === null ? Te : Ae.key), O = y(Ae, O, Te), me === null ? ne = Ae : me.sibling = Ae, me = Ae);
        return e && he.forEach(function(Yp) {
          return t(F, Yp);
        }), ze && Zn(F, Te), ne;
      }
      function Ft(F, O, U, Q) {
        if (typeof U == "object" && U !== null && U.type === p && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case f:
              e: {
                for (var ne = U.key, me = O; me !== null; ) {
                  if (me.key === ne) {
                    if (ne = U.type, ne === p) {
                      if (me.tag === 7) {
                        s(F, me.sibling), O = m(me, U.props.children), O.return = F, F = O;
                        break e;
                      }
                    } else if (me.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === E && wu(ne) === me.type) {
                      s(F, me.sibling), O = m(me, U.props), O.ref = fi(F, me, U), O.return = F, F = O;
                      break e;
                    }
                    s(F, me);
                    break;
                  } else t(F, me);
                  me = me.sibling;
                }
                U.type === p ? (O = ir(U.props.children, F.mode, Q, U.key), O.return = F, F = O) : (Q = Hs(U.type, U.key, U.props, null, F.mode, Q), Q.ref = fi(F, O, U), Q.return = F, F = Q);
              }
              return C(F);
            case g:
              e: {
                for (me = U.key; O !== null; ) {
                  if (O.key === me) if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                    s(F, O.sibling), O = m(O, U.children || []), O.return = F, F = O;
                    break e;
                  } else {
                    s(F, O);
                    break;
                  }
                  else t(F, O);
                  O = O.sibling;
                }
                O = bl(U, F.mode, Q), O.return = F, F = O;
              }
              return C(F);
            case E:
              return me = U._init, Ft(F, O, me(U._payload), Q);
          }
          if (ee(U)) return ie(F, O, U, Q);
          if (L(U)) return ct(F, O, U, Q);
          fs(F, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, O !== null && O.tag === 6 ? (s(F, O.sibling), O = m(O, U), O.return = F, F = O) : (s(F, O), O = Ol(U, F.mode, Q), O.return = F, F = O), C(F)) : s(F, O);
      }
      return Ft;
    }
    var wr = _u(!0), Eu = _u(!1), di = {}, Ot = Ln(di), pi = Ln(di), _r = Ln(di);
    function on(e) {
      if (e === di) throw Error(a(174));
      return e;
    }
    function Jo(e, t) {
      Le(_r, t), Le(pi, e), Le(Ot, di), e = we(t), Re(Ot), Le(Ot, e);
    }
    function Er() {
      Re(Ot), Re(pi), Re(_r);
    }
    function Tu(e) {
      var t = on(_r.current), s = on(Ot.current);
      t = W(s, e.type, t), s !== t && (Le(pi, e), Le(Ot, t));
    }
    function $o(e) {
      pi.current === e && (Re(Ot), Re(pi));
    }
    var be = Ln(0);
    function ds(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var s = t.memoizedState;
          if (s !== null && (s = s.dehydrated, s === null || tu(s) || Mo(s))) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var el = [];
    function tl() {
      for (var e = 0; e < el.length; e++) {
        var t = el[e];
        Me ? t._workInProgressVersionPrimary = null : t._workInProgressVersionSecondary = null;
      }
      el.length = 0;
    }
    var ps = d.ReactCurrentDispatcher, bt = d.ReactCurrentBatchConfig, Tr = 0, Be = null, lt = null, Ze = null, hs = !1, hi = !1, mi = 0, xp = 0;
    function at() {
      throw Error(a(321));
    }
    function nl(e, t) {
      if (t === null) return !1;
      for (var s = 0; s < t.length && s < e.length; s++) if (!nn(e[s], t[s])) return !1;
      return !0;
    }
    function rl(e, t, s, c, m, y) {
      if (Tr = y, Be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ps.current = e === null || e.memoizedState === null ? Ep : Tp, e = s(c, m), hi) {
        y = 0;
        do {
          if (hi = !1, mi = 0, 25 <= y) throw Error(a(301));
          y += 1, Ze = lt = null, t.updateQueue = null, ps.current = Ap, e = s(c, m);
        } while (hi);
      }
      if (ps.current = xs, t = lt !== null && lt.next !== null, Tr = 0, Ze = lt = Be = null, hs = !1, t) throw Error(a(300));
      return e;
    }
    function il() {
      var e = mi !== 0;
      return mi = 0, e;
    }
    function xn() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Ze === null ? Be.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
    }
    function ln() {
      if (lt === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = lt.next;
      var t = Ze === null ? Be.memoizedState : Ze.next;
      if (t !== null) Ze = t, lt = e;
      else {
        if (e === null) throw Error(a(310));
        lt = e, e = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }, Ze === null ? Be.memoizedState = Ze = e : Ze = Ze.next = e;
      }
      return Ze;
    }
    function Jn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ms(e) {
      var t = ln(), s = t.queue;
      if (s === null) throw Error(a(311));
      s.lastRenderedReducer = e;
      var c = lt, m = c.baseQueue, y = s.pending;
      if (y !== null) {
        if (m !== null) {
          var C = m.next;
          m.next = y.next, y.next = C;
        }
        c.baseQueue = m = y, s.pending = null;
      }
      if (m !== null) {
        y = m.next, c = c.baseState;
        var N = C = null, H = null, X = y;
        do {
          var $ = X.lane;
          if ((Tr & $) === $) H !== null && (H = H.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), c = X.hasEagerState ? X.eagerState : e(c, X.action);
          else {
            var pe = {
              lane: $,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            H === null ? (N = H = pe, C = c) : H = H.next = pe, Be.lanes |= $, Pr |= $;
          }
          X = X.next;
        } while (X !== null && X !== y);
        H === null ? C = c : H.next = N, nn(c, t.memoizedState) || (Ct = !0), t.memoizedState = c, t.baseState = C, t.baseQueue = H, s.lastRenderedState = c;
      }
      if (e = s.interleaved, e !== null) {
        m = e;
        do
          y = m.lane, Be.lanes |= y, Pr |= y, m = m.next;
        while (m !== e);
      } else m === null && (s.lanes = 0);
      return [t.memoizedState, s.dispatch];
    }
    function gs(e) {
      var t = ln(), s = t.queue;
      if (s === null) throw Error(a(311));
      s.lastRenderedReducer = e;
      var c = s.dispatch, m = s.pending, y = t.memoizedState;
      if (m !== null) {
        s.pending = null;
        var C = m = m.next;
        do
          y = e(y, C.action), C = C.next;
        while (C !== m);
        nn(y, t.memoizedState) || (Ct = !0), t.memoizedState = y, t.baseQueue === null && (t.baseState = y), s.lastRenderedState = y;
      }
      return [y, c];
    }
    function Au() {
    }
    function Pu(e, t) {
      var s = Be, c = ln(), m = t(), y = !nn(c.memoizedState, m);
      if (y && (c.memoizedState = m, Ct = !0), c = c.queue, vi(Lu.bind(null, s, c, e), [e]), c.getSnapshot !== t || y || Ze !== null && Ze.memoizedState.tag & 1) {
        if (s.flags |= 2048, gi(9, Mu.bind(null, s, c, m, t), void 0, null), We === null) throw Error(a(349));
        (Tr & 30) !== 0 || Cu(s, t, m);
      }
      return m;
    }
    function Cu(e, t, s) {
      e.flags |= 16384, e = { getSnapshot: t, value: s }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.stores = [e]) : (s = t.stores, s === null ? t.stores = [e] : s.push(e));
    }
    function Mu(e, t, s, c) {
      t.value = s, t.getSnapshot = c, Ru(t) && Dt(e, 1, -1);
    }
    function Lu(e, t, s) {
      return s(function() {
        Ru(t) && Dt(e, 1, -1);
      });
    }
    function Ru(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var s = t();
        return !nn(e, s);
      } catch {
        return !0;
      }
    }
    function sl(e) {
      var t = xn();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = _p.bind(null, Be, e), [t.memoizedState, e];
    }
    function gi(e, t, s, c) {
      return e = { tag: e, create: t, destroy: s, deps: c, next: null }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.lastEffect = e.next = e) : (s = t.lastEffect, s === null ? t.lastEffect = e.next = e : (c = s.next, s.next = e, e.next = c, t.lastEffect = e)), e;
    }
    function Nu() {
      return ln().memoizedState;
    }
    function vs(e, t, s, c) {
      var m = xn();
      Be.flags |= e, m.memoizedState = gi(1 | t, s, void 0, c === void 0 ? null : c);
    }
    function ys(e, t, s, c) {
      var m = ln();
      c = c === void 0 ? null : c;
      var y = void 0;
      if (lt !== null) {
        var C = lt.memoizedState;
        if (y = C.destroy, c !== null && nl(c, C.deps)) {
          m.memoizedState = gi(t, s, y, c);
          return;
        }
      }
      Be.flags |= e, m.memoizedState = gi(1 | t, s, y, c);
    }
    function ol(e, t) {
      return vs(8390656, 8, e, t);
    }
    function vi(e, t) {
      return ys(2048, 8, e, t);
    }
    function Iu(e, t) {
      return ys(4, 2, e, t);
    }
    function zu(e, t) {
      return ys(4, 4, e, t);
    }
    function Ou(e, t) {
      if (typeof t == "function") return e = e(), t(e), function() {
        t(null);
      };
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function bu(e, t, s) {
      return s = s != null ? s.concat([e]) : null, ys(4, 4, Ou.bind(null, t, e), s);
    }
    function ll() {
    }
    function Du(e, t) {
      var s = ln();
      t = t === void 0 ? null : t;
      var c = s.memoizedState;
      return c !== null && t !== null && nl(t, c[1]) ? c[0] : (s.memoizedState = [e, t], e);
    }
    function ku(e, t) {
      var s = ln();
      t = t === void 0 ? null : t;
      var c = s.memoizedState;
      return c !== null && t !== null && nl(t, c[1]) ? c[0] : (e = e(), s.memoizedState = [e, t], e);
    }
    function Sp(e, t) {
      var s = Ee;
      Ee = s !== 0 && 4 > s ? s : 4, e(!0);
      var c = bt.transition;
      bt.transition = {};
      try {
        e(!1), t();
      } finally {
        Ee = s, bt.transition = c;
      }
    }
    function Fu() {
      return ln().memoizedState;
    }
    function wp(e, t, s) {
      var c = bn(e);
      s = { lane: c, action: s, hasEagerState: !1, eagerState: null, next: null }, Bu(e) ? ju(t, s) : (Uu(e, t, s), s = ht(), e = Dt(e, c, s), e !== null && Hu(e, t, c));
    }
    function _p(e, t, s) {
      var c = bn(e), m = { lane: c, action: s, hasEagerState: !1, eagerState: null, next: null };
      if (Bu(e)) ju(t, m);
      else {
        Uu(e, t, m);
        var y = e.alternate;
        if (e.lanes === 0 && (y === null || y.lanes === 0) && (y = t.lastRenderedReducer, y !== null)) try {
          var C = t.lastRenderedState, N = y(C, s);
          if (m.hasEagerState = !0, m.eagerState = N, nn(N, C)) return;
        } catch {
        } finally {
        }
        s = ht(), e = Dt(e, c, s), e !== null && Hu(e, t, c);
      }
    }
    function Bu(e) {
      var t = e.alternate;
      return e === Be || t !== null && t === Be;
    }
    function ju(e, t) {
      hi = hs = !0;
      var s = e.pending;
      s === null ? t.next = t : (t.next = s.next, s.next = t), e.pending = t;
    }
    function Uu(e, t, s) {
      We !== null && (e.mode & 1) !== 0 && (ve & 2) === 0 ? (e = t.interleaved, e === null ? (s.next = s, sn === null ? sn = [t] : sn.push(t)) : (s.next = e.next, e.next = s), t.interleaved = s) : (e = t.pending, e === null ? s.next = s : (s.next = e.next, e.next = s), t.pending = s);
    }
    function Hu(e, t, s) {
      if ((s & 4194240) !== 0) {
        var c = t.lanes;
        c &= e.pendingLanes, s |= c, t.lanes = s, bo(e, s);
      }
    }
    var xs = { readContext: Nt, useCallback: at, useContext: at, useEffect: at, useImperativeHandle: at, useInsertionEffect: at, useLayoutEffect: at, useMemo: at, useReducer: at, useRef: at, useState: at, useDebugValue: at, useDeferredValue: at, useTransition: at, useMutableSource: at, useSyncExternalStore: at, useId: at, unstable_isNewReconciler: !1 }, Ep = { readContext: Nt, useCallback: function(e, t) {
      return xn().memoizedState = [e, t === void 0 ? null : t], e;
    }, useContext: Nt, useEffect: ol, useImperativeHandle: function(e, t, s) {
      return s = s != null ? s.concat([e]) : null, vs(
        4194308,
        4,
        Ou.bind(null, t, e),
        s
      );
    }, useLayoutEffect: function(e, t) {
      return vs(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      return vs(4, 2, e, t);
    }, useMemo: function(e, t) {
      var s = xn();
      return t = t === void 0 ? null : t, e = e(), s.memoizedState = [e, t], e;
    }, useReducer: function(e, t, s) {
      var c = xn();
      return t = s !== void 0 ? s(t) : t, c.memoizedState = c.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, c.queue = e, e = e.dispatch = wp.bind(null, Be, e), [c.memoizedState, e];
    }, useRef: function(e) {
      var t = xn();
      return e = { current: e }, t.memoizedState = e;
    }, useState: sl, useDebugValue: ll, useDeferredValue: function(e) {
      var t = sl(e), s = t[0], c = t[1];
      return ol(function() {
        var m = bt.transition;
        bt.transition = {};
        try {
          c(e);
        } finally {
          bt.transition = m;
        }
      }, [e]), s;
    }, useTransition: function() {
      var e = sl(!1), t = e[0];
      return e = Sp.bind(null, e[1]), xn().memoizedState = e, [t, e];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(e, t, s) {
      var c = Be, m = xn();
      if (ze) {
        if (s === void 0) throw Error(a(407));
        s = s();
      } else {
        if (s = t(), We === null) throw Error(a(349));
        (Tr & 30) !== 0 || Cu(c, t, s);
      }
      m.memoizedState = s;
      var y = { value: s, getSnapshot: t };
      return m.queue = y, ol(Lu.bind(null, c, y, e), [e]), c.flags |= 2048, gi(9, Mu.bind(null, c, y, s, t), void 0, null), s;
    }, useId: function() {
      var e = xn(), t = We.identifierPrefix;
      if (ze) {
        var s = yn, c = vn;
        s = (c & ~(1 << 32 - Yt(c) - 1)).toString(32) + s, t = ":" + t + "R" + s, s = mi++, 0 < s && (t += "H" + s.toString(32)), t += ":";
      } else s = xp++, t = ":" + t + "r" + s.toString(32) + ":";
      return e.memoizedState = t;
    }, unstable_isNewReconciler: !1 }, Tp = {
      readContext: Nt,
      useCallback: Du,
      useContext: Nt,
      useEffect: vi,
      useImperativeHandle: bu,
      useInsertionEffect: Iu,
      useLayoutEffect: zu,
      useMemo: ku,
      useReducer: ms,
      useRef: Nu,
      useState: function() {
        return ms(Jn);
      },
      useDebugValue: ll,
      useDeferredValue: function(e) {
        var t = ms(Jn), s = t[0], c = t[1];
        return vi(function() {
          var m = bt.transition;
          bt.transition = {};
          try {
            c(e);
          } finally {
            bt.transition = m;
          }
        }, [e]), s;
      },
      useTransition: function() {
        var e = ms(Jn)[0], t = ln().memoizedState;
        return [e, t];
      },
      useMutableSource: Au,
      useSyncExternalStore: Pu,
      useId: Fu,
      unstable_isNewReconciler: !1
    }, Ap = {
      readContext: Nt,
      useCallback: Du,
      useContext: Nt,
      useEffect: vi,
      useImperativeHandle: bu,
      useInsertionEffect: Iu,
      useLayoutEffect: zu,
      useMemo: ku,
      useReducer: gs,
      useRef: Nu,
      useState: function() {
        return gs(Jn);
      },
      useDebugValue: ll,
      useDeferredValue: function(e) {
        var t = gs(Jn), s = t[0], c = t[1];
        return vi(function() {
          var m = bt.transition;
          bt.transition = {};
          try {
            c(e);
          } finally {
            bt.transition = m;
          }
        }, [e]), s;
      },
      useTransition: function() {
        var e = gs(Jn)[0], t = ln().memoizedState;
        return [e, t];
      },
      useMutableSource: Au,
      useSyncExternalStore: Pu,
      useId: Fu,
      unstable_isNewReconciler: !1
    };
    function al(e, t) {
      try {
        var s = "", c = t;
        do
          s += yp(c), c = c.return;
        while (c);
        var m = s;
      } catch (y) {
        m = `
Error generating stack: ` + y.message + `
` + y.stack;
      }
      return { value: e, source: t, stack: m };
    }
    function ul(e, t) {
      try {
        console.error(t.value);
      } catch (s) {
        setTimeout(function() {
          throw s;
        });
      }
    }
    var Pp = typeof WeakMap == "function" ? WeakMap : Map;
    function Vu(e, t, s) {
      s = gn(-1, s), s.tag = 3, s.payload = { element: null };
      var c = t.value;
      return s.callback = function() {
        bs || (bs = !0, Cl = c), ul(e, t);
      }, s;
    }
    function Gu(e, t, s) {
      s = gn(-1, s), s.tag = 3;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var m = t.value;
        s.payload = function() {
          return c(m);
        }, s.callback = function() {
          ul(e, t);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" && (s.callback = function() {
        ul(e, t), typeof c != "function" && (zn === null ? zn = /* @__PURE__ */ new Set([this]) : zn.add(this));
        var C = t.stack;
        this.componentDidCatch(t.value, { componentStack: C !== null ? C : "" });
      }), s;
    }
    function Wu(e, t, s) {
      var c = e.pingCache;
      if (c === null) {
        c = e.pingCache = new Pp();
        var m = /* @__PURE__ */ new Set();
        c.set(t, m);
      } else m = c.get(t), m === void 0 && (m = /* @__PURE__ */ new Set(), c.set(t, m));
      m.has(s) || (m.add(s), e = jp.bind(null, e, t, s), t.then(e, e));
    }
    function Xu(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Ku(e, t, s, c, m) {
      return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = gn(-1, 1), t.tag = 2, In(s, t))), s.lanes |= 1), e) : (e.flags |= 65536, e.lanes = m, e);
    }
    function an(e) {
      e.flags |= 4;
    }
    function Yu(e, t) {
      if (e !== null && e.child === t.child) return !0;
      if ((t.flags & 16) !== 0) return !1;
      for (e = t.child; e !== null; ) {
        if ((e.flags & 12854) !== 0 || (e.subtreeFlags & 12854) !== 0) return !1;
        e = e.sibling;
      }
      return !0;
    }
    var yi, xi, Ss, ws;
    if (Pe) yi = function(e, t) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === 5 || s.tag === 6) ge(e, s.stateNode);
        else if (s.tag !== 4 && s.child !== null) {
          s.child.return = s, s = s.child;
          continue;
        }
        if (s === t) break;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t) return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, xi = function() {
    }, Ss = function(e, t, s, c, m) {
      if (e = e.memoizedProps, e !== c) {
        var y = t.stateNode, C = on(Ot.current);
        s = Fe(y, s, e, c, m, C), (t.updateQueue = s) && an(t);
      }
    }, ws = function(e, t, s, c) {
      s !== c && an(t);
    };
    else if (Ve) {
      yi = function(e, t, s, c) {
        for (var m = t.child; m !== null; ) {
          if (m.tag === 5) {
            var y = m.stateNode;
            s && c && (y = Cn(y, m.type, m.memoizedProps, m)), ge(e, y);
          } else if (m.tag === 6) y = m.stateNode, s && c && (y = Mn(y, m.memoizedProps, m)), ge(e, y);
          else if (m.tag !== 4) {
            if (m.tag === 22 && m.memoizedState !== null) y = m.child, y !== null && (y.return = m), yi(e, m, !0, !0);
            else if (m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
          }
          if (m === t) break;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === t) return;
            m = m.return;
          }
          m.sibling.return = m.return, m = m.sibling;
        }
      };
      var qu = function(e, t, s, c) {
        for (var m = t.child; m !== null; ) {
          if (m.tag === 5) {
            var y = m.stateNode;
            s && c && (y = Cn(y, m.type, m.memoizedProps, m)), Rt(e, y);
          } else if (m.tag === 6) y = m.stateNode, s && c && (y = Mn(y, m.memoizedProps, m)), Rt(e, y);
          else if (m.tag !== 4) {
            if (m.tag === 22 && m.memoizedState !== null) y = m.child, y !== null && (y.return = m), qu(e, m, !0, !0);
            else if (m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
          }
          if (m === t) break;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === t) return;
            m = m.return;
          }
          m.sibling.return = m.return, m = m.sibling;
        }
      };
      xi = function(e, t) {
        var s = t.stateNode;
        if (!Yu(e, t)) {
          e = s.containerInfo;
          var c = ii(e);
          qu(c, t, !1, !1), s.pendingChildren = c, an(t), Kt(e, c);
        }
      }, Ss = function(e, t, s, c, m) {
        var y = e.stateNode, C = e.memoizedProps;
        if ((e = Yu(e, t)) && C === c) t.stateNode = y;
        else {
          var N = t.stateNode, H = on(Ot.current), X = null;
          C !== c && (X = Fe(N, s, C, c, m, H)), e && X === null ? t.stateNode = y : (y = eu(y, X, s, C, c, t, e, N), xe(y, s, c, m, H) && an(t), t.stateNode = y, e ? an(t) : yi(y, t, !1, !1));
        }
      }, ws = function(e, t, s, c) {
        s !== c ? (e = on(_r.current), s = on(Ot.current), t.stateNode = vt(c, e, s, t), an(t)) : t.stateNode = e.stateNode;
      };
    } else xi = function() {
    }, Ss = function() {
    }, ws = function() {
    };
    function Si(e, t) {
      if (!ze) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var s = null; t !== null; ) t.alternate !== null && (s = t), t = t.sibling;
          s === null ? e.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = e.tail;
          for (var c = null; s !== null; ) s.alternate !== null && (c = s), s = s.sibling;
          c === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : c.sibling = null;
      }
    }
    function ut(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, s = 0, c = 0;
      if (t) for (var m = e.child; m !== null; ) s |= m.lanes | m.childLanes, c |= m.subtreeFlags & 14680064, c |= m.flags & 14680064, m.return = e, m = m.sibling;
      else for (m = e.child; m !== null; ) s |= m.lanes | m.childLanes, c |= m.subtreeFlags, c |= m.flags, m.return = e, m = m.sibling;
      return e.subtreeFlags |= c, e.childLanes = s, t;
    }
    function Cp(e, t, s) {
      var c = t.pendingProps;
      switch (Yo(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ut(t), null;
        case 1:
          return St(t.type) && Qi(), ut(t), null;
        case 3:
          return c = t.stateNode, Er(), Re(xt), Re(ot), tl(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (e === null || e.child === null) && (ci(t) ? an(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qt !== null && (Rl(Qt), Qt = null))), xi(e, t), ut(t), null;
        case 5:
          $o(t), s = on(_r.current);
          var m = t.type;
          if (e !== null && t.stateNode != null) Ss(e, t, m, c, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!c) {
              if (t.stateNode === null) throw Error(a(166));
              return ut(t), null;
            }
            if (e = on(Ot.current), ci(t)) {
              if (!ue) throw Error(a(175));
              e = Kd(t.stateNode, t.type, t.memoizedProps, s, e, t, !ui), t.updateQueue = e, e !== null && an(t);
            } else {
              var y = te(m, c, s, e, t);
              yi(y, t, !1, !1), t.stateNode = y, xe(y, m, c, s, e) && an(t);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
          }
          return ut(t), null;
        case 6:
          if (e && t.stateNode != null) ws(e, t, e.memoizedProps, c);
          else {
            if (typeof c != "string" && t.stateNode === null) throw Error(a(166));
            if (e = on(_r.current), s = on(Ot.current), ci(t)) {
              if (!ue) throw Error(a(176));
              if (e = t.stateNode, c = t.memoizedProps, (s = Yd(e, c, t, !ui)) && (m = At, m !== null)) switch (y = (m.mode & 1) !== 0, m.tag) {
                case 3:
                  tp(m.stateNode.containerInfo, e, c, y);
                  break;
                case 5:
                  np(m.type, m.memoizedProps, m.stateNode, e, c, y);
              }
              s && an(t);
            } else t.stateNode = vt(c, e, s, t);
          }
          return ut(t), null;
        case 13:
          if (Re(be), c = t.memoizedState, ze && Pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) {
            for (e = Pt; e; ) e = si(e);
            return Sr(), t.flags |= 98560, t;
          }
          if (c !== null && c.dehydrated !== null) {
            if (c = ci(t), e === null) {
              if (!c) throw Error(a(318));
              if (!ue) throw Error(a(344));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
              qd(e, t);
            } else Sr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            return ut(t), null;
          }
          return Qt !== null && (Rl(Qt), Qt = null), (t.flags & 128) !== 0 ? (t.lanes = s, t) : (c = c !== null, s = !1, e === null ? ci(t) : s = e.memoizedState !== null, c && !s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (be.current & 1) !== 0 ? qe === 0 && (qe = 3) : Il())), t.updateQueue !== null && (t.flags |= 4), ut(t), null);
        case 4:
          return Er(), xi(e, t), e === null && st(t.stateNode.containerInfo), ut(t), null;
        case 10:
          return Ho(t.type._context), ut(t), null;
        case 17:
          return St(t.type) && Qi(), ut(t), null;
        case 19:
          if (Re(be), m = t.memoizedState, m === null) return ut(t), null;
          if (c = (t.flags & 128) !== 0, y = m.rendering, y === null) if (c) Si(m, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (y = ds(e), y !== null) {
                for (t.flags |= 128, Si(m, !1), e = y.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), t.subtreeFlags = 0, e = s, c = t.child; c !== null; ) s = c, m = e, s.flags &= 14680066, y = s.alternate, y === null ? (s.childLanes = 0, s.lanes = m, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = y.childLanes, s.lanes = y.lanes, s.child = y.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = y.memoizedProps, s.memoizedState = y.memoizedState, s.updateQueue = y.updateQueue, s.type = y.type, m = y.dependencies, s.dependencies = m === null ? null : { lanes: m.lanes, firstContext: m.firstContext }), c = c.sibling;
                return Le(be, be.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            m.tail !== null && Qe() > Pl && (t.flags |= 128, c = !0, Si(m, !1), t.lanes = 4194304);
          }
          else {
            if (!c) if (e = ds(y), e !== null) {
              if (t.flags |= 128, c = !0, e = e.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), Si(m, !0), m.tail === null && m.tailMode === "hidden" && !y.alternate && !ze) return ut(t), null;
            } else 2 * Qe() - m.renderingStartTime > Pl && s !== 1073741824 && (t.flags |= 128, c = !0, Si(m, !1), t.lanes = 4194304);
            m.isBackwards ? (y.sibling = t.child, t.child = y) : (e = m.last, e !== null ? e.sibling = y : t.child = y, m.last = y);
          }
          return m.tail !== null ? (t = m.tail, m.rendering = t, m.tail = t.sibling, m.renderingStartTime = Qe(), t.sibling = null, e = be.current, Le(be, c ? e & 1 | 2 : e & 1), t) : (ut(t), null);
        case 22:
        case 23:
          return Nl(), c = t.memoizedState !== null, e !== null && e.memoizedState !== null !== c && (t.flags |= 8192), c && (t.mode & 1) !== 0 ? (Mt & 1073741824) !== 0 && (ut(t), Pe && t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    var Mp = d.ReactCurrentOwner, Ct = !1;
    function pt(e, t, s, c) {
      t.child = e === null ? Eu(t, null, s, c) : wr(t, e.child, s, c);
    }
    function Qu(e, t, s, c, m) {
      s = s.render;
      var y = t.ref;
      return vr(t, m), c = rl(e, t, s, c, y, m), s = il(), e !== null && !Ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~m, Sn(e, t, m)) : (ze && s && Ko(t), t.flags |= 1, pt(e, t, c, m), t.child);
    }
    function Zu(e, t, s, c, m) {
      if (e === null) {
        var y = s.type;
        return typeof y == "function" && !zl(y) && y.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15, t.type = y, Ju(e, t, y, c, m)) : (e = Hs(s.type, null, c, t, t.mode, m), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (y = e.child, (e.lanes & m) === 0) {
        var C = y.memoizedProps;
        if (s = s.compare, s = s !== null ? s : rs, s(C, c) && e.ref === t.ref) return Sn(e, t, m);
      }
      return t.flags |= 1, e = kn(y, c), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ju(e, t, s, c, m) {
      if (e !== null && rs(e.memoizedProps, c) && e.ref === t.ref) if (Ct = !1, (e.lanes & m) !== 0) (e.flags & 131072) !== 0 && (Ct = !0);
      else return t.lanes = e.lanes, Sn(e, t, m);
      return cl(e, t, s, c, m);
    }
    function $u(e, t, s) {
      var c = t.pendingProps, m = c.children, y = e !== null ? e.memoizedState : null;
      if (c.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null }, Le(Ar, Mt), Mt |= s;
      else if ((s & 1073741824) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, c = y !== null ? y.baseLanes : s, Le(Ar, Mt), Mt |= c;
      else return e = y !== null ? y.baseLanes | s : s, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null }, t.updateQueue = null, Le(Ar, Mt), Mt |= e, null;
      else y !== null ? (c = y.baseLanes | s, t.memoizedState = null) : c = s, Le(Ar, Mt), Mt |= c;
      return pt(e, t, m, s), t.child;
    }
    function ec(e, t) {
      var s = t.ref;
      (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512, t.flags |= 2097152);
    }
    function cl(e, t, s, c, m) {
      var y = St(s) ? qn : ot.current;
      return y = mr(t, y), vr(t, m), s = rl(e, t, s, c, y, m), c = il(), e !== null && !Ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~m, Sn(e, t, m)) : (ze && c && Ko(t), t.flags |= 1, pt(e, t, s, m), t.child);
    }
    function tc(e, t, s, c, m) {
      if (St(s)) {
        var y = !0;
        Zi(t);
      } else y = !1;
      if (vr(t, m), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), mu(t, s, c), Xo(t, s, c, m), c = !0;
      else if (e === null) {
        var C = t.stateNode, N = t.memoizedProps;
        C.props = N;
        var H = C.context, X = s.contextType;
        typeof X == "object" && X !== null ? X = Nt(X) : (X = St(s) ? qn : ot.current, X = mr(t, X));
        var $ = s.getDerivedStateFromProps, pe = typeof $ == "function" || typeof C.getSnapshotBeforeUpdate == "function";
        pe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== c || H !== X) && gu(t, C, c, X), Nn = !1;
        var oe = t.memoizedState;
        C.state = oe, ls(t, c, C, m), H = t.memoizedState, N !== c || oe !== H || xt.current || Nn ? (typeof $ == "function" && (Wo(t, s, $, c), H = t.memoizedState), (N = Nn || hu(t, s, N, c, oe, H, X)) ? (pe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = c, t.memoizedState = H), C.props = c, C.state = H, C.context = X, c = N) : (typeof C.componentDidMount == "function" && (t.flags |= 4194308), c = !1);
      } else {
        C = t.stateNode, cu(e, t), N = t.memoizedProps, X = t.type === t.elementType ? N : qt(t.type, N), C.props = X, pe = t.pendingProps, oe = C.context, H = s.contextType, typeof H == "object" && H !== null ? H = Nt(H) : (H = St(s) ? qn : ot.current, H = mr(t, H));
        var Ce = s.getDerivedStateFromProps;
        ($ = typeof Ce == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (N !== pe || oe !== H) && gu(t, C, c, H), Nn = !1, oe = t.memoizedState, C.state = oe, ls(t, c, C, m);
        var ie = t.memoizedState;
        N !== pe || oe !== ie || xt.current || Nn ? (typeof Ce == "function" && (Wo(t, s, Ce, c), ie = t.memoizedState), (X = Nn || hu(t, s, X, c, oe, ie, H) || !1) ? ($ || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(
          c,
          ie,
          H
        ), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(c, ie, H)), typeof C.componentDidUpdate == "function" && (t.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || N === e.memoizedProps && oe === e.memoizedState || (t.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && oe === e.memoizedState || (t.flags |= 1024), t.memoizedProps = c, t.memoizedState = ie), C.props = c, C.state = ie, C.context = H, c = X) : (typeof C.componentDidUpdate != "function" || N === e.memoizedProps && oe === e.memoizedState || (t.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && oe === e.memoizedState || (t.flags |= 1024), c = !1);
      }
      return fl(e, t, s, c, y, m);
    }
    function fl(e, t, s, c, m, y) {
      ec(e, t);
      var C = (t.flags & 128) !== 0;
      if (!c && !C) return m && su(t, s, !1), Sn(e, t, y);
      c = t.stateNode, Mp.current = t;
      var N = C && typeof s.getDerivedStateFromError != "function" ? null : c.render();
      return t.flags |= 1, e !== null && C ? (t.child = wr(t, e.child, null, y), t.child = wr(t, null, N, y)) : pt(e, t, N, y), t.memoizedState = c.state, m && su(t, s, !0), t.child;
    }
    function nc(e) {
      var t = e.stateNode;
      t.pendingContext ? ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ru(e, t.context, !1), Jo(e, t.containerInfo);
    }
    function rc(e, t, s, c, m) {
      return Sr(), Zo(m), t.flags |= 256, pt(e, t, s, c), t.child;
    }
    var _s = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Es(e) {
      return { baseLanes: e, cachePool: null };
    }
    function ic(e, t, s) {
      var c = t.pendingProps, m = be.current, y = !1, C = (t.flags & 128) !== 0, N;
      if ((N = C) || (N = e !== null && e.memoizedState === null ? !1 : (m & 2) !== 0), N ? (y = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (m |= 1), Le(be, m & 1), e === null)
        return Qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : Mo(e) ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = c.children, e = c.fallback, y ? (c = t.mode, y = t.child, m = { mode: "hidden", children: m }, (c & 1) === 0 && y !== null ? (y.childLanes = 0, y.pendingProps = m) : y = Vs(m, c, 0, null), e = ir(e, c, s, null), y.return = t, e.return = t, y.sibling = e, t.child = y, t.child.memoizedState = Es(s), t.memoizedState = _s, e) : dl(t, m));
      if (m = e.memoizedState, m !== null) {
        if (N = m.dehydrated, N !== null) {
          if (C)
            return t.flags & 256 ? (t.flags &= -257, Ts(e, t, s, Error(a(422)))) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (y = c.fallback, m = t.mode, c = Vs({ mode: "visible", children: c.children }, m, 0, null), y = ir(y, m, s, null), y.flags |= 2, c.return = t, y.return = t, c.sibling = y, t.child = c, (t.mode & 1) !== 0 && wr(
              t,
              e.child,
              null,
              s
            ), t.child.memoizedState = Es(s), t.memoizedState = _s, y);
          if ((t.mode & 1) === 0) t = Ts(e, t, s, null);
          else if (Mo(N)) t = Ts(e, t, s, Error(a(419)));
          else if (c = (s & e.childLanes) !== 0, Ct || c) {
            if (c = We, c !== null) {
              switch (s & -s) {
                case 4:
                  y = 2;
                  break;
                case 16:
                  y = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  y = 32;
                  break;
                case 536870912:
                  y = 268435456;
                  break;
                default:
                  y = 0;
              }
              c = (y & (c.suspendedLanes | s)) !== 0 ? 0 : y, c !== 0 && c !== m.retryLane && (m.retryLane = c, Dt(e, c, -1));
            }
            Il(), t = Ts(e, t, s, Error(a(421)));
          } else tu(N) ? (t.flags |= 128, t.child = e.child, t = Up.bind(null, e), Vd(N, t), t = null) : (s = m.treeContext, ue && (Pt = Xd(N), At = t, ze = !0, Qt = null, ui = !1, s !== null && (It[zt++] = vn, It[zt++] = yn, It[zt++] = Qn, vn = s.id, yn = s.overflow, Qn = t)), t = dl(t, t.pendingProps.children), t.flags |= 4096);
          return t;
        }
        return y ? (c = oc(e, t, c.children, c.fallback, s), y = t.child, m = e.child.memoizedState, y.memoizedState = m === null ? Es(s) : { baseLanes: m.baseLanes | s, cachePool: null }, y.childLanes = e.childLanes & ~s, t.memoizedState = _s, c) : (s = sc(e, t, c.children, s), t.memoizedState = null, s);
      }
      return y ? (c = oc(e, t, c.children, c.fallback, s), y = t.child, m = e.child.memoizedState, y.memoizedState = m === null ? Es(s) : { baseLanes: m.baseLanes | s, cachePool: null }, y.childLanes = e.childLanes & ~s, t.memoizedState = _s, c) : (s = sc(e, t, c.children, s), t.memoizedState = null, s);
    }
    function dl(e, t) {
      return t = Vs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function sc(e, t, s, c) {
      var m = e.child;
      return e = m.sibling, s = kn(m, { mode: "visible", children: s }), (t.mode & 1) === 0 && (s.lanes = c), s.return = t, s.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = s;
    }
    function oc(e, t, s, c, m) {
      var y = t.mode;
      e = e.child;
      var C = e.sibling, N = { mode: "hidden", children: s };
      return (y & 1) === 0 && t.child !== e ? (s = t.child, s.childLanes = 0, s.pendingProps = N, t.deletions = null) : (s = kn(e, N), s.subtreeFlags = e.subtreeFlags & 14680064), C !== null ? c = kn(C, c) : (c = ir(c, y, m, null), c.flags |= 2), c.return = t, s.return = t, s.sibling = c, t.child = s, c;
    }
    function Ts(e, t, s, c) {
      return c !== null && Zo(c), wr(t, e.child, null, s), e = dl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function lc(e, t, s) {
      e.lanes |= t;
      var c = e.alternate;
      c !== null && (c.lanes |= t), Vo(e.return, t, s);
    }
    function pl(e, t, s, c, m) {
      var y = e.memoizedState;
      y === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: c, tail: s, tailMode: m } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = s, y.tailMode = m);
    }
    function ac(e, t, s) {
      var c = t.pendingProps, m = c.revealOrder, y = c.tail;
      if (pt(e, t, c.children, s), c = be.current, (c & 2) !== 0) c = c & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && lc(e, s, t);
          else if (e.tag === 19) lc(e, s, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        c &= 1;
      }
      if (Le(be, c), (t.mode & 1) === 0) t.memoizedState = null;
      else switch (m) {
        case "forwards":
          for (s = t.child, m = null; s !== null; ) e = s.alternate, e !== null && ds(e) === null && (m = s), s = s.sibling;
          s = m, s === null ? (m = t.child, t.child = null) : (m = s.sibling, s.sibling = null), pl(t, !1, m, s, y);
          break;
        case "backwards":
          for (s = null, m = t.child, t.child = null; m !== null; ) {
            if (e = m.alternate, e !== null && ds(e) === null) {
              t.child = m;
              break;
            }
            e = m.sibling, m.sibling = s, s = m, m = e;
          }
          pl(t, !0, s, null, y);
          break;
        case "together":
          pl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Sn(e, t, s) {
      if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (s & t.childLanes) === 0) return null;
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (e = t.child, s = kn(e, e.pendingProps), t.child = s, s.return = t; e.sibling !== null; ) e = e.sibling, s = s.sibling = kn(e, e.pendingProps), s.return = t;
        s.sibling = null;
      }
      return t.child;
    }
    function Lp(e, t, s) {
      switch (t.tag) {
        case 3:
          nc(t), Sr();
          break;
        case 5:
          Tu(t);
          break;
        case 1:
          St(t.type) && Zi(t);
          break;
        case 4:
          Jo(t, t.stateNode.containerInfo);
          break;
        case 10:
          uu(t, t.type._context, t.memoizedProps.value);
          break;
        case 13:
          var c = t.memoizedState;
          if (c !== null)
            return c.dehydrated !== null ? (Le(be, be.current & 1), t.flags |= 128, null) : (s & t.child.childLanes) !== 0 ? ic(e, t, s) : (Le(be, be.current & 1), e = Sn(e, t, s), e !== null ? e.sibling : null);
          Le(be, be.current & 1);
          break;
        case 19:
          if (c = (s & t.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (c) return ac(
              e,
              t,
              s
            );
            t.flags |= 128;
          }
          var m = t.memoizedState;
          if (m !== null && (m.rendering = null, m.tail = null, m.lastEffect = null), Le(be, be.current), c) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, $u(e, t, s);
      }
      return Sn(e, t, s);
    }
    function Rp(e, t) {
      switch (Yo(t), t.tag) {
        case 1:
          return St(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return Er(), Re(xt), Re(ot), tl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return $o(t), null;
        case 13:
          if (Re(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(a(340));
            Sr();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return Re(be), null;
        case 4:
          return Er(), null;
        case 10:
          return Ho(t.type._context), null;
        case 22:
        case 23:
          return Nl(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var As = !1, $n = !1, Np = typeof WeakSet == "function" ? WeakSet : Set, q = null;
    function Ps(e, t) {
      var s = e.ref;
      if (s !== null) if (typeof s == "function") try {
        s(null);
      } catch (c) {
        Et(e, t, c);
      }
      else s.current = null;
    }
    function hl(e, t, s) {
      try {
        s();
      } catch (c) {
        Et(e, t, c);
      }
    }
    var uc = !1;
    function Ip(e, t) {
      for (J(e.containerInfo), q = t; q !== null; ) if (e = q, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, q = t;
      else for (; q !== null; ) {
        e = q;
        try {
          var s = e.alternate;
          if ((e.flags & 1024) !== 0) switch (e.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (s !== null) {
                var c = s.memoizedProps, m = s.memoizedState, y = e.stateNode, C = y.getSnapshotBeforeUpdate(e.elementType === e.type ? c : qt(e.type, c), m);
                y.__reactInternalSnapshotBeforeUpdate = C;
              }
              break;
            case 3:
              Pe && en(e.stateNode.containerInfo);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(a(163));
          }
        } catch (N) {
          Et(e, e.return, N);
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, q = t;
          break;
        }
        q = e.return;
      }
      return s = uc, uc = !1, s;
    }
    function er(e, t, s) {
      var c = t.updateQueue;
      if (c = c !== null ? c.lastEffect : null, c !== null) {
        var m = c = c.next;
        do {
          if ((m.tag & e) === e) {
            var y = m.destroy;
            m.destroy = void 0, y !== void 0 && hl(t, s, y);
          }
          m = m.next;
        } while (m !== c);
      }
    }
    function wi(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var s = t = t.next;
        do {
          if ((s.tag & e) === e) {
            var c = s.create;
            s.destroy = c();
          }
          s = s.next;
        } while (s !== t);
      }
    }
    function ml(e) {
      var t = e.ref;
      if (t !== null) {
        var s = e.stateNode;
        switch (e.tag) {
          case 5:
            e = ae(s);
            break;
          default:
            e = s;
        }
        typeof t == "function" ? t(e) : t.current = e;
      }
    }
    function cc(e, t, s) {
      if (tn && typeof tn.onCommitFiberUnmount == "function") try {
        tn.onCommitFiberUnmount(ts, t);
      } catch {
      }
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
            var c = e = e.next;
            do {
              var m = c, y = m.destroy;
              m = m.tag, y !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && hl(t, s, y), c = c.next;
            } while (c !== e);
          }
          break;
        case 1:
          if (Ps(t, s), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
            e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
          } catch (C) {
            Et(
              t,
              s,
              C
            );
          }
          break;
        case 5:
          Ps(t, s);
          break;
        case 4:
          Pe ? gc(e, t, s) : Ve && Ve && (t = t.stateNode.containerInfo, s = ii(t), Pn(t, s));
      }
    }
    function fc(e, t, s) {
      for (var c = t; ; ) if (cc(e, c, s), c.child === null || Pe && c.tag === 4) {
        if (c === t) break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t) return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      } else c.child.return = c, c = c.child;
    }
    function dc(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function pc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function hc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || pc(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function mc(e) {
      if (Pe) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (pc(t)) break e;
            t = t.return;
          }
          throw Error(a(160));
        }
        var s = t;
        switch (s.tag) {
          case 5:
            t = s.stateNode, s.flags & 32 && (K(t), s.flags &= -33), s = hc(e), vl(e, s, t);
            break;
          case 3:
          case 4:
            t = s.stateNode.containerInfo, s = hc(e), gl(e, s, t);
            break;
          default:
            throw Error(a(161));
        }
      }
    }
    function gl(e, t, s) {
      var c = e.tag;
      if (c === 5 || c === 6) e = e.stateNode, t ? qi(s, e, t) : Ao(s, e);
      else if (c !== 4 && (e = e.child, e !== null)) for (gl(e, t, s), e = e.sibling; e !== null; ) gl(e, t, s), e = e.sibling;
    }
    function vl(e, t, s) {
      var c = e.tag;
      if (c === 5 || c === 6) e = e.stateNode, t ? Yi(s, e, t) : ni(s, e);
      else if (c !== 4 && (e = e.child, e !== null)) for (vl(e, t, s), e = e.sibling; e !== null; ) vl(e, t, s), e = e.sibling;
    }
    function gc(e, t, s) {
      for (var c = t, m = !1, y, C; ; ) {
        if (!m) {
          m = c.return;
          e: for (; ; ) {
            if (m === null) throw Error(a(160));
            switch (y = m.stateNode, m.tag) {
              case 5:
                C = !1;
                break e;
              case 3:
                y = y.containerInfo, C = !0;
                break e;
              case 4:
                y = y.containerInfo, C = !0;
                break e;
            }
            m = m.return;
          }
          m = !0;
        }
        if (c.tag === 5 || c.tag === 6) fc(e, c, s), C ? b(y, c.stateNode) : ri(y, c.stateNode);
        else if (c.tag === 18) C ? $d(y, c.stateNode) : Jd(y, c.stateNode);
        else if (c.tag === 4) {
          if (c.child !== null) {
            y = c.stateNode.containerInfo, C = !0, c.child.return = c, c = c.child;
            continue;
          }
        } else if (cc(e, c, s), c.child !== null) {
          c.child.return = c, c = c.child;
          continue;
        }
        if (c === t) break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t) return;
          c = c.return, c.tag === 4 && (m = !1);
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    }
    function yl(e, t) {
      if (Pe) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            er(3, t, t.return), wi(3, t), er(5, t, t.return);
            return;
          case 1:
            return;
          case 5:
            var s = t.stateNode;
            if (s != null) {
              var c = t.memoizedProps;
              e = e !== null ? e.memoizedProps : c;
              var m = t.type, y = t.updateQueue;
              t.updateQueue = null, y !== null && Co(s, y, m, e, c, t);
            }
            return;
          case 6:
            if (t.stateNode === null) throw Error(a(162));
            s = t.memoizedProps, Po(t.stateNode, e !== null ? e.memoizedProps : s, s);
            return;
          case 3:
            ue && e !== null && e.memoizedState.isDehydrated && nu(t.stateNode.containerInfo);
            return;
          case 12:
            return;
          case 13:
            Cs(t);
            return;
          case 19:
            Cs(t);
            return;
          case 17:
            return;
        }
        throw Error(a(163));
      }
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          er(3, t, t.return), wi(3, t), er(5, t, t.return);
          return;
        case 12:
          return;
        case 13:
          Cs(t);
          return;
        case 19:
          Cs(t);
          return;
        case 3:
          ue && e !== null && e.memoizedState.isDehydrated && nu(t.stateNode.containerInfo);
          break;
        case 22:
        case 23:
          return;
      }
      e: if (Ve) {
        switch (t.tag) {
          case 1:
          case 5:
          case 6:
            break e;
          case 3:
          case 4:
            t = t.stateNode, Pn(t.containerInfo, t.pendingChildren);
            break e;
        }
        throw Error(a(163));
      }
    }
    function Cs(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var s = e.stateNode;
        s === null && (s = e.stateNode = new Np()), t.forEach(function(c) {
          var m = Hp.bind(null, e, c);
          s.has(c) || (s.add(c), c.then(m, m));
        });
      }
    }
    function zp(e, t) {
      for (q = t; q !== null; ) {
        t = q;
        var s = t.deletions;
        if (s !== null) for (var c = 0; c < s.length; c++) {
          var m = s[c];
          try {
            var y = e;
            Pe ? gc(y, m, t) : fc(y, m, t);
            var C = m.alternate;
            C !== null && (C.return = null), m.return = null;
          } catch (ne) {
            Et(m, t, ne);
          }
        }
        if (s = t.child, (t.subtreeFlags & 12854) !== 0 && s !== null) s.return = t, q = s;
        else for (; q !== null; ) {
          t = q;
          try {
            var N = t.flags;
            if (N & 32 && Pe && K(t.stateNode), N & 512) {
              var H = t.alternate;
              if (H !== null) {
                var X = H.ref;
                X !== null && (typeof X == "function" ? X(null) : X.current = null);
              }
            }
            if (N & 8192) switch (t.tag) {
              case 13:
                if (t.memoizedState !== null) {
                  var $ = t.alternate;
                  ($ === null || $.memoizedState === null) && (Al = Qe());
                }
                break;
              case 22:
                var pe = t.memoizedState !== null, oe = t.alternate, Ce = oe !== null && oe.memoizedState !== null;
                if (s = t, Pe) {
                  e: if (c = s, m = pe, y = null, Pe) for (var ie = c; ; ) {
                    if (ie.tag === 5) {
                      if (y === null) {
                        y = ie;
                        var ct = ie.stateNode;
                        m ? ce(ct) : Ge(ie.stateNode, ie.memoizedProps);
                      }
                    } else if (ie.tag === 6) {
                      if (y === null) {
                        var Ft = ie.stateNode;
                        m ? _e(Ft) : Xt(Ft, ie.memoizedProps);
                      }
                    } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === c) && ie.child !== null) {
                      ie.child.return = ie, ie = ie.child;
                      continue;
                    }
                    if (ie === c) break;
                    for (; ie.sibling === null; ) {
                      if (ie.return === null || ie.return === c) break e;
                      y === ie && (y = null), ie = ie.return;
                    }
                    y === ie && (y = null), ie.sibling.return = ie.return, ie = ie.sibling;
                  }
                }
                if (pe && !Ce && (s.mode & 1) !== 0) {
                  q = s;
                  for (var F = s.child; F !== null; ) {
                    for (s = q = F; q !== null; ) {
                      c = q;
                      var O = c.child;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          er(4, c, c.return);
                          break;
                        case 1:
                          Ps(c, c.return);
                          var U = c.stateNode;
                          if (typeof U.componentWillUnmount == "function") {
                            var Q = c.return;
                            try {
                              U.props = c.memoizedProps, U.state = c.memoizedState, U.componentWillUnmount();
                            } catch (ne) {
                              Et(
                                c,
                                Q,
                                ne
                              );
                            }
                          }
                          break;
                        case 5:
                          Ps(c, c.return);
                          break;
                        case 22:
                          if (c.memoizedState !== null) {
                            xc(s);
                            continue;
                          }
                      }
                      O !== null ? (O.return = c, q = O) : xc(s);
                    }
                    F = F.sibling;
                  }
                }
            }
            switch (N & 4102) {
              case 2:
                mc(t), t.flags &= -3;
                break;
              case 6:
                mc(t), t.flags &= -3, yl(t.alternate, t);
                break;
              case 4096:
                t.flags &= -4097;
                break;
              case 4100:
                t.flags &= -4097, yl(t.alternate, t);
                break;
              case 4:
                yl(t.alternate, t);
            }
          } catch (ne) {
            Et(t, t.return, ne);
          }
          if (s = t.sibling, s !== null) {
            s.return = t.return, q = s;
            break;
          }
          q = t.return;
        }
      }
    }
    function Op(e, t, s) {
      q = e, vc(e);
    }
    function vc(e, t, s) {
      for (var c = (e.mode & 1) !== 0; q !== null; ) {
        var m = q, y = m.child;
        if (m.tag === 22 && c) {
          var C = m.memoizedState !== null || As;
          if (!C) {
            var N = m.alternate, H = N !== null && N.memoizedState !== null || $n;
            N = As;
            var X = $n;
            if (As = C, ($n = H) && !X) for (q = m; q !== null; ) C = q, H = C.child, C.tag === 22 && C.memoizedState !== null ? Sc(m) : H !== null ? (H.return = C, q = H) : Sc(m);
            for (; y !== null; ) q = y, vc(y), y = y.sibling;
            q = m, As = N, $n = X;
          }
          yc(e);
        } else (m.subtreeFlags & 8772) !== 0 && y !== null ? (y.return = m, q = y) : yc(e);
      }
    }
    function yc(e) {
      for (; q !== null; ) {
        var t = q;
        if ((t.flags & 8772) !== 0) {
          var s = t.alternate;
          try {
            if ((t.flags & 8772) !== 0) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $n || wi(5, t);
                break;
              case 1:
                var c = t.stateNode;
                if (t.flags & 4 && !$n) if (s === null) c.componentDidMount();
                else {
                  var m = t.elementType === t.type ? s.memoizedProps : qt(t.type, s.memoizedProps);
                  c.componentDidUpdate(m, s.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                }
                var y = t.updateQueue;
                y !== null && du(t, y, c);
                break;
              case 3:
                var C = t.updateQueue;
                if (C !== null) {
                  if (s = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      s = ae(t.child.stateNode);
                      break;
                    case 1:
                      s = t.child.stateNode;
                  }
                  du(t, C, s);
                }
                break;
              case 5:
                var N = t.stateNode;
                s === null && t.flags & 4 && Ki(N, t.type, t.memoizedProps, t);
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (ue && t.memoizedState === null) {
                  var H = t.alternate;
                  if (H !== null) {
                    var X = H.memoizedState;
                    if (X !== null) {
                      var $ = X.dehydrated;
                      $ !== null && Zd($);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
                break;
              default:
                throw Error(a(163));
            }
            $n || t.flags & 512 && ml(t);
          } catch (pe) {
            Et(t, t.return, pe);
          }
        }
        if (t === e) {
          q = null;
          break;
        }
        if (s = t.sibling, s !== null) {
          s.return = t.return, q = s;
          break;
        }
        q = t.return;
      }
    }
    function xc(e) {
      for (; q !== null; ) {
        var t = q;
        if (t === e) {
          q = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          s.return = t.return, q = s;
          break;
        }
        q = t.return;
      }
    }
    function Sc(e) {
      for (; q !== null; ) {
        var t = q;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var s = t.return;
              try {
                wi(4, t);
              } catch (H) {
                Et(t, s, H);
              }
              break;
            case 1:
              var c = t.stateNode;
              if (typeof c.componentDidMount == "function") {
                var m = t.return;
                try {
                  c.componentDidMount();
                } catch (H) {
                  Et(t, m, H);
                }
              }
              var y = t.return;
              try {
                ml(t);
              } catch (H) {
                Et(t, y, H);
              }
              break;
            case 5:
              var C = t.return;
              try {
                ml(t);
              } catch (H) {
                Et(t, C, H);
              }
          }
        } catch (H) {
          Et(t, t.return, H);
        }
        if (t === e) {
          q = null;
          break;
        }
        var N = t.sibling;
        if (N !== null) {
          N.return = t.return, q = N;
          break;
        }
        q = t.return;
      }
    }
    var Ms = 0, Ls = 1, Rs = 2, Ns = 3, Is = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var _i = Symbol.for;
      Ms = _i("selector.component"), Ls = _i("selector.has_pseudo_class"), Rs = _i("selector.role"), Ns = _i("selector.test_id"), Is = _i("selector.text");
    }
    function xl(e) {
      var t = Ie(e);
      if (t != null) {
        if (typeof t.memoizedProps["data-testname"] != "string") throw Error(a(364));
        return t;
      }
      if (e = Wi(e), e === null) throw Error(a(362));
      return e.stateNode.current;
    }
    function Sl(e, t) {
      switch (t.$$typeof) {
        case Ms:
          if (e.type === t.value) return !0;
          break;
        case Ls:
          e: {
            t = t.value, e = [e, 0];
            for (var s = 0; s < e.length; ) {
              var c = e[s++], m = e[s++], y = t[m];
              if (c.tag !== 5 || !An(c)) {
                for (; y != null && Sl(c, y); ) m++, y = t[m];
                if (m === t.length) {
                  t = !0;
                  break e;
                } else for (c = c.child; c !== null; ) e.push(c, m), c = c.sibling;
              }
            }
            t = !1;
          }
          return t;
        case Rs:
          if (e.tag === 5 && Eo(e.stateNode, t.value)) return !0;
          break;
        case Is:
          if ((e.tag === 5 || e.tag === 6) && (e = ti(e), e !== null && 0 <= e.indexOf(t.value))) return !0;
          break;
        case Ns:
          if (e.tag === 5 && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(a(365));
      }
      return !1;
    }
    function wl(e) {
      switch (e.$$typeof) {
        case Ms:
          return "<" + (R(e.value) || "Unknown") + ">";
        case Ls:
          return ":has(" + (wl(e) || "") + ")";
        case Rs:
          return '[role="' + e.value + '"]';
        case Is:
          return '"' + e.value + '"';
        case Ns:
          return '[data-testname="' + e.value + '"]';
        default:
          throw Error(a(365));
      }
    }
    function wc(e, t) {
      var s = [];
      e = [e, 0];
      for (var c = 0; c < e.length; ) {
        var m = e[c++], y = e[c++], C = t[y];
        if (m.tag !== 5 || !An(m)) {
          for (; C != null && Sl(m, C); ) y++, C = t[y];
          if (y === t.length) s.push(m);
          else for (m = m.child; m !== null; ) e.push(m, y), m = m.sibling;
        }
      }
      return s;
    }
    function _l(e, t) {
      if (!Yn) throw Error(a(363));
      e = xl(e), e = wc(e, t), t = [], e = Array.from(e);
      for (var s = 0; s < e.length; ) {
        var c = e[s++];
        if (c.tag === 5) An(c) || t.push(c.stateNode);
        else for (c = c.child; c !== null; ) e.push(c), c = c.sibling;
      }
      return t;
    }
    var bp = Math.ceil, zs = d.ReactCurrentDispatcher, El = d.ReactCurrentOwner, He = d.ReactCurrentBatchConfig, ve = 0, We = null, Xe = null, et = 0, Mt = 0, Ar = Ln(0), qe = 0, Ei = null, Pr = 0, Os = 0, Tl = 0, Ti = null, wt = null, Al = 0, Pl = 1 / 0;
    function Cr() {
      Pl = Qe() + 500;
    }
    var bs = !1, Cl = null, zn = null, Ds = !1, On = null, ks = 0, Ai = 0, Ml = null, Fs = -1, Bs = 0;
    function ht() {
      return (ve & 6) !== 0 ? Qe() : Fs !== -1 ? Fs : Fs = Qe();
    }
    function bn(e) {
      return (e.mode & 1) === 0 ? 1 : (ve & 2) !== 0 && et !== 0 ? et & -et : vp.transition !== null ? (Bs === 0 && (e = Ji, Ji <<= 1, (Ji & 4194240) === 0 && (Ji = 64), Bs = e), Bs) : (e = Ee, e !== 0 ? e : yt());
    }
    function Dt(e, t, s) {
      if (50 < Ai) throw Ai = 0, Ml = null, Error(a(185));
      var c = js(e, t);
      return c === null ? null : (ai(c, t, s), ((ve & 2) === 0 || c !== We) && (c === We && ((ve & 2) === 0 && (Os |= t), qe === 4 && Dn(c, et)), _t(c, s), t === 1 && ve === 0 && (e.mode & 1) === 0 && (Cr(), ns && rn())), c);
    }
    function js(e, t) {
      e.lanes |= t;
      var s = e.alternate;
      for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; ) e.childLanes |= t, s = e.alternate, s !== null && (s.childLanes |= t), s = e, e = e.return;
      return s.tag === 3 ? s.stateNode : null;
    }
    function _t(e, t) {
      var s = e.callbackNode;
      ap(e, t);
      var c = es(e, e === We ? et : 0);
      if (c === 0) s !== null && lu(s), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = c & -c, e.callbackPriority !== t) {
        if (s != null && lu(s), t === 1) e.tag === 0 ? gp(Ec.bind(null, e)) : au(Ec.bind(null, e)), Gi ? _o(function() {
          ve === 0 && rn();
        }) : Do(ko, rn), s = null;
        else {
          switch (ou(c)) {
            case 1:
              s = ko;
              break;
            case 4:
              s = dp;
              break;
            case 16:
              s = Fo;
              break;
            case 536870912:
              s = pp;
              break;
            default:
              s = Fo;
          }
          s = Ic(s, _c.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = s;
      }
    }
    function _c(e, t) {
      if (Fs = -1, Bs = 0, (ve & 6) !== 0) throw Error(a(327));
      var s = e.callbackNode;
      if (rr() && e.callbackNode !== s) return null;
      var c = es(e, e === We ? et : 0);
      if (c === 0) return null;
      if ((c & 30) !== 0 || (c & e.expiredLanes) !== 0 || t) t = Us(e, c);
      else {
        t = c;
        var m = ve;
        ve |= 2;
        var y = Pc();
        (We !== e || et !== t) && (Cr(), tr(e, t));
        do
          try {
            Fp();
            break;
          } catch (N) {
            Ac(e, N);
          }
        while (!0);
        Uo(), zs.current = y, ve = m, Xe !== null ? t = 0 : (We = null, et = 0, t = qe);
      }
      if (t !== 0) {
        if (t === 2 && (m = zo(e), m !== 0 && (c = m, t = Ll(e, m))), t === 1) throw s = Ei, tr(e, 0), Dn(e, c), _t(e, Qe()), s;
        if (t === 6) Dn(e, c);
        else {
          if (m = e.current.alternate, (c & 30) === 0 && !Dp(m) && (t = Us(e, c), t === 2 && (y = zo(e), y !== 0 && (c = y, t = Ll(e, y))), t === 1)) throw s = Ei, tr(e, 0), Dn(e, c), _t(e, Qe()), s;
          switch (e.finishedWork = m, e.finishedLanes = c, t) {
            case 0:
            case 1:
              throw Error(a(345));
            case 2:
              nr(e, wt);
              break;
            case 3:
              if (Dn(e, c), (c & 130023424) === c && (t = Al + 500 - Qe(), 10 < t)) {
                if (es(e, 0) !== 0) break;
                if (m = e.suspendedLanes, (m & c) !== c) {
                  ht(), e.pingedLanes |= e.suspendedLanes & m;
                  break;
                }
                e.timeoutHandle = se(nr.bind(null, e, wt), t);
                break;
              }
              nr(e, wt);
              break;
            case 4:
              if (Dn(e, c), (c & 4194240) === c) break;
              for (t = e.eventTimes, m = -1; 0 < c; ) {
                var C = 31 - Yt(c);
                y = 1 << C, C = t[C], C > m && (m = C), c &= ~y;
              }
              if (c = m, c = Qe() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * bp(c / 1960)) - c, 10 < c) {
                e.timeoutHandle = se(nr.bind(null, e, wt), c);
                break;
              }
              nr(e, wt);
              break;
            case 5:
              nr(e, wt);
              break;
            default:
              throw Error(a(329));
          }
        }
      }
      return _t(e, Qe()), e.callbackNode === s ? _c.bind(null, e) : null;
    }
    function Ll(e, t) {
      var s = Ti;
      return e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256), e = Us(e, t), e !== 2 && (t = wt, wt = s, t !== null && Rl(t)), e;
    }
    function Rl(e) {
      wt === null ? wt = e : wt.push.apply(wt, e);
    }
    function Dp(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var s = t.updateQueue;
          if (s !== null && (s = s.stores, s !== null)) for (var c = 0; c < s.length; c++) {
            var m = s[c], y = m.getSnapshot;
            m = m.value;
            try {
              if (!nn(y(), m)) return !1;
            } catch {
              return !1;
            }
          }
        }
        if (s = t.child, t.subtreeFlags & 16384 && s !== null) s.return = t, t = s;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Dn(e, t) {
      for (t &= ~Tl, t &= ~Os, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var s = 31 - Yt(t), c = 1 << s;
        e[s] = -1, t &= ~c;
      }
    }
    function Ec(e) {
      if ((ve & 6) !== 0) throw Error(a(327));
      rr();
      var t = es(e, 0);
      if ((t & 1) === 0) return _t(e, Qe()), null;
      var s = Us(e, t);
      if (e.tag !== 0 && s === 2) {
        var c = zo(e);
        c !== 0 && (t = c, s = Ll(e, c));
      }
      if (s === 1) throw s = Ei, tr(e, 0), Dn(e, t), _t(e, Qe()), s;
      if (s === 6) throw Error(a(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, nr(e, wt), _t(e, Qe()), null;
    }
    function Tc(e) {
      On !== null && On.tag === 0 && (ve & 6) === 0 && rr();
      var t = ve;
      ve |= 1;
      var s = He.transition, c = Ee;
      try {
        if (He.transition = null, Ee = 1, e) return e();
      } finally {
        Ee = c, He.transition = s, ve = t, (ve & 6) === 0 && rn();
      }
    }
    function Nl() {
      Mt = Ar.current, Re(Ar);
    }
    function tr(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var s = e.timeoutHandle;
      if (s !== le && (e.timeoutHandle = le, fe(s)), Xe !== null) for (s = Xe.return; s !== null; ) {
        var c = s;
        switch (Yo(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && Qi();
            break;
          case 3:
            Er(), Re(xt), Re(ot), tl();
            break;
          case 5:
            $o(c);
            break;
          case 4:
            Er();
            break;
          case 13:
            Re(be);
            break;
          case 19:
            Re(be);
            break;
          case 10:
            Ho(c.type._context);
            break;
          case 22:
          case 23:
            Nl();
        }
        s = s.return;
      }
      if (We = e, Xe = e = kn(e.current, null), et = Mt = t, qe = 0, Ei = null, Tl = Os = Pr = 0, wt = Ti = null, sn !== null) {
        for (t = 0; t < sn.length; t++) if (s = sn[t], c = s.interleaved, c !== null) {
          s.interleaved = null;
          var m = c.next, y = s.pending;
          if (y !== null) {
            var C = y.next;
            y.next = m, c.next = C;
          }
          s.pending = c;
        }
        sn = null;
      }
      return e;
    }
    function Ac(e, t) {
      do {
        var s = Xe;
        try {
          if (Uo(), ps.current = xs, hs) {
            for (var c = Be.memoizedState; c !== null; ) {
              var m = c.queue;
              m !== null && (m.pending = null), c = c.next;
            }
            hs = !1;
          }
          if (Tr = 0, Ze = lt = Be = null, hi = !1, mi = 0, El.current = null, s === null || s.return === null) {
            qe = 1, Ei = t, Xe = null;
            break;
          }
          e: {
            var y = e, C = s.return, N = s, H = t;
            if (t = et, N.flags |= 32768, H !== null && typeof H == "object" && typeof H.then == "function") {
              var X = H, $ = N, pe = $.tag;
              if (($.mode & 1) === 0 && (pe === 0 || pe === 11 || pe === 15)) {
                var oe = $.alternate;
                oe ? ($.updateQueue = oe.updateQueue, $.memoizedState = oe.memoizedState, $.lanes = oe.lanes) : ($.updateQueue = null, $.memoizedState = null);
              }
              var Ce = Xu(C);
              if (Ce !== null) {
                Ce.flags &= -257, Ku(Ce, C, N, y, t), Ce.mode & 1 && Wu(y, X, t), t = Ce, H = X;
                var ie = t.updateQueue;
                if (ie === null) {
                  var ct = /* @__PURE__ */ new Set();
                  ct.add(H), t.updateQueue = ct;
                } else ie.add(H);
                break e;
              } else {
                if ((t & 1) === 0) {
                  Wu(y, X, t), Il();
                  break e;
                }
                H = Error(a(426));
              }
            } else if (ze && N.mode & 1) {
              var Ft = Xu(C);
              if (Ft !== null) {
                (Ft.flags & 65536) === 0 && (Ft.flags |= 256), Ku(Ft, C, N, y, t), Zo(H);
                break e;
              }
            }
            y = H, qe !== 4 && (qe = 2), Ti === null ? Ti = [y] : Ti.push(y), H = al(H, N), N = C;
            do {
              switch (N.tag) {
                case 3:
                  N.flags |= 65536, t &= -t, N.lanes |= t;
                  var F = Vu(N, H, t);
                  fu(N, F);
                  break e;
                case 1:
                  y = H;
                  var O = N.type, U = N.stateNode;
                  if ((N.flags & 128) === 0 && (typeof O.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (zn === null || !zn.has(U)))) {
                    N.flags |= 65536, t &= -t, N.lanes |= t;
                    var Q = Gu(N, y, t);
                    fu(N, Q);
                    break e;
                  }
              }
              N = N.return;
            } while (N !== null);
          }
          Mc(s);
        } catch (ne) {
          t = ne, Xe === s && s !== null && (Xe = s = s.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Pc() {
      var e = zs.current;
      return zs.current = xs, e === null ? xs : e;
    }
    function Il() {
      (qe === 0 || qe === 3 || qe === 2) && (qe = 4), We === null || (Pr & 268435455) === 0 && (Os & 268435455) === 0 || Dn(We, et);
    }
    function Us(e, t) {
      var s = ve;
      ve |= 2;
      var c = Pc();
      We === e && et === t || tr(e, t);
      do
        try {
          kp();
          break;
        } catch (m) {
          Ac(e, m);
        }
      while (!0);
      if (Uo(), ve = s, zs.current = c, Xe !== null) throw Error(a(261));
      return We = null, et = 0, qe;
    }
    function kp() {
      for (; Xe !== null; ) Cc(Xe);
    }
    function Fp() {
      for (; Xe !== null && !cp(); ) Cc(Xe);
    }
    function Cc(e) {
      var t = Nc(e.alternate, e, Mt);
      e.memoizedProps = e.pendingProps, t === null ? Mc(e) : Xe = t, El.current = null;
    }
    function Mc(e) {
      var t = e;
      do {
        var s = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
          if (s = Cp(s, t, Mt), s !== null) {
            Xe = s;
            return;
          }
        } else {
          if (s = Rp(s, t), s !== null) {
            s.flags &= 32767, Xe = s;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            qe = 6, Xe = null;
            return;
          }
        }
        if (t = t.sibling, t !== null) {
          Xe = t;
          return;
        }
        Xe = t = e;
      } while (t !== null);
      qe === 0 && (qe = 5);
    }
    function nr(e, t) {
      var s = Ee, c = He.transition;
      try {
        He.transition = null, Ee = 1, Bp(e, t, s);
      } finally {
        He.transition = c, Ee = s;
      }
      return null;
    }
    function Bp(e, t, s) {
      do
        rr();
      while (On !== null);
      if ((ve & 6) !== 0) throw Error(a(327));
      var c = e.finishedWork, m = e.finishedLanes;
      if (c === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, c === e.current) throw Error(a(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var y = c.lanes | c.childLanes;
      if (up(e, y), e === We && (Xe = We = null, et = 0), (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || Ds || (Ds = !0, Ic(Fo, function() {
        return rr(), null;
      })), y = (c.flags & 15990) !== 0, (c.subtreeFlags & 15990) !== 0 || y) {
        y = He.transition, He.transition = null;
        var C = Ee;
        Ee = 1;
        var N = ve;
        ve |= 4, El.current = null, Ip(e, c), zp(e, c), Z(e.containerInfo), e.current = c, Op(c), fp(), ve = N, Ee = C, He.transition = y;
      } else e.current = c;
      if (Ds && (Ds = !1, On = e, ks = m), y = e.pendingLanes, y === 0 && (zn = null), hp(c.stateNode), _t(e, Qe()), t !== null) for (s = e.onRecoverableError, c = 0; c < t.length; c++) s(t[c]);
      if (bs) throw bs = !1, e = Cl, Cl = null, e;
      return (ks & 1) !== 0 && e.tag !== 0 && rr(), y = e.pendingLanes, (y & 1) !== 0 ? e === Ml ? Ai++ : (Ai = 0, Ml = e) : Ai = 0, rn(), null;
    }
    function rr() {
      if (On !== null) {
        var e = ou(ks), t = He.transition, s = Ee;
        try {
          if (He.transition = null, Ee = 16 > e ? 16 : e, On === null) var c = !1;
          else {
            if (e = On, On = null, ks = 0, (ve & 6) !== 0) throw Error(a(331));
            var m = ve;
            for (ve |= 4, q = e.current; q !== null; ) {
              var y = q, C = y.child;
              if ((q.flags & 16) !== 0) {
                var N = y.deletions;
                if (N !== null) {
                  for (var H = 0; H < N.length; H++) {
                    var X = N[H];
                    for (q = X; q !== null; ) {
                      var $ = q;
                      switch ($.tag) {
                        case 0:
                        case 11:
                        case 15:
                          er(8, $, y);
                      }
                      var pe = $.child;
                      if (pe !== null) pe.return = $, q = pe;
                      else for (; q !== null; ) {
                        $ = q;
                        var oe = $.sibling, Ce = $.return;
                        if (dc($), $ === X) {
                          q = null;
                          break;
                        }
                        if (oe !== null) {
                          oe.return = Ce, q = oe;
                          break;
                        }
                        q = Ce;
                      }
                    }
                  }
                  var ie = y.alternate;
                  if (ie !== null) {
                    var ct = ie.child;
                    if (ct !== null) {
                      ie.child = null;
                      do {
                        var Ft = ct.sibling;
                        ct.sibling = null, ct = Ft;
                      } while (ct !== null);
                    }
                  }
                  q = y;
                }
              }
              if ((y.subtreeFlags & 2064) !== 0 && C !== null) C.return = y, q = C;
              else e: for (; q !== null; ) {
                if (y = q, (y.flags & 2048) !== 0) switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, y, y.return);
                }
                var F = y.sibling;
                if (F !== null) {
                  F.return = y.return, q = F;
                  break e;
                }
                q = y.return;
              }
            }
            var O = e.current;
            for (q = O; q !== null; ) {
              C = q;
              var U = C.child;
              if ((C.subtreeFlags & 2064) !== 0 && U !== null) U.return = C, q = U;
              else e: for (C = O; q !== null; ) {
                if (N = q, (N.flags & 2048) !== 0) try {
                  switch (N.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(9, N);
                  }
                } catch (ne) {
                  Et(N, N.return, ne);
                }
                if (N === C) {
                  q = null;
                  break e;
                }
                var Q = N.sibling;
                if (Q !== null) {
                  Q.return = N.return, q = Q;
                  break e;
                }
                q = N.return;
              }
            }
            if (ve = m, rn(), tn && typeof tn.onPostCommitFiberRoot == "function") try {
              tn.onPostCommitFiberRoot(ts, e);
            } catch {
            }
            c = !0;
          }
          return c;
        } finally {
          Ee = s, He.transition = t;
        }
      }
      return !1;
    }
    function Lc(e, t, s) {
      t = al(s, t), t = Vu(e, t, 1), In(e, t), t = ht(), e = js(e, 1), e !== null && (ai(e, 1, t), _t(e, t));
    }
    function Et(e, t, s) {
      if (e.tag === 3) Lc(e, e, s);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Lc(t, e, s);
          break;
        } else if (t.tag === 1) {
          var c = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (zn === null || !zn.has(c))) {
            e = al(s, e), e = Gu(t, e, 1), In(t, e), e = ht(), t = js(t, 1), t !== null && (ai(t, 1, e), _t(t, e));
            break;
          }
        }
        t = t.return;
      }
    }
    function jp(e, t, s) {
      var c = e.pingCache;
      c !== null && c.delete(t), t = ht(), e.pingedLanes |= e.suspendedLanes & s, We === e && (et & s) === s && (qe === 4 || qe === 3 && (et & 130023424) === et && 500 > Qe() - Al ? tr(e, 0) : Tl |= s), _t(e, t);
    }
    function Rc(e, t) {
      t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $i, $i <<= 1, ($i & 130023424) === 0 && ($i = 4194304)));
      var s = ht();
      e = js(e, t), e !== null && (ai(e, t, s), _t(e, s));
    }
    function Up(e) {
      var t = e.memoizedState, s = 0;
      t !== null && (s = t.retryLane), Rc(e, s);
    }
    function Hp(e, t) {
      var s = 0;
      switch (e.tag) {
        case 13:
          var c = e.stateNode, m = e.memoizedState;
          m !== null && (s = m.retryLane);
          break;
        case 19:
          c = e.stateNode;
          break;
        default:
          throw Error(a(314));
      }
      c !== null && c.delete(t), Rc(e, s);
    }
    var Nc;
    Nc = function(e, t, s) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps || xt.current) Ct = !0;
      else {
        if ((e.lanes & s) === 0 && (t.flags & 128) === 0) return Ct = !1, Lp(e, t, s);
        Ct = (e.flags & 131072) !== 0;
      }
      else Ct = !1, ze && (t.flags & 1048576) !== 0 && vu(t, cs, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var c = t.type;
          e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
          var m = mr(t, ot.current);
          vr(t, s), m = rl(null, t, c, e, m, s);
          var y = il();
          return t.flags |= 1, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, St(c) ? (y = !0, Zi(t)) : y = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Go(t), m.updater = as, t.stateNode = m, m._reactInternals = t, Xo(t, c, e, s), t = fl(null, t, c, !0, y, s)) : (t.tag = 0, ze && y && Ko(t), pt(null, t, m, s), t = t.child), t;
        case 16:
          c = t.elementType;
          e: {
            switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, m = c._init, c = m(c._payload), t.type = c, m = t.tag = Gp(c), e = qt(c, e), m) {
              case 0:
                t = cl(null, t, c, e, s);
                break e;
              case 1:
                t = tc(
                  null,
                  t,
                  c,
                  e,
                  s
                );
                break e;
              case 11:
                t = Qu(null, t, c, e, s);
                break e;
              case 14:
                t = Zu(null, t, c, qt(c.type, e), s);
                break e;
            }
            throw Error(a(306, c, ""));
          }
          return t;
        case 0:
          return c = t.type, m = t.pendingProps, m = t.elementType === c ? m : qt(c, m), cl(e, t, c, m, s);
        case 1:
          return c = t.type, m = t.pendingProps, m = t.elementType === c ? m : qt(c, m), tc(e, t, c, m, s);
        case 3:
          e: {
            if (nc(t), e === null) throw Error(a(387));
            c = t.pendingProps, y = t.memoizedState, m = y.element, cu(e, t), ls(t, c, null, s);
            var C = t.memoizedState;
            if (c = C.element, ue && y.isDehydrated) if (y = {
              element: c,
              isDehydrated: !1,
              cache: C.cache,
              transitions: C.transitions
            }, t.updateQueue.baseState = y, t.memoizedState = y, t.flags & 256) {
              m = Error(a(423)), t = rc(e, t, c, s, m);
              break e;
            } else if (c !== m) {
              m = Error(a(424)), t = rc(e, t, c, s, m);
              break e;
            } else for (ue && (Pt = Wd(t.stateNode.containerInfo), At = t, ze = !0, Qt = null, ui = !1), s = Eu(t, null, c, s), t.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
            else {
              if (Sr(), c === m) {
                t = Sn(e, t, s);
                break e;
              }
              pt(e, t, c, s);
            }
            t = t.child;
          }
          return t;
        case 5:
          return Tu(t), e === null && Qo(t), c = t.type, m = t.pendingProps, y = e !== null ? e.memoizedProps : null, C = m.children, it(c, m) ? C = null : y !== null && it(c, y) && (t.flags |= 32), ec(e, t), pt(e, t, C, s), t.child;
        case 6:
          return e === null && Qo(t), null;
        case 13:
          return ic(e, t, s);
        case 4:
          return Jo(t, t.stateNode.containerInfo), c = t.pendingProps, e === null ? t.child = wr(t, null, c, s) : pt(e, t, c, s), t.child;
        case 11:
          return c = t.type, m = t.pendingProps, m = t.elementType === c ? m : qt(c, m), Qu(e, t, c, m, s);
        case 7:
          return pt(e, t, t.pendingProps, s), t.child;
        case 8:
          return pt(e, t, t.pendingProps.children, s), t.child;
        case 12:
          return pt(e, t, t.pendingProps.children, s), t.child;
        case 10:
          e: {
            if (c = t.type._context, m = t.pendingProps, y = t.memoizedProps, C = m.value, uu(t, c, C), y !== null) if (nn(y.value, C)) {
              if (y.children === m.children && !xt.current) {
                t = Sn(e, t, s);
                break e;
              }
            } else for (y = t.child, y !== null && (y.return = t); y !== null; ) {
              var N = y.dependencies;
              if (N !== null) {
                C = y.child;
                for (var H = N.firstContext; H !== null; ) {
                  if (H.context === c) {
                    if (y.tag === 1) {
                      H = gn(-1, s & -s), H.tag = 2;
                      var X = y.updateQueue;
                      if (X !== null) {
                        X = X.shared;
                        var $ = X.pending;
                        $ === null ? H.next = H : (H.next = $.next, $.next = H), X.pending = H;
                      }
                    }
                    y.lanes |= s, H = y.alternate, H !== null && (H.lanes |= s), Vo(y.return, s, t), N.lanes |= s;
                    break;
                  }
                  H = H.next;
                }
              } else if (y.tag === 10) C = y.type === t.type ? null : y.child;
              else if (y.tag === 18) {
                if (C = y.return, C === null) throw Error(a(341));
                C.lanes |= s, N = C.alternate, N !== null && (N.lanes |= s), Vo(C, s, t), C = y.sibling;
              } else C = y.child;
              if (C !== null) C.return = y;
              else for (C = y; C !== null; ) {
                if (C === t) {
                  C = null;
                  break;
                }
                if (y = C.sibling, y !== null) {
                  y.return = C.return, C = y;
                  break;
                }
                C = C.return;
              }
              y = C;
            }
            pt(e, t, m.children, s), t = t.child;
          }
          return t;
        case 9:
          return m = t.type, c = t.pendingProps.children, vr(t, s), m = Nt(m), c = c(m), t.flags |= 1, pt(e, t, c, s), t.child;
        case 14:
          return c = t.type, m = qt(c, t.pendingProps), m = qt(c.type, m), Zu(e, t, c, m, s);
        case 15:
          return Ju(e, t, t.type, t.pendingProps, s);
        case 17:
          return c = t.type, m = t.pendingProps, m = t.elementType === c ? m : qt(c, m), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, St(c) ? (e = !0, Zi(t)) : e = !1, vr(t, s), mu(t, c, m), Xo(t, c, m, s), fl(null, t, c, !0, e, s);
        case 19:
          return ac(e, t, s);
        case 22:
          return $u(e, t, s);
      }
      throw Error(a(156, t.tag));
    };
    function Ic(e, t) {
      return Do(e, t);
    }
    function Vp(e, t, s, c) {
      this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function kt(e, t, s, c) {
      return new Vp(e, t, s, c);
    }
    function zl(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Gp(e) {
      if (typeof e == "function") return zl(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === A) return 11;
        if (e === w) return 14;
      }
      return 2;
    }
    function kn(e, t) {
      var s = e.alternate;
      return s === null ? (s = kt(e.tag, t, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = t, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, t = e.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
    }
    function Hs(e, t, s, c, m, y) {
      var C = 2;
      if (c = e, typeof e == "function") zl(e) && (C = 1);
      else if (typeof e == "string") C = 5;
      else e: switch (e) {
        case p:
          return ir(s.children, m, y, t);
        case h:
          C = 8, m |= 8;
          break;
        case v:
          return e = kt(12, s, t, m | 2), e.elementType = v, e.lanes = y, e;
        case T:
          return e = kt(13, s, t, m), e.elementType = T, e.lanes = y, e;
        case S:
          return e = kt(19, s, t, m), e.elementType = S, e.lanes = y, e;
        case P:
          return Vs(s, m, y, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case x:
              C = 10;
              break e;
            case _:
              C = 9;
              break e;
            case A:
              C = 11;
              break e;
            case w:
              C = 14;
              break e;
            case E:
              C = 16, c = null;
              break e;
          }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
      return t = kt(C, s, t, m), t.elementType = e, t.type = c, t.lanes = y, t;
    }
    function ir(e, t, s, c) {
      return e = kt(7, e, c, t), e.lanes = s, e;
    }
    function Vs(e, t, s, c) {
      return e = kt(22, e, c, t), e.elementType = P, e.lanes = s, e.stateNode = {}, e;
    }
    function Ol(e, t, s) {
      return e = kt(6, e, null, t), e.lanes = s, e;
    }
    function bl(e, t, s) {
      return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = s, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    function Wp(e, t, s, c, m) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = le, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oo(0), this.expirationTimes = Oo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oo(0), this.identifierPrefix = c, this.onRecoverableError = m, ue && (this.mutableSourceEagerHydrationData = null);
    }
    function zc(e, t, s, c, m, y, C, N, H) {
      return e = new Wp(e, t, s, N, H), t === 1 ? (t = 1, y === !0 && (t |= 8)) : t = 0, y = kt(3, null, null, t), e.current = y, y.stateNode = e, y.memoizedState = { element: c, isDehydrated: s, cache: null, transitions: null }, Go(y), e;
    }
    function Oc(e) {
      if (!e) return Rn;
      e = e._reactInternals;
      e: {
        if (D(e) !== e || e.tag !== 1) throw Error(a(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (St(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(a(171));
      }
      if (e.tag === 1) {
        var s = e.type;
        if (St(s)) return iu(e, s, t);
      }
      return t;
    }
    function bc(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
      return e = j(t), e === null ? null : e.stateNode;
    }
    function Dc(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var s = e.retryLane;
        e.retryLane = s !== 0 && s < t ? s : t;
      }
    }
    function Dl(e, t) {
      Dc(e, t), (e = e.alternate) && Dc(e, t);
    }
    function Xp(e) {
      return e = j(e), e === null ? null : e.stateNode;
    }
    function Kp() {
      return null;
    }
    return r.attemptContinuousHydration = function(e) {
      if (e.tag === 13) {
        var t = ht();
        Dt(e, 134217728, t), Dl(e, 134217728);
      }
    }, r.attemptHydrationAtCurrentPriority = function(e) {
      if (e.tag === 13) {
        var t = ht(), s = bn(e);
        Dt(e, s, t), Dl(e, s);
      }
    }, r.attemptSynchronousHydration = function(e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var s = li(t.pendingLanes);
            s !== 0 && (bo(t, s | 1), _t(t, Qe()), (ve & 6) === 0 && (Cr(), rn()));
          }
          break;
        case 13:
          var c = ht();
          Tc(function() {
            return Dt(e, 1, c);
          }), Dl(e, 1);
      }
    }, r.batchedUpdates = function(e, t) {
      var s = ve;
      ve |= 1;
      try {
        return e(t);
      } finally {
        ve = s, ve === 0 && (Cr(), ns && rn());
      }
    }, r.createComponentSelector = function(e) {
      return { $$typeof: Ms, value: e };
    }, r.createContainer = function(e, t, s, c, m, y, C) {
      return zc(e, t, !1, null, s, c, m, y, C);
    }, r.createHasPseudoClassSelector = function(e) {
      return { $$typeof: Ls, value: e };
    }, r.createHydrationContainer = function(e, t, s, c, m, y, C, N, H) {
      return e = zc(s, c, !0, e, m, y, C, N, H), e.context = Oc(null), s = e.current, c = ht(), m = bn(s), y = gn(c, m), y.callback = t ?? null, In(s, y), e.current.lanes = m, ai(e, m, c), _t(e, c), e;
    }, r.createPortal = function(e, t, s) {
      var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: g, key: c == null ? null : "" + c, children: e, containerInfo: t, implementation: s };
    }, r.createRoleSelector = function(e) {
      return { $$typeof: Rs, value: e };
    }, r.createTestNameSelector = function(e) {
      return { $$typeof: Ns, value: e };
    }, r.createTextSelector = function(e) {
      return { $$typeof: Is, value: e };
    }, r.deferredUpdates = function(e) {
      var t = Ee, s = He.transition;
      try {
        return He.transition = null, Ee = 16, e();
      } finally {
        Ee = t, He.transition = s;
      }
    }, r.discreteUpdates = function(e, t, s, c, m) {
      var y = Ee, C = He.transition;
      try {
        return He.transition = null, Ee = 1, e(t, s, c, m);
      } finally {
        Ee = y, He.transition = C, ve === 0 && Cr();
      }
    }, r.findAllNodes = _l, r.findBoundingRects = function(e, t) {
      if (!Yn) throw Error(a(363));
      t = _l(e, t), e = [];
      for (var s = 0; s < t.length; s++) e.push(ei(t[s]));
      for (t = e.length - 1; 0 < t; t--) {
        s = e[t];
        for (var c = s.x, m = c + s.width, y = s.y, C = y + s.height, N = t - 1; 0 <= N; N--) if (t !== N) {
          var H = e[N], X = H.x, $ = X + H.width, pe = H.y, oe = pe + H.height;
          if (c >= X && y >= pe && m <= $ && C <= oe) {
            e.splice(t, 1);
            break;
          } else if (c !== X || s.width !== H.width || oe < y || pe > C) {
            if (!(y !== pe || s.height !== H.height || $ < c || X > m)) {
              X > c && (H.width += X - c, H.x = c), $ < m && (H.width = m - X), e.splice(t, 1);
              break;
            }
          } else {
            pe > y && (H.height += pe - y, H.y = y), oe < C && (H.height = C - pe), e.splice(t, 1);
            break;
          }
        }
      }
      return e;
    }, r.findHostInstance = bc, r.findHostInstanceWithNoPortals = function(e) {
      return e = k(e), e = e !== null ? Y(e) : null, e === null ? null : e.stateNode;
    }, r.findHostInstanceWithWarning = function(e) {
      return bc(e);
    }, r.flushControlled = function(e) {
      var t = ve;
      ve |= 1;
      var s = He.transition, c = Ee;
      try {
        He.transition = null, Ee = 1, e();
      } finally {
        Ee = c, He.transition = s, ve = t, ve === 0 && (Cr(), rn());
      }
    }, r.flushPassiveEffects = rr, r.flushSync = Tc, r.focusWithin = function(e, t) {
      if (!Yn) throw Error(a(363));
      for (e = xl(e), t = wc(e, t), t = Array.from(t), e = 0; e < t.length; ) {
        var s = t[e++];
        if (!An(s)) {
          if (s.tag === 5 && To(s.stateNode)) return !0;
          for (s = s.child; s !== null; ) t.push(s), s = s.sibling;
        }
      }
      return !1;
    }, r.getCurrentUpdatePriority = function() {
      return Ee;
    }, r.getFindAllNodesFailureDescription = function(e, t) {
      if (!Yn) throw Error(a(363));
      var s = 0, c = [];
      e = [xl(e), 0];
      for (var m = 0; m < e.length; ) {
        var y = e[m++], C = e[m++], N = t[C];
        if ((y.tag !== 5 || !An(y)) && (Sl(y, N) && (c.push(wl(N)), C++, C > s && (s = C)), C < t.length)) for (y = y.child; y !== null; ) e.push(y, C), y = y.sibling;
      }
      if (s < t.length) {
        for (e = []; s < t.length; s++) e.push(wl(t[s]));
        return `findAllNodes was able to match part of the selector:
  ` + (c.join(" > ") + `

No matching component was found for:
  `) + e.join(" > ");
      }
      return null;
    }, r.getPublicRootInstance = function(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return ae(e.child.stateNode);
        default:
          return e.child.stateNode;
      }
    }, r.injectIntoDevTools = function(e) {
      if (e = { bundleType: e.bundleType, version: e.version, rendererPackageName: e.rendererPackageName, rendererConfig: e.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: d.ReactCurrentDispatcher, findHostInstanceByFiber: Xp, findFiberByHostInstance: e.findFiberByHostInstance || Kp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
      else {
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) e = !0;
        else {
          try {
            ts = t.inject(e), tn = t;
          } catch {
          }
          e = !!t.checkDCE;
        }
      }
      return e;
    }, r.isAlreadyRendering = function() {
      return !1;
    }, r.observeVisibleRects = function(e, t, s, c) {
      if (!Yn) throw Error(a(363));
      e = _l(e, t);
      var m = Xi(e, s, c).disconnect;
      return { disconnect: function() {
        m();
      } };
    }, r.registerMutableSourceForHydration = function(e, t) {
      var s = t._getVersion;
      s = s(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, s] : e.mutableSourceEagerHydrationData.push(t, s);
    }, r.runWithPriority = function(e, t) {
      var s = Ee;
      try {
        return Ee = e, t();
      } finally {
        Ee = s;
      }
    }, r.shouldError = function() {
      return null;
    }, r.shouldSuspend = function() {
      return !1;
    }, r.updateContainer = function(e, t, s, c) {
      var m = t.current, y = ht(), C = bn(m);
      return s = Oc(s), t.context === null ? t.context = s : t.pendingContext = s, t = gn(y, C), t.payload = { element: e }, c = c === void 0 ? null : c, c !== null && (t.callback = c), In(m, t), e = Dt(m, C, y), e !== null && os(e, m, C), C;
    }, r;
  }), Vl;
}
var Kc;
function im() {
  return Kc || (Kc = 1, jl.exports = rm()), jl.exports;
}
var sm = im();
const om = /* @__PURE__ */ (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.g)(sm);
var Yc = ld();
const lm = (o) => typeof o == "object" && typeof o.then == "function", Gs = [];
function am(o, n, r = (i, l) => i === l) {
  if (o === n) return !0;
  if (!o || !n) return !1;
  const i = o.length;
  if (n.length !== i) return !1;
  for (let l = 0; l < i; l++) if (!r(o[l], n[l])) return !1;
  return !0;
}
function um(o, n = null, r = !1, i = {}) {
  n === null && (n = [o]);
  for (const u of Gs)
    if (am(n, u.keys, u.equal)) {
      if (r) return;
      if (Object.prototype.hasOwnProperty.call(u, "error")) throw u.error;
      if (Object.prototype.hasOwnProperty.call(u, "response"))
        return i.lifespan && i.lifespan > 0 && (u.timeout && clearTimeout(u.timeout), u.timeout = setTimeout(u.remove, i.lifespan)), u.response;
      if (!r) throw u.promise;
    }
  const l = {
    keys: n,
    equal: i.equal,
    remove: () => {
      const u = Gs.indexOf(l);
      u !== -1 && Gs.splice(u, 1);
    },
    promise: (
      // Execute the promise
      (lm(o) ? o : o(...n)).then((u) => {
        l.response = u, i.lifespan && i.lifespan > 0 && (l.timeout = setTimeout(l.remove, i.lifespan));
      }).catch((u) => l.error = u)
    )
  };
  if (Gs.push(l), !r) throw l.promise;
}
const qc = (o, n, r) => um(o, n, !1, r), Va = {}, Ga = (o) => void Object.assign(Va, o);
function cm(o, n) {
  function r(p, {
    args: h = [],
    attach: v,
    ...x
  }, _) {
    let A = `${p[0].toUpperCase()}${p.slice(1)}`, T;
    if (p === "primitive") {
      if (x.object === void 0) throw new Error("R3F: Primitives without 'object' are invalid!");
      const S = x.object;
      T = Vr(S, {
        type: p,
        root: _,
        attach: v,
        primitive: !0
      });
    } else {
      const S = Va[A];
      if (!S)
        throw new Error(`R3F: ${A} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      if (!Array.isArray(h)) throw new Error("R3F: The args prop must be an array!");
      T = Vr(new S(...h), {
        type: p,
        root: _,
        attach: v,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args: h
        }
      });
    }
    return T.__r3f.attach === void 0 && (T instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.f ? T.__r3f.attach = "geometry" : T instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.M && (T.__r3f.attach = "material")), A !== "inject" && Xl(T, x), T;
  }
  function i(p, h) {
    let v = !1;
    if (h) {
      var x, _;
      (x = h.__r3f) != null && x.attach ? Wl(p, h, h.__r3f.attach) : h.isObject3D && p.isObject3D && (p.add(h), v = !0), v || (_ = p.__r3f) == null || _.objects.push(h), h.__r3f || Vr(h, {}), h.__r3f.parent = p, Ta(h), Gr(h);
    }
  }
  function l(p, h, v) {
    let x = !1;
    if (h) {
      var _, A;
      if ((_ = h.__r3f) != null && _.attach)
        Wl(p, h, h.__r3f.attach);
      else if (h.isObject3D && p.isObject3D) {
        h.parent = p, h.dispatchEvent({
          type: "added"
        });
        const T = p.children.filter((w) => w !== h), S = T.indexOf(v);
        p.children = [...T.slice(0, S), h, ...T.slice(S)], x = !0;
      }
      x || (A = p.__r3f) == null || A.objects.push(h), h.__r3f || Vr(h, {}), h.__r3f.parent = p, Ta(h), Gr(h);
    }
  }
  function u(p, h, v = !1) {
    p && [...p].forEach((x) => a(h, x, v));
  }
  function a(p, h, v) {
    if (h) {
      var x, _, A;
      if (h.__r3f && (h.__r3f.parent = null), (x = p.__r3f) != null && x.objects && (p.__r3f.objects = p.__r3f.objects.filter((P) => P !== h)), (_ = h.__r3f) != null && _.attach)
        ef(p, h, h.__r3f.attach);
      else if (h.isObject3D && p.isObject3D) {
        var T;
        p.remove(h), (T = h.__r3f) != null && T.root && gm(ho(h), h);
      }
      const w = (A = h.__r3f) == null ? void 0 : A.primitive, E = !w && (v === void 0 ? h.dispose !== null : v);
      if (!w) {
        var S;
        u((S = h.__r3f) == null ? void 0 : S.objects, h, E), u(h.children, h, E);
      }
      if (delete h.__r3f, E && h.dispose && h.type !== "Scene") {
        const P = () => {
          try {
            h.dispose();
          } catch {
          }
        };
        typeof IS_REACT_ACT_ENVIRONMENT > "u" ? Yc.unstable_scheduleCallback(Yc.unstable_IdlePriority, P) : P();
      }
      Gr(p);
    }
  }
  function d(p, h, v, x) {
    var _;
    const A = (_ = p.__r3f) == null ? void 0 : _.parent;
    if (!A) return;
    const T = r(h, v, p.__r3f.root);
    if (p.children) {
      for (const S of p.children)
        S.__r3f && i(T, S);
      p.children = p.children.filter((S) => !S.__r3f);
    }
    p.__r3f.objects.forEach((S) => i(T, S)), p.__r3f.objects = [], p.__r3f.autoRemovedBeforeAppend || a(A, p), T.parent && (T.__r3f.autoRemovedBeforeAppend = !0), i(A, T), T.raycast && T.__r3f.eventCount && ho(T).getState().internal.interaction.push(T), [x, x.alternate].forEach((S) => {
      S !== null && (S.stateNode = T, S.ref && (typeof S.ref == "function" ? S.ref(T) : S.ref.current = T));
    });
  }
  const f = () => console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");
  return {
    reconciler: om({
      createInstance: r,
      removeChild: a,
      appendChild: i,
      appendInitialChild: i,
      insertBefore: l,
      supportsMutation: !0,
      isPrimaryRenderer: !1,
      supportsPersistence: !1,
      supportsHydration: !1,
      noTimeout: -1,
      appendChildToContainer: (p, h) => {
        if (!h) return;
        const v = p.getState().scene;
        v.__r3f && (v.__r3f.root = p, i(v, h));
      },
      removeChildFromContainer: (p, h) => {
        h && a(p.getState().scene, h);
      },
      insertInContainerBefore: (p, h, v) => {
        if (!h || !v) return;
        const x = p.getState().scene;
        x.__r3f && l(x, h, v);
      },
      getRootHostContext: () => null,
      getChildHostContext: (p) => p,
      finalizeInitialChildren(p) {
        var h;
        return !!((h = p?.__r3f) != null ? h : {}).handlers;
      },
      prepareUpdate(p, h, v, x) {
        var _;
        if (((_ = p?.__r3f) != null ? _ : {}).primitive && x.object && x.object !== p)
          return [!0];
        {
          const {
            args: T = [],
            children: S,
            ...w
          } = x, {
            args: E = [],
            children: P,
            ...M
          } = v;
          if (!Array.isArray(T)) throw new Error("R3F: the args prop must be an array!");
          if (T.some((R, z) => R !== E[z])) return [!0];
          const L = hd(p, w, M, !0);
          return L.changes.length ? [!1, L] : null;
        }
      },
      commitUpdate(p, [h, v], x, _, A, T) {
        h ? d(p, x, A, T) : Xl(p, v);
      },
      commitMount(p, h, v, x) {
        var _;
        const A = (_ = p.__r3f) != null ? _ : {};
        p.raycast && A.handlers && A.eventCount && ho(p).getState().internal.interaction.push(p);
      },
      getPublicInstance: (p) => p,
      prepareForCommit: () => null,
      preparePortalMount: (p) => Vr(p.getState().scene),
      resetAfterCommit: () => {
      },
      shouldSetTextContent: () => !1,
      clearContainer: () => !1,
      hideInstance(p) {
        var h;
        const {
          attach: v,
          parent: x
        } = (h = p.__r3f) != null ? h : {};
        v && x && ef(x, p, v), p.isObject3D && (p.visible = !1), Gr(p);
      },
      unhideInstance(p, h) {
        var v;
        const {
          attach: x,
          parent: _
        } = (v = p.__r3f) != null ? v : {};
        x && _ && Wl(_, p, x), (p.isObject3D && h.visible == null || h.visible) && (p.visible = !0), Gr(p);
      },
      createTextInstance: f,
      hideTextInstance: f,
      unhideTextInstance: f,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
      // @ts-ignore
      getCurrentEventPriority: () => n ? n() : Kr.DefaultEventPriority,
      beforeActiveInstanceBlur: () => {
      },
      afterActiveInstanceBlur: () => {
      },
      detachDeletedInstance: () => {
      },
      now: typeof performance < "u" && Oe.fun(performance.now) ? performance.now : Oe.fun(Date.now) ? Date.now : () => 0,
      // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
      scheduleTimeout: Oe.fun(setTimeout) ? setTimeout : void 0,
      cancelTimeout: Oe.fun(clearTimeout) ? clearTimeout : void 0
    }),
    applyProps: Xl
  };
}
var Qc, Zc;
const Gl = (o) => "colorSpace" in o || "outputColorSpace" in o, ad = () => {
  var o;
  return (o = Va.ColorManagement) != null ? o : null;
}, ud = (o) => o && o.isOrthographicCamera, fm = (o) => o && o.hasOwnProperty("current"), Hi = typeof window < "u" && ((Qc = window.document) != null && Qc.createElement || ((Zc = window.navigator) == null ? void 0 : Zc.product) === "ReactNative") ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function cd(o) {
  const n = react__WEBPACK_IMPORTED_MODULE_1__.useRef(o);
  return Hi(() => void (n.current = o), [o]), n;
}
function dm({
  set: o
}) {
  return Hi(() => (o(new Promise(() => null)), () => o(!1)), [o]), null;
}
class fd extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...n) {
    super(...n), this.state = {
      error: !1
    };
  }
  componentDidCatch(n) {
    this.props.set(n);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}
fd.getDerivedStateFromError = () => ({
  error: !0
});
const dd = "__default", Jc = /* @__PURE__ */ new Map(), pm = (o) => o && !!o.memoized && !!o.changes;
function pd(o) {
  var n;
  const r = typeof window < "u" ? (n = window.devicePixelRatio) != null ? n : 2 : 1;
  return Array.isArray(o) ? Math.min(Math.max(o[0], r), o[1]) : o;
}
const Pi = (o) => {
  var n;
  return (n = o.__r3f) == null ? void 0 : n.root.getState();
};
function ho(o) {
  let n = o.__r3f.root;
  for (; n.getState().previousRoot; ) n = n.getState().previousRoot;
  return n;
}
const Oe = {
  obj: (o) => o === Object(o) && !Oe.arr(o) && typeof o != "function",
  fun: (o) => typeof o == "function",
  str: (o) => typeof o == "string",
  num: (o) => typeof o == "number",
  boo: (o) => typeof o == "boolean",
  und: (o) => o === void 0,
  arr: (o) => Array.isArray(o),
  equ(o, n, {
    arrays: r = "shallow",
    objects: i = "reference",
    strict: l = !0
  } = {}) {
    if (typeof o != typeof n || !!o != !!n) return !1;
    if (Oe.str(o) || Oe.num(o)) return o === n;
    const u = Oe.obj(o);
    if (u && i === "reference") return o === n;
    const a = Oe.arr(o);
    if (a && r === "reference") return o === n;
    if ((a || u) && o === n) return !0;
    let d;
    for (d in o) if (!(d in n)) return !1;
    if (u && r === "shallow" && i === "shallow") {
      for (d in l ? n : o) if (!Oe.equ(o[d], n[d], {
        strict: l,
        objects: "reference"
      })) return !1;
    } else
      for (d in l ? n : o) if (o[d] !== n[d]) return !1;
    if (Oe.und(d)) {
      if (a && o.length === 0 && n.length === 0 || u && Object.keys(o).length === 0 && Object.keys(n).length === 0) return !0;
      if (o !== n) return !1;
    }
    return !0;
  }
};
function hm(o) {
  o.dispose && o.type !== "Scene" && o.dispose();
  for (const n in o)
    n.dispose == null || n.dispose(), delete o[n];
}
function Vr(o, n) {
  const r = o;
  return r.__r3f = {
    type: "",
    root: null,
    previousAttach: null,
    memoizedProps: {},
    eventCount: 0,
    handlers: {},
    objects: [],
    parent: null,
    ...n
  }, o;
}
function Ea(o, n) {
  let r = o;
  if (n.includes("-")) {
    const i = n.split("-"), l = i.pop();
    return r = i.reduce((u, a) => u[a], o), {
      target: r,
      key: l
    };
  } else return {
    target: r,
    key: n
  };
}
const $c = /-\d+$/;
function Wl(o, n, r) {
  if (Oe.str(r)) {
    if ($c.test(r)) {
      const u = r.replace($c, ""), {
        target: a,
        key: d
      } = Ea(o, u);
      Array.isArray(a[d]) || (a[d] = []);
    }
    const {
      target: i,
      key: l
    } = Ea(o, r);
    n.__r3f.previousAttach = i[l], i[l] = n;
  } else n.__r3f.previousAttach = r(o, n);
}
function ef(o, n, r) {
  var i, l;
  if (Oe.str(r)) {
    const {
      target: u,
      key: a
    } = Ea(o, r), d = n.__r3f.previousAttach;
    d === void 0 ? delete u[a] : u[a] = d;
  } else (i = n.__r3f) == null || i.previousAttach == null || i.previousAttach(o, n);
  (l = n.__r3f) == null || delete l.previousAttach;
}
function hd(o, {
  children: n,
  key: r,
  ref: i,
  ...l
}, {
  children: u,
  key: a,
  ref: d,
  ...f
} = {}, g = !1) {
  var p;
  const h = (p = o?.__r3f) != null ? p : {}, v = Object.entries(l), x = [];
  if (g) {
    const A = Object.keys(f);
    for (let T = 0; T < A.length; T++)
      l.hasOwnProperty(A[T]) || v.unshift([A[T], dd + "remove"]);
  }
  v.forEach(([A, T]) => {
    var S;
    if ((S = o.__r3f) != null && S.primitive && A === "object" || Oe.equ(T, f[A])) return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(A)) return x.push([A, T, !0, []]);
    let w = [];
    A.includes("-") && (w = A.split("-")), x.push([A, T, !1, w]);
    for (const E in l) {
      const P = l[E];
      E.startsWith(`${A}-`) && x.push([E, P, !1, E.split("-")]);
    }
  });
  const _ = {
    ...l
  };
  return h.memoizedProps && h.memoizedProps.args && (_.args = h.memoizedProps.args), h.memoizedProps && h.memoizedProps.attach && (_.attach = h.memoizedProps.attach), {
    memoized: _,
    changes: x
  };
}
function Xl(o, n) {
  var r, i, l;
  const u = (r = o.__r3f) != null ? r : {}, a = u.root, d = (i = a == null || a.getState == null ? void 0 : a.getState()) != null ? i : {}, {
    memoized: f,
    changes: g
  } = pm(n) ? n : hd(o, n), p = u.eventCount;
  o.__r3f && (o.__r3f.memoizedProps = f);
  for (let v = 0; v < g.length; v++) {
    let [x, _, A, T] = g[v];
    if (Gl(o)) {
      const P = "srgb", M = "srgb-linear";
      x === "encoding" ? (x = "colorSpace", _ = _ === 3001 ? P : M) : x === "outputEncoding" && (x = "outputColorSpace", _ = _ === 3001 ? P : M);
    }
    let S = o, w = S[x];
    if (T.length && (w = T.reduce((E, P) => E[P], o), !(w && w.set))) {
      const [E, ...P] = T.reverse();
      S = P.reverse().reduce((M, L) => M[L], o), x = E;
    }
    if (_ === dd + "remove")
      if (S.constructor) {
        let E = Jc.get(S.constructor);
        E || (E = new S.constructor(), Jc.set(S.constructor, E)), _ = E[x];
      } else
        _ = 0;
    if (A)
      _ ? u.handlers[x] = _ : delete u.handlers[x], u.eventCount = Object.keys(u.handlers).length;
    else if (w && w.set && (w.copy || w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.L)) {
      if (Array.isArray(_))
        w.fromArray ? w.fromArray(_) : w.set(..._);
      else if (w.copy && _ && _.constructor && // Some environments may break strict identity checks by duplicating versions of three.js.
      // Loosen to unminified names, ignoring descendents.
      // https://github.com/pmndrs/react-three-fiber/issues/2856
      // TODO: fix upstream and remove in v9
      w.constructor === _.constructor)
        w.copy(_);
      else if (_ !== void 0) {
        const E = w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i;
        !E && w.setScalar ? w.setScalar(_) : w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.L && _ instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.L ? w.mask = _.mask : w.set(_), !ad() && !d.linear && E && w.convertSRGBToLinear();
      }
    } else if (S[x] = _, S[x] instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.T && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
    S[x].format === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.h && S[x].type === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.U) {
      const E = S[x];
      Gl(E) && Gl(d.gl) ? E.colorSpace = d.gl.outputColorSpace : E.encoding = d.gl.outputEncoding;
    }
    Gr(o);
  }
  if (u.parent && o.raycast && p !== u.eventCount) {
    const v = ho(o).getState().internal, x = v.interaction.indexOf(o);
    x > -1 && v.interaction.splice(x, 1), u.eventCount && v.interaction.push(o);
  }
  return !(g.length === 1 && g[0][0] === "onUpdate") && g.length && (l = o.__r3f) != null && l.parent && Ta(o), o;
}
function Gr(o) {
  var n, r;
  const i = (n = o.__r3f) == null || (r = n.root) == null || r.getState == null ? void 0 : r.getState();
  i && i.internal.frames === 0 && i.invalidate();
}
function Ta(o) {
  o.onUpdate == null || o.onUpdate(o);
}
function md(o, n) {
  o.manual || (ud(o) ? (o.left = n.width / -2, o.right = n.width / 2, o.top = n.height / 2, o.bottom = n.height / -2) : o.aspect = n.width / n.height, o.updateProjectionMatrix(), o.updateMatrixWorld());
}
function Ws(o) {
  return (o.eventObject || o.object).uuid + "/" + o.index + o.instanceId;
}
function mm() {
  var o;
  const n = typeof self < "u" && self || typeof window < "u" && window;
  if (!n) return Kr.DefaultEventPriority;
  switch ((o = n.event) == null ? void 0 : o.type) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return Kr.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return Kr.ContinuousEventPriority;
    default:
      return Kr.DefaultEventPriority;
  }
}
function gd(o, n, r, i) {
  const l = r.get(n);
  l && (r.delete(n), r.size === 0 && (o.delete(i), l.target.releasePointerCapture(i)));
}
function gm(o, n) {
  const {
    internal: r
  } = o.getState();
  r.interaction = r.interaction.filter((i) => i !== n), r.initialHits = r.initialHits.filter((i) => i !== n), r.hovered.forEach((i, l) => {
    (i.eventObject === n || i.object === n) && r.hovered.delete(l);
  }), r.capturedMap.forEach((i, l) => {
    gd(r.capturedMap, n, i, l);
  });
}
function vm(o) {
  function n(f) {
    const {
      internal: g
    } = o.getState(), p = f.offsetX - g.initialClick[0], h = f.offsetY - g.initialClick[1];
    return Math.round(Math.sqrt(p * p + h * h));
  }
  function r(f) {
    return f.filter((g) => ["Move", "Over", "Enter", "Out", "Leave"].some((p) => {
      var h;
      return (h = g.__r3f) == null ? void 0 : h.handlers["onPointer" + p];
    }));
  }
  function i(f, g) {
    const p = o.getState(), h = /* @__PURE__ */ new Set(), v = [], x = g ? g(p.internal.interaction) : p.internal.interaction;
    for (let S = 0; S < x.length; S++) {
      const w = Pi(x[S]);
      w && (w.raycaster.camera = void 0);
    }
    p.previousRoot || p.events.compute == null || p.events.compute(f, p);
    function _(S) {
      const w = Pi(S);
      if (!w || !w.events.enabled || w.raycaster.camera === null) return [];
      if (w.raycaster.camera === void 0) {
        var E;
        w.events.compute == null || w.events.compute(f, w, (E = w.previousRoot) == null ? void 0 : E.getState()), w.raycaster.camera === void 0 && (w.raycaster.camera = null);
      }
      return w.raycaster.camera ? w.raycaster.intersectObject(S, !0) : [];
    }
    let A = x.flatMap(_).sort((S, w) => {
      const E = Pi(S.object), P = Pi(w.object);
      return !E || !P ? S.distance - w.distance : P.events.priority - E.events.priority || S.distance - w.distance;
    }).filter((S) => {
      const w = Ws(S);
      return h.has(w) ? !1 : (h.add(w), !0);
    });
    p.events.filter && (A = p.events.filter(A, p));
    for (const S of A) {
      let w = S.object;
      for (; w; ) {
        var T;
        (T = w.__r3f) != null && T.eventCount && v.push({
          ...S,
          eventObject: w
        }), w = w.parent;
      }
    }
    if ("pointerId" in f && p.internal.capturedMap.has(f.pointerId))
      for (let S of p.internal.capturedMap.get(f.pointerId).values())
        h.has(Ws(S.intersection)) || v.push(S.intersection);
    return v;
  }
  function l(f, g, p, h) {
    const v = o.getState();
    if (f.length) {
      const x = {
        stopped: !1
      };
      for (const _ of f) {
        const A = Pi(_.object) || v, {
          raycaster: T,
          pointer: S,
          camera: w,
          internal: E
        } = A, P = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(S.x, S.y, 0).unproject(w), M = (I) => {
          var k, j;
          return (k = (j = E.capturedMap.get(I)) == null ? void 0 : j.has(_.eventObject)) != null ? k : !1;
        }, L = (I) => {
          const k = {
            intersection: _,
            target: g.target
          };
          E.capturedMap.has(I) ? E.capturedMap.get(I).set(_.eventObject, k) : E.capturedMap.set(I, /* @__PURE__ */ new Map([[_.eventObject, k]])), g.target.setPointerCapture(I);
        }, R = (I) => {
          const k = E.capturedMap.get(I);
          k && gd(E.capturedMap, _.eventObject, k, I);
        };
        let z = {};
        for (let I in g) {
          let k = g[I];
          typeof k != "function" && (z[I] = k);
        }
        let D = {
          ..._,
          ...z,
          pointer: S,
          intersections: f,
          stopped: x.stopped,
          delta: p,
          unprojectedPoint: P,
          ray: T.ray,
          camera: w,
          // Hijack stopPropagation, which just sets a flag
          stopPropagation() {
            const I = "pointerId" in g && E.capturedMap.get(g.pointerId);
            if (
              // ...if this pointer hasn't been captured
              (!I || // ... or if the hit object is capturing the pointer
              I.has(_.eventObject)) && (D.stopped = x.stopped = !0, E.hovered.size && Array.from(E.hovered.values()).find((k) => k.eventObject === _.eventObject))
            ) {
              const k = f.slice(0, f.indexOf(_));
              u([...k, _]);
            }
          },
          // there should be a distinction between target and currentTarget
          target: {
            hasPointerCapture: M,
            setPointerCapture: L,
            releasePointerCapture: R
          },
          currentTarget: {
            hasPointerCapture: M,
            setPointerCapture: L,
            releasePointerCapture: R
          },
          nativeEvent: g
        };
        if (h(D), x.stopped === !0) break;
      }
    }
    return f;
  }
  function u(f) {
    const {
      internal: g
    } = o.getState();
    for (const p of g.hovered.values())
      if (!f.length || !f.find((h) => h.object === p.object && h.index === p.index && h.instanceId === p.instanceId)) {
        const v = p.eventObject.__r3f, x = v?.handlers;
        if (g.hovered.delete(Ws(p)), v != null && v.eventCount) {
          const _ = {
            ...p,
            intersections: f
          };
          x.onPointerOut == null || x.onPointerOut(_), x.onPointerLeave == null || x.onPointerLeave(_);
        }
      }
  }
  function a(f, g) {
    for (let p = 0; p < g.length; p++) {
      const h = g[p].__r3f;
      h == null || h.handlers.onPointerMissed == null || h.handlers.onPointerMissed(f);
    }
  }
  function d(f) {
    switch (f) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => u([]);
      case "onLostPointerCapture":
        return (g) => {
          const {
            internal: p
          } = o.getState();
          "pointerId" in g && p.capturedMap.has(g.pointerId) && requestAnimationFrame(() => {
            p.capturedMap.has(g.pointerId) && (p.capturedMap.delete(g.pointerId), u([]));
          });
        };
    }
    return function(p) {
      const {
        onPointerMissed: h,
        internal: v
      } = o.getState();
      v.lastEvent.current = p;
      const x = f === "onPointerMove", _ = f === "onClick" || f === "onContextMenu" || f === "onDoubleClick", T = i(p, x ? r : void 0), S = _ ? n(p) : 0;
      f === "onPointerDown" && (v.initialClick = [p.offsetX, p.offsetY], v.initialHits = T.map((E) => E.eventObject)), _ && !T.length && S <= 2 && (a(p, v.interaction), h && h(p)), x && u(T);
      function w(E) {
        const P = E.eventObject, M = P.__r3f, L = M?.handlers;
        if (M != null && M.eventCount)
          if (x) {
            if (L.onPointerOver || L.onPointerEnter || L.onPointerOut || L.onPointerLeave) {
              const R = Ws(E), z = v.hovered.get(R);
              z ? z.stopped && E.stopPropagation() : (v.hovered.set(R, E), L.onPointerOver == null || L.onPointerOver(E), L.onPointerEnter == null || L.onPointerEnter(E));
            }
            L.onPointerMove == null || L.onPointerMove(E);
          } else {
            const R = L[f];
            R ? (!_ || v.initialHits.includes(P)) && (a(p, v.interaction.filter((z) => !v.initialHits.includes(z))), R(E)) : _ && v.initialHits.includes(P) && a(p, v.interaction.filter((z) => !v.initialHits.includes(z)));
          }
      }
      l(T, p, S, w);
    };
  }
  return {
    handlePointer: d
  };
}
const ym = ["set", "get", "setSize", "setFrameloop", "setDpr", "events", "invalidate", "advance", "size", "viewport"], vd = (o) => !!(o != null && o.render), Wa = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null), xm = (o, n) => {
  const r = xo((d, f) => {
    const g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), h = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
    function v(S = f().camera, w = p, E = f().size) {
      const {
        width: P,
        height: M,
        top: L,
        left: R
      } = E, z = P / M;
      w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c ? h.copy(w) : h.set(...w);
      const D = S.getWorldPosition(g).distanceTo(h);
      if (ud(S))
        return {
          width: P / S.zoom,
          height: M / S.zoom,
          top: L,
          left: R,
          factor: 1,
          distance: D,
          aspect: z
        };
      {
        const I = S.fov * Math.PI / 180, k = 2 * Math.tan(I / 2) * D, j = k * (P / M);
        return {
          width: j,
          height: k,
          top: L,
          left: R,
          factor: P / j,
          distance: D,
          aspect: z
        };
      }
    }
    let x;
    const _ = (S) => d((w) => ({
      performance: {
        ...w.performance,
        current: S
      }
    })), A = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d();
    return {
      set: d,
      get: f,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: !0,
        connected: !1
      },
      xr: null,
      scene: null,
      invalidate: (S = 1) => o(f(), S),
      advance: (S, w) => n(S, w, f()),
      legacy: !1,
      linear: !1,
      flat: !1,
      controls: null,
      clock: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.C(),
      pointer: A,
      mouse: A,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const S = f();
          x && clearTimeout(x), S.performance.current !== S.performance.min && _(S.performance.min), x = setTimeout(() => _(f().performance.max), S.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        updateStyle: !1
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport: v
      },
      setEvents: (S) => d((w) => ({
        ...w,
        events: {
          ...w.events,
          ...S
        }
      })),
      setSize: (S, w, E, P, M) => {
        const L = f().camera, R = {
          width: S,
          height: w,
          top: P || 0,
          left: M || 0,
          updateStyle: E
        };
        d((z) => ({
          size: R,
          viewport: {
            ...z.viewport,
            ...v(L, p, R)
          }
        }));
      },
      setDpr: (S) => d((w) => {
        const E = pd(S);
        return {
          viewport: {
            ...w.viewport,
            dpr: E,
            initialDpr: w.viewport.initialDpr || E
          }
        };
      }),
      setFrameloop: (S = "always") => {
        const w = f().clock;
        w.stop(), w.elapsedTime = 0, S !== "never" && (w.start(), w.elapsedTime = 0), d(() => ({
          frameloop: S
        }));
      },
      previousRoot: void 0,
      internal: {
        active: !1,
        priority: 0,
        frames: 0,
        lastEvent: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createRef(),
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        subscribe: (S, w, E) => {
          const P = f().internal;
          return P.priority = P.priority + (w > 0 ? 1 : 0), P.subscribers.push({
            ref: S,
            priority: w,
            store: E
          }), P.subscribers = P.subscribers.sort((M, L) => M.priority - L.priority), () => {
            const M = f().internal;
            M != null && M.subscribers && (M.priority = M.priority - (w > 0 ? 1 : 0), M.subscribers = M.subscribers.filter((L) => L.ref !== S));
          };
        }
      }
    };
  }), i = r.getState();
  let l = i.size, u = i.viewport.dpr, a = i.camera;
  return r.subscribe(() => {
    const {
      camera: d,
      size: f,
      viewport: g,
      gl: p,
      set: h
    } = r.getState();
    if (f.width !== l.width || f.height !== l.height || g.dpr !== u) {
      var v;
      l = f, u = g.dpr, md(d, f), p.setPixelRatio(g.dpr);
      const x = (v = f.updateStyle) != null ? v : typeof HTMLCanvasElement < "u" && p.domElement instanceof HTMLCanvasElement;
      p.setSize(f.width, f.height, x);
    }
    d !== a && (a = d, h((x) => ({
      viewport: {
        ...x.viewport,
        ...x.viewport.getCurrentViewport(d)
      }
    })));
  }), r.subscribe((d) => o(d)), r;
};
let Xs, Sm = /* @__PURE__ */ new Set(), wm = /* @__PURE__ */ new Set(), _m = /* @__PURE__ */ new Set();
function Kl(o, n) {
  if (o.size)
    for (const {
      callback: r
    } of o.values())
      r(n);
}
function Ci(o, n) {
  switch (o) {
    case "before":
      return Kl(Sm, n);
    case "after":
      return Kl(wm, n);
    case "tail":
      return Kl(_m, n);
  }
}
let Yl, ql;
function Ql(o, n, r) {
  let i = n.clock.getDelta();
  for (n.frameloop === "never" && typeof o == "number" && (i = o - n.clock.elapsedTime, n.clock.oldTime = n.clock.elapsedTime, n.clock.elapsedTime = o), Yl = n.internal.subscribers, Xs = 0; Xs < Yl.length; Xs++)
    ql = Yl[Xs], ql.ref.current(ql.store.getState(), i, r);
  return !n.internal.priority && n.gl.render && n.gl.render(n.scene, n.camera), n.internal.frames = Math.max(0, n.internal.frames - 1), n.frameloop === "always" ? 1 : n.internal.frames;
}
function Em(o) {
  let n = !1, r, i, l;
  function u(f) {
    i = requestAnimationFrame(u), n = !0, r = 0, Ci("before", f);
    for (const p of o.values()) {
      var g;
      l = p.store.getState(), l.internal.active && (l.frameloop === "always" || l.internal.frames > 0) && !((g = l.gl.xr) != null && g.isPresenting) && (r += Ql(f, l));
    }
    if (Ci("after", f), r === 0)
      return Ci("tail", f), n = !1, cancelAnimationFrame(i);
  }
  function a(f, g = 1) {
    var p;
    if (!f) return o.forEach((h) => a(h.store.getState(), g));
    (p = f.gl.xr) != null && p.isPresenting || !f.internal.active || f.frameloop === "never" || (f.internal.frames = Math.min(60, f.internal.frames + g), n || (n = !0, requestAnimationFrame(u)));
  }
  function d(f, g = !0, p, h) {
    if (g && Ci("before", f), p) Ql(f, p, h);
    else for (const v of o.values()) Ql(f, v.store.getState());
    g && Ci("after", f);
  }
  return {
    loop: u,
    invalidate: a,
    advance: d
  };
}
function Xa() {
  const o = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Wa);
  if (!o) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return o;
}
function rt(o = (r) => r, n) {
  return Xa()(o, n);
}
function dr(o, n = 0) {
  const r = Xa(), i = r.getState().internal.subscribe, l = cd(o);
  return Hi(() => i(l, n, r), [n, i, r]), null;
}
const Zr = /* @__PURE__ */ new Map(), {
  invalidate: tf,
  advance: nf
} = Em(Zr), {
  reconciler: ji,
  applyProps: Rr
} = cm(Zr, mm), Nr = {
  objects: "shallow",
  strict: !1
}, Tm = (o, n) => {
  const r = typeof o == "function" ? o(n) : o;
  return vd(r) ? r : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.W({
    powerPreference: "high-performance",
    canvas: n,
    antialias: !0,
    alpha: !0,
    ...o
  });
};
function Am(o, n) {
  const r = typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement;
  if (n) {
    const {
      width: i,
      height: l,
      top: u,
      left: a,
      updateStyle: d = r
    } = n;
    return {
      width: i,
      height: l,
      top: u,
      left: a,
      updateStyle: d
    };
  } else if (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement && o.parentElement) {
    const {
      width: i,
      height: l,
      top: u,
      left: a
    } = o.parentElement.getBoundingClientRect();
    return {
      width: i,
      height: l,
      top: u,
      left: a,
      updateStyle: r
    };
  } else if (typeof OffscreenCanvas < "u" && o instanceof OffscreenCanvas)
    return {
      width: o.width,
      height: o.height,
      top: 0,
      left: 0,
      updateStyle: r
    };
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
}
function Pm(o) {
  const n = Zr.get(o), r = n?.fiber, i = n?.store;
  n && console.warn("R3F.createRoot should only be called once!");
  const l = typeof reportError == "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  ), u = i || xm(tf, nf), a = r || ji.createContainer(u, Kr.ConcurrentRoot, null, !1, null, "", l, null);
  n || Zr.set(o, {
    fiber: a,
    store: u
  });
  let d, f = !1, g;
  return {
    configure(p = {}) {
      let {
        gl: h,
        size: v,
        scene: x,
        events: _,
        onCreated: A,
        shadows: T = !1,
        linear: S = !1,
        flat: w = !1,
        legacy: E = !1,
        orthographic: P = !1,
        frameloop: M = "always",
        dpr: L = [1, 2],
        performance: R,
        raycaster: z,
        camera: D,
        onPointerMissed: I
      } = p, k = u.getState(), j = k.gl;
      k.gl || k.set({
        gl: j = Tm(h, o)
      });
      let G = k.raycaster;
      G || k.set({
        raycaster: G = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.R()
      });
      const {
        params: Y,
        ...ee
      } = z || {};
      if (Oe.equ(ee, G, Nr) || Rr(G, {
        ...ee
      }), Oe.equ(Y, G.params, Nr) || Rr(G, {
        params: {
          ...G.params,
          ...Y
        }
      }), !k.camera || k.camera === g && !Oe.equ(g, D, Nr)) {
        g = D;
        const Z = D instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.e, te = Z ? D : P ? new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O(0, 0, 0, 0, 0.1, 1e3) : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P(75, 0, 0.1, 1e3);
        Z || (te.position.z = 5, D && Rr(te, D), !k.camera && !(D != null && D.rotation) && te.lookAt(0, 0, 0)), k.set({
          camera: te
        }), G.camera = te;
      }
      if (!k.scene) {
        let Z;
        x instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.S ? Z = x : (Z = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.S(), x && Rr(Z, x)), k.set({
          scene: Vr(Z)
        });
      }
      if (!k.xr) {
        var ae;
        const Z = (xe, Fe) => {
          const it = u.getState();
          it.frameloop !== "never" && nf(xe, !0, it, Fe);
        }, te = () => {
          const xe = u.getState();
          xe.gl.xr.enabled = xe.gl.xr.isPresenting, xe.gl.xr.setAnimationLoop(xe.gl.xr.isPresenting ? Z : null), xe.gl.xr.isPresenting || tf(xe);
        }, ge = {
          connect() {
            const xe = u.getState().gl;
            xe.xr.addEventListener("sessionstart", te), xe.xr.addEventListener("sessionend", te);
          },
          disconnect() {
            const xe = u.getState().gl;
            xe.xr.removeEventListener("sessionstart", te), xe.xr.removeEventListener("sessionend", te);
          }
        };
        typeof ((ae = j.xr) == null ? void 0 : ae.addEventListener) == "function" && ge.connect(), k.set({
          xr: ge
        });
      }
      if (j.shadowMap) {
        const Z = j.shadowMap.enabled, te = j.shadowMap.type;
        if (j.shadowMap.enabled = !!T, Oe.boo(T))
          j.shadowMap.type = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a;
        else if (Oe.str(T)) {
          var we;
          const ge = {
            basic: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.B,
            percentage: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.b,
            soft: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a,
            variance: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.V
          };
          j.shadowMap.type = (we = ge[T]) != null ? we : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a;
        } else Oe.obj(T) && Object.assign(j.shadowMap, T);
        (Z !== j.shadowMap.enabled || te !== j.shadowMap.type) && (j.shadowMap.needsUpdate = !0);
      }
      const W = ad();
      W && ("enabled" in W ? W.enabled = !E : "legacyMode" in W && (W.legacyMode = E)), f || Rr(j, {
        outputEncoding: S ? 3e3 : 3001,
        toneMapping: w ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.N : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.A
      }), k.legacy !== E && k.set(() => ({
        legacy: E
      })), k.linear !== S && k.set(() => ({
        linear: S
      })), k.flat !== w && k.set(() => ({
        flat: w
      })), h && !Oe.fun(h) && !vd(h) && !Oe.equ(h, j, Nr) && Rr(j, h), _ && !k.events.handlers && k.set({
        events: _(u)
      });
      const J = Am(o, v);
      return Oe.equ(J, k.size, Nr) || k.setSize(J.width, J.height, J.updateStyle, J.top, J.left), L && k.viewport.dpr !== pd(L) && k.setDpr(L), k.frameloop !== M && k.setFrameloop(M), k.onPointerMissed || k.set({
        onPointerMissed: I
      }), R && !Oe.equ(R, k.performance, Nr) && k.set((Z) => ({
        performance: {
          ...Z.performance,
          ...R
        }
      })), d = A, f = !0, this;
    },
    render(p) {
      return f || this.configure(), ji.updateContainer(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Cm, {
        store: u,
        children: p,
        onCreated: d,
        rootElement: o
      }), a, null, () => {
      }), u;
    },
    unmount() {
      yd(o);
    }
  };
}
function Cm({
  store: o,
  children: n,
  onCreated: r,
  rootElement: i
}) {
  return Hi(() => {
    const l = o.getState();
    l.set((u) => ({
      internal: {
        ...u.internal,
        active: !0
      }
    })), r && r(l), o.getState().events.connected || l.events.connect == null || l.events.connect(i);
  }, []), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Wa.Provider, {
    value: o
  }, n);
}
function yd(o, n) {
  const r = Zr.get(o), i = r?.fiber;
  if (i) {
    const l = r?.store.getState();
    l && (l.internal.active = !1), ji.updateContainer(null, i, null, () => {
      l && setTimeout(() => {
        try {
          var u, a, d, f;
          l.events.disconnect == null || l.events.disconnect(), (u = l.gl) == null || (a = u.renderLists) == null || a.dispose == null || a.dispose(), (d = l.gl) == null || d.forceContextLoss == null || d.forceContextLoss(), (f = l.gl) != null && f.xr && l.xr.disconnect(), hm(l), Zr.delete(o);
        } catch {
        }
      }, 500);
    });
  }
}
function Aa(o, n, r) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Mm, {
    key: n.uuid,
    children: o,
    container: n,
    state: r
  });
}
function Mm({
  state: o = {},
  children: n,
  container: r
}) {
  const {
    events: i,
    size: l,
    ...u
  } = o, a = Xa(), [d] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.R()), [f] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d()), g = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (h, v) => {
      const x = {
        ...h
      };
      Object.keys(h).forEach((A) => {
        // Some props should be off-limits
        (ym.includes(A) || // Otherwise filter out the props that are different and let the inject layer take precedence
        // Unless the inject layer props is undefined, then we keep the root layer
        h[A] !== v[A] && v[A]) && delete x[A];
      });
      let _;
      if (v && l) {
        const A = v.camera;
        _ = h.viewport.getCurrentViewport(A, new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), l), A !== h.camera && md(A, l);
      }
      return {
        // The intersect consists of the previous root state
        ...x,
        // Portals have their own scene, which forms the root, a raycaster and a pointer
        scene: r,
        raycaster: d,
        pointer: f,
        mouse: f,
        // Their previous root is the layer before it
        previousRoot: a,
        // Events, size and viewport can be overridden by the inject layer
        events: {
          ...h.events,
          ...v?.events,
          ...i
        },
        size: {
          ...h.size,
          ...l
        },
        viewport: {
          ...h.viewport,
          ..._
        },
        ...u
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o]
  ), [p] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => {
    const h = a.getState();
    return xo((x, _) => ({
      ...h,
      scene: r,
      raycaster: d,
      pointer: f,
      mouse: f,
      previousRoot: a,
      events: {
        ...h.events,
        ...i
      },
      size: {
        ...h.size,
        ...l
      },
      ...u,
      // Set and get refer to this root-state
      set: x,
      get: _,
      // Layers are allowed to override events
      setEvents: (A) => x((T) => ({
        ...T,
        events: {
          ...T.events,
          ...A
        }
      }))
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const h = a.subscribe((v) => p.setState((x) => g(v, x)));
    return () => {
      h(), p.destroy();
    };
  }, []), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    p.setState((h) => g(a.getState(), h));
  }, [g]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, ji.createPortal(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Wa.Provider, {
    value: p
  }, n), p, null));
}
ji.injectIntoDevTools({
  bundleType: 0,
  rendererPackageName: "@react-three/fiber",
  version: react__WEBPACK_IMPORTED_MODULE_1__.version
});
var Zl, rf;
function Lm() {
  if (rf) return Zl;
  rf = 1;
  function o(n, r, i) {
    var l, u, a, d, f;
    r == null && (r = 100);
    function g() {
      var h = Date.now() - d;
      h < r && h >= 0 ? l = setTimeout(g, r - h) : (l = null, i || (f = n.apply(a, u), a = u = null));
    }
    var p = function() {
      a = this, u = arguments, d = Date.now();
      var h = i && !l;
      return l || (l = setTimeout(g, r)), h && (f = n.apply(a, u), a = u = null), f;
    };
    return p.clear = function() {
      l && (clearTimeout(l), l = null);
    }, p.flush = function() {
      l && (f = n.apply(a, u), a = u = null, clearTimeout(l), l = null);
    }, p;
  }
  return o.debounce = o, Zl = o, Zl;
}
var Rm = Lm();
const sf = /* @__PURE__ */ (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.g)(Rm);
function Nm(o) {
  let {
    debounce: n,
    scroll: r,
    polyfill: i,
    offsetSize: l
  } = o === void 0 ? {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
  } : o;
  const u = i || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!u)
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [a, d] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }), f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: a
  }), g = n ? typeof n == "number" ? n : n.scroll : null, p = n ? typeof n == "number" ? n : n.resize : null, h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => (h.current = !0, () => void (h.current = !1)));
  const [v, x, _] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const w = () => {
      if (!f.current.element) return;
      const {
        left: E,
        top: P,
        width: M,
        height: L,
        bottom: R,
        right: z,
        x: D,
        y: I
      } = f.current.element.getBoundingClientRect(), k = {
        left: E,
        top: P,
        width: M,
        height: L,
        bottom: R,
        right: z,
        x: D,
        y: I
      };
      f.current.element instanceof HTMLElement && l && (k.height = f.current.element.offsetHeight, k.width = f.current.element.offsetWidth), Object.freeze(k), h.current && !bm(f.current.lastBounds, k) && d(f.current.lastBounds = k);
    };
    return [w, p ? sf(w, p) : w, g ? sf(w, g) : w];
  }, [d, l, g, p]);
  function A() {
    f.current.scrollContainers && (f.current.scrollContainers.forEach((w) => w.removeEventListener("scroll", _, !0)), f.current.scrollContainers = null), f.current.resizeObserver && (f.current.resizeObserver.disconnect(), f.current.resizeObserver = null);
  }
  function T() {
    f.current.element && (f.current.resizeObserver = new u(_), f.current.resizeObserver.observe(f.current.element), r && f.current.scrollContainers && f.current.scrollContainers.forEach((w) => w.addEventListener("scroll", _, {
      capture: !0,
      passive: !0
    })));
  }
  const S = (w) => {
    !w || w === f.current.element || (A(), f.current.element = w, f.current.scrollContainers = xd(w), T());
  };
  return zm(_, !!r), Im(x), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    A(), T();
  }, [r, _, x]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => A, []), [S, a, v];
}
function Im(o) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const n = o;
    return window.addEventListener("resize", n), () => void window.removeEventListener("resize", n);
  }, [o]);
}
function zm(o, n) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (n) {
      const r = o;
      return window.addEventListener("scroll", r, {
        capture: !0,
        passive: !0
      }), () => void window.removeEventListener("scroll", r, !0);
    }
  }, [o, n]);
}
function xd(o) {
  const n = [];
  if (!o || o === document.body) return n;
  const {
    overflow: r,
    overflowX: i,
    overflowY: l
  } = window.getComputedStyle(o);
  return [r, i, l].some((u) => u === "auto" || u === "scroll") && n.push(o), [...n, ...xd(o.parentElement)];
}
const Om = ["x", "y", "top", "bottom", "left", "right", "width", "height"], bm = (o, n) => Om.every((r) => o[r] === n[r]);
var Dm = Object.defineProperty, km = Object.defineProperties, Fm = Object.getOwnPropertyDescriptors, of = Object.getOwnPropertySymbols, Bm = Object.prototype.hasOwnProperty, jm = Object.prototype.propertyIsEnumerable, lf = (o, n, r) => n in o ? Dm(o, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[n] = r, af = (o, n) => {
  for (var r in n || (n = {}))
    Bm.call(n, r) && lf(o, r, n[r]);
  if (of)
    for (var r of of(n))
      jm.call(n, r) && lf(o, r, n[r]);
  return o;
}, Um = (o, n) => km(o, Fm(n));
function Sd(o, n, r) {
  if (!o)
    return;
  if (r(o) === !0)
    return o;
  let i = o.child;
  for (; i; ) {
    const l = Sd(i, n, r);
    if (l)
      return l;
    i = i.sibling;
  }
}
function wd(o) {
  try {
    return Object.defineProperties(o, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return o;
  }
}
const Ka = wd(react__WEBPACK_IMPORTED_MODULE_1__.createContext(null));
class _d extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Ka.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
const { ReactCurrentOwner: uf, ReactCurrentDispatcher: cf } = react__WEBPACK_IMPORTED_MODULE_1__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function Hm() {
  const o = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Ka);
  if (o === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const n = react__WEBPACK_IMPORTED_MODULE_1__.useId();
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    for (const i of [uf?.current, o, o?.alternate]) {
      if (!i)
        continue;
      const l = Sd(i, !1, (u) => {
        let a = u.memoizedState;
        for (; a; ) {
          if (a.memoizedState === n)
            return !0;
          a = a.next;
        }
      });
      if (l)
        return l;
    }
  }, [o, n]);
}
function Vm() {
  var o, n;
  const r = Hm(), [i] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => /* @__PURE__ */ new Map());
  i.clear();
  let l = r;
  for (; l; ) {
    const u = (o = l.type) == null ? void 0 : o._context;
    u && u !== Ka && !i.has(u) && i.set(u, (n = cf?.current) == null ? void 0 : n.readContext(wd(u))), l = l.return;
  }
  return i;
}
function Gm() {
  const o = Vm();
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => Array.from(o.keys()).reduce(
      (n, r) => (i) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(n, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(r.Provider, Um(af({}, i), {
        value: o.get(r)
      }))),
      (n) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_d, af({}, n))
    ),
    [o]
  );
}
const Jl = {
  onClick: ["click", !1],
  onContextMenu: ["contextmenu", !1],
  onDoubleClick: ["dblclick", !1],
  onWheel: ["wheel", !0],
  onPointerDown: ["pointerdown", !0],
  onPointerUp: ["pointerup", !0],
  onPointerLeave: ["pointerleave", !0],
  onPointerMove: ["pointermove", !0],
  onPointerCancel: ["pointercancel", !0],
  onLostPointerCapture: ["lostpointercapture", !0]
};
function Wm(o) {
  const {
    handlePointer: n
  } = vm(o);
  return {
    priority: 1,
    enabled: !0,
    compute(r, i, l) {
      i.pointer.set(r.offsetX / i.size.width * 2 - 1, -(r.offsetY / i.size.height) * 2 + 1), i.raycaster.setFromCamera(i.pointer, i.camera);
    },
    connected: void 0,
    handlers: Object.keys(Jl).reduce((r, i) => ({
      ...r,
      [i]: n(i)
    }), {}),
    update: () => {
      var r;
      const {
        events: i,
        internal: l
      } = o.getState();
      (r = l.lastEvent) != null && r.current && i.handlers && i.handlers.onPointerMove(l.lastEvent.current);
    },
    connect: (r) => {
      var i;
      const {
        set: l,
        events: u
      } = o.getState();
      u.disconnect == null || u.disconnect(), l((a) => ({
        events: {
          ...a.events,
          connected: r
        }
      })), Object.entries((i = u.handlers) != null ? i : []).forEach(([a, d]) => {
        const [f, g] = Jl[a];
        r.addEventListener(f, d, {
          passive: g
        });
      });
    },
    disconnect: () => {
      const {
        set: r,
        events: i
      } = o.getState();
      if (i.connected) {
        var l;
        Object.entries((l = i.handlers) != null ? l : []).forEach(([u, a]) => {
          if (i && i.connected instanceof HTMLElement) {
            const [d] = Jl[u];
            i.connected.removeEventListener(d, a);
          }
        }), r((u) => ({
          events: {
            ...u.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
const Xm = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({
  children: n,
  fallback: r,
  resize: i,
  style: l,
  gl: u,
  events: a = Wm,
  eventSource: d,
  eventPrefix: f,
  shadows: g,
  linear: p,
  flat: h,
  legacy: v,
  orthographic: x,
  frameloop: _,
  dpr: A,
  performance: T,
  raycaster: S,
  camera: w,
  scene: E,
  onPointerMissed: P,
  onCreated: M,
  ...L
}, R) {
  react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => Ga(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.j), []);
  const z = Gm(), [D, I] = Nm({
    scroll: !0,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...i
  }), k = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), j = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(R, () => k.current);
  const G = cd(P), [Y, ee] = react__WEBPACK_IMPORTED_MODULE_1__.useState(!1), [ae, we] = react__WEBPACK_IMPORTED_MODULE_1__.useState(!1);
  if (Y) throw Y;
  if (ae) throw ae;
  const W = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  Hi(() => {
    const Z = k.current;
    I.width > 0 && I.height > 0 && Z && (W.current || (W.current = Pm(Z)), W.current.configure({
      gl: u,
      events: a,
      shadows: g,
      linear: p,
      flat: h,
      legacy: v,
      orthographic: x,
      frameloop: _,
      dpr: A,
      performance: T,
      raycaster: S,
      camera: w,
      scene: E,
      size: I,
      // Pass mutable reference to onPointerMissed so it's free to update
      onPointerMissed: (...te) => G.current == null ? void 0 : G.current(...te),
      onCreated: (te) => {
        te.events.connect == null || te.events.connect(d ? fm(d) ? d.current : d : j.current), f && te.setEvents({
          compute: (ge, xe) => {
            const Fe = ge[f + "X"], it = ge[f + "Y"];
            xe.pointer.set(Fe / xe.size.width * 2 - 1, -(it / xe.size.height) * 2 + 1), xe.raycaster.setFromCamera(xe.pointer, xe.camera);
          }
        }), M?.(te);
      }
    }), W.current.render(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(z, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(fd, {
      set: we
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
      fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(dm, {
        set: ee
      })
    }, n)))));
  }), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const Z = k.current;
    if (Z) return () => yd(Z);
  }, []);
  const J = d ? "none" : "auto";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    ref: j,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents: J,
      ...l
    }
  }, L), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: D,
    style: {
      width: "100%",
      height: "100%"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("canvas", {
    ref: k,
    style: {
      display: "block"
    }
  }, r)));
}), Km = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(n, r) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_d, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Xm, (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({}, n, {
    ref: r
  })));
});
class Ym extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G {
  constructor(n, r) {
    super(), this.inputSource = null, this.xrControllerModel = null, this.index = n, this.controller = r.xr.getController(n), this.grip = r.xr.getControllerGrip(n), this.hand = r.xr.getHand(n), this.grip.userData.name = "grip", this.controller.userData.name = "controller", this.hand.userData.name = "hand", this.visible = !1, this.add(this.controller, this.grip, this.hand), this._onConnected = this._onConnected.bind(this), this._onDisconnected = this._onDisconnected.bind(this), this.controller.addEventListener("connected", this._onConnected), this.controller.addEventListener("disconnected", this._onDisconnected);
  }
  _onConnected(n) {
    n.fake || n.data && (this.visible = !0, this.inputSource = n.data, this.dispatchEvent(n));
  }
  _onDisconnected(n) {
    n.fake || (this.visible = !1, this.inputSource = null, this.dispatchEvent(n));
  }
  dispose() {
    this.controller.removeEventListener("connected", this._onConnected), this.controller.removeEventListener("disconnected", this._onDisconnected);
  }
}
var ff, df;
const qm = (o) => Array.from(new Set(o)), Ut = typeof window < "u" && ((ff = window.document) != null && ff.createElement || ((df = window.navigator) == null ? void 0 : df.product) === "ReactNative") ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function dn(o) {
  const n = react__WEBPACK_IMPORTED_MODULE_1__.useRef(o);
  return Ut(() => void (n.current = o), [o]), n;
}
function Ir(o, n, { handedness: r } = {}) {
  const i = dn(n), l = Ue((u) => u.controllers);
  Ut(() => {
    const u = l.map((a) => {
      if (r && a.inputSource && a.inputSource.handedness !== r)
        return;
      const d = (f) => i.current({ nativeEvent: f, target: a });
      return a.controller.addEventListener(o, d), () => a.controller.removeEventListener(o, d);
    });
    return () => u.forEach((a) => a?.());
  }, [l, r, o]);
}
const pf = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k();
function Qm({ children: o }) {
  const n = rt((h) => h.events), r = rt((h) => h.get), i = rt((h) => h.raycaster), l = Ue((h) => h.controllers), u = Ue((h) => h.interactions), a = Ue((h) => h.hoverState), d = Ue((h) => h.hasInteraction), f = Ue((h) => h.getInteraction), g = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (h) => {
      const v = Array.from(u.keys());
      return pf.identity().extractRotation(h.matrixWorld), i.ray.origin.setFromMatrixPosition(h.matrixWorld), i.ray.direction.set(0, 0, -1).applyMatrix4(pf), i.intersectObjects(v, !0);
    },
    [u, i]
  );
  dr(() => {
    var h;
    if (u.size !== 0)
      for (const v of l) {
        if (!((h = v.inputSource) != null && h.handedness))
          return;
        const x = a[v.inputSource.handedness], _ = /* @__PURE__ */ new Set();
        let A = g(v.controller);
        if (n.filter)
          A = n.filter(A, r());
        else {
          const T = A.find((S) => S?.object);
          T && (A = [T]);
        }
        for (const T of A) {
          let S = T.object;
          for (; S; ) {
            if (d(S, "onHover") && !x.has(S)) {
              const E = f(S, "onHover");
              for (const P of E)
                P({ target: v, intersection: T, intersections: A });
            }
            const w = f(S, "onMove");
            w?.forEach((E) => E({ target: v, intersection: T, intersections: A })), x.set(S, T), _.add(S.id), S = S.parent;
          }
        }
        for (const T of x.keys())
          if (!_.has(T.id)) {
            x.delete(T);
            const S = f(T, "onBlur");
            if (!S)
              continue;
            for (const w of S)
              w({ target: v, intersections: A });
          }
      }
  });
  const p = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (h) => (v) => {
      var x;
      if (!((x = v.target.inputSource) != null && x.handedness))
        return;
      const _ = a[v.target.inputSource.handedness], A = Array.from(new Set(_.values()));
      u.forEach((T, S) => {
        var w, E, P;
        if (_.has(S)) {
          if (!T[h])
            return;
          for (const M of T[h])
            (w = M.current) == null || w.call(M, { target: v.target, intersection: _.get(S), intersections: A });
        } else if (h === "onSelect" && T.onSelectMissed)
          for (const M of T.onSelectMissed)
            (E = M.current) == null || E.call(M, { target: v.target, intersections: A });
        else if (h === "onSqueeze" && T.onSqueezeMissed)
          for (const M of T.onSqueezeMissed)
            (P = M.current) == null || P.call(M, { target: v.target, intersections: A });
      });
    },
    [a, u]
  );
  return Ir("select", p("onSelect")), Ir("selectstart", p("onSelectStart")), Ir("selectend", p("onSelectEnd")), Ir("squeeze", p("onSqueeze")), Ir("squeezeend", p("onSqueezeEnd")), Ir("squeezestart", p("onSqueezeStart")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, o);
}
function Zt(o, n, r) {
  const i = Ue((a) => a.addInteraction), l = Ue((a) => a.removeInteraction), u = dn(r);
  Ut(() => {
    const a = o.current;
    if (!(!a || !u.current))
      return i(a, n, u), () => l(a, n, u);
  }, [o, n, i, l]);
}
const Zm = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({
  onHover: n,
  onBlur: r,
  onSelectStart: i,
  onSelectEnd: l,
  onSelectMissed: u,
  onSelect: a,
  onSqueezeStart: d,
  onSqueezeEnd: f,
  onSqueezeMissed: g,
  onSqueeze: p,
  onMove: h,
  children: v
}, x) {
  const _ = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(x, () => _.current), Zt(_, "onHover", n), Zt(_, "onBlur", r), Zt(_, "onSelectStart", i), Zt(_, "onSelectEnd", l), Zt(_, "onSelectMissed", u), Zt(_, "onSelect", a), Zt(_, "onSqueezeStart", d), Zt(_, "onSqueezeEnd", f), Zt(_, "onSqueezeMissed", g), Zt(_, "onSqueeze", p), Zt(_, "onMove", h), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("group", {
    ref: _
  }, v);
}), Jm = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({ onSelectStart: n, onSelectEnd: r, children: i, ...l }, u) {
  const a = react__WEBPACK_IMPORTED_MODULE_1__.useRef(), d = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), f = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), []);
  return react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(u, () => d.current), dr(() => {
    const g = a.current, p = d.current;
    g && (p.applyMatrix4(f), p.applyMatrix4(g.matrixWorld), p.updateMatrixWorld(), f.copy(g.matrixWorld).invert());
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Zm, {
    ref: d,
    onSelectStart: (g) => {
      a.current = g.target.controller, f.copy(g.target.controller.matrixWorld).invert(), n?.(g);
    },
    onSelectEnd: (g) => {
      g.target.controller === a.current && (a.current = void 0), r?.(g);
    },
    ...l
  }, i);
}), Ed = react__WEBPACK_IMPORTED_MODULE_1__.createContext(null), cr = xo((o, n) => ({ set: o, get: n, session: null, referenceSpaceType: null }));
function $m({
  foveation: o = 0,
  frameRate: n = void 0,
  referenceSpace: r = "local-floor",
  onSessionStart: i,
  onSessionEnd: l,
  onVisibilityChange: u,
  onInputSourcesChange: a,
  children: d
}) {
  const f = rt((E) => E.gl), g = rt((E) => E.camera), p = Ue((E) => E.player), h = Ue((E) => E.get), v = Ue((E) => E.set), x = Ue((E) => E.session), _ = Ue((E) => E.controllers), A = dn(i), T = dn(l), S = dn(u), w = dn(a);
  return Ut(() => {
    const E = [0, 1].map((P) => {
      const M = new Ym(P, f), L = () => v((z) => ({ controllers: [...z.controllers, M] })), R = () => v((z) => ({ controllers: z.controllers.filter((D) => D !== M) }));
      return M.addEventListener("connected", L), M.addEventListener("disconnected", R), () => {
        M.removeEventListener("connected", L), M.removeEventListener("disconnected", R);
      };
    });
    return () => E.forEach((P) => P());
  }, [f, v]), Ut(() => cr.subscribe(({ session: E }) => v(() => ({ session: E }))), [f.xr, v]), Ut(() => {
    f.xr.setFoveation(o), v(() => ({ foveation: o }));
  }, [f.xr, o, v]), Ut(() => {
    var E;
    try {
      n && ((E = x?.updateTargetFrameRate) == null || E.call(x, n));
    } catch {
    }
    v(() => ({ frameRate: n }));
  }, [x, n, v]), Ut(() => {
    const E = cr.getState();
    f.xr.setReferenceSpaceType(r), v(() => ({ referenceSpace: r })), E.set({ referenceSpaceType: r });
  }, [f.xr, r, v]), Ut(() => {
    if (!x)
      return void f.xr.setSession(null);
    const E = (R) => {
      var z;
      v(() => ({ isPresenting: !0 })), (z = A.current) == null || z.call(A, { nativeEvent: { ...R, target: x }, target: x });
    }, P = (R) => {
      var z;
      v(() => ({ isPresenting: !1, session: null })), cr.setState(() => ({ session: null })), (z = T.current) == null || z.call(T, { nativeEvent: { ...R, target: x }, target: x });
    }, M = (R) => {
      var z;
      (z = S.current) == null || z.call(S, { nativeEvent: R, target: x });
    }, L = (R) => {
      var z;
      const D = Object.values(x.inputSources).some((I) => I.hand);
      v(() => ({ isHandTracking: D })), (z = w.current) == null || z.call(w, { nativeEvent: R, target: x });
    };
    return f.xr.addEventListener("sessionstart", E), f.xr.addEventListener("sessionend", P), x.addEventListener("visibilitychange", M), x.addEventListener("inputsourceschange", L), f.xr.setSession(x).then(() => {
      f.xr.setFoveation(h().foveation);
    }), () => {
      f.xr.removeEventListener("sessionstart", E), f.xr.removeEventListener("sessionend", P), x.removeEventListener("visibilitychange", M), x.removeEventListener("inputsourceschange", L);
    };
  }, [x, f.xr, v, h]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Qm, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", {
    object: p
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", {
    object: g
  }), _.map((E) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", {
    key: E.index,
    object: E
  }))), d);
}
function eg(o) {
  const n = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => xo((r, i) => ({
      set: r,
      get: i,
      controllers: [],
      isPresenting: !1,
      isHandTracking: !1,
      player: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G(),
      session: null,
      foveation: 0,
      referenceSpace: "local-floor",
      hoverState: {
        left: /* @__PURE__ */ new Map(),
        right: /* @__PURE__ */ new Map(),
        none: /* @__PURE__ */ new Map()
      },
      interactions: /* @__PURE__ */ new Map(),
      hasInteraction(l, u) {
        var a;
        return !!((a = i().interactions.get(l)) != null && a[u].some((d) => d.current));
      },
      getInteraction(l, u) {
        var a;
        return (a = i().interactions.get(l)) == null ? void 0 : a[u].reduce((d, f) => (f.current && d.push(f.current), d), []);
      },
      addInteraction(l, u, a) {
        const d = i().interactions;
        d.has(l) || d.set(l, {
          onHover: [],
          onBlur: [],
          onSelect: [],
          onSelectEnd: [],
          onSelectStart: [],
          onSelectMissed: [],
          onSqueeze: [],
          onSqueezeEnd: [],
          onSqueezeStart: [],
          onSqueezeMissed: [],
          onMove: []
        }), d.get(l)[u].push(a);
      },
      removeInteraction(l, u, a) {
        const d = i().interactions.get(l);
        if (d) {
          const f = d[u].indexOf(a);
          f !== -1 && d[u].splice(f, 1);
        }
      }
    })),
    []
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Ed.Provider, {
    value: n
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement($m, {
    ...o
  }));
}
const tg = (o, n) => {
  var r;
  if (!(!o && !n))
    return o && !n ? { optionalFeatures: [o] } : o && n ? { ...n, optionalFeatures: qm([...(r = n.optionalFeatures) != null ? r : [], o]) } : n;
}, ng = async (o, n) => {
  const r = cr.getState();
  if (r.session) {
    console.warn("@react-three/xr: session already started, please stop it first");
    return;
  }
  const i = tg(r.referenceSpaceType, n), l = await navigator.xr.requestSession(o, i);
  return r.set(() => ({ session: l })), l;
}, rg = async () => {
  const o = cr.getState();
  if (!o.session) {
    console.warn("@react-three/xr: no session to stop, please start it first");
    return;
  }
  await o.session.end(), o.set({ session: null });
}, ig = async (o, { sessionInit: n, enterOnly: r, exitOnly: i } = {}) => {
  const l = cr.getState();
  if (!(l.session && r) && !(!l.session && i))
    return l.session ? await rg() : await ng(o, n);
}, sg = (o, n, r) => {
  switch (o) {
    case "entered":
      return `Exit ${n}`;
    case "exited":
      return `Enter ${n}`;
    case "unsupported":
    default:
      switch (r) {
        case "https":
          return "HTTPS needed";
        case "security":
          return `${n} blocked`;
        case "unknown":
        default:
          return `${n} unsupported`;
      }
  }
}, Ya = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({ mode: n, sessionInit: r, enterOnly: i = !1, exitOnly: l = !1, onClick: u, onError: a, children: d, ...f }, g) {
  var p;
  const [h, v] = react__WEBPACK_IMPORTED_MODULE_1__.useState("exited"), [x, _] = react__WEBPACK_IMPORTED_MODULE_1__.useState("unknown"), A = sg(h, n, x), T = n === "inline" ? n : `immersive-${n.toLowerCase()}`, S = dn(a);
  Ut(() => {
    if (!navigator?.xr)
      return void v("unsupported");
    navigator.xr.isSessionSupported(T).then((E) => {
      if (E)
        v("exited");
      else {
        const P = location.protocol === "https:";
        v("unsupported"), _(P ? "unknown" : "https");
      }
    }).catch((E) => {
      v("unsupported"), "name" in E && E.name === "SecurityError" ? _("security") : _("unknown");
    });
  }, [T]), Ut(
    () => cr.subscribe((E) => {
      E.session ? v("entered") : h !== "unsupported" && v("exited");
    }),
    [h]
  );
  const w = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    async (E) => {
      u?.(E);
      try {
        ig(T, { sessionInit: r, enterOnly: i, exitOnly: l });
      } catch (P) {
        const M = S.current;
        if (M && P instanceof Error)
          M(P);
        else
          throw P;
      }
    },
    [u, T, r, i, l, S]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    ...f,
    ref: g,
    onClick: h === "unsupported" ? u : w
  }, (p = typeof d == "function" ? d(h) : d) != null ? p : A);
}), Td = {
  position: "absolute",
  bottom: "24px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "12px 24px",
  border: "1px solid white",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.1)",
  color: "white",
  font: "normal 0.8125rem sans-serif",
  outline: "none",
  zIndex: 99999,
  cursor: "pointer"
};
react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
  ({
    style: o = Td,
    sessionInit: n = {
      domOverlay: typeof document < "u" ? { root: document.body } : void 0,
      optionalFeatures: ["hit-test", "dom-overlay", "dom-overlay-for-handheld-ar"]
    },
    children: r,
    ...i
  }, l) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Ya, {
    ...i,
    ref: l,
    mode: "AR",
    style: o,
    sessionInit: n
  }, r)
);
react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
  ({
    style: o = Td,
    sessionInit: n = { optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking", "layers"] },
    children: r,
    ...i
  }, l) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Ya, {
    ...i,
    ref: l,
    mode: "VR",
    style: o,
    sessionInit: n
  }, r)
);
function Ue(o = (r) => r, n) {
  const r = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Ed);
  if (!r)
    throw new Error("useXR must be used within an <XR /> component!");
  return r(o, n);
}
function hf(o, n) {
  if (n === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.l)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), o;
  if (n === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.m || n === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.n) {
    let r = o.getIndex();
    if (r === null) {
      const a = [], d = o.getAttribute("position");
      if (d !== void 0) {
        for (let f = 0; f < d.count; f++)
          a.push(f);
        o.setIndex(a), r = o.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), o;
    }
    const i = r.count - 2, l = [];
    if (r)
      if (n === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.m)
        for (let a = 1; a <= i; a++)
          l.push(r.getX(0)), l.push(r.getX(a)), l.push(r.getX(a + 1));
      else
        for (let a = 0; a < i; a++)
          a % 2 === 0 ? (l.push(r.getX(a)), l.push(r.getX(a + 1)), l.push(r.getX(a + 2))) : (l.push(r.getX(a + 2)), l.push(r.getX(a + 1)), l.push(r.getX(a)));
    l.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const u = o.clone();
    return u.setIndex(l), u.clearGroups(), u;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", n), o;
}
const og = parseInt(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.o.replace(/\D+/g, ""));
var lg = Object.defineProperty, ag = (o, n, r) => n in o ? lg(o, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[n] = r, de = (o, n, r) => (ag(o, typeof n != "symbol" ? n + "" : n, r), r);
const Ks = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.s(), mf = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.t(), ug = Math.cos(70 * (Math.PI / 180)), gf = (o, n) => (o % n + n) % n;
let cg = class extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.E {
  constructor(n, r) {
    super(), de(this, "object"), de(this, "domElement"), de(this, "enabled", !0), de(this, "target", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c()), de(this, "minDistance", 0), de(this, "maxDistance", 1 / 0), de(this, "minZoom", 0), de(this, "maxZoom", 1 / 0), de(this, "minPolarAngle", 0), de(this, "maxPolarAngle", Math.PI), de(this, "minAzimuthAngle", -1 / 0), de(this, "maxAzimuthAngle", 1 / 0), de(this, "enableDamping", !1), de(this, "dampingFactor", 0.05), de(this, "enableZoom", !0), de(this, "zoomSpeed", 1), de(this, "enableRotate", !0), de(this, "rotateSpeed", 1), de(this, "enablePan", !0), de(this, "panSpeed", 1), de(this, "screenSpacePanning", !0), de(this, "keyPanSpeed", 7), de(this, "zoomToCursor", !1), de(this, "autoRotate", !1), de(this, "autoRotateSpeed", 2), de(this, "reverseOrbit", !1), de(this, "reverseHorizontalOrbit", !1), de(this, "reverseVerticalOrbit", !1), de(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }), de(this, "mouseButtons", {
      LEFT: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.ROTATE,
      MIDDLE: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.DOLLY,
      RIGHT: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.PAN
    }), de(this, "touches", { ONE: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.ROTATE, TWO: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.DOLLY_PAN }), de(this, "target0"), de(this, "position0"), de(this, "zoom0"), de(this, "_domElementKeyEvents", null), de(this, "getPolarAngle"), de(this, "getAzimuthalAngle"), de(this, "setPolarAngle"), de(this, "setAzimuthalAngle"), de(this, "getDistance"), de(this, "listenToKeyEvents"), de(this, "stopListenToKeyEvents"), de(this, "saveState"), de(this, "reset"), de(this, "update"), de(this, "connect"), de(this, "dispose"), this.object = n, this.domElement = r, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => p.phi, this.getAzimuthalAngle = () => p.theta, this.setPolarAngle = (b) => {
      let K = gf(b, 2 * Math.PI), ce = p.phi;
      ce < 0 && (ce += 2 * Math.PI), K < 0 && (K += 2 * Math.PI);
      let _e = Math.abs(K - ce);
      2 * Math.PI - _e < _e && (K < ce ? K += 2 * Math.PI : ce += 2 * Math.PI), h.phi = K - ce, i.update();
    }, this.setAzimuthalAngle = (b) => {
      let K = gf(b, 2 * Math.PI), ce = p.theta;
      ce < 0 && (ce += 2 * Math.PI), K < 0 && (K += 2 * Math.PI);
      let _e = Math.abs(K - ce);
      2 * Math.PI - _e < _e && (K < ce ? K += 2 * Math.PI : ce += 2 * Math.PI), h.theta = K - ce, i.update();
    }, this.getDistance = () => i.object.position.distanceTo(i.target), this.listenToKeyEvents = (b) => {
      b.addEventListener("keydown", ni), this._domElementKeyEvents = b;
    }, this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", ni), this._domElementKeyEvents = null;
    }, this.saveState = () => {
      i.target0.copy(i.target), i.position0.copy(i.object.position), i.zoom0 = i.object.zoom;
    }, this.reset = () => {
      i.target.copy(i.target0), i.object.position.copy(i.position0), i.object.zoom = i.zoom0, i.object.updateProjectionMatrix(), i.dispatchEvent(l), i.update(), f = d.NONE;
    }, this.update = (() => {
      const b = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), K = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 1, 0), ce = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Q().setFromUnitVectors(n.up, K), _e = ce.clone().invert(), Ge = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), Xt = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Q(), en = 2 * Math.PI;
      return function() {
        const ii = i.object.position;
        ce.setFromUnitVectors(n.up, K), _e.copy(ce).invert(), b.copy(ii).sub(i.target), b.applyQuaternion(ce), p.setFromVector3(b), i.autoRotate && f === d.NONE && Y(j()), i.enableDamping ? (p.theta += h.theta * i.dampingFactor, p.phi += h.phi * i.dampingFactor) : (p.theta += h.theta, p.phi += h.phi);
        let Rt = i.minAzimuthAngle, Kt = i.maxAzimuthAngle;
        isFinite(Rt) && isFinite(Kt) && (Rt < -Math.PI ? Rt += en : Rt > Math.PI && (Rt -= en), Kt < -Math.PI ? Kt += en : Kt > Math.PI && (Kt -= en), Rt <= Kt ? p.theta = Math.max(Rt, Math.min(Kt, p.theta)) : p.theta = p.theta > (Rt + Kt) / 2 ? Math.max(Rt, p.theta) : Math.min(Kt, p.theta)), p.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, p.phi)), p.makeSafe(), i.enableDamping === !0 ? i.target.addScaledVector(x, i.dampingFactor) : i.target.add(x), i.zoomToCursor && D || i.object.isOrthographicCamera ? p.radius = ge(p.radius) : p.radius = ge(p.radius * v), b.setFromSpherical(p), b.applyQuaternion(_e), ii.copy(i.target).add(b), i.object.matrixAutoUpdate || i.object.updateMatrix(), i.object.lookAt(i.target), i.enableDamping === !0 ? (h.theta *= 1 - i.dampingFactor, h.phi *= 1 - i.dampingFactor, x.multiplyScalar(1 - i.dampingFactor)) : (h.set(0, 0, 0), x.set(0, 0, 0));
        let Pn = !1;
        if (i.zoomToCursor && D) {
          let Cn = null;
          if (i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P && i.object.isPerspectiveCamera) {
            const Mn = b.length();
            Cn = ge(Mn * v);
            const pr = Mn - Cn;
            i.object.position.addScaledVector(R, pr), i.object.updateMatrixWorld();
          } else if (i.object.isOrthographicCamera) {
            const Mn = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(z.x, z.y, 0);
            Mn.unproject(i.object), i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / v)), i.object.updateProjectionMatrix(), Pn = !0;
            const pr = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(z.x, z.y, 0);
            pr.unproject(i.object), i.object.position.sub(pr).add(Mn), i.object.updateMatrixWorld(), Cn = b.length();
          } else
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), i.zoomToCursor = !1;
          Cn !== null && (i.screenSpacePanning ? i.target.set(0, 0, -1).transformDirection(i.object.matrix).multiplyScalar(Cn).add(i.object.position) : (Ks.origin.copy(i.object.position), Ks.direction.set(0, 0, -1).transformDirection(i.object.matrix), Math.abs(i.object.up.dot(Ks.direction)) < ug ? n.lookAt(i.target) : (mf.setFromNormalAndCoplanarPoint(i.object.up, i.target), Ks.intersectPlane(mf, i.target))));
        } else i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O && i.object.isOrthographicCamera && (Pn = v !== 1, Pn && (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / v)), i.object.updateProjectionMatrix()));
        return v = 1, D = !1, Pn || Ge.distanceToSquared(i.object.position) > g || 8 * (1 - Xt.dot(i.object.quaternion)) > g ? (i.dispatchEvent(l), Ge.copy(i.object.position), Xt.copy(i.object.quaternion), Pn = !1, !0) : !1;
      };
    })(), this.connect = (b) => {
      b === document && console.error(
        'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
      ), i.domElement = b, i.domElement.style.touchAction = "none", i.domElement.addEventListener("contextmenu", Ki), i.domElement.addEventListener("pointerdown", Wi), i.domElement.addEventListener("pointercancel", An), i.domElement.addEventListener("wheel", Xi);
    }, this.dispose = () => {
      var b, K, ce, _e, Ge, Xt;
      (b = i.domElement) == null || b.removeEventListener("contextmenu", Ki), (K = i.domElement) == null || K.removeEventListener("pointerdown", Wi), (ce = i.domElement) == null || ce.removeEventListener("pointercancel", An), (_e = i.domElement) == null || _e.removeEventListener("wheel", Xi), (Ge = i.domElement) == null || Ge.ownerDocument.removeEventListener("pointermove", ei), (Xt = i.domElement) == null || Xt.ownerDocument.removeEventListener("pointerup", ti), i._domElementKeyEvents !== null && i._domElementKeyEvents.removeEventListener("keydown", ni);
    };
    const i = this, l = { type: "change" }, u = { type: "start" }, a = { type: "end" }, d = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let f = d.NONE;
    const g = 1e-6, p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.r(), h = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.r();
    let v = 1;
    const x = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), _ = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), A = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), w = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), E = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), P = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), M = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), L = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), R = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), z = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d();
    let D = !1;
    const I = [], k = {};
    function j() {
      return 2 * Math.PI / 60 / 60 * i.autoRotateSpeed;
    }
    function G() {
      return Math.pow(0.95, i.zoomSpeed);
    }
    function Y(b) {
      i.reverseOrbit || i.reverseHorizontalOrbit ? h.theta += b : h.theta -= b;
    }
    function ee(b) {
      i.reverseOrbit || i.reverseVerticalOrbit ? h.phi += b : h.phi -= b;
    }
    const ae = (() => {
      const b = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
      return function(ce, _e) {
        b.setFromMatrixColumn(_e, 0), b.multiplyScalar(-ce), x.add(b);
      };
    })(), we = (() => {
      const b = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
      return function(ce, _e) {
        i.screenSpacePanning === !0 ? b.setFromMatrixColumn(_e, 1) : (b.setFromMatrixColumn(_e, 0), b.crossVectors(i.object.up, b)), b.multiplyScalar(ce), x.add(b);
      };
    })(), W = (() => {
      const b = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
      return function(ce, _e) {
        const Ge = i.domElement;
        if (Ge && i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P && i.object.isPerspectiveCamera) {
          const Xt = i.object.position;
          b.copy(Xt).sub(i.target);
          let en = b.length();
          en *= Math.tan(i.object.fov / 2 * Math.PI / 180), ae(2 * ce * en / Ge.clientHeight, i.object.matrix), we(2 * _e * en / Ge.clientHeight, i.object.matrix);
        } else Ge && i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O && i.object.isOrthographicCamera ? (ae(
          ce * (i.object.right - i.object.left) / i.object.zoom / Ge.clientWidth,
          i.object.matrix
        ), we(
          _e * (i.object.top - i.object.bottom) / i.object.zoom / Ge.clientHeight,
          i.object.matrix
        )) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), i.enablePan = !1);
      };
    })();
    function J(b) {
      i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P && i.object.isPerspectiveCamera || i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O && i.object.isOrthographicCamera ? v /= b : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
    }
    function Z(b) {
      i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P && i.object.isPerspectiveCamera || i.object instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O && i.object.isOrthographicCamera ? v *= b : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1);
    }
    function te(b) {
      if (!i.zoomToCursor || !i.domElement)
        return;
      D = !0;
      const K = i.domElement.getBoundingClientRect(), ce = b.clientX - K.left, _e = b.clientY - K.top, Ge = K.width, Xt = K.height;
      z.x = ce / Ge * 2 - 1, z.y = -(_e / Xt) * 2 + 1, R.set(z.x, z.y, 1).unproject(i.object).sub(i.object.position).normalize();
    }
    function ge(b) {
      return Math.max(i.minDistance, Math.min(i.maxDistance, b));
    }
    function xe(b) {
      _.set(b.clientX, b.clientY);
    }
    function Fe(b) {
      te(b), P.set(b.clientX, b.clientY);
    }
    function it(b) {
      S.set(b.clientX, b.clientY);
    }
    function vt(b) {
      A.set(b.clientX, b.clientY), T.subVectors(A, _).multiplyScalar(i.rotateSpeed);
      const K = i.domElement;
      K && (Y(2 * Math.PI * T.x / K.clientHeight), ee(2 * Math.PI * T.y / K.clientHeight)), _.copy(A), i.update();
    }
    function se(b) {
      M.set(b.clientX, b.clientY), L.subVectors(M, P), L.y > 0 ? J(G()) : L.y < 0 && Z(G()), P.copy(M), i.update();
    }
    function fe(b) {
      w.set(b.clientX, b.clientY), E.subVectors(w, S).multiplyScalar(i.panSpeed), W(E.x, E.y), S.copy(w), i.update();
    }
    function le(b) {
      te(b), b.deltaY < 0 ? Z(G()) : b.deltaY > 0 && J(G()), i.update();
    }
    function Me(b) {
      let K = !1;
      switch (b.code) {
        case i.keys.UP:
          W(0, i.keyPanSpeed), K = !0;
          break;
        case i.keys.BOTTOM:
          W(0, -i.keyPanSpeed), K = !0;
          break;
        case i.keys.LEFT:
          W(i.keyPanSpeed, 0), K = !0;
          break;
        case i.keys.RIGHT:
          W(-i.keyPanSpeed, 0), K = !0;
          break;
      }
      K && (b.preventDefault(), i.update());
    }
    function Pe() {
      if (I.length == 1)
        _.set(I[0].pageX, I[0].pageY);
      else {
        const b = 0.5 * (I[0].pageX + I[1].pageX), K = 0.5 * (I[0].pageY + I[1].pageY);
        _.set(b, K);
      }
    }
    function Ve() {
      if (I.length == 1)
        S.set(I[0].pageX, I[0].pageY);
      else {
        const b = 0.5 * (I[0].pageX + I[1].pageX), K = 0.5 * (I[0].pageY + I[1].pageY);
        S.set(b, K);
      }
    }
    function ue() {
      const b = I[0].pageX - I[1].pageX, K = I[0].pageY - I[1].pageY, ce = Math.sqrt(b * b + K * K);
      P.set(0, ce);
    }
    function Ie() {
      i.enableZoom && ue(), i.enablePan && Ve();
    }
    function st() {
      i.enableZoom && ue(), i.enableRotate && Pe();
    }
    function yt(b) {
      if (I.length == 1)
        A.set(b.pageX, b.pageY);
      else {
        const ce = ri(b), _e = 0.5 * (b.pageX + ce.x), Ge = 0.5 * (b.pageY + ce.y);
        A.set(_e, Ge);
      }
      T.subVectors(A, _).multiplyScalar(i.rotateSpeed);
      const K = i.domElement;
      K && (Y(2 * Math.PI * T.x / K.clientHeight), ee(2 * Math.PI * T.y / K.clientHeight)), _.copy(A);
    }
    function Vi(b) {
      if (I.length == 1)
        w.set(b.pageX, b.pageY);
      else {
        const K = ri(b), ce = 0.5 * (b.pageX + K.x), _e = 0.5 * (b.pageY + K.y);
        w.set(ce, _e);
      }
      E.subVectors(w, S).multiplyScalar(i.panSpeed), W(E.x, E.y), S.copy(w);
    }
    function Gi(b) {
      const K = ri(b), ce = b.pageX - K.x, _e = b.pageY - K.y, Ge = Math.sqrt(ce * ce + _e * _e);
      M.set(0, Ge), L.set(0, Math.pow(M.y / P.y, i.zoomSpeed)), J(L.y), P.copy(M);
    }
    function _o(b) {
      i.enableZoom && Gi(b), i.enablePan && Vi(b);
    }
    function Yn(b) {
      i.enableZoom && Gi(b), i.enableRotate && yt(b);
    }
    function Wi(b) {
      var K, ce;
      i.enabled !== !1 && (I.length === 0 && ((K = i.domElement) == null || K.ownerDocument.addEventListener("pointermove", ei), (ce = i.domElement) == null || ce.ownerDocument.addEventListener("pointerup", ti)), Co(b), b.pointerType === "touch" ? Ao(b) : Eo(b));
    }
    function ei(b) {
      i.enabled !== !1 && (b.pointerType === "touch" ? Po(b) : To(b));
    }
    function ti(b) {
      var K, ce, _e;
      Yi(b), I.length === 0 && ((K = i.domElement) == null || K.releasePointerCapture(b.pointerId), (ce = i.domElement) == null || ce.ownerDocument.removeEventListener("pointermove", ei), (_e = i.domElement) == null || _e.ownerDocument.removeEventListener("pointerup", ti)), i.dispatchEvent(a), f = d.NONE;
    }
    function An(b) {
      Yi(b);
    }
    function Eo(b) {
      let K;
      switch (b.button) {
        case 0:
          K = i.mouseButtons.LEFT;
          break;
        case 1:
          K = i.mouseButtons.MIDDLE;
          break;
        case 2:
          K = i.mouseButtons.RIGHT;
          break;
        default:
          K = -1;
      }
      switch (K) {
        case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.DOLLY:
          if (i.enableZoom === !1)
            return;
          Fe(b), f = d.DOLLY;
          break;
        case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.ROTATE:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (i.enablePan === !1)
              return;
            it(b), f = d.PAN;
          } else {
            if (i.enableRotate === !1)
              return;
            xe(b), f = d.ROTATE;
          }
          break;
        case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.p.PAN:
          if (b.ctrlKey || b.metaKey || b.shiftKey) {
            if (i.enableRotate === !1)
              return;
            xe(b), f = d.ROTATE;
          } else {
            if (i.enablePan === !1)
              return;
            it(b), f = d.PAN;
          }
          break;
        default:
          f = d.NONE;
      }
      f !== d.NONE && i.dispatchEvent(u);
    }
    function To(b) {
      if (i.enabled !== !1)
        switch (f) {
          case d.ROTATE:
            if (i.enableRotate === !1)
              return;
            vt(b);
            break;
          case d.DOLLY:
            if (i.enableZoom === !1)
              return;
            se(b);
            break;
          case d.PAN:
            if (i.enablePan === !1)
              return;
            fe(b);
            break;
        }
    }
    function Xi(b) {
      i.enabled === !1 || i.enableZoom === !1 || f !== d.NONE && f !== d.ROTATE || (b.preventDefault(), i.dispatchEvent(u), le(b), i.dispatchEvent(a));
    }
    function ni(b) {
      i.enabled === !1 || i.enablePan === !1 || Me(b);
    }
    function Ao(b) {
      switch (qi(b), I.length) {
        case 1:
          switch (i.touches.ONE) {
            case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.ROTATE:
              if (i.enableRotate === !1)
                return;
              Pe(), f = d.TOUCH_ROTATE;
              break;
            case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.PAN:
              if (i.enablePan === !1)
                return;
              Ve(), f = d.TOUCH_PAN;
              break;
            default:
              f = d.NONE;
          }
          break;
        case 2:
          switch (i.touches.TWO) {
            case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.DOLLY_PAN:
              if (i.enableZoom === !1 && i.enablePan === !1)
                return;
              Ie(), f = d.TOUCH_DOLLY_PAN;
              break;
            case _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.q.DOLLY_ROTATE:
              if (i.enableZoom === !1 && i.enableRotate === !1)
                return;
              st(), f = d.TOUCH_DOLLY_ROTATE;
              break;
            default:
              f = d.NONE;
          }
          break;
        default:
          f = d.NONE;
      }
      f !== d.NONE && i.dispatchEvent(u);
    }
    function Po(b) {
      switch (qi(b), f) {
        case d.TOUCH_ROTATE:
          if (i.enableRotate === !1)
            return;
          yt(b), i.update();
          break;
        case d.TOUCH_PAN:
          if (i.enablePan === !1)
            return;
          Vi(b), i.update();
          break;
        case d.TOUCH_DOLLY_PAN:
          if (i.enableZoom === !1 && i.enablePan === !1)
            return;
          _o(b), i.update();
          break;
        case d.TOUCH_DOLLY_ROTATE:
          if (i.enableZoom === !1 && i.enableRotate === !1)
            return;
          Yn(b), i.update();
          break;
        default:
          f = d.NONE;
      }
    }
    function Ki(b) {
      i.enabled !== !1 && b.preventDefault();
    }
    function Co(b) {
      I.push(b);
    }
    function Yi(b) {
      delete k[b.pointerId];
      for (let K = 0; K < I.length; K++)
        if (I[K].pointerId == b.pointerId) {
          I.splice(K, 1);
          return;
        }
    }
    function qi(b) {
      let K = k[b.pointerId];
      K === void 0 && (K = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), k[b.pointerId] = K), K.set(b.pageX, b.pageY);
    }
    function ri(b) {
      const K = b.pointerId === I[0].pointerId ? I[1] : I[0];
      return k[K.pointerId];
    }
    r !== void 0 && this.connect(r), this.update();
  }
};
class Ad extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.u {
  constructor(n) {
    super(n), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(r) {
      return new mg(r);
    }), this.register(function(r) {
      return new Eg(r);
    }), this.register(function(r) {
      return new Tg(r);
    }), this.register(function(r) {
      return new Ag(r);
    }), this.register(function(r) {
      return new vg(r);
    }), this.register(function(r) {
      return new yg(r);
    }), this.register(function(r) {
      return new xg(r);
    }), this.register(function(r) {
      return new Sg(r);
    }), this.register(function(r) {
      return new hg(r);
    }), this.register(function(r) {
      return new wg(r);
    }), this.register(function(r) {
      return new gg(r);
    }), this.register(function(r) {
      return new _g(r);
    }), this.register(function(r) {
      return new dg(r);
    }), this.register(function(r) {
      return new Pg(r);
    }), this.register(function(r) {
      return new Cg(r);
    });
  }
  load(n, r, i, l) {
    const u = this;
    let a;
    this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.extractUrlBase(n), this.manager.itemStart(n);
    const d = function(g) {
      l ? l(g) : console.error(g), u.manager.itemError(n), u.manager.itemEnd(n);
    }, f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.F(this.manager);
    f.setPath(this.path), f.setResponseType("arraybuffer"), f.setRequestHeader(this.requestHeader), f.setWithCredentials(this.withCredentials), f.load(
      n,
      function(g) {
        try {
          u.parse(
            g,
            a,
            function(p) {
              r(p), u.manager.itemEnd(n);
            },
            d
          );
        } catch (p) {
          d(p);
        }
      },
      i,
      d
    );
  }
  setDRACOLoader(n) {
    return this.dracoLoader = n, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(n) {
    return this.ktx2Loader = n, this;
  }
  setMeshoptDecoder(n) {
    return this.meshoptDecoder = n, this;
  }
  register(n) {
    return this.pluginCallbacks.indexOf(n) === -1 && this.pluginCallbacks.push(n), this;
  }
  unregister(n) {
    return this.pluginCallbacks.indexOf(n) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n), 1), this;
  }
  parse(n, r, i, l) {
    let u;
    const a = {}, d = {};
    if (typeof n == "string")
      u = JSON.parse(n);
    else if (n instanceof ArrayBuffer)
      if (_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.decodeText(new Uint8Array(n.slice(0, 4))) === Pd) {
        try {
          a[Se.KHR_BINARY_GLTF] = new Mg(n);
        } catch (p) {
          l && l(p);
          return;
        }
        u = JSON.parse(a[Se.KHR_BINARY_GLTF].content);
      } else
        u = JSON.parse(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.decodeText(new Uint8Array(n)));
    else
      u = n;
    if (u.asset === void 0 || u.asset.version[0] < 2) {
      l && l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const f = new Ug(u, {
      path: r || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    f.fileLoader.setRequestHeader(this.requestHeader);
    for (let g = 0; g < this.pluginCallbacks.length; g++) {
      const p = this.pluginCallbacks[g](f);
      d[p.name] = p, a[p.name] = !0;
    }
    if (u.extensionsUsed)
      for (let g = 0; g < u.extensionsUsed.length; ++g) {
        const p = u.extensionsUsed[g], h = u.extensionsRequired || [];
        switch (p) {
          case Se.KHR_MATERIALS_UNLIT:
            a[p] = new pg();
            break;
          case Se.KHR_DRACO_MESH_COMPRESSION:
            a[p] = new Lg(u, this.dracoLoader);
            break;
          case Se.KHR_TEXTURE_TRANSFORM:
            a[p] = new Rg();
            break;
          case Se.KHR_MESH_QUANTIZATION:
            a[p] = new Ng();
            break;
          default:
            h.indexOf(p) >= 0 && d[p] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + p + '".');
        }
      }
    f.setExtensions(a), f.setPlugins(d), f.parse(i, l);
  }
  parseAsync(n, r) {
    const i = this;
    return new Promise(function(l, u) {
      i.parse(n, r, l, u);
    });
  }
}
function fg() {
  let o = {};
  return {
    get: function(n) {
      return o[n];
    },
    add: function(n, r) {
      o[n] = r;
    },
    remove: function(n) {
      delete o[n];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const Se = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class dg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const n = this.parser, r = this.parser.json.nodes || [];
    for (let i = 0, l = r.length; i < l; i++) {
      const u = r[i];
      u.extensions && u.extensions[this.name] && u.extensions[this.name].light !== void 0 && n._addNodeRef(this.cache, u.extensions[this.name].light);
    }
  }
  _loadLight(n) {
    const r = this.parser, i = "light:" + n;
    let l = r.cache.get(i);
    if (l)
      return l;
    const u = r.json, f = ((u.extensions && u.extensions[this.name] || {}).lights || [])[n];
    let g;
    const p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(16777215);
    f.color !== void 0 && p.fromArray(f.color);
    const h = f.range !== void 0 ? f.range : 0;
    switch (f.type) {
      case "directional":
        g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.D(p), g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      case "point":
        g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.y(p), g.distance = h;
        break;
      case "spot":
        g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.x(p), g.distance = h, f.spot = f.spot || {}, f.spot.innerConeAngle = f.spot.innerConeAngle !== void 0 ? f.spot.innerConeAngle : 0, f.spot.outerConeAngle = f.spot.outerConeAngle !== void 0 ? f.spot.outerConeAngle : Math.PI / 4, g.angle = f.spot.outerConeAngle, g.penumbra = 1 - f.spot.innerConeAngle / f.spot.outerConeAngle, g.target.position.set(0, 0, -1), g.add(g.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + f.type);
    }
    return g.position.set(0, 0, 0), g.decay = 2, Hn(g, f), f.intensity !== void 0 && (g.intensity = f.intensity), g.name = r.createUniqueName(f.name || "light_" + n), l = Promise.resolve(g), r.cache.add(i, l), l;
  }
  getDependency(n, r) {
    if (n === "light")
      return this._loadLight(r);
  }
  createNodeAttachment(n) {
    const r = this, i = this.parser, u = i.json.nodes[n], d = (u.extensions && u.extensions[this.name] || {}).light;
    return d === void 0 ? null : this._loadLight(d).then(function(f) {
      return i._getNodeRef(r.cache, d, f);
    });
  }
}
class pg {
  constructor() {
    this.name = Se.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa;
  }
  extendParams(n, r, i) {
    const l = [];
    n.color = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(1, 1, 1), n.opacity = 1;
    const u = r.pbrMetallicRoughness;
    if (u) {
      if (Array.isArray(u.baseColorFactor)) {
        const a = u.baseColorFactor;
        n.color.fromArray(a), n.opacity = a[3];
      }
      u.baseColorTexture !== void 0 && l.push(i.assignTexture(n, "map", u.baseColorTexture, 3001));
    }
    return Promise.all(l);
  }
}
class hg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(n, r) {
    const l = this.parser.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = l.extensions[this.name].emissiveStrength;
    return u !== void 0 && (r.emissiveIntensity = u), Promise.resolve();
  }
}
class mg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (r.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && u.push(i.assignTexture(r, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (r.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && u.push(i.assignTexture(r, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (u.push(i.assignTexture(r, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const d = a.clearcoatNormalTexture.scale;
      r.clearcoatNormalScale = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(d, d);
    }
    return Promise.all(u);
  }
}
class gg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (r.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && u.push(i.assignTexture(r, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (r.iridescenceIOR = a.iridescenceIor), r.iridescenceThicknessRange === void 0 && (r.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (r.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (r.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && u.push(
      i.assignTexture(r, "iridescenceThicknessMap", a.iridescenceThicknessTexture)
    ), Promise.all(u);
  }
}
class vg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [];
    r.sheenColor = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(0, 0, 0), r.sheenRoughness = 0, r.sheen = 1;
    const a = l.extensions[this.name];
    return a.sheenColorFactor !== void 0 && r.sheenColor.fromArray(a.sheenColorFactor), a.sheenRoughnessFactor !== void 0 && (r.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && u.push(i.assignTexture(r, "sheenColorMap", a.sheenColorTexture, 3001)), a.sheenRoughnessTexture !== void 0 && u.push(i.assignTexture(r, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(u);
  }
}
class yg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    return a.transmissionFactor !== void 0 && (r.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && u.push(i.assignTexture(r, "transmissionMap", a.transmissionTexture)), Promise.all(u);
  }
}
class xg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    r.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && u.push(i.assignTexture(r, "thicknessMap", a.thicknessTexture)), r.attenuationDistance = a.attenuationDistance || 1 / 0;
    const d = a.attenuationColor || [1, 1, 1];
    return r.attenuationColor = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(d[0], d[1], d[2]), Promise.all(u);
  }
}
class Sg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_IOR;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const l = this.parser.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = l.extensions[this.name];
    return r.ior = u.ior !== void 0 ? u.ior : 1.5, Promise.resolve();
  }
}
class wg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    r.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && u.push(i.assignTexture(r, "specularIntensityMap", a.specularTexture));
    const d = a.specularColorFactor || [1, 1, 1];
    return r.specularColor = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(d[0], d[1], d[2]), a.specularColorTexture !== void 0 && u.push(
      i.assignTexture(r, "specularColorMap", a.specularColorTexture, 3001)
      // sRGBEncoding
    ), Promise.all(u);
  }
}
class _g {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(n) {
    const i = this.parser.json.materials[n];
    return !i.extensions || !i.extensions[this.name] ? null : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w;
  }
  extendMaterialParams(n, r) {
    const i = this.parser, l = i.json.materials[n];
    if (!l.extensions || !l.extensions[this.name])
      return Promise.resolve();
    const u = [], a = l.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (r.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (r.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && u.push(i.assignTexture(r, "anisotropyMap", a.anisotropyTexture)), Promise.all(u);
  }
}
class Eg {
  constructor(n) {
    this.parser = n, this.name = Se.KHR_TEXTURE_BASISU;
  }
  loadTexture(n) {
    const r = this.parser, i = r.json, l = i.textures[n];
    if (!l.extensions || !l.extensions[this.name])
      return null;
    const u = l.extensions[this.name], a = r.options.ktx2Loader;
    if (!a) {
      if (i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return r.loadTextureImage(n, u.source, a);
  }
}
class Tg {
  constructor(n) {
    this.parser = n, this.name = Se.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(n) {
    const r = this.name, i = this.parser, l = i.json, u = l.textures[n];
    if (!u.extensions || !u.extensions[r])
      return null;
    const a = u.extensions[r], d = l.images[a.source];
    let f = i.textureLoader;
    if (d.uri) {
      const g = i.options.manager.getHandler(d.uri);
      g !== null && (f = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return i.loadTextureImage(n, a.source, f);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return i.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const r = new Image();
      r.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", r.onload = r.onerror = function() {
        n(r.height === 1);
      };
    })), this.isSupported;
  }
}
class Ag {
  constructor(n) {
    this.parser = n, this.name = Se.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(n) {
    const r = this.name, i = this.parser, l = i.json, u = l.textures[n];
    if (!u.extensions || !u.extensions[r])
      return null;
    const a = u.extensions[r], d = l.images[a.source];
    let f = i.textureLoader;
    if (d.uri) {
      const g = i.options.manager.getHandler(d.uri);
      g !== null && (f = g);
    }
    return this.detectSupport().then(function(g) {
      if (g)
        return i.loadTextureImage(n, a.source, f);
      if (l.extensionsRequired && l.extensionsRequired.indexOf(r) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return i.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const r = new Image();
      r.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", r.onload = r.onerror = function() {
        n(r.height === 1);
      };
    })), this.isSupported;
  }
}
class Pg {
  constructor(n) {
    this.name = Se.EXT_MESHOPT_COMPRESSION, this.parser = n;
  }
  loadBufferView(n) {
    const r = this.parser.json, i = r.bufferViews[n];
    if (i.extensions && i.extensions[this.name]) {
      const l = i.extensions[this.name], u = this.parser.getDependency("buffer", l.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return u.then(function(d) {
        const f = l.byteOffset || 0, g = l.byteLength || 0, p = l.count, h = l.byteStride, v = new Uint8Array(d, f, g);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(p, h, v, l.mode, l.filter).then(function(x) {
          return x.buffer;
        }) : a.ready.then(function() {
          const x = new ArrayBuffer(p * h);
          return a.decodeGltfBuffer(
            new Uint8Array(x),
            p,
            h,
            v,
            l.mode,
            l.filter
          ), x;
        });
      });
    } else
      return null;
  }
}
class Cg {
  constructor(n) {
    this.name = Se.EXT_MESH_GPU_INSTANCING, this.parser = n;
  }
  createNodeMesh(n) {
    const r = this.parser.json, i = r.nodes[n];
    if (!i.extensions || !i.extensions[this.name] || i.mesh === void 0)
      return null;
    const l = r.meshes[i.mesh];
    for (const g of l.primitives)
      if (g.mode !== jt.TRIANGLES && g.mode !== jt.TRIANGLE_STRIP && g.mode !== jt.TRIANGLE_FAN && g.mode !== void 0)
        return null;
    const a = i.extensions[this.name].attributes, d = [], f = {};
    for (const g in a)
      d.push(
        this.parser.getDependency("accessor", a[g]).then((p) => (f[g] = p, f[g]))
      );
    return d.length < 1 ? null : (d.push(this.parser.createNodeMesh(n)), Promise.all(d).then((g) => {
      const p = g.pop(), h = p.isGroup ? p.children : [p], v = g[0].count, x = [];
      for (const _ of h) {
        const A = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Q(), w = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(1, 1, 1), E = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.I(_.geometry, _.material, v);
        for (let P = 0; P < v; P++)
          f.TRANSLATION && T.fromBufferAttribute(f.TRANSLATION, P), f.ROTATION && S.fromBufferAttribute(f.ROTATION, P), f.SCALE && w.fromBufferAttribute(f.SCALE, P), E.setMatrixAt(P, A.compose(T, S, w));
        for (const P in f)
          P !== "TRANSLATION" && P !== "ROTATION" && P !== "SCALE" && _.geometry.setAttribute(P, f[P]);
        _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.z.prototype.copy.call(E, _), this.parser.assignFinalMaterial(E), x.push(E);
      }
      return p.isGroup ? (p.clear(), p.add(...x), p) : x[0];
    }));
  }
}
const Pd = "glTF", Mi = 12, vf = { JSON: 1313821514, BIN: 5130562 };
class Mg {
  constructor(n) {
    this.name = Se.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const r = new DataView(n, 0, Mi);
    if (this.header = {
      magic: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.decodeText(new Uint8Array(n.slice(0, 4))),
      version: r.getUint32(4, !0),
      length: r.getUint32(8, !0)
    }, this.header.magic !== Pd)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Mi, l = new DataView(n, Mi);
    let u = 0;
    for (; u < i; ) {
      const a = l.getUint32(u, !0);
      u += 4;
      const d = l.getUint32(u, !0);
      if (u += 4, d === vf.JSON) {
        const f = new Uint8Array(n, Mi + u, a);
        this.content = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.decodeText(f);
      } else if (d === vf.BIN) {
        const f = Mi + u;
        this.body = n.slice(f, f + a);
      }
      u += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Lg {
  constructor(n, r) {
    if (!r)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Se.KHR_DRACO_MESH_COMPRESSION, this.json = n, this.dracoLoader = r, this.dracoLoader.preload();
  }
  decodePrimitive(n, r) {
    const i = this.json, l = this.dracoLoader, u = n.extensions[this.name].bufferView, a = n.extensions[this.name].attributes, d = {}, f = {}, g = {};
    for (const p in a) {
      const h = Pa[p] || p.toLowerCase();
      d[h] = a[p];
    }
    for (const p in n.attributes) {
      const h = Pa[p] || p.toLowerCase();
      if (a[p] !== void 0) {
        const v = i.accessors[n.attributes[p]], x = qr[v.componentType];
        g[h] = x.name, f[h] = v.normalized === !0;
      }
    }
    return r.getDependency("bufferView", u).then(function(p) {
      return new Promise(function(h) {
        l.decodeDracoFile(
          p,
          function(v) {
            for (const x in v.attributes) {
              const _ = v.attributes[x], A = f[x];
              A !== void 0 && (_.normalized = A);
            }
            h(v);
          },
          d,
          g
        );
      });
    });
  }
}
class Rg {
  constructor() {
    this.name = Se.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(n, r) {
    return (r.texCoord === void 0 || r.texCoord === n.channel) && r.offset === void 0 && r.rotation === void 0 && r.scale === void 0 || (n = n.clone(), r.texCoord !== void 0 && (n.channel = r.texCoord), r.offset !== void 0 && n.offset.fromArray(r.offset), r.rotation !== void 0 && (n.rotation = r.rotation), r.scale !== void 0 && n.repeat.fromArray(r.scale), n.needsUpdate = !0), n;
  }
}
class Ng {
  constructor() {
    this.name = Se.KHR_MESH_QUANTIZATION;
  }
}
class Cd extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.at {
  constructor(n, r, i, l) {
    super(n, r, i, l);
  }
  copySampleValue_(n) {
    const r = this.resultBuffer, i = this.sampleValues, l = this.valueSize, u = n * l * 3 + l;
    for (let a = 0; a !== l; a++)
      r[a] = i[u + a];
    return r;
  }
  interpolate_(n, r, i, l) {
    const u = this.resultBuffer, a = this.sampleValues, d = this.valueSize, f = d * 2, g = d * 3, p = l - r, h = (i - r) / p, v = h * h, x = v * h, _ = n * g, A = _ - g, T = -2 * x + 3 * v, S = x - v, w = 1 - T, E = S - v + h;
    for (let P = 0; P !== d; P++) {
      const M = a[A + P + d], L = a[A + P + f] * p, R = a[_ + P + d], z = a[_ + P] * p;
      u[P] = w * M + E * L + T * R + S * z;
    }
    return u;
  }
}
const Ig = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Q();
class zg extends Cd {
  interpolate_(n, r, i, l) {
    const u = super.interpolate_(n, r, i, l);
    return Ig.fromArray(u).normalize().toArray(u), u;
  }
}
const jt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, qr = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, yf = {
  9728: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a2,
  9729: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a1,
  9984: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a0,
  9985: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.$,
  9986: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Z,
  9987: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Y
}, xf = {
  33071: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a5,
  33648: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a4,
  10497: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a3
}, $l = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Pa = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...og >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, jn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Og = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.al,
  STEP: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ak
}, ea = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function bg(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a8({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as
  })), o.DefaultMaterial;
}
function sr(o, n, r) {
  for (const i in r.extensions)
    o[i] === void 0 && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[i] = r.extensions[i]);
}
function Hn(o, n) {
  n.extras !== void 0 && (typeof n.extras == "object" ? Object.assign(o.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras));
}
function Dg(o, n, r) {
  let i = !1, l = !1, u = !1;
  for (let g = 0, p = n.length; g < p; g++) {
    const h = n[g];
    if (h.POSITION !== void 0 && (i = !0), h.NORMAL !== void 0 && (l = !0), h.COLOR_0 !== void 0 && (u = !0), i && l && u)
      break;
  }
  if (!i && !l && !u)
    return Promise.resolve(o);
  const a = [], d = [], f = [];
  for (let g = 0, p = n.length; g < p; g++) {
    const h = n[g];
    if (i) {
      const v = h.POSITION !== void 0 ? r.getDependency("accessor", h.POSITION) : o.attributes.position;
      a.push(v);
    }
    if (l) {
      const v = h.NORMAL !== void 0 ? r.getDependency("accessor", h.NORMAL) : o.attributes.normal;
      d.push(v);
    }
    if (u) {
      const v = h.COLOR_0 !== void 0 ? r.getDependency("accessor", h.COLOR_0) : o.attributes.color;
      f.push(v);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(d),
    Promise.all(f)
  ]).then(function(g) {
    const p = g[0], h = g[1], v = g[2];
    return i && (o.morphAttributes.position = p), l && (o.morphAttributes.normal = h), u && (o.morphAttributes.color = v), o.morphTargetsRelative = !0, o;
  });
}
function kg(o, n) {
  if (o.updateMorphTargets(), n.weights !== void 0)
    for (let r = 0, i = n.weights.length; r < i; r++)
      o.morphTargetInfluences[r] = n.weights[r];
  if (n.extras && Array.isArray(n.extras.targetNames)) {
    const r = n.extras.targetNames;
    if (o.morphTargetInfluences.length === r.length) {
      o.morphTargetDictionary = {};
      for (let i = 0, l = r.length; i < l; i++)
        o.morphTargetDictionary[r[i]] = i;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Fg(o) {
  let n;
  const r = o.extensions && o.extensions[Se.KHR_DRACO_MESH_COMPRESSION];
  if (r ? n = "draco:" + r.bufferView + ":" + r.indices + ":" + ta(r.attributes) : n = o.indices + ":" + ta(o.attributes) + ":" + o.mode, o.targets !== void 0)
    for (let i = 0, l = o.targets.length; i < l; i++)
      n += ":" + ta(o.targets[i]);
  return n;
}
function ta(o) {
  let n = "";
  const r = Object.keys(o).sort();
  for (let i = 0, l = r.length; i < l; i++)
    n += r[i] + ":" + o[r[i]] + ";";
  return n;
}
function Ca(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Bg(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const jg = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k();
class Ug {
  constructor(n = {}, r = {}) {
    this.json = n, this.extensions = {}, this.plugins = {}, this.options = r, this.cache = new fg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let i = !1, l = !1, u = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, l = navigator.userAgent.indexOf("Firefox") > -1, u = l ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || i || l && u < 98 ? this.textureLoader = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.H(this.options.manager) : this.textureLoader = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.J(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.F(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(n) {
    this.extensions = n;
  }
  setPlugins(n) {
    this.plugins = n;
  }
  parse(n, r) {
    const i = this, l = this.json, u = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(
      this._invokeAll(function(a) {
        return a.beforeRoot && a.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        i.getDependencies("scene"),
        i.getDependencies("animation"),
        i.getDependencies("camera")
      ]);
    }).then(function(a) {
      const d = {
        scene: a[0][l.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: l.asset,
        parser: i,
        userData: {}
      };
      sr(u, d, l), Hn(d, l), Promise.all(
        i._invokeAll(function(f) {
          return f.afterRoot && f.afterRoot(d);
        })
      ).then(function() {
        n(d);
      });
    }).catch(r);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const n = this.json.nodes || [], r = this.json.skins || [], i = this.json.meshes || [];
    for (let l = 0, u = r.length; l < u; l++) {
      const a = r[l].joints;
      for (let d = 0, f = a.length; d < f; d++)
        n[a[d]].isBone = !0;
    }
    for (let l = 0, u = n.length; l < u; l++) {
      const a = n[l];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (i[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(n, r) {
    r !== void 0 && (n.refs[r] === void 0 && (n.refs[r] = n.uses[r] = 0), n.refs[r]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(n, r, i) {
    if (n.refs[r] <= 1)
      return i;
    const l = i.clone(), u = (a, d) => {
      const f = this.associations.get(a);
      f != null && this.associations.set(d, f);
      for (const [g, p] of a.children.entries())
        u(p, d.children[g]);
    };
    return u(i, l), l.name += "_instance_" + n.uses[r]++, l;
  }
  _invokeOne(n) {
    const r = Object.values(this.plugins);
    r.push(this);
    for (let i = 0; i < r.length; i++) {
      const l = n(r[i]);
      if (l)
        return l;
    }
    return null;
  }
  _invokeAll(n) {
    const r = Object.values(this.plugins);
    r.unshift(this);
    const i = [];
    for (let l = 0; l < r.length; l++) {
      const u = n(r[l]);
      u && i.push(u);
    }
    return i;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(n, r) {
    const i = n + ":" + r;
    let l = this.cache.get(i);
    if (!l) {
      switch (n) {
        case "scene":
          l = this.loadScene(r);
          break;
        case "node":
          l = this._invokeOne(function(u) {
            return u.loadNode && u.loadNode(r);
          });
          break;
        case "mesh":
          l = this._invokeOne(function(u) {
            return u.loadMesh && u.loadMesh(r);
          });
          break;
        case "accessor":
          l = this.loadAccessor(r);
          break;
        case "bufferView":
          l = this._invokeOne(function(u) {
            return u.loadBufferView && u.loadBufferView(r);
          });
          break;
        case "buffer":
          l = this.loadBuffer(r);
          break;
        case "material":
          l = this._invokeOne(function(u) {
            return u.loadMaterial && u.loadMaterial(r);
          });
          break;
        case "texture":
          l = this._invokeOne(function(u) {
            return u.loadTexture && u.loadTexture(r);
          });
          break;
        case "skin":
          l = this.loadSkin(r);
          break;
        case "animation":
          l = this._invokeOne(function(u) {
            return u.loadAnimation && u.loadAnimation(r);
          });
          break;
        case "camera":
          l = this.loadCamera(r);
          break;
        default:
          if (l = this._invokeOne(function(u) {
            return u != this && u.getDependency && u.getDependency(n, r);
          }), !l)
            throw new Error("Unknown type: " + n);
          break;
      }
      this.cache.add(i, l);
    }
    return l;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(n) {
    let r = this.cache.get(n);
    if (!r) {
      const i = this, l = this.json[n + (n === "mesh" ? "es" : "s")] || [];
      r = Promise.all(
        l.map(function(u, a) {
          return i.getDependency(n, a);
        })
      ), this.cache.add(n, r);
    }
    return r;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(n) {
    const r = this.json.buffers[n], i = this.fileLoader;
    if (r.type && r.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + r.type + " buffer type is not supported.");
    if (r.uri === void 0 && n === 0)
      return Promise.resolve(this.extensions[Se.KHR_BINARY_GLTF].body);
    const l = this.options;
    return new Promise(function(u, a) {
      i.load(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.resolveURL(r.uri, l.path), u, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + r.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(n) {
    const r = this.json.bufferViews[n];
    return this.getDependency("buffer", r.buffer).then(function(i) {
      const l = r.byteLength || 0, u = r.byteOffset || 0;
      return i.slice(u, u + l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(n) {
    const r = this, i = this.json, l = this.json.accessors[n];
    if (l.bufferView === void 0 && l.sparse === void 0) {
      const a = $l[l.type], d = qr[l.componentType], f = l.normalized === !0, g = new d(l.count * a);
      return Promise.resolve(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.K(g, a, f));
    }
    const u = [];
    return l.bufferView !== void 0 ? u.push(this.getDependency("bufferView", l.bufferView)) : u.push(null), l.sparse !== void 0 && (u.push(this.getDependency("bufferView", l.sparse.indices.bufferView)), u.push(this.getDependency("bufferView", l.sparse.values.bufferView))), Promise.all(u).then(function(a) {
      const d = a[0], f = $l[l.type], g = qr[l.componentType], p = g.BYTES_PER_ELEMENT, h = p * f, v = l.byteOffset || 0, x = l.bufferView !== void 0 ? i.bufferViews[l.bufferView].byteStride : void 0, _ = l.normalized === !0;
      let A, T;
      if (x && x !== h) {
        const S = Math.floor(v / x), w = "InterleavedBuffer:" + l.bufferView + ":" + l.componentType + ":" + S + ":" + l.count;
        let E = r.cache.get(w);
        E || (A = new g(d, S * x, l.count * x / p), E = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.X(A, x / p), r.cache.add(w, E)), T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(
          E,
          f,
          v % x / p,
          _
        );
      } else
        d === null ? A = new g(l.count * f) : A = new g(d, v, l.count * f), T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.K(A, f, _);
      if (l.sparse !== void 0) {
        const S = $l.SCALAR, w = qr[l.sparse.indices.componentType], E = l.sparse.indices.byteOffset || 0, P = l.sparse.values.byteOffset || 0, M = new w(
          a[1],
          E,
          l.sparse.count * S
        ), L = new g(a[2], P, l.sparse.count * f);
        d !== null && (T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.K(
          T.array.slice(),
          T.itemSize,
          T.normalized
        ));
        for (let R = 0, z = M.length; R < z; R++) {
          const D = M[R];
          if (T.setX(D, L[R * f]), f >= 2 && T.setY(D, L[R * f + 1]), f >= 3 && T.setZ(D, L[R * f + 2]), f >= 4 && T.setW(D, L[R * f + 3]), f >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return T;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(n) {
    const r = this.json, i = this.options, u = r.textures[n].source, a = r.images[u];
    let d = this.textureLoader;
    if (a.uri) {
      const f = i.manager.getHandler(a.uri);
      f !== null && (d = f);
    }
    return this.loadTextureImage(n, u, d);
  }
  loadTextureImage(n, r, i) {
    const l = this, u = this.json, a = u.textures[n], d = u.images[r], f = (d.uri || d.bufferView) + ":" + a.sampler;
    if (this.textureCache[f])
      return this.textureCache[f];
    const g = this.loadImageSource(r, i).then(function(p) {
      p.flipY = !1, p.name = a.name || d.name || "", p.name === "" && typeof d.uri == "string" && d.uri.startsWith("data:image/") === !1 && (p.name = d.uri);
      const v = (u.samplers || {})[a.sampler] || {};
      return p.magFilter = yf[v.magFilter] || _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a1, p.minFilter = yf[v.minFilter] || _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.Y, p.wrapS = xf[v.wrapS] || _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a3, p.wrapT = xf[v.wrapT] || _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a3, l.associations.set(p, { textures: n }), p;
    }).catch(function() {
      return null;
    });
    return this.textureCache[f] = g, g;
  }
  loadImageSource(n, r) {
    const i = this, l = this.json, u = this.options;
    if (this.sourceCache[n] !== void 0)
      return this.sourceCache[n].then((h) => h.clone());
    const a = l.images[n], d = self.URL || self.webkitURL;
    let f = a.uri || "", g = !1;
    if (a.bufferView !== void 0)
      f = i.getDependency("bufferView", a.bufferView).then(function(h) {
        g = !0;
        const v = new Blob([h], { type: a.mimeType });
        return f = d.createObjectURL(v), f;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + n + " is missing URI and bufferView");
    const p = Promise.resolve(f).then(function(h) {
      return new Promise(function(v, x) {
        let _ = v;
        r.isImageBitmapLoader === !0 && (_ = function(A) {
          const T = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.T(A);
          T.needsUpdate = !0, v(T);
        }), r.load(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.v.resolveURL(h, u.path), _, void 0, x);
      });
    }).then(function(h) {
      return g === !0 && d.revokeObjectURL(f), h.userData.mimeType = a.mimeType || Bg(a.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", f), h;
    });
    return this.sourceCache[n] = p, p;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(n, r, i, l) {
    const u = this;
    return this.getDependency("texture", i.index).then(function(a) {
      if (!a)
        return null;
      if (i.texCoord !== void 0 && i.texCoord > 0 && (a = a.clone(), a.channel = i.texCoord), u.extensions[Se.KHR_TEXTURE_TRANSFORM]) {
        const d = i.extensions !== void 0 ? i.extensions[Se.KHR_TEXTURE_TRANSFORM] : void 0;
        if (d) {
          const f = u.associations.get(a);
          a = u.extensions[Se.KHR_TEXTURE_TRANSFORM].extendTexture(a, d), u.associations.set(a, f);
        }
      }
      return l !== void 0 && ("colorSpace" in a ? a.colorSpace = l === 3001 ? "srgb" : "srgb-linear" : a.encoding = l), n[r] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(n) {
    const r = n.geometry;
    let i = n.material;
    const l = r.attributes.tangent === void 0, u = r.attributes.color !== void 0, a = r.attributes.normal === void 0;
    if (n.isPoints) {
      const d = "PointsMaterial:" + i.uuid;
      let f = this.cache.get(d);
      f || (f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a6(), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.M.prototype.copy.call(f, i), f.color.copy(i.color), f.map = i.map, f.sizeAttenuation = !1, this.cache.add(d, f)), i = f;
    } else if (n.isLine) {
      const d = "LineBasicMaterial:" + i.uuid;
      let f = this.cache.get(d);
      f || (f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a7(), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.M.prototype.copy.call(f, i), f.color.copy(i.color), f.map = i.map, this.cache.add(d, f)), i = f;
    }
    if (l || u || a) {
      let d = "ClonedMaterial:" + i.uuid + ":";
      l && (d += "derivative-tangents:"), u && (d += "vertex-colors:"), a && (d += "flat-shading:");
      let f = this.cache.get(d);
      f || (f = i.clone(), u && (f.vertexColors = !0), a && (f.flatShading = !0), l && (f.normalScale && (f.normalScale.y *= -1), f.clearcoatNormalScale && (f.clearcoatNormalScale.y *= -1)), this.cache.add(d, f), this.associations.set(f, this.associations.get(i))), i = f;
    }
    n.material = i;
  }
  getMaterialType() {
    return _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a8;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(n) {
    const r = this, i = this.json, l = this.extensions, u = i.materials[n];
    let a;
    const d = {}, f = u.extensions || {}, g = [];
    if (f[Se.KHR_MATERIALS_UNLIT]) {
      const h = l[Se.KHR_MATERIALS_UNLIT];
      a = h.getMaterialType(), g.push(h.extendParams(d, u, r));
    } else {
      const h = u.pbrMetallicRoughness || {};
      if (d.color = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i(1, 1, 1), d.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const v = h.baseColorFactor;
        d.color.fromArray(v), d.opacity = v[3];
      }
      h.baseColorTexture !== void 0 && g.push(r.assignTexture(d, "map", h.baseColorTexture, 3001)), d.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, d.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (g.push(r.assignTexture(d, "metalnessMap", h.metallicRoughnessTexture)), g.push(r.assignTexture(d, "roughnessMap", h.metallicRoughnessTexture))), a = this._invokeOne(function(v) {
        return v.getMaterialType && v.getMaterialType(n);
      }), g.push(
        Promise.all(
          this._invokeAll(function(v) {
            return v.extendMaterialParams && v.extendMaterialParams(n, d);
          })
        )
      );
    }
    u.doubleSided === !0 && (d.side = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a9);
    const p = u.alphaMode || ea.OPAQUE;
    if (p === ea.BLEND ? (d.transparent = !0, d.depthWrite = !1) : (d.transparent = !1, p === ea.MASK && (d.alphaTest = u.alphaCutoff !== void 0 ? u.alphaCutoff : 0.5)), u.normalTexture !== void 0 && a !== _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa && (g.push(r.assignTexture(d, "normalMap", u.normalTexture)), d.normalScale = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(1, 1), u.normalTexture.scale !== void 0)) {
      const h = u.normalTexture.scale;
      d.normalScale.set(h, h);
    }
    return u.occlusionTexture !== void 0 && a !== _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa && (g.push(r.assignTexture(d, "aoMap", u.occlusionTexture)), u.occlusionTexture.strength !== void 0 && (d.aoMapIntensity = u.occlusionTexture.strength)), u.emissiveFactor !== void 0 && a !== _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa && (d.emissive = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i().fromArray(u.emissiveFactor)), u.emissiveTexture !== void 0 && a !== _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa && g.push(r.assignTexture(d, "emissiveMap", u.emissiveTexture, 3001)), Promise.all(g).then(function() {
      const h = new a(d);
      return u.name && (h.name = u.name), Hn(h, u), r.associations.set(h, { materials: n }), u.extensions && sr(l, h, u), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(n) {
    const r = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ab.sanitizeNodeName(n || "");
    return r in this.nodeNamesUsed ? r + "_" + ++this.nodeNamesUsed[r] : (this.nodeNamesUsed[r] = 0, r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(n) {
    const r = this, i = this.extensions, l = this.primitiveCache;
    function u(d) {
      return i[Se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d, r).then(function(f) {
        return Sf(f, d, r);
      });
    }
    const a = [];
    for (let d = 0, f = n.length; d < f; d++) {
      const g = n[d], p = Fg(g), h = l[p];
      if (h)
        a.push(h.promise);
      else {
        let v;
        g.extensions && g.extensions[Se.KHR_DRACO_MESH_COMPRESSION] ? v = u(g) : v = Sf(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.f(), g, r), l[p] = { primitive: g, promise: v }, a.push(v);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(n) {
    const r = this, i = this.json, l = this.extensions, u = i.meshes[n], a = u.primitives, d = [];
    for (let f = 0, g = a.length; f < g; f++) {
      const p = a[f].material === void 0 ? bg(this.cache) : this.getDependency("material", a[f].material);
      d.push(p);
    }
    return d.push(r.loadGeometries(a)), Promise.all(d).then(function(f) {
      const g = f.slice(0, f.length - 1), p = f[f.length - 1], h = [];
      for (let x = 0, _ = p.length; x < _; x++) {
        const A = p[x], T = a[x];
        let S;
        const w = g[x];
        if (T.mode === jt.TRIANGLES || T.mode === jt.TRIANGLE_STRIP || T.mode === jt.TRIANGLE_FAN || T.mode === void 0)
          S = u.isSkinnedMesh === !0 ? new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ac(A, w) : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad(A, w), S.isSkinnedMesh === !0 && S.normalizeSkinWeights(), T.mode === jt.TRIANGLE_STRIP ? S.geometry = hf(S.geometry, _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.n) : T.mode === jt.TRIANGLE_FAN && (S.geometry = hf(S.geometry, _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.m));
        else if (T.mode === jt.LINES)
          S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ae(A, w);
        else if (T.mode === jt.LINE_STRIP)
          S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.af(A, w);
        else if (T.mode === jt.LINE_LOOP)
          S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ag(A, w);
        else if (T.mode === jt.POINTS)
          S = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ah(A, w);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + T.mode);
        Object.keys(S.geometry.morphAttributes).length > 0 && kg(S, u), S.name = r.createUniqueName(u.name || "mesh_" + n), Hn(S, u), T.extensions && sr(l, S, T), r.assignFinalMaterial(S), h.push(S);
      }
      for (let x = 0, _ = h.length; x < _; x++)
        r.associations.set(h[x], {
          meshes: n,
          primitives: x
        });
      if (h.length === 1)
        return u.extensions && sr(l, h[0], u), h[0];
      const v = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G();
      u.extensions && sr(l, v, u), r.associations.set(v, { meshes: n });
      for (let x = 0, _ = h.length; x < _; x++)
        v.add(h[x]);
      return v;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(n) {
    let r;
    const i = this.json.cameras[n], l = i[i.type];
    if (!l) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return i.type === "perspective" ? r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.P(
      _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ai.radToDeg(l.yfov),
      l.aspectRatio || 1,
      l.znear || 1,
      l.zfar || 2e6
    ) : i.type === "orthographic" && (r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.O(-l.xmag, l.xmag, l.ymag, -l.ymag, l.znear, l.zfar)), i.name && (r.name = this.createUniqueName(i.name)), Hn(r, i), Promise.resolve(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(n) {
    const r = this.json.skins[n], i = [];
    for (let l = 0, u = r.joints.length; l < u; l++)
      i.push(this._loadNodeShallow(r.joints[l]));
    return r.inverseBindMatrices !== void 0 ? i.push(this.getDependency("accessor", r.inverseBindMatrices)) : i.push(null), Promise.all(i).then(function(l) {
      const u = l.pop(), a = l, d = [], f = [];
      for (let g = 0, p = a.length; g < p; g++) {
        const h = a[g];
        if (h) {
          d.push(h);
          const v = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k();
          u !== null && v.fromArray(u.array, g * 16), f.push(v);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[g]);
      }
      return new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aj(d, f);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(n) {
    const i = this.json.animations[n], l = i.name ? i.name : "animation_" + n, u = [], a = [], d = [], f = [], g = [];
    for (let p = 0, h = i.channels.length; p < h; p++) {
      const v = i.channels[p], x = i.samplers[v.sampler], _ = v.target, A = _.node, T = i.parameters !== void 0 ? i.parameters[x.input] : x.input, S = i.parameters !== void 0 ? i.parameters[x.output] : x.output;
      _.node !== void 0 && (u.push(this.getDependency("node", A)), a.push(this.getDependency("accessor", T)), d.push(this.getDependency("accessor", S)), f.push(x), g.push(_));
    }
    return Promise.all([
      Promise.all(u),
      Promise.all(a),
      Promise.all(d),
      Promise.all(f),
      Promise.all(g)
    ]).then(function(p) {
      const h = p[0], v = p[1], x = p[2], _ = p[3], A = p[4], T = [];
      for (let S = 0, w = h.length; S < w; S++) {
        const E = h[S], P = v[S], M = x[S], L = _[S], R = A[S];
        if (E === void 0)
          continue;
        E.updateMatrix();
        let z;
        switch (jn[R.path]) {
          case jn.weights:
            z = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ar;
            break;
          case jn.rotation:
            z = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aq;
            break;
          case jn.position:
          case jn.scale:
          default:
            z = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ap;
            break;
        }
        const D = E.name ? E.name : E.uuid, I = L.interpolation !== void 0 ? Og[L.interpolation] : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.al, k = [];
        jn[R.path] === jn.weights ? E.traverse(function(G) {
          G.morphTargetInfluences && k.push(G.name ? G.name : G.uuid);
        }) : k.push(D);
        let j = M.array;
        if (M.normalized) {
          const G = Ca(j.constructor), Y = new Float32Array(j.length);
          for (let ee = 0, ae = j.length; ee < ae; ee++)
            Y[ee] = j[ee] * G;
          j = Y;
        }
        for (let G = 0, Y = k.length; G < Y; G++) {
          const ee = new z(
            k[G] + "." + jn[R.path],
            P.array,
            j,
            I
          );
          L.interpolation === "CUBICSPLINE" && (ee.createInterpolant = function(we) {
            const W = this instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aq ? zg : Cd;
            return new W(this.times, this.values, this.getValueSize() / 3, we);
          }, ee.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), T.push(ee);
        }
      }
      return new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.am(l, void 0, T);
    });
  }
  createNodeMesh(n) {
    const r = this.json, i = this, l = r.nodes[n];
    return l.mesh === void 0 ? null : i.getDependency("mesh", l.mesh).then(function(u) {
      const a = i._getNodeRef(i.meshCache, l.mesh, u);
      return l.weights !== void 0 && a.traverse(function(d) {
        if (d.isMesh)
          for (let f = 0, g = l.weights.length; f < g; f++)
            d.morphTargetInfluences[f] = l.weights[f];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(n) {
    const r = this.json, i = this, l = r.nodes[n], u = i._loadNodeShallow(n), a = [], d = l.children || [];
    for (let g = 0, p = d.length; g < p; g++)
      a.push(i.getDependency("node", d[g]));
    const f = l.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", l.skin);
    return Promise.all([u, Promise.all(a), f]).then(function(g) {
      const p = g[0], h = g[1], v = g[2];
      v !== null && p.traverse(function(x) {
        x.isSkinnedMesh && x.bind(v, jg);
      });
      for (let x = 0, _ = h.length; x < _; x++)
        p.add(h[x]);
      return p;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(n) {
    const r = this.json, i = this.extensions, l = this;
    if (this.nodeCache[n] !== void 0)
      return this.nodeCache[n];
    const u = r.nodes[n], a = u.name ? l.createUniqueName(u.name) : "", d = [], f = l._invokeOne(function(g) {
      return g.createNodeMesh && g.createNodeMesh(n);
    });
    return f && d.push(f), u.camera !== void 0 && d.push(
      l.getDependency("camera", u.camera).then(function(g) {
        return l._getNodeRef(l.cameraCache, u.camera, g);
      })
    ), l._invokeAll(function(g) {
      return g.createNodeAttachment && g.createNodeAttachment(n);
    }).forEach(function(g) {
      d.push(g);
    }), this.nodeCache[n] = Promise.all(d).then(function(g) {
      let p;
      if (u.isBone === !0 ? p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.an() : g.length > 1 ? p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G() : g.length === 1 ? p = g[0] : p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.z(), p !== g[0])
        for (let h = 0, v = g.length; h < v; h++)
          p.add(g[h]);
      if (u.name && (p.userData.name = u.name, p.name = a), Hn(p, u), u.extensions && sr(i, p, u), u.matrix !== void 0) {
        const h = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k();
        h.fromArray(u.matrix), p.applyMatrix4(h);
      } else
        u.translation !== void 0 && p.position.fromArray(u.translation), u.rotation !== void 0 && p.quaternion.fromArray(u.rotation), u.scale !== void 0 && p.scale.fromArray(u.scale);
      return l.associations.has(p) || l.associations.set(p, {}), l.associations.get(p).nodes = n, p;
    }), this.nodeCache[n];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(n) {
    const r = this.extensions, i = this.json.scenes[n], l = this, u = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G();
    i.name && (u.name = l.createUniqueName(i.name)), Hn(u, i), i.extensions && sr(r, u, i);
    const a = i.nodes || [], d = [];
    for (let f = 0, g = a.length; f < g; f++)
      d.push(l.getDependency("node", a[f]));
    return Promise.all(d).then(function(f) {
      for (let p = 0, h = f.length; p < h; p++)
        u.add(f[p]);
      const g = (p) => {
        const h = /* @__PURE__ */ new Map();
        for (const [v, x] of l.associations)
          (v instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.M || v instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.T) && h.set(v, x);
        return p.traverse((v) => {
          const x = l.associations.get(v);
          x != null && h.set(v, x);
        }), h;
      };
      return l.associations = g(u), u;
    });
  }
}
function Hg(o, n, r) {
  const i = n.attributes, l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au();
  if (i.POSITION !== void 0) {
    const d = r.json.accessors[i.POSITION], f = d.min, g = d.max;
    if (f !== void 0 && g !== void 0) {
      if (l.set(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(f[0], f[1], f[2]), new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(g[0], g[1], g[2])), d.normalized) {
        const p = Ca(qr[d.componentType]);
        l.min.multiplyScalar(p), l.max.multiplyScalar(p);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const u = n.targets;
  if (u !== void 0) {
    const d = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
    for (let g = 0, p = u.length; g < p; g++) {
      const h = u[g];
      if (h.POSITION !== void 0) {
        const v = r.json.accessors[h.POSITION], x = v.min, _ = v.max;
        if (x !== void 0 && _ !== void 0) {
          if (f.setX(Math.max(Math.abs(x[0]), Math.abs(_[0]))), f.setY(Math.max(Math.abs(x[1]), Math.abs(_[1]))), f.setZ(Math.max(Math.abs(x[2]), Math.abs(_[2]))), v.normalized) {
            const A = Ca(qr[v.componentType]);
            f.multiplyScalar(A);
          }
          d.max(f);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    l.expandByVector(d);
  }
  o.boundingBox = l;
  const a = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av();
  l.getCenter(a.center), a.radius = l.min.distanceTo(l.max) / 2, o.boundingSphere = a;
}
function Sf(o, n, r) {
  const i = n.attributes, l = [];
  function u(a, d) {
    return r.getDependency("accessor", a).then(function(f) {
      o.setAttribute(d, f);
    });
  }
  for (const a in i) {
    const d = Pa[a] || a.toLowerCase();
    d in o.attributes || l.push(u(i[a], d));
  }
  if (n.indices !== void 0 && !o.index) {
    const a = r.getDependency("accessor", n.indices).then(function(d) {
      o.setIndex(d);
    });
    l.push(a);
  }
  return Hn(o, n), Hg(o, n, r), Promise.all(l).then(function() {
    return n.targets !== void 0 ? Dg(o, n.targets, r) : o;
  });
}
var Vg = Object.defineProperty, Gg = (o, n, r) => n in o ? Vg(o, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[n] = r, De = (o, n, r) => (Gg(o, typeof n != "symbol" ? n + "" : n, r), r);
const je = {
  ComponentState: {
    DEFAULT: "default",
    TOUCHED: "touched",
    PRESSED: "pressed"
  },
  ComponentProperty: {
    BUTTON: "button",
    X_AXIS: "xAxis",
    Y_AXIS: "yAxis",
    STATE: "state"
  },
  ComponentType: {
    TOUCHPAD: "touchpad"
  },
  ButtonTouchThreshold: 0.05,
  AxisTouchThreshold: 0.1,
  VisualResponseProperty: {
    TRANSFORM: "transform",
    VISIBILITY: "visibility"
  }
};
async function Md(o) {
  const n = await fetch(o);
  if (n.ok)
    return n.json();
  throw new Error(n.statusText);
}
async function Wg(o) {
  if (!o)
    throw new Error("No basePath supplied");
  return await Md(`${o}/profilesList.json`);
}
async function Xg(o, n, r = null, i = !0) {
  if (!o)
    throw new Error("No xrInputSource supplied");
  if (!n)
    throw new Error("No basePath supplied");
  const l = await Wg(n);
  let u;
  if (o.profiles.some((f) => {
    const g = l[f];
    return g && (u = {
      profileId: f,
      profilePath: `${n}/${g.path}`,
      deprecated: !!g.deprecated
    }), !!u;
  }), !u) {
    if (!r)
      throw new Error("No matching profile name found");
    const f = l[r];
    if (!f)
      throw new Error(`No matching profile name found and default profile "${r}" missing.`);
    u = {
      profileId: r,
      profilePath: `${n}/${f.path}`,
      deprecated: !!f.deprecated
    };
  }
  const a = await Md(u.profilePath);
  let d;
  if (i) {
    let f;
    if (o.handedness === "any" ? f = a.layouts[Object.keys(a.layouts)[0]] : f = a.layouts[o.handedness], !f)
      throw new Error(`No matching handedness, ${o.handedness}, in profile ${u.profileId}`);
    f.assetPath && (d = u.profilePath.replace("profile.json", f.assetPath));
  }
  return { profile: a, assetPath: d };
}
const Kg = {
  xAxis: 0,
  yAxis: 0,
  button: 0,
  state: je.ComponentState.DEFAULT
};
function Yg(o = 0, n = 0) {
  let r = o, i = n;
  if (Math.sqrt(o * o + n * n) > 1) {
    const a = Math.atan2(n, o);
    r = Math.cos(a), i = Math.sin(a);
  }
  return {
    normalizedXAxis: r * 0.5 + 0.5,
    normalizedYAxis: i * 0.5 + 0.5
  };
}
class qg {
  constructor(n) {
    De(this, "value"), De(this, "componentProperty"), De(this, "states"), De(this, "valueNodeName"), De(this, "valueNodeProperty"), De(this, "minNodeName"), De(this, "maxNodeName"), De(this, "valueNode"), De(this, "minNode"), De(this, "maxNode"), this.componentProperty = n.componentProperty, this.states = n.states, this.valueNodeName = n.valueNodeName, this.valueNodeProperty = n.valueNodeProperty, this.valueNodeProperty === je.VisualResponseProperty.TRANSFORM && (this.minNodeName = n.minNodeName, this.maxNodeName = n.maxNodeName), this.value = 0, this.updateFromComponent(Kg);
  }
  /**
   * Computes the visual response's interpolation weight based on component state
   * @param {Object} componentValues - The component from which to update
   * @param {number | undefined} xAxis - The reported X axis value of the component
   * @param {number | undefined} yAxis - The reported Y axis value of the component
   * @param {number | undefined} button - The reported value of the component's button
   * @param {string} state - The component's active state
   */
  updateFromComponent({
    xAxis: n,
    yAxis: r,
    button: i,
    state: l
  }) {
    const { normalizedXAxis: u, normalizedYAxis: a } = Yg(n, r);
    switch (this.componentProperty) {
      case je.ComponentProperty.X_AXIS:
        this.value = this.states.includes(l) ? u : 0.5;
        break;
      case je.ComponentProperty.Y_AXIS:
        this.value = this.states.includes(l) ? a : 0.5;
        break;
      case je.ComponentProperty.BUTTON:
        this.value = this.states.includes(l) && i ? i : 0;
        break;
      case je.ComponentProperty.STATE:
        this.valueNodeProperty === je.VisualResponseProperty.VISIBILITY ? this.value = this.states.includes(l) : this.value = this.states.includes(l) ? 1 : 0;
        break;
      default:
        throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`);
    }
  }
}
class Qg {
  /**
   * @param {string} componentId - Id of the component
   * @param {InputProfileComponent} componentDescription - Description of the component to be created
   */
  constructor(n, r) {
    if (De(this, "id"), De(this, "values"), De(this, "type"), De(this, "gamepadIndices"), De(this, "rootNodeName"), De(this, "visualResponses"), De(this, "touchPointNodeName"), De(this, "touchPointNode"), !n || !r || !r.visualResponses || !r.gamepadIndices || Object.keys(r.gamepadIndices).length === 0)
      throw new Error("Invalid arguments supplied");
    this.id = n, this.type = r.type, this.rootNodeName = r.rootNodeName, this.touchPointNodeName = r.touchPointNodeName, this.visualResponses = {}, Object.keys(r.visualResponses).forEach((i) => {
      const l = new qg(r.visualResponses[i]);
      this.visualResponses[i] = l;
    }), this.gamepadIndices = Object.assign({}, r.gamepadIndices), this.values = {
      state: je.ComponentState.DEFAULT,
      button: this.gamepadIndices.button !== void 0 ? 0 : void 0,
      xAxis: this.gamepadIndices.xAxis !== void 0 ? 0 : void 0,
      yAxis: this.gamepadIndices.yAxis !== void 0 ? 0 : void 0
    };
  }
  get data() {
    return { id: this.id, ...this.values };
  }
  /**
   * @description Poll for updated data based on current gamepad state
   * @param {Object} gamepad - The gamepad object from which the component data should be polled
   */
  updateFromGamepad(n) {
    if (this.values.state = je.ComponentState.DEFAULT, this.gamepadIndices.button !== void 0 && n.buttons.length > this.gamepadIndices.button) {
      const r = n.buttons[this.gamepadIndices.button];
      this.values.button = r.value, this.values.button = this.values.button < 0 ? 0 : this.values.button, this.values.button = this.values.button > 1 ? 1 : this.values.button, r.pressed || this.values.button === 1 ? this.values.state = je.ComponentState.PRESSED : (r.touched || this.values.button > je.ButtonTouchThreshold) && (this.values.state = je.ComponentState.TOUCHED);
    }
    this.gamepadIndices.xAxis !== void 0 && n.axes.length > this.gamepadIndices.xAxis && (this.values.xAxis = n.axes[this.gamepadIndices.xAxis], this.values.xAxis = this.values.xAxis < -1 ? -1 : this.values.xAxis, this.values.xAxis = this.values.xAxis > 1 ? 1 : this.values.xAxis, this.values.state === je.ComponentState.DEFAULT && Math.abs(this.values.xAxis) > je.AxisTouchThreshold && (this.values.state = je.ComponentState.TOUCHED)), this.gamepadIndices.yAxis !== void 0 && n.axes.length > this.gamepadIndices.yAxis && (this.values.yAxis = n.axes[this.gamepadIndices.yAxis], this.values.yAxis = this.values.yAxis < -1 ? -1 : this.values.yAxis, this.values.yAxis = this.values.yAxis > 1 ? 1 : this.values.yAxis, this.values.state === je.ComponentState.DEFAULT && Math.abs(this.values.yAxis) > je.AxisTouchThreshold && (this.values.state = je.ComponentState.TOUCHED)), Object.values(this.visualResponses).forEach((r) => {
      r.updateFromComponent(this.values);
    });
  }
}
class Zg {
  /**
   * @param {XRInputSource} xrInputSource - The XRInputSource to build the MotionController around
   * @param {Profile} profile - The best matched profile description for the supplied xrInputSource
   * @param {string} assetUrl
   */
  constructor(n, r, i) {
    if (De(this, "xrInputSource"), De(this, "assetUrl"), De(this, "layoutDescription"), De(this, "id"), De(this, "components"), !n)
      throw new Error("No xrInputSource supplied");
    if (!r)
      throw new Error("No profile supplied");
    if (!r.layouts[n.handedness])
      throw new Error("No layout for " + n.handedness + " handedness");
    this.xrInputSource = n, this.assetUrl = i, this.id = r.profileId, this.layoutDescription = r.layouts[n.handedness], this.components = {}, Object.keys(this.layoutDescription.components).forEach((l) => {
      const u = this.layoutDescription.components[l];
      this.components[l] = new Qg(l, u);
    }), this.updateFromGamepad();
  }
  get gripSpace() {
    return this.xrInputSource.gripSpace;
  }
  get targetRaySpace() {
    return this.xrInputSource.targetRaySpace;
  }
  /**
   * @description Returns a subset of component data for simplified debugging
   */
  get data() {
    const n = [];
    return Object.values(this.components).forEach((r) => {
      n.push(r.data);
    }), n;
  }
  /**
   * @description Poll for updated data based on current gamepad state
   */
  updateFromGamepad() {
    Object.values(this.components).forEach((n) => {
      n.updateFromGamepad(this.xrInputSource.gamepad);
    });
  }
}
const wf = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), Ys = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
class qa extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aw {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const n = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], r = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], i = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(i), this.setAttribute("position", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ax(n, 3)), this.setAttribute("uv", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ax(r, 2));
  }
  applyMatrix4(n) {
    const r = this.attributes.instanceStart, i = this.attributes.instanceEnd;
    return r !== void 0 && (r.applyMatrix4(n), i.applyMatrix4(n), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(n) {
    let r;
    n instanceof Float32Array ? r = n : Array.isArray(n) && (r = new Float32Array(n));
    const i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ay(r, 6, 1);
    return this.setAttribute("instanceStart", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(i, 3, 0)), this.setAttribute("instanceEnd", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(i, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(n, r = 3) {
    let i;
    n instanceof Float32Array ? i = n : Array.isArray(n) && (i = new Float32Array(n));
    const l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ay(i, r * 2, 1);
    return this.setAttribute("instanceColorStart", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(l, r, 0)), this.setAttribute("instanceColorEnd", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(l, r, r)), this;
  }
  fromWireframeGeometry(n) {
    return this.setPositions(n.attributes.position.array), this;
  }
  fromEdgesGeometry(n) {
    return this.setPositions(n.attributes.position.array), this;
  }
  fromMesh(n) {
    return this.fromWireframeGeometry(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.az(n.geometry)), this;
  }
  fromLineSegments(n) {
    const r = n.geometry;
    return this.setPositions(r.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au());
    const n = this.attributes.instanceStart, r = this.attributes.instanceEnd;
    n !== void 0 && r !== void 0 && (this.boundingBox.setFromBufferAttribute(n), wf.setFromBufferAttribute(r), this.boundingBox.union(wf));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av()), this.boundingBox === null && this.computeBoundingBox();
    const n = this.attributes.instanceStart, r = this.attributes.instanceEnd;
    if (n !== void 0 && r !== void 0) {
      const i = this.boundingSphere.center;
      this.boundingBox.getCenter(i);
      let l = 0;
      for (let u = 0, a = n.count; u < a; u++)
        Ys.fromBufferAttribute(n, u), l = Math.max(l, i.distanceToSquared(Ys)), Ys.fromBufferAttribute(r, u), l = Math.max(l, i.distanceToSquared(Ys));
      this.boundingSphere.radius = Math.sqrt(l), isNaN(this.boundingSphere.radius) && console.error(
        "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
        this
      );
    }
  }
  toJSON() {
  }
  applyMatrix(n) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(n);
  }
}
class Ld extends qa {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(n) {
    const r = n.length - 3, i = new Float32Array(2 * r);
    for (let l = 0; l < r; l += 3)
      i[2 * l] = n[l], i[2 * l + 1] = n[l + 1], i[2 * l + 2] = n[l + 2], i[2 * l + 3] = n[l + 3], i[2 * l + 4] = n[l + 4], i[2 * l + 5] = n[l + 5];
    return super.setPositions(i), this;
  }
  setColors(n, r = 3) {
    const i = n.length - r, l = new Float32Array(2 * i);
    if (r === 3)
      for (let u = 0; u < i; u += r)
        l[2 * u] = n[u], l[2 * u + 1] = n[u + 1], l[2 * u + 2] = n[u + 2], l[2 * u + 3] = n[u + 3], l[2 * u + 4] = n[u + 4], l[2 * u + 5] = n[u + 5];
    else
      for (let u = 0; u < i; u += r)
        l[2 * u] = n[u], l[2 * u + 1] = n[u + 1], l[2 * u + 2] = n[u + 2], l[2 * u + 3] = n[u + 3], l[2 * u + 4] = n[u + 4], l[2 * u + 5] = n[u + 5], l[2 * u + 6] = n[u + 6], l[2 * u + 7] = n[u + 7];
    return super.setColors(l, r), this;
  }
  fromLine(n) {
    const r = n.geometry;
    return this.setPositions(r.attributes.position.array), this;
  }
}
class Qa extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aA {
  constructor(n) {
    super({
      type: "LineMaterial",
      uniforms: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aB.clone(
        _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aB.merge([
          _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aC.common,
          _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aC.fog,
          {
            worldUnits: { value: 1 },
            linewidth: { value: 1 },
            resolution: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(1, 1) },
            dashOffset: { value: 0 },
            dashScale: { value: 1 },
            dashSize: { value: 1 },
            gapSize: { value: 1 }
            // todo FIX - maybe change to totalSize
          }
        ])
      ),
      vertexShader: (
        /* glsl */
        `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${parseInt(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.o.replace(/\D+/g, "")) >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`
      ),
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.onBeforeCompile = function() {
      this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
    }, Object.defineProperties(this, {
      color: {
        enumerable: !0,
        get: function() {
          return this.uniforms.diffuse.value;
        },
        set: function(r) {
          this.uniforms.diffuse.value = r;
        }
      },
      worldUnits: {
        enumerable: !0,
        get: function() {
          return "WORLD_UNITS" in this.defines;
        },
        set: function(r) {
          r === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
        }
      },
      linewidth: {
        enumerable: !0,
        get: function() {
          return this.uniforms.linewidth.value;
        },
        set: function(r) {
          this.uniforms.linewidth.value = r;
        }
      },
      dashed: {
        enumerable: !0,
        get: function() {
          return "USE_DASH" in this.defines;
        },
        set(r) {
          !!r != "USE_DASH" in this.defines && (this.needsUpdate = !0), r === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
        }
      },
      dashScale: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashScale.value;
        },
        set: function(r) {
          this.uniforms.dashScale.value = r;
        }
      },
      dashSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashSize.value;
        },
        set: function(r) {
          this.uniforms.dashSize.value = r;
        }
      },
      dashOffset: {
        enumerable: !0,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(r) {
          this.uniforms.dashOffset.value = r;
        }
      },
      gapSize: {
        enumerable: !0,
        get: function() {
          return this.uniforms.gapSize.value;
        },
        set: function(r) {
          this.uniforms.gapSize.value = r;
        }
      },
      opacity: {
        enumerable: !0,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(r) {
          this.uniforms.opacity.value = r;
        }
      },
      resolution: {
        enumerable: !0,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(r) {
          this.uniforms.resolution.value.copy(r);
        }
      },
      alphaToCoverage: {
        enumerable: !0,
        get: function() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        },
        set: function(r) {
          !!r != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), r === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
        }
      }
    }), this.setValues(n);
  }
}
const _f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), Ef = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), tt = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aD(), nt = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aD(), un = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aD(), na = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), ra = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), ft = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE(), Tf = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), qs = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), Qs = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av(), cn = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aD();
let fn, Ma, Rd, fr;
function Af(o, n, r) {
  return cn.set(0, 0, -n, 1).applyMatrix4(o.projectionMatrix), cn.multiplyScalar(1 / cn.w), cn.x = fr / r.width, cn.y = fr / r.height, cn.applyMatrix4(o.projectionMatrixInverse), cn.multiplyScalar(1 / cn.w), Math.abs(Math.max(cn.x, cn.y));
}
function Jg(o, n) {
  for (let r = 0, i = Ma.count; r < i; r++) {
    ft.start.fromBufferAttribute(Ma, r), ft.end.fromBufferAttribute(Rd, r);
    const l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), u = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
    fn.distanceSqToSegment(ft.start, ft.end, u, l), u.distanceTo(l) < fr * 0.5 && n.push({
      point: u,
      pointOnLine: l,
      distance: fn.origin.distanceTo(u),
      object: o,
      face: null,
      faceIndex: r,
      uv: null,
      uv2: null
    });
  }
}
function $g(o, n, r) {
  const i = n.projectionMatrix, u = o.material.resolution, a = o.matrixWorld, d = o.geometry, f = d.attributes.instanceStart, g = d.attributes.instanceEnd, p = -n.near;
  fn.at(1, un), un.w = 1, un.applyMatrix4(n.matrixWorldInverse), un.applyMatrix4(i), un.multiplyScalar(1 / un.w), un.x *= u.x / 2, un.y *= u.y / 2, un.z = 0, na.copy(un), ra.multiplyMatrices(n.matrixWorldInverse, a);
  for (let h = 0, v = f.count; h < v; h++) {
    if (tt.fromBufferAttribute(f, h), nt.fromBufferAttribute(g, h), tt.w = 1, nt.w = 1, tt.applyMatrix4(ra), nt.applyMatrix4(ra), tt.z > p && nt.z > p)
      continue;
    if (tt.z > p) {
      const w = tt.z - nt.z, E = (tt.z - p) / w;
      tt.lerp(nt, E);
    } else if (nt.z > p) {
      const w = nt.z - tt.z, E = (nt.z - p) / w;
      nt.lerp(tt, E);
    }
    tt.applyMatrix4(i), nt.applyMatrix4(i), tt.multiplyScalar(1 / tt.w), nt.multiplyScalar(1 / nt.w), tt.x *= u.x / 2, tt.y *= u.y / 2, nt.x *= u.x / 2, nt.y *= u.y / 2, ft.start.copy(tt), ft.start.z = 0, ft.end.copy(nt), ft.end.z = 0;
    const _ = ft.closestPointToPointParameter(na, !0);
    ft.at(_, Tf);
    const A = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ai.lerp(tt.z, nt.z, _), T = A >= -1 && A <= 1, S = na.distanceTo(Tf) < fr * 0.5;
    if (T && S) {
      ft.start.fromBufferAttribute(f, h), ft.end.fromBufferAttribute(g, h), ft.start.applyMatrix4(a), ft.end.applyMatrix4(a);
      const w = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), E = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
      fn.distanceSqToSegment(ft.start, ft.end, E, w), r.push({
        point: E,
        pointOnLine: w,
        distance: fn.origin.distanceTo(E),
        object: o,
        face: null,
        faceIndex: h,
        uv: null,
        uv2: null
      });
    }
  }
}
class Nd extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad {
  constructor(n = new qa(), r = new Qa({ color: Math.random() * 16777215 })) {
    super(n, r), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const n = this.geometry, r = n.attributes.instanceStart, i = n.attributes.instanceEnd, l = new Float32Array(2 * r.count);
    for (let a = 0, d = 0, f = r.count; a < f; a++, d += 2)
      _f.fromBufferAttribute(r, a), Ef.fromBufferAttribute(i, a), l[d] = d === 0 ? 0 : l[d - 1], l[d + 1] = l[d] + _f.distanceTo(Ef);
    const u = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ay(l, 2, 1);
    return n.setAttribute("instanceDistanceStart", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(u, 1, 0)), n.setAttribute("instanceDistanceEnd", new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ao(u, 1, 1)), this;
  }
  raycast(n, r) {
    const i = this.material.worldUnits, l = n.camera;
    l === null && !i && console.error(
      'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
    );
    const u = n.params.Line2 !== void 0 && n.params.Line2.threshold || 0;
    fn = n.ray;
    const a = this.matrixWorld, d = this.geometry, f = this.material;
    fr = f.linewidth + u, Ma = d.attributes.instanceStart, Rd = d.attributes.instanceEnd, d.boundingSphere === null && d.computeBoundingSphere(), Qs.copy(d.boundingSphere).applyMatrix4(a);
    let g;
    if (i)
      g = fr * 0.5;
    else {
      const h = Math.max(l.near, Qs.distanceToPoint(fn.origin));
      g = Af(l, h, f.resolution);
    }
    if (Qs.radius += g, fn.intersectsSphere(Qs) === !1)
      return;
    d.boundingBox === null && d.computeBoundingBox(), qs.copy(d.boundingBox).applyMatrix4(a);
    let p;
    if (i)
      p = fr * 0.5;
    else {
      const h = Math.max(l.near, qs.distanceToPoint(fn.origin));
      p = Af(l, h, f.resolution);
    }
    qs.expandByScalar(p), fn.intersectsBox(qs) !== !1 && (i ? Jg(this, r) : $g(this, l, r));
  }
}
class ev extends Nd {
  constructor(n = new Ld(), r = new Qa({ color: Math.random() * 16777215 })) {
    super(n, r), this.isLine2 = !0, this.type = "Line2";
  }
}
const tv = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles", nv = "generic-trigger";
class rv {
  constructor(n = null, r = tv) {
    this.gltfLoader = n ?? new Ad(), this.path = r, this._assetCache = {};
  }
  initializeControllerModel(n, r) {
    return r.targetRayMode !== "tracked-pointer" || !r.gamepad ? Promise.resolve() : Xg(r, this.path, nv).then(({ profile: i, assetPath: l }) => {
      if (!l)
        throw new Error("no asset path");
      const u = new Zg(r, i, l);
      n.connectMotionController(u);
      const a = u.assetUrl, d = this._assetCache[a];
      if (d) {
        const f = d.scene.clone();
        n.connectModel(f);
      } else {
        if (!this.gltfLoader)
          throw new Error("GLTFLoader not set.");
        this.gltfLoader.setPath(""), this.gltfLoader.load(
          a,
          (f) => {
            if (!n.motionController) {
              console.warn("motionController gone while gltf load, bailing...");
              return;
            }
            this._assetCache[a] = f;
            const g = f.scene.clone();
            n.connectModel(g);
          },
          void 0,
          () => {
            throw new Error(`Asset ${a} missing or malformed.`);
          }
        );
      }
    }).catch((i) => {
      console.warn(i);
    });
  }
}
const Pf = (o) => "envMap" in o, Cf = (o, n) => {
  o.envMap = n, o.needsUpdate = !0;
}, Id = (o, n) => {
  n instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad && (Array.isArray(n.material) ? n.material.forEach((r) => Pf(r) ? Cf(r, o) : void 0) : Pf(n.material) && Cf(n.material, o));
}, Mf = (o) => "envMapIntensity" in o, Lf = (o, n) => {
  o.envMapIntensity = n, o.needsUpdate = !0;
}, La = (o, n) => {
  n instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad && (Array.isArray(n.material) ? n.material.forEach((r) => Mf(r) ? Lf(r, o) : void 0) : Mf(n.material) && Lf(n.material, o));
};
function iv(o, n) {
  Object.values(o.components).forEach((r) => {
    const { type: i, touchPointNodeName: l, visualResponses: u } = r;
    if (i === je.ComponentType.TOUCHPAD && l)
      if (r.touchPointNode = n.getObjectByName(l), r.touchPointNode) {
        const a = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aF(1e-3), d = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa({ color: 255 }), f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad(a, d);
        r.touchPointNode.add(f);
      } else
        console.warn(`Could not find touch dot, ${r.touchPointNodeName}, in touchpad component ${r.id}`);
    Object.values(u).forEach((a) => {
      const { valueNodeName: d, minNodeName: f, maxNodeName: g, valueNodeProperty: p } = a;
      if (p === je.VisualResponseProperty.TRANSFORM && f && g) {
        if (a.minNode = n.getObjectByName(f), a.maxNode = n.getObjectByName(g), !a.minNode) {
          console.warn(`Could not find ${f} in the model`);
          return;
        }
        if (!a.maxNode) {
          console.warn(`Could not find ${g} in the model`);
          return;
        }
      }
      a.valueNode = n.getObjectByName(d), a.valueNode || console.warn(`Could not find ${d} in the model`);
    });
  });
}
function sv(o, n) {
  iv(o.motionController, n), (o.envMap || o.envMapIntensity != null) && n.traverse((r) => {
    o.envMap && Id(o.envMap, r), o.envMapIntensity != null && La(o.envMapIntensity, r);
  }), o.add(n);
}
class ov extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G {
  constructor() {
    super(), this.motionController = null, this.envMap = null, this.envMapIntensity = 1, this.scene = null;
  }
  setEnvironmentMap(n, r = 1) {
    var i;
    return this.envMap === n && this.envMapIntensity === r ? this : (this.envMap = n, this.envMapIntensity = r, (i = this.scene) == null || i.traverse((l) => {
      Id(n, l), La(r, l);
    }), this);
  }
  setEnvironmentMapIntensity(n) {
    var r;
    return this.envMapIntensity === n ? this : (this.envMapIntensity = n, (r = this.scene) == null || r.traverse((i) => La(n, i)), this);
  }
  connectModel(n) {
    if (!this.motionController) {
      console.warn("scene tried to add, but no motion controller");
      return;
    }
    this.scene = n, sv(this, n), this.dispatchEvent({
      type: "modelconnected",
      data: n
    });
  }
  connectMotionController(n) {
    this.motionController = n, this.dispatchEvent({
      type: "motionconnected",
      data: n
    });
  }
  updateMatrixWorld(n) {
    super.updateMatrixWorld(n), this.motionController && (this.motionController.updateFromGamepad(), Object.values(this.motionController.components).forEach((r) => {
      Object.values(r.visualResponses).forEach((i) => {
        const { valueNode: l, minNode: u, maxNode: a, value: d, valueNodeProperty: f } = i;
        l && (f === je.VisualResponseProperty.VISIBILITY && typeof d == "boolean" ? l.visible = d : f === je.VisualResponseProperty.TRANSFORM && u && a && typeof d == "number" && (l.quaternion.slerpQuaternions(u.quaternion, a.quaternion, d), l.position.lerpVectors(u.position, a.position, d)));
      });
    }));
  }
  disconnect() {
    this.dispatchEvent({
      type: "motiondisconnected",
      data: this.motionController
    }), this.dispatchEvent({
      type: "modeldisconnected",
      data: this.scene
    }), this.motionController = null, this.scene && this.remove(this.scene), this.scene = null;
  }
  dispose() {
    this.disconnect();
  }
}
const lv = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({ target: n, hideOnBlur: r = !1, ...i }, l) {
  const u = Ue((f) => f.hoverState), a = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), d = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.f().setFromPoints([new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0), new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, -1)]),
    []
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(l, () => a.current), dr(() => {
    if (!n.inputSource)
      return;
    let f = 1;
    const g = u[n.inputSource.handedness].values().next().value;
    g && n.inputSource.handedness !== "none" ? (f = g.distance, r && (a.current.visible = !1)) : r && (a.current.visible = !0);
    const p = -0.01;
    a.current.scale.z = f + p;
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("line", {
    ref: a,
    geometry: d,
    "material-opacity": 0.8,
    "material-transparent": !0,
    ...i
  });
}), av = new rv(), uv = ({
  target: o,
  envMap: n,
  envMapIntensity: r
}) => {
  const i = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), l = dn((f) => {
    n != null && f.setEnvironmentMap(n);
  }), u = dn((f) => f.setEnvironmentMap(null)), a = dn((f) => {
    r != null && f.setEnvironmentMapIntensity(r);
  }), d = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (f) => {
      var g, p, h;
      if (i.current = f, f) {
        if (o.xrControllerModel = f, (g = o.inputSource) != null && g.hand)
          return;
        l.current(f), a.current(f), o.inputSource ? av.initializeControllerModel(f, o.inputSource) : console.warn("no input source on XRController when handleControllerModel");
      } else {
        if ((p = o.inputSource) != null && p.hand)
          return;
        (h = o.xrControllerModel) == null || h.disconnect(), o.xrControllerModel = null;
      }
    },
    [o, a, l]
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    i.current && (n ? l.current(i.current) : u.current(i.current));
  }, [n, l, u]), react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    i.current && a.current(i.current);
  }, [r, a]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("xRControllerModel", {
    ref: d
  });
};
function cv({ rayMaterial: o = {}, hideRaysOnBlur: n = !1, envMap: r, envMapIntensity: i }) {
  const l = Ue((d) => d.controllers), u = Ue((d) => d.isHandTracking), a = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => Object.entries(o).reduce(
      (d, [f, g]) => ({
        ...d,
        [`material-${f}`]: g
      }),
      {}
    ),
    [JSON.stringify(o)]
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => Ga({ XRControllerModel: ov }), []), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, l.map((d, f) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    key: f
  }, Aa(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(uv, {
    target: d,
    envMap: r,
    envMapIntensity: i
  }), d.grip), Aa(
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(lv, {
      visible: !u,
      hideOnBlur: n,
      target: d,
      ...a
    }),
    d.controller
  ))));
}
const fv = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";
class dv {
  constructor(n, r, i = fv, l, u) {
    this.controller = r, this.handModel = n, this.bones = [];
    const a = new Ad();
    u || a.setPath(i), a.load(u ?? `${l}.glb`, (d) => {
      const f = d.scene.children[0];
      this.handModel.add(f), this.scene = f;
      const g = f.getObjectByProperty("type", "SkinnedMesh");
      g.frustumCulled = !1, g.castShadow = !0, g.receiveShadow = !0, [
        "wrist",
        "thumb-metacarpal",
        "thumb-phalanx-proximal",
        "thumb-phalanx-distal",
        "thumb-tip",
        "index-finger-metacarpal",
        "index-finger-phalanx-proximal",
        "index-finger-phalanx-intermediate",
        "index-finger-phalanx-distal",
        "index-finger-tip",
        "middle-finger-metacarpal",
        "middle-finger-phalanx-proximal",
        "middle-finger-phalanx-intermediate",
        "middle-finger-phalanx-distal",
        "middle-finger-tip",
        "ring-finger-metacarpal",
        "ring-finger-phalanx-proximal",
        "ring-finger-phalanx-intermediate",
        "ring-finger-phalanx-distal",
        "ring-finger-tip",
        "pinky-finger-metacarpal",
        "pinky-finger-phalanx-proximal",
        "pinky-finger-phalanx-intermediate",
        "pinky-finger-phalanx-distal",
        "pinky-finger-tip"
      ].forEach((h) => {
        const v = f.getObjectByName(h);
        v !== void 0 ? v.jointName = h : console.warn(`Couldn't find ${h} in ${l} hand mesh`), this.bones.push(v);
      });
    });
  }
  updateMesh() {
    const n = this.controller.joints;
    let r = !0;
    for (let i = 0; i < this.bones.length; i++) {
      const l = this.bones[i];
      if (l) {
        const u = n[l.jointName];
        if (u.visible) {
          const a = u.position;
          l.position.copy(a), l.quaternion.copy(u.quaternion), r = !1;
        }
      }
    }
    r && this.scene ? this.scene.visible = !1 : this.scene && (this.scene.visible = !0);
  }
  dispose() {
    this.scene && this.handModel.remove(this.scene);
  }
}
const pv = 0.01, hv = "index-finger-tip";
class mv extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.z {
  constructor(n, r, i) {
    super(), this._onConnected = (l) => {
      const u = l.data;
      u.hand && !this.motionController && (this.xrInputSource = u, this.motionController = new dv(
        this,
        this.controller,
        void 0,
        u.handedness,
        u.handedness === "left" ? this.leftModelPath : this.rightModelPath
      ));
    }, this._onDisconnected = () => {
      var l;
      (l = this.xrInputSource) != null && l.hand && this.motionControllerCleanup();
    }, this.controller = n, this.motionController = null, this.envMap = null, this.leftModelPath = r, this.rightModelPath = i, this.mesh = null, this.xrInputSource = null, n.addEventListener("connected", this._onConnected), n.addEventListener("disconnected", this._onDisconnected);
  }
  motionControllerCleanup() {
    var n;
    this.clear(), (n = this.motionController) == null || n.dispose(), this.motionController = null;
  }
  updateMatrixWorld(n) {
    super.updateMatrixWorld(n), this.motionController && this.motionController.updateMesh();
  }
  getPointerPosition() {
    const n = this.controller.joints[hv];
    return n ? n.position : null;
  }
  intersectBoxObject(n) {
    const r = this.getPointerPosition();
    if (r) {
      const i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av(r, pv), l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au().setFromObject(n);
      return i.intersectsBox(l);
    } else
      return !1;
  }
  checkButton(n) {
    this.intersectBoxObject(n) ? n.onPress() : n.onClear(), n.isPressed() && n.whilePressed();
  }
  dispose() {
    this.motionControllerCleanup(), this.controller.removeEventListener("connected", this._onConnected), this.controller.removeEventListener("disconnected", this._onDisconnected);
  }
}
function gv({ modelLeft: o, modelRight: n }) {
  const r = Ue((i) => i.controllers);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => Ga({ OculusHandModel: mv }), []), Ut(() => {
    for (const i of r)
      i.hand.dispatchEvent({ type: "connected", data: i.inputSource, fake: !0 });
  }, [r, o, n]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, r.map(({ hand: i }) => Aa(/* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("oculusHandModel", {
    args: [i, o, n]
  }), i)));
}
const vv = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({
  points: n,
  color: r = 16777215,
  vertexColors: i,
  linewidth: l,
  lineWidth: u,
  segments: a,
  dashed: d,
  ...f
}, g) {
  var p;
  const h = rt((T) => T.size), v = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => a ? new Nd() : new ev(), [a]), [x] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => new Qa()), _ = (i == null || (p = i[0]) == null ? void 0 : p.length) === 4 ? 4 : 3, A = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const T = a ? new qa() : new Ld(), S = n.map((w) => {
      const E = Array.isArray(w);
      return w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c || w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aD ? [w.x, w.y, w.z] : w instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d ? [w.x, w.y, 0] : E && w.length === 3 ? [w[0], w[1], w[2]] : E && w.length === 2 ? [w[0], w[1], 0] : w;
    });
    if (T.setPositions(S.flat()), i) {
      r = 16777215;
      const w = i.map((E) => E instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.i ? E.toArray() : E);
      T.setColors(w.flat(), _);
    }
    return T;
  }, [n, a, i, _]);
  return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    v.computeLineDistances();
  }, [n, v]), react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    d ? x.defines.USE_DASH = "" : delete x.defines.USE_DASH, x.needsUpdate = !0;
  }, [d, x]), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => () => A.dispose(), [A]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    object: v,
    ref: g
  }, f), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", {
    object: A,
    attach: "geometry"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    object: x,
    attach: "material",
    color: r,
    vertexColors: !!i,
    resolution: [h.width, h.height],
    linewidth: l ?? u,
    dashed: d,
    transparent: _ === 4
  }, f)));
}), zd = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  sdfGlyphSize: o = 64,
  anchorX: n = "center",
  anchorY: r = "middle",
  font: i,
  fontSize: l = 1,
  children: u,
  characters: a,
  onSync: d,
  ...f
}, g) => {
  const {
    Text: p,
    preloadFont: h
  } = qc(async () => __webpack_require__.e(/* import() */ 550).then(__webpack_require__.bind(__webpack_require__, 2550)), []), v = rt(({
    invalidate: T
  }) => T), [x] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => new p()), [_, A] = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    const T = [];
    let S = "";
    return react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(u, (w) => {
      typeof w == "string" || typeof w == "number" ? S += w : T.push(w);
    }), [T, S];
  }, [u]);
  return qc(() => new Promise((T) => h({
    font: i,
    characters: a
  }, T)), ["troika-text", i, a]), react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => void x.sync(() => {
    v(), d && d(x);
  })), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => () => x.dispose(), [x]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    object: x,
    ref: g,
    font: i,
    text: A,
    anchorX: n,
    anchorY: r,
    fontSize: l,
    sdfGlyphSize: o
  }, f), _);
}), yv = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  makeDefault: o,
  camera: n,
  regress: r,
  domElement: i,
  enableDamping: l = !0,
  keyEvents: u = !1,
  onChange: a,
  onStart: d,
  onEnd: f,
  ...g
}, p) => {
  const h = rt((L) => L.invalidate), v = rt((L) => L.camera), x = rt((L) => L.gl), _ = rt((L) => L.events), A = rt((L) => L.setEvents), T = rt((L) => L.set), S = rt((L) => L.get), w = rt((L) => L.performance), E = n || v, P = i || _.connected || x.domElement, M = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => new cg(E), [E]);
  return dr(() => {
    M.enabled && M.update();
  }, -1), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => (u && M.connect(u === !0 ? P : u), M.connect(P), () => void M.dispose()), [u, P, r, M, h]), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const L = (D) => {
      h(), r && w.regress(), a && a(D);
    }, R = (D) => {
      d && d(D);
    }, z = (D) => {
      f && f(D);
    };
    return M.addEventListener("change", L), M.addEventListener("start", R), M.addEventListener("end", z), () => {
      M.removeEventListener("start", R), M.removeEventListener("end", z), M.removeEventListener("change", L);
    };
  }, [a, d, f, M, h, A]), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (o) {
      const L = S().controls;
      return T({
        controls: M
      }), () => T({
        controls: L
      });
    }
  }, [o, M]), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("primitive", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    ref: p,
    object: M,
    enableDamping: l
  }, g));
}), Od = 0, xv = 1, bd = 2, Rf = 2, ia = 1.25, Nf = 1, Fi = 6 * 4 + 4 + 4, So = 65535, Sv = Math.pow(2, -24), sa = Symbol("SKIP_GENERATION");
function wv(o) {
  return o.index ? o.index.count : o.attributes.position.count;
}
function $r(o) {
  return wv(o) / 3;
}
function _v(o, n = ArrayBuffer) {
  return o > 65535 ? new Uint32Array(new n(4 * o)) : new Uint16Array(new n(2 * o));
}
function Ev(o, n) {
  if (!o.index) {
    const r = o.attributes.position.count, i = n.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, l = _v(r, i);
    o.setIndex(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.K(l, 1));
    for (let u = 0; u < r; u++)
      l[u] = u;
  }
}
function Dd(o) {
  const n = $r(o), r = o.drawRange, i = r.start / 3, l = (r.start + r.count) / 3, u = Math.max(0, i), a = Math.min(n, l) - u;
  return [{
    offset: Math.floor(u),
    count: Math.floor(a)
  }];
}
function kd(o) {
  if (!o.groups || !o.groups.length)
    return Dd(o);
  const n = [], r = /* @__PURE__ */ new Set(), i = o.drawRange, l = i.start / 3, u = (i.start + i.count) / 3;
  for (const d of o.groups) {
    const f = d.start / 3, g = (d.start + d.count) / 3;
    r.add(Math.max(l, f)), r.add(Math.min(u, g));
  }
  const a = Array.from(r.values()).sort((d, f) => d - f);
  for (let d = 0; d < a.length - 1; d++) {
    const f = a[d], g = a[d + 1];
    n.push({
      offset: Math.floor(f),
      count: Math.floor(g - f)
    });
  }
  return n;
}
function Tv(o) {
  if (o.groups.length === 0)
    return !1;
  const n = $r(o), r = kd(o).sort((u, a) => u.offset - a.offset), i = r[r.length - 1];
  i.count = Math.min(n - i.offset, i.count);
  let l = 0;
  return r.forEach(({ count: u }) => l += u), n !== l;
}
function oa(o, n, r, i, l) {
  let u = 1 / 0, a = 1 / 0, d = 1 / 0, f = -1 / 0, g = -1 / 0, p = -1 / 0, h = 1 / 0, v = 1 / 0, x = 1 / 0, _ = -1 / 0, A = -1 / 0, T = -1 / 0;
  for (let S = n * 6, w = (n + r) * 6; S < w; S += 6) {
    const E = o[S + 0], P = o[S + 1], M = E - P, L = E + P;
    M < u && (u = M), L > f && (f = L), E < h && (h = E), E > _ && (_ = E);
    const R = o[S + 2], z = o[S + 3], D = R - z, I = R + z;
    D < a && (a = D), I > g && (g = I), R < v && (v = R), R > A && (A = R);
    const k = o[S + 4], j = o[S + 5], G = k - j, Y = k + j;
    G < d && (d = G), Y > p && (p = Y), k < x && (x = k), k > T && (T = k);
  }
  i[0] = u, i[1] = a, i[2] = d, i[3] = f, i[4] = g, i[5] = p, l[0] = h, l[1] = v, l[2] = x, l[3] = _, l[4] = A, l[5] = T;
}
function Av(o, n = null, r = null, i = null) {
  const l = o.attributes.position, u = o.index ? o.index.array : null, a = $r(o), d = l.normalized;
  let f;
  n === null ? (f = new Float32Array(a * 6 * 4), r = 0, i = a) : (f = n, r = r || 0, i = i || a);
  const g = l.array, p = l.offset || 0;
  let h = 3;
  l.isInterleavedBufferAttribute && (h = l.data.stride);
  const v = ["getX", "getY", "getZ"];
  for (let x = r; x < r + i; x++) {
    const _ = x * 3, A = x * 6;
    let T = _ + 0, S = _ + 1, w = _ + 2;
    u && (T = u[T], S = u[S], w = u[w]), d || (T = T * h + p, S = S * h + p, w = w * h + p);
    for (let E = 0; E < 3; E++) {
      let P, M, L;
      d ? (P = l[v[E]](T), M = l[v[E]](S), L = l[v[E]](w)) : (P = g[T + E], M = g[S + E], L = g[w + E]);
      let R = P;
      M < R && (R = M), L < R && (R = L);
      let z = P;
      M > z && (z = M), L > z && (z = L);
      const D = (z - R) / 2, I = E * 2;
      f[A + I + 0] = R + D, f[A + I + 1] = D + (Math.abs(R) + D) * Sv;
    }
  }
  return f;
}
function ke(o, n, r) {
  return r.min.x = n[o], r.min.y = n[o + 1], r.min.z = n[o + 2], r.max.x = n[o + 3], r.max.y = n[o + 4], r.max.z = n[o + 5], r;
}
function If(o) {
  let n = -1, r = -1 / 0;
  for (let i = 0; i < 3; i++) {
    const l = o[i + 3] - o[i];
    l > r && (r = l, n = i);
  }
  return n;
}
function zf(o, n) {
  n.set(o);
}
function Of(o, n, r) {
  let i, l;
  for (let u = 0; u < 3; u++) {
    const a = u + 3;
    i = o[u], l = n[u], r[u] = i < l ? i : l, i = o[a], l = n[a], r[a] = i > l ? i : l;
  }
}
function Zs(o, n, r) {
  for (let i = 0; i < 3; i++) {
    const l = n[o + 2 * i], u = n[o + 2 * i + 1], a = l - u, d = l + u;
    a < r[i] && (r[i] = a), d > r[i + 3] && (r[i + 3] = d);
  }
}
function Li(o) {
  const n = o[3] - o[0], r = o[4] - o[1], i = o[5] - o[2];
  return 2 * (n * r + r * i + i * n);
}
const wn = 32, Pv = (o, n) => o.candidate - n.candidate, Un = new Array(wn).fill().map(() => ({
  count: 0,
  bounds: new Float32Array(6),
  rightCacheBounds: new Float32Array(6),
  leftCacheBounds: new Float32Array(6),
  candidate: 0
})), Js = new Float32Array(6);
function Cv(o, n, r, i, l, u) {
  let a = -1, d = 0;
  if (u === Od)
    a = If(n), a !== -1 && (d = (n[a] + n[a + 3]) / 2);
  else if (u === xv)
    a = If(o), a !== -1 && (d = Mv(r, i, l, a));
  else if (u === bd) {
    const f = Li(o);
    let g = ia * l;
    const p = i * 6, h = (i + l) * 6;
    for (let v = 0; v < 3; v++) {
      const x = n[v], T = (n[v + 3] - x) / wn;
      if (l < wn / 4) {
        const S = [...Un];
        S.length = l;
        let w = 0;
        for (let P = p; P < h; P += 6, w++) {
          const M = S[w];
          M.candidate = r[P + 2 * v], M.count = 0;
          const {
            bounds: L,
            leftCacheBounds: R,
            rightCacheBounds: z
          } = M;
          for (let D = 0; D < 3; D++)
            z[D] = 1 / 0, z[D + 3] = -1 / 0, R[D] = 1 / 0, R[D + 3] = -1 / 0, L[D] = 1 / 0, L[D + 3] = -1 / 0;
          Zs(P, r, L);
        }
        S.sort(Pv);
        let E = l;
        for (let P = 0; P < E; P++) {
          const M = S[P];
          for (; P + 1 < E && S[P + 1].candidate === M.candidate; )
            S.splice(P + 1, 1), E--;
        }
        for (let P = p; P < h; P += 6) {
          const M = r[P + 2 * v];
          for (let L = 0; L < E; L++) {
            const R = S[L];
            M >= R.candidate ? Zs(P, r, R.rightCacheBounds) : (Zs(P, r, R.leftCacheBounds), R.count++);
          }
        }
        for (let P = 0; P < E; P++) {
          const M = S[P], L = M.count, R = l - M.count, z = M.leftCacheBounds, D = M.rightCacheBounds;
          let I = 0;
          L !== 0 && (I = Li(z) / f);
          let k = 0;
          R !== 0 && (k = Li(D) / f);
          const j = Nf + ia * (I * L + k * R);
          j < g && (a = v, g = j, d = M.candidate);
        }
      } else {
        for (let E = 0; E < wn; E++) {
          const P = Un[E];
          P.count = 0, P.candidate = x + T + E * T;
          const M = P.bounds;
          for (let L = 0; L < 3; L++)
            M[L] = 1 / 0, M[L + 3] = -1 / 0;
        }
        for (let E = p; E < h; E += 6) {
          let L = ~~((r[E + 2 * v] - x) / T);
          L >= wn && (L = wn - 1);
          const R = Un[L];
          R.count++, Zs(E, r, R.bounds);
        }
        const S = Un[wn - 1];
        zf(S.bounds, S.rightCacheBounds);
        for (let E = wn - 2; E >= 0; E--) {
          const P = Un[E], M = Un[E + 1];
          Of(P.bounds, M.rightCacheBounds, P.rightCacheBounds);
        }
        let w = 0;
        for (let E = 0; E < wn - 1; E++) {
          const P = Un[E], M = P.count, L = P.bounds, z = Un[E + 1].rightCacheBounds;
          M !== 0 && (w === 0 ? zf(L, Js) : Of(L, Js, Js)), w += M;
          let D = 0, I = 0;
          w !== 0 && (D = Li(Js) / f);
          const k = l - w;
          k !== 0 && (I = Li(z) / f);
          const j = Nf + ia * (D * w + I * k);
          j < g && (a = v, g = j, d = P.candidate);
        }
      }
    }
  } else
    console.warn(`MeshBVH: Invalid build strategy value ${u} used.`);
  return { axis: a, pos: d };
}
function Mv(o, n, r, i) {
  let l = 0;
  for (let u = n, a = n + r; u < a; u++)
    l += o[u * 6 + i * 2];
  return l / r;
}
class la {
  constructor() {
    this.boundingData = new Float32Array(6);
  }
}
function Lv(o, n, r, i, l, u) {
  let a = i, d = i + l - 1;
  const f = u.pos, g = u.axis * 2;
  for (; ; ) {
    for (; a <= d && r[a * 6 + g] < f; )
      a++;
    for (; a <= d && r[d * 6 + g] >= f; )
      d--;
    if (a < d) {
      for (let p = 0; p < 3; p++) {
        let h = n[a * 3 + p];
        n[a * 3 + p] = n[d * 3 + p], n[d * 3 + p] = h;
      }
      for (let p = 0; p < 6; p++) {
        let h = r[a * 6 + p];
        r[a * 6 + p] = r[d * 6 + p], r[d * 6 + p] = h;
      }
      a++, d--;
    } else
      return a;
  }
}
function Rv(o, n, r, i, l, u) {
  let a = i, d = i + l - 1;
  const f = u.pos, g = u.axis * 2;
  for (; ; ) {
    for (; a <= d && r[a * 6 + g] < f; )
      a++;
    for (; a <= d && r[d * 6 + g] >= f; )
      d--;
    if (a < d) {
      let p = o[a];
      o[a] = o[d], o[d] = p;
      for (let h = 0; h < 6; h++) {
        let v = r[a * 6 + h];
        r[a * 6 + h] = r[d * 6 + h], r[d * 6 + h] = v;
      }
      a++, d--;
    } else
      return a;
  }
}
function Tt(o, n) {
  return n[o + 15] === 65535;
}
function Lt(o, n) {
  return n[o + 6];
}
function Ht(o, n) {
  return n[o + 14];
}
function Vt(o) {
  return o + 8;
}
function Gt(o, n) {
  return n[o + 6];
}
function Fd(o, n) {
  return n[o + 7];
}
let Bd, Di, mo, jd;
const Nv = Math.pow(2, 32);
function Ra(o) {
  return "count" in o ? 1 : 1 + Ra(o.left) + Ra(o.right);
}
function Iv(o, n, r) {
  return Bd = new Float32Array(r), Di = new Uint32Array(r), mo = new Uint16Array(r), jd = new Uint8Array(r), Na(o, n);
}
function Na(o, n) {
  const r = o / 4, i = o / 2, l = "count" in n, u = n.boundingData;
  for (let a = 0; a < 6; a++)
    Bd[r + a] = u[a];
  if (l)
    if (n.buffer) {
      const a = n.buffer;
      jd.set(new Uint8Array(a), o);
      for (let d = o, f = o + a.byteLength; d < f; d += Fi) {
        const g = d / 2;
        Tt(g, mo) || (Di[d / 4 + 6] += r);
      }
      return o + a.byteLength;
    } else {
      const a = n.offset, d = n.count;
      return Di[r + 6] = a, mo[i + 14] = d, mo[i + 15] = So, o + Fi;
    }
  else {
    const a = n.left, d = n.right, f = n.splitAxis;
    let g;
    if (g = Na(o + Fi, a), g / 4 > Nv)
      throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");
    return Di[r + 6] = g / 4, g = Na(g, d), Di[r + 7] = f, g;
  }
}
function zv(o, n) {
  const r = (o.index ? o.index.count : o.attributes.position.count) / 3, i = r > 2 ** 16, l = i ? 4 : 2, u = n ? new SharedArrayBuffer(r * l) : new ArrayBuffer(r * l), a = i ? new Uint32Array(u) : new Uint16Array(u);
  for (let d = 0, f = a.length; d < f; d++)
    a[d] = d;
  return a;
}
function Ov(o, n, r, i, l) {
  const {
    maxDepth: u,
    verbose: a,
    maxLeafTris: d,
    strategy: f,
    onProgress: g,
    indirect: p
  } = l, h = o._indirectBuffer, v = o.geometry, x = v.index ? v.index.array : null, _ = p ? Rv : Lv, A = $r(v), T = new Float32Array(6);
  let S = !1;
  const w = new la();
  return oa(n, r, i, w.boundingData, T), P(w, r, i, T), w;
  function E(M) {
    g && g(M / A);
  }
  function P(M, L, R, z = null, D = 0) {
    if (!S && D >= u && (S = !0, a && (console.warn(`MeshBVH: Max depth of ${u} reached when generating BVH. Consider increasing maxDepth.`), console.warn(v))), R <= d || D >= u)
      return E(L + R), M.offset = L, M.count = R, M;
    const I = Cv(M.boundingData, z, n, L, R, f);
    if (I.axis === -1)
      return E(L + R), M.offset = L, M.count = R, M;
    const k = _(h, x, n, L, R, I);
    if (k === L || k === L + R)
      E(L + R), M.offset = L, M.count = R;
    else {
      M.splitAxis = I.axis;
      const j = new la(), G = L, Y = k - L;
      M.left = j, oa(n, G, Y, j.boundingData, T), P(j, G, Y, T, D + 1);
      const ee = new la(), ae = k, we = R - Y;
      M.right = ee, oa(n, ae, we, ee.boundingData, T), P(ee, ae, we, T, D + 1);
    }
    return M;
  }
}
function bv(o, n) {
  const r = o.geometry;
  n.indirect && (o._indirectBuffer = zv(r, n.useSharedArrayBuffer), Tv(r) && !n.verbose && console.warn(
    'MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.'
  )), o._indirectBuffer || Ev(r, n);
  const i = n.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, l = Av(r), u = n.indirect ? Dd(r) : kd(r);
  o._roots = u.map((a) => {
    const d = Ov(o, l, a.offset, a.count, n), f = Ra(d), g = new i(Fi * f);
    return Iv(0, d, g), g;
  });
}
class En {
  constructor() {
    this.min = 1 / 0, this.max = -1 / 0;
  }
  setFromPointsField(n, r) {
    let i = 1 / 0, l = -1 / 0;
    for (let u = 0, a = n.length; u < a; u++) {
      const f = n[u][r];
      i = f < i ? f : i, l = f > l ? f : l;
    }
    this.min = i, this.max = l;
  }
  setFromPoints(n, r) {
    let i = 1 / 0, l = -1 / 0;
    for (let u = 0, a = r.length; u < a; u++) {
      const d = r[u], f = n.dot(d);
      i = f < i ? f : i, l = f > l ? f : l;
    }
    this.min = i, this.max = l;
  }
  isSeparated(n) {
    return this.min > n.max || n.min > this.max;
  }
}
En.prototype.setFromBox = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(r, i) {
    const l = i.min, u = i.max;
    let a = 1 / 0, d = -1 / 0;
    for (let f = 0; f <= 1; f++)
      for (let g = 0; g <= 1; g++)
        for (let p = 0; p <= 1; p++) {
          o.x = l.x * f + u.x * (1 - f), o.y = l.y * g + u.y * (1 - g), o.z = l.z * p + u.z * (1 - p);
          const h = r.dot(o);
          a = Math.min(h, a), d = Math.max(h, d);
        }
    this.min = a, this.max = d;
  };
}();
const Dv = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(l, u, a) {
    const d = l.start, f = o, g = u.start, p = n;
    r.subVectors(d, g), o.subVectors(l.end, l.start), n.subVectors(u.end, u.start);
    const h = r.dot(p), v = p.dot(f), x = p.dot(p), _ = r.dot(f), T = f.dot(f) * x - v * v;
    let S, w;
    T !== 0 ? S = (h * v - _ * x) / T : S = 0, w = (h + S * v) / x, a.x = S, a.y = w;
  };
}(), Za = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(l, u, a, d) {
    Dv(l, u, o);
    let f = o.x, g = o.y;
    if (f >= 0 && f <= 1 && g >= 0 && g <= 1) {
      l.at(f, a), u.at(g, d);
      return;
    } else if (f >= 0 && f <= 1) {
      g < 0 ? u.at(0, d) : u.at(1, d), l.closestPointToPoint(d, !0, a);
      return;
    } else if (g >= 0 && g <= 1) {
      f < 0 ? l.at(0, a) : l.at(1, a), u.closestPointToPoint(a, !0, d);
      return;
    } else {
      let p;
      f < 0 ? p = l.start : p = l.end;
      let h;
      g < 0 ? h = u.start : h = u.end;
      const v = n, x = r;
      if (l.closestPointToPoint(h, !0, n), u.closestPointToPoint(p, !0, r), v.distanceToSquared(h) <= x.distanceToSquared(p)) {
        a.copy(v), d.copy(h);
        return;
      } else {
        a.copy(p), d.copy(x);
        return;
      }
    }
  };
}(), kv = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.t(), i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE();
  return function(u, a) {
    const { radius: d, center: f } = u, { a: g, b: p, c: h } = a;
    if (i.start = g, i.end = p, i.closestPointToPoint(f, !0, o).distanceTo(f) <= d || (i.start = g, i.end = h, i.closestPointToPoint(f, !0, o).distanceTo(f) <= d) || (i.start = p, i.end = h, i.closestPointToPoint(f, !0, o).distanceTo(f) <= d)) return !0;
    const A = a.getPlane(r);
    if (Math.abs(A.distanceToPoint(f)) <= d) {
      const S = A.projectPoint(f, n);
      if (a.containsPoint(S)) return !0;
    }
    return !1;
  };
}(), Fv = 1e-15;
function aa(o) {
  return Math.abs(o) < Fv;
}
class $t extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aG {
  constructor(...n) {
    super(...n), this.isExtendedTriangle = !0, this.satAxes = new Array(4).fill().map(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c()), this.satBounds = new Array(4).fill().map(() => new En()), this.points = [this.a, this.b, this.c], this.sphere = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av(), this.plane = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.t(), this.needsUpdate = !0;
  }
  intersectsSphere(n) {
    return kv(n, this);
  }
  update() {
    const n = this.a, r = this.b, i = this.c, l = this.points, u = this.satAxes, a = this.satBounds, d = u[0], f = a[0];
    this.getNormal(d), f.setFromPoints(d, l);
    const g = u[1], p = a[1];
    g.subVectors(n, r), p.setFromPoints(g, l);
    const h = u[2], v = a[2];
    h.subVectors(r, i), v.setFromPoints(h, l);
    const x = u[3], _ = a[3];
    x.subVectors(i, n), _.setFromPoints(x, l), this.sphere.setFromPoints(this.points), this.plane.setFromNormalAndCoplanarPoint(d, n), this.needsUpdate = !1;
  }
}
$t.prototype.closestPointToSegment = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE();
  return function(l, u = null, a = null) {
    const { start: d, end: f } = l, g = this.points;
    let p, h = 1 / 0;
    for (let v = 0; v < 3; v++) {
      const x = (v + 1) % 3;
      r.start.copy(g[v]), r.end.copy(g[x]), Za(r, l, o, n), p = o.distanceToSquared(n), p < h && (h = p, u && u.copy(o), a && a.copy(n));
    }
    return this.closestPointToPoint(d, o), p = d.distanceToSquared(o), p < h && (h = p, u && u.copy(o), a && a.copy(d)), this.closestPointToPoint(f, o), p = f.distanceToSquared(o), p < h && (h = p, u && u.copy(o), a && a.copy(f)), Math.sqrt(h);
  };
}();
$t.prototype.intersectsTriangle = function() {
  const o = new $t(), n = new Array(3), r = new Array(3), i = new En(), l = new En(), u = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), a = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), d = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE(), h = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE(), v = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE(), x = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  function _(A, T, S) {
    const w = A.points;
    let E = 0, P = -1;
    for (let M = 0; M < 3; M++) {
      const { start: L, end: R } = p;
      L.copy(w[M]), R.copy(w[(M + 1) % 3]), p.delta(a);
      const z = aa(T.distanceToPoint(L));
      if (aa(T.normal.dot(a)) && z) {
        S.copy(p), E = 2;
        break;
      }
      const D = T.intersectLine(p, x);
      if (!D && z && x.copy(L), (D || z) && !aa(x.distanceTo(R))) {
        if (E <= 1)
          (E === 1 ? S.start : S.end).copy(x), z && (P = E);
        else if (E >= 2) {
          (P === 1 ? S.start : S.end).copy(x), E = 2;
          break;
        }
        if (E++, E === 2 && P === -1)
          break;
      }
    }
    return E;
  }
  return function(T, S = null, w = !1) {
    this.needsUpdate && this.update(), T.isExtendedTriangle ? T.needsUpdate && T.update() : (o.copy(T), o.update(), T = o);
    const E = this.plane, P = T.plane;
    if (Math.abs(E.normal.dot(P.normal)) > 1 - 1e-10) {
      const M = this.satBounds, L = this.satAxes;
      r[0] = T.a, r[1] = T.b, r[2] = T.c;
      for (let D = 0; D < 4; D++) {
        const I = M[D], k = L[D];
        if (i.setFromPoints(k, r), I.isSeparated(i)) return !1;
      }
      const R = T.satBounds, z = T.satAxes;
      n[0] = this.a, n[1] = this.b, n[2] = this.c;
      for (let D = 0; D < 4; D++) {
        const I = R[D], k = z[D];
        if (i.setFromPoints(k, n), I.isSeparated(i)) return !1;
      }
      for (let D = 0; D < 4; D++) {
        const I = L[D];
        for (let k = 0; k < 4; k++) {
          const j = z[k];
          if (u.crossVectors(I, j), i.setFromPoints(u, n), l.setFromPoints(u, r), i.isSeparated(l)) return !1;
        }
      }
      return S && (w || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), S.start.set(0, 0, 0), S.end.set(0, 0, 0)), !0;
    } else {
      const M = _(this, P, h);
      if (M === 1 && T.containsPoint(h.end))
        return S && (S.start.copy(h.end), S.end.copy(h.end)), !0;
      if (M !== 2)
        return !1;
      const L = _(T, E, v);
      if (L === 1 && this.containsPoint(v.end))
        return S && (S.start.copy(v.end), S.end.copy(v.end)), !0;
      if (L !== 2)
        return !1;
      if (h.delta(d), v.delta(f), d.dot(f) < 0) {
        let G = v.start;
        v.start = v.end, v.end = G;
      }
      const R = h.start.dot(d), z = h.end.dot(d), D = v.start.dot(d), I = v.end.dot(d), k = z < D, j = R < I;
      return R !== I && D !== z && k === j ? !1 : (S && (g.subVectors(h.start, v.start), g.dot(d) > 0 ? S.start.copy(h.start) : S.start.copy(v.start), g.subVectors(h.end, v.end), g.dot(d) < 0 ? S.end.copy(h.end) : S.end.copy(v.end)), !0);
    }
  };
}();
$t.prototype.distanceToPoint = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(r) {
    return this.closestPointToPoint(r, o), r.distanceTo(o);
  };
}();
$t.prototype.distanceToTriangle = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r = ["a", "b", "c"], i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE(), l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE();
  return function(a, d = null, f = null) {
    const g = d || f ? i : null;
    if (this.intersectsTriangle(a, g))
      return (d || f) && (d && g.getCenter(d), f && g.getCenter(f)), 0;
    let p = 1 / 0;
    for (let h = 0; h < 3; h++) {
      let v;
      const x = r[h], _ = a[x];
      this.closestPointToPoint(_, o), v = _.distanceToSquared(o), v < p && (p = v, d && d.copy(o), f && f.copy(_));
      const A = this[x];
      a.closestPointToPoint(A, o), v = A.distanceToSquared(o), v < p && (p = v, d && d.copy(A), f && f.copy(o));
    }
    for (let h = 0; h < 3; h++) {
      const v = r[h], x = r[(h + 1) % 3];
      i.set(this[v], this[x]);
      for (let _ = 0; _ < 3; _++) {
        const A = r[_], T = r[(_ + 1) % 3];
        l.set(a[A], a[T]), Za(i, l, o, n);
        const S = o.distanceToSquared(n);
        S < p && (p = S, d && d.copy(o), f && f.copy(n));
      }
    }
    return Math.sqrt(p);
  };
}();
class gt {
  constructor(n, r, i) {
    this.isOrientedBox = !0, this.min = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), this.max = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), this.matrix = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), this.invMatrix = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), this.points = new Array(8).fill().map(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c()), this.satAxes = new Array(3).fill().map(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c()), this.satBounds = new Array(3).fill().map(() => new En()), this.alignedSatBounds = new Array(3).fill().map(() => new En()), this.needsUpdate = !1, n && this.min.copy(n), r && this.max.copy(r), i && this.matrix.copy(i);
  }
  set(n, r, i) {
    this.min.copy(n), this.max.copy(r), this.matrix.copy(i), this.needsUpdate = !0;
  }
  copy(n) {
    this.min.copy(n.min), this.max.copy(n.max), this.matrix.copy(n.matrix), this.needsUpdate = !0;
  }
}
gt.prototype.update = /* @__PURE__ */ function() {
  return function() {
    const n = this.matrix, r = this.min, i = this.max, l = this.points;
    for (let g = 0; g <= 1; g++)
      for (let p = 0; p <= 1; p++)
        for (let h = 0; h <= 1; h++) {
          const v = 1 * g | 2 * p | 4 * h, x = l[v];
          x.x = g ? i.x : r.x, x.y = p ? i.y : r.y, x.z = h ? i.z : r.z, x.applyMatrix4(n);
        }
    const u = this.satBounds, a = this.satAxes, d = l[0];
    for (let g = 0; g < 3; g++) {
      const p = a[g], h = u[g], v = 1 << g, x = l[v];
      p.subVectors(d, x), h.setFromPoints(p, l);
    }
    const f = this.alignedSatBounds;
    f[0].setFromPointsField(l, "x"), f[1].setFromPointsField(l, "y"), f[2].setFromPointsField(l, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
  };
}();
gt.prototype.intersectsBox = function() {
  const o = new En();
  return function(r) {
    this.needsUpdate && this.update();
    const i = r.min, l = r.max, u = this.satBounds, a = this.satAxes, d = this.alignedSatBounds;
    if (o.min = i.x, o.max = l.x, d[0].isSeparated(o) || (o.min = i.y, o.max = l.y, d[1].isSeparated(o)) || (o.min = i.z, o.max = l.z, d[2].isSeparated(o))) return !1;
    for (let f = 0; f < 3; f++) {
      const g = a[f], p = u[f];
      if (o.setFromBox(g, r), p.isSeparated(o)) return !1;
    }
    return !0;
  };
}();
gt.prototype.intersectsTriangle = function() {
  const o = new $t(), n = new Array(3), r = new En(), i = new En(), l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(a) {
    this.needsUpdate && this.update(), a.isExtendedTriangle ? a.needsUpdate && a.update() : (o.copy(a), o.update(), a = o);
    const d = this.satBounds, f = this.satAxes;
    n[0] = a.a, n[1] = a.b, n[2] = a.c;
    for (let v = 0; v < 3; v++) {
      const x = d[v], _ = f[v];
      if (r.setFromPoints(_, n), x.isSeparated(r)) return !1;
    }
    const g = a.satBounds, p = a.satAxes, h = this.points;
    for (let v = 0; v < 3; v++) {
      const x = g[v], _ = p[v];
      if (r.setFromPoints(_, h), x.isSeparated(r)) return !1;
    }
    for (let v = 0; v < 3; v++) {
      const x = f[v];
      for (let _ = 0; _ < 4; _++) {
        const A = p[_];
        if (l.crossVectors(x, A), r.setFromPoints(l, n), i.setFromPoints(l, h), r.isSeparated(i)) return !1;
      }
    }
    return !0;
  };
}();
gt.prototype.closestPointToPoint = /* @__PURE__ */ function() {
  return function(n, r) {
    return this.needsUpdate && this.update(), r.copy(n).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), r;
  };
}();
gt.prototype.distanceToPoint = function() {
  const o = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(r) {
    return this.closestPointToPoint(r, o), r.distanceTo(o);
  };
}();
gt.prototype.distanceToBox = function() {
  const o = ["x", "y", "z"], n = new Array(12).fill().map(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE()), r = new Array(12).fill().map(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aE()), i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), l = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
  return function(a, d = 0, f = null, g = null) {
    if (this.needsUpdate && this.update(), this.intersectsBox(a))
      return (f || g) && (a.getCenter(l), this.closestPointToPoint(l, i), a.closestPointToPoint(i, l), f && f.copy(i), g && g.copy(l)), 0;
    const p = d * d, h = a.min, v = a.max, x = this.points;
    let _ = 1 / 0;
    for (let T = 0; T < 8; T++) {
      const S = x[T];
      l.copy(S).clamp(h, v);
      const w = S.distanceToSquared(l);
      if (w < _ && (_ = w, f && f.copy(S), g && g.copy(l), w < p))
        return Math.sqrt(w);
    }
    let A = 0;
    for (let T = 0; T < 3; T++)
      for (let S = 0; S <= 1; S++)
        for (let w = 0; w <= 1; w++) {
          const E = (T + 1) % 3, P = (T + 2) % 3, M = S << E | w << P, L = 1 << T | S << E | w << P, R = x[M], z = x[L];
          n[A].set(R, z);
          const I = o[T], k = o[E], j = o[P], G = r[A], Y = G.start, ee = G.end;
          Y[I] = h[I], Y[k] = S ? h[k] : v[k], Y[j] = w ? h[j] : v[k], ee[I] = v[I], ee[k] = S ? h[k] : v[k], ee[j] = w ? h[j] : v[k], A++;
        }
    for (let T = 0; T <= 1; T++)
      for (let S = 0; S <= 1; S++)
        for (let w = 0; w <= 1; w++) {
          l.x = T ? v.x : h.x, l.y = S ? v.y : h.y, l.z = w ? v.z : h.z, this.closestPointToPoint(l, i);
          const E = l.distanceToSquared(i);
          if (E < _ && (_ = E, f && f.copy(i), g && g.copy(l), E < p))
            return Math.sqrt(E);
        }
    for (let T = 0; T < 12; T++) {
      const S = n[T];
      for (let w = 0; w < 12; w++) {
        const E = r[w];
        Za(S, E, i, l);
        const P = i.distanceToSquared(l);
        if (P < _ && (_ = P, f && f.copy(i), g && g.copy(l), P < p))
          return Math.sqrt(P);
      }
    }
    return Math.sqrt(_);
  };
}();
class Ja {
  constructor(n) {
    this._getNewPrimitive = n, this._primitives = [];
  }
  getPrimitive() {
    const n = this._primitives;
    return n.length === 0 ? this._getNewPrimitive() : n.pop();
  }
  releasePrimitive(n) {
    this._primitives.push(n);
  }
}
class Bv extends Ja {
  constructor() {
    super(() => new $t());
  }
}
const Wt = /* @__PURE__ */ new Bv();
class jv {
  constructor() {
    this.float32Array = null, this.uint16Array = null, this.uint32Array = null;
    const n = [];
    let r = null;
    this.setBuffer = (i) => {
      r && n.push(r), r = i, this.float32Array = new Float32Array(i), this.uint16Array = new Uint16Array(i), this.uint32Array = new Uint32Array(i);
    }, this.clearBuffer = () => {
      r = null, this.float32Array = null, this.uint16Array = null, this.uint32Array = null, n.length !== 0 && this.setBuffer(n.pop());
    };
  }
}
const Ne = new jv();
let Gn, Yr;
const zr = [], $s = /* @__PURE__ */ new Ja(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au());
function Uv(o, n, r, i, l, u) {
  Gn = $s.getPrimitive(), Yr = $s.getPrimitive(), zr.push(Gn, Yr), Ne.setBuffer(o._roots[n]);
  const a = Ia(0, o.geometry, r, i, l, u);
  Ne.clearBuffer(), $s.releasePrimitive(Gn), $s.releasePrimitive(Yr), zr.pop(), zr.pop();
  const d = zr.length;
  return d > 0 && (Yr = zr[d - 1], Gn = zr[d - 2]), a;
}
function Ia(o, n, r, i, l = null, u = 0, a = 0) {
  const { float32Array: d, uint16Array: f, uint32Array: g } = Ne;
  let p = o * 2;
  if (Tt(p, f)) {
    const v = Lt(o, g), x = Ht(p, f);
    return ke(o, d, Gn), i(v, x, !1, a, u + o, Gn);
  } else {
    let I = function(j) {
      const { uint16Array: G, uint32Array: Y } = Ne;
      let ee = j * 2;
      for (; !Tt(ee, G); )
        j = Vt(j), ee = j * 2;
      return Lt(j, Y);
    }, k = function(j) {
      const { uint16Array: G, uint32Array: Y } = Ne;
      let ee = j * 2;
      for (; !Tt(ee, G); )
        j = Gt(j, Y), ee = j * 2;
      return Lt(j, Y) + Ht(ee, G);
    };
    const v = Vt(o), x = Gt(o, g);
    let _ = v, A = x, T, S, w, E;
    if (l && (w = Gn, E = Yr, ke(_, d, w), ke(A, d, E), T = l(w), S = l(E), S < T)) {
      _ = x, A = v;
      const j = T;
      T = S, S = j, w = E;
    }
    w || (w = Gn, ke(_, d, w));
    const P = Tt(_ * 2, f), M = r(w, P, T, a + 1, u + _);
    let L;
    if (M === Rf) {
      const j = I(_), Y = k(_) - j;
      L = i(j, Y, !0, a + 1, u + _, w);
    } else
      L = M && Ia(
        _,
        n,
        r,
        i,
        l,
        u,
        a + 1
      );
    if (L) return !0;
    E = Yr, ke(A, d, E);
    const R = Tt(A * 2, f), z = r(E, R, S, a + 1, u + A);
    let D;
    if (z === Rf) {
      const j = I(A), Y = k(A) - j;
      D = i(j, Y, !0, a + 1, u + A, E);
    } else
      D = z && Ia(
        A,
        n,
        r,
        i,
        l,
        u,
        a + 1
      );
    return !!D;
  }
}
const Ri = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), ua = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function Hv(o, n, r = {}, i = 0, l = 1 / 0) {
  const u = i * i, a = l * l;
  let d = 1 / 0, f = null;
  if (o.shapecast(
    {
      boundsTraverseOrder: (p) => (Ri.copy(n).clamp(p.min, p.max), Ri.distanceToSquared(n)),
      intersectsBounds: (p, h, v) => v < d && v < a,
      intersectsTriangle: (p, h) => {
        p.closestPointToPoint(n, Ri);
        const v = n.distanceToSquared(Ri);
        return v < d && (ua.copy(Ri), d = v, f = h), v < u;
      }
    }
  ), d === 1 / 0) return null;
  const g = Math.sqrt(d);
  return r.point ? r.point.copy(ua) : r.point = ua.clone(), r.distance = g, r.faceIndex = f, r;
}
const Or = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), br = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), Dr = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), eo = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), to = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), no = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(), bf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), Df = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), kf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), ro = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function Vv(o, n, r, i, l, u) {
  let a;
  return u === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aH ? a = o.intersectTriangle(i, r, n, !0, l) : a = o.intersectTriangle(n, r, i, u !== _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a9, l), a === null ? null : {
    distance: o.origin.distanceTo(l),
    point: l.clone()
  };
}
function Gv(o, n, r, i, l, u, a, d, f) {
  Or.fromBufferAttribute(n, u), br.fromBufferAttribute(n, a), Dr.fromBufferAttribute(n, d);
  const g = Vv(o, Or, br, Dr, ro, f);
  if (g) {
    i && (eo.fromBufferAttribute(i, u), to.fromBufferAttribute(i, a), no.fromBufferAttribute(i, d), g.uv = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aG.getInterpolation(ro, Or, br, Dr, eo, to, no, new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d())), l && (eo.fromBufferAttribute(l, u), to.fromBufferAttribute(l, a), no.fromBufferAttribute(l, d), g.uv1 = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aG.getInterpolation(ro, Or, br, Dr, eo, to, no, new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d())), r && (bf.fromBufferAttribute(r, u), Df.fromBufferAttribute(r, a), kf.fromBufferAttribute(r, d), g.normal = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aG.getInterpolation(ro, Or, br, Dr, bf, Df, kf, new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c()), g.normal.dot(o.direction) > 0 && g.normal.multiplyScalar(-1));
    const p = {
      a: u,
      b: a,
      c: d,
      normal: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
      materialIndex: 0
    };
    _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aG.getNormal(Or, br, Dr, p.normal), g.face = p, g.faceIndex = u;
  }
  return g;
}
function wo(o, n, r, i, l) {
  const u = i * 3;
  let a = u + 0, d = u + 1, f = u + 2;
  const g = o.index;
  o.index && (a = g.getX(a), d = g.getX(d), f = g.getX(f));
  const { position: p, normal: h, uv: v, uv1: x } = o.attributes, _ = Gv(r, p, h, v, x, a, d, f, n);
  return _ ? (_.faceIndex = i, l && l.push(_), _) : null;
}
function Ke(o, n, r, i) {
  const l = o.a, u = o.b, a = o.c;
  let d = n, f = n + 1, g = n + 2;
  r && (d = r.getX(d), f = r.getX(f), g = r.getX(g)), l.x = i.getX(d), l.y = i.getY(d), l.z = i.getZ(d), u.x = i.getX(f), u.y = i.getY(f), u.z = i.getZ(f), a.x = i.getX(g), a.y = i.getY(g), a.z = i.getZ(g);
}
function Wv(o, n, r, i, l, u) {
  const { geometry: a, _indirectBuffer: d } = o;
  for (let f = i, g = i + l; f < g; f++)
    wo(a, n, r, f, u);
}
function Xv(o, n, r, i, l) {
  const { geometry: u, _indirectBuffer: a } = o;
  let d = 1 / 0, f = null;
  for (let g = i, p = i + l; g < p; g++) {
    let h;
    h = wo(u, n, r, g), h && h.distance < d && (f = h, d = h.distance);
  }
  return f;
}
function Kv(o, n, r, i, l, u, a) {
  const { geometry: d } = r, { index: f } = d, g = d.attributes.position;
  for (let p = o, h = n + o; p < h; p++) {
    let v;
    if (v = p, Ke(a, v * 3, f, g), a.needsUpdate = !0, i(a, v, l, u))
      return !0;
  }
  return !1;
}
function Yv(o, n = null) {
  n && Array.isArray(n) && (n = new Set(n));
  const r = o.geometry, i = r.index ? r.index.array : null, l = r.attributes.position;
  let u, a, d, f, g = 0;
  const p = o._roots;
  for (let v = 0, x = p.length; v < x; v++)
    u = p[v], a = new Uint32Array(u), d = new Uint16Array(u), f = new Float32Array(u), h(0, g), g += u.byteLength;
  function h(v, x, _ = !1) {
    const A = v * 2;
    if (d[A + 15] === So) {
      const S = a[v + 6], w = d[A + 14];
      let E = 1 / 0, P = 1 / 0, M = 1 / 0, L = -1 / 0, R = -1 / 0, z = -1 / 0;
      for (let D = 3 * S, I = 3 * (S + w); D < I; D++) {
        let k = i[D];
        const j = l.getX(k), G = l.getY(k), Y = l.getZ(k);
        j < E && (E = j), j > L && (L = j), G < P && (P = G), G > R && (R = G), Y < M && (M = Y), Y > z && (z = Y);
      }
      return f[v + 0] !== E || f[v + 1] !== P || f[v + 2] !== M || f[v + 3] !== L || f[v + 4] !== R || f[v + 5] !== z ? (f[v + 0] = E, f[v + 1] = P, f[v + 2] = M, f[v + 3] = L, f[v + 4] = R, f[v + 5] = z, !0) : !1;
    } else {
      const S = v + 8, w = a[v + 6], E = S + x, P = w + x;
      let M = _, L = !1, R = !1;
      n ? M || (L = n.has(E), R = n.has(P), M = !L && !R) : (L = !0, R = !0);
      const z = M || L, D = M || R;
      let I = !1;
      z && (I = h(S, x, M));
      let k = !1;
      D && (k = h(w, x, M));
      const j = I || k;
      if (j)
        for (let G = 0; G < 3; G++) {
          const Y = S + G, ee = w + G, ae = f[Y], we = f[Y + 3], W = f[ee], J = f[ee + 3];
          f[v + G] = ae < W ? ae : W, f[v + G + 3] = we > J ? we : J;
        }
      return j;
    }
  }
}
const Ff = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au();
function Kn(o, n, r, i) {
  return ke(o, n, Ff), r.intersectBox(Ff, i);
}
function qv(o, n, r, i, l, u) {
  const { geometry: a, _indirectBuffer: d } = o;
  for (let f = i, g = i + l; f < g; f++) {
    let p = d ? d[f] : f;
    wo(a, n, r, p, u);
  }
}
function Qv(o, n, r, i, l) {
  const { geometry: u, _indirectBuffer: a } = o;
  let d = 1 / 0, f = null;
  for (let g = i, p = i + l; g < p; g++) {
    let h;
    h = wo(u, n, r, a ? a[g] : g), h && h.distance < d && (f = h, d = h.distance);
  }
  return f;
}
function Zv(o, n, r, i, l, u, a) {
  const { geometry: d } = r, { index: f } = d, g = d.attributes.position;
  for (let p = o, h = n + o; p < h; p++) {
    let v;
    if (v = r.resolveTriangleIndex(p), Ke(a, v * 3, f, g), a.needsUpdate = !0, i(a, v, l, u))
      return !0;
  }
  return !1;
}
const Bf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function Jv(o, n, r, i, l) {
  Ne.setBuffer(o._roots[n]), za(0, o, r, i, l), Ne.clearBuffer();
}
function za(o, n, r, i, l) {
  const { float32Array: u, uint16Array: a, uint32Array: d } = Ne, f = o * 2;
  if (Tt(f, a)) {
    const p = Lt(o, d), h = Ht(f, a);
    Wv(n, r, i, p, h, l);
  } else {
    const p = Vt(o);
    Kn(p, u, i, Bf) && za(p, n, r, i, l);
    const h = Gt(o, d);
    Kn(h, u, i, Bf) && za(h, n, r, i, l);
  }
}
const jf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), $v = ["x", "y", "z"];
function e0(o, n, r, i) {
  Ne.setBuffer(o._roots[n]);
  const l = Oa(0, o, r, i);
  return Ne.clearBuffer(), l;
}
function Oa(o, n, r, i) {
  const { float32Array: l, uint16Array: u, uint32Array: a } = Ne;
  let d = o * 2;
  if (Tt(d, u)) {
    const g = Lt(o, a), p = Ht(d, u);
    return Xv(n, r, i, g, p);
  } else {
    const g = Fd(o, a), p = $v[g], v = i.direction[p] >= 0;
    let x, _;
    v ? (x = Vt(o), _ = Gt(o, a)) : (x = Gt(o, a), _ = Vt(o));
    const T = Kn(x, l, i, jf) ? Oa(x, n, r, i) : null;
    if (T) {
      const E = T.point[p];
      if (v ? E <= l[_ + g] : (
        // min bounding data
        E >= l[_ + g + 3]
      ))
        return T;
    }
    const w = Kn(_, l, i, jf) ? Oa(_, n, r, i) : null;
    return T && w ? T.distance <= w.distance ? T : w : T || w || null;
  }
}
const io = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), kr = /* @__PURE__ */ new $t(), Fr = /* @__PURE__ */ new $t(), Ni = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), Uf = /* @__PURE__ */ new gt(), so = /* @__PURE__ */ new gt();
function t0(o, n, r, i) {
  Ne.setBuffer(o._roots[n]);
  const l = ba(0, o, r, i);
  return Ne.clearBuffer(), l;
}
function ba(o, n, r, i, l = null) {
  const { float32Array: u, uint16Array: a, uint32Array: d } = Ne;
  let f = o * 2;
  if (l === null && (r.boundingBox || r.computeBoundingBox(), Uf.set(r.boundingBox.min, r.boundingBox.max, i), l = Uf), Tt(f, a)) {
    const p = n.geometry, h = p.index, v = p.attributes.position, x = r.index, _ = r.attributes.position, A = Lt(o, d), T = Ht(f, a);
    if (Ni.copy(i).invert(), r.boundsTree)
      return ke(o, u, so), so.matrix.copy(Ni), so.needsUpdate = !0, r.boundsTree.shapecast({
        intersectsBounds: (w) => so.intersectsBox(w),
        intersectsTriangle: (w) => {
          w.a.applyMatrix4(i), w.b.applyMatrix4(i), w.c.applyMatrix4(i), w.needsUpdate = !0;
          for (let E = A * 3, P = (T + A) * 3; E < P; E += 3)
            if (Ke(Fr, E, h, v), Fr.needsUpdate = !0, w.intersectsTriangle(Fr))
              return !0;
          return !1;
        }
      });
    for (let S = A * 3, w = (T + A) * 3; S < w; S += 3) {
      Ke(kr, S, h, v), kr.a.applyMatrix4(Ni), kr.b.applyMatrix4(Ni), kr.c.applyMatrix4(Ni), kr.needsUpdate = !0;
      for (let E = 0, P = x.count; E < P; E += 3)
        if (Ke(Fr, E, x, _), Fr.needsUpdate = !0, kr.intersectsTriangle(Fr))
          return !0;
    }
  } else {
    const p = o + 8, h = d[o + 6];
    return ke(p, u, io), !!(l.intersectsBox(io) && ba(p, n, r, i, l) || (ke(h, u, io), l.intersectsBox(io) && ba(h, n, r, i, l)));
  }
}
const oo = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), ca = /* @__PURE__ */ new gt(), Ii = /* @__PURE__ */ new gt(), n0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), r0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), i0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), s0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function o0(o, n, r, i = {}, l = {}, u = 0, a = 1 / 0) {
  n.boundingBox || n.computeBoundingBox(), ca.set(n.boundingBox.min, n.boundingBox.max, r), ca.needsUpdate = !0;
  const d = o.geometry, f = d.attributes.position, g = d.index, p = n.attributes.position, h = n.index, v = Wt.getPrimitive(), x = Wt.getPrimitive();
  let _ = n0, A = r0, T = null, S = null;
  l && (T = i0, S = s0);
  let w = 1 / 0, E = null, P = null;
  return oo.copy(r).invert(), Ii.matrix.copy(oo), o.shapecast(
    {
      boundsTraverseOrder: (M) => ca.distanceToBox(M),
      intersectsBounds: (M, L, R) => R < w && R < a ? (L && (Ii.min.copy(M.min), Ii.max.copy(M.max), Ii.needsUpdate = !0), !0) : !1,
      intersectsRange: (M, L) => {
        if (n.boundsTree)
          return n.boundsTree.shapecast({
            boundsTraverseOrder: (z) => Ii.distanceToBox(z),
            intersectsBounds: (z, D, I) => I < w && I < a,
            intersectsRange: (z, D) => {
              for (let I = z, k = z + D; I < k; I++) {
                Ke(x, 3 * I, h, p), x.a.applyMatrix4(r), x.b.applyMatrix4(r), x.c.applyMatrix4(r), x.needsUpdate = !0;
                for (let j = M, G = M + L; j < G; j++) {
                  Ke(v, 3 * j, g, f), v.needsUpdate = !0;
                  const Y = v.distanceToTriangle(x, _, T);
                  if (Y < w && (A.copy(_), S && S.copy(T), w = Y, E = j, P = I), Y < u)
                    return !0;
                }
              }
            }
          });
        {
          const R = $r(n);
          for (let z = 0, D = R; z < D; z++) {
            Ke(x, 3 * z, h, p), x.a.applyMatrix4(r), x.b.applyMatrix4(r), x.c.applyMatrix4(r), x.needsUpdate = !0;
            for (let I = M, k = M + L; I < k; I++) {
              Ke(v, 3 * I, g, f), v.needsUpdate = !0;
              const j = v.distanceToTriangle(x, _, T);
              if (j < w && (A.copy(_), S && S.copy(T), w = j, E = I, P = z), j < u)
                return !0;
            }
          }
        }
      }
    }
  ), Wt.releasePrimitive(v), Wt.releasePrimitive(x), w === 1 / 0 ? null : (i.point ? i.point.copy(A) : i.point = A.clone(), i.distance = w, i.faceIndex = E, l && (l.point ? l.point.copy(S) : l.point = S.clone(), l.point.applyMatrix4(oo), A.applyMatrix4(oo), l.distance = A.sub(l.point).length(), l.faceIndex = P), i);
}
function l0(o, n = null) {
  n && Array.isArray(n) && (n = new Set(n));
  const r = o.geometry, i = r.index ? r.index.array : null, l = r.attributes.position;
  let u, a, d, f, g = 0;
  const p = o._roots;
  for (let v = 0, x = p.length; v < x; v++)
    u = p[v], a = new Uint32Array(u), d = new Uint16Array(u), f = new Float32Array(u), h(0, g), g += u.byteLength;
  function h(v, x, _ = !1) {
    const A = v * 2;
    if (d[A + 15] === So) {
      const S = a[v + 6], w = d[A + 14];
      let E = 1 / 0, P = 1 / 0, M = 1 / 0, L = -1 / 0, R = -1 / 0, z = -1 / 0;
      for (let D = S, I = S + w; D < I; D++) {
        const k = 3 * o.resolveTriangleIndex(D);
        for (let j = 0; j < 3; j++) {
          let G = k + j;
          G = i ? i[G] : G;
          const Y = l.getX(G), ee = l.getY(G), ae = l.getZ(G);
          Y < E && (E = Y), Y > L && (L = Y), ee < P && (P = ee), ee > R && (R = ee), ae < M && (M = ae), ae > z && (z = ae);
        }
      }
      return f[v + 0] !== E || f[v + 1] !== P || f[v + 2] !== M || f[v + 3] !== L || f[v + 4] !== R || f[v + 5] !== z ? (f[v + 0] = E, f[v + 1] = P, f[v + 2] = M, f[v + 3] = L, f[v + 4] = R, f[v + 5] = z, !0) : !1;
    } else {
      const S = v + 8, w = a[v + 6], E = S + x, P = w + x;
      let M = _, L = !1, R = !1;
      n ? M || (L = n.has(E), R = n.has(P), M = !L && !R) : (L = !0, R = !0);
      const z = M || L, D = M || R;
      let I = !1;
      z && (I = h(S, x, M));
      let k = !1;
      D && (k = h(w, x, M));
      const j = I || k;
      if (j)
        for (let G = 0; G < 3; G++) {
          const Y = S + G, ee = w + G, ae = f[Y], we = f[Y + 3], W = f[ee], J = f[ee + 3];
          f[v + G] = ae < W ? ae : W, f[v + G + 3] = we > J ? we : J;
        }
      return j;
    }
  }
}
const Hf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function a0(o, n, r, i, l) {
  Ne.setBuffer(o._roots[n]), Da(0, o, r, i, l), Ne.clearBuffer();
}
function Da(o, n, r, i, l) {
  const { float32Array: u, uint16Array: a, uint32Array: d } = Ne, f = o * 2;
  if (Tt(f, a)) {
    const p = Lt(o, d), h = Ht(f, a);
    qv(n, r, i, p, h, l);
  } else {
    const p = Vt(o);
    Kn(p, u, i, Hf) && Da(p, n, r, i, l);
    const h = Gt(o, d);
    Kn(h, u, i, Hf) && Da(h, n, r, i, l);
  }
}
const Vf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), u0 = ["x", "y", "z"];
function c0(o, n, r, i) {
  Ne.setBuffer(o._roots[n]);
  const l = ka(0, o, r, i);
  return Ne.clearBuffer(), l;
}
function ka(o, n, r, i) {
  const { float32Array: l, uint16Array: u, uint32Array: a } = Ne;
  let d = o * 2;
  if (Tt(d, u)) {
    const g = Lt(o, a), p = Ht(d, u);
    return Qv(n, r, i, g, p);
  } else {
    const g = Fd(o, a), p = u0[g], v = i.direction[p] >= 0;
    let x, _;
    v ? (x = Vt(o), _ = Gt(o, a)) : (x = Gt(o, a), _ = Vt(o));
    const T = Kn(x, l, i, Vf) ? ka(x, n, r, i) : null;
    if (T) {
      const E = T.point[p];
      if (v ? E <= l[_ + g] : (
        // min bounding data
        E >= l[_ + g + 3]
      ))
        return T;
    }
    const w = Kn(_, l, i, Vf) ? ka(_, n, r, i) : null;
    return T && w ? T.distance <= w.distance ? T : w : T || w || null;
  }
}
const lo = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), Br = /* @__PURE__ */ new $t(), jr = /* @__PURE__ */ new $t(), zi = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), Gf = /* @__PURE__ */ new gt(), ao = /* @__PURE__ */ new gt();
function f0(o, n, r, i) {
  Ne.setBuffer(o._roots[n]);
  const l = Fa(0, o, r, i);
  return Ne.clearBuffer(), l;
}
function Fa(o, n, r, i, l = null) {
  const { float32Array: u, uint16Array: a, uint32Array: d } = Ne;
  let f = o * 2;
  if (l === null && (r.boundingBox || r.computeBoundingBox(), Gf.set(r.boundingBox.min, r.boundingBox.max, i), l = Gf), Tt(f, a)) {
    const p = n.geometry, h = p.index, v = p.attributes.position, x = r.index, _ = r.attributes.position, A = Lt(o, d), T = Ht(f, a);
    if (zi.copy(i).invert(), r.boundsTree)
      return ke(o, u, ao), ao.matrix.copy(zi), ao.needsUpdate = !0, r.boundsTree.shapecast({
        intersectsBounds: (w) => ao.intersectsBox(w),
        intersectsTriangle: (w) => {
          w.a.applyMatrix4(i), w.b.applyMatrix4(i), w.c.applyMatrix4(i), w.needsUpdate = !0;
          for (let E = A, P = T + A; E < P; E++)
            if (Ke(jr, 3 * n.resolveTriangleIndex(E), h, v), jr.needsUpdate = !0, w.intersectsTriangle(jr))
              return !0;
          return !1;
        }
      });
    for (let S = A, w = T + A; S < w; S++) {
      const E = n.resolveTriangleIndex(S);
      Ke(Br, 3 * E, h, v), Br.a.applyMatrix4(zi), Br.b.applyMatrix4(zi), Br.c.applyMatrix4(zi), Br.needsUpdate = !0;
      for (let P = 0, M = x.count; P < M; P += 3)
        if (Ke(jr, P, x, _), jr.needsUpdate = !0, Br.intersectsTriangle(jr))
          return !0;
    }
  } else {
    const p = o + 8, h = d[o + 6];
    return ke(p, u, lo), !!(l.intersectsBox(lo) && Fa(p, n, r, i, l) || (ke(h, u, lo), l.intersectsBox(lo) && Fa(h, n, r, i, l)));
  }
}
const uo = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), fa = /* @__PURE__ */ new gt(), Oi = /* @__PURE__ */ new gt(), d0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), p0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), h0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), m0 = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c();
function g0(o, n, r, i = {}, l = {}, u = 0, a = 1 / 0) {
  n.boundingBox || n.computeBoundingBox(), fa.set(n.boundingBox.min, n.boundingBox.max, r), fa.needsUpdate = !0;
  const d = o.geometry, f = d.attributes.position, g = d.index, p = n.attributes.position, h = n.index, v = Wt.getPrimitive(), x = Wt.getPrimitive();
  let _ = d0, A = p0, T = null, S = null;
  l && (T = h0, S = m0);
  let w = 1 / 0, E = null, P = null;
  return uo.copy(r).invert(), Oi.matrix.copy(uo), o.shapecast(
    {
      boundsTraverseOrder: (M) => fa.distanceToBox(M),
      intersectsBounds: (M, L, R) => R < w && R < a ? (L && (Oi.min.copy(M.min), Oi.max.copy(M.max), Oi.needsUpdate = !0), !0) : !1,
      intersectsRange: (M, L) => {
        if (n.boundsTree) {
          const R = n.boundsTree;
          return R.shapecast({
            boundsTraverseOrder: (z) => Oi.distanceToBox(z),
            intersectsBounds: (z, D, I) => I < w && I < a,
            intersectsRange: (z, D) => {
              for (let I = z, k = z + D; I < k; I++) {
                const j = R.resolveTriangleIndex(I);
                Ke(x, 3 * j, h, p), x.a.applyMatrix4(r), x.b.applyMatrix4(r), x.c.applyMatrix4(r), x.needsUpdate = !0;
                for (let G = M, Y = M + L; G < Y; G++) {
                  const ee = o.resolveTriangleIndex(G);
                  Ke(v, 3 * ee, g, f), v.needsUpdate = !0;
                  const ae = v.distanceToTriangle(x, _, T);
                  if (ae < w && (A.copy(_), S && S.copy(T), w = ae, E = G, P = I), ae < u)
                    return !0;
                }
              }
            }
          });
        } else {
          const R = $r(n);
          for (let z = 0, D = R; z < D; z++) {
            Ke(x, 3 * z, h, p), x.a.applyMatrix4(r), x.b.applyMatrix4(r), x.c.applyMatrix4(r), x.needsUpdate = !0;
            for (let I = M, k = M + L; I < k; I++) {
              const j = o.resolveTriangleIndex(I);
              Ke(v, 3 * j, g, f), v.needsUpdate = !0;
              const G = v.distanceToTriangle(x, _, T);
              if (G < w && (A.copy(_), S && S.copy(T), w = G, E = I, P = z), G < u)
                return !0;
            }
          }
        }
      }
    }
  ), Wt.releasePrimitive(v), Wt.releasePrimitive(x), w === 1 / 0 ? null : (i.point ? i.point.copy(A) : i.point = A.clone(), i.distance = w, i.faceIndex = E, l && (l.point ? l.point.copy(S) : l.point = S.clone(), l.point.applyMatrix4(uo), A.applyMatrix4(uo), l.distance = A.sub(l.point).length(), l.faceIndex = P), i);
}
function v0() {
  return typeof SharedArrayBuffer < "u";
}
const Bi = new Ne.constructor(), yo = new Ne.constructor(), Vn = new Ja(() => new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au()), Ur = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), Hr = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), da = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), pa = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au();
let ha = !1;
function y0(o, n, r, i) {
  if (ha)
    throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
  ha = !0;
  const l = o._roots, u = n._roots;
  let a, d = 0, f = 0;
  const g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k().copy(r).invert();
  for (let p = 0, h = l.length; p < h; p++) {
    Bi.setBuffer(l[p]), f = 0;
    const v = Vn.getPrimitive();
    ke(0, Bi.float32Array, v), v.applyMatrix4(g);
    for (let x = 0, _ = u.length; x < _ && (yo.setBuffer(u[p]), a = Jt(
      0,
      0,
      r,
      g,
      i,
      d,
      f,
      0,
      0,
      v
    ), yo.clearBuffer(), f += u[x].length, !a); x++)
      ;
    if (Vn.releasePrimitive(v), Bi.clearBuffer(), d += l[p].length, a)
      break;
  }
  return ha = !1, a;
}
function Jt(o, n, r, i, l, u = 0, a = 0, d = 0, f = 0, g = null, p = !1) {
  let h, v;
  p ? (h = yo, v = Bi) : (h = Bi, v = yo);
  const x = h.float32Array, _ = h.uint32Array, A = h.uint16Array, T = v.float32Array, S = v.uint32Array, w = v.uint16Array, E = o * 2, P = n * 2, M = Tt(E, A), L = Tt(P, w);
  let R = !1;
  if (L && M)
    p ? R = l(
      Lt(n, S),
      Ht(n * 2, w),
      Lt(o, _),
      Ht(o * 2, A),
      f,
      a + n,
      d,
      u + o
    ) : R = l(
      Lt(o, _),
      Ht(o * 2, A),
      Lt(n, S),
      Ht(n * 2, w),
      d,
      u + o,
      f,
      a + n
    );
  else if (L) {
    const z = Vn.getPrimitive();
    ke(n, T, z), z.applyMatrix4(r);
    const D = Vt(o), I = Gt(o, _);
    ke(D, x, Ur), ke(I, x, Hr);
    const k = z.intersectsBox(Ur), j = z.intersectsBox(Hr);
    R = k && Jt(
      n,
      D,
      i,
      r,
      l,
      a,
      u,
      f,
      d + 1,
      z,
      !p
    ) || j && Jt(
      n,
      I,
      i,
      r,
      l,
      a,
      u,
      f,
      d + 1,
      z,
      !p
    ), Vn.releasePrimitive(z);
  } else {
    const z = Vt(n), D = Gt(n, S);
    ke(z, T, da), ke(D, T, pa);
    const I = g.intersectsBox(da), k = g.intersectsBox(pa);
    if (I && k)
      R = Jt(
        o,
        z,
        r,
        i,
        l,
        u,
        a,
        d,
        f + 1,
        g,
        p
      ) || Jt(
        o,
        D,
        r,
        i,
        l,
        u,
        a,
        d,
        f + 1,
        g,
        p
      );
    else if (I)
      if (M)
        R = Jt(
          o,
          z,
          r,
          i,
          l,
          u,
          a,
          d,
          f + 1,
          g,
          p
        );
      else {
        const j = Vn.getPrimitive();
        j.copy(da).applyMatrix4(r);
        const G = Vt(o), Y = Gt(o, _);
        ke(G, x, Ur), ke(Y, x, Hr);
        const ee = j.intersectsBox(Ur), ae = j.intersectsBox(Hr);
        R = ee && Jt(
          z,
          G,
          i,
          r,
          l,
          a,
          u,
          f,
          d + 1,
          j,
          !p
        ) || ae && Jt(
          z,
          Y,
          i,
          r,
          l,
          a,
          u,
          f,
          d + 1,
          j,
          !p
        ), Vn.releasePrimitive(j);
      }
    else if (k)
      if (M)
        R = Jt(
          o,
          D,
          r,
          i,
          l,
          u,
          a,
          d,
          f + 1,
          g,
          p
        );
      else {
        const j = Vn.getPrimitive();
        j.copy(pa).applyMatrix4(r);
        const G = Vt(o), Y = Gt(o, _);
        ke(G, x, Ur), ke(Y, x, Hr);
        const ee = j.intersectsBox(Ur), ae = j.intersectsBox(Hr);
        R = ee && Jt(
          D,
          G,
          i,
          r,
          l,
          a,
          u,
          f,
          d + 1,
          j,
          !p
        ) || ae && Jt(
          D,
          Y,
          i,
          r,
          l,
          a,
          u,
          f,
          d + 1,
          j,
          !p
        ), Vn.releasePrimitive(j);
      }
  }
  return R;
}
const co = /* @__PURE__ */ new gt(), Wf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au(), x0 = {
  strategy: Od,
  maxDepth: 40,
  maxLeafTris: 10,
  useSharedArrayBuffer: !1,
  setBoundingBox: !0,
  onProgress: null,
  indirect: !1,
  verbose: !0
};
class $a {
  static serialize(n, r = {}) {
    r = {
      cloneBuffers: !0,
      ...r
    };
    const i = n.geometry, l = n._roots, u = n._indirectBuffer, a = i.getIndex();
    let d;
    return r.cloneBuffers ? d = {
      roots: l.map((f) => f.slice()),
      index: a.array.slice(),
      indirectBuffer: u ? u.slice() : null
    } : d = {
      roots: l,
      index: a.array,
      indirectBuffer: u
    }, d;
  }
  static deserialize(n, r, i = {}) {
    i = {
      setIndex: !0,
      indirect: !!n.indirectBuffer,
      ...i
    };
    const { index: l, roots: u, indirectBuffer: a } = n, d = new $a(r, { ...i, [sa]: !0 });
    if (d._roots = u, d._indirectBuffer = a || null, i.setIndex) {
      const f = r.getIndex();
      if (f === null) {
        const g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.K(n.index, 1, !1);
        r.setIndex(g);
      } else f.array !== l && (f.array.set(l), f.needsUpdate = !0);
    }
    return d;
  }
  get indirect() {
    return !!this._indirectBuffer;
  }
  constructor(n, r = {}) {
    if (n.isBufferGeometry) {
      if (n.index && n.index.isInterleavedBufferAttribute)
        throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.");
    } else throw new Error("MeshBVH: Only BufferGeometries are supported.");
    if (r = Object.assign({
      ...x0,
      // undocumented options
      // Whether to skip generating the tree. Used for deserialization.
      [sa]: !1
    }, r), r.useSharedArrayBuffer && !v0())
      throw new Error("MeshBVH: SharedArrayBuffer is not available.");
    this.geometry = n, this._roots = null, this._indirectBuffer = null, r[sa] || (bv(this, r), !n.boundingBox && r.setBoundingBox && (n.boundingBox = this.getBoundingBox(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au())));
    const { _indirectBuffer: i } = this;
    this.resolveTriangleIndex = r.indirect ? (l) => i[l] : (l) => l;
  }
  refit(n = null) {
    return (this.indirect ? l0 : Yv)(this, n);
  }
  traverse(n, r = 0) {
    const i = this._roots[r], l = new Uint32Array(i), u = new Uint16Array(i);
    a(0);
    function a(d, f = 0) {
      const g = d * 2, p = u[g + 15] === So;
      if (p) {
        const h = l[d + 6], v = u[g + 14];
        n(f, p, new Float32Array(i, d * 4, 6), h, v);
      } else {
        const h = d + Fi / 4, v = l[d + 6], x = l[d + 7];
        n(f, p, new Float32Array(i, d * 4, 6), x) || (a(h, f + 1), a(v, f + 1));
      }
    }
  }
  /* Core Cast Functions */
  raycast(n, r = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as) {
    const i = this._roots, l = this.geometry, u = [], a = r.isMaterial, d = Array.isArray(r), f = l.groups, g = a ? r.side : r, p = this.indirect ? a0 : Jv;
    for (let h = 0, v = i.length; h < v; h++) {
      const x = d ? r[f[h].materialIndex].side : g, _ = u.length;
      if (p(this, h, x, n, u), d) {
        const A = f[h].materialIndex;
        for (let T = _, S = u.length; T < S; T++)
          u[T].face.materialIndex = A;
      }
    }
    return u;
  }
  raycastFirst(n, r = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as) {
    const i = this._roots, l = this.geometry, u = r.isMaterial, a = Array.isArray(r);
    let d = null;
    const f = l.groups, g = u ? r.side : r, p = this.indirect ? c0 : e0;
    for (let h = 0, v = i.length; h < v; h++) {
      const x = a ? r[f[h].materialIndex].side : g, _ = p(this, h, x, n);
      _ != null && (d == null || _.distance < d.distance) && (d = _, a && (_.face.materialIndex = f[h].materialIndex));
    }
    return d;
  }
  intersectsGeometry(n, r) {
    let i = !1;
    const l = this._roots, u = this.indirect ? f0 : t0;
    for (let a = 0, d = l.length; a < d && (i = u(this, a, n, r), !i); a++)
      ;
    return i;
  }
  shapecast(n) {
    const r = Wt.getPrimitive(), i = this.indirect ? Zv : Kv;
    let {
      boundsTraverseOrder: l,
      intersectsBounds: u,
      intersectsRange: a,
      intersectsTriangle: d
    } = n;
    if (a && d) {
      const h = a;
      a = (v, x, _, A, T) => h(v, x, _, A, T) ? !0 : i(v, x, this, d, _, A, r);
    } else a || (d ? a = (h, v, x, _) => i(h, v, this, d, x, _, r) : a = (h, v, x) => x);
    let f = !1, g = 0;
    const p = this._roots;
    for (let h = 0, v = p.length; h < v; h++) {
      const x = p[h];
      if (f = Uv(this, h, u, a, l, g), f)
        break;
      g += x.byteLength;
    }
    return Wt.releasePrimitive(r), f;
  }
  bvhcast(n, r, i) {
    let {
      intersectsRanges: l,
      intersectsTriangles: u
    } = i;
    const a = Wt.getPrimitive(), d = this.geometry.index, f = this.geometry.attributes.position, g = this.indirect ? (_) => {
      const A = this.resolveTriangleIndex(_);
      Ke(a, A * 3, d, f);
    } : (_) => {
      Ke(a, _ * 3, d, f);
    }, p = Wt.getPrimitive(), h = n.geometry.index, v = n.geometry.attributes.position, x = n.indirect ? (_) => {
      const A = n.resolveTriangleIndex(_);
      Ke(p, A * 3, h, v);
    } : (_) => {
      Ke(p, _ * 3, h, v);
    };
    if (u) {
      const _ = (A, T, S, w, E, P, M, L) => {
        for (let R = S, z = S + w; R < z; R++) {
          x(R), p.a.applyMatrix4(r), p.b.applyMatrix4(r), p.c.applyMatrix4(r), p.needsUpdate = !0;
          for (let D = A, I = A + T; D < I; D++)
            if (g(D), a.needsUpdate = !0, u(a, p, D, R, E, P, M, L))
              return !0;
        }
        return !1;
      };
      if (l) {
        const A = l;
        l = function(T, S, w, E, P, M, L, R) {
          return A(T, S, w, E, P, M, L, R) ? !0 : _(T, S, w, E, P, M, L, R);
        };
      } else
        l = _;
    }
    return y0(this, n, r, l);
  }
  /* Derived Cast Functions */
  intersectsBox(n, r) {
    return co.set(n.min, n.max, r), co.needsUpdate = !0, this.shapecast(
      {
        intersectsBounds: (i) => co.intersectsBox(i),
        intersectsTriangle: (i) => co.intersectsTriangle(i)
      }
    );
  }
  intersectsSphere(n) {
    return this.shapecast(
      {
        intersectsBounds: (r) => n.intersectsBox(r),
        intersectsTriangle: (r) => r.intersectsSphere(n)
      }
    );
  }
  closestPointToGeometry(n, r, i = {}, l = {}, u = 0, a = 1 / 0) {
    return (this.indirect ? g0 : o0)(
      this,
      n,
      r,
      i,
      l,
      u,
      a
    );
  }
  closestPointToPoint(n, r = {}, i = 0, l = 1 / 0) {
    return Hv(
      this,
      n,
      r,
      i,
      l
    );
  }
  getBoundingBox(n) {
    return n.makeEmpty(), this._roots.forEach((i) => {
      ke(0, new Float32Array(i), Wf), n.union(Wf);
    }), n;
  }
}
function Xf(o, n, r) {
  return o === null || (o.point.applyMatrix4(n.matrixWorld), o.distance = o.point.distanceTo(r.ray.origin), o.object = n, o.distance < r.near || o.distance > r.far) ? null : o;
}
const ma = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.s(), Kf = /* @__PURE__ */ new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k(), S0 = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad.prototype.raycast;
function w0(o, n) {
  if (this.geometry.boundsTree) {
    if (this.material === void 0) return;
    Kf.copy(this.matrixWorld).invert(), ma.copy(o.ray).applyMatrix4(Kf);
    const r = this.geometry.boundsTree;
    if (o.firstHitOnly === !0) {
      const i = Xf(r.raycastFirst(ma, this.material), this, o);
      i && n.push(i);
    } else {
      const i = r.raycast(ma, this.material);
      for (let l = 0, u = i.length; l < u; l++) {
        const a = Xf(i[l], this, o);
        a && n.push(a);
      }
    }
  } else
    S0.call(this, o, n);
}
function _0(o) {
  return this.boundsTree = new $a(this, o), this.boundsTree;
}
function E0() {
  this.boundsTree = null;
}
const Yf = (o) => o.isMesh, T0 = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  enabled: o = !0,
  firstHitOnly: n = !1,
  children: r,
  strategy: i = bd,
  verbose: l = !1,
  setBoundingBox: u = !0,
  maxDepth: a = 40,
  maxLeafTris: d = 10,
  indirect: f = !1,
  ...g
}, p) => {
  const h = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), v = rt((x) => x.raycaster);
  return react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(p, () => h.current, []), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (o) {
      const x = {
        strategy: i,
        verbose: l,
        setBoundingBox: u,
        maxDepth: a,
        maxLeafTris: d,
        indirect: f
      }, _ = h.current;
      return v.firstHitOnly = n, _.traverse((A) => {
        Yf(A) && !A.geometry.boundsTree && A.raycast === _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad.prototype.raycast && (A.raycast = w0, A.geometry.computeBoundsTree = _0, A.geometry.disposeBoundsTree = E0, A.geometry.computeBoundsTree(x));
      }), () => {
        delete v.firstHitOnly, _.traverse((A) => {
          Yf(A) && A.geometry.boundsTree && (A.geometry.disposeBoundsTree(), A.raycast = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.ad.prototype.raycast);
        });
      };
    }
  }, []), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("group", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    ref: h
  }, g), r);
}), A0 = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({
  children: n,
  disable: r,
  disableX: i,
  disableY: l,
  disableZ: u,
  left: a,
  right: d,
  top: f,
  bottom: g,
  front: p,
  back: h,
  onCentered: v,
  precise: x = !0,
  cacheKey: _ = 0,
  ...A
}, T) {
  const S = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), w = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), E = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    w.current.matrixWorld.identity();
    const P = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au().setFromObject(E.current, x), M = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), L = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.av(), R = P.max.x - P.min.x, z = P.max.y - P.min.y, D = P.max.z - P.min.z;
    P.getCenter(M), P.getBoundingSphere(L);
    const I = f ? z / 2 : g ? -z / 2 : 0, k = a ? -R / 2 : d ? R / 2 : 0, j = p ? D / 2 : h ? -D / 2 : 0;
    w.current.position.set(r || i ? 0 : -M.x + k, r || l ? 0 : -M.y + I, r || u ? 0 : -M.z + j), typeof v < "u" && v({
      parent: S.current.parent,
      container: S.current,
      width: R,
      height: z,
      depth: D,
      boundingBox: P,
      boundingSphere: L,
      center: M,
      verticalAlignment: I,
      horizontalAlignment: k,
      depthAlignment: j
    });
  }, [_, v, f, a, p, r, i, l, u, x, d, g, h]), react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(T, () => S.current, []), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("group", (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__._)({
    ref: S
  }, A), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("group", {
    ref: w
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("group", {
    ref: E
  }, n)));
});
function P0() {
  const { controllers: o } = Ue(), n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(), r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return dr(() => {
    if (o && o[0] && o[1]) {
      if (o[0].controller) {
        const i = o[0].hand.joints["index-finger-tip"].position;
        n.current.position.copy(i);
      }
      if (o[1].controller) {
        const i = o[1].hand.joints["index-finger-tip"].position;
        r.current.position.copy(i);
      }
    }
  }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs(_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.Fragment, { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("mesh", { name: "leftTipBbox", ref: r, children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("boxGeometry", { args: [0.02, 0.02, 0.02] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("meshStandardMaterial", { color: "blue", transparent: !0, opacity: 0 })] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("mesh", { name: "rightTipBbox", ref: n, children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("boxGeometry", { args: [0.02, 0.02, 0.02] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("meshStandardMaterial", { color: "orange", transparent: !0, opacity: 0 })] })] });
}
function ga(o) {
  const { currentLine: n, scale: r } = o, i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(A0, { bottom: !0, right: !0, position: [n.midPoint.x, n.midPoint.y, n.midPoint.z], rotation: [0, 0, 0], children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(zd, { color: "gray", scale: 0.05, ref: i, children: `${(n.startPoint.distanceTo(n.endPoint) * r).toFixed(2)} µm` }) }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(vv, {
    points: [n.startPoint, n.endPoint],
    color: "white",
    lineWidth: 2,
    dashed: !1,
    segments: !0
  })] });
}
function C0(o) {
  const { segmentationGroup: n, segmentationSettings: r, segmentationSceneScale: i, renderingSettings: l, materialRef: u, highlightEntity: a, setObsHighlight: d } = o, f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(), g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(), p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(), { isPresenting: h } = Ue();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    h && f?.current ? u !== null && (u.current.material.uniforms.u_physical_Pixel.value = 0.2) : h || u !== null && (u.current.material.uniforms.u_physical_Pixel.value = 2.5);
  }, [h]);
  const { scene: v } = rt(), { controllers: x } = Ue(), [_, A] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1), [T, S] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1), [w, E] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1), [P, M] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    startPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
    midPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
    endPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
    setStartPoint: !1,
    setEndPoint: !1
  }), [L, R] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), [z, D] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return dr(() => {
    if (h) {
      const I = v.getObjectByName("rightTipBbox"), k = v.getObjectByName("leftTipBbox"), j = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au().setFromObject(k), G = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au().setFromObject(I);
      let Y = !1;
      if (D(z - 1), j.intersectsBox(G) && j.max.x !== -G.min.x && (A(!0), E(!0), M({
        startPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
        midPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
        endPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(),
        setStartPoint: !1,
        setEndPoint: !1
      })), _) {
        let ee = x[1].hand.joints["index-finger-tip"].position.clone(), ae = x[0].hand.joints["index-finger-tip"].position.clone();
        ee = ee.applyMatrix4(p.current.matrixWorld.clone().invert()), ae = ae.applyMatrix4(p.current.matrixWorld.clone().invert());
        let we = ee.clone(), W = ae.clone();
        P.setStartPoint && (we = P.startPoint), P.setEndPoint && (W = P.endPoint), M({
          startPoint: we,
          midPoint: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c().addVectors(we, W).multiplyScalar(0.5),
          endPoint: W,
          setStartPoint: P.setStartPoint,
          setEndPoint: P.setEndPoint
        }), x[0].hand.inputState.pinching === !0 && M({
          startPoint: P.startPoint,
          midPoint: P.midPoint,
          endPoint: P.endPoint,
          setStartPoint: P.setStartPoint,
          setEndPoint: !0
        }), x[1].hand.inputState.pinching === !0 && M({
          startPoint: P.startPoint,
          midPoint: P.midPoint,
          endPoint: P.endPoint,
          setStartPoint: !0,
          setEndPoint: P.setEndPoint
        }), P.setStartPoint && P.setEndPoint && (L.push(P), R(L), E(!1), A(!1), D(8));
      } else z <= 0 && f?.current && h && (f.current.children[0].children.forEach((ee, ae) => {
        const we = f.current.children[0].children[ae], W = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.au().setFromObject(we), J = j.intersectsBox(W), Z = G.intersectsBox(W);
        (J || Z) && (Y = !0, d(we.name), S(!0), x[1] !== void 0 && J && x[1].hand.inputState.pinching === !0 && (D(10), Y = !1, x[1].hand.inputState.pinching = !1), x[0] !== void 0 && Z && x[0].hand.inputState.pinching === !0 && (D(10), Y = !1, x[0].hand.inputState.pinching = !1));
      }), !Y && T && (d(null), S(!1)));
    }
  }, [_, T, P, L, w, z, h]), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { children: Ue().isPresenting ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs(Jm, { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { ref: p, children: [n?.visible ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("hemisphereLight", { skyColor: 8421504, groundColor: 6316128 }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("directionalLight", { color: 16777215, position: [0, -800, 0] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("primitive", { ref: f, object: n, position: [-0.18, 1.13, -1], scale: [
    2e-3 * i[0],
    2e-3 * i[1],
    2e-3 * i[2]
  ] })] }) : null, l.uniforms && l.shader ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("mesh", { name: "cube", position: [-0.18, 1.13, -1], rotation: [0, 0, 0], scale: [
    2e-3 * l.meshScale[0],
    2e-3 * l.meshScale[1],
    2e-3 * l.meshScale[2]
  ], ref: u, children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("boxGeometry", { args: l.geometrySize }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("shaderMaterial", { customProgramCacheKey: () => "1", side: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as, uniforms: l.uniforms, needsUpdate: !0, transparent: !0, vertexShader: l.shader.vertexShader, fragmentShader: l.shader.fragmentShader })] }) }) : null] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { name: "currentLine", ref: g, children: w ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(ga, { currentLine: P, scale: 1 / 2e-3 * 0.4 }) : null }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { name: "lines", children: L.map((I) => _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(ga, { currentLine: I, scale: 1 / 2e-3 * 0.4 })) })] }) : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [n?.visible ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("hemisphereLight", { skyColor: 8421504, groundColor: 6316128 }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("directionalLight", { color: 16777215, position: [0, -800, 0] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("directionalLight", { color: 16777215, position: [0, 800, 0] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(T0, { firstHitOnly: !0, children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("primitive", { ref: f, object: n, position: [0, 0, 0], onClick: (I) => {
    I.object.parent.userData.name === "finalPass" && a(I.object.name, I.object.userData.layerScope, I.object.userData.channelScope);
  }, onPointerOver: (I) => {
    d(I.object.name);
  }, onPointerOut: (I) => d(null) }) })] }) : null, l.uniforms && l.shader ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("mesh", { scale: l.meshScale, ref: u, children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("boxGeometry", { args: l.geometrySize }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("shaderMaterial", { customProgramCacheKey: () => "1", side: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as, uniforms: l.uniforms, needsUpdate: !0, transparent: !0, vertexShader: l.shader.vertexShader, fragmentShader: l.shader.fragmentShader })] }) }) : null] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("group", { name: "lines", children: L.map((I) => _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(ga, { currentLine: I, scale: 1 })) })] }) });
}
function M0() {
  const { controllers: o } = Ue();
  return dr(() => {
    o?.[0] && o?.[1] && (o[0]?.hand?.children?.[25]?.children?.[0]?.children?.[0] && (o[0].hand.children[25].children[0].children[0].material.transparent = !0, o[0].hand.children[25].children[0].children[0].material.opacity = 0.5), o[1]?.hand?.children?.[25]?.children?.[0]?.children?.[0] && (o[1].hand.children[25].children[0].children[0].material.transparent = !0, o[1].hand.children[25].children[0].children[0].material.opacity = 0.5));
  }), null;
}
class L0 {
  /**
   * @param {number} xLength Width of the volume
   * @param {number} yLength Length of the volume
   * @param {number} zLength Depth of the volume
   * @param {string} type The type of data (uint8, uint16, ...)
   * @param {ArrayBuffer} arrayBuffer The buffer with volume data
   */
  constructor(n, r, i, l, u) {
    if (this.spacing = [1, 1, 1], this.offset = [0, 0, 0], this.matrix = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aJ(), this.matrix.identity(), this.sliceList = [], this.lowerThresholdValue = -1 / 0, this.upperThresholdValue = 1 / 0, arguments.length > 0) {
      switch (this.xLength = Number(n) || 1, this.yLength = Number(r) || 1, this.zLength = Number(i) || 1, l) {
        case "Uint8":
        case "uint8":
        case "uchar":
        case "unsigned char":
        case "uint8_t":
          this.data = new Uint8Array(u);
          break;
        case "Int8":
        case "int8":
        case "signed char":
        case "int8_t":
          this.data = new Int8Array(u);
          break;
        case "Int16":
        case "int16":
        case "short":
        case "short int":
        case "signed short":
        case "signed short int":
        case "int16_t":
          this.data = new Int16Array(u);
          break;
        case "Uint16":
        case "uint16":
        case "ushort":
        case "unsigned short":
        case "unsigned short int":
        case "uint16_t":
          this.data = new Uint16Array(u);
          break;
        case "Int32":
        case "int32":
        case "int":
        case "signed int":
        case "int32_t":
          this.data = new Int32Array(u);
          break;
        case "Uint32":
        case "uint32":
        case "uint":
        case "unsigned int":
        case "uint32_t":
          this.data = new Uint32Array(u);
          break;
        case "longlong":
        case "long long":
        case "long long int":
        case "signed long long":
        case "signed long long int":
        case "int64":
        case "int64_t":
        case "ulonglong":
        case "unsigned long long":
        case "unsigned long long int":
        case "uint64":
        case "uint64_t":
          throw new Error("uint64_t type is not supported in JavaScript");
        case "Float32":
        case "float32":
        case "float":
          this.data = new Float32Array(u);
          break;
        case "Float64":
        case "float64":
        case "double":
          this.data = new Float64Array(u);
          break;
        default:
          this.data = new Uint8Array(u);
      }
      if (this.data.length !== this.xLength * this.yLength * this.zLength)
        throw new Error("lengths are not matching arrayBuffer size");
    }
  }
  get lowerThreshold() {
    return this.lowerThresholdValue;
  }
  set lowerThreshold(n) {
    this.lowerThresholdValue = n, this.sliceList.forEach((r) => {
      r.geometryNeedsUpdate = !0;
    });
  }
  get upperThreshold() {
    return this.upperThresholdValue;
  }
  set upperThreshold(n) {
    this.upperThresholdValue = n, this.sliceList.forEach((r) => {
      r.geometryNeedsUpdate = !0;
    });
  }
  /**
   * Shortcut for data[access(i,j,k)]
   * @param {number} i    First coordinate
   * @param {number} j    Second coordinate
   * @param {number} k    Third coordinate
   * @returns {number}  value in the data array
   */
  getData(n, r, i) {
    return this.data[i * this.xLength * this.yLength + r * this.xLength + n];
  }
  /**
   * Compute the index in the data
   * array corresponding to the given coordinates in IJK system
   * @param {number} i    First coordinate
   * @param {number} j    Second coordinate
   * @param {number} k    Third coordinate
   * @returns {number}  index
   */
  access(n, r, i) {
    return i * this.xLength * this.yLength + r * this.xLength + n;
  }
  /**
   * Retrieve the IJK coordinates of the voxel
   * corresponding of the given index in the data
   * @param {number} index index of the voxel
   * @returns {Array}  [x,y,z]
   */
  reverseAccess(n) {
    const r = Math.floor(n / (this.yLength * this.xLength)), i = Math.floor((n - r * this.yLength * this.xLength) / this.xLength);
    return [n - r * this.yLength * this.xLength - i * this.xLength, i, r];
  }
  /**
   * Apply a function to all the voxels, be careful,
   * the value will be replaced
   * @param {Function} functionToMap A function to apply to every voxel,
   * will be called with the following parameters:
   * - value of the voxel
   * - index of the voxel
   * - the data (TypedArray)
   * @param {Object} context  You can specify a context in which call the function,
   * default if this Volume
   * @returns {Volume} this
   */
  map(n, r) {
    const { length: i } = this.data, l = r || this;
    for (let u = 0; u < i; u++)
      this.data[u] = n.call(l, this.data[u], u, this.data);
    return this;
  }
  /**
   * Compute the orientation
   * of the slice and returns all the information relative to the
   * geometry such as sliceAccess,
   * the plane matrix (orientation and position in RAS coordinate)
   * and the dimensions of the plane in both coordinate system.
   * @param {string} axis  the normal axis to the slice 'x' 'y' or 'z'
   * @param {number} index the index of the slice
   * @returns {Object} an object containing all the usefull information
   * on the geometry of the slice
   */
  extractPerpendicularPlane(n, r) {
    const i = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k().identity(), l = this;
    let u, a, d, f;
    const g = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), p = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), h = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(), v = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(this.xLength, this.yLength, this.zLength);
    switch (n) {
      case "x":
        g.set(1, 0, 0), p.set(0, 0, -1), h.set(0, -1, 0), u = this.spacing[2], a = this.spacing[1], f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(r, 0, 0), i.multiply(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k().makeRotationY(Math.PI / 2)), d = (l.RASDimensions[0] - 1) / 2, i.setPosition(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(r - d, 0, 0));
        break;
      case "y":
        g.set(0, 1, 0), p.set(1, 0, 0), h.set(0, 0, 1), u = this.spacing[0], a = this.spacing[2], f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, r, 0), i.multiply(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.k().makeRotationX(-Math.PI / 2)), d = (l.RASDimensions[1] - 1) / 2, i.setPosition(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, r - d, 0));
        break;
      case "z":
      default:
        g.set(0, 0, 1), p.set(1, 0, 0), h.set(0, -1, 0), u = this.spacing[0], a = this.spacing[1], f = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, r), d = (l.RASDimensions[2] - 1) / 2, i.setPosition(new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, r - d));
        break;
    }
    p.applyMatrix4(l.inverseMatrix).normalize(), p.argVar = "i", h.applyMatrix4(l.inverseMatrix).normalize(), h.argVar = "j", g.applyMatrix4(l.inverseMatrix).normalize();
    const x = Math.floor(Math.abs(p.dot(v))), _ = Math.floor(Math.abs(h.dot(v))), A = Math.abs(x * u), T = Math.abs(_ * a);
    f = Math.abs(Math.round(f.applyMatrix4(l.inverseMatrix).dot(g)));
    const S = [new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(1, 0, 0), new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 1, 0), new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 1)], w = [p, h, g].find((L) => Math.abs(L.dot(S[0])) > 0.9), E = [p, h, g].find((L) => Math.abs(L.dot(S[1])) > 0.9), P = [p, h, g].find((L) => Math.abs(L.dot(S[2])) > 0.9);
    function M(L, R) {
      const z = w === g ? f : w.arglet === "i" ? L : R, D = E === g ? f : E.arglet === "i" ? L : R, I = P === g ? f : P.arglet === "i" ? L : R, k = w.dot(S[0]) > 0 ? z : l.xLength - 1 - z, j = E.dot(S[1]) > 0 ? D : l.yLength - 1 - D, G = P.dot(S[2]) > 0 ? I : l.zLength - 1 - I;
      return l.access(k, j, G);
    }
    return {
      iLength: x,
      jLength: _,
      sliceAccess: M,
      matrix: i,
      planeWidth: A,
      planeHeight: T
    };
  }
  /**
   * Compute the minimum
   * and the maximum of the data in the volume
   * @returns {Array} [min,max]
   */
  computeMinMax() {
    let n = 1 / 0, r = -1 / 0;
    const i = this.data.length;
    let l = 0;
    for (l = 0; l < i; l++)
      if (!Number.isNaN(this.data[l])) {
        const u = this.data[l];
        n = Math.min(n, u), r = Math.max(r, u);
      }
    return this.min = n, this.max = r, [n, r];
  }
}
const R0 = {
  uniforms: {
    u_size: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(1, 1, 1) },
    u_renderstyle: { value: 0 },
    u_renderthreshold: { value: 0.5 },
    u_opacity: { value: 0.5 },
    u_clim: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_clim2: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_clim3: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_clim4: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_clim5: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_clim6: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(0.2, 0.8) },
    u_xClip: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e6) },
    u_yClip: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e6) },
    u_zClip: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e6) },
    u_data: { value: null },
    u_stop_geom: { value: null },
    u_geo_color: { value: null },
    u_window_size: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(1, 1) },
    u_vol_scale: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(1, 1, 1) },
    u_physical_Pixel: { value: 0.5 },
    volumeTex: { value: null },
    volumeTex2: { value: null },
    volumeTex3: { value: null },
    volumeTex4: { value: null },
    volumeTex5: { value: null },
    volumeTex6: { value: null },
    u_color: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_color2: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_color3: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_color4: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_color5: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_color6: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(0, 0, 0) },
    u_cmdata: { value: null },
    near: { value: 0.1 },
    far: { value: 1e4 },
    alphaScale: { value: 0 },
    dtScale: { value: 1 },
    volumeCount: { value: 0 },
    finalGamma: { value: 0 },
    boxSize: { value: new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.c(1, 1, 1) }
  },
  vertexShader: [
    "out vec3 rayDirUnnorm;",
    "out vec3 cameraCorrected;",
    "uniform vec3 u_vol_scale;",
    "uniform vec3 u_size;",
    "varying vec3 worldSpaceCoords;",
    "varying vec2 vUv;",
    "varying vec4 glPosition;",
    "uniform highp vec3 boxSize;",
    "void main()",
    "{",
    "   worldSpaceCoords = position / boxSize + vec3(0.5, 0.5, 0.5); //move it from [-0.5;0.5] to [0,1]",
    "   cameraCorrected = (inverse(modelMatrix) * vec4(cameraPosition, 1.)).xyz;",
    "   rayDirUnnorm = position - cameraCorrected;",
    "   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
    "   glPosition = gl_Position;",
    "   vUv = uv;",
    "}"
  ].join(`
`),
  fragmentShader: [
    "#include <packing>",
    "precision highp float;",
    " precision mediump sampler3D;",
    "in vec3 rayDirUnnorm;",
    "in vec3 cameraCorrected;",
    "uniform sampler3D volumeTex;",
    "uniform sampler3D volumeTex2;",
    "uniform sampler3D volumeTex3;",
    "uniform sampler3D volumeTex4;",
    "uniform sampler3D volumeTex5;",
    "uniform sampler3D volumeTex6;",
    "uniform vec2 u_clim;",
    "uniform vec2 u_clim2;",
    "uniform vec2 u_clim3;",
    "uniform vec2 u_clim4;",
    "uniform vec2 u_clim5;",
    "uniform vec2 u_clim6;",
    "uniform vec2 u_window_size;",
    "uniform vec2 u_xClip;",
    "uniform vec2 u_yClip;",
    "uniform vec2 u_zClip;",
    "uniform sampler2D u_cmdata;",
    "uniform sampler2D u_stop_geom;",
    "uniform sampler2D u_geo_color;",
    "uniform vec3 u_color;",
    "uniform vec3 u_color2;",
    "uniform vec3 u_color3;",
    "uniform vec3 u_color4;",
    "uniform vec3 u_color5;",
    "uniform vec3 u_color6;",
    "uniform float alphaScale;",
    "uniform float dtScale;",
    "uniform float finalGamma;",
    "uniform float volumeCount;",
    "uniform highp vec3 boxSize;",
    "uniform vec3 u_size;",
    "uniform int u_renderstyle;",
    "uniform float u_opacity;",
    "uniform vec3 u_vol_scale;",
    "uniform float near;",
    "uniform float u_physical_Pixel;",
    "varying vec2 vUv;",
    "varying vec4 glPosition;",
    "uniform float far;",
    "varying vec3 worldSpaceCoords;",
    "float linearize_z(float z) {",
    "        return near * far / (far + z * (near - far));",
    "}",
    "vec2 intersect_hit(vec3 orig, vec3 dir) {",
    "  vec3 boxMin = vec3(-0.5) * boxSize;",
    "  vec3 boxMax = vec3( 0.5) * boxSize;",
    "  if(u_xClip.x > -1.0){   boxMin.x = u_xClip.x-(boxSize.x/2.0);",
    "   if(u_xClip.y < boxSize.x)",
    "       boxMax.x = u_xClip.y-(boxSize.x/2.0);",
    "  }",
    "  if(u_yClip.x > -1.0){   boxMin.y = u_yClip.x-(boxSize.y/2.0);",
    "   if(u_yClip.y < boxSize.y)",
    "      boxMax.y = u_yClip.y-(boxSize.y/2.0);",
    "  }",
    "  if(u_zClip.x > -1.0){   boxMin.z = u_zClip.x-(boxSize.z/2.0);",
    "   if(u_zClip.y < boxSize.z)       boxMax.z = u_zClip.y-(boxSize.z/2.0);",
    "  }",
    "  vec3 invDir = 1.0 / dir;",
    "  vec3 tmin0 = (boxMin - orig) * invDir;",
    "  vec3 tmax0 = (boxMax - orig) * invDir;",
    "  vec3 tmin = min(tmin0, tmax0);",
    "  vec3 tmax = max(tmin0, tmax0);",
    "  float t0 = max(tmin.x, max(tmin.y, tmin.z));",
    "  float t1 = min(tmax.x, min(tmax.y, tmax.z));",
    "  return vec2(t0, t1);",
    "}",
    "   // Pseudo-random number gen from",
    "   // http://www.reedbeta.com/blog/quick-and-easy-gpu-random-numbers-in-d3d11/",
    "   // with some tweaks for the range of values",
    "       float wang_hash(int seed) {",
    "     seed = (seed ^ 61) ^ (seed >> 16);",
    "     seed *= 9;",
    "     seed = seed ^ (seed >> 4);",
    "     seed *= 0x27d4eb2d;",
    "     seed = seed ^ (seed >> 15);",
    "     return float(seed % 2147483647) / float(2147483647);",
    "     }",
    "float linear_to_srgb(float x) {",
    "   if (x <= 0.0031308f) {",
    "     return 12.92f * x;",
    "   }",
    "   return 1.055f * pow(x, 1.f / 2.4f) - 0.055f;",
    "}",
    "void main(void) {",
    // For finding the settings for the MESH
    // "  gl_FragColor = vec4(worldSpaceCoords.x,worldSpaceCoords.y,worldSpaceCoords.z,0.5);",
    // "  return;",
    //
    "  //STEP 1: Normalize the view Ray",
    "  vec3 rayDir = normalize(rayDirUnnorm);",
    "  //STEP 2: Intersect the ray with the volume bounds to find the interval along the ray overlapped by the volume",
    "  vec2 t_hit = intersect_hit(cameraCorrected, rayDir);",
    "  if (t_hit.x >= t_hit.y) {",
    "    discard;",
    "  }",
    "  //No sample behind the eye",
    "  t_hit.x = max(t_hit.x, 0.0);",
    "  //STEP 3: Compute the step size to march through the volume grid",
    "  ivec3 volumeTexSize = textureSize(volumeTex, 0);",
    "  vec3 dt_vec = 1.0 / (vec3(volumeTexSize) * abs(rayDir));",
    "  float dt = min(dt_vec.x, min(dt_vec.y, dt_vec.z));",
    "  dt = max(1.0, dt);",
    "  // Ray starting point, in the real space where the box may not be a cube.",
    "  // Prevents a lost WebGL context.",
    // "   if (dt < 0.0000001) {",
    // "     gl_FragColor = vec4(1.0);",
    // "     return;",
    // "   }",
    " float offset = wang_hash(int(gl_FragCoord.x + 640.0 * gl_FragCoord.y));",
    " vec3 p = cameraCorrected + (t_hit.x + offset + dt) * rayDir;",
    "  // Most browsers do not need this initialization, but add it to be safe.",
    "  gl_FragColor = vec4(0.0);",
    "  p = p / boxSize + vec3(0.5);",
    "  vec3 step = (rayDir * dt) / boxSize;",
    "  // ",
    "  // Initialization of some variables.",
    "  float max_val = 0.0;",
    "  float max_val2 = 0.0;",
    "  float max_val3 = 0.0;",
    "  float max_val4 = 0.0;",
    "  float max_val5 = 0.0;",
    "  float max_val6 = 0.0;",
    "  vec3 rgbCombo = vec3(0.0);",
    "  float total = 0.0;",
    "  int max_i = 30000;",
    "  int i = 0;",
    "  float x = gl_FragCoord.x/u_window_size.x;",
    "  float y = gl_FragCoord.y/u_window_size.y;",
    "  vec3 meshPos = texture2D(u_stop_geom, vec2(x,y)).xyz;",
    // "  vec3 meshPos = texture2D(u_stop_geom, vec2(gl_FragCoord.x,gl_FragCoord.y)).xyz;",
    //  "  gl_FragColor = vec4(meshPos,1.0);",
    //  "  return;",
    "  float dist = 1000.0;",
    "  for (float t = t_hit.x; t < t_hit.y; t += dt) {",
    "       if(meshPos != vec3(0.0))           dist = distance(p,meshPos);",
    "      float val = texture(volumeTex, p.xyz).r;",
    "      val = max(0.0, (val - u_clim[0]) / (u_clim[1] - u_clim[0]));",
    "      rgbCombo += max(0.0, min(1.0, val)) * u_color;",
    "      total += val;",
    "      if(volumeCount > 1.0){           float val2 = texture(volumeTex2, p.xyz).r;",
    "           val2 = max(0.0,(val2 - u_clim2[0]) / (u_clim2[1] - u_clim2[0]));",
    "           rgbCombo += max(0.0, min(1.0, val2)) * u_color2;",
    "           total += val2;",
    "       }",
    "       if(volumeCount > 2.0){           float val3 = texture(volumeTex3, p.xyz).r;",
    "           val3 = max(0.0,(val3 - u_clim3[0]) / (u_clim3[1] - u_clim3[0]));",
    "           rgbCombo += max(0.0, min(1.0, val3)) * u_color3;",
    "           total += val3;",
    "       }",
    "       if(volumeCount > 3.0){           float val4 = texture(volumeTex4, p.xyz).r;",
    "           val4 = max(0.0,(val4 - u_clim4[0]) / (u_clim4[1] - u_clim4[0]));",
    "           rgbCombo += max(0.0, min(1.0, val4)) * u_color4;",
    "           total += val4;",
    "       }",
    "       if(volumeCount > 4.0){           float val5 = texture(volumeTex5, p.xyz).r;",
    "           val5 = max(0.0,(val5 - u_clim5[0]) / (u_clim5[1] - u_clim5[0]));",
    "           rgbCombo += max(0.0, min(1.0, val5)) * u_color5;",
    "           total += val5;",
    "        }",
    "        if(volumeCount > 5.0){           float val6 = texture(volumeTex6, p.xyz).r;",
    "           val6 = max(0.0,(val6 - u_clim6[0]) / (u_clim6[1] - u_clim6[0]));",
    "           rgbCombo += max(0.0, min(1.0, val6)) * u_color6;",
    "           total += val6;",
    "       }",
    // STOP the traversal if there has been data and the distance to the object is too small
    "       if(total > 0.0 && dist < 0.1){",
    "           break;",
    "       }else if(dist < 0.1){           gl_FragColor = vec4(0.0,0.0,0.0,0.0);",
    "           break;",
    "       }",
    "       if(u_renderstyle == 0 && (max_val > u_clim[1] && max_val2 >= u_clim2[1] && max_val3 >= u_clim3[1] && max_val4 >= u_clim4[1] && max_val5 >= u_clim5[1] &&  max_val6 >= u_clim6[1])) break;",
    "       if(u_renderstyle == 2){           total = min(total, 1.0);",
    "           vec4 val_color = vec4(rgbCombo, total);",
    "           val_color.a = 1.0 - pow(1.0 - val_color.a, 1.0);",
    "           gl_FragColor.rgb += (1.0 - gl_FragColor.a) * val_color.a * val_color.rgb;",
    "           gl_FragColor.a += (1.0 - gl_FragColor.a) * val_color.a * dtScale;",
    "           if (gl_FragColor.a >= 0.95) {",
    "               break;",
    "           }",
    "       }",
    // "       }",
    "       p += step;",
    "  }",
    "   gl_FragDepth = distance(worldSpaceCoords,p)*u_physical_Pixel;",
    // "   gl_FragColor = vec4(gl_FragDepth,gl_FragDepth,gl_FragDepth,1.0);",
    // "   return;",
    "   if(u_renderstyle == 0 && (max_val <  u_clim[0] && max_val2 < u_clim2[0] && max_val3 < u_clim3[0] &&   max_val4 <  u_clim4[0] && max_val5 <  u_clim5[0] && max_val6 <  u_clim6[0])){",
    "        gl_FragColor = vec4(0,0,0,0);",
    "   }else if(u_renderstyle == 0){",
    "       max_val = (max_val - u_clim[0]) / (u_clim[1] - u_clim[0]);",
    "       max_val2 = (max_val2 - u_clim2[0]) / (u_clim2[1] - u_clim2[0]);",
    "       max_val3 = (max_val3 - u_clim3[0]) / (u_clim3[1] - u_clim3[0]);",
    "       max_val4 = (max_val4 - u_clim4[0]) / (u_clim4[1] - u_clim4[0]);",
    "       max_val5 = (max_val5 - u_clim5[0]) / (u_clim5[1] - u_clim5[0]);",
    "       max_val6 = (max_val6 - u_clim6[0]) / (u_clim6[1] - u_clim6[0]);",
    "       vec3 color = u_color * max_val;",
    "       if(volumeCount > 1.0) color = color +  u_color2 * max_val2;",
    "       if(volumeCount > 3.0) color = color +  u_color4 * max_val4;",
    "       if(volumeCount > 2.0) color = color +  u_color3 * max_val3;",
    "       if(volumeCount > 4.0) color = color +  u_color5 * max_val5;",
    "       if(volumeCount > 5.0) color = color +  u_color6 * max_val6;",
    "       vec3 colorCorrected = vec3(min(color[0], 1.0), min(color[1],1.0), min(color[2],1.0));",
    "        gl_FragColor = vec4(color,1.0);",
    "    }",
    "    gl_FragColor.r = linear_to_srgb(gl_FragColor.r);",
    "    gl_FragColor.g = linear_to_srgb(gl_FragColor.g);",
    "    gl_FragColor.b = linear_to_srgb(gl_FragColor.b);",
    "}"
  ].join(`
`)
}, N0 = {
  maximumIntensityProjection: 0,
  minimumIntensityProjection: 1,
  additive: 2
};
function I0(o, n, r, i, l, u) {
  const { spatialRenderingMode: a } = u, d = l?.image?.instance?.getData();
  if (!d)
    return {
      channelsVisible: null,
      resolution: null,
      data: null,
      colors: null,
      contrastLimits: null,
      allChannels: null,
      channelTargetC: null
    };
  const f = l.image.instance, g = a === "3D", p = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.PHOTOMETRIC_INTERPRETATION] === "RGB", h = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.VOLUMETRIC_RENDERING_ALGORITHM], v = N0[h], x = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_LAYER_VISIBLE], _ = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_LAYER_OPACITY];
  f.isInterleaved();
  const A = p ? [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255]
  ] : r.map((I) => i[I][_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_CHANNEL_COLOR]), T = p ? [
    [0, 255],
    [0, 255],
    [0, 255]
  ] : r.map((I) => i[I][_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_CHANNEL_WINDOW] || [0, 255]), S = p ? [
    // Layer visible AND channel visible
    x && !0,
    x && !0,
    x && !0
  ] : r.map((I) => (
    // Layer visible AND channel visible
    x && i[I][_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_CHANNEL_VISIBLE]
  )), w = p ? [
    // Layer visible AND channel visible
    x && !0,
    x && !0,
    x && !0
  ] : r.map((I) => (
    // Layer visible AND channel visible
    x && f.getChannelIndex(i[I][_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_TARGET_C])
  )), E = f.getAutoTargetResolution(), P = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_TARGET_RESOLUTION], M = P === null || Number.isNaN(P) ? E : P, L = l.image.loaders[0].channels;
  let R = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_SLICE_X], z = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_SLICE_Y], D = n[_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aK.SPATIAL_SLICE_Z];
  return R = R !== null ? R : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e5), z = z !== null ? z : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e5), D = D !== null ? D : new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.d(-1, 1e5), {
    channelsVisible: S,
    allChannels: L,
    channelTargetC: w,
    resolution: M,
    data: d,
    colors: A,
    contrastLimits: T,
    is3dMode: g,
    renderingMode: v,
    layerTransparency: _,
    xSlice: R,
    ySlice: z,
    zSlice: D
  };
}
function z0(o, n, r, i, l) {
  const { images: u = {}, imageLayerScopes: a, imageLayerCoordination: d, imageChannelScopesByLayer: f, imageChannelCoordination: g } = o, p = a[0], h = f[p], v = d[0][p], x = g[0][p], { channelsVisible: _, allChannels: A, channelTargetC: T, resolution: S, data: w, colors: E, contrastLimits: P, is3dMode: M, renderingMode: L, layerTransparency: R, xSlice: z, ySlice: D, zSlice: I } = I0(p, v, h, x, u[p], o);
  return T !== null && (n.channelTargetC.length !== 0 && (n.channelTargetC.toString() !== T.toString() || n.resolution.toString() !== S.toString()) ? i || l(!0) : (n.channelsVisible.toString() !== _.toString() || n.colors.toString() !== E.toString() || n.is3dMode !== M || n.contrastLimits.toString() !== P.toString() || n.renderingMode.toString() !== L.toString() || n.layerTransparency.toString() !== R.toString() || n.xSlice.toString() !== z.toString() || n.ySlice.toString() !== D.toString() || n.zSlice.toString() !== I.toString()) && (r({
    channelsVisible: _,
    allChannels: A,
    channelTargetC: T,
    resolution: S,
    data: w,
    colors: E,
    contrastLimits: P,
    is3dMode: M,
    renderingMode: L,
    layerTransparency: R,
    xSlice: z,
    ySlice: D,
    zSlice: I
  }), l(!1))), {
    images: u,
    layerScope: p,
    imageLayerScopes: a,
    imageLayerCoordination: d,
    imageChannelScopesByLayer: f,
    imageChannelCoordination: g,
    channelsVisible: _,
    allChannels: A,
    channelTargetC: T,
    resolution: S,
    data: w,
    colors: E,
    contrastLimits: P,
    is3dMode: M,
    renderingMode: L,
    layerTransparency: R,
    xSlice: z,
    ySlice: D,
    zSlice: I
  };
}
function fo(o, n) {
  const [r, i] = n;
  return (o - r) / Math.sqrt(i ** 2 - r ** 2);
}
function O0(o, n, r, i, l, u, a, d, f, g, p, h, v) {
  o.boxSize.value.set(r.xLength, r.yLength, r.zLength), o.volumeTex.value = n.length > 0 ? n[0] : null, o.volumeTex2.value = n.length > 1 ? n[1] : null, o.volumeTex3.value = n.length > 2 ? n[2] : null, o.volumeTex4.value = n.length > 3 ? n[3] : null, o.volumeTex5.value = n.length > 4 ? n[4] : null, o.volumeTex6.value = n.length > 5 ? n[5] : null, o.near.value = 0.1, o.far.value = 3e3, o.alphaScale.value = 1, o.dtScale.value = d, o.finalGamma.value = 4.5, o.volumeCount.value = n.length, o.u_size.value.set(r.xLength, r.yLength, r.zLength), o.u_stop_geom.value = null, o.u_window_size.value.set(0, 0), o.u_vol_scale.value.set(1 / r.xLength, 1 / r.yLength, 1 / r.zLength * 2), o.u_renderstyle.value = l, o.u_clim.value.set(u.length > 0 ? u[0][0] : null, u.length > 0 ? u[0][1] : null), o.u_clim2.value.set(u.length > 1 ? u[1][0] : null, u.length > 1 ? u[1][1] : null), o.u_clim3.value.set(u.length > 2 ? u[2][0] : null, u.length > 2 ? u[2][1] : null), o.u_clim4.value.set(u.length > 3 ? u[3][0] : null, u.length > 3 ? u[3][1] : null), o.u_clim5.value.set(u.length > 4 ? u[4][0] : null, u.length > 4 ? u[4][1] : null), o.u_clim6.value.set(u.length > 5 ? u[5][0] : null, u.length > 5 ? u[5][1] : null), o.u_xClip.value.set(f[0] * (1 / h[0]) / v[0] * r.xLength, f[1] * (1 / h[0]) / v[0] * r.xLength), o.u_yClip.value.set(g[0] * (1 / h[1]) / v[1] * r.yLength, g[1] * (1 / h[1]) / v[1] * r.yLength), o.u_zClip.value.set(p[0] * (1 / h[2]) / v[2] * r.zLength, p[1] * (1 / h[1]) / v[2] * r.zLength), o.u_color.value.set(a.length > 0 ? a[0][0] : null, a.length > 0 ? a[0][1] : null, a.length > 0 ? a[0][2] : null), o.u_color2.value.set(a.length > 1 ? a[1][0] : null, a.length > 1 ? a[1][1] : null, a.length > 1 ? a[1][2] : null), o.u_color3.value.set(a.length > 2 ? a[2][0] : null, a.length > 2 ? a[2][1] : null, a.length > 2 ? a[2][2] : null), o.u_color4.value.set(a.length > 3 ? a[3][0] : null, a.length > 3 ? a[3][1] : null, a.length > 3 ? a[3][2] : null), o.u_color5.value.set(a.length > 4 ? a[4][0] : null, a.length > 4 ? a[4][1] : null, a.length > 4 ? a[4][2] : null), o.u_color6.value.set(a.length > 5 ? a[5][0] : null, a.length > 5 ? a[5][1] : null, a.length > 5 ? a[5][2] : null);
}
function qf(o, n, r, i, l, u, a, d, f, g, p, h, v, x) {
  const _ = [], A = [], T = [];
  let S = null, w = d;
  if (w == null || !Array.isArray(w) || w.length < 3)
    w = [
      { size: w?.[0]?.size ?? 1 },
      { size: w?.[1]?.size ?? 1 },
      { size: w?.[2]?.size ?? 1 }
    ];
  else
    for (let L = 0; L < w.length; L++)
      (!w[L] || w[L].size === void 0 || w[L].size === null) && (w[L] = { size: 1 });
  if (n.forEach((L, R) => {
    r[R] && (S = o.get(L), _.push(l.get(L)), A.push([i[R][0] / 255, i[R][1] / 255, i[R][2] / 255]), u[R][0] === 0 && u[R][1] === 255 ? T.push([
      fo(a.get(L)[0], a.get(L)),
      fo(a.get(L)[1], a.get(L))
    ]) : T.push([
      fo(u[R][0], a.get(L)),
      fo(u[R][1], a.get(L))
    ]));
  }), S === null)
    return null;
  const E = {}, P = R0, M = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aB.clone(P.uniforms);
  return O0(M, _, S, E, f, T, A, g, p, h, v, [w[0].size, w[1].size, w[2] ? w[2].size : 1], x), [
    M,
    P,
    [1, w[1].size / w[0].size, w[2] ? w[2].size / w[0].size : 1],
    [S.xLength, S.yLength, S.zLength],
    [1, S.yLength / S.xLength, S.zLength / S.xLength]
  ];
}
const b0 = {
  Uint8: Uint8Array,
  Uint16: Uint16Array,
  Uint32: Uint32Array,
  Int8: Int8Array,
  Int16: Int16Array,
  Int32: Int32Array,
  Float32: Float32Array,
  Float64: Float64Array
};
async function D0({ source: o, selection: n, onUpdate: r = () => {
}, downsampleDepth: i = 1, signal: l }) {
  const { shape: u, labels: a, dtype: d } = o, { height: f, width: g } = (0,_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aO)(o), p = u[a.indexOf("z")], h = Math.max(1, Math.floor(p / i)), v = f * g, x = b0[d], _ = new x(v * h);
  return await Promise.all(new Array(h).fill(0).map(async (A, T) => {
    const S = {
      ...n,
      z: T * i
    }, { data: w } = await o.getRaster({
      selection: S,
      signal: l
    });
    let E = 0;
    for (r({ z: T, total: h, progress: 0.5 }); E < v; ) {
      const P = T * v + (v - E - 1), M = (g - E - 1) % g + g * Math.floor(E / g);
      _[P] = w[M], E += 1;
    }
    r({ z: T, total: h, progress: 1 });
  })), {
    data: _,
    height: f,
    width: g,
    depth: h
  };
}
function k0(o, n, r) {
  return D0({
    source: r[n],
    selection: { t: 0, c: o },
    // corresponds to the first channel of the first timepoint
    downsampleDepth: 2 ** n
  });
}
function F0(o) {
  const n = new L0();
  return n.xLength = o.width, n.yLength = o.height, n.zLength = o.depth, n.data = o.data, n;
}
function B0(o) {
  const n = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aL(o.data, o.xLength, o.yLength, o.zLength);
  return n.format = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aM, n.type = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aN, n.generateMipmaps = !1, n.minFilter = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a1, n.magFilter = _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a1, n.needsUpdate = !0, n;
}
function j0(o) {
  const { x: n, y: r, z: i } = o?.meta?.physicalSizes ?? {};
  return [n, r, i];
}
function U0(o) {
  const [n, r] = o.computeMinMax(), i = new Float32Array(o.data.length);
  for (let l = 0; l < o.data.length; l++)
    i[l] = (o.data[l] - n) / Math.sqrt(r ** 2 - n ** 2);
  return i;
}
async function H0(o, n, r, i, l, u, a) {
  let d = null, f = null;
  const { shape: g, labels: p } = r[0], h = o.filter((x) => !i.has(x) || n !== a), v = await Promise.all(h.map((x) => k0(x, n, r)));
  return h.forEach((x, _) => {
    const A = v[_];
    d = F0(A);
    const T = d.computeMinMax();
    d.data = U0(d), i.set(x, d), l.set(x, B0(d)), u.set(x, T), f = j0(r[n]);
  }), [
    i,
    l,
    u,
    f,
    [g[p.indexOf("x")], g[p.indexOf("y")], g[p.indexOf("z")]]
  ];
}
function V0(o) {
  const n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null), r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null), [i, l] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1), [u, a] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1), [d, f] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), [g, p] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([1, 1, 1]), [h, v] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    uniforms: null,
    shader: null,
    meshScale: null,
    geometrySize: null,
    boxSize: null
  }), [x, _] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    volumes: /* @__PURE__ */ new Map(),
    textures: /* @__PURE__ */ new Map(),
    volumeMinMax: /* @__PURE__ */ new Map(),
    scale: null,
    resolution: null,
    originalScale: null
  }), [A, T] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    channelsVisible: [],
    allChannels: [],
    channelTargetC: [],
    resolution: null,
    data: null,
    colors: [],
    contrastLimits: [],
    is3dMode: !1,
    renderingMode: null,
    layerTransparency: 1
  }), [S, w] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    visible: !0,
    color: [1, 1, 1],
    opacity: 1,
    multiVisible: "",
    multiOpacity: "",
    multiColor: "",
    data: null,
    obsSets: []
  }), { images: E, layerScope: P, channelsVisible: M, allChannels: L, channelTargetC: R, resolution: z, data: D, colors: I, contrastLimits: k, is3dMode: j, renderingMode: G, layerTransparency: Y, xSlice: ee, ySlice: ae, zSlice: we } = z0(o, A, T, u, a), { obsSegmentations: W, onEntitySelected: J, segmentationLayerCoordination: Z, segmentationChannelCoordination: te, segmentationChannelScopesByLayer: ge } = o;
  let xe = () => {
  };
  const Fe = [];
  if (te[0][P] !== void 0) {
    const se = te[0][P][P], { setObsHighlight: fe } = te[1][P][P];
    xe = fe;
    const le = te[0][P][P].additionalObsSets;
    le !== null && se.obsSetSelection.forEach((Me) => {
      const Pe = Me[1];
      le.tree[0].children.forEach((Ve) => {
        Ve.name === Pe && Ve.set.forEach(([ue]) => {
          const Ie = { name: "", id: "", color: [255, 255, 255] };
          Ie.name = Pe, Ie.id = ue, se.obsSetColor.forEach((st) => {
            st.path[1] === Pe && (Ie.color = st.color);
          }), Fe.push(Ie);
        });
      });
    }), se.obsHighlight !== null && Fe.push({ name: "", id: se.obsHighlight, color: [255, 34, 0] });
  }
  if (W?.[P]?.obsSegmentations && d == null) {
    const { scene: se, sceneOptions: fe } = W[P].obsSegmentations;
    if (se?.children) {
      const le = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.S(), Me = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.G();
      Me.userData.name = "finalPass", se.children.forEach((Ve) => {
        let ue = Ve;
        ue.material === void 0 && (ue = Ve.children[0]), (ue.material instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.w || ue.material instanceof _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aa) && (ue.material = new _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.a8());
        let Ie = ue.name.replace("mesh_", "").replace("mesh", "").replace("glb", "").replace("_dec", "").replace("_Decobj", "").replace("obj", "").replace("_DEc", "").replace(".", "").replace("_Dec", "");
        Ie.includes("_") && (Ie = Ie.split("_")[0]), ue.name = Ie, ue.userData.name = Ie, ue.userData.layerScope = P, ue.material.transparent = !0, ue.material.writeDepthTexture = !0, ue.material.depthTest = !0, ue.material.depthWrite = !0, ue.material.needsUpdate = !0, ue.material.side = fe?.materialSide === "back" ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aH : _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.as;
        const st = ue.clone();
        st.geometry = ue.geometry.clone(), st.geometry.translate(fe?.targetX ?? 0, fe?.targetY ?? 0, fe?.targetZ ?? 0), st.geometry.scale(fe?.scaleX ?? 1, fe?.scaleY ?? 1, fe?.scaleZ ?? 1), st.geometry.rotateX(fe?.rotationX ?? 0), st.geometry.rotateY(fe?.rotationY ?? 0), st.geometry.rotateZ(fe?.rotationZ ?? 0);
        const yt = ue.clone();
        yt.material = ue.material.clone(), yt.geometry = st.geometry.clone(), Me.add(yt);
      }), le.add(Me), le.scale.set(fe?.sceneScaleX ?? 1, fe?.sceneScaleY ?? 1, fe?.sceneScaleZ ?? 1);
      const Pe = [
        fe?.sceneScaleX ?? 1,
        fe?.sceneScaleY ?? 1,
        fe?.sceneScaleZ ?? 1
      ];
      p(Pe), le.rotateX(fe?.sceneRotationX ?? 0), le.rotateY(fe?.sceneRotationY ?? 0), le.rotateZ(fe?.sceneRotationZ ?? 0), f(le);
    }
  }
  if (te[0] !== void 0 && te[0][P] !== void 0) {
    const se = te[0][P][P];
    let fe = "";
    Fe.forEach((Me) => {
      fe += `${Me.id};${Me.color.toString()};${Me.name}`;
    });
    let le = "";
    if (S.obsSets.forEach((Me) => {
      le += `${Me.id};${Me.color.toString()};${Me.name}`;
    }), ge[P].length > 1) {
      let Me = "", Pe = "", Ve = "", ue = !1, Ie = 0;
      ge[P].forEach((st) => {
        const yt = te[0][P][st];
        Me += `${yt.spatialChannelColor.toString()};`, Pe += `${yt.spatialChannelOpacity};`, Ve += `${yt.spatialChannelVisible};`, ue |= yt.spatialChannelVisible, Ie += yt.spatialChannelOpacity;
      }), (Me !== S.multiColor || Pe !== S.multiOpacity || Ve !== S.multiVisible) && w({
        color: se.spatialChannelColor,
        opacity: Ie,
        visible: ue,
        multiColor: Me,
        multiVisible: Ve,
        multiOpacity: Pe,
        data: W,
        obsSets: Fe
      });
    } else (se.spatialChannelColor.toString() !== S.color.toString() || se.spatialChannelVisible !== S.visible || se.spatialChannelOpacity !== S.opacity || fe !== le) && w({
      color: se.spatialChannelColor,
      opacity: se.spatialChannelOpacity,
      visible: se.spatialChannelVisible,
      multiColor: "",
      multiVisible: "",
      multiOpacity: "",
      data: W,
      obsSets: Fe
    });
  }
  if ((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (d !== null) {
      let se = 0, fe = 0;
      for (let le = 0; le < d.children.length; le++)
        d.children[le].userData.name === "finalPass" ? fe = le : se = le;
      d.children[fe].children.forEach((le, Me) => {
        let { color: Pe } = S;
        const Ve = le.userData.name;
        if (S.obsSets.forEach((ue) => {
          ue.id === Ve && (Pe = ue.color);
        }), ge[P].length > 1)
          ge[P].forEach((ue) => {
            const Ie = te[0][P][ue];
            Ie.spatialTargetC === Ve && (le.material.color.r = Ie.spatialChannelColor[0] / 255, le.material.color.g = Ie.spatialChannelColor[1] / 255, le.material.color.b = Ie.spatialChannelColor[2] / 255, le.material.opacity = Ie.spatialChannelOpacity, le.visible = Ie.spatialChannelVisible, le.material.needsUpdate = !0, le.userData.layerScope = P, le.userData.channelScope = ue, d.children[se].children[Me].material.needsUpdate = !0);
          });
        else {
          le.material.color.r = Pe[0] / 255, le.material.color.g = Pe[1] / 255, le.material.color.b = Pe[2] / 255, le.material.opacity = S.opacity, le.material.visible = S.visible, le.material.needsUpdate = !0, le.userData.layerScope = P;
          const ue = Object.keys(te[0][P])?.[0];
          le.userData.channelScope = ue;
        }
      });
    }
  }, [S, d]), E[P]?.image?.instance?.getData() !== void 0 && !u && !i && k !== null && k[0][1] !== 255 && j && (a(!0), l(!0)), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const se = async () => {
      const fe = await H0(R, z, D, x.volumes, x.textures, x.volumeMinMax, x.resolution);
      if (fe[0] !== null)
        if (_({
          resolution: z,
          volumes: fe[0],
          textures: fe[1],
          volumeMinMax: fe[2],
          scale: fe[3] !== null ? fe[3] : x.scale,
          originalScale: fe[4]
        }), !h.uniforms || !h.shader) {
          const le = qf(fe[0], R, M, I, fe[1], k, fe[2], fe[3], G, Y, ee, ae, we, fe[4]);
          le !== null && v({
            uniforms: le[0],
            shader: le[1],
            meshScale: le[2],
            geometrySize: le[3],
            boxSize: le[4]
          });
        } else
          T({
            channelsVisible: M,
            allChannels: L,
            channelTargetC: R,
            resolution: z,
            data: D,
            colors: I,
            contrastLimits: k,
            is3dMode: j,
            renderingMode: G,
            layerTransparency: Y,
            xSlice: ee,
            ySlice: ae,
            zSlice: we
          });
    };
    u && (z !== A.resolution && n.current && (n.current.material.uniforms.volumeCount.value = 0, n.current.material.uniforms.volumeTex.value = null), se(), a(!1));
  }, [u]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (h.uniforms && h.shader) {
      const se = qf(x.volumes, A.channelTargetC, A.channelsVisible, A.colors, x.textures, A.contrastLimits, x.volumeMinMax, x.scale, A.renderingMode, A.layerTransparency, A.xSlice, A.ySlice, A.zSlice, x.originalScale);
      if (se !== null) {
        let fe = 0;
        A.channelsVisible.forEach((le) => {
          le && fe++;
        }), a(!1), n?.current?.material?.uniforms && (n.current.material.uniforms.u_clim.value = se[0].u_clim.value, n.current.material.uniforms.u_clim2.value = se[0].u_clim2.value, n.current.material.uniforms.u_clim3.value = se[0].u_clim3.value, n.current.material.uniforms.u_clim4.value = se[0].u_clim4.value, n.current.material.uniforms.u_clim5.value = se[0].u_clim5.value, n.current.material.uniforms.u_clim6.value = se[0].u_clim6.value, n.current.material.uniforms.u_xClip.value = se[0].u_xClip.value, n.current.material.uniforms.u_yClip.value = se[0].u_yClip.value, n.current.material.uniforms.u_zClip.value = se[0].u_zClip.value, n.current.material.uniforms.u_color.value = se[0].u_color.value, n.current.material.uniforms.u_color2.value = se[0].u_color2.value, n.current.material.uniforms.u_color3.value = se[0].u_color3.value, n.current.material.uniforms.u_color4.value = se[0].u_color4.value, n.current.material.uniforms.u_color5.value = se[0].u_color5.value, n.current.material.uniforms.u_color6.value = se[0].u_color6.value, n.current.material.uniforms.volumeTex.value = se[0].volumeTex.value, n.current.material.uniforms.volumeTex2.value = se[0].volumeTex2.value, n.current.material.uniforms.volumeTex3.value = se[0].volumeTex3.value, n.current.material.uniforms.volumeTex4.value = se[0].volumeTex4.value, n.current.material.uniforms.volumeTex5.value = se[0].volumeTex5.value, n.current.material.uniforms.volumeTex6.value = se[0].volumeTex6.value, n.current.material.uniforms.volumeCount.value = fe, n.current.material.uniforms.u_renderstyle.value = A.renderingMode, n.current.material.uniforms.dtScale.value = A.layerTransparency);
      } else n?.current?.material?.uniforms && (n.current.material.uniforms.volumeCount.value = 0, n.current.material.uniforms.volumeTex.value = null);
    }
  }, [A]), !A.is3dMode)
    return null;
  if (A.is3dMode && (!h.uniforms || !h.shader))
    return _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("ambientLight", {}), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("pointLight", { position: [10, 10, 10] }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(zd, { color: "white", scale: 20, fontWeight: 1e3, children: "Loading ..." })] });
  const vt = {
    segmentationGroup: d,
    segmentationSettings: S,
    segmentationSceneScale: g,
    renderingSettings: h,
    materialRef: n,
    highlightEntity: J,
    setObsHighlight: xe
  };
  return _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("group", { children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(cv, {}), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(gv, {}), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(P0, {}), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(M0, {}), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(C0, { ...vt }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(yv, { ref: r, enableDamping: !1, dampingFactor: 0, zoomDampingFactor: 0, smoothZoom: !1 })] });
}
const Y0 = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((o, n) => _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsxs("div", { style: { width: "100%", height: "100%" }, children: [_index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(Ya, { mode: "AR", sessionInit: { optionalFeatures: ["hand-tracking"] }, style: {
  border: "none",
  background: "rgba(0, 0, 0, 0.0)",
  zIndex: 1,
  position: "absolute"
}, children: (r) => r !== "unsupported" ? _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx("div", { style: {
  border: "1px solid white",
  padding: "12px 24px",
  borderRadius: "4px",
  background: "rgba(0, 0, 0, 0.1)",
  color: "white",
  font: "normal 0.8125rem sans-serif",
  outline: "none",
  cursor: "pointer"
}, children: r === "entered" ? "Exit AR" : "Enter AR" }) : null }), _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(Km, { style: { position: "absolute", top: 0, left: 0 }, camera: {
  fov: 50,
  up: [0, 1, 0],
  position: [0, 0, 800],
  near: 0.1,
  far: 3e3
}, gl: { antialias: !0, logarithmicDepthBuffer: !1 }, ref: n, children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(eg, { children: _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aI.jsx(V0, { ...o }) }) })] }));



/***/ })

};
;