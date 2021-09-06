import React, { useState } from '../../_snowpack/pkg/react.js';
import { range } from '../functions/array.functions.js';
import { Gender } from '../models/general.model.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";

const KinNameList = ({
  title,
  nameFunc
}) => {
  const randomNames = (count = 10) => ({
    female: range(count).map(_ => nameFunc(Gender.Female)),
    male: range(count).map(_ => nameFunc(Gender.Male))
  });

  const [names, setNames] = useState(randomNames());

  const getNames = () => setNames(randomNames());

  return __cssprop(React.Fragment, null, __cssprop("button", {
    css: {
      "display": "flex",
      "gap": "0.5rem",
      "alignItems": "center",
      "marginBottom": "1rem",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(217, 119, 6, var(--tw-text-opacity))"
      }
    },
    onClick: () => getNames()
  }, __cssprop("h2", {
    css: {
      "fontSize": "2.25rem",
      "lineHeight": "2.5rem",
      "textAlign": "center",
      "display": "flex"
    },
    className: "yx-heading"
  }, title), __cssprop("span", null, "\uD83D\uDD04")), __cssprop("div", {
    css: {
      "display": "grid",
      "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"
    }
  }, __cssprop("div", null, __cssprop("h3", {
    css: {
      "fontSize": "1.5rem",
      "lineHeight": "2rem"
    },
    className: "yx-heading"
  }, "Kvinnor"), names.female.length > 0 && __cssprop("ul", null, names.female.map((name, i) => __cssprop("li", {
    key: i
  }, name)))), __cssprop("div", null, __cssprop("h3", {
    css: {
      "fontSize": "1.5rem",
      "lineHeight": "2rem"
    },
    className: "yx-heading"
  }, "M\xE4n"), names.male.length > 0 && __cssprop("ul", null, names.male.map((name, i) => __cssprop("li", {
    key: i
  }, name))))));
};

export default KinNameList;