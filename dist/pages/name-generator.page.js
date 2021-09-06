import React from '../../_snowpack/pkg/react.js';
import { KinNameList, Parchment } from '../components/index.js';
import { getRandomAlderlänningarName, getRandomAslenerName, getRandomEländerName } from '../functions/name.functions.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";
export const NameGeneratorPage = () => {
  return __cssprop("div", {
    css: {
      "display": "flex",
      "flexDirection": "column",
      "rowGap": "2rem",
      "width": "100%"
    }
  }, __cssprop("h1", {
    css: {
      "textAlign": "center",
      "fontSize": "3.75rem",
      "lineHeight": "1"
    },
    className: "yx-heading"
  }, "Namn"), __cssprop("div", {
    css: {
      "display": "grid",
      "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
      "gap": "1rem"
    }
  }, __cssprop("div", {
    css: {
      "maxWidth": "65ch",
      "width": "100%"
    }
  }, __cssprop(Parchment, null, __cssprop(KinNameList, {
    title: 'Eländare',
    nameFunc: getRandomEländerName
  }))), __cssprop("div", {
    css: {
      "maxWidth": "65ch",
      "width": "100%"
    }
  }, __cssprop(Parchment, null, __cssprop(KinNameList, {
    title: 'Alderlänningar',
    nameFunc: getRandomAlderlänningarName
  }))), __cssprop("div", {
    css: {
      "maxWidth": "65ch",
      "width": "100%"
    }
  }, __cssprop(Parchment, null, __cssprop(KinNameList, {
    title: 'Aslener',
    nameFunc: getRandomAslenerName
  })))));
};