import _styled from "../../_snowpack/pkg/@emotion/styled.js";
import React, { useState } from '../../_snowpack/pkg/react.js';
import { range } from '../functions/array.functions.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";

const DayCounter = () => {
  const [quarters, setQuarters] = useState([false, false, false, false]);

  const spendQuarter = () => {
    const spent = (quarters.filter(q => q).length + 1) % 5;
    const qs = [...range(spent).map(_ => true), ...range(4 - spent).map(_ => false)];
    setQuarters(qs);
  };

  return __cssprop("button", {
    css: {
      "display": "grid",
      "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"
    },
    onClick: () => spendQuarter()
  }, __cssprop(Quarter, {
    spent: quarters[3],
    index: 0
  }), __cssprop(Quarter, {
    spent: quarters[0],
    index: 1
  }), __cssprop(Quarter, {
    spent: quarters[2],
    index: 2
  }), __cssprop(Quarter, {
    spent: quarters[1],
    index: 3
  }));
};

const Quarter = _styled.div(({
  spent,
  index
}) => [{
  "width": "1.5rem",
  "height": "1.5rem",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
}, index === 0 && {
  "borderTopLeftRadius": "9999px",
  "borderRightWidth": "0px",
  "borderBottomWidth": "0px"
}, index === 1 && {
  "borderTopRightRadius": "9999px",
  "borderBottomWidth": "0px"
}, index === 2 && {
  "borderBottomLeftRadius": "9999px",
  "borderRightWidth": "0px"
}, index === 3 && {
  "borderBottomRightRadius": "9999px"
}, spent && {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
}]);

export default DayCounter;