import React from '../_snowpack/pkg/react.js';
import { Link, useRoutes } from '../_snowpack/pkg/react-router-dom.js';
import './App.css.proxy.js';
import { Parchment } from './components/index.js';
import YxansKlaganLogo from './logo.js';
import { CalendarPage } from './pages/calendar.page.js';
import { DiceRollerPage } from './pages/dice-roller.page.js';
import { GearPage } from './pages/gear.page.js';
import { NameGeneratorPage } from './pages/name-generator.page.js';
import { jsx as __cssprop } from "../_snowpack/pkg/@emotion/react.js";
const styles = {
  // Move long class sets out of jsx to keep it scannable
  // container: ({ hasBackground }: { hasBackground: boolean }) => [
  container: () => [{
    "display": "flex",
    "flexDirection": "column",
    "minHeight": "100vh",
    "height": "100%",
    "width": "100vw"
  } // hasBackground && tw`wbg-gradient-to-b from-electric to-ribbon`,
  //tw`bg-yellow-50`,
  ]
};

const App = () => {
  const routes = useRoutes([{
    path: '/',
    element: __cssprop(HomePage, null)
  }, {
    path: '/dice',
    element: __cssprop(DiceRollerPage, null)
  }, {
    path: '/names',
    element: __cssprop(NameGeneratorPage, null)
  }, {
    path: '/gear',
    element: __cssprop(GearPage, null)
  }, {
    path: '/calendar',
    element: __cssprop(CalendarPage, null)
  }]);
  return __cssprop("div", {
    className: "App",
    css: styles.container()
  }, __cssprop("div", {
    css: {
      "display": "flex",
      "height": "100%"
    }
  }, __cssprop("div", {
    css: {
      "display": "flex",
      "flexDirection": "column"
    }
  }, __cssprop("div", {
    css: {
      "padding": "0.5rem",
      "width": "16rem"
    }
  }, __cssprop(YxansKlaganLogo, null)), __cssprop("nav", {
    css: {
      "width": "25%",
      "fontSize": "1.25rem",
      "lineHeight": "1.75rem",
      "borderTopWidth": "2px",
      "borderBottomWidth": "2px",
      "marginBottom": "1rem",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))",
      "display": "flex",
      "flexDirection": "column",
      "rowGap": "1rem"
    },
    className: "yx-heading"
  }, __cssprop(Link, {
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(185, 28, 28, var(--tw-text-opacity))"
      }
    },
    to: "/"
  }, "Home"), __cssprop(Link, {
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(185, 28, 28, var(--tw-text-opacity))"
      }
    },
    to: "/names"
  }, "Namn"), __cssprop(Link, {
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(185, 28, 28, var(--tw-text-opacity))"
      }
    },
    to: "/gear"
  }, "Utrustning"), __cssprop(Link, {
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(185, 28, 28, var(--tw-text-opacity))"
      }
    },
    to: "/calendar"
  }, "Kalender"), __cssprop(Link, {
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(185, 28, 28, var(--tw-text-opacity))"
      }
    },
    to: "/dice"
  }, "T\xE4rningar"))), __cssprop("main", {
    css: {
      "width": "75%"
    }
  }, routes)));
};

export default App;

const HomePage = () => __cssprop(React.Fragment, null, __cssprop("h1", {
  css: {
    "fontSize": "2.25rem",
    "lineHeight": "2.5rem",
    "textAlign": "center",
    "marginBottom": "1rem"
  },
  className: "yx-heading"
}, "SV\xC4RDETS S\xC5NG"), __cssprop(Parchment, null, __cssprop("p", {
  className: "yx-prose"
}, "V\xE4lkomna till Sv\xE4rdets s\xE5ng. I detta bordsrollspel \xE4r ni inte hj\xE4ltar som utf\xF6r uppdrag p\xE5 order av andra \u2013 i st\xE4llet \xE4r ni \xE4ventyrare och skattletare fast beslutna att s\xE4tta ert eget m\xE4rke p\xE5 denna f\xF6rd\xF6mda v\xE4rld. Ni kommer att vandra genom det vilda landet, utforska gl\xF6mda gravar, k\xE4mpa mot fruktansv\xE4rda monster och \u2013 om ni lever l\xE4nge nog \u2013 bygga ert eget f\xE4ste och f\xF6rsvara det mot fiender. Under era \xE4ventyr kan ni avsl\xF6ja de m\xF6rka krafter som r\xF6r sig i skuggorna och till slut kan det bli ni som avg\xF6r Det gl\xF6mda landets \xF6de.")));