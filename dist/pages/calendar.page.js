import React from '../../_snowpack/pkg/react.js';
import { DayCounter, Parchment } from '../components/index.js';
import { range } from '../functions/array.functions.js';
import { getCal, getDayName, getDayNumber } from '../models/calendar.model.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";
export const CalendarPage = () => {
  const cal = getCal(1165);
  const months = Object.values(cal.months);

  const getMoonEmoji = moon => {
    if (typeof moon !== 'undefined') {
      return moon === 'full' ? '🌕' : '🌑';
    }

    return undefined;
  };

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
  }, "Kalender"), __cssprop("div", {
    css: {}
  }, __cssprop(Parchment, null, __cssprop("div", {
    css: {
      "textAlign": "center",
      "fontSize": "1.25rem",
      "lineHeight": "1.75rem",
      "marginBottom": "0.5rem",
      "textTransform": "none"
    },
    className: "yx-prose"
  }, "\xC5r ", cal.year, " E.S. (Efter skiftet)"), months.map(m => __cssprop("div", {
    css: {
      "marginBottom": "1rem"
    },
    key: m.name
  }, __cssprop("h2", {
    css: {
      "textAlign": "center",
      "fontWeight": "700",
      "fontSize": "1.5rem",
      "lineHeight": "2rem",
      "textTransform": "uppercase",
      "marginBottom": "1rem"
    }
  }, m.name), __cssprop("div", {
    css: {
      "display": "grid",
      "gridTemplateColumns": "repeat(7, minmax(0, 1fr))"
    }
  }, range(7).map(i => __cssprop("div", {
    css: {
      "borderWidth": "1px",
      "padding": "0.5rem",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "fontWeight": "700",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
    },
    key: i
  }, getDayName(i))), range(getDayNumber(m.days[0].name) - 1).map(i => __cssprop("div", {
    css: {
      "borderWidth": "1px",
      "padding": "0.5rem",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    },
    key: i
  })), m.days.map(d => __cssprop("div", {
    css: {
      "borderWidth": "1px",
      "padding": "0.5rem",
      "display": "flex",
      "gap": "0.5rem"
    },
    key: `${m.name}${d.number}`
  }, __cssprop("div", {
    css: {
      "display": "flex",
      "flexDirection": "column",
      "width": "1.25rem"
    }
  }, __cssprop("div", {
    css: [d.number === 1 ? {
      "fontWeight": "700"
    } : {}]
  }, d.number), __cssprop("div", null, getMoonEmoji(d.moon))), __cssprop(DayCounter, null)))))))));
};