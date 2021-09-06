import React, { useEffect, useRef, useState } from '../../_snowpack/pkg/react.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";

const Parchment = ({
  children
}) => {
  const [svgHeight, setSvgHeight] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef !== null) {
      setSvgHeight(contentRef.current?.clientHeight ?? 0);
    }
  });
  const dim = 98;
  const width = 2.5;
  return __cssprop("svg", {
    width: "100%",
    height: svgHeight,
    css: {
      "filter": "var(--tw-filter)",
      "--tw-drop-shadow": "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))"
    }
  }, __cssprop("defs", null, __cssprop("filter", {
    id: "filter",
    height: "1.4",
    width: "1.4"
  }, __cssprop("feTurbulence", {
    baseFrequency: "0.05",
    numOctaves: "2",
    type: "fractalNoise",
    result: "turbulence"
  }), __cssprop("feDisplacementMap", {
    in2: "turbulence",
    scale: "10",
    result: "displacement",
    xChannelSelector: "R",
    in: "SourceGraphic"
  }), __cssprop("feMergeNode", {
    in2: "SourceGraphic",
    in: "displacement",
    operator: "atop",
    result: "fbSourceGraphic"
  }))), __cssprop("rect", {
    filter: "url(#filter)",
    fill: "white",
    stroke: "black",
    strokeWidth: width,
    width: `${dim}%`,
    height: `${dim}%`,
    x: `${(100 - dim) / 2}%`,
    y: `${(100 - dim) / 2}%`
  }), __cssprop("foreignObject", {
    width: "100%",
    height: "100%"
  }, __cssprop("div", {
    css: {
      "paddingLeft": "2rem",
      "paddingRight": "2rem",
      "paddingTop": "4rem",
      "paddingBottom": "4rem"
    },
    ref: contentRef
  }, children && children)));
};

export default Parchment;