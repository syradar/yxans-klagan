import React from '../../_snowpack/pkg/react.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";

const stepButtonStyles = () => [{
  "fontWeight": "700",
  "paddingTop": "0px",
  "paddingBottom": "0px",
  "paddingLeft": "0.25rem",
  "paddingRight": "0.25rem",
  "textAlign": "center",
  "textTransform": "uppercase",
  "letterSpacing": "0.025em",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  }
}, {
  "borderWidth": "2px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))",
  "borderRadius": "0px"
}, {
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(245, 158, 11, var(--tw-bg-opacity))"
  }
}];

const Stepper = ({
  value,
  id,
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

  const handleChange = e => {
    onChange(parseInt(e, 10) || 0);
  };

  return __cssprop("div", {
    css: twProps
  }, label && __cssprop("label", {
    css: {
      "display": "block"
    },
    htmlFor: id
  }, label), __cssprop("div", {
    css: {
      "width": "auto",
      "display": "inline-flex"
    }
  }, __cssprop("button", {
    css: stepButtonStyles(),
    type: "button",
    onClick: decrement,
    "aria-controls": id
  }, "\u2013"), __cssprop("input", {
    css: [...stepButtonStyles(), {
      "borderLeftWidth": "0px",
      "borderRightWidth": "0px"
    }, {
      '::-webkit-inner-spin-button': {
        ' -webkit-appearance': 'none',
        margin: '0'
      },
      '::-webkit-outer-spin-button': {
        ' -webkit-appearance': 'none',
        margin: '0'
      }
    }],
    type: "number",
    step: "1",
    id: id,
    value: value,
    min: min,
    max: max,
    onChange: e => handleChange(e.target.value)
  }), __cssprop("button", {
    css: stepButtonStyles(),
    type: "button",
    onClick: increment,
    "aria-controls": id
  }, "+")));
};

export default Stepper;