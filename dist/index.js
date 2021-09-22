var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// build/dist/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/dist/pkg/common/index-370e7390.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
      return test2[n3];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q3 = 60109, r4 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u = 60115, v2 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w2 = Symbol.for;
    n3 = w2("react.element");
    p3 = w2("react.portal");
    exports.Fragment = w2("react.fragment");
    exports.StrictMode = w2("react.strict_mode");
    exports.Profiler = w2("react.profiler");
    q3 = w2("react.provider");
    r4 = w2("react.context");
    t3 = w2("react.forward_ref");
    exports.Suspense = w2("react.suspense");
    u = w2("react.memo");
    v2 = w2("react.lazy");
  }
  var x3 = typeof Symbol === "function" && Symbol.iterator;
  function y4(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = x3 && a2[x3] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  function z3(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
      b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A3 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, B4 = {};
  function C3(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  C3.prototype.isReactComponent = {};
  C3.prototype.setState = function(a2, b2) {
    if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  C3.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function D3() {
  }
  D3.prototype = C3.prototype;
  function E3(a2, b2, c3) {
    this.props = a2;
    this.context = b2;
    this.refs = B4;
    this.updater = c3 || A3;
  }
  var F4 = E3.prototype = new D3();
  F4.constructor = E3;
  objectAssign(F4, C3.prototype);
  F4.isPureReactComponent = true;
  var G3 = {
    current: null
  }, H4 = Object.prototype.hasOwnProperty, I4 = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function J3(a2, b2, c3) {
    var e3, d3 = {}, k3 = null, h2 = null;
    if (b2 != null)
      for (e3 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k3 = "" + b2.key), b2)
        H4.call(b2, e3) && !I4.hasOwnProperty(e3) && (d3[e3] = b2[e3]);
    var g3 = arguments.length - 2;
    if (g3 === 1)
      d3.children = c3;
    else if (1 < g3) {
      for (var f2 = Array(g3), m3 = 0; m3 < g3; m3++)
        f2[m3] = arguments[m3 + 2];
      d3.children = f2;
    }
    if (a2 && a2.defaultProps)
      for (e3 in g3 = a2.defaultProps, g3)
        d3[e3] === void 0 && (d3[e3] = g3[e3]);
    return {
      $$typeof: n3,
      type: a2,
      key: k3,
      ref: h2,
      props: d3,
      _owner: G3.current
    };
  }
  function K2(a2, b2) {
    return {
      $$typeof: n3,
      type: a2.type,
      key: b2,
      ref: a2.ref,
      props: a2.props,
      _owner: a2._owner
    };
  }
  function L2(a2) {
    return typeof a2 === "object" && a2 !== null && a2.$$typeof === n3;
  }
  function escape(a2) {
    var b2 = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var M3 = /\/+/g;
  function N3(a2, b2) {
    return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
  }
  function O3(a2, b2, c3, e3, d3) {
    var k3 = typeof a2;
    if (k3 === "undefined" || k3 === "boolean")
      a2 = null;
    var h2 = false;
    if (a2 === null)
      h2 = true;
    else
      switch (k3) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case n3:
            case p3:
              h2 = true;
          }
      }
    if (h2)
      return h2 = a2, d3 = d3(h2), a2 = e3 === "" ? "." + N3(h2, 0) : e3, Array.isArray(d3) ? (c3 = "", a2 != null && (c3 = a2.replace(M3, "$&/") + "/"), O3(d3, b2, c3, "", function(a3) {
        return a3;
      })) : d3 != null && (L2(d3) && (d3 = K2(d3, c3 + (!d3.key || h2 && h2.key === d3.key ? "" : ("" + d3.key).replace(M3, "$&/") + "/") + a2)), b2.push(d3)), 1;
    h2 = 0;
    e3 = e3 === "" ? "." : e3 + ":";
    if (Array.isArray(a2))
      for (var g3 = 0; g3 < a2.length; g3++) {
        k3 = a2[g3];
        var f2 = e3 + N3(k3, g3);
        h2 += O3(k3, b2, c3, f2, d3);
      }
    else if (f2 = y4(a2), typeof f2 === "function")
      for (a2 = f2.call(a2), g3 = 0; !(k3 = a2.next()).done; )
        k3 = k3.value, f2 = e3 + N3(k3, g3++), h2 += O3(k3, b2, c3, f2, d3);
    else if (k3 === "object")
      throw b2 = "" + a2, Error(z3(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
    return h2;
  }
  function P3(a2, b2, c3) {
    if (a2 == null)
      return a2;
    var e3 = [], d3 = 0;
    O3(a2, e3, "", "", function(a3) {
      return b2.call(c3, a3, d3++);
    });
    return e3;
  }
  function Q2(a2) {
    if (a2._status === -1) {
      var b2 = a2._result;
      b2 = b2();
      a2._status = 0;
      a2._result = b2;
      b2.then(function(b3) {
        a2._status === 0 && (b3 = b3.default, a2._status = 1, a2._result = b3);
      }, function(b3) {
        a2._status === 0 && (a2._status = 2, a2._result = b3);
      });
    }
    if (a2._status === 1)
      return a2._result;
    throw a2._result;
  }
  var R3 = {
    current: null
  };
  function S3() {
    var a2 = R3.current;
    if (a2 === null)
      throw Error(z3(321));
    return a2;
  }
  var T3 = {
    ReactCurrentDispatcher: R3,
    ReactCurrentBatchConfig: {
      transition: 0
    },
    ReactCurrentOwner: G3,
    IsSomeRendererActing: {
      current: false
    },
    assign: objectAssign
  };
  exports.Children = {
    map: P3,
    forEach: function(a2, b2, c3) {
      P3(a2, function() {
        b2.apply(this, arguments);
      }, c3);
    },
    count: function(a2) {
      var b2 = 0;
      P3(a2, function() {
        b2++;
      });
      return b2;
    },
    toArray: function(a2) {
      return P3(a2, function(a3) {
        return a3;
      }) || [];
    },
    only: function(a2) {
      if (!L2(a2))
        throw Error(z3(143));
      return a2;
    }
  };
  exports.Component = C3;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T3;
  exports.cloneElement = function(a2, b2, c3) {
    if (a2 === null || a2 === void 0)
      throw Error(z3(267, a2));
    var e3 = objectAssign({}, a2.props), d3 = a2.key, k3 = a2.ref, h2 = a2._owner;
    if (b2 != null) {
      b2.ref !== void 0 && (k3 = b2.ref, h2 = G3.current);
      b2.key !== void 0 && (d3 = "" + b2.key);
      if (a2.type && a2.type.defaultProps)
        var g3 = a2.type.defaultProps;
      for (f2 in b2)
        H4.call(b2, f2) && !I4.hasOwnProperty(f2) && (e3[f2] = b2[f2] === void 0 && g3 !== void 0 ? g3[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (f2 === 1)
      e3.children = c3;
    else if (1 < f2) {
      g3 = Array(f2);
      for (var m3 = 0; m3 < f2; m3++)
        g3[m3] = arguments[m3 + 2];
      e3.children = g3;
    }
    return {
      $$typeof: n3,
      type: a2.type,
      key: d3,
      ref: k3,
      props: e3,
      _owner: h2
    };
  };
  exports.createContext = function(a2, b2) {
    b2 === void 0 && (b2 = null);
    a2 = {
      $$typeof: r4,
      _calculateChangedBits: b2,
      _currentValue: a2,
      _currentValue2: a2,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a2.Provider = {
      $$typeof: q3,
      _context: a2
    };
    return a2.Consumer = a2;
  };
  exports.createElement = J3;
  exports.createFactory = function(a2) {
    var b2 = J3.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  exports.createRef = function() {
    return {
      current: null
    };
  };
  exports.forwardRef = function(a2) {
    return {
      $$typeof: t3,
      render: a2
    };
  };
  exports.isValidElement = L2;
  exports.lazy = function(a2) {
    return {
      $$typeof: v2,
      _payload: {
        _status: -1,
        _result: a2
      },
      _init: Q2
    };
  };
  exports.memo = function(a2, b2) {
    return {
      $$typeof: u,
      type: a2,
      compare: b2 === void 0 ? null : b2
    };
  };
  exports.useCallback = function(a2, b2) {
    return S3().useCallback(a2, b2);
  };
  exports.useContext = function(a2, b2) {
    return S3().useContext(a2, b2);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a2, b2) {
    return S3().useEffect(a2, b2);
  };
  exports.useImperativeHandle = function(a2, b2, c3) {
    return S3().useImperativeHandle(a2, b2, c3);
  };
  exports.useLayoutEffect = function(a2, b2) {
    return S3().useLayoutEffect(a2, b2);
  };
  exports.useMemo = function(a2, b2) {
    return S3().useMemo(a2, b2);
  };
  exports.useReducer = function(a2, b2, c3) {
    return S3().useReducer(a2, b2, c3);
  };
  exports.useRef = function(a2) {
    return S3().useRef(a2);
  };
  exports.useState = function(a2) {
    return S3().useState(a2);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/dist/pkg/react.js
var createContext = react.createContext;
var useContext = react.useContext;
var useEffect = react.useEffect;
var useLayoutEffect = react.useLayoutEffect;
var useRef = react.useRef;
var useState = react.useState;

// build/dist/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f2, g3, h2, k3;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q3 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q3;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u = null, w2 = function() {
      if (t3 !== null)
        try {
          var a2 = exports.unstable_now();
          t3(true, a2);
          t3 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t3 !== null ? setTimeout(f2, 0, a2) : (t3 = a2, setTimeout(w2, 0));
    };
    g3 = function(a2, b2) {
      u = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k3 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x3 = window.setTimeout, y4 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A3 = false, B4 = null, C3 = -1, D3 = 5, E3 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E3;
    };
    k3 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D3 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F4 = new MessageChannel(), G3 = F4.port2;
    F4.port1.onmessage = function() {
      if (B4 !== null) {
        var a2 = exports.unstable_now();
        E3 = a2 + D3;
        try {
          B4(true, a2) ? G3.postMessage(null) : (A3 = false, B4 = null);
        } catch (b2) {
          throw G3.postMessage(null), b2;
        }
      } else
        A3 = false;
    };
    f2 = function(a2) {
      B4 = a2;
      A3 || (A3 = true, G3.postMessage(null));
    };
    g3 = function(a2, b2) {
      C3 = x3(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y4(C3);
      C3 = -1;
    };
  }
  function H4(a2, b2) {
    var c3 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d3 = c3 - 1 >>> 1, e3 = a2[d3];
        if (e3 !== void 0 && 0 < I4(e3, b2))
          a2[d3] = b2, a2[c3] = e3, c3 = d3;
        else
          break a;
      }
  }
  function J3(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c3 = a2.pop();
      if (c3 !== b2) {
        a2[0] = c3;
        a:
          for (var d3 = 0, e3 = a2.length; d3 < e3; ) {
            var m3 = 2 * (d3 + 1) - 1, n3 = a2[m3], v2 = m3 + 1, r4 = a2[v2];
            if (n3 !== void 0 && 0 > I4(n3, c3))
              r4 !== void 0 && 0 > I4(r4, n3) ? (a2[d3] = r4, a2[v2] = c3, d3 = v2) : (a2[d3] = n3, a2[m3] = c3, d3 = m3);
            else if (r4 !== void 0 && 0 > I4(r4, c3))
              a2[d3] = r4, a2[v2] = c3, d3 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I4(a2, b2) {
    var c3 = a2.sortIndex - b2.sortIndex;
    return c3 !== 0 ? c3 : a2.id - b2.id;
  }
  var L2 = [], M3 = [], N3 = 1, O3 = null, P3 = 3, Q2 = false, R3 = false, S3 = false;
  function T3(a2) {
    for (var b2 = J3(M3); b2 !== null; ) {
      if (b2.callback === null)
        K2(M3);
      else if (b2.startTime <= a2)
        K2(M3), b2.sortIndex = b2.expirationTime, H4(L2, b2);
      else
        break;
      b2 = J3(M3);
    }
  }
  function U3(a2) {
    S3 = false;
    T3(a2);
    if (!R3)
      if (J3(L2) !== null)
        R3 = true, f2(V3);
      else {
        var b2 = J3(M3);
        b2 !== null && g3(U3, b2.startTime - a2);
      }
  }
  function V3(a2, b2) {
    R3 = false;
    S3 && (S3 = false, h2());
    Q2 = true;
    var c3 = P3;
    try {
      T3(b2);
      for (O3 = J3(L2); O3 !== null && (!(O3.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d3 = O3.callback;
        if (typeof d3 === "function") {
          O3.callback = null;
          P3 = O3.priorityLevel;
          var e3 = d3(O3.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e3 === "function" ? O3.callback = e3 : O3 === J3(L2) && K2(L2);
          T3(b2);
        } else
          K2(L2);
        O3 = J3(L2);
      }
      if (O3 !== null)
        var m3 = true;
      else {
        var n3 = J3(M3);
        n3 !== null && g3(U3, n3.startTime - b2);
        m3 = false;
      }
      return m3;
    } finally {
      O3 = null, P3 = c3, Q2 = false;
    }
  }
  var W2 = k3;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R3 || Q2 || (R3 = true, f2(V3));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J3(L2);
  };
  exports.unstable_next = function(a2) {
    switch (P3) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P3;
    }
    var c3 = P3;
    P3 = b2;
    try {
      return a2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c3 = P3;
    P3 = a2;
    try {
      return b2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c3) {
    var d3 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
    switch (a2) {
      case 1:
        var e3 = -1;
        break;
      case 2:
        e3 = 250;
        break;
      case 5:
        e3 = 1073741823;
        break;
      case 4:
        e3 = 1e4;
        break;
      default:
        e3 = 5e3;
    }
    e3 = c3 + e3;
    a2 = {
      id: N3++,
      callback: b2,
      priorityLevel: a2,
      startTime: c3,
      expirationTime: e3,
      sortIndex: -1
    };
    c3 > d3 ? (a2.sortIndex = c3, H4(M3, a2), J3(L2) === null && a2 === J3(M3) && (S3 ? h2() : S3 = true, g3(U3, c3 - d3))) : (a2.sortIndex = e3, H4(L2, a2), R3 || Q2 || (R3 = true, f2(V3)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P3;
    return function() {
      var c3 = P3;
      P3 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P3 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c3, d3) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c3, d3) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c3, d3))
    return true;
  if (d3)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a2, b2, c3, d3, e3, f2, g3) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e3;
  this.mustUseProperty = c3;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g3;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D[b2] = new B(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c3, d3) {
  var e3 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e3 !== null ? e3.type === 0 : d3 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c3, e3, d3) && (c3 = null), d3 || e3 === null ? la(b2) && (c3 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c3)) : e3.mustUseProperty ? a2[e3.propertyName] = c3 === null ? e3.type === 3 ? false : "" : c3 : (b2 = e3.attributeName, d3 = e3.attributeNamespace, c3 === null ? a2.removeAttribute(b2) : (e3 = e3.type, c3 = e3 === 3 || e3 === 4 && c3 === true ? "" : "" + c3, d3 ? a2.setAttributeNS(d3, b2, c3) : a2.setAttribute(b2, c3))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E3 = Symbol.for;
  sa = E3("react.element");
  ta = E3("react.portal");
  ua = E3("react.fragment");
  wa = E3("react.strict_mode");
  xa = E3("react.profiler");
  ya = E3("react.provider");
  za = E3("react.context");
  Aa = E3("react.forward_ref");
  Ba = E3("react.suspense");
  Ca = E3("react.suspense_list");
  Da = E3("react.memo");
  Ea = E3("react.lazy");
  Fa = E3("react.block");
  E3("react.scope");
  Ga = E3("react.opaque.id");
  Ha = E3("react.debug_trace_mode");
  Ia = E3("react.offscreen");
  Ja = E3("react.legacy_hidden");
}
var E3;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b2 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) {
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k3) {
          var d3 = k3;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k3) {
          d3 = k3;
        }
        a2.call(b2.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (k3) {
        d3 = k3;
      }
      a2();
    }
  } catch (k3) {
    if (k3 && d3 && typeof k3.stack === "string") {
      for (var e3 = k3.stack.split("\n"), f2 = d3.stack.split("\n"), g3 = e3.length - 1, h2 = f2.length - 1; 1 <= g3 && 0 <= h2 && e3[g3] !== f2[h2]; )
        h2--;
      for (; 1 <= g3 && 0 <= h2; g3--, h2--)
        if (e3[g3] !== f2[h2]) {
          if (g3 !== 1 || h2 !== 1) {
            do
              if (g3--, h2--, 0 > h2 || e3[g3] !== f2[h2])
                return "\n" + e3[g3].replace(" at new ", " at ");
            while (1 <= g3 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d3 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e3 = c3.get, f2 = c3.set;
    Object.defineProperty(a2, b2, {
      configurable: true,
      get: function() {
        return e3.call(this);
      },
      set: function(a3) {
        d3 = "" + a3;
        f2.call(this, a3);
      }
    });
    Object.defineProperty(a2, b2, {
      enumerable: c3.enumerable
    });
    return {
      getValue: function() {
        return d3;
      },
      setValue: function(a3) {
        d3 = "" + a3;
      },
      stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      }
    };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c3 = b2.getValue();
  var d3 = "";
  a2 && (d3 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d3;
  return a2 !== c3 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c3 = b2.checked;
  return objectAssign({}, b2, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: c3 != null ? c3 : a2._wrapperState.initialChecked
  });
}
function Za(a2, b2) {
  var c3 = b2.defaultValue == null ? "" : b2.defaultValue, d3 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c3 = Sa(b2.value != null ? b2.value : c3);
  a2._wrapperState = {
    initialChecked: d3,
    initialValue: c3,
    controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null
  };
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c3 = Sa(b2.value), d3 = b2.type;
  if (c3 != null) {
    if (d3 === "number") {
      if (c3 === 0 && a2.value === "" || a2.value != c3)
        a2.value = "" + c3;
    } else
      a2.value !== "" + c3 && (a2.value = "" + c3);
  } else if (d3 === "submit" || d3 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c3) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c3) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d3 = b2.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c3 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c3 = a2.name;
  c3 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c3 !== "" && (a2.name = c3);
}
function bb(a2, b2, c3) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c3 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c3 && (a2.defaultValue = "" + c3);
}
function db(a2) {
  var b2 = "";
  react.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = objectAssign({
    children: void 0
  }, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c3, d3) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e3 = 0; e3 < c3.length; e3++)
      b2["$" + c3[e3]] = true;
    for (c3 = 0; c3 < a2.length; c3++)
      e3 = b2.hasOwnProperty("$" + a2[c3].value), a2[c3].selected !== e3 && (a2[c3].selected = e3), e3 && d3 && (a2[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b2 = null;
    for (e3 = 0; e3 < a2.length; e3++) {
      if (a2[e3].value === c3) {
        a2[e3].selected = true;
        d3 && (a2[e3].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e3].disabled || (b2 = a2[e3]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b2, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a2._wrapperState.initialValue
  });
}
function hb(a2, b2) {
  var c3 = b2.value;
  if (c3 == null) {
    c3 = b2.children;
    b2 = b2.defaultValue;
    if (c3 != null) {
      if (b2 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b2 = c3;
    }
    b2 == null && (b2 = "");
    c3 = b2;
  }
  a2._wrapperState = {
    initialValue: Sa(c3)
  };
}
function ib(a2, b2) {
  var c3 = Sa(b2.value), d3 = Sa(b2.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a2.value && (a2.value = c3), b2.defaultValue == null && a2.defaultValue !== c3 && (a2.defaultValue = c3));
  d3 != null && (a2.defaultValue = "" + d3);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb;
var ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c3, d3, e3) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c3, d3, e3);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c3 = a2.firstChild;
    if (c3 && c3 === a2.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c3) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c3 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c3 in b2)
    if (b2.hasOwnProperty(c3)) {
      var d3 = c3.indexOf("--") === 0, e3 = sb(c3, b2[c3], d3);
      c3 === "float" && (c3 = "cssFloat");
      d3 ? a2.setProperty(c3, e3) : a2[c3] = e3;
    }
}
var ub = objectAssign({
  menuitem: true
}, {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
});
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c3, d3, e3) {
  return a2(b2, c3, d3, e3);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b2, c3) {
  if (Lb)
    return a2(b2, c3);
  Lb = true;
  try {
    return Jb(a2, b2, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c3 = a2.stateNode;
  if (c3 === null)
    return null;
  var d3 = Db(c3);
  if (d3 === null)
    return null;
  c3 = d3[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d3 = !d3.disabled) || (a2 = a2.type, d3 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d3;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b2, typeof c3));
  return c3;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {
      get: function() {
        Pb = true;
      }
    });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
var Qb;
function Rb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c3, l2);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {
  onError: function(a2) {
    Sb = true;
    Tb = a2;
  }
};
function Xb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c3, d3, e3, f2, g3, h2, k3) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c3 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c3 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c3 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c3 = a2, d3 = b2; ; ) {
    var e3 = c3.return;
    if (e3 === null)
      break;
    var f2 = e3.alternate;
    if (f2 === null) {
      d3 = e3.return;
      if (d3 !== null) {
        c3 = d3;
        continue;
      }
      break;
    }
    if (e3.child === f2.child) {
      for (f2 = e3.child; f2; ) {
        if (f2 === c3)
          return ac(e3), a2;
        if (f2 === d3)
          return ac(e3), b2;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d3.return)
      c3 = e3, d3 = f2;
    else {
      for (var g3 = false, h2 = e3.child; h2; ) {
        if (h2 === c3) {
          g3 = true;
          c3 = e3;
          d3 = f2;
          break;
        }
        if (h2 === d3) {
          g3 = true;
          d3 = e3;
          c3 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g3) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c3) {
            g3 = true;
            c3 = f2;
            d3 = e3;
            break;
          }
          if (h2 === d3) {
            g3 = true;
            d3 = f2;
            c3 = e3;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g3)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d3)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c3 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c3)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c3, d3, e3) {
  return {
    blockedOn: a2,
    domEventName: b2,
    eventSystemFlags: c3 | 16,
    nativeEvent: e3,
    targetContainers: [d3]
  };
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c3, d3, e3, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c3, d3, e3, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d3;
  b2 = a2.targetContainers;
  e3 !== null && b2.indexOf(e3) === -1 && b2.push(e3);
  return a2;
}
function uc(a2, b2, c3, d3, e3) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c3, d3, e3), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c3, d3, e3), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c3, d3, e3), true;
    case "pointerover":
      var f2 = e3.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c3, d3, e3));
      return true;
    case "gotpointercapture":
      return f2 = e3.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c3, d3, e3)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c3 = Zb(b2);
    if (c3 !== null) {
      if (b2 = c3.tag, b2 === 13) {
        if (b2 = $b(c3), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            scheduler.unstable_runWithPriority(a2.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b2 === 3 && c3.stateNode.hydrate) {
        a2.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c3 !== null)
      return b2 = Cb(c3), b2 !== null && fc(b2), a2.blockedOn = c3, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c3) {
  xc(a2) && c3.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c3 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c3 !== null) {
        a2.blockedOn = c3;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d3 = jc[c3];
      d3.blockedOn === a2 && (d3.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c3 = 0; c3 < pc.length; c3++)
    d3 = pc[c3], d3.blockedOn === a2 && (d3.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c3 = {};
  c3[a2.toLowerCase()] = b2.toLowerCase();
  c3["Webkit" + a2] = "webkit" + b2;
  c3["Moz" + a2] = "moz" + b2;
  return c3;
}
var Ec = {
  animationend: Dc("Animation", "AnimationEnd"),
  animationiteration: Dc("Animation", "AnimationIteration"),
  animationstart: Dc("Animation", "AnimationStart"),
  transitionend: Dc("Transition", "TransitionEnd")
};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c3;
  for (c3 in b2)
    if (b2.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a2] = b2[c3];
  return a2;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];
function Pc(a2, b2) {
  for (var c3 = 0; c3 < a2.length; c3 += 2) {
    var d3 = a2[c3], e3 = a2[c3 + 1];
    e3 = "on" + (e3[0].toUpperCase() + e3.slice(1));
    Nc.set(d3, b2);
    Mc.set(d3, e3);
    da(e3, [d3]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F = 5, b2;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a2));
  }
}
function Uc(a2, b2) {
  var c3 = a2.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d3 = 0, e3 = 0, f2 = a2.expiredLanes, g3 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d3 = f2, e3 = F = 15;
  else if (f2 = c3 & 134217727, f2 !== 0) {
    var k3 = f2 & ~g3;
    k3 !== 0 ? (d3 = Rc(k3), e3 = F) : (h2 &= f2, h2 !== 0 && (d3 = Rc(h2), e3 = F));
  } else
    f2 = c3 & ~g3, f2 !== 0 ? (d3 = Rc(f2), e3 = F) : h2 !== 0 && (d3 = Rc(h2), e3 = F);
  if (d3 === 0)
    return 0;
  d3 = 31 - Vc(d3);
  d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
  if (b2 !== 0 && b2 !== d3 && (b2 & g3) === 0) {
    Rc(b2);
    if (e3 <= F)
      return b2;
    F = e3;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d3; 0 < b2; )
      c3 = 31 - Vc(b2), e3 = 1 << c3, d3 |= a2[c3], b2 &= ~e3;
  return d3;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c3 = 0; 31 > c3; c3++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c3) {
  a2.pendingLanes |= b2;
  var d3 = b2 - 1;
  a2.suspendedLanes &= d3;
  a2.pingedLanes &= d3;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a2, b2, c3, d3) {
  Kb || Ib();
  var e3 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e3, a2, b2, c3, d3);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c3, d3) {
  ed(dd, hd.bind(null, a2, b2, c3, d3));
}
function hd(a2, b2, c3, d3) {
  if (fd) {
    var e3;
    if ((e3 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c3, d3), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c3, d3);
      if (f2 === null)
        e3 && sc(a2, d3);
      else {
        if (e3) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c3, d3);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c3, d3))
            return;
          sc(a2, d3);
        }
        jd(a2, b2, d3, null, c3);
      }
    }
  }
}
function yc(a2, b2, c3, d3) {
  var e3 = xb(d3);
  e3 = wc(e3);
  if (e3 !== null) {
    var f2 = Zb(e3);
    if (f2 === null)
      e3 = null;
    else {
      var g3 = f2.tag;
      if (g3 === 13) {
        e3 = $b(f2);
        if (e3 !== null)
          return e3;
        e3 = null;
      } else if (g3 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e3 = null;
      } else
        f2 !== e3 && (e3 = null);
    }
  }
  jd(a2, b2, d3, e3, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c3 = b2.length, d3, e3 = "value" in kd ? kd.value : kd.textContent, f2 = e3.length;
  for (a2 = 0; a2 < c3 && b2[a2] === e3[a2]; a2++)
    ;
  var g3 = c3 - a2;
  for (d3 = 1; d3 <= g3 && b2[c3 - d3] === e3[f2 - d3]; d3++)
    ;
  return md = e3.slice(a2, 1 < d3 ? 1 - d3 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d3, e3, f2, g3) {
    this._reactName = b3;
    this._targetInst = e3;
    this.type = d3;
    this.nativeEvent = f2;
    this.target = g3;
    this.currentTarget = null;
    for (var c3 in a2)
      a2.hasOwnProperty(c3) && (b3 = a2[c3], this[c3] = b3 ? b3(f2) : f2[c3]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b2.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
    },
    stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    },
    persist: function() {
    },
    isPersistent: pd
  });
  return b2;
}
var sd = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var td = rd(sd);
var ud = objectAssign({}, sd, {
  view: 0,
  detail: 0
});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: zd,
  button: 0,
  buttons: 0,
  relatedTarget: function(a2) {
    return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  },
  movementX: function(a2) {
    if ("movementX" in a2)
      return a2.movementX;
    a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  },
  movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  }
});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {
  dataTransfer: 0
});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {
  relatedTarget: 0
});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {
  clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  }
});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {
  data: 0
});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {
  key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if (b2 !== "Unidentified")
        return b2;
    }
    return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: zd,
  charCode: function(a2) {
    return a2.type === "keypress" ? od(a2) : 0;
  },
  keyCode: function(a2) {
    return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  },
  which: function(a2) {
    return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
  }
});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: zd
});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = {
  color: true,
  date: true,
  datetime: true,
  "datetime-local": true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true
};
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
}
function ne(a2, b2, c3, d3) {
  Eb(d3);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c3 = new td("onChange", "change", null, c3, d3), a2.push({
    event: c3,
    listeners: b2
  }));
}
var pe = null;
var qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c3) {
  a2 === "focusin" ? (Ae(), pe = b2, qe = c3, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c3 = Object.keys(a2), d3 = Object.keys(b2);
  if (c3.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c3.length; d3++)
    if (!Ie.call(b2, c3[d3]) || !He(a2[c3[d3]], b2[c3[d3]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c3 = Ke(a2);
  a2 = 0;
  for (var d3; c3; ) {
    if (c3.nodeType === 3) {
      d3 = a2 + c3.textContent.length;
      if (a2 <= b2 && d3 >= b2)
        return {
          node: c3,
          offset: b2 - a2
        };
      a2 = d3;
    }
    a: {
      for (; c3; ) {
        if (c3.nextSibling) {
          c3 = c3.nextSibling;
          break a;
        }
        c3 = c3.parentNode;
      }
      c3 = void 0;
    }
    c3 = Ke(c3);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b2.contentWindow.location.href === "string";
    } catch (d3) {
      c3 = false;
    }
    if (c3)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a2, b2, c3) {
  var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = {
    start: d3.selectionStart,
    end: d3.selectionEnd
  } : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {
    anchorNode: d3.anchorNode,
    anchorOffset: d3.anchorOffset,
    focusNode: d3.focusNode,
    focusOffset: d3.focusOffset
  }), Se && Je(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b2 = new td("onSelect", "select", null, b2, c3), a2.push({
    event: b2,
    listeners: d3
  }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c3) {
  var d3 = a2.type || "unknown-event";
  a2.currentTarget = c3;
  Yb(d3, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c3 = 0; c3 < a2.length; c3++) {
    var d3 = a2[c3], e3 = d3.event;
    d3 = d3.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g3 = d3.length - 1; 0 <= g3; g3--) {
          var h2 = d3[g3], k3 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
      else
        for (g3 = 0; g3 < d3.length; g3++) {
          h2 = d3[g3];
          k3 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k3 !== f2 && e3.isPropagationStopped())
            break a;
          Ze(e3, h2, l2);
          f2 = k3;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b2) {
  var c3 = $e(b2), d3 = a2 + "__bubble";
  c3.has(d3) || (af(b2, a2, 2, false), c3.add(d3));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c3, d3) {
  var e3 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c3;
  a2 === "selectionchange" && c3.nodeType !== 9 && (f2 = c3.ownerDocument);
  if (d3 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e3 |= 2;
    f2 = d3;
  }
  var g3 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g3.has(h2) || (b2 && (e3 |= 4), af(f2, a2, e3, b2), g3.add(h2));
}
function af(a2, b2, c3, d3) {
  var e3 = Nc.get(b2);
  switch (e3 === void 0 ? 2 : e3) {
    case 0:
      e3 = gd;
      break;
    case 1:
      e3 = id;
      break;
    default:
      e3 = hd;
  }
  c3 = e3.bind(null, b2, c3, a2);
  e3 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e3 = true);
  d3 ? e3 !== void 0 ? a2.addEventListener(b2, c3, {
    capture: true,
    passive: e3
  }) : a2.addEventListener(b2, c3, true) : e3 !== void 0 ? a2.addEventListener(b2, c3, {
    passive: e3
  }) : a2.addEventListener(b2, c3, false);
}
function jd(a2, b2, c3, d3, e3) {
  var f2 = d3;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g3 = d3.tag;
        if (g3 === 3 || g3 === 4) {
          var h2 = d3.stateNode.containerInfo;
          if (h2 === e3 || h2.nodeType === 8 && h2.parentNode === e3)
            break;
          if (g3 === 4)
            for (g3 = d3.return; g3 !== null; ) {
              var k3 = g3.tag;
              if (k3 === 3 || k3 === 4) {
                if (k3 = g3.stateNode.containerInfo, k3 === e3 || k3.nodeType === 8 && k3.parentNode === e3)
                  return;
              }
              g3 = g3.return;
            }
          for (; h2 !== null; ) {
            g3 = wc(h2);
            if (g3 === null)
              return;
            k3 = g3.tag;
            if (k3 === 5 || k3 === 6) {
              d3 = f2 = g3;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d3 = d3.return;
      }
  Nb(function() {
    var d4 = f2, e4 = xb(c3), g4 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k4 = td, x3 = a2;
        switch (a2) {
          case "keypress":
            if (od(c3) === 0)
              break a;
          case "keydown":
          case "keyup":
            k4 = Rd;
            break;
          case "focusin":
            x3 = "focus";
            k4 = Fd;
            break;
          case "focusout":
            x3 = "blur";
            k4 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k4 = Fd;
            break;
          case "click":
            if (c3.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k4 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k4 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k4 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k4 = Hd;
            break;
          case Lc:
            k4 = Xd;
            break;
          case "scroll":
            k4 = vd;
            break;
          case "wheel":
            k4 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k4 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k4 = Td;
        }
        var w2 = (b2 & 4) !== 0, z3 = !w2 && a2 === "scroll", u = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t3 = d4, q3; t3 !== null; ) {
          q3 = t3;
          var v2 = q3.stateNode;
          q3.tag === 5 && v2 !== null && (q3 = v2, u !== null && (v2 = Ob(t3, u), v2 != null && w2.push(ef(t3, v2, q3))));
          if (z3)
            break;
          t3 = t3.return;
        }
        0 < w2.length && (h3 = new k4(h3, x3, null, c3, e4), g4.push({
          event: h3,
          listeners: w2
        }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k4 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x3 = c3.relatedTarget || c3.fromElement) && (wc(x3) || x3[ff]))
          break a;
        if (k4 || h3) {
          h3 = e4.window === e4 ? e4 : (h3 = e4.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k4) {
            if (x3 = c3.relatedTarget || c3.toElement, k4 = d4, x3 = x3 ? wc(x3) : null, x3 !== null && (z3 = Zb(x3), x3 !== z3 || x3.tag !== 5 && x3.tag !== 6))
              x3 = null;
          } else
            k4 = null, x3 = d4;
          if (k4 !== x3) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u = "onMouseEnter";
            t3 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u = "onPointerEnter", t3 = "pointer";
            z3 = k4 == null ? h3 : ue(k4);
            q3 = x3 == null ? h3 : ue(x3);
            h3 = new w2(v2, t3 + "leave", k4, c3, e4);
            h3.target = z3;
            h3.relatedTarget = q3;
            v2 = null;
            wc(e4) === d4 && (w2 = new w2(u, t3 + "enter", x3, c3, e4), w2.target = q3, w2.relatedTarget = z3, v2 = w2);
            z3 = v2;
            if (k4 && x3)
              b: {
                w2 = k4;
                u = x3;
                t3 = 0;
                for (q3 = w2; q3; q3 = gf(q3))
                  t3++;
                q3 = 0;
                for (v2 = u; v2; v2 = gf(v2))
                  q3++;
                for (; 0 < t3 - q3; )
                  w2 = gf(w2), t3--;
                for (; 0 < q3 - t3; )
                  u = gf(u), q3--;
                for (; t3--; ) {
                  if (w2 === u || u !== null && w2 === u.alternate)
                    break b;
                  w2 = gf(w2);
                  u = gf(u);
                }
                w2 = null;
              }
            else
              w2 = null;
            k4 !== null && hf(g4, h3, k4, w2, false);
            x3 !== null && z3 !== null && hf(g4, z3, x3, w2, true);
          }
        }
      }
      a: {
        h3 = d4 ? ue(d4) : window;
        k4 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k4 === "select" || k4 === "input" && h3.type === "file")
          var J3 = ve;
        else if (me(h3)) {
          if (we)
            J3 = Fe;
          else {
            J3 = De;
            var K2 = Ce;
          }
        } else
          (k4 = h3.nodeName) && k4.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J3 = Ee);
        if (J3 && (J3 = J3(a2, d4))) {
          ne(g4, J3, c3, e4);
          break a;
        }
        K2 && K2(a2, h3, d4);
        a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d4 ? ue(d4) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d4, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g4, c3, e4);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g4, c3, e4);
      }
      var Q2;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a2, c3) && (L2 = "onCompositionEnd") : a2 === "keydown" && c3.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c3.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e4, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d4, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c3, e4), g4.push({
        event: L2,
        listeners: K2
      }), Q2 ? L2.data = Q2 : (Q2 = he(c3), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a2, c3) : ke(a2, c3))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e4 = new Ld("onBeforeInput", "beforeinput", null, c3, e4), g4.push({
          event: e4,
          listeners: d4
        }), e4.data = Q2);
    }
    se(g4, b2);
  });
}
function ef(a2, b2, c3) {
  return {
    instance: a2,
    listener: b2,
    currentTarget: c3
  };
}
function oe(a2, b2) {
  for (var c3 = b2 + "Capture", d3 = []; a2 !== null; ) {
    var e3 = a2, f2 = e3.stateNode;
    e3.tag === 5 && f2 !== null && (e3 = f2, f2 = Ob(a2, c3), f2 != null && d3.unshift(ef(a2, f2, e3)), f2 = Ob(a2, b2), f2 != null && d3.push(ef(a2, f2, e3)));
    a2 = a2.return;
  }
  return d3;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c3, d3, e3) {
  for (var f2 = b2._reactName, g3 = []; c3 !== null && c3 !== d3; ) {
    var h2 = c3, k3 = h2.alternate, l2 = h2.stateNode;
    if (k3 !== null && k3 === d3)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e3 ? (k3 = Ob(c3, f2), k3 != null && g3.unshift(ef(c3, k3, h2))) : e3 || (k3 = Ob(c3, f2), k3 != null && g3.push(ef(c3, k3, h2))));
    c3 = c3.return;
  }
  g3.length !== 0 && a2.push({
    event: b2,
    listeners: g3
  });
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c3 = a2.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c3 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return {
    $$typeof: Ga,
    toString: a2,
    valueOf: a2
  };
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c3 = a2.parentNode; c3; ) {
    if (b2 = c3[ff] || c3[wf]) {
      c3 = b2.alternate;
      if (b2.child !== null || c3 !== null && c3.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c3 = a2[wf])
            return c3;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c3;
    c3 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = new Set());
  return b2;
}
var zf = [];
var Af = -1;
function Bf(a2) {
  return {
    current: a2
  };
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a2, b2) {
  var c3 = a2.type.contextTypes;
  if (!c3)
    return Cf;
  var d3 = a2.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e3 = {}, f2;
  for (f2 in c3)
    e3[f2] = b2[f2];
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e3);
  return e3;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b2, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b2);
  I(N, c3);
}
function If(a2, b2, c3) {
  var d3 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c3;
  d3 = d3.getChildContext();
  for (var e3 in d3)
    if (!(e3 in a2))
      throw Error(y(108, Ra(b2) || "Unknown", e3));
  return objectAssign({}, c3, d3);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b2, c3) {
  var d3 = a2.stateNode;
  if (!d3)
    throw Error(y(169));
  c3 ? (a2 = If(a2, b2, Df), d3.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c3);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c3) {
  a2 = fg(a2);
  return Of(a2, b2, c3);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c3 = b2[a2];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = objectAssign({}, b2);
    a2 = a2.defaultProps;
    for (var c3 in a2)
      b2[c3] === void 0 && (b2[c3] = a2[c3]);
    return b2;
  }
  return b2;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c3 = a2.alternate;
    if ((a2.childLanes & b2) === b2) {
      if (c3 === null || (c3.childLanes & b2) === b2)
        break;
      else
        c3.childLanes |= b2;
    } else
      a2.childLanes |= b2, c3 !== null && (c3.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = {
      context: a2,
      observedBits: b2,
      next: null
    };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b2;
      ng.dependencies = {
        lanes: 0,
        firstContext: b2,
        responders: null
      };
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = {
    baseState: a2.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null
    },
    effects: null
  };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = {
    baseState: a2.baseState,
    firstBaseUpdate: a2.firstBaseUpdate,
    lastBaseUpdate: a2.lastBaseUpdate,
    shared: a2.shared,
    effects: a2.effects
  });
}
function zg(a2, b2) {
  return {
    eventTime: a2,
    lane: b2,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c3 = a2.pending;
    c3 === null ? b2.next = b2 : (b2.next = c3.next, c3.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c3 = a2.updateQueue, d3 = a2.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
    var e3 = null, f2 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g3 = {
          eventTime: c3.eventTime,
          lane: c3.lane,
          tag: c3.tag,
          payload: c3.payload,
          callback: c3.callback,
          next: null
        };
        f2 === null ? e3 = f2 = g3 : f2 = f2.next = g3;
        c3 = c3.next;
      } while (c3 !== null);
      f2 === null ? e3 = f2 = b2 : f2 = f2.next = b2;
    } else
      e3 = f2 = b2;
    c3 = {
      baseState: d3.baseState,
      firstBaseUpdate: e3,
      lastBaseUpdate: f2,
      shared: d3.shared,
      effects: d3.effects
    };
    a2.updateQueue = c3;
    return;
  }
  a2 = c3.lastBaseUpdate;
  a2 === null ? c3.firstBaseUpdate = b2 : a2.next = b2;
  c3.lastBaseUpdate = b2;
}
function Cg(a2, b2, c3, d3) {
  var e3 = a2.updateQueue;
  wg = false;
  var f2 = e3.firstBaseUpdate, g3 = e3.lastBaseUpdate, h2 = e3.shared.pending;
  if (h2 !== null) {
    e3.shared.pending = null;
    var k3 = h2, l2 = k3.next;
    k3.next = null;
    g3 === null ? f2 = l2 : g3.next = l2;
    g3 = k3;
    var n3 = a2.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A3 = n3.lastBaseUpdate;
      A3 !== g3 && (A3 === null ? n3.firstBaseUpdate = l2 : A3.next = l2, n3.lastBaseUpdate = k3);
    }
  }
  if (f2 !== null) {
    A3 = e3.baseState;
    g3 = 0;
    n3 = l2 = k3 = null;
    do {
      h2 = f2.lane;
      var p3 = f2.eventTime;
      if ((d3 & h2) === h2) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C3 = a2, x3 = f2;
          h2 = b2;
          p3 = c3;
          switch (x3.tag) {
            case 1:
              C3 = x3.payload;
              if (typeof C3 === "function") {
                A3 = C3.call(p3, A3, h2);
                break a;
              }
              A3 = C3;
              break a;
            case 3:
              C3.flags = C3.flags & -4097 | 64;
            case 0:
              C3 = x3.payload;
              h2 = typeof C3 === "function" ? C3.call(p3, A3, h2) : C3;
              if (h2 === null || h2 === void 0)
                break a;
              A3 = objectAssign({}, A3, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e3.effects, h2 === null ? e3.effects = [f2] : h2.push(f2));
      } else
        p3 = {
          eventTime: p3,
          lane: h2,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        }, n3 === null ? (l2 = n3 = p3, k3 = A3) : n3 = n3.next = p3, g3 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e3.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e3.lastBaseUpdate = h2, e3.shared.pending = null;
    } while (1);
    n3 === null && (k3 = A3);
    e3.baseState = k3;
    e3.firstBaseUpdate = l2;
    e3.lastBaseUpdate = n3;
    Dg |= g3;
    a2.lanes = g3;
    a2.memoizedState = A3;
  }
}
function Eg(a2, b2, c3) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d3 = a2[b2], e3 = d3.callback;
      if (e3 !== null) {
        d3.callback = null;
        d3 = c3;
        if (typeof e3 !== "function")
          throw Error(y(191, e3));
        e3.call(d3);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a2, b2, c3, d3) {
  b2 = a2.memoizedState;
  c3 = c3(d3, b2);
  c3 = c3 === null || c3 === void 0 ? b2 : objectAssign({}, b2, c3);
  a2.memoizedState = c3;
  a2.lanes === 0 && (a2.updateQueue.baseState = c3);
}
var Kg = {
  isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
  },
  enqueueSetState: function(a2, b2, c3) {
    a2 = a2._reactInternals;
    var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
    f2.payload = b2;
    c3 !== void 0 && c3 !== null && (f2.callback = c3);
    Ag(a2, f2);
    Jg(a2, e3, d3);
  },
  enqueueReplaceState: function(a2, b2, c3) {
    a2 = a2._reactInternals;
    var d3 = Hg(), e3 = Ig(a2), f2 = zg(d3, e3);
    f2.tag = 1;
    f2.payload = b2;
    c3 !== void 0 && c3 !== null && (f2.callback = c3);
    Ag(a2, f2);
    Jg(a2, e3, d3);
  },
  enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c3 = Hg(), d3 = Ig(a2), e3 = zg(c3, d3);
    e3.tag = 2;
    b2 !== void 0 && b2 !== null && (e3.callback = b2);
    Ag(a2, e3);
    Jg(a2, d3, c3);
  }
};
function Lg(a2, b2, c3, d3, e3, f2, g3) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d3, f2, g3) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e3, f2) : true;
}
function Mg(a2, b2, c3) {
  var d3 = false, e3 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e3 = Ff(b2) ? Df : M.current, d3 = b2.contextTypes, f2 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a2, e3) : Cf);
  b2 = new b2(c3, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e3, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c3, d3) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c3, d3);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c3, d3);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c3, d3) {
  var e3 = a2.stateNode;
  e3.props = c3;
  e3.state = a2.memoizedState;
  e3.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e3.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e3.context = Ef(a2, f2));
  Cg(a2, c3, e3, d3);
  e3.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c3), e3.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e3.getSnapshotBeforeUpdate === "function" || typeof e3.UNSAFE_componentWillMount !== "function" && typeof e3.componentWillMount !== "function" || (b2 = e3.state, typeof e3.componentWillMount === "function" && e3.componentWillMount(), typeof e3.UNSAFE_componentWillMount === "function" && e3.UNSAFE_componentWillMount(), b2 !== e3.state && Kg.enqueueReplaceState(e3, e3.state, null), Cg(a2, c3, e3, d3), e3.state = a2.memoizedState);
  typeof e3.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c3) {
  a2 = c3.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d3 = c3.stateNode;
      }
      if (!d3)
        throw Error(y(147, a2));
      var e3 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e3)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d3.refs;
        b3 === Fg && (b3 = d3.refs = {});
        a3 === null ? delete b3[e3] : b3[e3] = a3;
      };
      b2._stringRef = e3;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c4) {
    if (a2) {
      var d4 = b3.lastEffect;
      d4 !== null ? (d4.nextEffect = c4, b3.lastEffect = c4) : b3.firstEffect = b3.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d4) {
    if (!a2)
      return null;
    for (; d4 !== null; )
      b2(c4, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e3(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c4, d4) {
    b3.index = d4;
    if (!a2)
      return c4;
    d4 = b3.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c4 ? (b3.flags = 2, c4) : d4;
    b3.flags = 2;
    return c4;
  }
  function g3(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function k3(a3, b3, c4, d4) {
    if (b3 !== null && b3.elementType === c4.type)
      return d4 = e3(b3, c4.props), d4.ref = Qg(a3, b3, c4), d4.return = a3, d4;
    d4 = Vg(c4.type, c4.key, c4.props, null, a3.mode, d4);
    d4.ref = Qg(a3, b3, c4);
    d4.return = a3;
    return d4;
  }
  function l2(a3, b3, c4, d4) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c4.containerInfo || b3.stateNode.implementation !== c4.implementation)
      return b3 = Wg(c4, a3.mode, d4), b3.return = a3, b3;
    b3 = e3(b3, c4.children || []);
    b3.return = a3;
    return b3;
  }
  function n3(a3, b3, c4, d4, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c4, a3.mode, d4, f3), b3.return = a3, b3;
    b3 = e3(b3, c4);
    b3.return = a3;
    return b3;
  }
  function A3(a3, b3, c4) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c4), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c4 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c4), c4.ref = Qg(a3, null, b3), c4.return = a3, c4;
        case ta:
          return b3 = Wg(b3, a3.mode, c4), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c4, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p3(a3, b3, c4, d4) {
    var e4 = b3 !== null ? b3.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e4 !== null ? null : h2(a3, b3, "" + c4, d4);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e4 ? c4.type === ua ? n3(a3, b3, c4.props.children, d4, e4) : k3(a3, b3, c4, d4) : null;
        case ta:
          return c4.key === e4 ? l2(a3, b3, c4, d4) : null;
      }
      if (Pg(c4) || La(c4))
        return e4 !== null ? null : n3(a3, b3, c4, d4, null);
      Rg(a3, c4);
    }
    return null;
  }
  function C3(a3, b3, c4, d4, e4) {
    if (typeof d4 === "string" || typeof d4 === "number")
      return a3 = a3.get(c4) || null, h2(b3, a3, "" + d4, e4);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case sa:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b3, a3, d4.props.children, e4, d4.key) : k3(b3, a3, d4, e4);
        case ta:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, l2(b3, a3, d4, e4);
      }
      if (Pg(d4) || La(d4))
        return a3 = a3.get(c4) || null, n3(b3, a3, d4, e4, null);
      Rg(b3, d4);
    }
    return null;
  }
  function x3(e4, g4, h3, k4) {
    for (var l3 = null, t3 = null, u = g4, z3 = g4 = 0, q3 = null; u !== null && z3 < h3.length; z3++) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var n4 = p3(e4, u, h3[z3], k4);
      if (n4 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && n4.alternate === null && b2(e4, u);
      g4 = f2(n4, g4, z3);
      t3 === null ? l3 = n4 : t3.sibling = n4;
      t3 = n4;
      u = q3;
    }
    if (z3 === h3.length)
      return c3(e4, u), l3;
    if (u === null) {
      for (; z3 < h3.length; z3++)
        u = A3(e4, h3[z3], k4), u !== null && (g4 = f2(u, g4, z3), t3 === null ? l3 = u : t3.sibling = u, t3 = u);
      return l3;
    }
    for (u = d3(e4, u); z3 < h3.length; z3++)
      q3 = C3(u, e4, z3, h3[z3], k4), q3 !== null && (a2 && q3.alternate !== null && u.delete(q3.key === null ? z3 : q3.key), g4 = f2(q3, g4, z3), t3 === null ? l3 = q3 : t3.sibling = q3, t3 = q3);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  function w2(e4, g4, h3, k4) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t3 = l3 = null, u = g4, z3 = g4 = 0, q3 = null, n4 = h3.next(); u !== null && !n4.done; z3++, n4 = h3.next()) {
      u.index > z3 ? (q3 = u, u = null) : q3 = u.sibling;
      var w3 = p3(e4, u, n4.value, k4);
      if (w3 === null) {
        u === null && (u = q3);
        break;
      }
      a2 && u && w3.alternate === null && b2(e4, u);
      g4 = f2(w3, g4, z3);
      t3 === null ? l3 = w3 : t3.sibling = w3;
      t3 = w3;
      u = q3;
    }
    if (n4.done)
      return c3(e4, u), l3;
    if (u === null) {
      for (; !n4.done; z3++, n4 = h3.next())
        n4 = A3(e4, n4.value, k4), n4 !== null && (g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
      return l3;
    }
    for (u = d3(e4, u); !n4.done; z3++, n4 = h3.next())
      n4 = C3(u, e4, z3, n4.value, k4), n4 !== null && (a2 && n4.alternate !== null && u.delete(n4.key === null ? z3 : n4.key), g4 = f2(n4, g4, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
    a2 && u.forEach(function(a3) {
      return b2(e4, a3);
    });
    return l3;
  }
  return function(a3, d4, f3, h3) {
    var k4 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k4 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k4 = d4; k4 !== null; ) {
              if (k4.key === l3) {
                switch (k4.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props.children);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                    break;
                  default:
                    if (k4.elementType === f3.type) {
                      c3(a3, k4.sibling);
                      d4 = e3(k4, f3.props);
                      d4.ref = Qg(a3, k4, f3);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                }
                c3(a3, k4);
                break;
              } else
                b2(a3, k4);
              k4 = k4.sibling;
            }
            f3.type === ua ? (d4 = Xg(f3.props.children, a3.mode, h3, f3.key), d4.return = a3, a3 = d4) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d4, f3), h3.return = a3, a3 = h3);
          }
          return g3(a3);
        case ta:
          a: {
            for (k4 = f3.key; d4 !== null; ) {
              if (d4.key === k4) {
                if (d4.tag === 4 && d4.stateNode.containerInfo === f3.containerInfo && d4.stateNode.implementation === f3.implementation) {
                  c3(a3, d4.sibling);
                  d4 = e3(d4, f3.children || []);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                } else {
                  c3(a3, d4);
                  break;
                }
              } else
                b2(a3, d4);
              d4 = d4.sibling;
            }
            d4 = Wg(f3, a3.mode, h3);
            d4.return = a3;
            a3 = d4;
          }
          return g3(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d4 !== null && d4.tag === 6 ? (c3(a3, d4.sibling), d4 = e3(d4, f3), d4.return = a3, a3 = d4) : (c3(a3, d4), d4 = Ug(f3, a3.mode, h3), d4.return = a3, a3 = d4), g3(a3);
    if (Pg(f3))
      return x3(a3, d4, f3, h3);
    if (La(f3))
      return w2(a3, d4, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k4)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a3.type) || "Component"));
      }
    return c3(a3, d4);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y(174));
  return a2;
}
function eh(a2, b2) {
  I(ch, b2);
  I(bh, a2);
  I(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c3 = mb(b2, a2.type);
  b2 !== c3 && (I(bh, a2), I(ah, c3));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c3 = b2.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a2, b2) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b2;
  c3.return = a2;
  c3.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c3, a2.lastEffect = c3) : a2.firstEffect = a2.lastEffect = c3;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c3 = a2.type;
      b2 = b2.nodeType !== 1 || c3.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c3 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c3.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c3);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c3 = a2.data;
          if (c3 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c3 = 0; c3 < b2.length && c3 < a2.length; c3++)
    if (!He(a2[c3], b2[c3]))
      return false;
  return true;
}
function Ch(a2, b2, c3, d3, e3, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c3(d3, e3);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c3(d3, e3);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y(300));
  return a2;
}
function Hh() {
  var a2 = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a2;
  else {
    if (a2 === null)
      throw Error(y(310));
    S = a2;
    a2 = {
      memoizedState: S.memoizedState,
      baseState: S.baseState,
      baseQueue: S.baseQueue,
      queue: S.queue,
      next: null
    };
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = S, e3 = d3.baseQueue, f2 = c3.pending;
  if (f2 !== null) {
    if (e3 !== null) {
      var g3 = e3.next;
      e3.next = f2.next;
      f2.next = g3;
    }
    d3.baseQueue = e3 = f2;
    c3.pending = null;
  }
  if (e3 !== null) {
    e3 = e3.next;
    d3 = d3.baseState;
    var h2 = g3 = f2 = null, k3 = e3;
    do {
      var l2 = k3.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = {
          lane: 0,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        }), d3 = k3.eagerReducer === a2 ? k3.eagerState : a2(d3, k3.action);
      else {
        var n3 = {
          lane: l2,
          action: k3.action,
          eagerReducer: k3.eagerReducer,
          eagerState: k3.eagerState,
          next: null
        };
        h2 === null ? (g3 = h2 = n3, f2 = d3) : h2 = h2.next = n3;
        R.lanes |= l2;
        Dg |= l2;
      }
      k3 = k3.next;
    } while (k3 !== null && k3 !== e3);
    h2 === null ? f2 = d3 : h2.next = g3;
    He(d3, b2.memoizedState) || (ug = true);
    b2.memoizedState = d3;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c3.lastRenderedState = d3;
  }
  return [b2.memoizedState, c3.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c3 = b2.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = c3.dispatch, e3 = c3.pending, f2 = b2.memoizedState;
  if (e3 !== null) {
    c3.pending = null;
    var g3 = e3 = e3.next;
    do
      f2 = a2(f2, g3.action), g3 = g3.next;
    while (g3 !== e3);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c3.lastRenderedState = f2;
  }
  return [f2, d3];
}
function Mh(a2, b2, c3) {
  var d3 = b2._getVersion;
  d3 = d3(b2._source);
  var e3 = b2._workInProgressVersionPrimary;
  if (e3 !== null)
    a2 = e3 === d3;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d3, th.push(b2);
  if (a2)
    return c3(b2._source);
  th.push(b2);
  throw Error(y(350));
}
function Nh(a2, b2, c3, d3) {
  var e3 = U;
  if (e3 === null)
    throw Error(y(349));
  var f2 = b2._getVersion, g3 = f2(b2._source), h2 = vh.current, k3 = h2.useState(function() {
    return Mh(e3, b2, c3);
  }), l2 = k3[1], n3 = k3[0];
  k3 = T;
  var A3 = a2.memoizedState, p3 = A3.refs, C3 = p3.getSnapshot, x3 = A3.source;
  A3 = A3.subscribe;
  var w2 = R;
  a2.memoizedState = {
    refs: p3,
    source: b2,
    subscribe: d3
  };
  h2.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g3, a3)) {
      a3 = c3(b2._source);
      He(n3, a3) || (l2(a3), a3 = Ig(w2), e3.mutableReadLanes |= a3 & e3.pendingLanes);
      a3 = e3.mutableReadLanes;
      e3.entangledLanes |= a3;
      for (var d4 = e3.entanglements, h3 = a3; 0 < h3; ) {
        var k4 = 31 - Vc(h3), v2 = 1 << k4;
        d4[k4] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c3, b2, d3]);
  h2.useEffect(function() {
    return d3(b2._source, function() {
      var a3 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a3(b2._source));
        var d4 = Ig(w2);
        e3.mutableReadLanes |= d4 & e3.pendingLanes;
      } catch (q3) {
        c4(function() {
          throw q3;
        });
      }
    });
  }, [b2, d3]);
  He(C3, c3) && He(x3, b2) && He(A3, d3) || (a2 = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: Jh,
    lastRenderedState: n3
  }, a2.dispatch = l2 = Oh.bind(null, R, a2), k3.queue = a2, k3.baseQueue = null, n3 = Mh(e3, b2, c3), k3.memoizedState = k3.baseState = n3);
  return n3;
}
function Ph(a2, b2, c3) {
  var d3 = Ih();
  return Nh(d3, a2, b2, c3);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: Jh,
    lastRenderedState: a2
  };
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c3, d3) {
  a2 = {
    tag: a2,
    create: b2,
    destroy: c3,
    deps: d3,
    next: null
  };
  b2 = R.updateQueue;
  b2 === null ? (b2 = {
    lastEffect: null
  }, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c3 = b2.lastEffect, c3 === null ? b2.lastEffect = a2.next = a2 : (d3 = c3.next, c3.next = a2, a2.next = d3, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = {
    current: a2
  };
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c3, d3) {
  var e3 = Hh();
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, void 0, d3 === void 0 ? null : d3);
}
function Vh(a2, b2, c3, d3) {
  var e3 = Ih();
  d3 = d3 === void 0 ? null : d3;
  var f2 = void 0;
  if (S !== null) {
    var g3 = S.memoizedState;
    f2 = g3.destroy;
    if (d3 !== null && Bh(d3, g3.deps)) {
      Rh(b2, c3, f2, d3);
      return;
    }
  }
  R.flags |= a2;
  e3.memoizedState = Rh(1 | b2, c3, f2, d3);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c3);
}
function ai() {
}
function bi(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  c3.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c3 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d3 = c3.memoizedState;
  if (d3 !== null && b2 !== null && Bh(b2, d3[1]))
    return d3[0];
  a2 = a2();
  c3.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a2(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a2, b2, c3) {
  var d3 = Hg(), e3 = Ig(a2), f2 = {
    lane: e3,
    action: c3,
    eagerReducer: null,
    eagerState: null,
    next: null
  }, g3 = b2.pending;
  g3 === null ? f2.next = f2 : (f2.next = g3.next, g3.next = f2);
  b2.pending = f2;
  g3 = a2.alternate;
  if (a2 === R || g3 !== null && g3 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g3 === null || g3.lanes === 0) && (g3 = b2.lastRenderedReducer, g3 !== null))
      try {
        var h2 = b2.lastRenderedState, k3 = g3(h2, c3);
        f2.eagerReducer = g3;
        f2.eagerState = k3;
        if (He(k3, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e3, d3);
  }
}
var Gh = {
  readContext: vg,
  useCallback: Ah,
  useContext: Ah,
  useEffect: Ah,
  useImperativeHandle: Ah,
  useLayoutEffect: Ah,
  useMemo: Ah,
  useReducer: Ah,
  useRef: Ah,
  useState: Ah,
  useDebugValue: Ah,
  useDeferredValue: Ah,
  useTransition: Ah,
  useMutableSource: Ah,
  useOpaqueIdentifier: Ah,
  unstable_isNewReconciler: false
};
var Dh = {
  readContext: vg,
  useCallback: function(a2, b2) {
    Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
    return a2;
  },
  useContext: vg,
  useEffect: Wh,
  useImperativeHandle: function(a2, b2, c3) {
    c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
    return Uh(4, 2, Zh.bind(null, b2, a2), c3);
  },
  useLayoutEffect: function(a2, b2) {
    return Uh(4, 2, a2, b2);
  },
  useMemo: function(a2, b2) {
    var c3 = Hh();
    b2 = b2 === void 0 ? null : b2;
    a2 = a2();
    c3.memoizedState = [a2, b2];
    return a2;
  },
  useReducer: function(a2, b2, c3) {
    var d3 = Hh();
    b2 = c3 !== void 0 ? c3(b2) : b2;
    d3.memoizedState = d3.baseState = b2;
    a2 = d3.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: a2,
      lastRenderedState: b2
    };
    a2 = a2.dispatch = Oh.bind(null, R, a2);
    return [d3.memoizedState, a2];
  },
  useRef: Sh,
  useState: Qh,
  useDebugValue: ai,
  useDeferredValue: function(a2) {
    var b2 = Qh(a2), c3 = b2[0], d3 = b2[1];
    Wh(function() {
      var b3 = wh.transition;
      wh.transition = 1;
      try {
        d3(a2);
      } finally {
        wh.transition = b3;
      }
    }, [a2]);
    return c3;
  },
  useTransition: function() {
    var a2 = Qh(false), b2 = a2[0];
    a2 = di.bind(null, a2[1]);
    Sh(a2);
    return [a2, b2];
  },
  useMutableSource: function(a2, b2, c3) {
    var d3 = Hh();
    d3.memoizedState = {
      refs: {
        getSnapshot: b2,
        setSnapshot: null
      },
      source: a2,
      subscribe: c3
    };
    return Nh(d3, a2, b2, c3);
  },
  useOpaqueIdentifier: function() {
    if (lh) {
      var a2 = false, b2 = uf(function() {
        a2 || (a2 = true, c3("r:" + (tf++).toString(36)));
        throw Error(y(355));
      }), c3 = Qh(b2)[1];
      (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
        c3("r:" + (tf++).toString(36));
      }, void 0, null));
      return b2;
    }
    b2 = "r:" + (tf++).toString(36);
    Qh(b2);
    return b2;
  },
  unstable_isNewReconciler: false
};
var Eh = {
  readContext: vg,
  useCallback: bi,
  useContext: vg,
  useEffect: Xh,
  useImperativeHandle: $h,
  useLayoutEffect: Yh,
  useMemo: ci,
  useReducer: Kh,
  useRef: Th,
  useState: function() {
    return Kh(Jh);
  },
  useDebugValue: ai,
  useDeferredValue: function(a2) {
    var b2 = Kh(Jh), c3 = b2[0], d3 = b2[1];
    Xh(function() {
      var b3 = wh.transition;
      wh.transition = 1;
      try {
        d3(a2);
      } finally {
        wh.transition = b3;
      }
    }, [a2]);
    return c3;
  },
  useTransition: function() {
    var a2 = Kh(Jh)[0];
    return [Th().current, a2];
  },
  useMutableSource: Ph,
  useOpaqueIdentifier: function() {
    return Kh(Jh)[0];
  },
  unstable_isNewReconciler: false
};
var Fh = {
  readContext: vg,
  useCallback: bi,
  useContext: vg,
  useEffect: Xh,
  useImperativeHandle: $h,
  useLayoutEffect: Yh,
  useMemo: ci,
  useReducer: Lh,
  useRef: Th,
  useState: function() {
    return Lh(Jh);
  },
  useDebugValue: ai,
  useDeferredValue: function(a2) {
    var b2 = Lh(Jh), c3 = b2[0], d3 = b2[1];
    Xh(function() {
      var b3 = wh.transition;
      wh.transition = 1;
      try {
        d3(a2);
      } finally {
        wh.transition = b3;
      }
    }, [a2]);
    return c3;
  },
  useTransition: function() {
    var a2 = Lh(Jh)[0];
    return [Th().current, a2];
  },
  useMutableSource: Ph,
  useOpaqueIdentifier: function() {
    return Lh(Jh)[0];
  },
  unstable_isNewReconciler: false
};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a2, b2, c3, d3) {
  b2.child = a2 === null ? Zg(b2, null, c3, d3) : Yg(b2, a2.child, c3, d3);
}
function gi(a2, b2, c3, d3, e3) {
  c3 = c3.render;
  var f2 = b2.ref;
  tg(b2, e3);
  d3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, d3, e3);
  return b2.child;
}
function ii(a2, b2, c3, d3, e3, f2) {
  if (a2 === null) {
    var g3 = c3.type;
    if (typeof g3 === "function" && !ji(g3) && g3.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b2.tag = 15, b2.type = g3, ki(a2, b2, g3, d3, e3, f2);
    a2 = Vg(c3.type, null, d3, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g3 = a2.child;
  if ((e3 & f2) === 0 && (e3 = g3.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e3, d3) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g3, d3);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c3, d3, e3, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d3) && a2.ref === b2.ref)
    if (ug = false, (f2 & e3) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c3, d3, f2);
}
function mi(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding") {
    if ((b2.mode & 4) === 0)
      b2.memoizedState = {
        baseLanes: 0
      }, ni(b2, c3);
    else if ((c3 & 1073741824) !== 0)
      b2.memoizedState = {
        baseLanes: 0
      }, ni(b2, f2 !== null ? f2.baseLanes : c3);
    else
      return a2 = f2 !== null ? f2.baseLanes | c3 : c3, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = {
        baseLanes: a2
      }, ni(b2, a2), null;
  } else
    f2 !== null ? (d3 = f2.baseLanes | c3, b2.memoizedState = null) : d3 = c3, ni(b2, d3);
  fi(a2, b2, e3, c3);
  return b2.child;
}
function oi(a2, b2) {
  var c3 = b2.ref;
  if (a2 === null && c3 !== null || a2 !== null && a2.ref !== c3)
    b2.flags |= 128;
}
function li(a2, b2, c3, d3, e3) {
  var f2 = Ff(c3) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e3);
  c3 = Ch(a2, b2, c3, d3, f2, e3);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e3, hi(a2, b2, e3);
  b2.flags |= 1;
  fi(a2, b2, c3, e3);
  return b2.child;
}
function pi(a2, b2, c3, d3, e3) {
  if (Ff(c3)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e3);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c3, d3), Og(b2, c3, d3, e3), d3 = true;
  else if (a2 === null) {
    var g3 = b2.stateNode, h2 = b2.memoizedProps;
    g3.props = h2;
    var k3 = g3.context, l2 = c3.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c3) ? Df : M.current, l2 = Ef(b2, l2));
    var n3 = c3.getDerivedStateFromProps, A3 = typeof n3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function";
    A3 || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== d3 || k3 !== l2) && Ng(b2, g3, d3, l2);
    wg = false;
    var p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    k3 = b2.memoizedState;
    h2 !== d3 || p3 !== k3 || N.current || wg ? (typeof n3 === "function" && (Gg(b2, c3, n3, d3), k3 = b2.memoizedState), (h2 = wg || Lg(b2, c3, h2, d3, p3, k3, l2)) ? (A3 || typeof g3.UNSAFE_componentWillMount !== "function" && typeof g3.componentWillMount !== "function" || (typeof g3.componentWillMount === "function" && g3.componentWillMount(), typeof g3.UNSAFE_componentWillMount === "function" && g3.UNSAFE_componentWillMount()), typeof g3.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d3, b2.memoizedState = k3), g3.props = d3, g3.state = k3, g3.context = l2, d3 = h2) : (typeof g3.componentDidMount === "function" && (b2.flags |= 4), d3 = false);
  } else {
    g3 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g3.props = l2;
    A3 = b2.pendingProps;
    p3 = g3.context;
    k3 = c3.contextType;
    typeof k3 === "object" && k3 !== null ? k3 = vg(k3) : (k3 = Ff(c3) ? Df : M.current, k3 = Ef(b2, k3));
    var C3 = c3.getDerivedStateFromProps;
    (n3 = typeof C3 === "function" || typeof g3.getSnapshotBeforeUpdate === "function") || typeof g3.UNSAFE_componentWillReceiveProps !== "function" && typeof g3.componentWillReceiveProps !== "function" || (h2 !== A3 || p3 !== k3) && Ng(b2, g3, d3, k3);
    wg = false;
    p3 = b2.memoizedState;
    g3.state = p3;
    Cg(b2, d3, g3, e3);
    var x3 = b2.memoizedState;
    h2 !== A3 || p3 !== x3 || N.current || wg ? (typeof C3 === "function" && (Gg(b2, c3, C3, d3), x3 = b2.memoizedState), (l2 = wg || Lg(b2, c3, l2, d3, p3, x3, k3)) ? (n3 || typeof g3.UNSAFE_componentWillUpdate !== "function" && typeof g3.componentWillUpdate !== "function" || (typeof g3.componentWillUpdate === "function" && g3.componentWillUpdate(d3, x3, k3), typeof g3.UNSAFE_componentWillUpdate === "function" && g3.UNSAFE_componentWillUpdate(d3, x3, k3)), typeof g3.componentDidUpdate === "function" && (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d3, b2.memoizedState = x3), g3.props = d3, g3.state = x3, g3.context = k3, d3 = l2) : (typeof g3.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 4), typeof g3.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p3 === a2.memoizedState || (b2.flags |= 256), d3 = false);
  }
  return qi(a2, b2, c3, d3, f2, e3);
}
function qi(a2, b2, c3, d3, e3, f2) {
  oi(a2, b2);
  var g3 = (b2.flags & 64) !== 0;
  if (!d3 && !g3)
    return e3 && Kf(b2, c3, false), hi(a2, b2, f2);
  d3 = b2.stateNode;
  ei.current = b2;
  var h2 = g3 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
  b2.flags |= 1;
  a2 !== null && g3 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d3.state;
  e3 && Kf(b2, c3, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = {
  dehydrated: null,
  retryLane: 0
};
function ti(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = P.current, f2 = false, g3;
  (g3 = (b2.flags & 64) !== 0) || (g3 = a2 !== null && a2.memoizedState === null ? false : (e3 & 2) !== 0);
  g3 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e3 |= 1);
  I(P, e3 & 1);
  if (a2 === null) {
    d3.fallback !== void 0 && ph(b2);
    a2 = d3.children;
    e3 = d3.fallback;
    if (f2)
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {
        baseLanes: c3
      }, b2.memoizedState = si, a2;
    if (typeof d3.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e3, c3), b2.child.memoizedState = {
        baseLanes: c3
      }, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c3 = vi({
      mode: "visible",
      children: a2
    }, b2.mode, c3, null);
    c3.return = b2;
    return b2.child = c3;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {
        baseLanes: c3
      } : {
        baseLanes: e3.baseLanes | c3
      }, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
    c3 = xi(a2, b2, d3.children, c3);
    b2.memoizedState = null;
    return c3;
  }
  if (f2)
    return d3 = wi(a2, b2, d3.children, d3.fallback, c3), f2 = b2.child, e3 = a2.child.memoizedState, f2.memoizedState = e3 === null ? {
      baseLanes: c3
    } : {
      baseLanes: e3.baseLanes | c3
    }, f2.childLanes = a2.childLanes & ~c3, b2.memoizedState = si, d3;
  c3 = xi(a2, b2, d3.children, c3);
  b2.memoizedState = null;
  return c3;
}
function ui(a2, b2, c3, d3) {
  var e3 = a2.mode, f2 = a2.child;
  b2 = {
    mode: "hidden",
    children: b2
  };
  (e3 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e3, 0, null);
  c3 = Xg(c3, e3, d3, null);
  f2.return = a2;
  c3.return = a2;
  f2.sibling = c3;
  a2.child = f2;
  return c3;
}
function xi(a2, b2, c3, d3) {
  var e3 = a2.child;
  a2 = e3.sibling;
  c3 = Tg(e3, {
    mode: "visible",
    children: c3
  });
  (b2.mode & 2) === 0 && (c3.lanes = d3);
  c3.return = b2;
  c3.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c3;
}
function wi(a2, b2, c3, d3, e3) {
  var f2 = b2.mode, g3 = a2.child;
  a2 = g3.sibling;
  var h2 = {
    mode: "hidden",
    children: c3
  };
  (f2 & 2) === 0 && b2.child !== g3 ? (c3 = b2.child, c3.childLanes = 0, c3.pendingProps = h2, g3 = c3.lastEffect, g3 !== null ? (b2.firstEffect = c3.firstEffect, b2.lastEffect = g3, g3.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c3 = Tg(g3, h2);
  a2 !== null ? d3 = Tg(a2, d3) : (d3 = Xg(d3, f2, e3, null), d3.flags |= 2);
  d3.return = b2;
  c3.return = b2;
  c3.sibling = d3;
  b2.child = c3;
  return d3;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c3, d3, e3, f2) {
  var g3 = a2.memoizedState;
  g3 === null ? a2.memoizedState = {
    isBackwards: b2,
    rendering: null,
    renderingStartTime: 0,
    last: d3,
    tail: c3,
    tailMode: e3,
    lastEffect: f2
  } : (g3.isBackwards = b2, g3.rendering = null, g3.renderingStartTime = 0, g3.last = d3, g3.tail = c3, g3.tailMode = e3, g3.lastEffect = f2);
}
function Ai(a2, b2, c3) {
  var d3 = b2.pendingProps, e3 = d3.revealOrder, f2 = d3.tail;
  fi(a2, b2, d3.children, c3);
  d3 = P.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c3);
          else if (a2.tag === 19)
            yi(a2, c3);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d3 &= 1;
  }
  I(P, d3);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e3) {
      case "forwards":
        c3 = b2.child;
        for (e3 = null; c3 !== null; )
          a2 = c3.alternate, a2 !== null && ih(a2) === null && (e3 = c3), c3 = c3.sibling;
        c3 = e3;
        c3 === null ? (e3 = b2.child, b2.child = null) : (e3 = c3.sibling, c3.sibling = null);
        zi(b2, false, e3, c3, f2, b2.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e3 = b2.child;
        for (b2.child = null; e3 !== null; ) {
          a2 = e3.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e3;
            break;
          }
          a2 = e3.sibling;
          e3.sibling = c3;
          c3 = e3;
          e3 = a2;
        }
        zi(b2, true, c3, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c3) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c3 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c3 = Tg(a2, a2.pendingProps);
      b2.child = c3;
      for (c3.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c3 = c3.sibling = Tg(a2, a2.pendingProps), c3.return = b2;
      c3.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a2, b2) {
  for (var c3 = b2.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a2.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c3, d3) {
  var e3 = a2.memoizedProps;
  if (e3 !== d3) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c3) {
      case "input":
        e3 = Ya(a2, e3);
        d3 = Ya(a2, d3);
        f2 = [];
        break;
      case "option":
        e3 = eb(a2, e3);
        d3 = eb(a2, d3);
        f2 = [];
        break;
      case "select":
        e3 = objectAssign({}, e3, {
          value: void 0
        });
        d3 = objectAssign({}, d3, {
          value: void 0
        });
        f2 = [];
        break;
      case "textarea":
        e3 = gb(a2, e3);
        d3 = gb(a2, d3);
        f2 = [];
        break;
      default:
        typeof e3.onClick !== "function" && typeof d3.onClick === "function" && (a2.onclick = jf);
    }
    vb(c3, d3);
    var g3;
    c3 = null;
    for (l2 in e3)
      if (!d3.hasOwnProperty(l2) && e3.hasOwnProperty(l2) && e3[l2] != null)
        if (l2 === "style") {
          var h2 = e3[l2];
          for (g3 in h2)
            h2.hasOwnProperty(g3) && (c3 || (c3 = {}), c3[g3] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d3) {
      var k3 = d3[l2];
      h2 = e3 != null ? e3[l2] : void 0;
      if (d3.hasOwnProperty(l2) && k3 !== h2 && (k3 != null || h2 != null))
        if (l2 === "style") {
          if (h2) {
            for (g3 in h2)
              !h2.hasOwnProperty(g3) || k3 && k3.hasOwnProperty(g3) || (c3 || (c3 = {}), c3[g3] = "");
            for (g3 in k3)
              k3.hasOwnProperty(g3) && h2[g3] !== k3[g3] && (c3 || (c3 = {}), c3[g3] = k3[g3]);
          } else
            c3 || (f2 || (f2 = []), f2.push(l2, c3)), c3 = k3;
        } else
          l2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, h2 = h2 ? h2.__html : void 0, k3 != null && h2 !== k3 && (f2 = f2 || []).push(l2, k3)) : l2 === "children" ? typeof k3 !== "string" && typeof k3 !== "number" || (f2 = f2 || []).push(l2, "" + k3) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k3 != null && l2 === "onScroll" && G("scroll", a2), f2 || h2 === k3 || (f2 = [])) : typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga ? k3.toString() : (f2 = f2 || []).push(l2, k3));
    }
    c3 && (f2 = f2 || []).push("style", c3);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c3, d3) {
  c3 !== d3 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c3 = null; b2 !== null; )
          b2.alternate !== null && (c3 = b2), b2 = b2.sibling;
        c3 === null ? a2.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a2.tail;
        for (var d3 = null; c3 !== null; )
          c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
        d3 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d3.sibling = null;
    }
}
function Gi(a2, b2, c3) {
  var d3 = b2.pendingProps;
  switch (b2.tag) {
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
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d3 = b2.stateNode;
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d3.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e3 = dh(ch.current);
      c3 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c3, d3, e3), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d3) {
          if (b2.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d3 = b2.stateNode;
          c3 = b2.type;
          var f2 = b2.memoizedProps;
          d3[wf] = b2;
          d3[xf] = f2;
          switch (c3) {
            case "dialog":
              G("cancel", d3);
              G("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d3);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d3);
              break;
            case "source":
              G("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d3);
              G("load", d3);
              break;
            case "details":
              G("toggle", d3);
              break;
            case "input":
              Za(d3, f2);
              G("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {
                wasMultiple: !!f2.multiple
              };
              G("invalid", d3);
              break;
            case "textarea":
              hb(d3, f2), G("invalid", d3);
          }
          vb(c3, f2);
          a2 = null;
          for (var g3 in f2)
            f2.hasOwnProperty(g3) && (e3 = f2[g3], g3 === "children" ? typeof e3 === "string" ? d3.textContent !== e3 && (a2 = ["children", e3]) : typeof e3 === "number" && d3.textContent !== "" + e3 && (a2 = ["children", "" + e3]) : ca.hasOwnProperty(g3) && e3 != null && g3 === "onScroll" && G("scroll", d3));
          switch (c3) {
            case "input":
              Va(d3);
              cb(d3, f2, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d3.onclick = jf);
          }
          d3 = a2;
          b2.updateQueue = d3;
          d3 !== null && (b2.flags |= 4);
        } else {
          g3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
          a2 === kb.html && (a2 = lb(c3));
          a2 === kb.html ? c3 === "script" ? (a2 = g3.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d3.is === "string" ? a2 = g3.createElement(c3, {
            is: d3.is
          }) : (a2 = g3.createElement(c3), c3 === "select" && (g3 = a2, d3.multiple ? g3.multiple = true : d3.size && (g3.size = d3.size))) : a2 = g3.createElementNS(a2, c3);
          a2[wf] = b2;
          a2[xf] = d3;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g3 = wb(c3, d3);
          switch (c3) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e3 = d3;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e3 = d3;
              break;
            case "video":
            case "audio":
              for (e3 = 0; e3 < Xe.length; e3++)
                G(Xe[e3], a2);
              e3 = d3;
              break;
            case "source":
              G("error", a2);
              e3 = d3;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e3 = d3;
              break;
            case "details":
              G("toggle", a2);
              e3 = d3;
              break;
            case "input":
              Za(a2, d3);
              e3 = Ya(a2, d3);
              G("invalid", a2);
              break;
            case "option":
              e3 = eb(a2, d3);
              break;
            case "select":
              a2._wrapperState = {
                wasMultiple: !!d3.multiple
              };
              e3 = objectAssign({}, d3, {
                value: void 0
              });
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d3);
              e3 = gb(a2, d3);
              G("invalid", a2);
              break;
            default:
              e3 = d3;
          }
          vb(c3, e3);
          var h2 = e3;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k3 = h2[f2];
              f2 === "style" ? tb(a2, k3) : f2 === "dangerouslySetInnerHTML" ? (k3 = k3 ? k3.__html : void 0, k3 != null && ob(a2, k3)) : f2 === "children" ? typeof k3 === "string" ? (c3 !== "textarea" || k3 !== "") && pb(a2, k3) : typeof k3 === "number" && pb(a2, "" + k3) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k3 != null && f2 === "onScroll" && G("scroll", a2) : k3 != null && qa(a2, f2, k3, g3));
            }
          switch (c3) {
            case "input":
              Va(a2);
              cb(a2, d3, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d3.value != null && a2.setAttribute("value", "" + Sa(d3.value));
              break;
            case "select":
              a2.multiple = !!d3.multiple;
              f2 = d3.value;
              f2 != null ? fb(a2, !!d3.multiple, f2, false) : d3.defaultValue != null && fb(a2, !!d3.multiple, d3.defaultValue, true);
              break;
            default:
              typeof e3.onClick === "function" && (a2.onclick = jf);
          }
          mf(c3, d3) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b2.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d3 = b2.stateNode, c3 = b2.memoizedProps, d3[wf] = b2, d3.nodeValue !== c3 && (b2.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b2, b2.stateNode = d3);
      }
      return null;
    case 13:
      H(P);
      d3 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c3, b2;
      d3 = d3 !== null;
      c3 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c3 = a2.memoizedState !== null;
      if (d3 && !c3 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d3 || c3)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d3 = b2.memoizedState;
      if (d3 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g3 = d3.rendering;
      if (g3 === null) {
        if (f2)
          Fi(d3, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g3 = ih(a2);
              if (g3 !== null) {
                b2.flags |= 64;
                Fi(d3, false);
                f2 = g3.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d3.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d3.lastEffect;
                d3 = c3;
                for (c3 = b2.child; c3 !== null; )
                  f2 = c3, a2 = d3, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g3 = f2.alternate, g3 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g3.childLanes, f2.lanes = g3.lanes, f2.child = g3.child, f2.memoizedProps = g3.memoizedProps, f2.memoizedState = g3.memoizedState, f2.updateQueue = g3.updateQueue, f2.type = g3.type, a2 = g3.dependencies, f2.dependencies = a2 === null ? null : {
                    lanes: a2.lanes,
                    firstContext: a2.firstContext
                  }), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d3.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        }
      } else {
        if (!f2)
          if (a2 = ih(g3), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c3 = a2.updateQueue, c3 !== null && (b2.updateQueue = c3, b2.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g3.alternate && !lh)
              return b2 = b2.lastEffect = d3.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d3, false), b2.lanes = 33554432);
        d3.isBackwards ? (g3.sibling = b2.child, b2.child = g3) : (c3 = d3.last, c3 !== null ? c3.sibling = g3 : b2.child = g3, d3.last = g3);
      }
      return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b2.lastEffect, d3.renderingStartTime = O(), c3.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c3 = "", d3 = b2;
    do
      c3 += Qa(d3), d3 = d3.return;
    while (d3);
    var e3 = c3;
  } catch (f2) {
    e3 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return {
    value: a2,
    source: b2,
    stack: e3
  };
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {
    element: null
  };
  var d3 = b2.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d3);
    Ni(a2, b2);
  };
  return c3;
}
function Si(a2, b2, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d3 = a2.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e3 = b2.value;
    c3.payload = function() {
      Ni(a2, b2);
      return d3(e3);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c3.callback = function() {
    typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c4 = b2.stack;
    this.componentDidCatch(b2.value, {
      componentStack: c4 !== null ? c4 : ""
    });
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c3) {
        Wi(a2, c3);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c3 = a2.memoizedProps, d3 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c3 : lg(b2.type, c3), d3);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a2, b2, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d3 = a2.create;
            a2.destroy = d3();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c3.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e3 = a2;
          d3 = e3.next;
          e3 = e3.tag;
          (e3 & 4) !== 0 && (e3 & 1) !== 0 && (Zi(c3, a2), $i(c3, a2));
          a2 = d3;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c3.stateNode;
      c3.flags & 4 && (b2 === null ? a2.componentDidMount() : (d3 = c3.elementType === c3.type ? b2.memoizedProps : lg(c3.type, b2.memoizedProps), a2.componentDidUpdate(d3, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c3.updateQueue;
      b2 !== null && Eg(c3, b2, a2);
      return;
    case 3:
      b2 = c3.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a2 = c3.child.stateNode;
              break;
            case 1:
              a2 = c3.child.stateNode;
          }
        Eg(c3, b2, a2);
      }
      return;
    case 5:
      a2 = c3.stateNode;
      b2 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a2, b2) {
  for (var c3 = a2; ; ) {
    if (c3.tag === 5) {
      var d3 = c3.stateNode;
      if (b2)
        d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
      else {
        d3 = c3.stateNode;
        var e3 = c3.memoizedProps.style;
        e3 = e3 !== void 0 && e3 !== null && e3.hasOwnProperty("display") ? e3.display : null;
        d3.style.display = sb("display", e3);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b2 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a2) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c3 = a2 = a2.next;
        do {
          var d3 = c3, e3 = d3.destroy;
          d3 = d3.tag;
          if (e3 !== void 0)
            if ((d3 & 4) !== 0)
              Zi(b2, c3);
            else {
              d3 = b2;
              try {
                e3();
              } catch (f2) {
                Wi(d3, f2);
              }
            }
          c3 = c3.next;
        } while (c3 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y(160));
  }
  var c3 = b2;
  b2 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d3 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d3 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b2, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a2; ; ) {
        for (; c3.sibling === null; ) {
          if (c3.return === null || ej(c3.return)) {
            c3 = null;
            break a;
          }
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
          if (c3.flags & 2)
            continue b;
          if (c3.child === null || c3.tag === 4)
            continue b;
          else
            c3.child.return = c3, c3 = c3.child;
        }
        if (!(c3.flags & 2)) {
          c3 = c3.stateNode;
          break a;
        }
      }
  d3 ? gj(a2, c3, b2) : hj(a2, c3, b2);
}
function gj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a2, b2) : c3.insertBefore(a2, b2) : (c3.nodeType === 8 ? (b2 = c3.parentNode, b2.insertBefore(a2, c3)) : (b2 = c3, b2.appendChild(a2)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c3), a2 = a2.sibling;
}
function hj(a2, b2, c3) {
  var d3 = a2.tag, e3 = d3 === 5 || d3 === 6;
  if (e3)
    a2 = e3 ? a2.stateNode : a2.stateNode.instance, b2 ? c3.insertBefore(a2, b2) : c3.appendChild(a2);
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c3), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c3), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c3 = b2, d3 = false, e3, f2; ; ) {
    if (!d3) {
      d3 = c3.return;
      a:
        for (; ; ) {
          if (d3 === null)
            throw Error(y(160));
          e3 = d3.stateNode;
          switch (d3.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
            case 4:
              e3 = e3.containerInfo;
              f2 = true;
              break a;
          }
          d3 = d3.return;
        }
      d3 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g3 = a2, h2 = c3, k3 = h2; ; )
          if (bj(g3, k3), k3.child !== null && k3.tag !== 4)
            k3.child.return = k3, k3 = k3.child;
          else {
            if (k3 === h2)
              break a;
            for (; k3.sibling === null; ) {
              if (k3.return === null || k3.return === h2)
                break a;
              k3 = k3.return;
            }
            k3.sibling.return = k3.return;
            k3 = k3.sibling;
          }
      f2 ? (g3 = e3, h2 = c3.stateNode, g3.nodeType === 8 ? g3.parentNode.removeChild(h2) : g3.removeChild(h2)) : e3.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e3 = c3.stateNode.containerInfo;
        f2 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a2, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b2)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d3 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b2.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d3 = c3 = c3.next;
        do
          (d3.tag & 3) === 3 && (a2 = d3.destroy, d3.destroy = void 0, a2 !== void 0 && a2()), d3 = d3.next;
        while (d3 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b2.stateNode;
      if (c3 != null) {
        d3 = b2.memoizedProps;
        var e3 = a2 !== null ? a2.memoizedProps : d3;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c3[xf] = d3;
          a2 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
          wb(a2, e3);
          b2 = wb(a2, d3);
          for (e3 = 0; e3 < f2.length; e3 += 2) {
            var g3 = f2[e3], h2 = f2[e3 + 1];
            g3 === "style" ? tb(c3, h2) : g3 === "dangerouslySetInnerHTML" ? ob(c3, h2) : g3 === "children" ? pb(c3, h2) : qa(c3, g3, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c3, d3);
              break;
            case "textarea":
              ib(c3, d3);
              break;
            case "select":
              a2 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f2 = d3.value, f2 != null ? fb(c3, !!d3.multiple, f2, false) : a2 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c3 = b2.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c3 = a2.stateNode;
    c3 === null && (c3 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d3 = lj.bind(null, a2, b3);
      c3.has(b3) || (c3.add(b3), b3.then(d3, d3));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c3);
  a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
  var d3 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c3));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b2);
  c3 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c3 = a2.alternate, c3 !== null && (c3.childLanes |= b2), c3 = a2, a2 = a2.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a2, b2) {
  for (var c3 = a2.callbackNode, d3 = a2.suspendedLanes, e3 = a2.pingedLanes, f2 = a2.expirationTimes, g3 = a2.pendingLanes; 0 < g3; ) {
    var h2 = 31 - Vc(g3), k3 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k3 & d3) === 0 || (k3 & e3) !== 0) {
        l2 = b2;
        Rc(k3);
        var n3 = F;
        f2[h2] = 10 <= n3 ? l2 + 250 : 6 <= n3 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k3);
    g3 &= ~k3;
  }
  d3 = Uc(a2, a2 === U ? W : 0);
  b2 = F;
  if (d3 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c3 !== Zf && Pf(c3);
    }
    b2 === 15 ? (c3 = Lj.bind(null, a2), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b2 === 14 ? c3 = hg(99, Lj.bind(null, a2)) : (c3 = Tc(b2), c3 = hg(c3, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c3;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c3 = Uc(a2, a2 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d3 = c3;
  var e3 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a2 || W !== d3)
    wj(), Qj(a2, d3);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e3;
  Y !== null ? d3 = 0 : (U = null, W = 0, d3 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d3 !== 0) {
    d3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c3 = Wc(a2), c3 !== 0 && (d3 = Tj(a2, c3)));
    if (d3 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c3), Mj(a2, O()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c3;
    switch (d3) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c3);
        if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O(), 10 < d3)) {
          if (Uc(a2, 0) !== 0)
            break;
          e3 = a2.suspendedLanes;
          if ((e3 & c3) !== c3) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e3;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d3);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c3);
        if ((c3 & 4186112) === c3)
          break;
        d3 = a2.eventTimes;
        for (e3 = -1; 0 < c3; ) {
          var g3 = 31 - Vc(c3);
          f2 = 1 << g3;
          g3 = d3[g3];
          g3 > e3 && (e3 = g3);
          c3 &= ~f2;
        }
        c3 = e3;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c3);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c3 = 31 - Vc(b2), d3 = 1 << c3;
    a2[c3] = -1;
    b2 &= ~d3;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b2 = W;
    var c3 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c3 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c3 = Tj(a2, b2);
  a2.tag !== 0 && c3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c3 = Tj(a2, b2)));
  if (c3 === 1)
    throw c3 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c3;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c3 = X;
  X |= 1;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c3 = a2.timeoutHandle;
  c3 !== -1 && (a2.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d3 = c3;
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d3);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d3);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d3 = R.memoizedState; d3 !== null; ) {
          var e3 = d3.queue;
          e3 !== null && (e3.pending = null);
          d3 = d3.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g3 = c3.return, h2 = c3, k3 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k3 !== null && typeof k3 === "object" && typeof k3.then === "function") {
          var l2 = k3;
          if ((h2.mode & 2) === 0) {
            var n3 = h2.alternate;
            n3 ? (h2.updateQueue = n3.updateQueue, h2.memoizedState = n3.memoizedState, h2.lanes = n3.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A3 = (P.current & 1) !== 0, p3 = g3;
          do {
            var C3;
            if (C3 = p3.tag === 13) {
              var x3 = p3.memoizedState;
              if (x3 !== null)
                C3 = x3.dehydrated !== null ? true : false;
              else {
                var w2 = p3.memoizedProps;
                C3 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A3 ? false : true;
              }
            }
            if (C3) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u = new Set();
                u.add(l2);
                p3.updateQueue = u;
              } else
                z3.add(l2);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h2, t3);
                  }
                h2.lanes |= 1;
                break a;
              }
              k3 = void 0;
              h2 = b2;
              var q3 = f2.pingCache;
              q3 === null ? (q3 = f2.pingCache = new Oi(), k3 = new Set(), q3.set(l2, k3)) : (k3 = q3.get(l2), k3 === void 0 && (k3 = new Set(), q3.set(l2, k3)));
              if (!k3.has(h2)) {
                k3.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p3.flags |= 4096;
              p3.lanes = b2;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k3 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k3 = Mi(k3, h2);
        p3 = g3;
        do {
          switch (p3.tag) {
            case 3:
              f2 = k3;
              p3.flags |= 4096;
              b2 &= -b2;
              p3.lanes |= b2;
              var J3 = Pi(p3, f2, b2);
              Bg(p3, J3);
              break a;
            case 1:
              f2 = k3;
              var K2 = p3.type, Q2 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p3.flags |= 4096;
                b2 &= -b2;
                p3.lanes |= b2;
                var L2 = Si(p3, f2, b2);
                Bg(p3, L2);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b2 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c3 = X;
  X |= 16;
  var d3 = Pj();
  U === a2 && W === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e3) {
      Sj(a2, e3);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d3;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c3 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c3 = Gi(c3, b2, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b2;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d3 = 0, e3 = c3.child; e3 !== null; )
          d3 |= e3.lanes | e3.childLanes, e3 = e3.sibling;
        c3.childLanes = d3;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c3 = Li(b2);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a2.finishedWork;
  if (c3 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c3 === a2.current)
    throw Error(y(177));
  a2.callbackNode = null;
  var d3 = c3.lanes | c3.childLanes, e3 = d3, f2 = a2.pendingLanes & ~e3;
  a2.pendingLanes = e3;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e3;
  a2.mutableReadLanes &= e3;
  a2.entangledLanes &= e3;
  e3 = a2.entanglements;
  for (var g3 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k3 = 31 - Vc(f2), l2 = 1 << k3;
    e3[k3] = 0;
    g3[k3] = -1;
    h2[k3] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d3 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
  if (d3 !== null) {
    e3 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g3 = Ne();
    if (Oe(g3)) {
      if ("selectionStart" in g3)
        h2 = {
          start: g3.selectionStart,
          end: g3.selectionEnd
        };
      else
        a:
          if (h2 = (h2 = g3.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k3 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k3.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n3 = 0, A3 = -1, p3 = -1, C3 = 0, x3 = 0, w2 = g3, z3 = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A3 = n3 + f2);
                  w2 !== k3 || l2 !== 0 && w2.nodeType !== 3 || (p3 = n3 + l2);
                  w2.nodeType === 3 && (n3 += w2.nodeValue.length);
                  if ((u = w2.firstChild) === null)
                    break;
                  z3 = w2;
                  w2 = u;
                }
                for (; ; ) {
                  if (w2 === g3)
                    break b;
                  z3 === h2 && ++C3 === f2 && (A3 = n3);
                  z3 === k3 && ++x3 === l2 && (p3 = n3);
                  if ((u = w2.nextSibling) !== null)
                    break;
                  w2 = z3;
                  z3 = w2.parentNode;
                }
                w2 = u;
              }
            h2 = A3 === -1 || p3 === -1 ? null : {
              start: A3,
              end: p3
            };
          } else
            h2 = null;
      h2 = h2 || {
        start: 0,
        end: 0
      };
    } else
      h2 = null;
    lf = {
      focusedElem: g3,
      selectionRange: h2
    };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d3;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d3;
    do
      try {
        for (g3 = a2; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q3 = Z.alternate;
            if (q3 !== null) {
              var v2 = q3.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t3 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g3, h2);
              var J3 = h2.alternate;
              dj(h2);
              J3 !== null && dj(J3);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q3 = Ne();
    t3 = v2.focusedElem;
    g3 = v2.selectionRange;
    if (q3 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g3 !== null && Oe(t3) && (q3 = g3.start, v2 = g3.end, v2 === void 0 && (v2 = q3), "selectionStart" in t3 ? (t3.selectionStart = q3, t3.selectionEnd = Math.min(v2, t3.value.length)) : (v2 = (q3 = t3.ownerDocument || document) && q3.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t3.textContent.length, J3 = Math.min(g3.start, h2), g3 = g3.end === void 0 ? J3 : Math.min(g3.end, h2), !v2.extend && J3 > g3 && (h2 = g3, g3 = J3, J3 = h2), h2 = Le(t3, J3), f2 = Le(t3, g3), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q3 = q3.createRange(), q3.setStart(h2.node, h2.offset), v2.removeAllRanges(), J3 > g3 ? (v2.addRange(q3), v2.extend(f2.node, f2.offset)) : (q3.setEnd(f2.node, f2.offset), v2.addRange(q3))))));
      q3 = [];
      for (v2 = t3; v2 = v2.parentNode; )
        v2.nodeType === 1 && q3.push({
          element: v2,
          left: v2.scrollLeft,
          top: v2.scrollTop
        });
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q3.length; t3++)
        v2 = q3[t3], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c3;
    Z = d3;
    do
      try {
        for (t3 = a2; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t3, Z.alternate, Z);
          if (K2 & 128) {
            q3 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q3 = L2;
                  break;
                default:
                  q3 = L2;
              }
              typeof Q2 === "function" ? Q2(q3) : Q2.current = q3;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e3;
  } else
    a2.current = c3;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z = d3; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d3 = a2.pendingLanes;
  d3 === 0 && (Ti = null);
  d3 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a2, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b2 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d3 = 0; d3 < c3.length; d3 += 2) {
    var e3 = c3[d3], f2 = c3[d3 + 1], g3 = e3.destroy;
    e3.destroy = void 0;
    if (typeof g3 === "function")
      try {
        g3();
      } catch (k3) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k3);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d3 = 0; d3 < c3.length; d3 += 2) {
    e3 = c3[d3];
    f2 = c3[d3 + 1];
    try {
      var h2 = e3.create;
      e3.destroy = h2();
    } catch (k3) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k3);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X = b2;
  ig();
  return true;
}
function gk(a2, b2, c3) {
  b2 = Mi(c3, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c3 = a2.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a2, b2);
        break;
      } else if (c3.tag === 1) {
        var d3 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
          a2 = Mi(b2, a2);
          var e3 = Si(c3, a2, 1);
          Ag(c3, e3);
          e3 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e3), Mj(c3, e3);
          else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
            try {
              d3.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a2, b2, c3) {
  var d3 = a2.pingCache;
  d3 !== null && d3.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c3;
  U === a2 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c3);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c3 = a2.stateNode;
  c3 !== null && c3.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c3 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c3), Mj(a2, c3));
}
var ck;
ck = function(a2, b2, c3) {
  var d3 = b2.lanes;
  if (a2 !== null) {
    if (a2.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c3 & d3) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d3 = b2.memoizedProps.value;
          var e3 = b2.type._context;
          I(mg, e3._currentValue);
          e3._currentValue = d3;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c3 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c3);
            I(P, P.current & 1);
            b2 = hi(a2, b2, c3);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d3 = (c3 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d3)
              return Ai(a2, b2, c3);
            b2.flags |= 64;
          }
          e3 = b2.memoizedState;
          e3 !== null && (e3.rendering = null, e3.tail = null, e3.lastEffect = null);
          I(P, P.current);
          if (d3)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c3);
      }
      return hi(a2, b2, c3);
    }
  } else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d3 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e3 = Ef(b2, M.current);
      tg(b2, c3);
      e3 = Ch(null, b2, d3, a2, e3, c3);
      b2.flags |= 1;
      if (typeof e3 === "object" && e3 !== null && typeof e3.render === "function" && e3.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d3)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e3.state !== null && e3.state !== void 0 ? e3.state : null;
        xg(b2);
        var g3 = d3.getDerivedStateFromProps;
        typeof g3 === "function" && Gg(b2, d3, g3, a2);
        e3.updater = Kg;
        b2.stateNode = e3;
        e3._reactInternals = b2;
        Og(b2, d3, a2, c3);
        b2 = qi(null, b2, d3, true, f2, c3);
      } else
        b2.tag = 0, fi(null, b2, e3, c3), b2 = b2.child;
      return b2;
    case 16:
      e3 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e3._init;
        e3 = f2(e3._payload);
        b2.type = e3;
        f2 = b2.tag = hk(e3);
        a2 = lg(e3, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e3, a2, c3);
            break a;
          case 1:
            b2 = pi(null, b2, e3, a2, c3);
            break a;
          case 11:
            b2 = gi(null, b2, e3, a2, c3);
            break a;
          case 14:
            b2 = ii(null, b2, e3, lg(e3.type, a2), d3, c3);
            break a;
        }
        throw Error(y(306, e3, ""));
      }
      return b2;
    case 0:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), li(a2, b2, d3, e3, c3);
    case 1:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), pi(a2, b2, d3, e3, c3);
    case 3:
      ri(b2);
      d3 = b2.updateQueue;
      if (a2 === null || d3 === null)
        throw Error(y(282));
      d3 = b2.pendingProps;
      e3 = b2.memoizedState;
      e3 = e3 !== null ? e3.element : null;
      yg(a2, b2);
      Cg(b2, d3, null, c3);
      d3 = b2.memoizedState.element;
      if (d3 === e3)
        sh(), b2 = hi(a2, b2, c3);
      else {
        e3 = b2.stateNode;
        if (f2 = e3.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e3.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e3 = 0; e3 < a2.length; e3 += 2)
              f2 = a2[e3], f2._workInProgressVersionPrimary = a2[e3 + 1], th.push(f2);
          c3 = Zg(b2, null, d3, c3);
          for (b2.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a2, b2, d3, c3), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d3 = b2.type, e3 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g3 = e3.children, nf(d3, e3) ? g3 = null : f2 !== null && nf(d3, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g3, c3), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c3);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d3 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d3, c3) : fi(a2, b2, d3, c3), b2.child;
    case 11:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), gi(a2, b2, d3, e3, c3);
    case 7:
      return fi(a2, b2, b2.pendingProps, c3), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c3), b2.child;
    case 10:
      a: {
        d3 = b2.type._context;
        e3 = b2.pendingProps;
        g3 = b2.memoizedProps;
        f2 = e3.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g3 !== null)
          if (h2 = g3.value, f2 = He(h2, f2) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g3.children === e3.children && !N.current) {
              b2 = hi(a2, b2, c3);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k3 = h2.dependencies;
              if (k3 !== null) {
                g3 = h2.child;
                for (var l2 = k3.firstContext; l2 !== null; ) {
                  if (l2.context === d3 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c3 & -c3), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c3;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c3);
                    sg(h2.return, c3);
                    k3.lanes |= c3;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g3 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g3 !== null)
                g3.return = h2;
              else
                for (g3 = h2; g3 !== null; ) {
                  if (g3 === b2) {
                    g3 = null;
                    break;
                  }
                  h2 = g3.sibling;
                  if (h2 !== null) {
                    h2.return = g3.return;
                    g3 = h2;
                    break;
                  }
                  g3 = g3.return;
                }
              h2 = g3;
            }
        fi(a2, b2, e3.children, c3);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e3 = b2.type, f2 = b2.pendingProps, d3 = f2.children, tg(b2, c3), e3 = vg(e3, f2.unstable_observedBits), d3 = d3(e3), b2.flags |= 1, fi(a2, b2, d3, c3), b2.child;
    case 14:
      return e3 = b2.type, f2 = lg(e3, b2.pendingProps), f2 = lg(e3.type, f2), ii(a2, b2, e3, f2, d3, c3);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d3, c3);
    case 17:
      return d3 = b2.type, e3 = b2.pendingProps, e3 = b2.elementType === d3 ? e3 : lg(d3, e3), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d3) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c3), Mg(b2, d3, e3), Og(b2, d3, e3, c3), qi(null, b2, d3, true, a2, c3);
    case 19:
      return Ai(a2, b2, c3);
    case 23:
      return mi(a2, b2, c3);
    case 24:
      return mi(a2, b2, c3);
  }
  throw Error(y(156, b2.tag));
};
function ik(a2, b2, c3, d3) {
  this.tag = a2;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c3, d3) {
  return new ik(a2, b2, c3, d3);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c3 = a2.alternate;
  c3 === null ? (c3 = nh(a2.tag, b2, a2.key, a2.mode), c3.elementType = a2.elementType, c3.type = a2.type, c3.stateNode = a2.stateNode, c3.alternate = a2, a2.alternate = c3) : (c3.pendingProps = b2, c3.type = a2.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a2.childLanes;
  c3.lanes = a2.lanes;
  c3.child = a2.child;
  c3.memoizedProps = a2.memoizedProps;
  c3.memoizedState = a2.memoizedState;
  c3.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c3.dependencies = b2 === null ? null : {
    lanes: b2.lanes,
    firstContext: b2.firstContext
  };
  c3.sibling = a2.sibling;
  c3.index = a2.index;
  c3.ref = a2.ref;
  return c3;
}
function Vg(a2, b2, c3, d3, e3, f2) {
  var g3 = 2;
  d3 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g3 = 1);
  else if (typeof a2 === "string")
    g3 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c3.children, e3, f2, b2);
        case Ha:
          g3 = 8;
          e3 |= 16;
          break;
        case wa:
          g3 = 8;
          e3 |= 1;
          break;
        case xa:
          return a2 = nh(12, c3, b2, e3 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c3, b2, e3), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c3, b2, e3), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c3, e3, f2, b2);
        case Ja:
          return a2 = nh(24, c3, b2, e3), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g3 = 10;
                break a;
              case za:
                g3 = 9;
                break a;
              case Aa:
                g3 = 11;
                break a;
              case Da:
                g3 = 14;
                break a;
              case Ea:
                g3 = 16;
                d3 = null;
                break a;
              case Fa:
                g3 = 22;
                break a;
            }
          throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g3, c3, b2, e3);
  b2.elementType = a2;
  b2.type = d3;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c3, d3) {
  a2 = nh(7, a2, d3, b2);
  a2.lanes = c3;
  return a2;
}
function vi(a2, b2, c3, d3) {
  a2 = nh(23, a2, d3, b2);
  a2.elementType = Ia;
  a2.lanes = c3;
  return a2;
}
function Ug(a2, b2, c3) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c3;
  return a2;
}
function Wg(a2, b2, c3) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c3;
  b2.stateNode = {
    containerInfo: a2.containerInfo,
    pendingChildren: null,
    implementation: a2.implementation
  };
  return b2;
}
function jk(a2, b2, c3) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c3;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c3) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ta,
    key: d3 == null ? null : "" + d3,
    children: a2,
    containerInfo: b2,
    implementation: c3
  };
}
function lk(a2, b2, c3, d3) {
  var e3 = b2.current, f2 = Hg(), g3 = Ig(e3);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h2 = c3;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k3 = c3.type;
        if (Ff(k3)) {
          c3 = If(c3, k3, h2);
          break a;
        }
      }
      c3 = h2;
    } else
      c3 = Cf;
  b2.context === null ? b2.context = c3 : b2.pendingContext = c3;
  b2 = zg(f2, g3);
  b2.payload = {
    element: a2
  };
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b2.callback = d3);
  Ag(e3, b2);
  Jg(e3, g3, f2);
  return g3;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c3 = a2.retryLane;
    a2.retryLane = c3 !== 0 && c3 < b2 ? c3 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c3) {
  var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a2, b2, c3 != null && c3.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c3.current = b2;
  b2.stateNode = c3;
  xg(b2);
  a2[ff] = c3.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d3)
    for (a2 = 0; a2 < d3.length; a2++) {
      b2 = d3[a2];
      var e3 = b2._getVersion;
      e3 = e3(b2._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b2, e3] : c3.mutableSourceEagerHydrationData.push(b2, e3);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c3; c3 = a2.lastChild; )
      a2.removeChild(c3);
  return new qk(a2, 0, b2 ? {
    hydrate: true
  } : void 0);
}
function tk(a2, b2, c3, d3, e3) {
  var f2 = c3._reactRootContainer;
  if (f2) {
    var g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var h2 = e3;
      e3 = function() {
        var a3 = mk(g3);
        h2.call(a3);
      };
    }
    lk(b2, g3, a2, e3);
  } else {
    f2 = c3._reactRootContainer = sk(c3, d3);
    g3 = f2._internalRoot;
    if (typeof e3 === "function") {
      var k3 = e3;
      e3 = function() {
        var a3 = mk(g3);
        k3.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g3, a2, e3);
    });
  }
  return mk(g3);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c3 = Ig(a2);
    Jg(a2, c3, b2);
    ok(a2, c3);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c3) {
  switch (b2) {
    case "input":
      ab(a2, c3);
      b2 = c3.name;
      if (c3.type === "radio" && b2 != null) {
        for (c3 = a2; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c3.length; b2++) {
          var d3 = c3[b2];
          if (d3 !== a2 && d3.form === a2.form) {
            var e3 = Db(d3);
            if (!e3)
              throw Error(y(90));
            Wa(d3);
            ab(d3, e3);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c3);
      break;
    case "select":
      b2 = c3.value, b2 != null && fb(a2, !!c3.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c3, d3, e3) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b2, c3, d3, e3));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c3 = X;
  X |= 2;
  try {
    return a2(b2);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y(200));
  return kk(a2, b2, null, c3);
}
var vk = {
  Events: [Cb, ue, Db, Eb, Fb, Oj, {
    current: false
  }]
};
var wk = {
  findFiberByHostInstance: wc,
  bundleType: 0,
  version: "17.0.2",
  rendererPackageName: "react-dom"
};
var xk = {
  bundleType: wk.bundleType,
  version: wk.version,
  rendererPackageName: wk.rendererPackageName,
  rendererConfig: wk.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ra.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(a2) {
    a2 = cc(a2);
    return a2 === null ? null : a2.stateNode;
  },
  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2, b2) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a2(b2);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, true, c3);
};
var render = function(a2, b2, c3) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, false, c3);
};
var unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a2, b2, c3, d3) {
  if (!rk(c3))
    throw Error(y(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y(38));
  return tk(a2, b2, c3, false, d3);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// build/dist/pkg/common/extends-2756efd5.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate2(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e3) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t = "decl";
var i = "@import";
var p = "@keyframes";
var k = Math.abs;
var d = String.fromCharCode;
function m(e3, r4) {
  return (((r4 << 2 ^ z(e3, 0)) << 2 ^ z(e3, 1)) << 2 ^ z(e3, 2)) << 2 ^ z(e3, 3);
}
function g(e3) {
  return e3.trim();
}
function x(e3, r4) {
  return (e3 = r4.exec(e3)) ? e3[0] : e3;
}
function y2(e3, r4, a2) {
  return e3.replace(r4, a2);
}
function j(e3, r4) {
  return e3.indexOf(r4);
}
function z(e3, r4) {
  return e3.charCodeAt(r4) | 0;
}
function C(e3, r4, a2) {
  return e3.slice(r4, a2);
}
function A(e3) {
  return e3.length;
}
function M2(e3) {
  return e3.length;
}
function O2(e3, r4) {
  return r4.push(e3), e3;
}
function S2(e3, r4) {
  return e3.map(r4).join("");
}
var q = 1;
var B2 = 1;
var D2 = 0;
var E = 0;
var F2 = 0;
var G2 = "";
function H2(e3, r4, a2, c3, n3, t3, s) {
  return {
    value: e3,
    root: r4,
    parent: a2,
    type: c3,
    props: n3,
    children: t3,
    line: q,
    column: B2,
    length: s,
    return: ""
  };
}
function I2(e3, r4, a2) {
  return H2(e3, r4.root, r4.parent, a2, r4.props, r4.children, 0);
}
function J() {
  return F2;
}
function K() {
  F2 = E > 0 ? z(G2, --E) : 0;
  if (B2--, F2 === 10)
    B2 = 1, q--;
  return F2;
}
function L() {
  F2 = E < D2 ? z(G2, E++) : 0;
  if (B2++, F2 === 10)
    B2 = 1, q++;
  return F2;
}
function N2() {
  return z(G2, E);
}
function P2() {
  return E;
}
function Q(e3, r4) {
  return C(G2, e3, r4);
}
function R2(e3) {
  switch (e3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T2(e3) {
  return q = B2 = 1, D2 = A(G2 = e3), E = 0, [];
}
function U2(e3) {
  return G2 = "", e3;
}
function V2(e3) {
  return g(Q(E - 1, _(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
}
function X2(e3) {
  while (F2 = N2())
    if (F2 < 33)
      L();
    else
      break;
  return R2(e3) > 2 || R2(F2) > 3 ? "" : " ";
}
function Z2(e3, r4) {
  while (--r4 && L())
    if (F2 < 48 || F2 > 102 || F2 > 57 && F2 < 65 || F2 > 70 && F2 < 97)
      break;
  return Q(e3, P2() + (r4 < 6 && N2() == 32 && L() == 32));
}
function _(e3) {
  while (L())
    switch (F2) {
      case e3:
        return E;
      case 34:
      case 39:
        return _(e3 === 34 || e3 === 39 ? e3 : F2);
      case 40:
        if (e3 === 41)
          _(e3);
        break;
      case 92:
        L();
        break;
    }
  return E;
}
function ee2(e3, r4) {
  while (L())
    if (e3 + F2 === 47 + 10)
      break;
    else if (e3 + F2 === 42 + 42 && N2() === 47)
      break;
  return "/*" + Q(r4, E - 1) + "*" + d(e3 === 47 ? e3 : L());
}
function re2(e3) {
  while (!R2(N2()))
    L();
  return Q(e3, E);
}
function ae2(e3) {
  return U2(ce2("", null, null, null, [""], e3 = T2(e3), 0, [0], e3));
}
function ce2(e3, r4, a2, c3, n3, t3, s, u, i2) {
  var f2 = 0;
  var o = 0;
  var l2 = s;
  var v2 = 0;
  var h2 = 0;
  var p3 = 0;
  var b2 = 1;
  var w2 = 1;
  var $ = 1;
  var k3 = 0;
  var m3 = "";
  var g3 = n3;
  var x3 = t3;
  var j2 = c3;
  var z3 = m3;
  while (w2)
    switch (p3 = k3, k3 = L()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z3 += V2(k3);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z3 += X2(p3);
        break;
      case 92:
        z3 += Z2(P2() - 1, 7);
        continue;
      case 47:
        switch (N2()) {
          case 42:
          case 47:
            O2(te2(ee2(L(), P2()), r4, a2), i2);
            break;
          default:
            z3 += "/";
        }
        break;
      case 123 * b2:
        u[f2++] = A(z3) * $;
      case 125 * b2:
      case 59:
      case 0:
        switch (k3) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o:
            if (h2 > 0 && A(z3) - l2)
              O2(h2 > 32 ? se2(z3 + ";", c3, a2, l2 - 1) : se2(y2(z3, " ", "") + ";", c3, a2, l2 - 2), i2);
            break;
          case 59:
            z3 += ";";
          default:
            O2(j2 = ne2(z3, r4, a2, f2, o, n3, u, m3, g3 = [], x3 = [], l2), t3);
            if (k3 === 123)
              if (o === 0)
                ce2(z3, r4, j2, j2, g3, t3, l2, u, x3);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    ce2(e3, j2, j2, c3 && O2(ne2(e3, j2, j2, 0, 0, n3, u, m3, n3, g3 = [], l2), x3), n3, x3, l2, u, c3 ? g3 : x3);
                    break;
                  default:
                    ce2(z3, j2, j2, j2, [""], x3, l2, u, x3);
                }
        }
        f2 = o = h2 = 0, b2 = $ = 1, m3 = z3 = "", l2 = s;
        break;
      case 58:
        l2 = 1 + A(z3), h2 = p3;
      default:
        if (b2 < 1) {
          if (k3 == 123)
            --b2;
          else if (k3 == 125 && b2++ == 0 && K() == 125)
            continue;
        }
        switch (z3 += d(k3), k3 * b2) {
          case 38:
            $ = o > 0 ? 1 : (z3 += "\f", -1);
            break;
          case 44:
            u[f2++] = (A(z3) - 1) * $, $ = 1;
            break;
          case 64:
            if (N2() === 45)
              z3 += V2(L());
            v2 = N2(), o = A(m3 = z3 += re2(P2())), k3++;
            break;
          case 45:
            if (p3 === 45 && A(z3) == 2)
              b2 = 0;
        }
    }
  return t3;
}
function ne2(e3, r4, a2, c3, t3, s, u, i2, f2, o, l2) {
  var v2 = t3 - 1;
  var h2 = t3 === 0 ? s : [""];
  var p3 = M2(h2);
  for (var b2 = 0, w2 = 0, $ = 0; b2 < c3; ++b2)
    for (var d3 = 0, m3 = C(e3, v2 + 1, v2 = k(w2 = u[b2])), x3 = e3; d3 < p3; ++d3)
      if (x3 = g(w2 > 0 ? h2[d3] + " " + m3 : y2(m3, /&\f/g, h2[d3])))
        f2[$++] = x3;
  return H2(e3, r4, a2, t3 === 0 ? n : i2, f2, o, l2);
}
function te2(e3, r4, a2) {
  return H2(e3, r4, a2, c, d(J()), C(e3, 2, -2), 0);
}
function se2(e3, r4, a2, c3) {
  return H2(e3, r4, a2, t, C(e3, 0, c3), C(e3, c3 + 1, -1), c3);
}
function ue2(c3, n3) {
  switch (m(c3, n3)) {
    case 5103:
      return a + "print-" + c3 + c3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c3 + c3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c3 + r + c3 + e + c3 + c3;
    case 6828:
    case 4268:
      return a + c3 + e + c3 + c3;
    case 6165:
      return a + c3 + e + "flex-" + c3 + c3;
    case 5187:
      return a + c3 + y2(c3, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c3;
    case 5443:
      return a + c3 + e + "flex-item-" + y2(c3, /flex-|-self/, "") + c3;
    case 4675:
      return a + c3 + e + "flex-line-pack" + y2(c3, /align-content|flex-|-self/, "") + c3;
    case 5548:
      return a + c3 + e + y2(c3, "shrink", "negative") + c3;
    case 5292:
      return a + c3 + e + y2(c3, "basis", "preferred-size") + c3;
    case 6060:
      return a + "box-" + y2(c3, "-grow", "") + a + c3 + e + y2(c3, "grow", "positive") + c3;
    case 4554:
      return a + y2(c3, /([^-])(transform)/g, "$1" + a + "$2") + c3;
    case 6187:
      return y2(y2(y2(c3, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c3, "") + c3;
    case 5495:
    case 3959:
      return y2(c3, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return y2(y2(c3, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c3 + c3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y2(c3, /(.+)-inline(.+)/, a + "$1$2") + c3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c3) - 1 - n3 > 6)
        switch (z(c3, n3 + 1)) {
          case 109:
            if (z(c3, n3 + 4) !== 45)
              break;
          case 102:
            return y2(c3, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + (z(c3, n3 + 3) == 108 ? "$3" : "$2-$3")) + c3;
          case 115:
            return ~j(c3, "stretch") ? ue2(y2(c3, "stretch", "fill-available"), n3) + c3 : c3;
        }
      break;
    case 4949:
      if (z(c3, n3 + 1) !== 115)
        break;
    case 6444:
      switch (z(c3, A(c3) - 3 - (~j(c3, "!important") && 10))) {
        case 107:
          return y2(c3, ":", ":" + a) + c3;
        case 101:
          return y2(c3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c3, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e + "$2box$3") + c3;
      }
      break;
    case 5936:
      switch (z(c3, n3 + 11)) {
        case 114:
          return a + c3 + e + y2(c3, /[svh]\w+-[tblr]{2}/, "tb") + c3;
        case 108:
          return a + c3 + e + y2(c3, /[svh]\w+-[tblr]{2}/, "tb-rl") + c3;
        case 45:
          return a + c3 + e + y2(c3, /[svh]\w+-[tblr]{2}/, "lr") + c3;
      }
      return a + c3 + e + c3 + c3;
  }
  return c3;
}
function ie2(e3, r4) {
  var a2 = "";
  var c3 = M2(e3);
  for (var n3 = 0; n3 < c3; n3++)
    a2 += r4(e3[n3], n3, e3, r4) || "";
  return a2;
}
function fe2(e3, r4, a2, s) {
  switch (e3.type) {
    case i:
    case t:
      return e3.return = e3.return || e3.value;
    case c:
      return "";
    case n:
      e3.value = e3.props.join(",");
  }
  return A(a2 = ie2(e3.children, s)) ? e3.return = e3.value + "{" + a2 + "}" : "";
}
function oe2(e3) {
  var r4 = M2(e3);
  return function(a2, c3, n3, t3) {
    var s = "";
    for (var u = 0; u < r4; u++)
      s += e3[u](a2, c3, n3, t3) || "";
    return s;
  };
}
function le2(e3) {
  return function(r4) {
    if (!r4.root) {
      if (r4 = r4.return)
        e3(r4);
    }
  };
}
function ve2(c3, s, u, i2) {
  if (!c3.return)
    switch (c3.type) {
      case t:
        c3.return = ue2(c3.value, c3.length);
        break;
      case p:
        return ie2([I2(y2(c3.value, "@", "@" + a), c3, "")], i2);
      case n:
        if (c3.length)
          return S2(c3.props, function(n3) {
            switch (x(n3, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ie2([I2(y2(n3, /:(read-\w+)/, ":" + r + "$1"), c3, "")], i2);
              case "::placeholder":
                return ie2([I2(y2(n3, /:(plac\w+)/, ":" + a + "input-$1"), c3, ""), I2(y2(n3, /:(plac\w+)/, ":" + r + "$1"), c3, ""), I2(y2(n3, /:(plac\w+)/, e + "input-$1"), c3, "")], i2);
            }
            return "";
          });
    }
}
function memoize(fn) {
  var cache = Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (R2(character)) {
      case 0:
        if (character === 38 && N2() === 12) {
          points[index] = 1;
        }
        parsed[index] += re2(E - 1);
        break;
      case 2:
        parsed[index] += V2(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = N2() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += d(character);
    }
  } while (character = L());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return U2(toRules(T2(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || !element.length) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k3 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k3++) {
      element.props[k3] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [ve2];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
      var attrib = node.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [fe2, le2(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe2(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return ie2(ae2(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k3, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k3 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k3 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16);
    k3 ^= k3 >>> 24;
    h2 = (k3 & 65535) * 1540483477 + ((k3 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles2 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match;
  while ((match = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var hasOwnProperty2 = Object.prototype.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.forwardRef(function(props, ref) {
    var cache = react.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.createContext({});
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = "";
  if (typeof props.className === "string") {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = serializeStyles(registeredStyles, void 0, react.useContext(ThemeContext));
  var rules = insertStyles(cache, serialized, typeof type === "string");
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty2.call(props, key) && key !== "css" && key !== typePropName && true) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ react.createElement(type, newProps);
  return ele;
});
var _extends_1 = createCommonjsModule(function(module) {
  function _extends3() {
    module.exports = _extends3 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends3.apply(this, arguments);
  }
  module.exports = _extends3;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

// build/dist/pkg/@emotion/react.js
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for;
var c2 = b ? Symbol.for("react.element") : 60103;
var d2 = b ? Symbol.for("react.portal") : 60106;
var e2 = b ? Symbol.for("react.fragment") : 60107;
var f = b ? Symbol.for("react.strict_mode") : 60108;
var g2 = b ? Symbol.for("react.profiler") : 60114;
var h = b ? Symbol.for("react.provider") : 60109;
var k2 = b ? Symbol.for("react.context") : 60110;
var l = b ? Symbol.for("react.async_mode") : 60111;
var m2 = b ? Symbol.for("react.concurrent_mode") : 60111;
var n2 = b ? Symbol.for("react.forward_ref") : 60112;
var p2 = b ? Symbol.for("react.suspense") : 60113;
var q2 = b ? Symbol.for("react.suspense_list") : 60120;
var r2 = b ? Symbol.for("react.memo") : 60115;
var t2 = b ? Symbol.for("react.lazy") : 60116;
var v = b ? Symbol.for("react.block") : 60121;
var w = b ? Symbol.for("react.fundamental") : 60117;
var x2 = b ? Symbol.for("react.responder") : 60118;
var y3 = b ? Symbol.for("react.scope") : 60119;
function z2(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u = a2.$$typeof;
    switch (u) {
      case c2:
        switch (a2 = a2.type, a2) {
          case l:
          case m2:
          case e2:
          case g2:
          case f:
          case p2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k2:
              case n2:
              case t2:
              case r2:
              case h:
                return a2;
              default:
                return u;
            }
        }
      case d2:
        return u;
    }
  }
}
function A2(a2) {
  return z2(a2) === m2;
}
var AsyncMode = l;
var ConcurrentMode = m2;
var ContextConsumer = k2;
var ContextProvider = h;
var Element = c2;
var ForwardRef = n2;
var Fragment = e2;
var Lazy = t2;
var Memo = r2;
var Portal = d2;
var Profiler = g2;
var StrictMode = f;
var Suspense = p2;
var isAsyncMode = function(a2) {
  return A2(a2) || z2(a2) === l;
};
var isConcurrentMode = A2;
var isContextConsumer = function(a2) {
  return z2(a2) === k2;
};
var isContextProvider = function(a2) {
  return z2(a2) === h;
};
var isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c2;
};
var isForwardRef = function(a2) {
  return z2(a2) === n2;
};
var isFragment = function(a2) {
  return z2(a2) === e2;
};
var isLazy = function(a2) {
  return z2(a2) === t2;
};
var isMemo = function(a2) {
  return z2(a2) === r2;
};
var isPortal = function(a2) {
  return z2(a2) === d2;
};
var isProfiler = function(a2) {
  return z2(a2) === g2;
};
var isStrictMode = function(a2) {
  return z2(a2) === f;
};
var isSuspense = function(a2) {
  return z2(a2) === p2;
};
var isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e2 || a2 === m2 || a2 === g2 || a2 === f || a2 === p2 || a2 === q2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w || a2.$$typeof === x2 || a2.$$typeof === y3 || a2.$$typeof === v);
};
var typeOf = z2;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty2.call(props, "css")) {
    return react.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i2 = 2; i2 < argsLength; i2++) {
    createElementArgArray[i2] = args[i2];
  }
  return react.createElement.apply(null, createElementArgArray);
};
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, react.useContext(ThemeContext));
  var sheetRef = react.useRef();
  react.useLayoutEffect(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true;
      node.setAttribute("data-emotion", key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  react.useLayoutEffect(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}

// build/dist/styles/GlobalStyles.js
var _GlobalStyles = () => jsx(Global, {
  styles: css`*, ::before, ::after {
box-sizing: border-box;
border-width: 0;
border-style: solid;
--tw-border-opacity: 1;
border-color: rgba(229, 231, 235, var(--tw-border-opacity));
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgba(59, 130, 246, 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        }
html {
line-height: 1.5;
-webkit-text-size-adjust: 100%;
-moz-tab-size: 4;
tab-size: 4;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
body {
margin: 0;
font-family: inherit;
line-height: inherit;
        }
hr {
height: 0;
color: inherit;
border-top-width: 1px;
        }
abbr[title] {
text-decoration: underline dotted;
        }
b, strong {
font-weight: bolder;
        }
code, kbd, samp, pre {
font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
font-size: 1em;
        }
small {
font-size: 80%;
        }
sub, sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
        }
sub {
bottom: -0.25em;
        }
sup {
top: -0.5em;
        }
table {
text-indent: 0;
border-color: inherit;
border-collapse: collapse;
        }
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: inherit;
margin: 0;
padding: 0;
color: inherit;
        }
button, select {
text-transform: none;
        }
button, [type='button'], [type='reset'], [type='submit'] {
-webkit-appearance: button;
        }
::-moz-focus-inner {
border-style: none;
padding: 0;
        }
:-moz-focusring {
outline: 1px dotted ButtonText;
        }
:-moz-ui-invalid {
box-shadow: none;
        }
legend {
padding: 0;
        }
progress {
vertical-align: baseline;
        }
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
height: auto;
        }
[type='search'] {
-webkit-appearance: textfield;
outline-offset: -2px;
        }
::-webkit-search-decoration {
-webkit-appearance: none;
        }
::-webkit-file-upload-button {
-webkit-appearance: button;
font: inherit;
        }
summary {
display: list-item;
        }
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
margin: 0;
        }
button {
background-color: transparent;
background-image: none;
        }
fieldset {
margin: 0;
padding: 0;
        }
ol, ul {
list-style: none;
margin: 0;
padding: 0;
        }
img {
border-style: solid;
        }
textarea {
resize: vertical;
        }
input::placeholder, textarea::placeholder {
color: #9ca3af;
        }
button, [role="button"] {
cursor: pointer;
        }
h1, h2, h3, h4, h5, h6 {
font-size: inherit;
font-weight: inherit;
        }
a {
color: inherit;
text-decoration: inherit;
        }
pre, code, kbd, samp {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
img, svg, video, canvas, audio, iframe, embed, object {
display: block;
vertical-align: middle;
        }
img, video {
max-width: 100%;
height: auto;
        }
[hidden] {
display: none;
        }
@keyframes spin {
to {
transform: rotate(360deg);
        }
        }
@keyframes ping {
75%, 100% {
transform: scale(2);
opacity: 0;
        }
        }
@keyframes pulse {
50% {
opacity: .5;
        }
        }
@keyframes bounce {
0%, 100% {
transform: translateY(-25%);
animation-timing-function: cubic-bezier(0.8,0,1,1);
        }
50% {
transform: none;
animation-timing-function: cubic-bezier(0,0,0.2,1);
        }
        }`
});
var uiFontStack = `Branding, Futura, 'Avenir Next', Avenir, 
ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,
"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,
"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;
var customStyles = css`
  body {
    -webkit-tap-highlight-color: ${"#000"};
    ${{
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale"
}}
    font-family: ${uiFontStack};
  }

  * {
    ${{
  ":focus-visible": {
    outlineColor: "black",
    outlineOffset: "2px",
    outlineWidth: "2px"
  }
}}
  }
`;
var GlobalStyles = () => jsx(react.Fragment, null, jsx(_GlobalStyles, null), jsx(Global, {
  styles: customStyles
}));
var GlobalStyles_default = GlobalStyles;

// build/dist/pkg/common/extends-7477639a.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// build/dist/pkg/react-router-dom.js
var r3;
var B3 = r3 || (r3 = {});
B3.Pop = "POP";
B3.Push = "PUSH";
B3.Replace = "REPLACE";
var C2 = function(b2) {
  return b2;
};
function E2(b2) {
  b2.preventDefault();
  b2.returnValue = "";
}
function F3() {
  var b2 = [];
  return {
    get length() {
      return b2.length;
    },
    push: function(h2) {
      b2.push(h2);
      return function() {
        b2 = b2.filter(function(k3) {
          return k3 !== h2;
        });
      };
    },
    call: function(h2) {
      b2.forEach(function(k3) {
        return k3 && k3(h2);
      });
    }
  };
}
function H3() {
  return Math.random().toString(36).substr(2, 8);
}
function I3(b2) {
  var h2 = b2.pathname, k3 = b2.search;
  b2 = b2.hash;
  return (h2 === void 0 ? "/" : h2) + (k3 === void 0 ? "" : k3) + (b2 === void 0 ? "" : b2);
}
function J2(b2) {
  var h2 = {};
  if (b2) {
    var k3 = b2.indexOf("#");
    0 <= k3 && (h2.hash = b2.substr(k3), b2 = b2.substr(0, k3));
    k3 = b2.indexOf("?");
    0 <= k3 && (h2.search = b2.substr(k3), b2 = b2.substr(0, k3));
    b2 && (h2.pathname = b2);
  }
  return h2;
}
function createHashHistory(b2) {
  function h2() {
    var a2 = J2(m3.location.hash.substr(1)), e3 = a2.pathname, l2 = a2.search;
    a2 = a2.hash;
    var g3 = u.state || {};
    return [g3.idx, C2({
      pathname: e3 === void 0 ? "/" : e3,
      search: l2 === void 0 ? "" : l2,
      hash: a2 === void 0 ? "" : a2,
      state: g3.usr || null,
      key: g3.key || "default"
    })];
  }
  function k3() {
    if (t3)
      c3.call(t3), t3 = null;
    else {
      var a2 = r3.Pop, e3 = h2(), l2 = e3[0];
      e3 = e3[1];
      if (c3.length) {
        if (l2 != null) {
          var g3 = q3 - l2;
          g3 && (t3 = {
            action: a2,
            location: e3,
            retry: function() {
              p3(-1 * g3);
            }
          }, p3(g3));
        }
      } else
        A3(a2);
    }
  }
  function x3(a2) {
    var e3 = document.querySelector("base"), l2 = "";
    e3 && e3.getAttribute("href") && (e3 = m3.location.href, l2 = e3.indexOf("#"), l2 = l2 === -1 ? e3 : e3.slice(0, l2));
    return l2 + "#" + (typeof a2 === "string" ? a2 : I3(a2));
  }
  function z3(a2, e3) {
    e3 === void 0 && (e3 = null);
    return C2(_extends({}, d3, typeof a2 === "string" ? J2(a2) : a2, {
      state: e3,
      key: H3()
    }));
  }
  function A3(a2) {
    v2 = a2;
    a2 = h2();
    q3 = a2[0];
    d3 = a2[1];
    f2.call({
      action: v2,
      location: d3
    });
  }
  function y4(a2, e3) {
    function l2() {
      y4(a2, e3);
    }
    var g3 = r3.Push, n3 = z3(a2, e3);
    if (!c3.length || (c3.call({
      action: g3,
      location: n3,
      retry: l2
    }), false)) {
      var G3 = [{
        usr: n3.state,
        key: n3.key,
        idx: q3 + 1
      }, x3(n3)];
      n3 = G3[0];
      G3 = G3[1];
      try {
        u.pushState(n3, "", G3);
      } catch (K2) {
        m3.location.assign(G3);
      }
      A3(g3);
    }
  }
  function w2(a2, e3) {
    function l2() {
      w2(a2, e3);
    }
    var g3 = r3.Replace, n3 = z3(a2, e3);
    c3.length && (c3.call({
      action: g3,
      location: n3,
      retry: l2
    }), 1) || (n3 = [{
      usr: n3.state,
      key: n3.key,
      idx: q3
    }, x3(n3)], u.replaceState(n3[0], "", n3[1]), A3(g3));
  }
  function p3(a2) {
    u.go(a2);
  }
  b2 === void 0 && (b2 = {});
  b2 = b2.window;
  var m3 = b2 === void 0 ? document.defaultView : b2, u = m3.history, t3 = null;
  m3.addEventListener("popstate", k3);
  m3.addEventListener("hashchange", function() {
    var a2 = h2()[1];
    I3(a2) !== I3(d3) && k3();
  });
  var v2 = r3.Pop;
  b2 = h2();
  var q3 = b2[0], d3 = b2[1], f2 = F3(), c3 = F3();
  q3 == null && (q3 = 0, u.replaceState(_extends({}, u.state, {
    idx: q3
  }), ""));
  return {
    get action() {
      return v2;
    },
    get location() {
      return d3;
    },
    createHref: x3,
    push: y4,
    replace: w2,
    go: p3,
    back: function() {
      p3(-1);
    },
    forward: function() {
      p3(1);
    },
    listen: function(a2) {
      return f2.push(a2);
    },
    block: function(a2) {
      var e3 = c3.push(a2);
      c3.length === 1 && m3.addEventListener("beforeunload", E2);
      return function() {
        e3();
        c3.length || m3.removeEventListener("beforeunload", E2);
      };
    }
  };
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
var NavigatorContext = /* @__PURE__ */ react.createContext(null);
var LocationContext = /* @__PURE__ */ react.createContext({
  static: false
});
var RouteContext = /* @__PURE__ */ react.createContext({
  outlet: null,
  params: {},
  pathname: "",
  basename: "",
  route: null
});
function Outlet(_props) {
  return useOutlet();
}
function Router(_ref3) {
  let {
    children = null,
    action = r3.Pop,
    location,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? invariant(false) : void 0;
  return /* @__PURE__ */ react.createElement(NavigatorContext.Provider, {
    value: navigator
  }, /* @__PURE__ */ react.createElement(LocationContext.Provider, {
    children,
    value: {
      action,
      location,
      static: staticProp
    }
  }));
}
function useHref(to) {
  !useInRouterContext() ? invariant(false) : void 0;
  let navigator = react.useContext(NavigatorContext);
  let path = useResolvedPath(to);
  return navigator.createHref(path);
}
function useInRouterContext() {
  return react.useContext(LocationContext).location != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let navigator = react.useContext(NavigatorContext);
  let {
    basename,
    pathname: parentRoutePathname
  } = react.useContext(RouteContext);
  let {
    pathname: currentLocationPathname
  } = useLocation();
  let activeRef = react.useRef(false);
  react.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (activeRef.current) {
      if (typeof to === "number") {
        navigator.go(to);
      } else {
        let toPathname = to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J2(to).pathname : to.pathname;
        let path = resolvePath(to, toPathname ? parentRoutePathname : currentLocationPathname, basename);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
      }
    }
  }, [basename, navigator, parentRoutePathname, currentLocationPathname]);
  return navigate;
}
function useOutlet() {
  return react.useContext(RouteContext).outlet;
}
function useResolvedPath(to) {
  let {
    pathname,
    basename
  } = react.useContext(RouteContext);
  return react.useMemo(() => resolvePath(to, pathname, basename), [to, pathname, basename]);
}
function useRoutes(routes, _temp) {
  let {
    basename = "",
    location: locationArg
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    route: parentRoute,
    pathname: parentPathname,
    params: parentParams
  } = react.useContext(RouteContext);
  let locationFromContext = useLocation();
  let location = locationArg !== null && locationArg !== void 0 ? locationArg : locationFromContext;
  let basenameForMatching = basename ? joinPaths([parentPathname, basename]) : parentPathname;
  let matches = react.useMemo(() => matchRoutes(routes, location, basenameForMatching), [routes, location, basenameForMatching]);
  if (!matches) {
    return null;
  }
  let params = Object.assign({}, parentParams);
  let element = matches.reduceRight((outlet, match) => {
    Object.assign(params, match.params);
    return /* @__PURE__ */ react.createElement(RouteContext.Provider, {
      children: match.route.element || /* @__PURE__ */ react.createElement(Outlet, null),
      value: {
        outlet,
        params,
        pathname: joinPaths([basenameForMatching, match.pathname]),
        basename,
        route: match.route
      }
    });
  }, null);
  return element;
}
function matchRoutes(routes, location, basename) {
  if (basename === void 0) {
    basename = "";
  }
  if (typeof location === "string") {
    location = J2(location);
  }
  let pathname = location.pathname || "/";
  if (basename) {
    let base = basename.replace(/^\/*/, "/").replace(/\/+$/, "");
    if (!pathname.toLowerCase().startsWith(base.toLowerCase())) {
      return null;
    }
    pathname = pathname.slice(base.length) || "/";
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(branches[i2], pathname, routes);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    branches.push({
      path,
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  let pathScores = {};
  let pathIndexes = {};
  branches.forEach((_ref5) => {
    let {
      path,
      routesMeta
    } = _ref5;
    pathScores[path] = computeScore(path);
    pathIndexes[path] = routesMeta.map((meta) => meta.childrenIndex);
  });
  branches.sort((a2, b2) => {
    let aScore = pathScores[a2.path];
    let bScore = pathScores[b2.path];
    return aScore !== bScore ? bScore - aScore : compareIndexes(pathIndexes[a2.path], pathIndexes[b2.path]);
  });
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n3, i2) => n3 === b2[i2]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname, originalRoutes) {
  let matchedPathname = "/";
  let matchedParams = {};
  let {
    routesMeta
  } = branch;
  let routes = originalRoutes;
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end: i2 === routesMeta.length - 1
    }, remainingPathname);
    if (!match)
      return null;
    matchedParams = _extends2({}, matchedParams, match.params);
    matchedPathname = joinPaths([matchedPathname, match.pathname]);
    let route = routes[meta.childrenIndex];
    matches.push({
      params: matchedParams,
      pathname: matchedPathname,
      route
    });
    routes = route.children;
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[1];
  let values = match.slice(2);
  let params = paramNames.reduce((memo, paramName, index) => {
    memo[paramName] = safelyDecodeURIComponent(values[index] || "");
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  let keys = [];
  let source = "^(" + path.replace(/^\/*/, "/").replace(/\/?\*?$/, "").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_2, key) => {
    keys.push(key);
    return "([^\\/]+)";
  }) + ")";
  if (path.endsWith("*")) {
    if (path.endsWith("/*")) {
      source += "(?:\\/(.+)|\\/?)";
    } else {
      source += "(.*)";
    }
    keys.push("*");
  } else if (end) {
    source += "\\/?";
  }
  if (end)
    source += "$";
  let flags = caseSensitive ? void 0 : "i";
  let matcher = new RegExp(source, flags);
  return [matcher, keys];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}
function resolvePath(to, fromPathname, basename) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  if (basename === void 0) {
    basename = "";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? J2(to) : to;
  let pathname = toPathname ? resolvePathname(toPathname, toPathname.startsWith("/") ? basename ? normalizeSlashes("/" + basename) : "/" : fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
var trimTrailingSlashes = (path) => path.replace(/\/+$/, "");
var normalizeSlashes = (path) => path.replace(/\/\/+/g, "/");
var joinPaths = (paths) => normalizeSlashes(paths.join("/"));
var splitPath = (path) => normalizeSlashes(path).split("/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function resolvePathname(toPathname, fromPathname) {
  let segments = splitPath(trimTrailingSlashes(fromPathname));
  let relativeSegments = splitPath(toPathname);
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? joinPaths(segments) : "/";
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["onClick", "replace", "state", "target", "to"];
function HashRouter(_ref2) {
  let {
    children,
    window: window2
  } = _ref2;
  let historyRef = react.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.useState({
    action: history.action,
    location: history.location
  });
  react.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ react.createElement(Router, {
    children,
    action: state.action,
    location: state.location,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = /* @__PURE__ */ react.forwardRef(function LinkWithRef(_ref3, ref) {
  let {
    onClick,
    replace = false,
    state,
    target,
    to
  } = _ref3, rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ react.createElement("a", _extends$1({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return react.useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || I3(location) === I3(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}

// build/dist/pkg/@emotion/styled.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var createStyled = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles2.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === "string");
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      var ele = /* @__PURE__ */ react.createElement(finalTag, newProps);
      return ele;
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var styled_default = newStyled;

// build/dist/components/Button.js
var Button = styled_default.button(({
  variant,
  isSmall
}) => [
  {
    transform: "var(--tw-transform)",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    ":focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    },
    transitionDuration: "75ms"
  },
  {
    borderWidth: "2px",
    "--tw-border-opacity": "1",
    borderColor: "rgba(0, 0, 0, var(--tw-border-opacity))",
    borderRadius: "0px"
  },
  {
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(245, 158, 11, var(--tw-bg-opacity))",
      "--tw-border-opacity": "1",
      borderColor: "rgba(245, 158, 11, var(--tw-border-opacity))",
      "--tw-text-opacity": "1",
      color: "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  },
  {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(0, 0, 0, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    color: "rgba(255, 255, 255, var(--tw-text-opacity))"
  },
  variant === "secondary" && [
    {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(255, 255, 255, var(--tw-bg-opacity))"
    }
  ],
  isSmall ? {
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  } : {
    fontSize: "1.125rem",
    lineHeight: "1.75rem"
  }
]);
var Button_default = Button;

// build/dist/components/stepper.js
var stepButtonStyles = () => [{
  fontWeight: "700",
  paddingTop: "0px",
  paddingBottom: "0px",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.025em",
  ":focus": {
    outline: "2px solid transparent",
    outlineOffset: "2px"
  }
}, {
  borderWidth: "2px",
  "--tw-border-opacity": "1",
  borderColor: "rgba(0, 0, 0, var(--tw-border-opacity))",
  borderRadius: "0px"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(245, 158, 11, var(--tw-bg-opacity))"
  }
}];
var Stepper = ({
  value,
  id: id2,
  twProps,
  max,
  min,
  label,
  onChange
}) => {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  const handleChange = (e3) => {
    onChange(parseInt(e3, 10) || 0);
  };
  return jsx("div", {
    css: twProps
  }, label && jsx("label", {
    css: {
      display: "block"
    },
    htmlFor: id2
  }, label), jsx("div", {
    css: {
      width: "auto",
      display: "inline-flex"
    }
  }, jsx("button", {
    css: stepButtonStyles(),
    type: "button",
    onClick: decrement,
    "aria-controls": id2
  }, "–"), jsx("input", {
    css: [...stepButtonStyles(), {
      borderLeftWidth: "0px",
      borderRightWidth: "0px"
    }, {
      "::-webkit-inner-spin-button": {
        " -webkit-appearance": "none",
        margin: "0"
      },
      "::-webkit-outer-spin-button": {
        " -webkit-appearance": "none",
        margin: "0"
      }
    }],
    type: "number",
    step: "1",
    id: id2,
    value,
    min,
    max,
    onChange: (e3) => handleChange(e3.target.value)
  }), jsx("button", {
    css: stepButtonStyles(),
    type: "button",
    onClick: increment,
    "aria-controls": id2
  }, "+")));
};
var stepper_default = Stepper;

// build/dist/functions/array.functions.js
var range = (val) => [...Array(val).keys()];

// build/dist/models/general.model.js
var Gender;
(function(Gender2) {
  Gender2["Female"] = "Female";
  Gender2["Male"] = "Male";
})(Gender || (Gender = {}));

// build/dist/components/icons/reload-icon.js
var ReloadSvg = ({
  svg: color = {
    "--tw-text-opacity": "1",
    color: "rgba(0, 0, 0, var(--tw-text-opacity))"
  },
  container: classes = {
    height: "1rem",
    width: "1rem"
  }
}) => jsx("div", {
  css: [classes]
}, jsx("svg", {
  css: [{
    width: "100%",
    height: "100%"
  }, {
    fill: "currentColor"
  }, color],
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 50"
}, jsx("path", {
  d: "M42.14 6.8c.181.171.36.345.538.522l-7.071 7.071c-.178-.177-.359-.35-.544-.517L42.139 6.8z"
}), jsx("path", {
  d: "M42.678 7.322a24.991 24.991 0 0 0-.539-.522l-7.076 7.076c.185.168.366.34.544.517l7.07-7.07z"
}), jsx("path", {
  d: "m42.678 7.322-7.071 7.071c-.178-.177-.359-.35-.544-.517l-4.46 4.46 20.913 5.603-5.603-20.913L42.139 6.8c.182.171.362.345.539.522z"
}), jsx("path", {
  d: "M40.219 44.834a25 25 0 0 0 8.93-13.364l-9.66-2.588a15 15 0 1 1-4.426-15.006L42.139 6.8a25 25 0 1 0-1.92 38.034z"
})));
var reload_icon_default = ReloadSvg;

// build/dist/components/kin-name-list.js
var KinNameList = ({
  title,
  nameFunc
}) => {
  const randomNames = (count = 10) => ({
    female: range(count).map((_2) => nameFunc(Gender.Female)),
    male: range(count).map((_2) => nameFunc(Gender.Male))
  });
  const [names, setNames] = useState(randomNames());
  const getNames = () => setNames(randomNames());
  return jsx(react.Fragment, null, jsx("button", {
    css: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      marginBottom: "1rem",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgba(245, 158, 11, var(--tw-text-opacity))"
      }
    },
    onClick: () => getNames()
  }, jsx("h2", {
    css: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      textAlign: "center",
      display: "flex",
      "@media (min-width: 1024px)": {
        fontSize: "2.25rem",
        lineHeight: "2.5rem"
      }
    },
    className: "yx-heading"
  }, title), jsx(reload_icon_default, {
    container: {
      width: "1.5rem",
      height: "1.5rem"
    },
    svg: {}
  })), jsx("div", {
    css: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
    }
  }, jsx("div", null, jsx("h3", {
    css: {
      fontWeight: "600",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      textTransform: "uppercase"
    }
  }, "Kvinnor"), names.female.length > 0 && jsx("ul", null, names.female.map((name, i2) => jsx("li", {
    key: i2
  }, name)))), jsx("div", null, jsx("h3", {
    css: {
      fontWeight: "600",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      textTransform: "uppercase"
    }
  }, "Män"), names.male.length > 0 && jsx("ul", null, names.male.map((name, i2) => jsx("li", {
    key: i2
  }, name))))));
};
var kin_name_list_default = KinNameList;

// build/dist/hooks/use-current-width.js
var getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var useCurrentWidth = () => {
  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    let timeoutId;
    const resizeListener = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return width;
};

// build/dist/components/parchment.js
var Parchment = ({
  children,
  deps = []
}) => {
  const [svgHeight, setSvgHeight] = useState(0);
  const contentRef = useRef(null);
  const currentWidth = useCurrentWidth();
  useEffect(() => {
    if (contentRef !== null) {
      setSvgHeight(contentRef.current?.clientHeight ?? 0);
    } else {
      console.log("null content ref");
    }
  }, [...deps, currentWidth]);
  const dim = 98;
  const width = 2.5;
  return jsx("svg", {
    width: "100%",
    height: svgHeight,
    css: {
      filter: "var(--tw-filter)",
      "--tw-drop-shadow": "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))"
    }
  }, jsx("defs", null, jsx("filter", {
    id: "filter",
    height: "1.4",
    width: "1.4"
  }, jsx("feTurbulence", {
    baseFrequency: "0.05",
    numOctaves: "2",
    type: "fractalNoise",
    result: "turbulence"
  }), jsx("feDisplacementMap", {
    in2: "turbulence",
    scale: "10",
    result: "displacement",
    xChannelSelector: "R",
    in: "SourceGraphic"
  }), jsx("feMergeNode", {
    in2: "SourceGraphic",
    in: "displacement",
    operator: "atop",
    result: "fbSourceGraphic"
  }))), jsx("rect", {
    filter: "url(#filter)",
    fill: "white",
    stroke: "black",
    strokeWidth: width,
    width: `${dim}%`,
    height: `${svgHeight - width * 2 > 0 ? svgHeight - width * 2 : 0}px`,
    x: `${(100 - dim) / 2}%`,
    y: `${width}px`
  }), jsx("foreignObject", {
    width: "100%",
    height: "100%"
  }, jsx("div", {
    css: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingTop: "2rem",
      paddingBottom: "2rem"
    },
    ref: contentRef
  }, children && children)));
};
var parchment_default = Parchment;

// build/dist/components/day-counter.js
var DayCounter = ({
  quarters,
  spendQuarter: spendQuarter2
}) => {
  return jsx("button", {
    css: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "0px",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgba(245, 158, 11, var(--tw-bg-opacity))"
      }
    },
    onClick: () => spendQuarter2()
  }, jsx(Quarter, {
    spent: quarters[0],
    index: 0
  }), jsx(Quarter, {
    spent: quarters[1],
    index: 1
  }), jsx(Quarter, {
    spent: quarters[2],
    index: 2
  }), jsx(Quarter, {
    spent: quarters[3],
    index: 3
  }));
};
var Quarter = styled_default.div(({
  spent,
  index
}) => [{
  height: "1rem",
  borderWidth: "1px",
  "--tw-border-opacity": "1",
  borderColor: "rgba(107, 114, 128, var(--tw-border-opacity))"
}, index === 0 && {
  borderRightWidth: "0px"
}, index === 1 && {
  borderRightWidth: "0px"
}, index === 2 && {
  borderRightWidth: "0px"
}, index === 3 && {}, spent && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgba(209, 213, 219, var(--tw-bg-opacity))"
}]);
var day_counter_default = DayCounter;

// build/dist/pkg/rambda.js
function curry(fn, args = []) {
  return (..._args) => ((rest) => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}
var _isArray = Array.isArray;
var _keys = Object.keys;
function mapArray(fn, list, isIndexed = false) {
  let index = 0;
  const willReturn = Array(list.length);
  while (index < list.length) {
    willReturn[index] = isIndexed ? fn(list[index], index) : fn(list[index]);
    index++;
  }
  return willReturn;
}
function mapObject(fn, obj) {
  let index = 0;
  const keys = _keys(obj);
  const len = keys.length;
  const willReturn = {};
  while (index < len) {
    const key = keys[index];
    willReturn[key] = fn(obj[key], key, obj);
    index++;
  }
  return willReturn;
}
function map(fn, list) {
  if (arguments.length === 1)
    return (_list) => map(fn, _list);
  if (list === void 0)
    return [];
  if (_isArray(list))
    return mapArray(fn, list);
  return mapObject(fn, list);
}
function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError("reduce: list must be array or iterable");
  }
  let index = 0;
  const len = list.length;
  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }
  return acc;
}
var reduce = curry(reduceFn);
function sum(list) {
  return list.reduce((prev, current) => prev + current, 0);
}
function multiply(x3, y4) {
  if (arguments.length === 1)
    return (_y) => multiply(x3, _y);
  return x3 * y4;
}
function pluck(property, list) {
  if (arguments.length === 1)
    return (_list) => pluck(property, _list);
  const willReturn = [];
  map((x3) => {
    if (x3[property] !== void 0) {
      willReturn.push(x3[property]);
    }
  }, list);
  return willReturn;
}
var product = reduce(multiply, 1);

// build/dist/functions/dice.functions.js
var countSuccesses = (roll) => roll < 6 ? 0 : Math.floor(roll / 2) - 2;
function getRandomInt(min = 1, max = 6) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var getRandomT6 = () => getRandomInt(1, 6);
var getRandomT8 = () => getRandomInt(1, 8);
var getRandomT66 = () => {
  const tens = getRandomInt() * 10;
  const ones = getRandomInt();
  return tens + ones;
};
var choose = (arr) => arr[getRandomInt(0, arr.length - 1)];
var weightedRandom = (probabilities) => {
  const totalWeight = sum(pluck("weight", probabilities));
  const randomInt = getRandomInt(0, totalWeight);
  const chosen = probabilities.reduce((acc, cur) => {
    if (acc.done) {
      return acc;
    }
    const newLeft = acc.left - cur.weight;
    if (newLeft <= 0) {
      return {
        left: 0,
        done: true,
        data: cur
      };
    }
    return {
      ...acc,
      left: newLeft
    };
  }, {
    left: randomInt,
    done: false,
    data: {
      weight: 0
    }
  });
  return chosen.data;
};

// build/dist/functions/utils.functions.js
var isNullish = (val) => val == null;
var notNullish = (val) => !isNullish(val);
var inRange = (range2) => (val) => {
  if (isNullish(range2)) {
    return false;
  }
  return val > range2[0] && val < range2[1];
};

// build/dist/functions/weather.functions.js
var normalizeTempDeltaWithWetness = (temp, wetnessPercent) => {
  return temp * (1 / ((1 + wetnessPercent) * (1 + wetnessPercent)));
};
var getRandomArrayIndex = (e3) => {
  return Math.min(e3.length - 1, Math.floor(Math.random() * e3.length));
};
function toCelsius(fahrenheit) {
  return Math.floor((fahrenheit - 32) / 1.8);
}
var getTempString = (fahrenheit) => `${toCelsius(fahrenheit)} ${degreeSymbol}C`;
function toKilometers(miles) {
  return Math.floor(1.6 * miles);
}
function toMetersPerSecond(mph) {
  return Math.floor(1600 * mph / 3600);
}
var SUPERNATURAL_CHANCE = 6;
var degreeSymbol = "°";
var TEMP_CHANGE_TYPES = [1, 1, 0.3, 3];
var Units;
(function(Units2) {
  Units2[Units2["Imperial"] = 0] = "Imperial";
  Units2[Units2["Metric"] = 1] = "Metric";
})(Units || (Units = {}));
var units = Units.Metric;
var WindUnitType;
(function(WindUnitType2) {
  WindUnitType2["KPH"] = "Metric (kph wind)";
  WindUnitType2["MPS"] = "Metric (mps wind)";
  WindUnitType2["MPH"] = "Imperial (mph wind)";
})(WindUnitType || (WindUnitType = {}));
var windUnit = WindUnitType.KPH;
var StormType;
(function(StormType2) {
  StormType2["None"] = "";
  StormType2["Windstorm"] = "Storm";
  StormType2["Snowstorm"] = "Snöstorm";
  StormType2["Rainstorm"] = "Regnstorm";
})(StormType || (StormType = {}));
var Downpour;
(function(Downpour2) {
  Downpour2["None"] = "";
  Downpour2["Drizzle"] = "Duggregn";
  Downpour2["Showers"] = "Regnskurar";
  Downpour2["LightRain"] = "Regn";
  Downpour2["Raining"] = "Hällregn";
  Downpour2["LightSnow"] = "Lätt snöfall";
  Downpour2["SnowShowers"] = "Snöskurar";
  Downpour2["Snowing"] = "Snöfall";
})(Downpour || (Downpour = {}));
var WeatherDay = class {
  constructor(e3) {
    this.temp = e3.temp;
    this.lowTemp = e3.lowTemp;
    this.wetness = e3.wetness;
    this.wind = e3.wind;
    this.isWindy = e3.isWindy;
    this.isRaining = e3.isRaining;
    this.isCalm = e3.isCalm;
    this.isCloudy = e3.isCloudy;
    this.isPartlyCloudy = e3.isPartlyCloudy;
    this.isStorm = e3.isStorm;
    this.hasEvent = e3.hasEvent;
    this.stormType = e3.stormType;
    this.downpour = e3.downpour;
    this.windDesc = e3.windDesc;
    this.specialDesc = e3.specialDesc;
    this.eventType = e3.eventType;
    if (100 * Math.random() < SUPERNATURAL_CHANCE) {
      const t3 = getRandomArrayIndex(supernaturalEvents);
      supernaturalEvents[t3].applyEffects(this);
    }
  }
  Render() {
    const e3 = "";
    return e3;
  }
  GetHighString() {
    return units === Units.Imperial ? this.temp + degreeSymbol + "F" : toCelsius(this.temp) + degreeSymbol + "C";
  }
  GetLowString() {
    return units === Units.Imperial ? this.lowTemp + degreeSymbol + "F" : toCelsius(this.lowTemp) + degreeSymbol + "C";
  }
  GetWindString() {
    switch (windUnit) {
      case WindUnitType.KPH:
        return `${toKilometers(this.wind)} kph`;
      case WindUnitType.MPS:
        return `${toMetersPerSecond(this.wind)} mps`;
      case WindUnitType.MPH:
      default:
        return `${this.wind} mph`;
    }
  }
  GetSpecialString() {
    const e3 = "";
    return e3;
  }
};
var isRaining = (d3) => {
  switch (d3) {
    case Downpour.Drizzle:
    case Downpour.LightRain:
    case Downpour.Raining:
    case Downpour.Showers:
      return true;
    default:
      return false;
  }
};
var isSnowing = (d3) => d3 === Downpour.LightSnow || d3 === Downpour.SnowShowers || d3 === Downpour.Snowing;
var getWeatherIcon = (day) => {
  switch (true) {
    case isRaining(day.downpour):
      return `🌧`;
    case isSnowing(day.downpour):
      return `❄️`;
    case day.isCloudy:
      return `☁️`;
    case day.isPartlyCloudy:
      return `⛅️`;
    case day.downpour === Downpour.None:
    default:
      return `☀️`;
  }
};
var getMoonEmoji = (moon) => {
  if (typeof moon !== "undefined") {
    return moon === "full" ? "🌕" : "🌑";
  }
  return void 0;
};
var WeatherSystem = class {
  constructor(climate, wetness, tempVariation, wetnessVariation) {
    __publicField(this, "days", []);
    __publicField(this, "duration", Math.floor(1 + 14 * Math.random()));
    __publicField(this, "rampupType", getRandomArrayIndex(TEMP_CHANGE_TYPES));
    __publicField(this, "rampdownType", getRandomArrayIndex(TEMP_CHANGE_TYPES));
    const rand = Math.random();
    this.hasEvent = rand > 0.9;
    this.isStorm = rand > 0.8;
    this.isCalm = rand < 0.3;
    const wetnessDelta = 1.5 * wetnessVariation * (0.5 + 0.5 * rand);
    this.wetness = wetness + wetnessDelta * rand * 40;
    const deltaD = normalizeTempDeltaWithWetness(1.5 * tempVariation * (0.5 + 0.5 * rand), this.wetness / 100);
    this.temp = climate + deltaD * rand * 40;
    this.lowDelta = 5 + normalizeTempDeltaWithWetness(10 * Math.random() + 10, this.wetness / 100);
    this.wind = 30 * (rand - 0.2);
    if (this.isStorm) {
      this.wind += 20 * Math.random();
      if (this.duration > 4) {
        this.duration = Math.floor(this.duration / 2);
      }
      if (this.hasEvent && this.duration > 3) {
        this.duration = Math.floor(this.duration / 2);
      }
    }
    if (this.isCalm) {
      this.wind = Math.max(0, this.wind - 10 * Math.random());
    }
    if (this.hasEvent) {
      this.eventType = this.GetEventType();
    }
    this.days = [];
  }
  SetPreviousSystem(system) {
    this.previousSystem = system;
  }
  SetNextSystem(system) {
    this.nextSystem = system;
  }
  GenerateDays() {
    const temp = {
      current: this.temp,
      next: notNullish(this.nextSystem) ? this.nextSystem.temp : this.temp,
      prev: notNullish(this.previousSystem) ? this.previousSystem.temp : this.temp
    };
    const wetness = {
      current: this.wetness,
      next: notNullish(this.nextSystem) ? this.nextSystem.wetness : this.wetness,
      prev: notNullish(this.previousSystem) ? this.previousSystem.wetness : this.wetness
    };
    this.days = generateDays(temp, wetness, this.duration, this.rampupType, this.rampdownType, this.lowDelta, this.wind, this.isStorm, this.isCalm, this.hasEvent, this.eventType, this.previousSystem);
  }
  GetEventType() {
    const selectedSpecialEvents = specialEvents.map((se3) => {
      const k3 = [inRange(se3.requirements.temp)(this.temp), inRange(se3.requirements.wetness)(this.temp), inRange(se3.requirements.wind)(this.temp)].some((r4) => r4);
      return range(k3 ? se3.weight : 0).map((_2) => se3);
    }).flat();
    return choose(selectedSpecialEvents);
  }
};
var generateDays = (temp, wetness, duration, rampupType, rampdownType, lowDelta, wind, isStorm, isCalm, hasEvent, eventType, previousSystem) => {
  return range(duration).map((di2) => {
    const {
      tempDelta,
      wetnessDelta
    } = getTempAndWetnessDelta(di2, duration, rampupType, rampdownType, temp, wetness);
    const randTempChange = 4 * Math.random() - 2;
    const randWetnessChange = 4 * Math.random() - 2;
    const ramdDeltaChangedTemp = 4 * Math.random() - 2;
    const changedTemp = temp.current + tempDelta + randTempChange;
    const changedWetness = wetness.current + wetnessDelta + randWetnessChange;
    const deltaChangedTemp = changedTemp - (lowDelta + ramdDeltaChangedTemp);
    let newWind = (0.5 + 0.5 * Math.random()) * wind;
    const isRaining2 = isItRaining(changedWetness, isStorm);
    const isWindy = newWind >= 10;
    const {
      windSpeed,
      stormType
    } = getStormTypeAndWindSpeed(changedWetness, changedTemp, newWind, isStorm);
    newWind = windSpeed;
    const windDescription = isWindy ? getWindDescription(newWind) : "";
    const downpour = !isStorm && isRaining2 ? getDownpour(changedTemp, deltaChangedTemp, changedWetness) : Downpour.None;
    const specialDesc = di2 === 0 ? getSpecialDesc(duration, isStorm, temp.current, wetness.current, rampupType, rampdownType, previousSystem) : "";
    const flooredChangedWetness = Math.floor(changedWetness);
    const flooredChangedTemp = Math.floor(changedTemp);
    const cloudy = flooredChangedWetness > 50 && flooredChangedTemp > 45 && downpour === Downpour.None;
    const partlyCloudy = flooredChangedWetness > 45 && flooredChangedTemp > 50 && downpour === Downpour.None;
    return new WeatherDay({
      temp: flooredChangedTemp,
      lowTemp: Math.floor(deltaChangedTemp),
      wetness: flooredChangedWetness,
      wind: Math.floor(newWind),
      isWindy,
      isRaining: isRaining2,
      isCalm,
      isStorm,
      hasEvent,
      stormType,
      downpour,
      windDesc: windDescription,
      specialDesc,
      eventType,
      isCloudy: cloudy,
      isPartlyCloudy: partlyCloudy,
      supernaturalEvent: void 0
    });
  });
};
var getTempAndWetnessDelta = (durationIndex, duration, rampupType, rampdownType, temp, wetness) => {
  if (duration < 3) {
    return {
      tempDelta: 0,
      wetnessDelta: 0
    };
  }
  const isFirstHalf = durationIndex < duration / 2;
  const tempChange = getTempChange(isFirstHalf, durationIndex, duration);
  const newChange = getNewTempChange(isFirstHalf, tempChange, rampupType, rampdownType);
  const tempDelta = getTempOrWetnessDelta(isFirstHalf, newChange, temp);
  const wetnessDelta = getTempOrWetnessDelta(isFirstHalf, newChange, wetness);
  return {
    tempDelta,
    wetnessDelta
  };
};
var getTempChange = (isFirstHalfOfDuration, durationIndex, duration) => {
  if (isFirstHalfOfDuration) {
    return 1 - (durationIndex + 1) / (duration / 2);
  }
  return (durationIndex + 1 - duration / 2) / (duration / 2);
};
var getTempOrWetnessDelta = (isFirstHalf, newChange, val) => {
  const t3 = isFirstHalf ? val.prev : val.next;
  return (t3 - val.current) / 2 * newChange;
};
var getNewTempChange = (isFirstHalf, tempChange, rampupType, rampdownType) => {
  const rampType = isFirstHalf ? rampupType : rampdownType;
  const newTempChange = Math.pow(tempChange, TEMP_CHANGE_TYPES[rampType]);
  return isNaN(newTempChange) ? tempChange : newTempChange;
};
var isItRaining = (changedWetness, isStorm) => {
  const aboveLowWetness = changedWetness > 30;
  const aboveMediumWetness = changedWetness > 50;
  switch (true) {
    case (!isStorm && aboveLowWetness):
      return 100 * Math.random() < changedWetness;
    case (isStorm && aboveMediumWetness):
      return true;
    default:
      return false;
  }
};
var getStormTypeAndWindSpeed = (changedWetness, changedTemp, windSpeed, isStorm) => {
  const windStormSpeed = windSpeed + (10 + Math.floor(15 * Math.random()));
  const isAboveFreezing = changedTemp > 32;
  const lowWetness = changedWetness < 50;
  switch (true) {
    case (isStorm && lowWetness):
      return {
        stormType: StormType.Windstorm,
        windSpeed: windStormSpeed
      };
    case (isStorm && !lowWetness && isAboveFreezing):
      return {
        windSpeed,
        stormType: StormType.Rainstorm
      };
    case (isStorm && !lowWetness && !isAboveFreezing):
      return {
        windSpeed,
        stormType: StormType.Snowstorm
      };
    default:
      return {
        windSpeed,
        stormType: StormType.None
      };
  }
};
var getWindDescription = (windSpeed) => {
  const gustSpeed = Math.floor(windSpeed + 10 + 15 * Math.random());
  switch (true) {
    case windSpeed < 20:
      return "Windy";
    case windSpeed < 30:
      return "Blustery";
    case windSpeed >= 30:
      return `Very windy, with gusts up to ${gustSpeed} mph. Can knock down branches, fell trees and damage wooden structures.`;
    default:
      return "";
  }
};
var getSpecialDesc = (duration, isStorm, temp, wetness, rampupType, rampdownType, previousSystem) => {
  const tempAir = (prevTemp, temp2) => prevTemp < temp2 ? "Warmer" : "Colder";
  const airWetness = (prevWetness, wetness2) => prevWetness < wetness2 ? " and wetter" : " and drier";
  const airSpeed = (rampupType2, rampdownType2) => {
    switch (true) {
      case rampupType2 === 2:
        return " quickly";
      case rampupType2 === 3:
        return " slowly";
      case rampdownType2 === 3:
        return " and will linger";
      default:
        return "";
    }
  };
  let ret = "";
  if (duration <= 1) {
    return ret;
  }
  if (isStorm) {
    ret = "Stormy weather is moving in fast.";
  } else if (notNullish(previousSystem)) {
    ret += tempAir(previousSystem.temp, temp);
    ret += airWetness(previousSystem.wetness, wetness);
    ret += " air is moving in";
    ret += airSpeed(rampupType, rampdownType);
    ret += ".";
  }
  return ret;
};
var getDownpour = (temp, lowTemp, wetness) => {
  const isAboveFreezing = temp > 32 && lowTemp > 32;
  const isTeeShirtWeather = temp >= 50 && lowTemp >= 50;
  const lowWetness = wetness < 50;
  const mediumWetness = wetness < 75;
  const highWetness = wetness >= 75;
  switch (true) {
    case (isAboveFreezing && lowWetness):
      return Downpour.Drizzle;
    case (isAboveFreezing && mediumWetness && isTeeShirtWeather):
      return Downpour.Showers;
    case (isAboveFreezing && mediumWetness && !isTeeShirtWeather):
      return Downpour.LightRain;
    case (isAboveFreezing && highWetness):
      return Downpour.Raining;
    case (!isAboveFreezing && lowWetness):
      return Downpour.LightSnow;
    case (!isAboveFreezing && mediumWetness):
      return Downpour.SnowShowers;
    case (!isAboveFreezing && highWetness):
      return Downpour.Snowing;
    default:
      return Downpour.None;
  }
};
var specialEvents = [{
  name: "Insect Migration",
  description: "Clouds of insects fill the air and clog the street as they go out in search of new homes en masse.",
  requirements: {
    wetness: [0, 40],
    temp: [50, 200]
  },
  weight: 3
}, {
  name: "Sandstorm",
  description: "Dust and grit are blown up into the air by high winds. Being out in a sandstorm is miserable: it's easy to get disoriented, the high winds can damage structures and people, and heat stroke is a risk as pores get clogged with grit.",
  requirements: {
    wetness: [0, 40],
    temp: [70, 200]
  },
  weight: 2
}, {
  name: "Tornado",
  description: "A single tornado will typically last only a little while, usually only minutes, but they move fast and can travel up to 30 miles per hour.  Anything caught in the path of a tornado is likely to be destroyed or killed as extremely high winds pick it up into the air, break it apart and fling it around. Tornadoes happen inside of a powerful thunderstorm, which brings risks of rain, flooding and lightning even once the tornado is gone.",
  requirements: {
    temp: [40, 200]
  },
  weight: 1
}, {
  name: "Hurricane",
  description: "Hurricanes are devastating storms with high winds and significant amounts of rain.  They cause severe flooding and destruction of property, and can often devastate entire cities.",
  requirements: {
    wetness: [50, 200],
    temp: [60, 200]
  },
  weight: 1
}, {
  name: "Chinook",
  description: "A chinook is a sudden period of warm air that can occur in the middle of winter. They are heralded by a strange cloud formation, a 'chinook arch', where a solid line of cloud can be seen approaching in an otherwise clear sky.",
  requirements: {
    temp: [-50, 30],
    wetness: [0, 45]
  },
  weight: 1
}, {
  name: "Hail",
  description: "Hailstorms are very short-lived, usually lasting less than half an hour, periods inside of what would otherwise be a storm or thunderstorm.  Pellets of ice fall from the sky that can damage anything out in the open. Hailstorms can fell trees, break tree limbs and injure unprotected people out and about in them.",
  requirements: {
    temp: [32, 200],
    wetness: [50, 200]
  },
  weight: 1
}, {
  name: "Thunderstorm",
  description: "Thunderstorms are powerful storms which include lightning strikes.  They can cause flooding, the powerful winds can knock down tree limbs or even trees, and being struck by lightning can kill or severely injure any living being.",
  requirements: {
    temp: [33, 200],
    wetness: [50, 200]
  },
  weight: 4
}, {
  name: "Thundersnow",
  description: "Thundersnow is a rare phenomenon where a snow storm includes lightning strikes.  These snowstorms are usually powerful, including a large amount of snow accumulation, and quite cold.  Being struck by lightning can kill or severely injure any living being.",
  requirements: {
    temp: [-200, 32],
    wetness: [50, 200]
  },
  weight: 1
}, {
  name: "Flooding",
  description: "Too much rain over a long period of time or a lot of rain in a short period of time can cause rivers to run over their banks, flooding surrounding areas.  This usually destroys homes and can carry people and belongings away.  Anyone caught in the open during a flood is in extreme danger, and regions can be devastated.",
  requirements: {
    temp: [33, 200],
    wetness: [50, 200]
  },
  weight: 1
}, {
  name: "Slide",
  description: "When a hill or cliff face takes damage from severe weather, it can come crashing down onto low-lying areas.  Anyone caught in a slide is in extreme danger, and it will destroy most structures in an area.",
  requirements: {
    temp: [33, 200]
  },
  weight: 1
}, {
  name: "Avalanche",
  description: "When too much snow accumulates, it can slide off mountains in a powerful wave.  Avalanches are extremely dangerous and likely to kill anyone caught in them, as well as destroy any towns or villages in their way.",
  requirements: {
    temp: [-200, 30]
  },
  weight: 1
}, {
  name: "Blizzard",
  description: "Blizzards are extreme snowstorms: a lot of snow, a lot of wind, and very cold.  It is nearly impossible to see due to the sheer amount of snow.  The prime danger is getting lost or disoriented while inside one.  Blizzards can also cut off isolated individuals and communities from supplies, leading to starvation.",
  requirements: {
    temp: [-30, 20],
    wetness: [50, 200]
  },
  weight: 3
}, {
  name: "Wildfire",
  description: "Wildfire is a very dangerous situation where dry conditions and a spark (sometimes an unattended cooking fire, sometimes heat lightning) cause whole forests to catch fire and burn. Wildfires can destroy wilderness towns and are likely to kill anyone caught in them.  They also produce a lot of smoke, which can make the air hard to breathe for many miles from the source of the blaze.",
  requirements: {
    temp: [75, 200],
    wetness: [-200, 30]
  },
  weight: 3
}];
var supernaturalEvents = [{
  name: "Flame",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    const t3 = {};
    e3.hasEvent || (e3.isStorm ? e3.isRaining ? (t3.name = "Fire Storm", t3.description = "Fire storms are serious and random supernatural events that can happen during the middle of an otherwise normal storm.  The clouds will suddenly turn red and orange with black streaks and snow or rain will turn to sheets of flame that often explode when they strike the ground.  The fire storm portion of a storm will typically only last for a few minutes to an hour, and there is usually a few minutes of warning between the clouds changing color and the fire storm starting.  Anyone caught outside is likely to take severe fire damage, wooden structures or trees will sometimes catch fire and such an event can be devastating for a community.  They can cause wildfires, but usually any fires that are lit during the Fire Storm are extinguished when the storm system returns to normal.") : (t3.name = "Blaze Winds", t3.description = "Sometimes during powerful wind storms, the wind itself catches fire.  This is foretold by a sudden and sharp increase in temperature, which feels like opening an oven door or putting your face over a campfire.  When this happens, you'll usually only have a few minutes to seek shelter from the wind (ie: in the leeward side of buildings, hills, etc.).  When the wind catches fire, it will create huge sheets of flame five to ten feet wide and sometimes hundreds of feet long.  These sudden bursts of flame are very damaging to living beings and can set buildings and trees on fire, which is then aggravated by the powerful winds of the regular windstorm itself.  These usually cause wildfires, and an outbreak of Blaze Winds can devastate whole areas.", e3.temp += 40) : e3.isRaining ? e3.temp < 32 ? (t3.name = "Blaze Snow", t3.description = "Blaze snow is a strange phenomenon where highly flammable snow falls from the sky. Any source of fire will cause this flammable snow to burn.  This creates a beautiful effect around torches, candles and other sources of flame as they seem to dance and grow brighter while it's snowing, but any accumulation of blaze snow can be very dangerous because bringing a source of fire close to it will cause whole areas to catch fire.  Blaze snow clouds have coal-black streaks in them, and the snow itself looks more oily than usual.") : (t3.name = "Ash Rain", t3.description = "Ash Rain happens when too much magical fire comes in contact with normal rain clouds.  They continue to operate as clouds are expected to, but when it's time for them to rain, ash falls from them instead.  This is usually seen as a bad omen by the superstitious, and can cause serious problems: the ash makes it difficult to see while it's falling, it accumulates like snow but does not melt away and requires actual rain to wash it away, it makes it difficult to breathe and if you're out in it you can find yourself swiftly overheating.", e3.temp += 10) : e3.wind > 10 ? (t3.name = "Dragon Winds", t3.description = "Dragon winds are a serious danger in areas where magical weather is common.  They have picked up some amount of magical fire, and as such they bring unnaturally high temperatures.  They are very drying, and anyone breathing outside for more than a few minutes risks damage to their lungs, throat and eyes.  Dragon winds can also set small flammable objects on fire, such as candle wicks and loose papers, and powerful gusts have been known to light trees and even buildings on fire.", e3.temp < 100 ? e3.temp = 100 + 25 * Math.random() : e3.temp += 30) : (t3.name = "Fire in the Sky", t3.description = "Sometimes, on calm days with few clouds, wild magic can cause the sky itself to catch fire.  Innocent clouds are lit ablaze, small ones burn for several minutes and larger ones can burn for hours.  The temperature also becomes unnaturally hotter.", e3.temp += 20), e3.supernaturalEvent = t3);
  }
}, {
  name: "Cold",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Elemental Snowstorm", t3.description = "An elemental snowstorm has all the regular characteristics of a snowstorm: large amounts of blowing snow, high winds, and bitter cold.  It also causes accumulations of snow to spontaneously animate as snow elementals (in d20, use a water elemental).  These mindless, animate, vaguely humanoid shaped masses of living snow wander the landscape, senseless and angry and destructive.  Snow from an Elemental Snowstorm can spontaneously come to life even several days after the storm has passed.") : (t3.name = "Spiked Hail", t3.description = "As a rainstorm passes through an area of arcane cold, regular rain can turn into a dangerous substance called Spiked Hail.  Raindrops mix with arcane winds and bunch together quickly, forming large, spiked balls of ice resembling the head of a morningstar.  These spiked balls fall to the ground with tremendous force, badly damaging wooden structures, trees, and anyone unlucky enough to be caught out in it.  Spiked hail moves quickly, usually only hitting any given area for a few minutes of time, but it leaves a wide swathe of destruction in its wake.") : (t3.name = "Dire Wind", t3.description = "Frigid Dire Winds are a phenomenon much feared in regions where supernatural weather is common.  High winds mix with magical cold and as they blow, they cause thick layers of ice to form on whatever they touch.  This layer of ice forms at a rate of 1/8 of an inch every five minutes, quickly covering trees, roads, and buildings.  Living creatures trapped in a Dire Wind must keep moving to continually break off the forming ice or risk becoming frozen solid and unable to move.  The Dire Wind itself lasts anywhere from a few minutes to a few hours, but if it occurs during cold windstorms its effects can linger for days or even months until the affected surfaces melt.", e3.temp -= 10) : e3.isRaining ? e3.temp < 32 ? (t3.name = "Freeze Snow", t3.description = "When snow clouds on the horizon look more blue than grey, the experienced know that Freeze Snow is coming.  When these blueish flakes land, they emit a quick pulse of arcane cold.  When landing on plants, buildings, and ground this causes instant frost that can be treacherous to walk on, it will turn the surface of water to (thin) ice, and can cause frostbite if it lands on an animal or insect.  Freeze Snow is typically limited to the center of a cloud, so the worst of it usually passes within a few minutes to an hour, but multiple clouds can carry the problem so short bursts of it would be expected all day.", e3.temp -= 10) : (t3.name = "Blade Rain", t3.description = "When rain passes through an area of magical cold, it can turn to Blade Rain.  The droplets stretch out as they freeze, creating long, thin icicles that fall from the sky with a vengeance.  Blade rain can destroy trees, ruin roofs and cause minor injuries to living things.") : e3.wind > 10 ? (t3.name = "Ice Winds", t3.description = "When arcane cold mixes with blowing winds, dangerous Ice Winds are created.  These cold winds have the property of being able to randomly freeze water (and other easily frozen liquids) they come across.  This turns rivers and lakes to sheets of ice, even in the middle of summer, and can even cause breath clouds to freeze, fall to the ground and shatter.  They can be devastating to local ecosystems if they occur during an otherwise warm time of year.  Ice winds are typically localized to a small area, only a few miles wide at best.", e3.temp -= 10) : (t3.name = "Freeze Patches", t3.description = "On an otherwise calm day, when fine weather has mixed with dangerous magical cold, Freeze Patches can be created.  These areas of intense cold, usually -25 or colder, are small but dangerous.  Unprotected animals caught in these areas can quickly be afflicted by frostbite, especially in otherwise warm weather when they would be sweating, and plants and water can freeze solid.  A freeze patch is typically only a few dozen feet in size and invisible, detectable only through the damage they do."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Intelligence",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Sly Snow", t3.description = "Sly Snow is magically intelligent snow that seeks to cause as much havoc as it can.  It blows into large drifts in front of people's doors, it gathers on tree limbs until just the right time to fall onto unsuspecting victims, and it is magically capable of going down the back of your jacket.  Sly Snow brings with it all the misery of a usual snowstorm, with biting cold, heavy winds, and significant accumulation of snow, but is also actively trying to harm, injure and annoy anyone caught out in it.") : (t3.name = "Sapient Storm", t3.description = "A Sapient Storm is a rainstorm with a literal vengeance.  Stirred by strange magics and driven by unknown motives, this storm will often seek to harm those it passes across.  It has all the wind, rain, and lightning of a regular storm but also possesses the odd desire to use them against people, often making it much more destructive than regular storms.  A Sapient Storm will typically only last a few hours before turning back into a regular storm, and can occasionally be reasoned with.") : (t3.name = "Witty Winds", t3.description = "Some winds tell jokes.  Witty Winds are magically animated windstorms, full of sound and fury but really they just want to be loved.  These winds will tell jokes, craft elaborate stories, and otherwise try to influence those caught within them.  Unfortunately, they are still destructive windstorms capable of knocking down trees and damaging structures, so listeners beware.", e3.wind += 15) : e3.isRaining ? e3.temp < 32 ? (t3.name = "Sentient Snow", t3.description = "Sentient snow is heralded by fuzzy pink clouds that look more like cotton candy than water vapor.  When their purplish snow falls to the ground, any animal that eats it instantly gains surprising intelligence.  They can suddenly speak and scheme just as well, perhaps better, than any humanoid or goblin-kin.  The effect usually lasts only a few hours, but some rare animals have been known to become permanently sentient after eating this snow.  Humanoids and other already-sentient creatures can gain a modest improvement to their own intellect by eating this snow, and some have tried to bottle it to sell the effect but when the snow melts its magic wears off, making it difficult to create a viable product.") : (t3.name = "Talking Rain", t3.description = "When Talking Rain falls, secrets will be revealed.  The clouds above start to glow a strange green and when the green water that falls from them gets on the surface of a plant, that plant begins to talk.  While they mostly sing or gossip with each other, a savvy person with an agenda can use this strange phenomenon to their benefit, because the plants hold many secrets.") : e3.wind > 10 ? (t3.name = "Walking Wind", t3.description = "When a Walking Wind blows through, even rangers and druids can be afraid.  When this magical wind touches plants, they start to exhibit distinctly animal properties.  Trees uproot themselves and begin roaming in search of fresh meat, ferns crawl along the ground as hungry scavengers, and bushes start to hop around.  Plants affected by a walking wind only stay this way while the wind is blowing, and these winds are short-lived, lasting only a few minutes to a few hours.") : (t3.name = "Conversational Clouds", t3.description = "Some clouds can talk, or so it is said.  When the right kind of magic burbles up on a beautiful and calm day, Conversational Clouds are sometimes the result.  The talkative clouds might be far away but their magical speech can reach many miles, including all the way to the ground.  They often talk about their day or other unimportant matters, but can occasionally be persuaded to speak about things they've seen.  Since clouds travel far, the information they bring can be from strange and faraway lands."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Fey",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Fairy Snow", t3.description = "When Fairy Snow falls, it's best to brew a little tea, make some cakes, and leave them at your door to appease the fey visitors.  Fairy Snow forms when fey magic mixes with a snowstorm.  Snowflakes start to glom together and spontaneously create mischievous fairies, who run amok and cause all sorts of havoc for the unfortunate people caught in their path.  These fairies will play pranks that range from annoying, like freezing pots of stew or piling snow up in front of doorways, to dangerous like summoning vicious dire animals in strange places (eg: the pantry, the closet, your pants).  Fairies created by Fairy Snow generally live for the life of the snowstorm only, and can usually be mollified by offerings of refreshment and sweets, but ensure you have enough or jealous fairies will make your life even worse.") : (t3.name = "Giant Growth Rainstorm", t3.description = "Giant Growth Rainstorms are a weather system much prayed for by those who have heard of them.  When fey magic mixes with a powerful weather system, dark green rain falls.  Any plants that the rain lands on suddenly start to grow enormous: grasses become as tall as trees, bushes become massive, and trees tower high in the sky.  Importantly, fruits and other edible parts of plants become so large that a single plum could feed an entire village for days.  While this is a boon for farmers and garden-growers, it can be make things very difficult for travelers and trade.  Plants that have grown giant will typically retain their size for a few months before slowly returning to normal.") : (t3.name = "Morphstorm", t3.description = "A Morphstorm is a strange phenomenon that occurs when fey magic mixes with a powerful windstorm.  It still carries all the normal dangers of a windstorm (falling tree limbs and trees, damage to structures) but also has a chance to transform parts of any people caught out in it without shelter.  This transformation will usually affect only a single body part (usually a head, sometimes legs) and turns a creature's body part into the same body part from a different animal.  People with ass's heads tend to be the most common, but dogs can end up with cow heads, squirrels with octopus legs, and so forth.  The effect lasts only as long as the windstorm does, and strong windstorms usually die down after a few hours, though some can linger for hours or days.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Clairvoyant Snow", t3.description = "When fey magic mixes with falling snow, it can create an effect known as Clairvoyant Snow.  These snow clouds sparkle and glitter completely unlike other clouds, and any intelligent thing that the snow lands on is likely to start having visions of the future.  These visions are scattered and chaotic, usually little more than a brief glimpse or half-heard sound, but with concentration some magically-inclined individuals can sit out in the middle of the blowing snow and receive full visions of events to come.") : (t3.name = "Verdant Rain", t3.description = "When regular rain mixes with heavy concentrations of fey magic, Verdant Rain can be the result.  These leafy green clouds create green rain, and when this rain strikes the ground, it immediately causes thick tangles of plants to grow.  Grasses, weeds, underbrush, bushes, ferns and even trees sprout immediately where the rain lands.  This can be a blessing in desolate areas of tundra or desert, but can make forests or jungles almost impassable.  A Verdant Rain last only a few minutes to a few hours, falling only from one or two clouds in a weather system, but the vegetation that sprouts is real and will live a full and normal life as long as it landed somewhere it could normally grow.") : e3.wind > 10 ? (t3.name = "Mischievous Winds", t3.description = "Mischievous Winds happen on blustery days, when fey magic mixes with the blowing air currents.  Mischievous Winds seem to seek to make life harder: they untie knots, unlock locks and randomly move unattended items to new locations.  If you stand very still, an activity that is likely to cause your pants to fall down in such a wind, you might be able to hear the distant sound of giggling.  No scholar has ever been able to determine if Mischievous Wind is truly sentient or merely a strangely annoying magical effect.") : (t3.name = "Smiling Sun, Gossamer Wings", t3.description = "On days when fey magic hangs heavy in the still air, the sun can smile down on the land and grant those lucky enough to feel its warmth brief use of gossamer, fairy-like wings.  These wings sprout instantly without damaging the recipient or their belongings, and with careful concentration they can be used to fly, although most creatures who have never flown before may find it difficult and clumsy to do so.  People who have seen a Smiling Sun report that the strangest part of the experience is seeing squirrels and deer flying through the air on majestic insect wings.", e3.temp += 5), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Teleport",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Seven-League Snow", t3.description = "Seven-League Snow is a deceptively dangerous condition that can happen when teleportation magic mixes up with a powerful snowstorm.  This snow glows a faint golden color and has an enticing floral scent to it.  Any creature that eats it suddenly finds themselves able to move seven-leagues (about 24 miles) in a single step.  This effect can be disorienting and often gets the imbiber lost or in trouble because it wears off quickly (a minute or two), however savvy users can use it to travel great distances in a brief time.  It also brings some danger in that animals and monsters that eat the snow can suddenly appear in locations where they're not expected.  Seven-League Snow often moves as a single cloud in a larger snowstorm and so leaves a distinct path through a landscape.  If the snow is not eaten within an hour of falling, its magical properties fade.") : (t3.name = "Portal Storm", t3.description = "During heavy rain storms charged with teleportation magic, Portal Storms can occur.  These strange and dangerous events cause puddles and streams on the ground to become portals to other places, times, and dimensions.  Any place that water gathers becomes a potential location where a portal can form.  The unlucky or unwise can fall into these portals and be lost in these disparate dimensions.  Portal Storms can also bring unwelcome guests, as dangerous creatures from far away magical lands can cross through.  A Portal Storm will typically only last a few minutes to an hour, even if the rainstorm itself lasts longer.") : (t3.name = "Phasing Windstorm", t3.description = "A Phasing Windstorm is a much more dangerous version of a regular windstorm.  Powerful gusts of wind can fell trees and break branches, but because of the teleportation magic infused within the storm, any debris whipped up by the storm becomes partially incorporeal: it can travel through other trees, buildings and even the ground, but upon striking a living being it will become solid again.  Temperature effects from the storm are also magnified, as the wind passes through clothes and walls without stopping, becoming much more likely to freeze or exhaust anyone caught in it.  Sheltering underground or within the protection of a force effect (magical armor, force shields, etc.) will protect from these effects.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Blink Snow", t3.description = "Blink Snow happens when teleportation magic mingles with blowing snow, creating silvery snow that grants anyone it falls on strange powers.  They seem to be in many places at once, flickering to different positions in the space of around five feet at a rate of several times per second.  This makes combat especially interesting, but even friendly interactions become difficult when you can't figure out the exact location of the other person.") : (t3.name = "Timesplice Rain", t3.description = "When teleportation magic mixes with rain, it can create a strange effect where those caught up in the rain can skip around in time.  Those caught out in Timesplice Rain can be transported several minutes or several hours into the future, disappearing immediately from where they're standing and then reappearing at the new time.  For them, no time seems to have passed at all.  Timesplice Rain usually only lasts a few minutes during a rainfall but can be very disconcerting for anyone affected.") : e3.wind > 10 ? (t3.name = "Quickening Wind", t3.description = "A Quickening Wind is a strange phenomenon that happens when winds become charged with teleportation magic.  Those moving around find that regular walking or running suddenly becomes instantaneous movement from one location to another, moving up to forty five feet at a time without actually using your legs.  A Quickening Wind will typically only last a few hours.") : (t3.name = "Haste Mist", t3.description = "On calm days when teleportation magic fills the air, Haste Mist can accumulate near the ground.  These areas of golden mist can be up to a few hundred feet wide and form in the early morning, but usually burn away by noon.  Anyone who breathes in the air starts to move faster, as much as twice as fast as they regularly can, and the effect persists for several minutes after leaving an area of Haste Mist."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Heavy",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Stone Snow", t3.description = "Stone Snow happens when gravitational magic mixes with a powerful snowstorm, resulting in a devastating magical phenomenon.  The snow looks mostly like regular snow, although it no longer sparkles like real snow, but when it lands on the ground it turns out to have the consistency, and weight, of stone.  Trees and buildings are easily crushed under this weight, as are unwary living beings.  Stone Snow is typically localized to a small area within the larger snowstorm and passes quickly, usually in a few minutes to an hour, but can leave behind a path of destruction: flattened trees, smashed buildings, and crushed wildlife.  The magical effect wears off several minutes after the Stone Snow has fallen, but by then the damage has usually been done.") : (t3.name = "Heavy Rain", t3.description = "Heavy Rain happens when gravitationally charged magic comes in contact with a rainstorm.  These clouds are a dense, dark black, and the rain that falls from them is a similarly unnerving color.  The droplets strike with notable force, causing even more damage to trees and structures than a regular rainstorm, and they cling to whatever they land on, collecting and weighing them down.  A living creature caught in Heavy Rain can become immobile from the weight, or even knocked to the ground and unable to get up, resulting in unfortunate drownings.  Heavy Rain clouds travel quickly, meaning that any given area will only experience a few minutes to an hour of the phenomenon before it passes, and regular water washes away the Heavy water.  Heavy Rain leaves a swathe of destruction in its wake: a path of drowned animals and broken trees.") : (t3.name = "Catapult Wind", t3.description = "Catapult Wind happens when gravitational magic mixes with a windstorm, creating a dangerous situation that can devastate a region.  Any debris kicked up by the storm (birds, tree branches, dust) becomes much heavier than normal, turning into dangerous projectiles that can wreck walls, smash windows, destroy roofs, and grievously harm living beings caught in the way.  Savvy weather watchers can use this to their advantage, as even just throwing a handful of gravel into the air can create a fast-moving cloud of dangerous projectiles.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Breaker Snow", t3.description = "Breaker Snow happens when gravitationally charged magic meets a snow cloud.  These blackish clouds unleash snow that is streaked through with black lines, and which is much heavier than regular snow.  It easily breaks tree limbs, knocks over trees, and collapses roofs.  Anyone unlucky enough to be caught sleeping when Breaker Snow moves through can find themselves buried underneath the heavy snow and trapped for hours, possibly even suffocated.  Breaker Snow passes through quickly, lasting only a few hours in each area, and the enchantment on the fallen snow wears off after a few minutes to an hour.") : (t3.name = "Hard Rain", t3.description = "When gravitational magic mixes with light rain, it becomes a strange phenomenon called Hard Rain.  These rain drops are still visibly like water, but they strike with the force of hail.  Hard Rain will tear through thatch roofs, break tree limbs, and can cause minor damage to living things.  Hard Rain clouds move fast and any given patch of land usually only finds itself affected by them for a half hour or so.") : e3.wind > 10 ? (t3.name = "Sinking Wind", t3.description = "When a Sinking Wind blows, sailors become afraid.  Gravitational magic mixes with natural air currents and makes everything it touches much denser: flying creatures find themselves unable to fly, swimming creatures find it very difficult to remain on the surface, and boats can find themselves pushed under the unnaturally heavy waves.") : (t3.name = "Lazy Sun", t3.description = "Some days, when gravitational magic hangs thick in the air, the sun becomes lazy and droopy.  It hangs low in the sky, becoming visibly much larger, and the day grows hotter.  Everything caught in this field of magic finds itself becoming lazier: they yawn a lot more, it's hard to summon the energy to move around and any exercise is much more likely to be fatiguing.  If you can control this reaction and muscle through it, this is the perfect time to sneak past normally hungry predators and monsters, but care must be taken because physical attacks become much stronger while under the effect of a Lazy Sun.", e3.temp += 15), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Lightness",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Suspended Snow", t3.description = "When inverse gravitational magic mixes with a snowstorm, Suspended Snow can be the result.  This lighter-than-air snow falls from the sky as usual but as it gets closer to the ground it becomes lighter and lighter until it stops falling and simply hangs there.  The snow can become trapped several inches from the ground or dozens of feet, depending on how heavy it was in the first place, and this weather can create a temporarily very beautiful effect.  However, when the Suspended Snow's magic wears off after a few hours, the snow all immediately falls to the ground.  This heavy dump of the white stuff can much more easily break trees or bury unsuspecting creatures.") : (t3.name = "Backward Rain", t3.description = "Backward Rain happens when a rainstorm encounters inverted gravitational magic.  The rain becomes lighter than air and instead of falling to the ground, falls upward off of the ground.  Puddles start to dry up and rivers and lakes lose some water during this effect, but since it passes within a few hours during what is otherwise a traditional rainstorm it usually does not cause abnormal water levels.  It can alleviate flooding or other problems that have happened due to recent, excessive rain.") : (t3.name = "Mixing Wind", t3.description = "A Mixing Wind will literally mix up the landscape.  This windstorm has become charged with inverted gravitational magic and will easily pick up anything it encounters by making it much much lighter: trees, buildings, boulders, everything will get picked up by the storm and blown wherever the wind goes.  This can move entire towns and forests to new locations, and is often very disorienting for any creature caught in its grasp.  Damage is usually limited to trees and structures when this happens, if a person in a Mixing Wind gets hit by a boulder they will actually be fine because, during the windstorm, the boulder weighs little more than a puppy.  A Mixing Wind can last for a few minutes or a few hours, but the effects of it on a region can last for years.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Bounce Snow", t3.description = "Inverse gravitational magic has infused this strange, violet snow such that when you are in contact with it you find yourself able to jump much higher and farther than you ever have in your life.  As long as some Bounce Snow is touching you, you can leap and bounce with unnatural distance, sometimes thirty or more feet in one stride.  The violet clouds that produce this strange snow last only a few hours, and the magic fades from the snow on the ground a few hours after that.") : (t3.name = "Traveler's Rain", t3.description = "When a Traveler's Rain falls, inverted gravitational magic infuses the violet water and causes anything it coats to become instantly lighter.  This allows anyone trying to pick up, move, or otherwise physically affect the items to be able to do so much more easily.  A regular person can lift a boulder that's been rained on by Traveler's Rain!  This allows travelers to go much further distances without getting tired while they're under the influence of the Rain, but can have many other strange and unexpected effects too.  Traveler's Rain typically lasts for a few hours, or even several days.  Once it dries or is washed away by regular rain, the effect ends.") : e3.wind > 10 ? (t3.name = "Flying Wind", t3.description = "When a Flying Wind blows, strange gravitational magic mixes with blowing winds to create a fun but potentially dangerous effect.  Any creature touched by the wind instantly becomes much lighter and able to be blown about by the wind like a leaf.  This can be entertaining, but around treacherous terrain can also be very dangerous.  Mooring individuals with ropes is highly encouraged, though not always possible.  A Flying Wind will typically last for a few hours before fading into regular wind, and those savvy enough can use it to travel great distances, as long as they're going the same way as the wind blows and are willing to accept some danger.") : (t3.name = "Excited Sun", t3.description = "When inverted gravitational magic hangs in the air but there is little wind to disperse it, it can create areas where the sun seems to dance and jump with lightness and joy.  Creatures experiencing this phenomenon find themselves to be much happier and more full of energy than they usually are, they can run faster and jump higher and perform feats of athleticism that they otherwise could not.  Fighting is much harder under an Excited Sun, as physical attacks do not hit nearly as hard."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Quiet",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Muting Snow", t3.description = "Anyone unfortunate enough to consume muting snow becomes entirely silent: their footsteps don't make noise, their weapons don't make noise, and they cannot talk.  This can be very beneficial if they are trying to sneak somewhere, but is more often inconvenient or even dangerous.  The effects of Muting Snow can remain for hours, and the snow itself maintains its magical properties for several days.") : (t3.name = "Sneaky Storm", t3.description = "Sneaky Storms happen quickly and can be quite dangerous.  Although they have all the power and fury of regular rainstorms (high wind, lots of rain, and the potential to fell trees and flood rivers) but it makes no noise.  No howling winds, no falling raindrops, even the rivers and streams and waterfalls fall silent during such a storm.  The magical portion of the storm usually only lasts a few hours, while the storm itself may rage for days.  Sneaky Storms can cause the unwary to underestimate its dangers and take risks they would not otherwise.") : (t3.name = "Voiceless Storm", t3.description = "When a Voiceless Storm rolls through, all commerce and spellcasting stops.  This powerful windstorm has been infused with silencing magic and as it blows through an area, everything goes quiet, even the wind itself.  It can still be felt and its effects, like broken trees and damaged structures, are clear but there is no noise.  People caught in these dangerous storms can't speak to communicate with one another and spellcasters who might normally use magic to calm the might of the weather find themselves unable to do so.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Silent Snow", t3.description = "When Silent Snow falls, the world becomes blanketed in quiet.  Echoes are muted, voices are muffled, and even the sounds of battle fade almost to nothing.  Footsteps on the snow, in particular, are completely silent and thieves often take advantage of this magical weather to perform nefarious deeds.  The downside is that spellcasting and communicating through voice become much harder during Silent Snow.  Those who look keenly can see that Silent Snow does not sparkle in the light like regular snow, and when that sparkle comes back (usually after a few hours) the sound returns.") : (t3.name = "Musical Rain", t3.description = "When rain mixes with sound-based magic, it can sometimes take on a life of its own.  As this rain falls, it lands with tinkly musical notes and swelling choral crescendos instead of the usual sound of rain on ground.  The music it makes is beautiful and haunting, never truly resolving but simply rising and falling in an endless virtuoso performance.") : e3.wind > 10 ? (t3.name = "Breath-Stealing Wind", t3.description = "Spellcasters know to fear a breath-stealing wind.  This breezy weather system has been combined with silencing magic in order to create a strange effect where gusts of wind actually make those they pass across quieter.  The stronger the gust, the quieter the person (or animal or other source of noise).  Savvy thieves and assassins can learn to read this wind and take advantage of it to hide their activities, but unlucky spellcasters find themselves unable to finish their verbal magic at the most inopportune times.") : (t3.name = "The World Holds its Breath", t3.description = "When The World Holds its Breath, silencing magic gathers in pockets low to the ground where it creates spaces that are completely soundless.  Anyone entering these areas finds that their footsteps grow quiet, their clothing stops making noise and they can no longer speak.  These patches of silence are eerie and can even be crippling to spellcasters who rely on verbal cues to cast.  Each patch is usually a few hundred feet in diameter, roughly circular or conforming to natural land forms.  The magic in the affected areas usually wears off after a few hours, though sometimes it can linger for days."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Eldritch",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Melting Snowstorm", t3.description = "A Melting Snowstorm is a horrifying phenomenon indeed, when chaos magic mixes with a snowstorm.  Plants and structures are affected as normal by the snow and wind and cold, but any creatures caught out in the snow find that as the snow falls on them they start to change shape.  Their bodies begin to melt into blobby puddles, held together by skin but without any internal structure.  They grow new eyes and mouths and the longer they stay in this form the more they find themselves able to create pseudopods with their horridly melted bodies.  Clothing offers some protection from this effect, though it really only slows it instead of stopping it, but fortunately once the magic wears off the creatures (usually) return to their original form and shape.  Melted creatures are often very hostile to the world around them, lashing out because they don't understand what's happening to them, and will often try to tear each other apart in fear (damage caused to a Melted being does persist after the effect wears off).  A Melting Snowstorm is usually a small pocket within a larger storm that passes quickly over the land, depositing the Melting Snow before moving on, and the magic fades from this snow a few hours after it has landed.") : (t3.name = "Tentacle Rain", t3.description = "Tentacle Rain starts out looking like Verdant Rain: it's greenish and where it lands, plants seem to start to sprout from the ground.  Something is clearly wrong, though, because the greenish color is sickly and weird and the plants that start to grow are red and purple and white, not green.  The plants grow quickly and soon it's clear that the rain has actually planted strange and weird growths: tentacles as big as trees grow where the rain has landed, eyestalks bloom like flowers, and squelching viscera rise like bushes.  These strange plants can be hostile to creatures near them, lashing out with mindless hunger to try and batter and bludgeon living creature.  Worse, these things even grow on living creatures where the rain has landed, giving them strange tentacles and other weird growths.  The Tentacle Rain passes through an area usually after a few hours, but the growths it creates remain until they die off (usually of hunger after a few days, but ones that are capable of feeding themselves enough meat can last for weeks).  After they die off, these weird growths end up rotting on the ground, spawning weird parasites and scavengers from inside their otherworldly corpses, so the aftermath of a Tentacle Rain can be quite horrifying.") : (t3.name = "Voices of Madness", t3.description = "It starts with whispers: dark and unnatural, coming from just beyond the edge of your vision and crawling in through your ears.  They don't speak any language you understand but they always tantalize with a suggestion of meaning.  Soon they become louder and more frightening: howls and screams, shouting and cajoling, all in a language you can just barely not understand.  The words sound familiar but you can't make any sense of them.  Then it gets louder still, screaming directly in your ear while the wind whips about, breaking trees and buildings and minds.  Voices of Madness happen when chaos magic mixes with a powerful windstorm, and can drive anyone caught out in it mad.  The weak-willed find themselves doing strange things: clawing at their skin, curling up into a ball and rocking, or even striking out violently at anyone nearby.  This temporary madness goes away when the magic fades, which usually happens within a few hours of the phenomenon starting.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Snow From Beyond", t3.description = "Snow From Beyond has been infused with chaos magic.  At first it may seem like normal snow, but as you get closer to it, it starts to change colors and twist before your eyes, changing the landscape simply by being on it.  Plants and non-intelligent animals can easily be transformed by this snow, growing strange tentacles or turning into amorphous blobs, and routes that travelers once knew may become dangerous and twisted, looping in on themselves and taking people to strange places they never intended to go.  These effects usually wear off a few hours after a cloud affected by Snow From Beyond leaves an area.") : (t3.name = "Hallucinatory Rain", t3.description = "Hallucinatory Rain happens when a regular rain cloud has become infused with chaos magic.  As the rain falls, anyone caught out in it starts seeing... things.  Strange creatures standing in the distance, weird whispers just behind their ear, horrifying and twisted monsters skulking about in the underbrush or the canopy.  Even their companions seem to warp and change: growing extra eyes and fangs, or having their bodies twist and twizzle into themselves.  These effects can be terrifying and make a person doubt everything they thought they knew about the world, but they are all merely illusions (or are they?).") : e3.wind > 10 ? (t3.name = "Monument Wind", t3.description = "Monument Wind is a strange phenomenon indeed.  When chaos magic mixes with a breezy day, a strange sound like off-key singing or the whispering of a thousand voices can be heard just off in the distance.  Non-intelligent creatures (and some weak-willed sentients) find themselves compelled to create monuments to the otherworldy beings they hear.  This usually involves the construction of small cairns from gravel or twigs by ground-dwelling animals and weird charms hanging from trees by birds, but some animals can work together to erect massive structures like clay obelisks or huge, weird writing on the ground.  These things that they create are real and physical and so may stay for many weeks or years after they're constructed, even when the Monument Wind has stopped.") : (t3.name = "Chaos Skies", t3.description = "When eldritch magic lingers, the sky starts to do strange things.  Clouds twist and turn into strange and disturbing shapes, the sky itself changes to odd or even frightening colors and people caught out in it find themselves starting to hallucinate.  Unintelligent animals even start to trasnform, with their limbs being replaced by tentacles and strange hooks and other horrifying changes.  When the Chaotic Skies effect passes, usually after a few hours, the transformed animals return to normal."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Necromantic",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Abomination Snow", t3.description = "Abomination Snow is a much-feared weather phenomenon that is whispered about in dark and frightened stories.  Snow infused with necromantic energies comes on in a fury, accompanied by biting winds and dark clouds, but as the snow falls on corpses or grave sites it causes those dead things to undergo a horrifying transformation.  The corpses start to clump together, binding to one another through magical means, and creating truly horrible amalgamations of the dead.  These things tend to be large, as big as giants in some cases, and furiously hungry to consume more people to add to their horrible bodies.  The effect lasts as long as the snowstorm does, and can be very deadly for anyone caught in it- which makes it worse by adding more corpses to the Abominations.") : (t3.name = "Life-Stealing Rain", t3.description = "When a powerful rain storm is infused with necromantic magic, it becomes Life-Stealing Rain.  This rain is a pale and ghostly blue in color, and whatever it touches starts to wither and die.  Trees become desiccated and dry, their bark flaking off, and any plants which have not lost their leaves start to lose them in copious amounts.  Animals become thin and emaciated, seeming to starve and age right before the eyes, and even structures can find themselves aging quickly, crumbling in places and rotting in others.  Each raindrop that falls on something can carry this horrible power, and the best protection against Life-Stealing Rain is to stay out of it by sheltering in a building (which may rot away around you) or a natural formation like a cave.  Life-Stealing Rain typically lasts only for a few hours in any given area before the winds cause it to move elsewhere, although the rainstorm that it was part of may still be going on.") : (t3.name = "Winds of Death", t3.description = "When a powerful windstorm mixes with necromantic magic, it starts to howl with evil intent.  These winds now are not only capable of destroying trees and buildings, but they carry with them runic shouts of destruction for life itself.  Anyone hearing the winds finds themselves buffeted by magical energy, and the weak-willed or sickly can be struck dead instantly by these sounds.  Those killed by the winds soon rise as horrible undead creatures, adding even more danger to the situation as these creatures seek to destroy the living.  The winds themselves only last for a little while, minutes at a time before blowing into a new area, but the undead it creates persist until destroyed.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Zombie Snow", t3.description = "When Zombie Snow falls, there is often no warning that people's lives are about to get very bad.  This snow charged with necromantic magic does not look any different from regular precipitation, but as it lands on corpses or grave sites the necromantic magic contained within it animates these dead things temporarily.  Zombies burst forth from graves, skeletons walk out of tombs, and fresh kills become hungry ghouls and ghasts.  These new undead are driven by an insatiable hunger for destruction and seek out living creatures to kill.  These creatures are given life by the snow, and when the weather system passes they return to their previous state of actual deadness.  In the meantime, though, they can wreak havoc on a community or ecosystem.") : (t3.name = "Dead Love's Rain", t3.description = "Dead Love's Rain happens when rain clouds pass through an area of intense necromantic magic, charging them with energies that can reach into the world beyond.  Each raindrop appears to have a tiny, perfect image of a skull in it and puddles that form seem to be teeming with spectral and ghostly images.  Anyone who imbibes this water finds themselves temporarily blinded (not technically blind, they're just now looking into the spirit plane which is dark and featureless), but in exchange they can speak into the spirit world.  This allows them to attempt to speak to things there, including dead loved ones.  To successfully contact a specific entity they need to know something of the land of the dead, and it is easy to acccidentally begin speaking to powerful, potentially evil creatures that dwell there.  The effects of the water wear off after a few minutes, and any puddles infused with this energy quickly revert to normal water after the weather system is gone.") : e3.wind > 10 ? (t3.name = "Ghost Winds", t3.description = "When necromantic magic is stirred up by blowing winds, strange things start to happen.  The wild howls with a ghostly whine and the magical energies reach deep into the spirit world and pull forth all manner of horrible apparitions: ghosts and banshees and phantasms and worse come screaming through the veil between worlds, angry at having their rest disturbed and ready to seek vengeance.  Ghost Winds typically last for a few hours at a time, and any non-corporeal undead summoned by the wind will usually be laid to rest once the wind stops.") : (t3.name = "Bells of the Afterlife", t3.description = "On calm days, when necromantic magic runs wild and infuses the very air itself, the Bells of the Afterlife can be heard.  These ghostly chimes sound like they are far off in the distance and slightly off-key, but if you stand still and listen to them long enough you find yourself being lulled into a disquieted sleep.  The sleepers fall where they were standing but suffer from strange and horrible nightmares, and as long as they are asleep a ghost is pulled from the netherworld to wander the land instead.  Waking the sleeper or waiting for the magic to wear off are the best ways to dispel these ghosts back where they came from."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Friction",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Trapping Snow", t3.description = "Trapping Snow is a dangerous phenomenon which happens when friction magic mixes with a powerful snowstorm.  The snow that falls from these clouds is orangey in color and becomes nearly impossible to brush off.  Worse, anything that touches it can become stuck fast, requiring a feat of strength to pull apart.  This sticky snow accumulates differently than regular snow, making large piles and easily burying unlucky trees and buildings that might have survived a regular snowstorm.  The clouds bearing this strange snow usually turn back into regular snowstorm clouds within a few hours, and the magic which infuses the snow wears off a few hours after that.") : (t3.name = "Grease Rain", t3.description = "Grease Rain happens when negative frictional magic mixes with a powerful rainstorm, creating orange droplets that are the single greatest lubricant known.  These drops make everything they touch extremely slippery: walking on ground wet with the stuff is like walking on ice, trying to pick up or manipulate objects is even worse, and things that were supposed to be locked or tied up have a way of opening on their own.  The clouds which bear this strange rain typically last for a few hours, and the effects wear off a few hours after that.") : (t3.name = "Sticky Winds", t3.description = "When friction magic mixes with a windstorm, the result is strange.  Everything touched by these winds becomes very sticky indeed, grabbing onto anything that it in turn touches and causing it to stick fast.  This effect lasts as long as the Sticky Winds are blowing, which is typically only for a few minutes to an hour, and effectively immobilizes anything caught out in the storm.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Stick Snow", t3.description = "Stick Snow is snow charged with frictional magic.  This snow causes anything it touches to become very very sticky.  This makes surfaces coated in Stick Snow easy to climb or even hang from a roof if you throw the snow up onto an overhanging surface.  Attempts at grappling or wrestling with a Stick Snow covered target become much easier.  The clouds pass quickly, spending no more than a few minutes in an area, and the effect wears off after a few hours") : (t3.name = "Slip Rain", t3.description = "Slip Rain happens when negatively charged friction magic meets with a rain cloud.  The precipitation that results is slightly red in color, and causes any surface it comes in contact with to become instantly very slippery, like ice.  This can be fun or treacherous depending on your attitude toward the situation.  The Slip Rain remains until it evaporates away or is washed away by regular rain.") : e3.wind > 10 ? (t3.name = "Unlocking Winds", t3.description = "When a breezy day mixes with negative friction magic, everything starts to become very slippery.  It's hard to hold onto anything, as if your hands were covered in grease, and worse this effect applies to tied ropes, jars, and locks (and anything similar), often untying or opening them just from the force of the wind.") : (t3.name = "Gummy Mist", t3.description = "When frictional magic seeps into an area where there isn't a lot of wind, it becomes a strange orange-ish mist.  This mist causes things within it to greatly increase their friction, becoming very sticky.  Walking becomes a weird struggle, hair starts to do crazy things and it becomes almost impossible to slide surfaces across one another (which makes, for example, drawing swords or pulling things out of bags almost impossible).  The areas of mist typically range in size from a few dozen to a few hundred feet in size and there may be many of them in an area.  They usually evaporate away by the middle of the afternoon."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Annoyance",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Witty Snow", t3.description = "When particularly annoying magic mixes with a snowstorm, the effect is dangerous and obnoxious.  Each snowflake that falls finds itself desperately wanting to tell a (bad) joke that it just learned, being snow and never having known a joke before.  It will repeat this joke often and loudly to ensure that everyone can appreciate it.  As thousands upon thousands of snowflakes all try to tell jokes, their voices overlap and create an annoying cacophony of sound and bad taste.  This makes it difficult to concentrate and to hear people you're taking to, but can be a boon for anyone with an eye for underhanded deeds who does not want to be heard.  The clouds carrying this annoying snow tend to move quickly through the storm, and the magical effect wears off after several hours.") : (t3.name = "Cowbell Rain", t3.description = "When a powerful rainstorm mixes with annoying magic, the result is Cowbell Rain.  Each droplet that strikes the ground sounds like the ringing of a cowbell.  As thousands of droplets all make this sound, the noise can drive anyone crazy, although it does provide good cover for clandestine deeds that rely on not being heard to succeed.") : (t3.name = "Hello Hello Hello", t3.description = "This windstorm is greeting you: Hello Hello Hello hello hello hello.  Over and over.  The sound comes from all directions at random and inoportune times, and at least half the time it seems to also be saying a name.  Your name.  Although you mostly get used to it after a while, it can still be unnerving and distracting to hear someone saying hello specifically to you every few seconds.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Inquisitve Snow", t3.description = "Inquisitive Snow has an endless amount of questions: what are you doing?  why?  why does he look like that?  why don't you have a bigger pack?  why doesn't your pack have a certain kind of tie?  why would someone make a tie like that when this other one is better?  why is your nose so big?  why are your feet so weird? and so forth.  The snow constantly asks questions, sometimes not even waiting for an answer, sometimes simply repeating your name over and over.  Inquisitive Snow is not necessarily dangerous, but it can disrupt activities requiring concentration.  It usually lasts for a few hours but can be all day, too.") : (t3.name = "Off-Key Rain", t3.description = "Off-Key Rain is particularly annoying: it lands on the ground with the sound of musical notes and singing voices, but they are all clashing and out of tune with one another.  The cacophony is not necessarily dangerous but can disrupt tasks which require focus such as casting spells or doing taxes.") : e3.wind > 10 ? (t3.name = "Screaming Wind", t3.description = "Screaming Wind is wind that literally screams: AaaaaaAAAaaaaAAaaahh! ... Ah! Ah! Ah! .. AaaaAAh!  Ah! (and so on).  Usually not dangerous, the sound gets annoying very quickly, particularly because the wind usually varies the noises.  Sometimes there can be long minutes without any sound, and then there can be a half hour of straight screaming, which can also disrupt tasks that need concentration such as spellcasting or math.  Screaming Winds typically last for a few hours to an entire day.") : (t3.name = "Wildly Fluctuating Temperature", t3.description = "Wildly Fluctuating Temperature is a strange weather phenomenon that defies explanation.  First, it is just cold enough that you want to put on a coat.  Then, when you put that coat on, it becomes so hot that wearing a coat is uncomfortable.  It seems to change based on your personal discomfort levels, and if it isn't too hot or too cold it will get hotter or colder until it provokes a reaction.  This weather can be dangerous when you're ignoring it, because that will cause it to more wildly change its temperature to try and get your attention so that you put on or take off some clothing."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Shadow",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Diseased Snow", t3.description = "This black and red snow is filled with evil shadow magic and brings extra danger.  In addition to the normal dangers of a snowstorm, such as falling trees and bitter cold, anyone who eats this unnatural snow finds that it corrupts their very soul.  Evil thoughts come more easily to them, divine and holy shrines will repel them and they will find themselves much more likely to hurt others.  This effect can last for days after the snow is eaten.") : (t3.name = "Wounding Rain", t3.description = "This dark red rain comes from clouds filled with evil shadow magic, and can be quite devastating when it falls.  Wounding Rain causes wounds to anything it touches, the more of it which falls on something, the worse the wounds will be.  This includes cuts and bruises as well as broken bones and worse, and anyone who stays out in a Wounding Rain becomes increasingly likely to end up dead.") : (t3.name = "Winds of Corruption", t3.description = "When evil shadow magic mixes with a powerful windstorm, Winds of Corruption are the result.  These winds fill people's lungs with evil magic, so that when they breathe out they start speaking the words to dark and evil incantations.  This causes random evil spells to suddenly start being cast, the worst of which can be summons of Devils, Demons, and other powerful evil entities.  The more people there are in an area, the more frequent and powerful these spells become, regardless of the power of the individual people.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Wicked Snow", t3.description = "When evil, shadow magic mixes with snow, it creates a much-feared phenomenon called Wicked Snow.  When these dark grey snowflakes land on anyone with pure, positive thoughts in their mind they lash out with painful bursts of negative magic.  Only those with wicked and evil intentions in their hearts can walk safely out in Wicked Snow, and the only safety is to seek shelter.  Wicked Snow typically lasts for a few hours but has been known to fall for as long as a day.") : (t3.name = "Falling Shadows", t3.description = "When a rainy day mixes with magic from the shadow realm, Falling Shadows is the result.  This rain is not wet, rather it is dark, like shadows are actually falling from the sky.  These shadows pool with other shadows and make them larger and larger, and cause the day to get darker and darker as it goes.  Creatures with darkvision or alternate methods of seeing are usually fine, but many others find themselves in complete and utter, impenetrable darkness after a few hours.  Adding more light (ie: lighting more torches) can help, but only temporarily as more and more shadows accumulate.  This strange weather usually only lasts half a day or so, but can go longer.") : e3.wind > 10 ? (t3.name = "Corrupting Wind", t3.description = "When the air is shot through with streaks of black and red and the wind speaks of evil deeds in your ear, a Corrupting Wind is blowing.  Filled with evil shadow magic, this wind can sap the power from holy places and turn sites of evil acts into shrines to evil gods.  Worse, the weak-willed can find themselves influenced by this wind, and start thinking evil thoughts like rape, murder, and burglary would be good ideas.  Even the strong-willed can find themselves being less generous and less nice while Corrupting Winds blow.") : (t3.name = "Darklight Sun", t3.description = "When evil shadow magic permeates the air and doesn't get dispersed by winds, it can create a phenomenon where the sun itself seems to disappear, fading out until it casts no light at all.  These areas of darkness can be pierced by torches, fires and other magical lights but for the unwary it can create very dangerous traveling situations."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Righteous",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Curing Snowstorm", t3.description = "A Curing Snowstorm is a boon to those who are suffering from illness and disease.  This bright, golden snow is filled with holy magic and when eaten it will cure most disease (bacteria, viruses, parasites, and even magical disease).  The snow retains its magic for only a few hours, but people who are lucky enough to imbibe it remain cured.") : (t3.name = "Healing Storm", t3.description = "Although rainstorms can be dangerous events that bring flooding and downed trees, when they mix with holy magic they become Healing Storms.  The water from these storms can fix wounds or broken bones and repair damage to plants and buildings.  These storms are much appreciated for the relief they bring to the injured.") : (t3.name = "Winds of Purification", t3.description = "When a powerful windstorm mixes with righteous magic, the winds blow golden and strong and have the power to destroy undead abominations.  Undead creatures have the magic that binds them ripped apart by these windstorms and often simply crumble to dust during the storm.  Evil and necromantic magic also becomes very difficult to cast.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Smiting Snow", t3.description = "Evil everywhere must beware Smiting Snow.  When righteous magic mixes with blowing snow, it creates shining and golden flakes that can strike down evildoers.  Anyone with ill-intent in their hearts finds themselves suddenly bombarded by painful bursts of holy energy whenever these snowflakes land on them while they are thinking of doing evil.") : (t3.name = "Bright Rain", t3.description = "When holy magic mixes with falling rain, it creates drops of water that glow brightly and create glorious puddles of light.  This light banishes shadows and can be collected to provide illumination in dark places, and because it is infused with holy energy it can do damage to evil creatures that are harmed by sunlight.  The Bright Rain usually falls for a few hours at a time before turning back to regular rain, and any water infused with the magic becomes regular water within a few hours after that.") : e3.wind > 10 ? (t3.name = "Purifying Winds", t3.description = "When the wind sparkles with golden light, it is said to be a Purifying Wind.  Charged with holy magic, it can make holy shrines more powerful and can create divine shrines in places where acts of great goodness have happened.  It even saps the power from shrines to evil deities and can purify areas of otherwise powerful evil.  Better still, people affected by a Purifying Wind will start to have good and pure thoughts.  Those who would do evil start to think it's a bad idea, and those who might normally be selfish or casually cruel find themselves helping their neighbors and even strangers instead.") : (t3.name = "Daybright Moon", t3.description = "When righteous magic collects and does not get broken up by wind, it can create a phenomenon where the night lights up nearly as bright as day.  This light is warm and comforting and can make travel possible when it would otherwise be very dangerous."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Metallic",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Granite Snow", t3.description = "When a dangerous, blowing, and cold snowstorm mixes with earth magic it can create a dangerous condition known as Granite Snow.  When this happens, snowflakes turn into bits of gravel as they fall from the sky and land as a dangerous storm of grit and stone.  They act very much like hail, in that they can damage or destroy trees and buildings, and minorly harm living creatures, but they are much harder to clean up because they don't melt in warm weather or wash away easily.  Granite Snow usually passes through an area over a period of a day or so, and can drop several inches of gravel into a town or ecosystem.") : (t3.name = "Storm of Swords", t3.description = "When earth magic mixes with a powerful rainstorm, it can create a deadly effect known as a Storm of Swords.  The earth magic swirls and mixes high in the atmosphere, merging rain droplets together into large, sharp bars of metal that very much resemble swords.  Once they get large enough, these magically created swords hurtle toward the ground with the same force and deadliness of a real sword falling from the atmosphere.  The part of the storm charged with this magic typically moves quickly through an area, but the damage it leaves behind can be immense.") : (t3.name = "Midas Wind", t3.description = "Midas Wind is a particularly dangerous kind of windstorm which happens when earth magic mixes with a windy weather system.  The wind becomes charged with magic such that when it blows across a surface, it forms a thin layer of gold on that surface.  If the surface doesn't move, the layer grows thicker and thicker at a rate of about half an inch per hour.  Midas Winds pass through very quickly, but in their wake they leave many (dead or dying) golden plants, and even humans and animals can be encased in a lethal shell of gold if they don't get out of the wind fast enough.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Gold Snow", t3.description = "Gold Snow is widely considered to be a boon, although it can become dangerous in some situations.  When earth magic mixes with snow clouds, instead of creating regular snow they create tiny flakes of gold that fall from the sky.  These flakes are actual, real and pure gold and while they don't individually weigh very much, anyone who has the presence of mind can pick up piles of the stuff.  This can be dangerous because gold is heavy and can destroy roofs and trees, and also has the potential to ruin local economies with a sudden influx of wealth.") : (t3.name = "Silver Rain", t3.description = "Silver Rain is both dangerous and profitable.  Powerful earth magic mixes with a weather system and turns rain droplets into little pellets of actual silver.  These strike with the force of hail, or even harder, enough to injure creatures and break structures and trees, and they can clog up waterways and wells.  However, they are pure and solid silver and can be collected and sold for good coin, which can be a boon to the poor but also a curse for a region if it makes everyone too rich.") : e3.wind > 10 ? (t3.name = "Wandering Rock Winds", t3.description = "When Wandering Rock Winds blow, all manner of rocks start to migrate from their normal location.  Gravel, small rocks, even boulders start to move in the direction of the wind, rolling or wiggling along.  While most of the time this is a mere curiosity, the mass movement of heavy rock can sometimes trigger slides or other very hazardous conditions.") : (t3.name = "Growing Mountains", t3.description = "When powerful earth magic settles and there is no wind around to disperse it, it can create a phenomenon colloquially called Growing Mountains.  The earth magic forms misty patches on the ground, some small and some large, and starts to coalesce into actual dirt and rock.  Within a matter of minutes, a noticeable hill can be created and after several hours these hills can be very tall indeed.  The magic usually only lasts a day or less but can create low-lying mountain ranges where there were none before, or sometimes simply one big and tall mountain on an otherwise flat plain."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Plague",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Egg-Laden Snow", t3.description = "Sometimes, when a powerful winter storm meets a pocket of plague magic, it creates a horrific weather system called Egg-Laden Snow.  The snowflakes which fall from this system look superficially like regular snow, but they can be seen to twitch and writhe when observed up close.  When they land on a living thing (plant, animal, etc.) the eggs have a natural urge to try and burrow deep into bark and stems and flesh, causing extreme pain when they succeed.  It gets worse, however.  The eggs burrow as deep inside as they can go, and then hatch into thousands or millions of small insects which eat their way out of the host.  Although hardy creatures usually survive this process, people who have been caught out for too long in Egg-Laden Snow have been known to die from it.") : (t3.name = "Rain of Spores", t3.description = "When dangerous plague magic mixes with a rainstorm, it creates a strange weather condition called a Rain of Spores.  When raindrops land on something (ground, living creatures, plants) they instantly spawn a collection of fungi and mold.  Within minutes, an area can be entirely blanketed in thick, fuzzy carpets of mold and covered in growing mushrooms of all sorts.  Some of these fungi are poisonous, but the real danger becomes the spores that they give off once the storm has passed, filling the air with a thick miasma that can easily choke breathing creatures.  The storm passes relatively swiftly, but the mushrooms and molds are real and physical and will survive as long as they can find suitable nutrients and don't get cleared away by people or animals.") : (t3.name = "Blight Wind", t3.description = "Blight Wind is a horrifying windstorm that can be talked about for generations after it happens.  Plague magic mixes with a powerful windstorm and creates this monstrosity.  As the wind blows, any living thing caught out in it finds that it causes painful blisters, boils, and welts to rise on their exposed skin (bark or stems in the case of plants).  The longer something is caught out in a Blight Wind, the more debilitating this effect becomes.  Blight Winds mercifully pass through an area quickly, but they leave behind them scars that can last for lifetimes, and many years longer than that in people's memories.  Trees that saw a Blight Wind even a hundred years ago may still bear the scars of that wind.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Maggot Snow", t3.description = "Maggot Snow is a horrible weather phenomenon which occurs when plague magic mixes with snow clouds.  The clouds turn a sickly yellow color and start to squirm and wriggle in the air, and instead of snow falling from them, it's maggots.  These nearly senseless creatures mostly die on impact with the ground, but as the accumulation of maggots grows the top layers are mostly spared and can crawl about.  These maggots are particularly hungry and seek any kind of flesh to feast on, making them dangerous if you're caught out in a Maggot Snow system without any high ground to flee to.") : (t3.name = "Rain of Pus", t3.description = "Rain of Pus is a disgusting weather system which occurs when plague magic mixes with regular rain clouds.  These clouds turn the color of infected wounds, sickly shades of red and purple and green that are stomach-churning to look at, and a thick white liquid falls from them.  This pus is disgusting but also highly infectious, and living creatures caught out in it can find themselves contracting all sorts of nasty diseases from it, especially if it gets into a wound or touches a mucous membrane (nose, inside of mouth, etc.).  Pus clouds tend to pass quickly over an area, dropping their horrible issue and moving on after minutes or hours.  The pus itself remains until it is washed away by other rain or dries up in the sun, which means it can also infect waterways downstream from the main weather system.") : e3.wind > 10 ? (t3.name = "Foul Breeze", t3.description = "A Foul Breeze is a blustery, windy weather system filled with plague magic.  It is not as powerful as some plague-charged weather systems, but the air becomes a thick and foul yellow that smells terrible and blocks sight.  This miasma can cause breathing problems for those susceptible and makes it impossible to track anything by smell.  Being out in the Foul Winds too long can also cause headaches, nausea, and other minor ailments that are not necessarily debilitating but are certainly annoying and can be dangerous when traveling or fighting.") : (t3.name = "Toenail Sprouts", t3.description = "Toenail Sprouts at first do not seem like such a bad thing, although they are disgusting.  When plague magic hangs heavy in the air and isn't dispersed by weather, it can infect the ground and the plants.  Toenail Sprouts start in the morning as small, yellowish buds all along the outside of plants (grasses, trees, etc.).  They look awful but not harmful.  As the day goes on, they bloom into what looks very much like human-sized toenail clippings.  These toenails are thick and vary in color from weirdly yellow to disturbingly green and red.  Any exposed skin, and especially open wounds, which touches these sprouts becomes exposed to an infectious fungus that can severely slow down healing, in addition to being very itchy."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Invisibility",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Invisible Snowstorm", t3.description = "An Invisible Snowstorm is a snowstorm charged with invisibility magic.  It has all the usual effects of a snowstorm (cold, wind, lots of blowing snow) but you cannot see it: the clouds are invisible and the snow that falls is invisible.  This can make them treacherous because it looks like a beautiful, sunny day even though it is actually a raging, dangerous snowstorm.  Drifts are particularly perilous because they can be deep enough to swallow up a human but totally invisible.  The effect wears off several hours after falling, but the storm itself can last for a day or more.") : (t3.name = "Rain of Disappearance", t3.description = "Rain of Disappearance is a particularly disturbing weather phenomenon that can make a normal rainstorm quite dangerous.  These storm clouds become infused with invisibility magic, and so do the winds, so that anything they touch except the ground itself becomes invisible.  Creatures, plants, buildings, even rocks and boulders disappear as they become wet with the rain and battered by the winds.  This can cause the entire world to become a mostly featureless expanse of ground, hiding everything from sight.  This is especially dangerous as the rain and wind can still cause damage, but moving about becomes very perilous as everyone becomes essentially blind.  A Rain of Disappearance usually only lasts a few hours before fading back into a regular rainstorm, and the effects dissipate almost immediately after the enchanted clouds move on.") : (t3.name = "Invisible Debris Storm", t3.description = "When a windstorm mixes with invisibility magic, an Invisible Debris Storm occurs.  As the winds whip about and rip off tree limbs and unsecured bits of things from roofs, everything that is picked up by the storm becomes invisible (until it is no longer flying through the air).  This means that falling trees limbs, flying rocks, and the like are all invisible and therefore more dangerous than usual.  Invisible Debris Storms are also usually windier and more powerful than a regular wind storm, causing even more havoc.", e3.wind += 10) : e3.isRaining ? e3.temp < 32 ? (t3.name = "Thieves' Snow", t3.description = "Thieves' Snow falls with a slightly greyish tint and a mischievous sparkle to it, subtly but noticeably different from regular snow.  This snow is charged with invisibility magic and anyone who eats enough of it (about a cup) becomes invisible.  This invisibility remains for several minutes up to half an hour, as long as the imbiber doesn't do anything too vigorous (such as attacking with a weapon or casting a spell).  The snow retains this magic for several days or until melted or otherwise washed away.") : (t3.name = "Things-Go-Missing Rain", t3.description = "When Things-Go-Missing Rain falls, things go missing.  This rain is charged with random invisibility magic, and anything touched by it can suddenly become invisible.  Not everything touched by this rain goes invisible, and it won't affect something huge like the ground, but trees and buildings and altars and people have been known to disappear in areas where it falls.  The effect lasts for a few minutes or a few hours, seemingly as random as the things that go missing in the first place.  For large things, buildings and people and so forth, this is usually just an inconvenience but small things like keys and weapons can easily be misplaced or forgotten once they've become invisible.") : e3.wind > 10 ? (t3.name = "The Emperor's New Wind", t3.description = "The Emperor's New Wind is a weather system that can be hilarious but oftens cause strife in civilized societies.  The winds on these days are infused with invisibility magic and any protective covering they blow across becomes invisible.  This means people's armor and clothes, as well as animal's fur, and also things like doors or window shutters.  The things remain, they are simply invisible.  This causes people to look naked, animals to look shaved, and the secrets hidden inside houses to be revealed.  Each gust of wind usually only lasts a few moments, so the effect comes and goes wildly throughout the day as the wind rises and ebbs.") : (t3.name = "Holes in the World", t3.description = "Holes in the World is a weather phenomenon that is more distressing than dangerous, although it can be dangerous too.  When latent invisibility magic hangs in the air and is not dispersed by winds, it creates patches of ground that are infused with it.  Within these patches, everything but the ground itself becomes invisible: creatures, trees, buildings, stuff, grasses, everything.  This makes it seem as if there have suddenly been huge holes punched in the world with only bare ground remaining, but everything inside the patches is still there, it just can't be seen.  These patches usually start to disperse as the sun rises in the sky and don't often linger for more than a day."), e3.supernaturalEvent = t3;
    }
  }
}, {
  name: "Food",
  description: "",
  requirements: {},
  weight: 1,
  applyEffects: (e3) => {
    if (!e3.hasEvent) {
      const t3 = {};
      e3.isStorm ? e3.isRaining ? e3.temp < 32 ? (t3.name = "Cheesestorm", t3.description = "When a snowstorm mixes with powerful food magic, a Cheesestorm in the result.  As the snow falls it turns to cheese, usually grated flakes of perfectly aged Parmesan.  This cheese can clog gutters and waterways, although during snowstorms those are usually full anyway, and is entirely real so it can be collected for later snacking if you are so inclined.  A Cheesestorm usually turns back into a regular snowstorm within a few hours as the magic dissipates.  The cheese is heavier than snow, and so more likely to destroy buildings and trees, and when the weather starts to warm it can become moldy and biohazardous.") : (t3.name = "Winestorm", t3.description = "When food magic mixes with a powerful rainstorm, a Winestorm is the result.  The rain itself turns to wine as it falls, becoming bright red in color and intoxicating to drink.  This storm carries all the usual dangers of a rainstorm (flooding, breaking tree limbs, destroying roofs) but also has the tendency to cause most things caught out in it to become drunk, leading to shenanigans that would not normally happen out in a regular rainstorm.  Also unlike a regular rainstorm, people will usually go out and frolic in it, increasing the drunkenness and danger.  A Winestorm can last up to a day, and the wine it creates is entirely real and does not go away after the magic ends.") : (t3.name = "Winds of Plenty", t3.description = "Winds of Plenty are a regular windstorm infused with food magic.  They can be a blessing or a curse depending on how long they last.  As Winds of Plenty blow across stored or prepared food, that food starts to multiply.  The food will 'double' after five or so minutes, becoming a perfect copy of itself.  The longer this effect lasts, the more food that will result.  These winds only last a few minutes up to half an hour, but can be a boon to those starving, or dangerous to storage areas that are already close to full and which can burst under pressure.") : e3.isRaining ? e3.temp < 32 ? (t3.name = "Powdered Sugar Snow", t3.description = "When food magic mixes up with a system of snowy weather, Powdered Sugar Snow is the result.  From a distance it looks like snow but when you get close to it and start to feel it and taste it, it is clearly powdered sugar.  Powdered Sugar Snow is usually less heavy and dense than regular snow, but can cause other problems such as coughing or sneezing fits when the powdered sugar gets inhaled, and it makes everything unpleasantly sticky.  The weather system can pass over in hours but the powdered sugar is real and remains until it is washed away or otherwise removed.") : (t3.name = "Meatballs from Heaven", t3.description = "When food magic is infused into a rainy weather system, Meatballs from Heaven can be the result.  The raindrops themselves turn into meatballs and fall, sometimes accompanied by sauce or noodles as well.  These meatballs are cooked and safe to eat, but can cause quite a mess, can be damaging to structures (especially those with flat roofs), and can clog up waterways and gutter systems easily.  The weather system which spawns these meatballs usually passes in a few hours, but the meat remains until it is cleared away naturally.") : e3.wind > 10 ? (t3.name = "Something Smells Good", t3.description = "When patches of latent food magic mix with a windy weather system, the breezes themselves start to take on the scent of delicious home cooking.  Something Smells Good is literally that: the wind smells tasty and delicious, but the source of the scent can never be found.  For some this is a pleasant effect, but for others it can be distracting or drive them to madness.") : (t3.name = "Blooming Bread", t3.description = "When food magic lingers in the air and isn't cleared away by winds, Blooming Bread is the result.  Starting in the morning, loaves of bread and muffins and other baked goods start to rise up from the ground, like blooming flowers.  These baked goods grow larger and more delicious looking as the day goes on, until they reach their 'correct' size in the early afternoon.  The food is entirely real and safe to eat (although you should probably cut off the outside, since it often grows out of dirt).  The bloom typically only lasts for a few hours, but the bread it creates is real and must be dealt with like normal baked goods covering the ground."), e3.supernaturalEvent = t3;
    }
  }
}];
var GenerateWeather = class {
  constructor(days, t3 = [], climate, wetness, supernaturalFrequency, s, weatherSystems = []) {
    this.days = days;
    this.t = t3;
    this.climate = climate;
    this.wetness = wetness;
    this.supernaturalFrequency = supernaturalFrequency;
    this.s = s;
    this.weatherSystems = weatherSystems;
    let tempVariation = Math.sin(0.24 * Math.PI);
    let wetnessVariation = Math.sin(0.24 * Math.PI);
    const firstWeatherSystem = new WeatherSystem(this.climate, this.wetness, tempVariation, wetnessVariation);
    for (let dayIndex = 0; dayIndex < this.days; ) {
      tempVariation = Math.sin(-1 * (dayIndex / this.days + 0.12) * 2 * Math.PI);
      wetnessVariation = Math.sin(2 * (dayIndex / this.days + 0.12) * Math.PI);
      let ws;
      do {
        ws = new WeatherSystem(this.climate, this.wetness, tempVariation, wetnessVariation);
      } while (dayIndex + ws.duration > this.days);
      dayIndex += ws.duration;
      this.weatherSystems.push(ws);
      if (weatherSystems.length > 1) {
        ws.SetPreviousSystem(weatherSystems[weatherSystems.length - 2]);
        this.weatherSystems[weatherSystems.length - 2].SetNextSystem(ws);
        this.weatherSystems[weatherSystems.length - 2].GenerateDays();
      } else {
        ws.SetPreviousSystem(firstWeatherSystem);
      }
    }
    this.weatherSystems[weatherSystems.length - 1].GenerateDays();
  }
  Render() {
  }
  GetDayStrings() {
  }
  GetDayData() {
  }
};

// build/dist/models/calendar.model.js
var month = ["Åldervinter", "Ungvår", "Åldervår", "Ungsommar", "Åldersommar", "Unghöst", "Ålderhöst", "Ungvinter"];
var numberOfMonths = () => 8;
var dayNames = ["Soldag", "Måndag", "Bloddag", "Jorddag", "Växtdag", "Skördedag", "Stilledag"];
var getMonthName = (monthNumber) => month[monthNumber % 8];
var getDayName = (dayNumber) => dayNames[dayNumber % 7];
var getDayNumber = (dayName) => {
  switch (dayName) {
    case "Stilledag":
      return 7;
    case "Skördedag":
      return 6;
    case "Växtdag":
      return 5;
    case "Jorddag":
      return 4;
    case "Bloddag":
      return 3;
    case "Måndag":
      return 2;
    case "Soldag":
    default:
      return 1;
  }
};
var getMoonPhase = (day) => {
  switch (true) {
    case day % 30 === 0:
      return "full";
    case day % 15 === 0:
      return "new";
    default:
      return void 0;
  }
};
var dayInMonth = (m3) => {
  switch (m3) {
    case "Åldervinter":
    case "Åldervår":
    case "Ungsommar":
    case "Åldersommar":
    case "Ålderhöst":
      return 46;
    default:
      return 45;
  }
};
var getCal = (startYear = 1165) => {
  const dayOffset = startYear % 1165 % 7;
  const weather = new GenerateWeather(365, [], 48, 50, 6, "");
  const weatherDays = weather.weatherSystems.reduce((acc, cur) => {
    acc.push(cur.days);
    return acc;
  }, []).flat();
  const cal = range(numberOfMonths()).reduce((cal2, m3) => {
    const monthName = getMonthName(m3);
    cal2.cal.months[m3] = {
      name: monthName,
      days: range(dayInMonth(monthName)).map((d3) => {
        const {
          temp,
          lowTemp,
          downpour,
          stormType,
          eventType,
          isCloudy,
          isPartlyCloudy
        } = weatherDays[cal2.daysPassed + d3];
        return {
          number: d3 + 1,
          name: getDayName(cal2.daysPassed + d3),
          monthName,
          quarters: [false, false, false, false],
          moon: getMoonPhase(cal2.daysPassed + d3 + 1 + 9),
          temp,
          lowTemp,
          downpour,
          stormType,
          eventType,
          isCloudy,
          isPartlyCloudy
        };
      })
    };
    cal2.daysPassed += dayInMonth(monthName);
    return cal2;
  }, {
    daysPassed: dayOffset,
    cal: {
      year: startYear,
      months: {}
    }
  });
  return cal.cal;
};

// build/dist/components/calendar-day.js
var CalendarDay = ({
  day,
  quarterClicked,
  showWeather = true
}) => {
  return jsx("div", {
    css: {
      padding: "0.5rem",
      borderWidth: "1px",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, jsx("div", {
    css: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      width: "1.25rem"
    }
  }, jsx("div", {
    css: {
      "@media (min-width: 1024px)": {
        display: "none"
      }
    }
  }, getDayName(day.number)), jsx("div", {
    css: [{
      display: "flex",
      gap: "0.25rem"
    }, day.number === 1 ? {
      fontWeight: "700"
    } : {}]
  }, day.number, jsx("div", null, getMoonEmoji(day.moon)), jsx("div", null, getWeatherIcon(day))))), jsx("div", {
    css: {
      width: "100%"
    }
  }, jsx(day_counter_default, {
    quarters: day.quarters,
    spendQuarter: () => quarterClicked(day)
  })), showWeather && jsx("div", {
    css: {}
  }, jsx("div", null, "Högt: ", getTempString(day.temp)), jsx("div", null, "Lågt: ", getTempString(day.lowTemp)), jsx("div", null, day.downpour), jsx("div", null, day.stormType), jsx("div", null, day.stormType), jsx("div", null, day.eventType?.name)));
};
var calendar_day_default = CalendarDay;

// build/dist/components/calendar-day-names.js
var CalendarDayNames = () => {
  return jsx(react.Fragment, null, range(7).map((i2) => jsx("div", {
    css: {
      display: "none",
      textTransform: "uppercase",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "2px",
      "--tw-border-opacity": "1",
      borderBottomColor: "rgba(0, 0, 0, var(--tw-border-opacity))",
      padding: "0.5rem",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      "@media (min-width: 1024px)": {
        display: "flex"
      }
    },
    key: getDayName(i2)
  }, getDayName(i2))));
};
var calendar_day_names_default = CalendarDayNames;

// build/dist/components/calendar-filler-day.js
var CalendarFillerDays = ({
  day
}) => {
  return jsx(react.Fragment, null, range(getDayNumber(day.name) - 1).map((i2) => jsx("div", {
    css: {
      borderWidth: "1px",
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    key: `${day.monthName}-empty-day-${getDayName(i2)}`
  })));
};
var calendar_filler_day_default = CalendarFillerDays;

// build/dist/components/page-header.js
var PageHeader = ({
  children
}) => {
  return jsx("h1", {
    css: {
      textAlign: "center",
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
      "@media (min-width: 1024px)": {
        fontSize: "3.75rem",
        lineHeight: "1"
      }
    },
    className: "yx-heading"
  }, children);
};
var page_header_default = PageHeader;

// build/dist/logo.js
var YxansKlaganLogo = () => jsx(YxansKlaganSvg, null);
var logo_default = YxansKlaganLogo;
var YxansKlaganSvg = () => jsx("div", {
  css: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "8rem"
  }
}, jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 264.74 93.88"
}, jsx("defs", null, jsx("linearGradient", {
  id: "New_Gradient_Swatch_1",
  x1: "21.55",
  y1: "1",
  x2: "21.55",
  y2: "59.25",
  gradientUnits: "userSpaceOnUse"
}, jsx("stop", {
  offset: "0",
  stopColor: "#7f3644"
}), jsx("stop", {
  offset: "1",
  stopColor: "#b8595a"
})), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-2",
  x1: "21.55",
  y1: "60.25",
  x2: "21.55",
  y2: "0",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-3",
  x1: "55.53",
  y1: "8.71",
  x2: "55.53",
  y2: "44.74",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-4",
  x1: "55.53",
  y1: "45.74",
  x2: "55.53",
  y2: "7.71",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-5",
  x1: "90.4",
  y1: "9.45",
  x2: "90.4",
  y2: "41.99",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-6",
  x1: "90.4",
  y1: "42.99",
  x2: "90.4",
  y2: "8.45",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-7",
  x1: "127.73",
  y1: "8.71",
  x2: "127.73",
  y2: "44.74",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-8",
  x1: "127.73",
  y1: "45.74",
  x2: "127.73",
  y2: "7.71",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-9",
  x1: "161.66",
  y1: "8.71",
  x2: "161.66",
  y2: "41.94",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-10",
  x1: "161.66",
  y1: "42.94",
  x2: "161.66",
  y2: "7.71",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-11",
  x1: "59.63",
  y1: "49.05",
  x2: "59.63",
  y2: "89.99",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-12",
  x1: "59.63",
  y1: "90.99",
  x2: "59.63",
  y2: "48.05",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-13",
  x1: "100.13",
  y1: "58.16",
  x2: "100.13",
  y2: "91.22",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-14",
  x1: "100.13",
  y1: "92.22",
  x2: "100.13",
  y2: "57.16",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-15",
  x1: "135.68",
  y1: "57.59",
  x2: "135.68",
  y2: "90.13",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-16",
  x1: "135.68",
  y1: "91.13",
  x2: "135.68",
  y2: "56.59",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-17",
  x1: "172.53",
  y1: "56.5",
  x2: "172.53",
  y2: "89.99",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-18",
  x1: "172.53",
  y1: "90.99",
  x2: "172.53",
  y2: "55.5",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-19",
  x1: "209.9",
  y1: "57.59",
  x2: "209.9",
  y2: "90.13",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-20",
  x1: "209.9",
  y1: "91.13",
  x2: "209.9",
  y2: "56.59",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-21",
  x1: "248.15",
  y1: "56.85",
  x2: "248.15",
  y2: "92.88",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("linearGradient", {
  id: "New_Gradient_Swatch_1-22",
  x1: "248.15",
  y1: "93.88",
  x2: "248.15",
  y2: "55.85",
  xlinkHref: "#New_Gradient_Swatch_1"
}), jsx("style", null)), jsx("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, jsx("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, jsx("path", {
  d: "M26.39 21.36v32.43l.32 2a3 3 0 01.16.44 3.93 3.93 0 00.39.76l1.09.38 1.31.06-.11 1.85H12v-1.8l1.42-.05 1.06-.43.5-1.2.27-2-.06-30.57L5.75 8.75l-.63-.9a4.34 4.34 0 00-.46-.57c-.15-.18-.3-.38-.47-.6A5.46 5.46 0 003.56 6l-1.3-.8L1 4.77l1.31-.93L3.89 3l3.93-1.24 4.37-.71L16 1l-.65 1-.22 1.2.38 1.31.6 1L24.86 18l2.4-3.6 1.58-3.49.66-2.81V6.57l-.06-.88a5.53 5.53 0 00-1-1.36l2.35-.93 2.45-.87L35.56 2l2.73-.49 3.82-.28z",
  fill: "url(#New_Gradient_Swatch_1)"
}), jsx("path", {
  d: "M16 1l-.65 1-.22 1.2.38 1.31.6 1L24.86 18l2.4-3.6 1.58-3.49.66-2.81V6.57l-.06-.88a5.53 5.53 0 00-1-1.36l2.35-.93 2.45-.87L35.56 2l2.73-.49 3.82-.28-15.72 20.13v32.43l.32 2a3 3 0 01.16.44 3.93 3.93 0 00.39.76l1.09.38 1.31.06-.11 1.85H12v-1.8l1.42-.05 1.06-.43.5-1.2.27-2-.06-30.57L5.75 8.75l-.63-.9a4.34 4.34 0 00-.46-.57c-.15-.18-.3-.38-.47-.6A5.46 5.46 0 003.56 6l-1.3-.8L1 4.77l1.31-.93L3.89 3l3.93-1.24 4.37-.71L16 1m0-1l-3.82.05-.18.02-4.34.71h-.14L3.59 2.07a.76.76 0 00-.16.06L1.85 3h-.12L.42 4a1 1 0 00-.41 1 1 1 0 00.66.8l1.17.41L3 6.76a4.52 4.52 0 01.44.52c.18.23.33.44.49.62A.27.27 0 004 8a5.2 5.2 0 01.35.44l.46.65.17.25 9.22 14.12.05 30.21L14 55.5l-.28.69-.54.21-1.25.05a1 1 0 00-1 1v1.8a1 1 0 001 1h17.62a1 1 0 001-.94l.11-1.86a1 1 0 00-.26-.73 1 1 0 00-.7-.32h-1.16l-.6-.21a2.31 2.31 0 01-.12-.27c-.06-.18-.1-.31-.14-.4l-.29-1.76v-32L42.9 1.89a1 1 0 00-.79-1.62H42l-3.78.28h-.11l-2.73.49-2.33.5h-.12l-2.46.87-2.38.94a1 1 0 00-.61.73 1 1 0 00.27.91 4.28 4.28 0 01.71.94V8l-.61 2.63-1.51 3.33-1.54 2.32L17 5l-.52-.89-.28-1 .14-.77.51-.76A1 1 0 0017 1a1 1 0 00-1-1zm0 2z",
  fill: "url(#New_Gradient_Swatch_1-2)"
}), jsx("path", {
  className: "cls-3",
  d: "M16 1l-.65 1-.22 1.2.38 1.31.6 1L24.86 18l2.4-3.6 1.58-3.49.66-2.81V6.57l-.06-.88a5.53 5.53 0 00-1-1.36l2.35-.93 2.45-.87L35.56 2l2.73-.49 3.82-.28-15.72 20.13v32.43l.32 2a3 3 0 01.16.44 3.93 3.93 0 00.39.76l1.09.38 1.31.06-.11 1.85H12v-1.8l1.42-.05 1.06-.43.5-1.2.27-2-.06-30.57L5.75 8.75l-.63-.9a4.34 4.34 0 00-.46-.57c-.15-.18-.3-.38-.47-.6A5.46 5.46 0 003.56 6l-1.3-.8L1 4.77l1.31-.93L3.89 3l3.93-1.24 4.37-.71L16 1m0-.75L12.18.3h-.11L7.7 1h-.1L3.66 2.3l-.11.05L2 3.17l-.09.06-1.34.93a.74.74 0 00-.31.71.77.77 0 00.49.61l1.19.41 1.16.68a4.54 4.54 0 01.49.56c.18.22.33.43.48.62l.06.06a3.62 3.62 0 01.38.47l.49.65.17.25 9.32 14.21.05 30.3-.25 1.87-.34.82-.68.27-1.29.05a.76.76 0 00-.72.75v1.8A.75.75 0 0012 60h17.55a.75.75 0 00.75-.7l.11-1.86a.79.79 0 00-.19-.55.73.73 0 00-.53-.24h-1.2l-.73-.26a2.2 2.2 0 01-.18-.39c-.06-.2-.11-.32-.14-.41l-.3-1.81V21.62L42.7 1.74a.76.76 0 00-.59-1.22L38.23.8h-.07l-2.74.49-2.31.49h-.1l-2.45.87-2.38.94a.76.76 0 00-.45.55.74.74 0 00.2.68 5 5 0 01.77 1l.05.7V8l-.62 2.68-1.53 3.39-1.76 2.63-8.08-11.57-.54-.93-.31-1.06.16-.87.54-.82a.7.7 0 00.15-.45.75.75 0 00-.76-.75zm0 1.5z"
}), jsx("path", {
  d: "M59.48 35.39l-5-6-2.8 3.18-1.87 2.63-1.1 2-.35 1.66.35 1a2.64 2.64 0 00.83.53l1.27.17L50.7 42H38.47v-1.45a10.25 10.25 0 001.44-.22l.79-.33 1-.57 1-.87 1.3-1.2 3.62-4.06 5.2-6.64-9.15-10.61-1.36-1.23a2.87 2.87 0 00-.67-.35l-1.12-.39 1.53-1.31 1.66-1.09 2.19-.83 2.31-.74 4.11-.66a7.51 7.51 0 00-.4 1.75 5.22 5.22 0 00.7 1.92l5.16 6.81 1.79-3.18 1.22-2.67.53-2-.14-1.58-1.09-1.05L67 8.93l5.59-.22L59.66 22.6 66 31.07l3.49 3a11.79 11.79 0 002.19.92l-2.8 2.92-1.35 1.84-1.15 1.74L65.6 43l-.6 1.74a15.65 15.65 0 00-.75-2.1l-.92-1.35z",
  fill: "url(#New_Gradient_Swatch_1-3)"
}), jsx("path", {
  d: "M72.58 8.71L59.66 22.6 66 31.07l3.49 3a11.79 11.79 0 002.19.92l-2.8 2.92-1.35 1.84-1.15 1.74L65.6 43l-.6 1.74a15.65 15.65 0 00-.75-2.1l-.92-1.35-3.88-5.9-5-6-2.8 3.18-1.87 2.63-1.1 2-.35 1.66.35 1a2.64 2.64 0 00.83.53l1.27.17L50.7 42H38.47v-1.45a10.25 10.25 0 001.44-.22l.79-.33 1-.57 1-.87 1.3-1.2 3.62-4.06 5.2-6.64-9.15-10.61-1.36-1.23a2.87 2.87 0 00-.67-.35l-1.12-.39 1.53-1.31 1.66-1.09 2.19-.83 2.31-.74 4.11-.66a7.51 7.51 0 00-.4 1.75 5.22 5.22 0 00.7 1.92l5.16 6.81 1.79-3.18 1.22-2.67.53-2-.14-1.58-1.09-1.05L67 8.93l5.59-.22M72.58 7.71L67 7.93l-7 .52a1 1 0 00-.86.66 1 1 0 00.23 1.05l.84.83.08 1-.45 1.71-1.18 2.55-1 1.82-4.18-5.52a4.93 4.93 0 01-.55-1.39 6.31 6.31 0 01.33-1.39.86.86 0 00.07-.36 1 1 0 00-1-1h-.14l-4.09.65h-.14l-2.32.75h-.05l-2.18.83-.2.1-1.66 1.1-.09.07-1.54 1.31a1 1 0 00-.33.95 1 1 0 00.67.76l1.08.38a1.88 1.88 0 01.38.18L43 16.75l8.6 9.94-4.68 6-3.56 4-1.36 1.1-.92.8-.87.49-.64.29a7.83 7.83 0 01-1.14.18 1 1 0 00-1 1V42a1 1 0 001 1H50.7a1 1 0 001-.94l.09-1.49a1 1 0 00-.87-1.05l-1.11-.15a1.47 1.47 0 01-.27-.16l-.16-.43.26-1.24 1-1.82 1.82-2.53 2-2.27L58.67 36l3.86 5.85.91 1.34c0 .09.19.47.64 1.86a1 1 0 001 .7 1 1 0 001-.7l.55-1.71.58-1.34 1.1-1.67 1.3-1.76 2.75-2.88a1 1 0 00.25-.93A1 1 0 0072 34a11 11 0 01-1.91-.77l-3.37-2.86-5.72-7.7L73.29 9.42a1 1 0 00-.7-1.71zm0 2z",
  fill: "url(#New_Gradient_Swatch_1-4)"
}), jsx("path", {
  className: "cls-3",
  d: "M72.58 8.71L59.66 22.6 66 31.07l3.49 3a11.79 11.79 0 002.19.92l-2.8 2.92-1.35 1.84-1.15 1.74L65.6 43l-.6 1.74a15.65 15.65 0 00-.75-2.1l-.92-1.35-3.88-5.9-5-6-2.8 3.18-1.87 2.63-1.1 2-.35 1.66.35 1a2.64 2.64 0 00.83.53l1.27.17L50.7 42H38.47v-1.45a10.25 10.25 0 001.44-.22l.79-.33 1-.57 1-.87 1.3-1.2 3.62-4.06 5.2-6.64-9.15-10.61-1.36-1.23a2.87 2.87 0 00-.67-.35l-1.12-.39 1.53-1.31 1.66-1.09 2.19-.83 2.31-.74 4.11-.66a7.51 7.51 0 00-.4 1.75 5.22 5.22 0 00.7 1.92l5.16 6.81 1.79-3.18 1.22-2.67.53-2-.14-1.58-1.09-1.05L67 8.93l5.59-.22M72.58 8L67 8.18l-7 .52a.76.76 0 00-.64.49.72.72 0 00.17.79l.9.9.1 1.17-.48 1.78-1.15 2.57-1.22 2.17-4.42-5.85a4.29 4.29 0 01-.59-1.52A6.39 6.39 0 0153 9.73a.87.87 0 000-.28.75.75 0 00-.75-.75h-.14l-4.09.66h-.11l-2.31.74-2.16.9-.14.07-1.66 1.1h-.07L40 13.51a.75.75 0 00-.25.71.73.73 0 00.5.57c.42.14.79.27 1.08.39a1.61 1.61 0 01.47.23l1.29 1.16 8.74 10.11-4.82 6.15-3.56 4L42.21 38l-.94.82-.91.51-.68.3a8.57 8.57 0 01-1.21.19.75.75 0 00-.75.75V42a.76.76 0 00.75.75H50.7a.75.75 0 00.75-.71l.09-1.48a.75.75 0 00-.65-.79l-1.15-.16a1.69 1.69 0 01-.41-.24l-.21-.57.28-1.34 1-1.88L52.25 33l2.19-2.5 4.43 5.32 3.87 5.86.91 1.35a17 17 0 01.67 1.97.73.73 0 00.71.52.73.73 0 00.71-.52l.56-1.74.7-1.39 1.11-1.71 1.3-1.76 2.77-2.89a.75.75 0 00-.3-1.23 10.5 10.5 0 01-2-.81l-3.4-2.89-5.88-7.9L73.11 9.25a.76.76 0 00.22-.54.74.74 0 00-.74-.71zm0 1.5z"
}), jsx("path", {
  d: "M93.29 42v-1.45a5.42 5.42 0 00.89-.07l1-.15.61-.31.52-.52v-.66a3.28 3.28 0 00-.21-1.26l-2.62-7.43-13 5.55-.7 1.92-.48 1.14-.09.74a2.75 2.75 0 001 .83l1.7.17L82 42h-9.42v-1.45l1.36-.22 1.31-.44.91-.74.84-.83 10.17-23.58-.18-1-.39-.7-1.7-.22.87-.83 1.23-.75 3.06-1.18 3.45-.61h3.15a6.45 6.45 0 00-.61.66 2.41 2.41 0 00-.35.5 1.16 1.16 0 00-.15.52 7.1 7.1 0 000 .72v.57L105 38.36l1.45 1.4 1.74.79V42zm-4.85-25l-4.72 10.92 7.51-3.27z",
  fill: "url(#New_Gradient_Swatch_1-5)"
}), jsx("path", {
  d: "M96.65 9.45a6.45 6.45 0 00-.61.66 2.41 2.41 0 00-.35.5 1.16 1.16 0 00-.15.52 7.1 7.1 0 000 .72v.57L105 38.36l1.45 1.4 1.74.79V42h-14.9v-1.45a5.42 5.42 0 00.89-.07l1-.15.61-.31.52-.52v-.66a3.28 3.28 0 00-.21-1.26l-2.62-7.43-13 5.55-.7 1.92-.48 1.14-.09.74a2.75 2.75 0 001 .83l1.7.17L82 42h-9.42v-1.45l1.36-.22 1.31-.44.91-.74.84-.83 10.17-23.58-.18-1-.39-.7-1.7-.22.87-.83 1.23-.75 3.06-1.18 3.45-.61h3.15M83.72 27.92l7.51-3.27L88.44 17l-4.72 10.92M96.65 8.45h-3.32l-3.45.61-.18.05-3.06 1.18a.66.66 0 00-.19.09l-1.22.79-.15.11-.87.83a1 1 0 00-.26 1 1 1 0 00.82.68L86 14l.06.12.09.5-10 23.13-.65.65-.74.6-1.06.35-1.28.21a1 1 0 00-.84 1V42a1 1 0 001 1H82a1 1 0 001-1v-1.49a1 1 0 00-.9-1l-1.5-.16a1.42 1.42 0 01-.3-.2V39l.43-1 .55-1.51 11.59-5 2.26 6.42a2.29 2.29 0 01.17.85v.3l-.14.14-.33.16-.86.13a4.93 4.93 0 01-.75.06 1 1 0 00-1 1V42a1 1 0 001 1h14.93a1 1 0 001-1v-1.45a1 1 0 00-.59-.91l-1.58-.72-1.16-1.12-9.31-25.56v-.39-.64a1 1 0 010-.12 2.63 2.63 0 01.25-.35c.13-.15.32-.35.54-.58a1 1 0 00.22-1.09 1 1 0 00-.92-.62zm0 2zM85.64 26l2.72-6.29 1.64 4.4L85.64 26z",
  fill: "url(#New_Gradient_Swatch_1-6)"
}), jsx("path", {
  className: "cls-3",
  d: "M96.65 9.45a6.45 6.45 0 00-.61.66 2.41 2.41 0 00-.35.5 1.16 1.16 0 00-.15.52 7.1 7.1 0 000 .72v.57L105 38.36l1.45 1.4 1.74.79V42h-14.9v-1.45a5.42 5.42 0 00.89-.07l1-.15.61-.31.52-.52v-.66a3.28 3.28 0 00-.21-1.26l-2.62-7.43-13 5.55-.7 1.92-.48 1.14-.09.74a2.75 2.75 0 001 .83l1.7.17L82 42h-9.42v-1.45l1.36-.22 1.31-.44.91-.74.84-.83 10.17-23.58-.18-1-.39-.7-1.7-.22.87-.83 1.23-.75 3.06-1.18 3.45-.61h3.15M83.72 27.92l7.51-3.27L88.44 17l-4.72 10.92M96.65 8.7h-3.28l-3.45.61h-.13l-3.07 1.18-.13.07-1.22.79a.47.47 0 00-.12.09l-.87.83a.75.75 0 00.43 1.28l1.32.17.15.26.11.62-10 23.24-.7.7-.78.63-1.12.38-1.3.21a.75.75 0 00-.63.74V42a.76.76 0 00.75.75H82a.75.75 0 00.75-.73v-1.49a.74.74 0 00-.67-.76l-1.56-.16a2.46 2.46 0 01-.49-.34v-.31l.44-1 .6-1.65 11.94-5.1 2.35 6.67a2.52 2.52 0 01.18 1v.39l-.24.24-.39.2-.91.13a5.22 5.22 0 01-.78.06.74.74 0 00-.75.75V42a.75.75 0 00.75.75h14.93A.76.76 0 00109 42v-1.45a.76.76 0 00-.44-.69l-1.63-.73-1.22-1.19-9.45-25.65v-.44-.66a.79.79 0 01.06-.22 4.72 4.72 0 01.27-.39c.14-.16.33-.37.57-.6a.74.74 0 00.16-.81.75.75 0 00-.69-.47zm0 1.5zM85.16 26.48L88.38 19l1.9 5.21-5.12 2.24z"
}), jsx("path", {
  d: "M140.44 37.88l-1.36 1.84-1.14 1.74-.74 1.54-.57 1.79a15.65 15.65 0 00-.75-2.1l-.88-1.4-17.1-24 .26 13.41.35 5.33.26 1.61.23 1.16.39.87.44.49.48.21.7.13h.65v1.49h-9.43v-1.44h.87l.7-.22.61-.61.52-1.13.44-2.27.31-3 .13-4.19.09-5.46V16.6a6.77 6.77 0 00-1.62-1.62 14.73 14.73 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.91 1.27-.79 3.16-1 3.29-.35.26 2c.06.17.16.42.31.74s.33.73.57 1.22l13.9 18.39-.05-9.13-.17-2.75-.13-2.62-.26-2-.35-1.36-.39-.92-.53-.56-.44-.22-.65-.13-.74-.05-.09-1.61h9.56v1.66h-1l-.83.3-.61.83-.44 1.47-.4 2.57-.27 3.76-.17 5.24v6.94l1.49 1.49a11.79 11.79 0 002.19.92z",
  fill: "url(#New_Gradient_Swatch_1-7)"
}), jsx("path", {
  d: "M122.52 8.71l.26 2c.06.17.16.42.31.74s.33.73.57 1.22l13.9 18.39-.05-9.13-.17-2.75-.13-2.62-.26-2-.35-1.36-.39-.92-.53-.56-.44-.22-.65-.13-.74-.05-.09-1.61h9.56v1.66h-1l-.83.3-.61.83-.48 1.5-.4 2.57-.27 3.76-.17 5.24v6.94l1.49 1.49a11.79 11.79 0 002.19.92l-2.8 2.92-1.36 1.84-1.14 1.74-.74 1.58-.57 1.79a15.65 15.65 0 00-.75-2.1l-.88-1.4-17.1-24 .26 13.41.35 5.33.26 1.61.23 1.16.39.87.44.49.48.21.7.13h.65v1.49h-9.43v-1.44h.87l.7-.22.61-.61.52-1.13.44-2.27.31-3 .13-4.19.09-5.46V16.6a6.77 6.77 0 00-1.62-1.62 14.73 14.73 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.91 1.27-.79 3.16-1 3.29-.35M122.51 7.71h-.11l-3.29.35h-.18l-3.16 1a1.28 1.28 0 00-.24.11l-1.26.79a.09.09 0 00-.06 0l-1.27.91a1 1 0 00-.25.26l-.78 1.18-.06.09-.61 1.18a1 1 0 00.58 1.41 13.7 13.7 0 012 .74 5.35 5.35 0 011.13 1.1v6.73l-.14 5.44-.13 4.15-.3 2.93-.38 2.15-.39.86-.31.31-.35.11h-.75a1 1 0 00-.94 1V42a1 1 0 001 1h9.43a1 1 0 001-1v-1.42a.31.31 0 000-.1 1 1 0 00-1-1h-.57l-.49-.09-.18-.08-.19-.21-.29-.65-.28-1-.24-1.53-.35-5.28-.2-10.12 15.23 21.38.89 1.31c0 .09.19.47.64 1.86a1 1 0 00.95.7 1 1 0 001-.7l.55-1.71.68-1.37 1.1-1.67 1.3-1.76 2.76-2.91a1 1 0 00.25-.93 1 1 0 00-.64-.71 11.83 11.83 0 01-1.88-.75l-1.12-1.15v-6.54l.17-5.21.26-3.68.37-2.4.45-1.25.34-.47.38-.14h.78a1 1 0 001-1V9.76a1 1 0 00-1-1h-9.56a1 1 0 00-.73.31 1 1 0 00-.27.74l.09 1.62a1 1 0 00.94.94h.67l.46.09.15.08.28.31.3.68.31 1.27.25 1.86.13 2.58.17 2.74v6.09l-12-15.91-.1-.2c-.17-.36-.31-.66-.42-.91s-.19-.43-.24-.56l-.25-1.91a1 1 0 00-1-.87z",
  fill: "url(#New_Gradient_Swatch_1-8)"
}), jsx("path", {
  className: "cls-3",
  d: "M122.52 8.71l.26 2c.06.17.16.42.31.74s.33.73.57 1.22l13.9 18.39-.05-9.13-.17-2.75-.13-2.62-.26-2-.35-1.36-.39-.92-.53-.56-.44-.22-.65-.13-.74-.05-.09-1.61h9.56v1.66h-1l-.83.3-.61.83-.48 1.5-.4 2.57-.27 3.76-.17 5.24v6.94l1.49 1.49a11.79 11.79 0 002.19.92l-2.8 2.92-1.36 1.84-1.14 1.74-.74 1.58-.57 1.79a15.65 15.65 0 00-.75-2.1l-.88-1.4-17.1-24 .26 13.41.35 5.33.26 1.61.23 1.16.39.87.44.49.48.21.7.13h.65v1.49h-9.43v-1.44h.87l.7-.22.61-.61.52-1.13.44-2.27.31-3 .13-4.19.09-5.46V16.6a6.77 6.77 0 00-1.62-1.62 14.73 14.73 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.91 1.27-.79 3.16-1 3.29-.35M122.52 8h-.08l-3.29.35h-.14l-3.16 1-.17.08-1.27.79-1.26.92a.58.58 0 00-.19.19l-.78 1.18a.16.16 0 000 .07l-.62 1.18a.73.73 0 000 .63.71.71 0 00.46.42 13.27 13.27 0 012 .76 5.5 5.5 0 011.26 1.24v6.81l-.09 5.45-.13 4.15-.3 3-.42 2.15-.42.93-.39.38-.43.14h-.78a.75.75 0 00-.71.75V42a.75.75 0 00.75.75h9.43a.74.74 0 00.75-.73V40.6a.28.28 0 000-.09.76.76 0 00-.75-.75h-.59l-.54-.1-.26-.11-.25-.28-.32-.71-.28-1.08-.25-1.55-.35-5.29-.21-10.95 15.69 22 .9 1.32a16.22 16.22 0 01.66 1.92.75.75 0 00.72.52.74.74 0 00.71-.52l.55-1.74.7-1.39 1.12-1.71 1.3-1.76 2.77-2.89a.81.81 0 00.19-.7.75.75 0 00-.49-.53 11 11 0 01-1.94-.79l-1.22-1.25v-6.6l.17-5.22.26-3.7.38-2.43.46-1.31.41-.56.5-.18h.82a.75.75 0 00.75-.75V9.76a.74.74 0 00-.75-.75h-9.56a.75.75 0 00-.55.23.76.76 0 00-.2.56l.09 1.61a.75.75 0 00.7.71h.69l.51.1.22.12.35.37.31.74.33 1.26.25 1.89.13 2.59.18 2.76v6.83L124.3 12.29l-.11-.23c-.16-.35-.31-.66-.42-.91a5.73 5.73 0 01-.25-.6l-.26-1.94a.74.74 0 00-.74-.65z"
}), jsx("path", {
  d: "M176.82 32.51l-.35 1.49-.88 1.88-.91 1.44-1.23 1.22-1.31 1.09-1.39.7-2.75 1.18-2 .3a18.84 18.84 0 01-2.62.13h-.53a18.35 18.35 0 01-2.79-.13l-2.8-.48-4-.87-1.57-.18h-1.66L148 41l-1.66.91v-2.15c0-.14.06-.31.09-.48s.06-.38.09-.61c.14-.41.26-.76.35-1.05a4 4 0 01.22-.65l.78-1.75 1.13-1.57 1.27-1.49 1.48-1.16 1.7-1.13a12.32 12.32 0 00.09 1.92l.46 1.81.66 1.36 1.09 1.74 1.36 1.23 1.57 1 1.53.48 2.53.43.92-.23 1.39-.38 1.71-.78 1-1.09.88-1.31.26-1.23.09-1.05v-.91c-.12-.41-.22-.73-.29-1a4.76 4.76 0 00-.19-.53l-.88-1.61-1.18-1.09-1.31-1.05-1.92-.66-2.05-.35-2.53-.39c-.39-.06-.86-.16-1.45-.31s-1.28-.33-2.09-.56l-2.41-1.14-1.6-1.17-1.31-1.53-.74-1.4-.26-1.31-.09-1.17v-1c.06-.35.12-.64.17-.88a2.76 2.76 0 01.18-.52l.7-1.62.91-1.18L152 11l1.31-.83 1.65-.74 3.89-.74h4l3.8.7 1.65.61 1.58.65 1.48.57 1.36.13 1.22-.26 1.14-.44 1.57-1a6.52 6.52 0 01-.22 2.35l-.43 1.73-.48 1.09-.92 1.27-1 .44-1.18.22-1.35-.05-1.31-.52-.74-.7-.66-.79-1.27-1.57-1.22-.74-1.22-.61-2.36-.31-2.49-.09a6.15 6.15 0 00-1.53.4l-1 .56a3.05 3.05 0 00-.66 1l-.39 1.22v1.22l.4 1.18 1 1.27 1.27 1 2.23.61 2.31.31h1.1a2.51 2.51 0 00.5.06c.21 0 .48 0 .8.11l2.14.31.81.3c.39.15.93.34 1.6.57l1.79.88 1.31 1.09 1.18 1.18 1 1.74.74 1.53.6 3.09z",
  fill: "url(#New_Gradient_Swatch_1-9)"
}), jsx("path", {
  d: "M162.8 8.71l3.8.7 1.65.61 1.58.65 1.48.57 1.36.13 1.22-.26 1.14-.44 1.57-1a6.52 6.52 0 01-.22 2.35l-.38 1.71-.48 1.09-.92 1.27-1 .44-1.18.22-1.35-.05-1.31-.52-.74-.7-.66-.79-1.27-1.57-1.22-.74-1.22-.61-2.36-.31-2.49-.09a6.15 6.15 0 00-1.53.4l-1 .56a3.05 3.05 0 00-.66 1l-.39 1.22v1.22l.4 1.18 1 1.27 1.27 1 2.23.61 2.31.31h1.1a2.51 2.51 0 00.5.06c.21 0 .48 0 .8.11l2.14.31.81.3c.39.15.93.34 1.6.57l1.79.88 1.31 1.09 1.18 1.18 1 1.74.74 1.53.6 3.09-.17 1.53-.36 1.47-.88 1.88-.91 1.44-1.23 1.22-1.31 1.09-1.39.7-2.75 1.18-2 .3a18.84 18.84 0 01-2.62.13h-.53a18.35 18.35 0 01-2.79-.13l-2.8-.48-4-.87-1.57-.18h-1.66L148 41l-1.66.91v-2.15c0-.14.06-.31.09-.48s.06-.38.09-.61c.14-.41.26-.76.35-1.05a4 4 0 01.22-.65l.78-1.75 1.13-1.57 1.27-1.49 1.48-1.16 1.7-1.13a12.32 12.32 0 00.09 1.92l.46 1.81.66 1.36 1.09 1.74 1.36 1.23 1.57 1 1.53.48 2.53.43.92-.23 1.39-.38 1.71-.78 1-1.09.88-1.31.26-1.23.09-1.05v-.91c-.12-.41-.22-.73-.29-1a4.76 4.76 0 00-.19-.53l-.88-1.61-1.18-1.09-1.31-1.05-1.92-.66-2.05-.35-2.53-.39c-.39-.06-.86-.16-1.45-.31s-1.28-.33-2.09-.56l-2.41-1.14-1.6-1.17-1.31-1.53-.74-1.4-.26-1.31-.09-1.17v-1c.06-.35.12-.64.17-.88a2.76 2.76 0 01.18-.52l.7-1.62.91-1.18L152 11l1.31-.83 1.65-.74 3.89-.74h4M162.8 7.71h-4.19l-3.88.74a1 1 0 00-.23.07l-1.65.74-.13.07-1.31.83a.75.75 0 00-.17.14L150 11.63l-.08.09-.92 1.18a1 1 0 00-.13.22l-.69 1.59a3.92 3.92 0 00-.23.69c-.07.27-.13.58-.2 1a.91.91 0 000 .17v1.12l.09 1.18a.5.5 0 000 .12l.26 1.31a.79.79 0 00.1.27l.74 1.4a.57.57 0 00.12.18l1.31 1.53a.75.75 0 00.16.15l1.53 1.17a.64.64 0 00.18.1l2.4 1.14.15.06c.9.25 1.57.44 2.13.57s1.14.27 1.54.33l2.52.39 2 .33 1.68.58 1.15.91 1 1 .8 1.47s0 .1.12.35l.24.8v.73l-.08 1-.21 1-.73 1.09-.81.88-1.45.67-1.31.35-.7.18-2.26-.39-1.36-.54-1.38-.85-1.18-1.07-1-1.58-.58-1.2-.41-1.73a13.37 13.37 0 01-.06-1.69 1 1 0 00-.53-.88 1 1 0 00-.47-.12.92.92 0 00-.55.17l-1.71 1.13h-.05l-1.53 1.18a.67.67 0 00-.15.14l-1.27 1.5-.06.08-1.13 1.57a.51.51 0 00-.09.16l-.79 1.75a6.84 6.84 0 00-.26.77c-.09.29-.2.62-.33 1a.79.79 0 00-.06.22c0 .22 0 .41-.08.57s-.05.31-.08.45a1.23 1.23 0 000 .19v2.18a1 1 0 00.49.87 1.06 1.06 0 001 0l1.59-.88 1.84-.69h1.43l1.48.17 3.92.86 2.84.49a18.92 18.92 0 003 .14h.53a19.31 19.31 0 002.77-.14l2-.3a1 1 0 00.23-.07l2.75-1.13h.06l1.4-.7.19-.13 1.31-1.09.07-.06 1.22-1.22a.75.75 0 00.14-.17l.92-1.44.06-.12.87-1.88a1.18 1.18 0 00.07-.2l.35-1.52a.5.5 0 000-.12l.16-1.51a1.22 1.22 0 000-.27l-.48-3.1a1.15 1.15 0 00-.09-.28l-.74-1.53v-.05l-1-1.75a.87.87 0 00-.17-.22l-1.17-1.18-.07-.06-1.28-1.09a.86.86 0 00-.2-.13l-1.8-.88h-.1l-1.62-.56-.78-.3a1.05 1.05 0 00-.24-.06l-2.13-.31c-.31-.05-.62-.09-.88-.11a2.85 2.85 0 01-.32 0 1.07 1.07 0 00-.25 0h-1l-2.18-.29-2-.54-1-.78-.85-1-.29-.87v-.9l.34-1a.25.25 0 000-.07 4.58 4.58 0 01.33-.46l.85-.48a5.51 5.51 0 011.11-.26l2.34.08 2.14.28 1 .51 1 .63 1.16 1.44.67.8.08.09.74.7a1 1 0 00.32.19l1.31.53a.93.93 0 00.33.07h1.54l1.18-.22a1.09 1.09 0 00.24-.07l1-.44a1 1 0 00.39-.32l.92-1.27a1.62 1.62 0 00.1-.18l.49-1.09a.83.83 0 00.06-.21l.33-1.62a7.86 7.86 0 00.26-2.61v-.23a1 1 0 00-1-1 1 1 0 00-.56.17l-1.47 1-1 .37-1 .21-1.07-.1-1.35-.52-1.55-.64-1.7-.63-.16-.05-3.73-.71a.55.55 0 00-.18 0z",
  fill: "url(#New_Gradient_Swatch_1-10)"
}), jsx("path", {
  className: "cls-3",
  d: "M162.8 8.71l3.8.7 1.65.61 1.58.65 1.48.57 1.36.13 1.22-.26 1.14-.44 1.57-1a6.52 6.52 0 01-.22 2.35l-.38 1.71-.48 1.09-.92 1.27-1 .44-1.18.22-1.35-.05-1.31-.52-.74-.7-.66-.79-1.27-1.57-1.22-.74-1.22-.61-2.36-.31-2.49-.09a6.15 6.15 0 00-1.53.4l-1 .56a3.05 3.05 0 00-.66 1l-.39 1.22v1.22l.4 1.18 1 1.27 1.27 1 2.23.61 2.31.31h1.1a2.51 2.51 0 00.5.06c.21 0 .48 0 .8.11l2.14.31.81.3c.39.15.93.34 1.6.57l1.79.88 1.31 1.09 1.18 1.18 1 1.74.74 1.53.6 3.09-.17 1.53-.36 1.47-.88 1.88-.91 1.44-1.23 1.22-1.31 1.09-1.39.7-2.75 1.18-2 .3a18.84 18.84 0 01-2.62.13h-.53a18.35 18.35 0 01-2.79-.13l-2.8-.48-4-.87-1.57-.18h-1.66L148 41l-1.66.91v-2.15c0-.14.06-.31.09-.48s.06-.38.09-.61c.14-.41.26-.76.35-1.05a4 4 0 01.22-.65l.78-1.75 1.13-1.57 1.27-1.49 1.48-1.16 1.7-1.13a12.32 12.32 0 00.09 1.92l.46 1.81.66 1.36 1.09 1.74 1.36 1.23 1.57 1 1.53.48 2.53.43.92-.23 1.39-.38 1.71-.78 1-1.09.88-1.31.26-1.23.09-1.05v-.91c-.12-.41-.22-.73-.29-1a4.76 4.76 0 00-.19-.53l-.88-1.61-1.18-1.09-1.31-1.05-1.92-.66-2.05-.35-2.53-.39c-.39-.06-.86-.16-1.45-.31s-1.28-.33-2.09-.56l-2.41-1.14-1.6-1.17-1.31-1.53-.74-1.4-.26-1.31-.09-1.17v-1c.06-.35.12-.64.17-.88a2.76 2.76 0 01.18-.52l.7-1.62.91-1.18L152 11l1.31-.83 1.65-.74 3.89-.74h4M162.8 8h-4.12l-3.89.75a.49.49 0 00-.16 0l-1.63.76-.09.05-1.31.83a.45.45 0 00-.13.1l-1.32 1.31-.06.07-.91 1.18a.59.59 0 00-.1.17l-.69 1.59a3 3 0 00-.22.66 8.81 8.81 0 00-.19.93.53.53 0 000 .13v1.1l.09 1.18v.09l.27 1.31a.58.58 0 00.07.21l.74 1.39a.42.42 0 00.09.14l1.31 1.53.12.11 1.57 1.18.13.08 2.4 1.13.12.05c.89.25 1.57.43 2.12.57s1.12.26 1.51.32l2.53.39 2 .34 1.74.59 1.18 1 1.07 1 .82 1.51a3.93 3.93 0 01.14.39c.06.21.14.49.25.84v.78l-.09 1-.22 1-.76 1.14-.86.94-1.51.7-1.34.35-.75.2-2.33-.4-1.39-.49-1.43-.88-1.23-1.1-1-1.63-.61-1.24-.41-1.76a11.83 11.83 0 01-.07-1.74.75.75 0 00-.39-.66.8.8 0 00-.36-.09.75.75 0 00-.41.12l-1.71 1.14-1.53 1.18-.11.11-1.27 1.48v.06l-1.1 1.57-.06.12-.79 1.75c-.08.2-.16.44-.25.74s-.2.63-.34 1a.75.75 0 000 .16c0 .22-.06.41-.08.58s-.06.32-.08.46a.59.59 0 000 .14v2.18a.74.74 0 00.75.75.81.81 0 00.37-.09l1.61-.89 1.9-.71h1.48l1.51.17 3.93.87 2.83.48a18.39 18.39 0 002.92.14h.53a20.49 20.49 0 002.73-.13l2-.31a.48.48 0 00.17 0l2.5-1.1h.05l1.4-.7a.42.42 0 00.14-.09l1.31-1.09h.06l1.22-1.22a.64.64 0 00.1-.13l.92-1.44a.36.36 0 000-.09l.88-1.87v-.15l.35-1.53v-.08l.18-1.53a1.27 1.27 0 000-.2l-.48-3.1a.79.79 0 00-.06-.22l-.63-1.63-1-1.79a.61.61 0 00-.12-.16l-1.18-1.18-1.31-1.09-.15-.1-1.79-.87h-.09c-.66-.23-1.19-.41-1.57-.56l-.8-.3h-.17l-2.14-.31a5.63 5.63 0 00-.86-.11 1.33 1.33 0 01-.36-.05h-1.24l-2.21-.3-2-.55-1.08-.82-.91-1.1-.31-.94v-1l.36-1.1a.43.43 0 010-.05 2 2 0 01.41-.6l.89-.5a5.23 5.23 0 011.21-.29l2.38.08 2.2.28 1.08.54 1.08.66 1.18 1.47.67.8.06.06.75.7a.51.51 0 00.23.15l1.31.53a.74.74 0 00.25.05h1.5l1.18-.22.17-.05 1-.44a.78.78 0 00.3-.24l.92-1.27a.54.54 0 00.07-.13l.49-1.1a.88.88 0 00.05-.15l.33-1.65a7.5 7.5 0 00.25-2.54v-.13a.74.74 0 00-.75-.75.75.75 0 00-.42.13l-1.49 1-1 .39-1 .23-1.14-.12-1.57-.51-1.56-.64-1.69-.63h-.12l-3.8-.7z"
}), jsx("path", {
  d: "M80.73 90H62v-2.13l1.47-.06.49-.21a6.76 6.76 0 01.65-.23l.55-1.2.38-2-.16-.76-.22-1.2-.43-1.21-.65-1.58-.88-1.69-1.15-1.69-1.36-1.59-1.64-1.36-1.63-.93-2.24-.71-2.57-.33-.11 13.41.17 1.47.27 1 1.2.93 2 .06-.06 2H38.47v-1.91h1.37l1.31-.49.43-1 .42-2.22V54.13c-.07-.3-.1-.42-.1-.38l-.22-1a4 4 0 00-1.2-1l-1.91-.16-.06-1.75h17.54v1.8h-1.42a2.14 2.14 0 00-1.15.39l-.6 1.2-.27 2-.11 13.42 2.08-6 1.09-2.45L57 57.73l1.31-2 1.53-2 1.63-1.47 1.75-1.48 2.46-.82 2-.44 2.18.39 1.42.33 1.2.16 1.58-.4 2-.93.22 1.31.06.87-.28 2.08-.92 1.75-1.24 1.56-1.69 1-1.69.65h-2.34l-.35-.08-.83-.37h-2.38l-1.37.16-1.68.93L60 60l-1.5 1.77-1.3 1.91-1.15 2.46L55 68.7a23.8 23.8 0 013.44.17l2.68.43 2.73.77c.18 0 .46.11.84.22a15.51 15.51 0 011.5.54L68.44 72l.74.44c.31.18.66.4 1.06.66L72 74.6l1.64 1.53 2 3L76.85 82l.43 2.51.06 1.49.33 1 1.2.93 1.91.06z",
  fill: "url(#New_Gradient_Swatch_1-11)"
}), jsx("path", {
  d: "M76.08 49.05l.22 1.31.06.87-.28 2.08-.92 1.75-1.26 1.58-1.69 1-1.69.65h-2.34l-.35-.08-.83-.37h-2.38l-1.37.16-1.68.93L60 60l-1.5 1.77-1.3 1.91-1.15 2.46L55 68.7a23.8 23.8 0 013.44.17l2.68.43 2.73.77c.18 0 .46.11.84.22a15.51 15.51 0 011.5.54L68.44 72l.74.44c.31.18.66.4 1.06.66L72 74.6l1.64 1.53 2 3L76.85 82l.43 2.51.06 1.49.33 1 1.2.93 1.91.06v2H62v-2.12l1.47-.06.49-.21a6.76 6.76 0 01.65-.23l.55-1.2.38-2-.16-.76-.22-1.2-.43-1.21-.65-1.58-.88-1.69-1.15-1.69-1.36-1.59-1.64-1.36-1.63-.93-2.24-.71-2.57-.33-.11 13.41.17 1.47.27 1 1.2.93 2 .06-.06 2H38.47v-1.91h1.37l1.31-.49.43-1 .42-2.22V54.13a2.54 2.54 0 00-.1-.39l-.22-1a4 4 0 00-1.2-1l-1.91-.16-.06-1.75h17.54v1.8h-1.42a2.14 2.14 0 00-1.15.39l-.6 1.2-.27 2-.11 13.43 2.08-6 1.09-2.45L57 57.73l1.31-2 1.53-2 1.63-1.47 1.75-1.48 2.46-.82 2-.44 2.18.39 1.42.33 1.2.16 1.58-.4 2-.93m0-1a1 1 0 00-.41.09l-1.92.84-1.3.31-1-.13-1.37-.32H70l-2.18-.38h-.38l-2 .44h-.11l-2.46.82a.94.94 0 00-.32.19L60.8 51.4 59.15 53a.86.86 0 00-.13.14l-1.53 2a.15.15 0 000 .06l-1.31 2v.07l-1.31 2.46v.06l-1.09 2.46v.08l-.08.23.06-7.2.24-1.74.39-.78a1 1 0 01.39-.11h1.46a1 1 0 001-1v-1.8a1 1 0 00-1-1H38.47a1 1 0 00-1 1l.06 1.75a1 1 0 00.91 1l1.69.15a2.71 2.71 0 01.59.47l.16.74a1 1 0 000 .16 1 1 0 010 .12l.06 30-.4 2-.22.5-.76.29h-1.21a1 1 0 00-1 1V90a1 1 0 001 1h17.7a1 1 0 001-1l.06-2a1 1 0 00-1-1h-1.64l-.68-.53-.16-.58-.15-1.34.1-12.18 1.36.17 2 .65 1.47.83L60 75.2l1.27 1.48 1.08 1.6.83 1.6.62 1.51.35 1 .2 1.13.13.59-.32 1.71-.31.68-.31.12-.36.15-1.26.05a1 1 0 00-1 1V90a1 1 0 001 1h18.81a1 1 0 001-1v-2a1 1 0 00-1-1h-1.58l-.7-.54-.19-.61-.06-1.34a.57.57 0 000-.13l-.44-2.51a.83.83 0 00-.06-.21l-1.2-2.89a.69.69 0 00-.1-.19l-2-3a1.07 1.07 0 00-.14-.16l-1.63-1.53-1.75-1.48-.11-.08-1.09-.67-.68-.48L66.68 70h-.1a14.44 14.44 0 00-1.6-.58c-.41-.12-.68-.19-.89-.23l-2.69-.76h-.11l-2.68-.44a17.39 17.39 0 00-2.12-.16l.51-1.29 1.1-2.36 1.23-1.8 1.36-1.61 1.43-1 1.44-.77 1.12-.13h2.1l.64.26h.1l.43.1a3.26 3.26 0 00.41.05h2.15a.92.92 0 00.36-.07l1.69-.65a.8.8 0 00.16-.08l1.7-1a1.13 1.13 0 00.26-.23l1.25-1.58a1.3 1.3 0 00.1-.15l.97-1.74a1.35 1.35 0 00.11-.34l.27-2.08a1.21 1.21 0 000-.19l-.06-.88v-.09l-.22-1.31a1 1 0 00-.52-.72.94.94 0 00-.47-.12z",
  fill: "url(#New_Gradient_Swatch_1-12)"
}), jsx("path", {
  className: "cls-3",
  d: "M76.08 49.05l.22 1.31.06.87-.28 2.08-.92 1.75-1.26 1.58-1.69 1-1.69.65h-2.34l-.35-.08-.83-.37h-2.38l-1.37.16-1.68.93L60 60l-1.5 1.77-1.3 1.91-1.15 2.46L55 68.7a23.8 23.8 0 013.44.17l2.68.43 2.73.77c.18 0 .46.11.84.22a15.51 15.51 0 011.5.54L68.44 72l.74.44c.31.18.66.4 1.06.66L72 74.6l1.64 1.53 2 3L76.85 82l.43 2.51.06 1.49.33 1 1.2.93 1.91.06v2H62v-2.12l1.47-.06.49-.21a6.76 6.76 0 01.65-.23l.55-1.2.38-2-.16-.76-.22-1.2-.43-1.21-.65-1.58-.88-1.69-1.15-1.69-1.36-1.59-1.64-1.36-1.63-.93-2.24-.71-2.57-.33-.11 13.41.17 1.47.27 1 1.2.93 2 .06-.06 2H38.47v-1.91h1.37l1.31-.49.43-1 .42-2.22V54.13a2.54 2.54 0 00-.1-.39l-.22-1a4 4 0 00-1.2-1l-1.91-.16-.06-1.75h17.54v1.8h-1.42a2.14 2.14 0 00-1.15.39l-.6 1.2-.27 2-.11 13.43 2.08-6 1.09-2.45L57 57.73l1.31-2 1.53-2 1.63-1.47 1.75-1.48 2.46-.82 2-.44 2.18.39 1.42.33 1.2.16 1.58-.4 2-.93m0-.75a.7.7 0 00-.31.07l-2 .9-1.38.33-1-.14-1.37-.34-2.22-.39H67.49l-2 .44h-.08L63 50a.72.72 0 00-.24.14L61 51.64l-1.66 1.5-.09.1-1.53 2-1.31 2v.06L55 59.83a.08.08 0 010 .05l-1.09 2.46v.06l-.58 1.68.07-8.75.25-1.8.45-.89a1.26 1.26 0 01.57-.17h1.45a.76.76 0 00.72-.75v-1.8a.75.75 0 00-.75-.75H38.47a.79.79 0 00-.54.22.81.81 0 00-.21.55l.06 1.75a.74.74 0 00.68.72l1.75.15a3.08 3.08 0 01.73.6l.19.8a.74.74 0 000 .14 1.46 1.46 0 010 .17l.06 30.08-.41 2-.27.62-.9.34h-1.25a.76.76 0 00-.72.75V90a.75.75 0 00.75.75h17.66a.75.75 0 00.75-.75l.06-2a.75.75 0 00-.73-.77H54.4l-.81-.63-.18-.68-.16-1.37.1-12.55 1.67.22 2.09.66 1.51.85L60.16 75l1.3 1.5 1.09 1.62.84 1.63.61 1.55.35 1.07.21 1.15.14.64-.31 1.84-.37.81-.4.14-.39.17-1.31.05a.74.74 0 00-.72.75V90a.74.74 0 00.75.75h18.78a.75.75 0 00.75-.73v-2a.74.74 0 00-.73-.77h-1.66l-.83-.64-.22-.71-.04-1.45a.38.38 0 000-.1l-.43-2.51a1 1 0 000-.16l-1.2-2.89a.91.91 0 00-.07-.14l-2-3-.11-.12L72.56 74l-1.78-1.5-.09-.06q-.6-.39-1.08-.66l-.73-.44-2.27-1.22h-.07c-.64-.26-1.17-.45-1.58-.57s-.68-.19-.88-.23l-2.7-.76h-.08l-2.68-.43a17.48 17.48 0 00-2.5-.13l.62-1.54 1.11-2.37 1.25-1.83 1.39-1.64 1.47-1 1.53-.84 1.18-.14h2.15l.69.27h.08l.4.1a3.18 3.18 0 00.4 0h2.13a.86.86 0 00.27 0l1.69-.65.12-.06 1.7-1a.81.81 0 00.19-.18l1.25-1.58a.44.44 0 00.08-.11l.93-1.75a.73.73 0 00.08-.25l.27-2.08a.76.76 0 000-.15l-.06-.87a.17.17 0 000-.07l-.22-1.31a.74.74 0 00-.74-.63z"
}), jsx("path", {
  d: "M112.25 91.22l-.68-.44c-.22-.15-.44-.29-.68-.43a4.7 4.7 0 00-1.53-.22H86v-1.44h1.23a3.76 3.76 0 01.39-.17 5.12 5.12 0 01.52-.18l.44-1 .26-1.62V61.53c-.06-.23-.09-.34-.09-.3l-.17-.79-1-.75-1.58-.18v-1.35h14v1.39l-1.14.05a1.75 1.75 0 00-.92.3l-.48 1-.22 1.58-.08 26.25h1.65a4.54 4.54 0 00.57-.06l2.4-.39 2-.44 1.2-.35c.36-.12.7-.25 1-.39l1.7-.84 1.62-.91 1.46-1.35 1.14-1.26.69-1.23.7-1.83 1 1z",
  fill: "url(#New_Gradient_Swatch_1-13)"
}), jsx("path", {
  d: "M100 58.16v1.39l-1.14.05a1.75 1.75 0 00-.92.3l-.48 1-.22 1.58-.08 26.25h1.65a4.54 4.54 0 00.57-.06l2.4-.39 2-.44 1.2-.35c.36-.12.7-.25 1-.39l1.7-.84 1.62-.91 1.46-1.35 1.14-1.26.69-1.23.7-1.83 1 1-2 10.53-.68-.44c-.22-.15-.44-.29-.68-.43a4.7 4.7 0 00-1.53-.22H86v-1.43h1.23a3.76 3.76 0 01.39-.17 5.12 5.12 0 01.52-.18l.44-1 .26-1.62V61.53a1.31 1.31 0 00-.09-.31l-.17-.79-1-.75-1.58-.17v-1.35h14m0-1H86a1 1 0 00-1 1v1.35a1 1 0 00.88 1l1.25.15.46.35.1.44V85.6l-.12 1.4-.2.43-.17.06-.26.12h-1a1 1 0 00-1 1v1.44a1 1 0 001 1h23.41a4.08 4.08 0 011.11.13l.55.35.7.46a1 1 0 00.53.15.89.89 0 00.39-.09 1 1 0 00.59-.72l2-10.53a1 1 0 00-.22-.8l-1-1a1 1 0 00-.71-.29.65.65 0 00-.2 0 1 1 0 00-.73.62l-.67 1.76-.61 1.07-1 1.13-1.36 1.17-1.51.85-1.67.82a7.15 7.15 0 01-.89.33c-.36.12-.74.23-1.16.34l-1.89.42-2.38.39c-.15 0-.31 0-.49.06h-.53l.08-25.18.19-1.35.27-.53a.41.41 0 01.16 0l1.17-.05a1 1 0 001-1v-1.4a1 1 0 00-1-1z",
  fill: "url(#New_Gradient_Swatch_1-14)"
}), jsx("path", {
  className: "cls-3",
  d: "M100 58.16v1.39l-1.14.05a1.75 1.75 0 00-.92.3l-.48 1-.22 1.58-.08 26.25h1.65a4.54 4.54 0 00.57-.06l2.4-.39 2-.44 1.2-.35c.36-.12.7-.25 1-.39l1.7-.84 1.62-.91 1.46-1.35 1.14-1.26.69-1.23.7-1.83 1 1-2 10.53-.68-.44c-.22-.15-.44-.29-.68-.43a4.7 4.7 0 00-1.53-.22H86v-1.43h1.23a3.76 3.76 0 01.39-.17 5.12 5.12 0 01.52-.18l.44-1 .26-1.62V61.53a1.31 1.31 0 00-.09-.31l-.17-.79-1-.75-1.58-.17v-1.35h14m0-.75H86a.75.75 0 00-.53.22.72.72 0 00-.21.55v1.35a.74.74 0 00.66.72l1.32.16.58.44.12.53v24.23l-.23 1.45-.26.57-.25.09a3 3 0 00-.3.13h-1.07a.74.74 0 00-.73.75v1.44a.76.76 0 00.75.75h23.41a4.35 4.35 0 011.21.15l.59.38.69.44a.72.72 0 00.4.12.66.66 0 00.3-.07.74.74 0 00.43-.54L115 80.84a.77.77 0 00-.21-.68l-1-1a.71.71 0 00-.53-.22h-.15a.77.77 0 00-.55.47l-.68 1.78-.63 1.11-1 1.16-1.38 1.19-1.56.88-1.66.81a8.35 8.35 0 01-.92.35c-.36.12-.75.23-1.17.34l-1.94.43-2.36.39-.51.06H97.95L98 62.49l.2-1.4.32-.65a.86.86 0 01.35-.09l1.13-.05a.74.74 0 00.73-.75v-1.39a.75.75 0 00-.75-.75z"
}), jsx("path", {
  d: "M138.56 90.13v-1.44a7.09 7.09 0 00.9-.07l1-.15.61-.31.53-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.62-7.42-13 5.55-.7 1.92-.48 1.13-.09.75a3 3 0 001 .83l1.71.17v1.49h-9.43v-1.44l1.35-.22 1.32-.44.91-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.7-.22.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.15c-.27.26-.47.48-.62.65a4.26 4.26 0 00-.35.51 1.31 1.31 0 00-.15.52v1.29l9.52 25.94 1.44 1.4 1.75.79v1.44zm-4.85-25L129 76.06l7.51-3.27z",
  fill: "url(#New_Gradient_Swatch_1-15)"
}), jsx("path", {
  d: "M141.93 57.59c-.27.26-.47.48-.62.65a4.26 4.26 0 00-.35.51 1.31 1.31 0 00-.15.52v1.29l9.52 25.94 1.44 1.4 1.75.79v1.44h-14.96v-1.44a7.09 7.09 0 00.9-.07l1-.15.61-.31.53-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.62-7.42-13 5.55-.7 1.92-.48 1.13-.09.75a3 3 0 001 .83l1.71.17v1.49h-9.43v-1.44l1.35-.22 1.32-.44.91-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.7-.22.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.15M129 76.06l7.51-3.27-2.8-7.65L129 76.06m12.93-19.47h-3.32l-3.46.62a.61.61 0 00-.18.05l-3.06 1.18a.76.76 0 00-.18.09l-1.22.78-.15.12-.87.83a1 1 0 00.56 1.72l1.2.15.07.12.09.49-10 23.14-.66.65-.73.6-1.07.35-1.27.21a1 1 0 00-.84 1v1.44a1 1 0 001 1h9.43a1 1 0 001-1v-1.48a1 1 0 00-.89-1l-1.51-.16a2.23 2.23 0 01-.3-.2v-.14l.42-1 .57-1.56 11.59-5 2.27 6.42a2.55 2.55 0 01.17.84v.31l-.15.14-.33.16-.85.13a5 5 0 01-.76.06 1 1 0 00-1 1v1.44a1 1 0 001 1h15a1 1 0 001-1v-1.4a1 1 0 00-.59-.92l-1.59-.71-1.15-1.12-9.38-25.56V60a6.13 6.13 0 010-.65.27.27 0 010-.12 3.21 3.21 0 01.24-.34c.12-.14.3-.34.55-.58a1 1 0 00.22-1.09 1 1 0 00-.92-.62zm0 2zm-11 15.54l2.71-6.29 1.62 4.41-4.33 1.88z",
  fill: "url(#New_Gradient_Swatch_1-16)"
}), jsx("path", {
  className: "cls-3",
  d: "M141.93 57.59c-.27.26-.47.48-.62.65a4.26 4.26 0 00-.35.51 1.31 1.31 0 00-.15.52v1.29l9.52 25.94 1.44 1.4 1.75.79v1.44h-14.96v-1.44a7.09 7.09 0 00.9-.07l1-.15.61-.31.53-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.62-7.42-13 5.55-.7 1.92-.48 1.13-.09.75a3 3 0 001 .83l1.71.17v1.49h-9.43v-1.44l1.35-.22 1.32-.44.91-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.7-.22.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.15M129 76.06l7.51-3.27-2.8-7.65L129 76.06m12.93-19.22h-3.28l-3.45.61h-.14L132 58.68l-.13.07-1.23.78-.11.09-.87.83a.75.75 0 00-.2.78.76.76 0 00.62.51l1.33.17.15.26.11.61L121.64 86l-.7.7-.78.63-1.13.38-1.29.21a.75.75 0 00-.63.74v1.44a.76.76 0 00.75.75h9.43a.75.75 0 00.75-.73v-1.49a.75.75 0 00-.67-.77l-1.56-.16a2.24 2.24 0 01-.48-.33v-.31l.43-1 .61-1.65 11.93-5.11 2.43 6.7a2.44 2.44 0 01.19 1v.4l-.24.23-.4.2-.9.14a5.35 5.35 0 01-.79.06.75.75 0 00-.75.75v1.44a.76.76 0 00.75.75h14.91a.76.76 0 00.75-.75v-1.53a.75.75 0 00-.44-.69l-1.63-.73-1.18-1.19-9.41-25.66V60a6.24 6.24 0 010-.66.6.6 0 01.06-.23 2.28 2.28 0 01.27-.38 8.2 8.2 0 01.56-.6.74.74 0 00-.52-1.28zm0 1.5zm-11.49 16.28l3.21-7.45 1.91 5.21-5.12 2.24z"
}), jsx("path", {
  d: "M188 73l-.83.47-.74.53-.31.88-.17 1.17v5.29l.13 1.27.22.78a5.58 5.58 0 001.18.74l1.57.14-4.67 2.35-2.8 1.14-2.18.83-2.1.57-2 .48-1.53.26-2.36.08-3.15-.26-1.57-.3-1.32-.42-1.71-.78-1.35-.88-1.18-.83-1.09-1-1.04-1.19-1.27-1.66-1.75-3-.52-1.44c-.06-.24-.13-.5-.22-.81s-.19-.66-.31-1.07l-.21-1.66-.09-2c0-.18.06-.42.09-.73s.07-.67.13-1.11a7.64 7.64 0 01.31-1.84l.69-2 .88-1.93 1-1.53L159 62l1.39-1.27 1.88-1.39 1.88-1 2.4-1 2-.48 2-.39h1 .13l.88.06 1.88.13 1.83.49 1.75.61 3.27 1.7a4.9 4.9 0 01.48.22l.61.3 1.1.22 1.18-.26 1.13-.44 1.66-1.18-.13 3.28L187 63l-.35 1.09-.65.88-.7.65-1.05.35-1.09.18c-.24 0-.56-.09-1-.18s-.95-.22-1.59-.39l-1-.52-1.22-1.23-1.09-1.31-1.26-1.35-1.42-1.17-2.09-.74-2.49-.45-2 .66-1.4.61-1.36 1.22-1 1.22-.7 1.36-.74 1.92-.39 2-.18 2.09v1.71l.22 1.91.4 1.66.56 1.53.7 1.14.92 1.13 1.44 1.54 1.44 1.26 1.57 1 1.71.83 1.44.44 2.14.39h3.49l.33-.06h.15l.09-6.86-.31-1.83-.65-1.79-1-1-1.26-.82-1.36-.14-1.15.07a5.81 5.81 0 00-1.49.92l-.74.74-1.09 1.4-1.13 3-4.65-3.14 1.79-3.09 1.17-.92 1-.83 1.14-.65 1.22-.18 1.4-.13 3 .44 3.36.83 3.71.78 2.45.35h3.37l2.61-.36.31 1.18z",
  fill: "url(#New_Gradient_Swatch_1-17)"
}), jsx("path", {
  d: "M171.61 56.5h.13l.88.06 1.88.13 1.83.49 1.75.61 3.27 1.7a4.9 4.9 0 01.48.22l.61.3 1.1.22 1.18-.26 1.13-.44 1.66-1.18-.13 3.28L187 63l-.35 1.09-.65.88-.7.65-1.05.35-1.09.18c-.24 0-.56-.09-1-.18s-.95-.22-1.59-.39l-1-.52-1.22-1.23-1.09-1.31-1.26-1.35-1.42-1.17-2.09-.74-2.49-.45-2 .66-1.4.61-1.36 1.22-1 1.22-.7 1.36-.74 1.92-.39 2-.18 2.09v1.71l.22 1.91.4 1.66.56 1.53.7 1.14.92 1.13 1.44 1.54 1.44 1.26 1.57 1 1.71.83 1.44.44 2.14.39h3.49l.33-.06h.15l.09-6.86-.31-1.83-.65-1.79-1-1-1.26-.82-1.36-.14-1.15.07a5.81 5.81 0 00-1.49.92l-.74.74-1.09 1.4-1.13 3-4.65-3.14 1.79-3.09 1.17-.92 1-.83 1.14-.65 1.22-.18 1.4-.13 3 .44 3.36.83 3.71.78 2.45.35h3.37l2.61-.36.31 1.18L188 73l-.83.47-.74.53-.31.88-.17 1.17v5.29l.13 1.27.22.78a5.58 5.58 0 001.18.74l1.57.14-4.67 2.35-2.8 1.14-2.18.83-2.1.57-2 .48-1.53.26-2.36.08-3.15-.26-1.57-.3-1.32-.42-1.71-.78-1.35-.88-1.18-.83-1.09-1-1.04-1.19-1.27-1.66-1.75-3-.52-1.44c-.06-.24-.13-.5-.22-.81s-.19-.66-.31-1.07l-.21-1.66-.09-2c0-.18.06-.42.09-.73s.07-.67.13-1.11a7.64 7.64 0 01.31-1.84l.69-2 .88-1.93 1-1.53L159 62l1.39-1.27 1.88-1.39 1.88-1 2.4-1 2-.48 2-.39h1M171.62 55.5h-1.2l-2 .4-2 .49-.16.05-2.4 1h-.07l-1.88 1-.14.08-1.87 1.4-.08.06-1.4 1.27-.1.11L157 63v.07l-1.05 1.53a1.09 1.09 0 00-.08.15l-.88 1.92v.09l-.7 2a.19.19 0 000 .07 8.81 8.81 0 00-.34 2c-.06.43-.1.8-.13 1.1a5.94 5.94 0 01-.08.66 1.27 1.27 0 000 .2l.09 2a.25.25 0 000 .08l.21 1.66v.14l.07.24.24.83c.09.3.15.56.21.79v.09L155 80a.8.8 0 00.08.16l1.75 3 .07.09 1.26 1.66.08.09 1.09 1.14 1.12 1.07a.52.52 0 00.11.1l1.18.83 1.39.9.12.06 1.71.79h.11l1.35.44h.12l1.57.31h.11l3.14.26h.12l2.36-.08h.14l1.52-.26h.07l2-.48 2.12-.58h.1l2.21-.8 2.82-1.14h.07l4.67-2.35a1 1 0 00-.36-1.89l-1.37-.12c-.29-.15-.48-.27-.59-.34l-.11-.39-.13-1.18v-5.16l.15-1 .17-.49.44-.31.67-.39 2.35-.58a1 1 0 00.62-.45 1 1 0 00.11-.77l-.37-1.14a1 1 0 00-1-.75H190l-2.55.35H184.23l-2.35-.33-3.68-.78-3.33-.82h-.09l-3-.44h-.24l-1.4.14-1.27.18a.9.9 0 00-.36.12l-1.14.65-.13.1-1 .83-1.15.9a1 1 0 00-.25.29l-1.38 2.38-.09-.4-.21-1.8V69.9l.17-2 .36-1.83.7-1.79.62-1.21L166 62l1.18-1.06 1.21-.53 1.68-.56 2.2.38 1.85.65 1.22 1 1.25 1.25 1.06 1.27.06.07 1.23 1.22a1.08 1.08 0 00.24.18l1 .54a.58.58 0 00.17.06c.64.18 1.2.32 1.65.41s.83.16 1.07.19h.27l1.1-.17h.16l1-.35a1.07 1.07 0 00.37-.22l.7-.65.12-.13.65-.88a.89.89 0 00.15-.29l.35-1.1.37-1.35a.83.83 0 000-.22l.13-3.21v-.11a1 1 0 00-1-1 1 1 0 00-.58.2l-1.55 1.1-.94.36-.91.2-.75-.15-.31-.16-.18-.09-.51-.23-3.23-1.68-.13-.06-1.75-.61h-.07l-1.84-.48a.57.57 0 00-.18 0l-1.88-.13-.83-.06h-.24zm0 2zm1.74 15.5l.86-.06 1 .1 1 .64.77.74.54 1.48.28 1.66-.08 5.86h-2.9l-2-.36-1.31-.4-1.52-.84-1.45-.89-1.34-1.17-1.39-1.47-.85-1.06-.51-.82 3.69 2.44a1 1 0 00.55.17 1.12 1.12 0 00.31 0 1 1 0 00.63-.59l1.07-2.83 1-1.22.7-.7a4.32 4.32 0 011-.65z",
  fill: "url(#New_Gradient_Swatch_1-18)"
}), jsx("path", {
  className: "cls-3",
  d: "M171.61 56.5h.13l.88.06 1.88.13 1.83.49 1.75.61 3.27 1.7a4.9 4.9 0 01.48.22l.61.3 1.1.22 1.18-.26 1.13-.44 1.66-1.18-.13 3.28L187 63l-.35 1.09-.65.88-.7.65-1.05.35-1.09.18c-.24 0-.56-.09-1-.18s-.95-.22-1.59-.39l-1-.52-1.22-1.23-1.09-1.31-1.26-1.35-1.42-1.17-2.09-.74-2.49-.45-2 .66-1.4.61-1.36 1.22-1 1.22-.7 1.36-.74 1.92-.39 2-.18 2.09v1.71l.22 1.91.4 1.66.56 1.53.7 1.14.92 1.13 1.44 1.54 1.44 1.26 1.57 1 1.71.83 1.44.44 2.14.39h3.49l.33-.06h.15l.09-6.86-.31-1.83-.65-1.79-1-1-1.26-.82-1.36-.14-1.15.07a5.81 5.81 0 00-1.49.92l-.74.74-1.09 1.4-1.13 3-4.65-3.14 1.79-3.09 1.17-.92 1-.83 1.14-.65 1.22-.18 1.4-.13 3 .44 3.36.83 3.71.78 2.45.35h3.37l2.61-.36.31 1.18L188 73l-.83.47-.74.53-.31.88-.17 1.17v5.29l.13 1.27.22.78a5.58 5.58 0 001.18.74l1.57.14-4.67 2.35-2.8 1.14-2.18.83-2.1.57-2 .48-1.53.26-2.36.08-3.15-.26-1.57-.3-1.32-.42-1.71-.78-1.35-.88-1.18-.83-1.09-1-1.04-1.19-1.27-1.66-1.75-3-.52-1.44c-.06-.24-.13-.5-.22-.81s-.19-.66-.31-1.07l-.21-1.66-.09-2c0-.18.06-.42.09-.73s.07-.67.13-1.11a7.64 7.64 0 01.31-1.84l.69-2 .88-1.93 1-1.53L159 62l1.39-1.27 1.88-1.39 1.88-1 2.4-1 2-.48 2-.39h1M171.56 55.72h-1.16l-2 .39-2.05.49h-.11l-2.4 1h-.05l-1.88 1-.11.06-1.8 1.47h-.06l-1.4 1.27-.08.08-1.31 1.61-1.05 1.53a.41.41 0 00-.07.11l-.87 1.93v.06l-.69 2a9.08 9.08 0 00-.33 2c-.06.43-.1.8-.13 1.1s0 .51-.08.68a.76.76 0 000 .15l.09 2v.07l.22 1.65v.11l.07.24.24.83c.09.31.16.57.21.79v.07l.52 1.44a.31.31 0 00.06.13L157 83l.05.07 1.26 1.66.06.07 1.13 1.2 1.11 1 .09.07 1.18.84 1.38.89h.09l1.7.78h.09l1.35.43h.09l1.57.3h.08l3.15.26h.08l2.36-.08h.1l1.53-.26 2.06-.49 2.12-.58h.07l2.18-.83 2.81-1.14h.06l4.67-2.19a.77.77 0 00.4-.82.74.74 0 00-.67-.6l-1.43-.12A6.18 6.18 0 01187 83l-.14-.5-.12-1.16v-5.2l.15-1 .21-.59.52-.36.7-.41 2.39-.59a.76.76 0 00.46-.34.72.72 0 00.09-.57L190.9 71a.75.75 0 00-.72-.57h-.11l-2.56.35h-3.26l-2.38-.34-3.68-.78-3.34-.82h-.07l-3-.44h-.18l-1.4.14-1.26.17a.82.82 0 00-.26.1l-1.14.65-.1.07-1 .83-1.16.91a.72.72 0 00-.18.21l-1.7 2.93-.24-1-.16-1.89v-1.63l.17-2 .37-1.86.71-1.82.64-1.25.92-1.12 1.22-1.1 1.26-.55 1.75-.59 2.29.4 1.9.67 1.27 1.07 1.24 1.26 1.07 1.28 1.22 1.23.19.13 1 .54h.12c.65.18 1.2.31 1.64.41s.81.15 1 .18h.21l1.09-.18a.27.27 0 00.12 0l1-.35a.74.74 0 00.27-.16l.7-.66.09-.09.65-.88a.94.94 0 00.12-.22l.34-1.09.37-1.35a.88.88 0 000-.16l.13-3.22v-.09a.75.75 0 00-.75-.75.8.8 0 00-.43.15l-1.58 1.12-1 .38-1 .22-.84-.17-.35-.17-.17-.09-.5-.23-3.25-1.69h-.1l-1.74-.61h-.06l-1.61-.48h-.14l-1.88-.14-.85-.06h-.2zm0 1.5zm1.69 15.49l.93-.07 1.1.1 1 .69.83.8.57 1.56.29 1.7.03 6.16h-3.19l-2.05-.37-1.34-.41-1.59-.87-1.48-.9-1.35-1.16-1.4-1.49-.87-1.07-.63-1-.22-.6 4.38 2.91a.75.75 0 00.41.12.59.59 0 00.23 0 .71.71 0 00.47-.44l1.09-2.86 1-1.27.71-.71a4.51 4.51 0 011.16-.71z"
}), jsx("path", {
  d: "M212.78 90.13v-1.44a7.09 7.09 0 00.9-.07l1-.15.62-.31.52-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.6-7.42-13 5.55-.7 1.92-.48 1.13-.08.75a2.89 2.89 0 001 .83l1.71.17-.05 1.49h-9.43v-1.44l1.35-.22 1.31-.44.92-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.59-.18.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.14c-.26.26-.46.48-.61.65a4.26 4.26 0 00-.35.51 1.49 1.49 0 00-.15.52v1.29l9.52 25.94 1.45 1.4 1.75.79v1.44zm-4.85-25l-4.71 10.92 7.51-3.27z",
  fill: "url(#New_Gradient_Swatch_1-19)"
}), jsx("path", {
  d: "M216.14 57.59c-.26.26-.46.48-.61.65a4.26 4.26 0 00-.35.51 1.49 1.49 0 00-.15.52v1.29l9.52 25.94 1.45 1.4 1.75.79v1.44h-14.97v-1.44a7.09 7.09 0 00.9-.07l1-.15.62-.31.52-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.6-7.42-13 5.55-.7 1.92-.48 1.13-.08.75a2.89 2.89 0 001 .83l1.71.17-.05 1.49h-9.43v-1.44l1.35-.22 1.31-.44.92-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.59-.18.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.14m-12.92 18.47l7.51-3.27-2.8-7.65-4.71 10.92m12.92-19.47h-3.32l-3.44.62a.59.59 0 00-.19.05l-3.06 1.17-.18.1-1.22.78-.15.12-.87.83a1 1 0 00.56 1.72l1.2.15.07.12.09.5-10 23.12-.66.66-.73.6-1.07.35-1.27.21a1 1 0 00-.84 1v1.44a1 1 0 001 1h9.43a1 1 0 001-1l.05-1.48a1 1 0 00-.9-1l-1.51-.16a2.23 2.23 0 01-.3-.2v-.14l.43-1v-.05l.55-1.51 11.6-5 2.26 6.42a2.15 2.15 0 01.16.84v.31l-.14.14-.32.16-.86.13a5 5 0 01-.76.06 1 1 0 00-1 1v1.44a1 1 0 001 1h14.94a1 1 0 001-1v-1.4a1 1 0 00-.59-.91l-1.59-.72-1.15-1.12L216 60.38V60v-.65a.2.2 0 010-.11 2.76 2.76 0 01.24-.35c.13-.15.32-.36.55-.58a1 1 0 00-.71-1.71zm0 2zm-11 15.54l2.72-6.29 1.6 4.41-4.32 1.88z",
  fill: "url(#New_Gradient_Swatch_1-20)"
}), jsx("path", {
  className: "cls-3",
  d: "M216.14 57.59c-.26.26-.46.48-.61.65a4.26 4.26 0 00-.35.51 1.49 1.49 0 00-.15.52v1.29l9.52 25.94 1.45 1.4 1.75.79v1.44h-14.97v-1.44a7.09 7.09 0 00.9-.07l1-.15.62-.31.52-.52v-.66a3.21 3.21 0 00-.22-1.27l-2.6-7.42-13 5.55-.7 1.92-.48 1.13-.08.75a2.89 2.89 0 001 .83l1.71.17-.05 1.49h-9.43v-1.44l1.35-.22 1.31-.44.92-.74.83-.83 10.18-23.59-.18-1-.39-.69-1.59-.18.87-.83 1.22-.79 3.06-1.18 3.45-.61h3.14m-12.92 18.47l7.51-3.27-2.8-7.65-4.71 10.92m12.92-19.22h-3.27l-3.45.61h-.14l-3.06 1.18-.14.07-1.22.78-.11.09-.87.83a.75.75 0 00-.2.78.76.76 0 00.62.51l1.33.17.15.26.11.61L195.86 86l-.7.7-.78.63-1.13.38L192 88a.74.74 0 00-.63.74v1.44a.75.75 0 00.75.75h9.43a.75.75 0 00.75-.73l.05-1.49a.76.76 0 00-.68-.77l-1.56-.16a2.24 2.24 0 01-.48-.33v-.31l.45-1 .6-1.65 11.93-5.11L215 86a2.33 2.33 0 01.17 1v.4l-.24.23-.4.2-.9.14a5.25 5.25 0 01-.79.06.75.75 0 00-.75.75v1.44a.76.76 0 00.75.75h14.94a.76.76 0 00.75-.75v-1.53A.77.77 0 00228 88l-1.63-.73-1.23-1.19-9.41-25.66V60v-.66a.64.64 0 01.06-.22 2 2 0 01.27-.39c.13-.16.33-.37.56-.6a.75.75 0 00-.53-1.28zm0 1.5zm-11.48 16.28l3.22-7.45 1.9 5.21-5.12 2.24z"
}), jsx("path", {
  d: "M260.86 86l-1.35 1.83-1.14 1.75-.75 1.49-.57 1.79a15.65 15.65 0 00-.75-2.1l-.92-1.35-17.1-24 .26 13.41.36 5.32.26 1.62.3 1.18.4.87.43.48.48.22.7.13h.66v1.49h-9.43v-1.44h.87l.7-.22.61-.61.53-1.14.43-2.27.31-3 .13-4.19.09-5.46v-7.08a6.89 6.89 0 00-1.62-1.61 13.62 13.62 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.92 1.27-.78 3.16-1 3.29-.35.26 2a7.23 7.23 0 00.31.75c.14.32.34.73.57 1.22L258 79.21v-9.13l-.18-2.75-.13-2.62-.26-2-.43-1.32-.39-.92-.53-.57-.44-.22-.65-.13h-.74l-.09-1.62h9.56v1.66h-1l-.82.31-.62.83-.52 1.49-.39 2.53-.27 3.75-.1 5.21v6.94l1.49 1.53a11.27 11.27 0 002.18.92z",
  fill: "url(#New_Gradient_Swatch_1-21)"
}), jsx("path", {
  d: "M242.94 56.85l.26 2a7.23 7.23 0 00.31.75c.14.32.34.73.57 1.22L258 79.21v-9.13l-.18-2.75-.13-2.62-.26-2-.43-1.32-.39-.92-.53-.57-.44-.22-.65-.13h-.74l-.09-1.62h9.56v1.66h-1l-.82.31-.62.83-.52 1.49-.39 2.53-.27 3.75-.1 5.21v6.94l1.49 1.53a11.27 11.27 0 002.18.92l-2.81 2.9-1.35 1.83-1.14 1.75-.75 1.49-.57 1.79a15.65 15.65 0 00-.75-2.1l-.92-1.35-17.1-24 .26 13.41.36 5.32.26 1.62.3 1.18.4.87.43.48.48.22.7.13h.66v1.49h-9.43v-1.44h.87l.7-.22.61-.61.53-1.14.43-2.27.31-3 .13-4.19.09-5.46v-7.08a6.89 6.89 0 00-1.62-1.61 13.62 13.62 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.92 1.27-.78 3.16-1 3.29-.35m0-1h-.11l-3.29.35h-.18l-3.16 1a.7.7 0 00-.23.11l-1.27.78h-.06l-1.27.92a1 1 0 00-.24.26l-.79 1.17a.47.47 0 00-.05.1l-.62 1.18a1 1 0 000 .84 1 1 0 00.61.57 13.77 13.77 0 012 .73 5.22 5.22 0 011.07 1.12v6.72l-.09 5.45-.13 4.15-.3 2.93-.4 2.11-.4.86-.31.31-.35.11h-.75a1 1 0 00-.94 1v1.44a1 1 0 001 1h9.43a1 1 0 001-1v-1.41a.34.34 0 000-.1 1 1 0 00-1-1h-.57l-.48-.09-.19-.08-.19-.21-.29-.66-.28-1-.23-1.53-.35-5.28-.19-10.13L254.57 90l.89 1.3c0 .11.2.49.64 1.87a1 1 0 00.95.7 1 1 0 00.95-.7l.55-1.71.68-1.37 1.1-1.67 1.3-1.76 2.75-2.88a1 1 0 00-.39-1.64 13.76 13.76 0 01-1.88-.75L261 80.24v-6.53l.17-5.21.26-3.68.37-2.4.45-1.26.34-.47.38-.14h.78a1 1 0 001-1v-1.66a1 1 0 00-1-1h-9.56a1 1 0 00-1 1.06l.09 1.61a1 1 0 00.94.95h.67l.46.09.15.08.29.3.29.69.31 1.23.25 1.86.13 2.58.18 2.73v6.1l-12-15.91-.14-.3c-.15-.31-.28-.59-.38-.82s-.19-.43-.24-.56l-.25-1.9a1 1 0 00-1-.87z",
  fill: "url(#New_Gradient_Swatch_1-22)"
}), jsx("path", {
  className: "cls-3",
  d: "M242.94 56.85l.26 2a7.23 7.23 0 00.31.75c.14.32.34.73.57 1.22L258 79.21v-9.13l-.18-2.75-.13-2.62-.26-2-.43-1.32-.39-.92-.53-.57-.44-.22-.65-.13h-.74l-.09-1.62h9.56v1.66h-1l-.82.31-.62.83-.52 1.49-.39 2.53-.27 3.75-.1 5.21v6.94l1.49 1.53a11.27 11.27 0 002.18.92l-2.81 2.9-1.35 1.83-1.14 1.75-.75 1.49-.57 1.79a15.65 15.65 0 00-.75-2.1l-.92-1.35-17.1-24 .26 13.41.36 5.32.26 1.62.3 1.18.4.87.43.48.48.22.7.13h.66v1.49h-9.43v-1.44h.87l.7-.22.61-.61.53-1.14.43-2.27.31-3 .13-4.19.09-5.46v-7.08a6.89 6.89 0 00-1.62-1.61 13.62 13.62 0 00-2.18-.83l.61-1.18.79-1.18 1.26-.92 1.27-.78 3.16-1 3.29-.35m0-.75h-.08l-3.29.35h-.14l-3.16 1a.53.53 0 00-.17.08l-1.27.79h-.05l-1.26.91a.86.86 0 00-.19.19l-.78 1.18a.25.25 0 000 .07l-.61 1.18a.7.7 0 000 .63.73.73 0 00.46.43 12.48 12.48 0 012 .76 5.39 5.39 0 011.26 1.23v6.82l-.09 5.45-.13 4.15-.3 3-.41 2.15-.43.94-.39.38-.43.14h-.78a.75.75 0 00-.71.75v1.44a.75.75 0 00.75.75h9.43a.75.75 0 00.75-.73v-1.43a.19.19 0 000-.08.75.75 0 00-.75-.75h-.59l-.54-.1-.26-.12-.25-.28-.32-.7-.28-1.09-.25-1.54-.35-5.29-.21-11 15.69 22 .91 1.33c0 .08.19.44.66 1.91a.74.74 0 00.71.53.75.75 0 00.72-.53l.55-1.73L259 90l1.11-1.72 1.31-1.76 2.76-2.89a.74.74 0 00-.29-1.22 13.72 13.72 0 01-2-.79l-1.22-1.25v-6.66l.17-5.22.26-3.7.38-2.43L262 61l.42-.55.49-.19h.82a.74.74 0 00.75-.75v-1.62a.75.75 0 00-.75-.75h-9.56a.77.77 0 00-.55.24.76.76 0 00-.2.56l.09 1.61a.75.75 0 00.7.71h.69l.51.1.22.11.35.37.32.75.32 1.26.25 1.89.13 2.59.18 2.76v6.83l-12.5-16.53-.15-.32-.38-.82c-.12-.27-.2-.47-.25-.61l-.26-1.93a.74.74 0 00-.74-.65z"
})))));

// build/dist/components/calendar-month.js
var spendQuarter = (quarters) => {
  const spent = (quarters.filter((q3) => q3).length + 1) % 5;
  return [...range(spent).map((_2) => true), ...range(4 - spent).map((_2) => false)];
};
var quarterReducer = (cal, monthIndex, day) => {
  return {
    ...cal,
    months: {
      ...cal.months,
      [monthIndex]: {
        ...cal.months[monthIndex],
        days: cal.months[monthIndex].days.map((d3) => {
          if (d3.number === day.number) {
            d3.quarters = spendQuarter(d3.quarters);
          }
          return d3;
        })
      }
    }
  };
};
var CalendarMonth = ({
  monthIndex,
  showWeather = true
}) => {
  const {
    calendar,
    setCalendar
  } = useContext(CalendarContext);
  const quarterClicked = (day) => {
    setCalendar(quarterReducer(calendar, monthIndex, day));
  };
  return jsx("div", {
    css: {
      marginBottom: "1rem"
    }
  }, jsx(parchment_default, {
    deps: [showWeather]
  }, jsx("h2", {
    css: {
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
      textAlign: "center",
      display: "flex",
      marginBottom: "1rem"
    },
    className: "yx-heading"
  }, calendar.months[monthIndex].name), jsx("div", {
    css: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      "@media (min-width: 1024px)": {
        gridTemplateColumns: "repeat(7, minmax(0, 1fr))"
      }
    }
  }, jsx(calendar_day_names_default, null), jsx(calendar_filler_day_default, {
    day: calendar.months[monthIndex].days[0]
  }), calendar.months[monthIndex].days.map((d3) => jsx(calendar_day_default, {
    day: d3,
    key: `${d3.monthName}${d3.number}`,
    showWeather,
    quarterClicked
  })))));
};
var calendar_month_default = CalendarMonth;

// build/dist/hooks/use-local-storage.js
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

// build/dist/hooks/use-window-scroll-position.js
function useWindowScrollPosition(localStorageKey, setCondition) {
  const [scrollYStorage, setScrollYStorage] = useLocalStorage(localStorageKey, 0);
  const handleScroll = () => {
    if (setCondition && window.scrollY !== 0) {
      setScrollYStorage(window.scrollY);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useLayoutEffect(() => {
    if (setCondition) {
      setTimeout(() => {
        window.scrollTo(0, scrollYStorage);
      }, 0);
    }
  }, [setCondition, scrollYStorage]);
}

// build/dist/pages/calendar.page.js
var DEFAULT_CALENDAR = getCal(1165);
var DEFAULT_SHOW_WEATHER = true;
var CALENDAR_KEY = "calendar";
var CALENDAR_SHOW_WEATHER_KEY = "calendar_show_weather";
var CALENDAR_SCROLL_POSITION = "calendar_scroll";
var CalendarContext = /* @__PURE__ */ createContext({
  calendar: DEFAULT_CALENDAR,
  setCalendar: (_2) => {
  }
});
var CalendarPage = () => {
  const calendarFromStorage = localStorage.getItem(CALENDAR_KEY) ?? void 0;
  const showWeatherFromStorage = localStorage.getItem(CALENDAR_SHOW_WEATHER_KEY) ?? void 0;
  const calendarFromStorageOrDefault = notNullish(calendarFromStorage) ? JSON.parse(calendarFromStorage) : DEFAULT_CALENDAR;
  const showWeatherFromStorageOrDefault = notNullish(showWeatherFromStorage) ? JSON.parse(showWeatherFromStorage) : DEFAULT_SHOW_WEATHER;
  const [calendar, setCalendar] = useLocalStorage(CALENDAR_KEY, calendarFromStorageOrDefault);
  const [showWeather, setShowWeather] = useLocalStorage(CALENDAR_SHOW_WEATHER_KEY, showWeatherFromStorageOrDefault);
  useWindowScrollPosition(CALENDAR_SCROLL_POSITION, notNullish(calendar));
  return jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      width: "100%"
    }
  }, jsx(page_header_default, null, "Kalender"), jsx("div", {
    css: {
      textAlign: "center",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      marginBottom: "0.5rem",
      textTransform: "none"
    },
    className: "yx-prose"
  }, "År ", calendar.year, " E.S. (Efter skiftet)"), jsx("div", {
    css: {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
      padding: "0.5rem",
      display: "flex",
      justifyContent: "flex-end"
    }
  }, jsx(Button_default, {
    isSmall: true,
    onClick: () => setShowWeather(!showWeather)
  }, showWeather ? "Dölj väder" : "Visa väder")), jsx("div", {
    css: {}
  }, jsx(CalendarContext.Provider, {
    value: {
      calendar,
      setCalendar
    }
  }, jsx(calendar_month_default, {
    monthIndex: 0,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 1,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 2,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 3,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 4,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 5,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 6,
    showWeather
  }), jsx(calendar_month_default, {
    monthIndex: 7,
    showWeather
  }))));
};

// build/dist/components/dice-display.js
var DiceDisplay = ({
  value
}) => {
  return jsx(react.Fragment, null, value);
};
var dice_display_default = DiceDisplay;

// build/dist/pages/dice-roller.page.js
var DiceRollerPage = () => {
  const [diceResults, setDiceResult] = useState({
    attribute: [],
    skill: [],
    gear: [],
    artifact: []
  });
  const [successes, setSuccesses] = useState(0);
  const rollDice = () => {
    const attributeResults = range(attributeDiceAmount).map((_2) => getRandomInt());
    const skillResults = range(skillDiceAmount).map((_2) => getRandomInt());
    const results = {
      attribute: attributeResults,
      skill: skillResults,
      gear: [],
      artifact: []
    };
    setDiceResult(results);
    setSuccesses([...results.attribute, ...results.skill].reduce((acc, cur) => acc + countSuccesses(cur), 0));
  };
  const [attributeDiceAmount, setAttributeDiceAmount] = useState(1);
  const attributeDiceAmountChanged = (value) => {
    setAttributeDiceAmount(value);
  };
  const [skillDiceAmount, setSkillDiceAmount] = useState(0);
  const skillDiceAmountChanged = (value) => {
    setSkillDiceAmount(value);
  };
  return jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      width: "100%"
    }
  }, jsx(page_header_default, null, "Tärningar"), jsx(parchment_default, null, jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, jsx("div", {
    css: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1rem"
    }
  }, jsx(stepper_default, {
    id: "attributes",
    label: "Attribut",
    min: 1,
    max: 6,
    value: attributeDiceAmount,
    onChange: attributeDiceAmountChanged
  }), jsx(stepper_default, {
    id: "attributes",
    label: "Färdighet",
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  }), jsx(stepper_default, {
    id: "attributes",
    label: "Gear",
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  }), jsx(stepper_default, {
    id: "attributes",
    label: "Artefakt",
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  })), jsx("div", null, jsx(Button_default, {
    onClick: () => rollDice()
  }, "Slå tärning"), jsx(Button_default, {
    variant: "secondary"
  }, "Pressa slag"), jsx(Button_default, {
    isSmall: true
  }, "stäng")), jsx("div", null, jsx("div", null, "Lyckade: ", successes), diceResults.attribute.length > 0 && jsx(react.Fragment, null, jsx("div", null, "Attribut"), diceResults.attribute.map((val, index) => jsx("div", {
    key: index
  }, jsx(dice_display_default, {
    value: val
  })))), diceResults.skill.length > 0 && jsx(react.Fragment, null, jsx("div", null, "Färdighet"), diceResults.skill.map((val, index) => jsx("div", {
    key: index
  }, jsx(dice_display_default, {
    value: val
  }))))))));
};

// build/dist/pages/gear.page.js
var GearPage = () => {
  return jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      width: "100%"
    }
  }, jsx(page_header_default, null, "Utrustning"), jsx("div", null, jsx(parchment_default, null, jsx("h2", {
    css: {
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
      textAlign: "center",
      display: "flex",
      marginBottom: "1rem"
    },
    className: "yx-heading"
  }, "Vanliga tjänster"), jsx("table", {
    css: {
      width: "100%"
    }
  }, jsx("thead", {
    css: {
      display: "none",
      "@media (min-width: 1024px)": {
        display: "table-header-group"
      }
    }
  }, jsx("tr", null, jsx("td", {
    css: {
      fontWeight: "700",
      textTransform: "uppercase",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Tjänst"), jsx("td", {
    css: {
      fontWeight: "700",
      textTransform: "uppercase",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Pris"), jsx("td", {
    css: {
      fontWeight: "700",
      textTransform: "uppercase",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Tillgång"), jsx("td", {
    css: {
      fontWeight: "700",
      textTransform: "uppercase",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      borderBottomWidth: "2px",
      "--tw-border-opacity": "1",
      borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Kommentar"))), jsx("tbody", null, regularServices.map((rs, i2) => jsx("tr", {
    key: rs.service,
    css: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      "@media (min-width: 1024px)": {
        display: "table-row"
      }
    }
  }, jsx("td", {
    css: [{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      "@media (min-width: 1024px)": {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
      }
    }, i2 % 2 === 0 && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, jsx("div", {
    css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "@media (min-width: 1024px)": {
        display: "none"
      }
    }
  }, "Tjänst"), rs.service), jsx("td", {
    css: [{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      "@media (min-width: 1024px)": {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
      }
    }, i2 % 2 === 0 && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, jsx("div", {
    css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "@media (min-width: 1024px)": {
        display: "none"
      }
    }
  }, "Pris"), priceFormat(rs.price)), jsx("td", {
    css: [{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      "@media (min-width: 1024px)": {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
      }
    }, i2 % 2 === 0 && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, jsx("div", {
    css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "@media (min-width: 1024px)": {
        display: "none"
      }
    }
  }, "Tillgång"), availabilityFormat(rs.availability)), jsx("td", {
    css: [{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      "@media (min-width: 1024px)": {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderColor: "rgba(156, 163, 175, var(--tw-border-opacity))"
      }
    }, i2 % 2 === 0 && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, jsx("div", {
    css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "@media (min-width: 1024px)": {
        display: "none"
      }
    }
  }, "Kommentar"), rs.comment ?? ""))))))));
};
var availabilityFormat = (a2) => {
  switch (a2) {
    case `sällsynt`: {
      const count = getRandomInt() === 6 ? 1 : 0;
      return `Sällsynt (${count} ex)`;
    }
    case `ovanlig`: {
      const count = getRandomInt() >= 4 ? getRandomInt() : 0;
      return `Ovanlig (${count} ex)`;
    }
    case `vanlig`:
    default:
      return `Vanlig`;
  }
};
var priceFormat = (sc2) => {
  const coins = formatCoinPurse(copperToCoinPurse(sc2.copper));
  const per = perFormat(sc2.per);
  return `${coins} ${per}`;
};
var formatCoinPurse = (cp) => {
  const gold = cp.gold > 0 ? `${cp.gold} guld` : ``;
  const silver = cp.silver > 0 ? `${cp.silver} silver` : ``;
  const copper = cp.copper > 0 ? `${cp.copper} koppar` : ``;
  return [gold, silver, copper].join(" ");
};
var copperToCoinPurse = (copper) => ({
  gold: Math.floor(copper / 100),
  silver: Math.floor(copper % 100 / 10),
  copper: copper % 100 % 10
});
var perFormat = (per) => {
  switch (per) {
    case "day":
      return " per dag";
    case "hex":
      return " per hexagon";
    default:
      return "";
  }
};
var regularServices = [{
  service: "Bad på värdshus",
  availability: "vanlig",
  price: {
    copper: 3
  }
}, {
  service: "Klippning",
  availability: "vanlig",
  price: {
    copper: 5
  }
}, {
  service: "Läkarvård",
  availability: "ovanlig",
  price: {
    copper: 5
  }
}, {
  service: "Livvakt",
  availability: "ovanlig",
  price: {
    copper: 10,
    per: "day"
  }
}, {
  service: "Tvätt av kläder",
  availability: "vanlig",
  price: {
    copper: 5
  }
}, {
  service: "Budbärare",
  availability: "vanlig",
  price: {
    copper: 10,
    per: "hex"
  }
}, {
  service: "Vägtull",
  availability: "vanlig",
  price: {
    copper: 2
  }
}, {
  service: "Övernattning värdshus, sovsal",
  availability: "vanlig",
  price: {
    copper: 2
  }
}, {
  service: "Övernattning värdshus, eget rum",
  availability: "vanlig",
  price: {
    copper: 5
  }
}, {
  service: "Ståtligt härbärge",
  availability: "ovanlig",
  price: {
    copper: 20
  }
}, {
  service: "Skål stuvning",
  availability: "vanlig",
  price: {
    copper: 3
  },
  comment: "Täcker dagsbehovet av Mat."
}, {
  service: "Måltid på värdshus",
  availability: "vanlig",
  price: {
    copper: 10
  },
  comment: "Täcker dagsbehovet av Mat och Vatten."
}, {
  service: "Festmåltid",
  availability: "ovanlig",
  price: {
    copper: 100
  },
  comment: "Täcker dagsbehovet av Mat och Vatten."
}, {
  service: "Stop mjöd",
  availability: "vanlig",
  price: {
    copper: 2
  },
  comment: "Täcker dagsbehovet av Vatten."
}, {
  service: "Kalk vin",
  availability: "ovanlig",
  price: {
    copper: 4
  },
  comment: "Täcker dagsbehovet av Vatten."
}, {
  service: "Lärare",
  availability: "ovanlig",
  price: {
    copper: 10,
    per: "day"
  },
  comment: "Kan vara dyrare"
}];

// build/dist/models/name.model.js
var NameType;
(function(NameType2) {
  NameType2["FirstName"] = "FirstName";
  NameType2["FamilyName"] = "FamilyName";
  NameType2["HomeName"] = "HomeName";
  NameType2["NickName"] = "NickName";
})(NameType || (NameType = {}));
var KinType;
(function(KinType2) {
  KinType2["Human"] = "Human";
  KinType2["Elf"] = "Elf";
})(KinType || (KinType = {}));
var HumanKin;
(function(HumanKin2) {
  HumanKin2["Alderlänning"] = "Alderlänning";
  HumanKin2["Eländer"] = "Eländer";
  HumanKin2["Aslener"] = "Aslener";
})(HumanKin || (HumanKin = {}));
var ElfKin;
(function(ElfKin2) {
  ElfKin2["Elf"] = "Elf";
})(ElfKin || (ElfKin = {}));
var humanNames = {
  Alderlänning: {
    Male: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.FamilyName,
        weight: 5
      }, {
        type: NameType.HomeName,
        weight: 5
      }],
      rawNames: ["Adalbern", "Alaric", "Alboin", "Baldarich", "Baldomar", "Clovis", "Eburwin", "Egino", "Erminigild", "Eward", "Faramund", "Fridumar", "Fulco", "Gerulf", "Gislin", "Haimo", "Hardmod", "Hariwald", "Horsa", "Hrodger", "Hrolf", "Ivo", "Joscelin", "Karl", "Kuno", "Landebert", "Lanzo", "Leudagar", "Lothar", "Manno", "Meginfrid", "Meino", "Odo", "Odoacer", "Ortwin", "Otmar", "Otto", "Raban", "Radulf", "Ranganhar", "Rochus", "Rudesind", "Sigdag", "Siward", "Tancred", "Trancmar", "Waldhar", "Waldo", "Wandal", "Warin"]
    },
    Female: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.FamilyName,
        weight: 5
      }, {
        type: NameType.HomeName,
        weight: 5
      }],
      rawNames: ["Adela", "Adelais", "Adelina", "Aenor", "Alda", "Aldegund", "Amalia", "Amelina", "Auda", "Aveza", "Avila", "Berengaria", "Bertha", "Brunhild", "Brunhilde", "Clothildis", "Cunigund", "Ermendrud", "Ermingard", "Erminhilt", "Erminlinda", "Frida", "Geretrudis", "Gerhild", "Gerlind", "Gisila", "Godeliva", "Gunda", "Hadewig", "Hailwic", "Herleva", "Ida", "Ima", "Irma", "Ishild", "Leutgard", "Luitgard", "Lutgardis", "Mahthildis", "Oda", "Odila", "Raganhildis", "Roslindis", "Rosmunda", "Rothad", "Roza", "Saxa", "Sigilind", "Waldeburg", "Waldedrudis"]
    },
    family: ["Adogit", "Aelvaeones", "Batini", "Bergio", "Braemi", "Bui", "Chali", "Danduti", "Dani", "Eunixi", "Evagres", "Favonae ", "Fosi", "Grannii", "Hallin", "Hasdingi", "Helissi", "Heruli", "Hilleviones", "Ingriones", "Lemovii", "Levoni", "Manimi", "Mattiaci", "Naharvali", "Nemetes", "Njars", "Otingis", "Pharodini", "Quadi", "Racatae", "Racatriae", "Salii", "Scirii", "Segni", "Sigulones", "Suevi", "Taetel", "Teutons", "Thervingi", "Theustes", "Tubanti", "Ubi", "Vagoth", "Vangiones", "Varini", "Vinoiloth ", "Viruni", "Vispi ", "Zumi"]
  },
  Aslener: {
    Male: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.NickName,
        weight: 5
      }],
      rawNames: ["Agis", "Agler", "Alceus", "Altair", "Anker ", "Ares", "Arsene", "Atemas", "Avel", "Balasi", "Baruch", "Cassander", "Cimon", "Cletus", "Cyrus", "Damen", "Dinos", "Dion", "Dorian", "Dunixi", "Eneas", "Etor", "Feodor", "Gilos", "Gorka", "Guilios", "Hali", "Hesiod", "Hippias", "Kai", "Kuiril", "Kyros", "Leander", "Meletios", "Mentor", "Milos", "Nestor", "Orestes", "Peder", "Poul", "Preben", "Solon", "Spyridon", "Thanos", "Titos", "Todor", "Vasileous", "Vasilis", "Zeno", "Zorba"]
    },
    Female: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.NickName,
        weight: 5
      }],
      rawNames: ["Adara", "Alena", "Arete", "Asta", "Callia", "Cassia", "Charis", "Cyma", "Damia", "Delbin", "Doria", "Eleni", "Elna", "Evadne", "Evania", "Evanthe", "Filia", "Helia", "Hesper", "Io", "Iona", "Ionia", "Isaura", "Ismini", "Kaia", "Kama", "Kepa", "Kolete", "Lana", "Lelia", "Lenore", "Melania", "Melita", "Metea", "Mona", "Nora", "Nyssa", "Odele", "Pallas", "Panthea", "Pelegia", "Perrine", "Philippa", "Rhea", "Rita", "Sappho", "Sonia", "Tessa", "Vania", "Zenobia"]
    },
    nickName: ["Äventyrlige", "Arge", "Skallige", "Blodige", "Djärve", "Noggranne", "Slarvige", "Försiktig", "Duktige", "Förvirrade", "Grymme", "Direkte", "Energiske", "Tjocka", "Varsamme", "Gode", "Hårige", "Stilige", "Lycklige", "Hoppfulle", "Muntra", "Glad", "Mäktige", "Lindriga", "Vilseledne", "Dystere", "Gamle", "Skarpsynte", "Stolte", "Snabbe", "Pålitlige", "Ledsne", "Kloke", "Korte", "Sömnig", "Långsamme", "Kraftige", "Starke", "Rejäle", "Snabbe", "Pratsamme", "Långe", "Fruktansvärde", "Tunne", "Fule", "Fåfänglige", "Svage", "Kloke", "Unge"]
  },
  Eländer: {
    Male: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.FamilyName,
        weight: 10
      }, {
        type: NameType.HomeName,
        weight: 10
      }],
      rawNames: ["Alvgar", "Ahlred", "Atheric", "Baldred", "Beocca", "Beorn", "Bosa", "Brid", "Cadwallon", "Ceol", "Cuthred", "Cuthwulf", "Cynric", "Daela", "Dunn", "Dunstan", "Eadgar", "Eadhun", "Ealread", "Earnwulf", "Eohric", "Frithstan", "Guthere", "Guthlaf", "Gyric", "Haefoc", "Hrothgar", "Ithamar", "Leofgar", "Liofa", "Morchaer", "Odda", "Ordgar", "Osgar", "Osred", "Praen", "Raedwald", "Sidrac", "Sigulf", "Sithric", "Teothic", "Tobias", "Uhtred", "Ulf", "Waldere", "Wulfgar", "Wulfmaer", "Wulfric", "Wulfwig", "Wynstan"]
    },
    Female: {
      probabilites: [{
        type: NameType.FirstName,
        weight: 49
      }, {
        type: NameType.FamilyName,
        weight: 10
      }, {
        type: NameType.HomeName,
        weight: 10
      }],
      rawNames: ["Aebbe", "Aedwen", "Alvhild", "Alvlaed", "Alvswith", "Alvswith", "Alvwyn", "Aethelith", "Aethelwyn", "Ailred", "Bebbe ", "Bucge", "Ceolburh", "Cuthburh", "Cuthswith", "Cyneberg", "Eadburg", "Eadgifu", "Ealhild", "Eanflaed", "Eangyth", "Eanith", "Eawyn", "Edwyn", "Frithwyn", "Gytha", "Heiu", "Helelufu", "Hild", "Hilda", "Inga", "Leofrun", "Maethild", "Mathilda", "Osgyth", "Oshild", "Osswith", "Ricola", "Saegyth", "Saehild", "Saeith", "Saewyn", "Saewyn", "Siflaed", "Waerburh", "Withith", "Wulfwaru", "Wulfwyn", "Wynflaed", "Ymma"]
    },
    family: ["Adlard", "Almer", "Alston", "Alvar", "Balston", "Brunger", "Brunwin", "Burch", "Burward", "Cobbald", "Dewdney", "Eddols", "Elphee", "Elvey", "Erwin", "Frewer", "Frewin", "Goldbard", "Goldhawk", "Hulbert", "Isgar", "Kenway", "Kerrich", "Kerrich", "Lambrick", "Leavins", "Leavold", "Lewin", "Litwin", "Litwin", "Medwin", "Orrick", "Osmer", "Othen", "Quenell", "Seavers", "Siggers", "Sirett", "Stannard", "Wackrill", "Walwin", "Wennell", "Whatman", "Winbolt", "Winbow", "Woolgar", "Wyard", "Wyberg", "Wymer", "Yonwin"]
  }
};
var villageNames = {
  prefix: ["Bärnsten", "Ängel", "Själ", "Bäck", "Vik", "Kittel", "Pil", "Höst", "Kal", "Fjärd", "Strand", "Björn", "Klock", "Svart", "Dyster", "Blind", "Ben", "Block", "Bro", "Gryt", "Skör", "Brons", "Borg", "Grott", "Kyl", "Ler", "Klar", "Klipp", "Moln", "Kall", "Häll", "Kråk", "Kristall", "Fördömda", "Mörk", "Gryning", "Död", "Djup", "Rådjurs", "Demon", "Dagg", "Dunkel", "Öde", "Smuts", "Hund", "Drak", "Torr", "Skymnings", "Damm", "Örn", "Jord", "Öst", "Brun", "Kant", "Äldre", "Gammel", "Glöd", "Eviga", "Rättvisa", "Fall", "Falsk", "Fager", "Bortre", "Fe", "Fruktans", "Flamm", "Platt", "Frej", "Frost", "Spöke", "Glimm", "Dunkel", "Guld", "Gräs", "Grå", "Grön", "Dyster", "Smuts", "Hassel", "Hjärt", "Hög", "Dov", "Honungs", "Hund", "Is", "Järn", "Kil", "Riddar", "Sjö", "Sista", "Ljus", "Kalk", "Liten", "Förlorade", "Galen", "Magiker", "Lönn", "Mitt", "Makt", "Kvarn", "Dimm", "Mån", "Moss", "Ler", "Stum", "Myt", "Aldrig", "Ny", "Natt", "Norr", "Ek", "Hav", "Gammal", "Ox", "Pärl", "Tall", "Damm", "Ren", "Snabb", "Vredes", "Korp", "Röd", "Rimfrost", "Flod", "Sten", "Skälm", "Ros", "Rost", "Salt", "Sand", "Bränn", "Skydd", "Skugg", "Skimmer", "Slöj", "Tyst", "Silkes", "Silver", "Slät", "Slask", "Lömsk", "Små", "Lill", "Slät", "Orm", "Snö", "Söder", "Vår", "Hjort", "Stjärn", "Imm", "Stål", "Brant", "Stilla", "Sten", "Storm", "Sommar", "Sol", "Kärr", "Svan", "Snabb", "Törne", "Timmer", "Handel", "Väst", "Val", "Dugg", "Vit", "Vild", "Vilda", "Vind", "Vinter", "Varg"],
  suffix: ["tunnland", "band", "kärr", "vik", "klocka", "född", "städ", "born", "brott", "bryt", "bäck", "fäste", "bränna", "grav", "röse", "kalla", "kyla", "klippa", "kust", "krön", "korsning", "dal", "gryt", "driva", "klar", "falla", "falls", "fälla", "fält", "ved", "skog", "fort", "front", "frost", "garde", "port", "dalgång", "brott", "grav", "lund", "vakt", "klyfta", "bukt", "hall", "helga", "tuna", "hand", "hamn", "tillflykt", "roder", "kulle", "fäste", "holde", "sänka", "horn", "värd", "torn", "landa", "ljus", "gap", "äng", "ren", "myr", "vall", "hed", "Mer", "pik", "mun", "passage", "topp", "platts", "damm", "hamn", "post", "ände", "vila", "sten", "springa", "ärr", "skugga", "klippa", "skal", "skydda", "strand", "fylke", "sida", "stava", "spira", "by", "häx", "helga", "stjärna", "storm", "strå", "toppen", "flod", "sta", "dal", "dala", "valv", "ådra", "utsikt", "bya", "mur", "tumla", "Skydd", "Utsikt", "vatten", "brunn", "brygga", "veke", "vind", "trä", "gård"]
};

// build/dist/functions/name.functions.js
var getRandomEländerName = (g3 = Gender.Female) => {
  const {
    type,
    firstName
  } = getNameTypeAndFirstName(g3, humanNames.Eländer);
  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family ?? [])}`;
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`;
    case NameType.FirstName:
    default:
      return firstName;
  }
};
var getRandomAlderlänningarName = (g3 = Gender.Female) => {
  const {
    type,
    firstName
  } = getNameTypeAndFirstName(g3, humanNames.Alderlänning);
  switch (type) {
    case NameType.FamilyName:
      return `${firstName} ${choose(humanNames.Eländer.family ?? [])}`;
    case NameType.HomeName:
      return `${firstName} av ${getRandomVillageName()}`;
    case NameType.FirstName:
    default:
      return firstName;
  }
};
var getRandomAslenerName = (g3 = Gender.Female) => {
  const {
    type,
    firstName
  } = getNameTypeAndFirstName(g3, humanNames.Aslener);
  switch (type) {
    case NameType.NickName:
      return `${firstName} den ${choose(humanNames.Aslener.nickName ?? [])}`;
    case NameType.FirstName:
    default:
      return firstName;
  }
};
var getNameTypeAndFirstName = (g3, nl) => {
  return {
    type: weightedRandom(nl[g3].probabilites).type,
    firstName: choose(nl[g3].rawNames)
  };
};
var getRandomVillageName = () => `${choose(villageNames.prefix)}${choose(villageNames.suffix)}`;

// build/dist/pages/name-generator.page.js
var NameGeneratorPage = () => {
  return jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      width: "100%"
    }
  }, jsx(page_header_default, null, "Namn"), jsx("div", {
    css: {
      display: "grid",
      gap: "1rem",
      "@media (min-width: 1024px)": {
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
      }
    }
  }, jsx("div", {
    css: {
      maxWidth: "65ch",
      width: "100%"
    }
  }, jsx(parchment_default, null, jsx(kin_name_list_default, {
    title: "Eländare",
    nameFunc: getRandomEländerName
  }))), jsx("div", {
    css: {
      maxWidth: "65ch",
      width: "100%"
    }
  }, jsx(parchment_default, null, jsx(kin_name_list_default, {
    title: "Alderlänningar",
    nameFunc: getRandomAlderlänningarName
  }))), jsx("div", {
    css: {
      maxWidth: "65ch",
      width: "100%"
    }
  }, jsx(parchment_default, null, jsx(kin_name_list_default, {
    title: "Aslener",
    nameFunc: getRandomAslenerName
  })))));
};

// build/dist/functions/legend.functions.js
var generateLegend = () => {
  const longTimeAgo = `För länge sedan`;
  const {
    description,
    age
  } = timeAgo();
  return [longTimeAgo, description, `(${age} ES) var det en`, getText(ADJECTIVE), getText(WHO_OR_WHAT), "som sökte", getText(WHO_SEARCHED_FOR), "på grund av", getText(BECAUSE), "och begav sig till", getText(LOCATION), "som ligger", getText(DISTANCE, getRandomT6), "i", getText(TERRAIN), "i riktning", `${getText(DIRECTION, getRandomT8)}.`, "Enligt sägnen sägs det att hen", getText(WHAT_HAPPENED), "och på platsen finns", getText(ITS_TOLD_THAT), "men också", getText(ADJECTIVE_ADVERSARY), `${getText(ADVERSARY)}.`].join(" ");
};
var timeAgo = () => {
  const roll = getRandomT66();
  const time = TIME_AGO.find((ta2) => ta2.roll.includes(roll));
  if (time) {
    return {
      description: time.text,
      age: getRandomInt(time.ageRange[0], time.ageRange[1])
    };
  }
  return time ?? {
    description: "innan blodsdimmans tid",
    age: 0
  };
};
var TIME_AGO = [{
  text: "innan skiftet",
  ageRange: [1100, 3e3],
  roll: [11, 12]
}, {
  text: "innan blodsdimman",
  ageRange: [300, 1100],
  roll: [13, 14, 15, 16, 21, 22, 23, 24, 25, 26]
}, {
  text: "under de alderländska krigen",
  ageRange: [305, 360],
  roll: [31, 32, 33, 34, 35, 36, 41, 42, 43]
}, {
  text: "under blodsdimmans tid",
  ageRange: [5, 280],
  roll: [44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66]
}];
var getText = (arr, diceFn = getRandomT66) => {
  const roll = diceFn();
  const result = arr.find((a2) => a2.roll.includes(roll)) ?? {
    text: () => "",
    roll: []
  };
  return result.text();
};
var ADJECTIVE = [{
  roll: [11],
  text: () => "blodtörstig"
}, {
  roll: [12],
  text: () => "hämndlysten"
}, {
  roll: [13],
  text: () => "girig"
}, {
  roll: [14],
  text: () => "olyckligt"
}, {
  roll: [15],
  text: () => "påhittig"
}, {
  roll: [16],
  text: () => "driftig"
}, {
  roll: [21],
  text: () => "vänlig"
}, {
  roll: [22],
  text: () => "uthållig"
}, {
  roll: [23, 24],
  text: () => "lömsk"
}, {
  roll: [25, 26],
  text: () => "moralisk"
}, {
  roll: [31, 32],
  text: () => "skicklig"
}, {
  roll: [33, 34],
  text: () => "snål"
}, {
  roll: [35, 36],
  text: () => "fåfäng"
}, {
  roll: [41, 42],
  text: () => "vis"
}, {
  roll: [43, 44],
  text: () => "vacker"
}, {
  roll: [45, 46],
  text: () => "ärofull"
}, {
  roll: [51, 52],
  text: () => "missunnsam"
}, {
  roll: [53, 54],
  text: () => "grym"
}, {
  roll: [55, 56],
  text: () => "handlingskraftig"
}, {
  roll: [61, 62],
  text: () => "listig"
}, {
  roll: [63, 64],
  text: () => "rädd"
}, {
  roll: [65, 66],
  text: () => "ond"
}];
var WHO_OR_WHAT = [{
  roll: [11],
  text: () => "alv"
}, {
  roll: [12],
  text: () => "dvärg"
}, {
  roll: [13],
  text: () => "nasare"
}, {
  roll: [14],
  text: () => "smed"
}, {
  roll: [15],
  text: () => "bonde"
}, {
  roll: [16],
  text: () => "lärling"
}, {
  roll: [21],
  text: () => "druid"
}, {
  roll: [22],
  text: () => "herde"
}, {
  roll: [23, 24],
  text: () => "korpsyster"
}, {
  roll: [25, 26],
  text: () => "rostbroder"
}, {
  roll: [31, 32],
  text: () => "riddare/ryttare"
}, {
  roll: [33, 34],
  text: () => "skattletare"
}, {
  roll: [35, 36],
  text: () => "präst"
}, {
  roll: [41, 42],
  text: () => "magiker"
}, {
  roll: [43, 44],
  text: () => "rövarhövding"
}, {
  roll: [45, 46],
  text: () => "krigare"
}, {
  roll: [51, 52],
  text: () => "furste"
}, {
  roll: [53, 54],
  text: () => "prins"
}, {
  roll: [55, 56],
  text: () => "prinsessa"
}, {
  roll: [61, 62],
  text: () => "drottning"
}, {
  roll: [63, 64],
  text: () => "kung"
}, {
  roll: [65, 66],
  text: () => {
    const roll = getRandomInt(1, 6);
    switch (roll) {
      case 1:
        return "trupp";
      case 2:
        return "by";
      case 3:
        return "kult";
      case 4:
        return "rövarband";
      case 5:
        return "kabal";
      case 6:
        return "monster";
      default:
        return "rövarband";
    }
  }
}];
var WHO_SEARCHED_FOR = [{
  roll: [11, 12, 13, 14],
  text: () => "ett vapen"
}, {
  roll: [15, 16, 21, 22],
  text: () => "en kärlek"
}, {
  roll: [23, 24, 25, 26],
  text: () => "en vän i nöd"
}, {
  roll: [31, 32, 33, 34],
  text: () => "en fiende"
}, {
  roll: [35, 36, 41, 42],
  text: () => "en skatt"
}, {
  roll: [43, 44, 45, 46],
  text: () => "en karta"
}, {
  roll: [51, 52, 53, 54],
  text: () => "en familjemedlem"
}, {
  roll: [55, 56, 61, 62],
  text: () => "en artefakt"
}, {
  roll: [63, 44, 65, 66],
  text: () => "ett monster"
}];
var BECAUSE = [{
  roll: [11, 12, 13, 14],
  text: () => "kärlek"
}, {
  roll: [15, 16],
  text: () => "vänskap"
}, {
  roll: [21, 22, 23, 24],
  text: () => "ett löfte"
}, {
  roll: [25, 26, 31, 32, 33],
  text: () => "en profetia"
}, {
  roll: [35, 36, 41],
  text: () => "ett vad"
}, {
  roll: [42, 43, 44, 45],
  text: () => "plikt"
}, {
  roll: [46, 51, 52],
  text: () => "krig"
}, {
  roll: [53, 54, 55],
  text: () => "ära"
}, {
  roll: [56, 61],
  text: () => "vansinne"
}, {
  roll: [62, 63],
  text: () => "drömmar"
}, {
  roll: [64, 65, 66],
  text: () => "girighet"
}];
var LOCATION = [{
  roll: [11, 12, 13, 14, 15, 16],
  text: () => "en ruin"
}, {
  roll: [21, 21],
  text: () => "en gård"
}, {
  roll: [23, 24, 25, 26],
  text: () => "en grav"
}, {
  roll: [31, 32, 33, 34],
  text: () => "ett torn"
}, {
  roll: [35, 36],
  text: () => "en borg"
}, {
  roll: [41, 42, 43],
  text: () => "en by"
}, {
  roll: [44, 45, 46, 51, 52, 53],
  text: () => "en grotta"
}, {
  roll: [54, 55, 56],
  text: () => "en kulle"
}, {
  roll: [61, 62, 63],
  text: () => "ett träd"
}, {
  roll: [64, 65, 66],
  text: () => "en vattenkälla"
}];
var DISTANCE = [{
  roll: [1],
  text: () => "här"
}, {
  roll: [2],
  text: () => "i närheten"
}, {
  roll: [3],
  text: () => "en dagsmarsch bort"
}, {
  roll: [4],
  text: () => "flera dagsmarscher bort"
}, {
  roll: [5],
  text: () => "i fjärran"
}, {
  roll: [6],
  text: () => "på andra sidan Det glömda landet"
}];
var TERRAIN = [{
  roll: [11, 12, 13, 14],
  text: () => "ruinstad"
}, {
  roll: [15, 16, 21],
  text: () => "träsk"
}, {
  roll: [22, 23, 24],
  text: () => "myrmark"
}, {
  roll: [25, 26, 31, 32, 33, 34],
  text: () => "slätt"
}, {
  roll: [35, 36, 41, 42, 43, 44],
  text: () => "skog"
}, {
  roll: [45, 46, 51, 52, 53],
  text: () => "kullar"
}, {
  roll: [54, 55, 56, 61, 62, 63],
  text: () => "mörk skog"
}, {
  roll: [64],
  text: () => "sjö"
}, {
  roll: [65, 66],
  text: () => "berg"
}];
var DIRECTION = [{
  roll: [1],
  text: () => "nord"
}, {
  roll: [2],
  text: () => "nordöst"
}, {
  roll: [3],
  text: () => "öst"
}, {
  roll: [4],
  text: () => "sydöst"
}, {
  roll: [5],
  text: () => "syd"
}, {
  roll: [6],
  text: () => "sydväst"
}, {
  roll: [7],
  text: () => "väst"
}, {
  roll: [8],
  text: () => "nordväst"
}];
var WHAT_HAPPENED = [{
  roll: [11, 12, 13, 14],
  text: () => "blev förrådd"
}, {
  roll: [15, 21, 22],
  text: () => "blev mördad"
}, {
  roll: [23, 24, 25, 26],
  text: () => "aldrig sågs mer"
}, {
  roll: [31, 32, 33],
  text: () => "svalt ihjäl"
}, {
  roll: [34, 35, 36],
  text: () => "tog livet av sig"
}, {
  roll: [41, 42, 43, 44],
  text: () => "dog i strid"
}, {
  roll: [45, 46, 51, 52],
  text: () => "blev förtrollad"
}, {
  roll: [53, 54, 55, 56],
  text: () => "blev besatt"
}, {
  roll: [61, 62, 63],
  text: () => "kom tillbaka förändrad"
}, {
  roll: [64, 65, 66],
  text: () => "letar fortfarande"
}];
var ITS_TOLD_THAT = [{
  roll: [11, 12, 13, 14],
  text: () => "guld, massor av guld"
}, {
  roll: [15, 16, 21, 22],
  text: () => "en kraftfull artefakt"
}, {
  roll: [23, 24, 25, 26],
  text: () => "en rustning"
}, {
  roll: [31, 32, 33],
  text: () => "ett vapen"
}, {
  roll: [34, 35, 36],
  text: () => "en ovärderlig bok"
}, {
  roll: [41, 42, 43, 44],
  text: () => "en stor skatt"
}, {
  roll: [45, 45, 46, 51, 52],
  text: () => "en försvunnen krigskassa"
}, {
  roll: [53, 54, 55, 56],
  text: () => "lämningarna av en viktig person"
}, {
  roll: [61, 62, 63],
  text: () => "en dvärgisk artefakt"
}, {
  roll: [64, 65, 66],
  text: () => "en alvrubin"
}];
var ADJECTIVE_ADVERSARY = [{
  roll: [11, 12, 13, 14],
  text: () => "aggresiva"
}, {
  roll: [15, 16, 21, 22],
  text: () => "blodtörstiga"
}, {
  roll: [23, 24, 25],
  text: () => "grymma"
}, {
  roll: [26, 31, 32],
  text: () => "fasansfulla"
}, {
  roll: [33, 34],
  text: () => "hungriga"
}, {
  roll: [35, 36, 41, 42, 43],
  text: () => "vaktande"
}, {
  roll: [44, 45, 46],
  text: () => "utsvultna"
}, {
  roll: [51, 52, 53, 54],
  text: () => "giriga"
}, {
  roll: [55, 56, 61],
  text: () => "galna"
}, {
  roll: [62, 63],
  text: () => "mordiska"
}, {
  roll: [64, 65],
  text: () => "maniska"
}, {
  roll: [66],
  text: () => "jagande"
}];
var ADVERSARY = [{
  roll: [11, 12, 13, 14],
  text: () => "vargmän"
}, {
  roll: [15, 16, 21, 22],
  text: () => "slavhandlare"
}, {
  roll: [23, 24, 25],
  text: () => "orcher"
}, {
  roll: [26, 31, 32],
  text: () => "gastar"
}, {
  roll: [33, 34],
  text: () => "reptilfolk"
}, {
  roll: [35, 36, 41, 42, 43],
  text: () => "järngardister"
}, {
  roll: [44, 45, 46],
  text: () => "odöda"
}, {
  roll: [51, 52, 53, 54],
  text: () => "rövare"
}, {
  roll: [55, 56, 61],
  text: () => "svartalfer"
}, {
  roll: [62, 63],
  text: () => "resar"
}, {
  roll: [64, 65],
  text: () => getText(MONSTER_LIST)
}, {
  roll: [66],
  text: () => {
    const roll = getRandomInt(1, 6);
    switch (roll) {
      case 5:
        return "två demoner";
      case 6:
        return `${getRandomT6()} demoner`;
      case 1:
      case 2:
      case 3:
      case 4:
      default:
        return "en demon";
    }
  }
}];
var MONSTER_LIST = [{
  roll: [11, 12],
  text: () => "stryparranka"
}, {
  roll: [13, 14, 15],
  text: () => "gråbjörn"
}, {
  roll: [16, 21, 22],
  text: () => "nattulv"
}, {
  roll: [23, 24],
  text: () => "gast"
}, {
  roll: [25, 26],
  text: () => "likätare"
}, {
  roll: [31, 32],
  text: () => "skelett"
}, {
  roll: [33, 34],
  text: () => "vandöd"
}, {
  roll: [35, 36],
  text: () => "flygödla"
}, {
  roll: [41, 42],
  text: () => "harpyor"
}, {
  roll: [43],
  text: () => "minotaur"
}, {
  roll: [44],
  text: () => "ent"
}, {
  roll: [45],
  text: () => "avgrundsmask"
}, {
  roll: [46],
  text: () => "jättebläckfisk"
}, {
  roll: [51],
  text: () => "sjöorm"
}, {
  roll: [52],
  text: () => "troll"
}, {
  roll: [53],
  text: () => "dödsriddare"
}, {
  roll: [54],
  text: () => "insektoid"
}, {
  roll: [55],
  text: () => "blodling"
}, {
  roll: [56],
  text: () => "mantikora"
}, {
  roll: [61],
  text: () => "grip"
}, {
  roll: [62],
  text: () => "jätte"
}, {
  roll: [63],
  text: () => "hydra"
}, {
  roll: [64],
  text: () => "demon"
}, {
  roll: [65],
  text: () => "drakorm"
}, {
  roll: [66],
  text: () => "drake"
}];

// build/dist/pages/session.page.js
var SessionPage = () => {
  const [legend, setLegend] = useState(generateLegend());
  const getLegend = () => setLegend(generateLegend());
  return jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      width: "100%",
      alignItems: "center"
    }
  }, jsx(page_header_default, null, "Spelmöte"), jsx("div", {
    css: {}
  }, jsx("div", {
    css: {
      maxWidth: "65ch",
      "@media (min-width: 1024px)": {
        width: "65ch"
      }
    }
  }, jsx(parchment_default, null, jsx("button", {
    css: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      marginBottom: "1rem",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgba(245, 158, 11, var(--tw-text-opacity))"
      }
    },
    onClick: () => getLegend()
  }, jsx("h2", {
    css: {
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
      textAlign: "center",
      display: "flex"
    },
    className: "yx-heading"
  }, "Sägen"), jsx(reload_icon_default, {
    container: {
      width: "1.5rem",
      height: "1.5rem"
    },
    svg: {}
  })), jsx("div", null, legend)))));
};

// build/dist/App.js
var styles = {
  container: () => [
    {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(249, 250, 251, var(--tw-bg-opacity))",
      flexDirection: "column",
      minHeight: "100vh",
      height: "100%",
      width: "100vw",
      maxWidth: "100%"
    }
  ]
};
var App = () => {
  const routes = useRoutes([{
    path: "/",
    element: jsx(HomePage, null)
  }, {
    path: "/dice",
    element: jsx(DiceRollerPage, null)
  }, {
    path: "/names",
    element: jsx(NameGeneratorPage, null)
  }, {
    path: "/gear",
    element: jsx(GearPage, null)
  }, {
    path: "/calendar",
    element: jsx(CalendarPage, null)
  }, {
    path: "/session",
    element: jsx(SessionPage, null)
  }]);
  return jsx("div", {
    className: "App",
    css: styles.container()
  }, jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      "@media (min-width: 1024px)": {
        flexDirection: "row"
      }
    }
  }, jsx("div", {
    css: {
      display: "flex",
      flexDirection: "column",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
      "@media (min-width: 1024px)": {
        height: "100%",
        position: "fixed",
        width: "12rem"
      }
    }
  }, jsx("div", {
    css: {
      padding: "0.5rem",
      marginBottom: "1rem"
    }
  }, jsx(Link, {
    to: "/",
    css: {
      display: "block",
      width: "100%"
    }
  }, jsx(logo_default, null))), jsx("nav", {
    css: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      rowGap: "0.25rem"
    }
  }, jsx(MenuLink, {
    to: "/session"
  }, "Spelmöte"), jsx(MenuLink, {
    to: "/calendar"
  }, "Kalender"), jsx(MenuLink, {
    to: "/gear"
  }, "Utrustning"), jsx(MenuLink, {
    to: "/names"
  }, "Namn"), jsx(MenuLink, {
    to: "/dice"
  }, "Tärningar"))), jsx("main", {
    css: {
      width: "100%",
      marginTop: "1rem",
      "@media (min-width: 1024px)": {
        marginLeft: "12rem"
      }
    }
  }, routes)));
};
var App_default = App;
var HomePage = () => jsx("div", {
  css: {
    display: "flex",
    flexDirection: "column",
    rowGap: "2rem",
    maxWidth: "65ch"
  }
}, jsx(page_header_default, null, "Svärdets Sång"), jsx(parchment_default, null, jsx("p", {
  className: "yx-prose"
}, "Välkomna till Svärdets sång. I detta bordsrollspel är ni inte hjältar som utför uppdrag på order av andra – i stället är ni äventyrare och skattletare fast beslutna att sätta ert eget märke på denna fördömda värld. Ni kommer att vandra genom det vilda landet, utforska glömda gravar, kämpa mot fruktansvärda monster och – om ni lever länge nog – bygga ert eget fäste och försvara det mot fiender. Under era äventyr kan ni avslöja de mörka krafter som rör sig i skuggorna och till slut kan det bli ni som avgör Det glömda landets öde.")));
var MenuLink = ({
  to,
  children
}) => {
  const {
    pathname
  } = useLocation();
  const {
    pathname: toPathname
  } = useResolvedPath(to);
  const isLinkActive = pathname === toPathname;
  return jsx(Link, {
    css: [{
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      width: "100%",
      fontWeight: "500",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgba(245, 158, 11, var(--tw-bg-opacity))"
      }
    }, isLinkActive && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgba(0, 0, 0, var(--tw-bg-opacity))",
      "--tw-text-opacity": "1",
      color: "rgba(255, 255, 255, var(--tw-text-opacity))",
      fontWeight: "600",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgba(0, 0, 0, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgba(245, 158, 11, var(--tw-text-opacity))"
      }
    }],
    to
  }, children);
};

// build/dist/index.js
import.meta.env = env_exports;
react_dom_default.render(jsx(react.StrictMode, null, jsx(GlobalStyles_default, null), jsx(HashRouter, null, jsx(App_default, null))), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map
