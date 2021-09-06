import { r as react } from './common/index-370e7390.js';
import { _ as _extends$2 } from './common/extends-7477639a.js';

var r,
    B = r || (r = {});
B.Pop = "POP";
B.Push = "PUSH";
B.Replace = "REPLACE";
var C =  function (b) {
  return b;
};

function E(b) {
  b.preventDefault();
  b.returnValue = "";
}

function F() {
  var b = [];
  return {
    get length() {
      return b.length;
    },

    push: function (h) {
      b.push(h);
      return function () {
        b = b.filter(function (k) {
          return k !== h;
        });
      };
    },
    call: function (h) {
      b.forEach(function (k) {
        return k && k(h);
      });
    }
  };
}

function H() {
  return Math.random().toString(36).substr(2, 8);
}

function I(b) {
  var h = b.pathname,
      k = b.search;
  b = b.hash;
  return (void 0 === h ? "/" : h) + (void 0 === k ? "" : k) + (void 0 === b ? "" : b);
}

function J(b) {
  var h = {};

  if (b) {
    var k = b.indexOf("#");
    0 <= k && (h.hash = b.substr(k), b = b.substr(0, k));
    k = b.indexOf("?");
    0 <= k && (h.search = b.substr(k), b = b.substr(0, k));
    b && (h.pathname = b);
  }

  return h;
}

