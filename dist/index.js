import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../_snowpack/pkg/react.js';
import ReactDOM from '../_snowpack/pkg/react-dom.js';
import GlobalStyles from './styles/GlobalStyles.js';
import App from './App.js';
import { HashRouter } from '../_snowpack/pkg/react-router-dom.js';
import { jsx as __cssprop } from "../_snowpack/pkg/@emotion/react.js";
ReactDOM.render(__cssprop(React.StrictMode, null, __cssprop(GlobalStyles, null), __cssprop(HashRouter, null, __cssprop(App, null))), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}