function createHashHistory(b) {
  function h() {
    var a = J(m.location.hash.substr(1)),
        e = a.pathname,
        l = a.search;
    a = a.hash;
    var g = u.state || {};
    return [g.idx, C({
      pathname: void 0 === e ? "/" : e,
      search: void 0 === l ? "" : l,
      hash: void 0 === a ? "" : a,
      state: g.usr || null,
      key: g.key || "default"
    })];
  }

  function k() {
    if (t) c.call(t), t = null;else {
      var a = r.Pop,
          e = h(),
          l = e[0];
      e = e[1];
      if (c.length) {
        if (null != l) {
          var g = q - l;
          g && (t = {
            action: a,
            location: e,
            retry: function () {
              p(-1 * g);
            }
          }, p(g));
        }
      } else A(a);
    }
  }

  function x(a) {
    var e = document.querySelector("base"),
        l = "";
    e && e.getAttribute("href") && (e = m.location.href, l = e.indexOf("#"), l = -1 === l ? e : e.slice(0, l));
    return l + "#" + ("string" === typeof a ? a : I(a));
  }

  function z(a, e) {
    void 0 === e && (e = null);
    return C(_extends$2({}, d, "string" === typeof a ? J(a) : a, {
      state: e,
      key: H()
    }));
  }

  function A(a) {
    v = a;
    a = h();
    q = a[0];
    d = a[1];
    f.call({
      action: v,
      location: d
    });
  }

  function y(a, e) {
    function l() {
      y(a, e);
    }

    var g = r.Push,
        n = z(a, e);

    if (!c.length || (c.call({
      action: g,
      location: n,
      retry: l
    }), !1)) {
      var G = [{
        usr: n.state,
        key: n.key,
        idx: q + 1
      }, x(n)];
      n = G[0];
      G = G[1];

      try {
        u.pushState(n, "", G);
      } catch (K) {
        m.location.assign(G);
      }

      A(g);
    }
  }

  function w(a, e) {
    function l() {
      w(a, e);
    }

    var g = r.Replace,
        n = z(a, e);
    c.length && (c.call({
      action: g,
      location: n,
      retry: l
    }), 1) || (n = [{
      usr: n.state,
      key: n.key,
      idx: q
    }, x(n)], u.replaceState(n[0], "", n[1]), A(g));
  }

  function p(a) {
    u.go(a);
  }

  void 0 === b && (b = {});
  b = b.window;
  var m = void 0 === b ? document.defaultView : b,
      u = m.history,
      t = null;
  m.addEventListener("popstate", k);
  m.addEventListener("hashchange", function () {
    var a = h()[1];
    I(a) !== I(d) && k();
  });
  var v = r.Pop;
  b = h();
  var q = b[0],
      d = b[1],
      f = F(),
      c = F();
  null == q && (q = 0, u.replaceState(_extends$2({}, u.state, {
    idx: q
  }), ""));
  return {
    get action() {
      return v;
    },

    get location() {
      return d;
    },

    createHref: x,
    push: y,
    replace: w,
    go: p,
    back: function () {
      p(-1);
    },
    forward: function () {
      p(1);
    },
    listen: function (a) {
      return f.push(a);
    },
    block: function (a) {
      var e = c.push(a);
      1 === c.length && m.addEventListener("beforeunload", E);
      return function () {
        e();
        c.length || m.removeEventListener("beforeunload", E);
      };
    }
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

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

var readOnly =  function (obj) {
  return obj;
};

function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

var NavigatorContext = /*#__PURE__*/react.createContext(null);
var LocationContext = /*#__PURE__*/react.createContext({
  static: false
});

var RouteContext = /*#__PURE__*/react.createContext({
  outlet: null,
  params: readOnly({}),
  pathname: "",
  basename: "",
  route: null
});
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/api/Outlet
 */


function Outlet(_props) {
  return useOutlet();
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/api/Router
 */


function Router(_ref4) {
  var _ref4$children = _ref4.children,
      children = _ref4$children === void 0 ? null : _ref4$children,
      _ref4$action = _ref4.action,
      action = _ref4$action === void 0 ? r.Pop : _ref4$action,
      location = _ref4.location,
      navigator = _ref4.navigator,
      _ref4$static = _ref4.static,
      staticProp = _ref4$static === void 0 ? false : _ref4$static;
  !!useInRouterContext() ?  invariant(false) : void 0;
  return /*#__PURE__*/react.createElement(NavigatorContext.Provider, {
    value: navigator
  }, /*#__PURE__*/react.createElement(LocationContext.Provider, {
    children: children,
    value: {
      action: action,
      location: location,
      static: staticProp
    }
  }));
}
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/api/useHref
 */


function useHref(to) {
  !useInRouterContext() ?  invariant(false) : void 0;
  var navigator = react.useContext(NavigatorContext);
  var path = useResolvedPath(to);
  return navigator.createHref(path);
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/api/useInRouterContext
 */


function useInRouterContext() {
  return react.useContext(LocationContext).location != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/api/useLocation
 */


function useLocation() {
  !useInRouterContext() ?  invariant(false) : void 0;
  return react.useContext(LocationContext).location;
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/api/useNavigate
 */


function useNavigate() {
  !useInRouterContext() ?  invariant(false) : void 0;
  var navigator = react.useContext(NavigatorContext);

  var _React$useContext = react.useContext(RouteContext),
      basename = _React$useContext.basename;

  var _useLocation = useLocation(),
      pathname = _useLocation.pathname;

  var activeRef = react.useRef(false);
  react.useEffect(function () {
    activeRef.current = true;
  });
  var navigate = react.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    if (activeRef.current) {
      if (typeof to === "number") {
        navigator.go(to);
      } else {
        var path = resolvePath(to, pathname, basename);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
      }
    }
  }, [basename, navigator, pathname]);
  return navigate;
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/api/useOutlet
 */


function useOutlet() {
  return react.useContext(RouteContext).outlet;
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/api/useResolvedPath
 */


function useResolvedPath(to) {
  var _React$useContext2 = react.useContext(RouteContext),
      pathname = _React$useContext2.pathname,
      basename = _React$useContext2.basename;

  return react.useMemo(function () {
    return resolvePath(to, pathname, basename);
  }, [to, pathname, basename]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/api/useRoutes
 */


function useRoutes(partialRoutes, _temp) {
  var _ref6 = _temp === void 0 ? {} : _temp,
      _ref6$basename = _ref6.basename,
      basename = _ref6$basename === void 0 ? "" : _ref6$basename,
      location = _ref6.location;

  !useInRouterContext() ?  invariant(false) : void 0;
  var routes = react.useMemo(function () {
    return createRoutesFromArray(partialRoutes);
  }, [partialRoutes]);
  return useRoutes_(routes, location, basename);
}

function useRoutes_(routes, locationOverride, basename) {
  if (basename === void 0) {
    basename = "";
  }

  var _React$useContext3 = react.useContext(RouteContext),
      parentRoute = _React$useContext3.route,
      parentPathname = _React$useContext3.pathname,
      parentParams = _React$useContext3.params;

  var basenameForMatching = basename ? joinPaths([parentPathname, basename]) : parentPathname;
  var contextLocation = useLocation();
  var location = locationOverride !== null && locationOverride !== void 0 ? locationOverride : contextLocation;
  var matches = react.useMemo(function () {
    return matchRoutes(routes, location, basenameForMatching);
  }, [location, routes, basenameForMatching]);

  if (!matches) {
    // TODO: Warn about nothing matching, suggest using a catch-all route.
    return null;
  } // Otherwise render an element.


  var allParams = {};
  var element = matches.reduceRight(function (outlet, _ref7) {
    var params = _ref7.params,
        pathname = _ref7.pathname,
        route = _ref7.route;
    allParams = _extends({}, allParams, params);
    return /*#__PURE__*/react.createElement(RouteContext.Provider, {
      children: route.element,
      value: {
        outlet: outlet,
        params: readOnly(_extends({}, parentParams, allParams)),
        pathname: joinPaths([basenameForMatching, pathname]),
        basename: basename,
        route: route
      }
    });
  }, null);
  return element;
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from an array of JavaScript objects. Used internally
 * by `useRoutes` to normalize the route config.
 *
 * @see https://reactrouter.com/api/createRoutesFromArray
 */


function createRoutesFromArray(array) {
  return array.map(function (partialRoute) {
    var route = {
      path: partialRoute.path || "/",
      caseSensitive: partialRoute.caseSensitive === true,
      element: partialRoute.element || /*#__PURE__*/react.createElement(Outlet, null)
    };

    if (partialRoute.children) {
      route.children = createRoutesFromArray(partialRoute.children);
    }

    return route;
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/api/matchRoutes
 */


function matchRoutes(routes, location, basename) {
  if (basename === void 0) {
    basename = "";
  }

  if (typeof location === "string") {
    location = J(location);
  }

  var pathname = location.pathname || "/";

  if (basename) {
    var base = basename // // Basename should be case-insensitive
    // https://github.com/remix-run/react-router/issues/7997#issuecomment-911916907
    .toLowerCase().replace(/^\/*/, "/").replace(/\/+$/, "");

    if (pathname.toLowerCase().startsWith(base)) {
      pathname = pathname.slice(base.length) || "/";
    } else {
      // Pathname does not start with the basename, no match.
      return null;
    }
  }

  var branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  var matches = null;

  for (var i = 0; matches == null && i < branches.length; ++i) {
    // TODO: Match on search, state too?
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentPath, parentRoutes, parentIndexes) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  if (parentRoutes === void 0) {
    parentRoutes = [];
  }

  if (parentIndexes === void 0) {
    parentIndexes = [];
  }

  routes.forEach(function (route, index) {
    route = _extends({}, route, {
      path: route.path || "/",
      caseSensitive: !!route.caseSensitive,
      element: route.element
    });
    var path = joinPaths([parentPath, route.path]);
    var routes = parentRoutes.concat(route);
    var indexes = parentIndexes.concat(index); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children) {
      flattenRoutes(route.children, branches, path, routes, indexes);
    }

    branches.push([path, routes, indexes]);
  });
  return branches;
}

function rankRouteBranches(branches) {
  var pathScores = branches.reduce(function (memo, _ref8) {
    var path = _ref8[0];
    memo[path] = computeScore(path);
    return memo;
  }, {}); // Sorting is stable in modern browsers, but we still support IE 11, so we
  // need this little helper.

  stableSort(branches, function (a, b) {
    var aPath = a[0],
        aIndexes = a[2];
    var aScore = pathScores[aPath];
    var bPath = b[0],
        bIndexes = b[2];
    var bScore = pathScores[bPath];
    return aScore !== bScore ? bScore - aScore // Higher score first
    : compareIndexes(aIndexes, bIndexes);
  });
}

var paramRe = /^:\w+$/;
var dynamicSegmentValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;

var isSplat = function isSplat(s) {
  return s === "*";
};

function computeScore(path) {
  var segments = path.split("/");
  var initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  return segments.filter(function (s) {
    return !isSplat(s);
  }).reduce(function (score, segment) {
    return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
  }, initialScore);
}

function compareIndexes(a, b) {
  var siblings = a.length === b.length && a.slice(0, -1).every(function (n, i) {
    return n === b[i];
  });
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function stableSort(array, compareItems) {
  // This copy lets us get the original index of an item so we can preserve the
  // original ordering in the case that they sort equally.
  var copy = array.slice(0);
  array.sort(function (a, b) {
    return compareItems(a, b) || copy.indexOf(a) - copy.indexOf(b);
  });
}

function matchRouteBranch(branch, pathname) {
  var routes = branch[1];
  var matchedPathname = "/";
  var matchedParams = {};
  var matches = [];

  for (var i = 0; i < routes.length; ++i) {
    var route = routes[i];
    var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    var routeMatch = matchPath({
      path: route.path,
      caseSensitive: route.caseSensitive,
      end: i === routes.length - 1
    }, remainingPathname);
    if (!routeMatch) return null;
    matchedPathname = joinPaths([matchedPathname, routeMatch.pathname]);
    matchedParams = _extends({}, matchedParams, routeMatch.params);
    matches.push({
      route: route,
      pathname: matchedPathname,
      params: readOnly(matchedParams)
    });
  }

  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/api/matchPath
 */


function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern
    };
  }

  var _pattern = pattern,
      path = _pattern.path,
      _pattern$caseSensitiv = _pattern.caseSensitive,
      caseSensitive = _pattern$caseSensitiv === void 0 ? false : _pattern$caseSensitiv,
      _pattern$end = _pattern.end,
      end = _pattern$end === void 0 ? true : _pattern$end;

  var _compilePath = compilePath(path, caseSensitive, end),
      matcher = _compilePath[0],
      paramNames = _compilePath[1];

  var match = pathname.match(matcher);
  if (!match) return null;
  var matchedPathname = match[1];
  var values = match.slice(2);
  var params = paramNames.reduce(function (memo, paramName, index) {
    memo[paramName] = safelyDecodeURIComponent(values[index] || "");
    return memo;
  }, {});
  return {
    path: path,
    pathname: matchedPathname,
    params: params
  };
}

function compilePath(path, caseSensitive, end) {
  var keys = [];
  var source = "^(" + path.replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/\/?\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, function (_, key) {
    keys.push(key);
    return "([^\\/]+)";
  }) + ")";

  if (path.endsWith("*")) {
    if (path.endsWith("/*")) {
      source += "(?:\\/(.+)|\\/?)"; // Don't include the / in params['*']
    } else {
      source += "(.*)";
    }

    keys.push("*");
  } else if (end) {
    source += "\\/?";
  }

  if (end) source += "$";
  var flags = caseSensitive ? undefined : "i";
  var matcher = new RegExp(source, flags);
  return [matcher, keys];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/api/resolvePath
 */


function resolvePath(to, fromPathname, basename) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  if (basename === void 0) {
    basename = "";
  }

  var _ref9 = typeof to === "string" ? J(to) : to,
      toPathname = _ref9.pathname,
      _ref9$search = _ref9.search,
      search = _ref9$search === void 0 ? "" : _ref9$search,
      _ref9$hash = _ref9.hash,
      hash = _ref9$hash === void 0 ? "" : _ref9$hash;

  var pathname = toPathname ? resolvePathname(toPathname, toPathname.startsWith("/") ? basename ? normalizeSlashes("/" + basename) : "/" : fromPathname) : fromPathname;
  return {
    pathname: pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

var trimTrailingSlashes = function trimTrailingSlashes(path) {
  return path.replace(/\/+$/, "");
};

var normalizeSlashes = function normalizeSlashes(path) {
  return path.replace(/\/\/+/g, "/");
};

var joinPaths = function joinPaths(paths) {
  return normalizeSlashes(paths.join("/"));
};

var splitPath = function splitPath(path) {
  return normalizeSlashes(path).split("/");
};

var normalizeSearch = function normalizeSearch(search) {
  return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
};

var normalizeHash = function normalizeHash(hash) {
  return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
};

function resolvePathname(toPathname, fromPathname) {
  var segments = splitPath(trimTrailingSlashes(fromPathname));
  var relativeSegments = splitPath(toPathname);
  relativeSegments.forEach(function (segment) {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? joinPaths(segments) : "/";
} ///////////////////////////////////////////////////////////////////////////////

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

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
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["onClick", "replace", "state", "target", "to"];
/**
 * A <Router> for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */


function HashRouter(_ref2) {
  var children = _ref2.children,
      window = _ref2.window;
  var historyRef = react.useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window
    });
  }

  var history = historyRef.current;

  var _React$useState2 = react.useState({
    action: history.action,
    location: history.location
  }),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  react.useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/react.createElement(Router, {
    children: children,
    action: state.action,
    location: state.location,
    navigator: history
  });
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = /*#__PURE__*/react.forwardRef(function LinkWithRef(_ref3, ref) {
  var onClick = _ref3.onClick,
      _ref3$replace = _ref3.replace,
      replace = _ref3$replace === void 0 ? false : _ref3$replace,
      state = _ref3.state,
      target = _ref3.target,
      to = _ref3.to,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded);

  var href = useHref(to);
  var internalOnClick = useLinkClickHandler(to, {
    replace: replace,
    state: state,
    target: target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react.createElement("a", _extends$1({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` compoments with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  var _ref6 = _temp === void 0 ? {} : _temp,
      target = _ref6.target,
      replaceProp = _ref6.replace,
      state = _ref6.state;

  var navigate = useNavigate();
  var location = useLocation();
  var path = useResolvedPath(to);
  return function handleClick(event) {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      var replace = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace: replace,
        state: state
      });
    }
  };
}

export { HashRouter, Link, useRoutes };
