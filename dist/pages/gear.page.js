import React from '../../_snowpack/pkg/react.js';
import { Parchment } from '../components/index.js';
import { getRandomInt } from '../functions/dice.functions.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";
export const GearPage = () => {
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
  }, "Utrustning"), __cssprop("div", {
    css: {}
  }, __cssprop(Parchment, null, __cssprop("h2", {
    css: {
      "textAlign": "center",
      "fontWeight": "700",
      "fontSize": "1.5rem",
      "lineHeight": "2rem",
      "textTransform": "uppercase",
      "marginBottom": "1rem"
    }
  }, "Vanliga tj\xE4nster"), __cssprop("table", {
    css: {
      "width": "100%"
    }
  }, __cssprop("thead", null, __cssprop("tr", null, __cssprop("td", {
    css: {
      "fontWeight": "700",
      "textTransform": "uppercase",
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Tj\xE4nst"), __cssprop("td", {
    css: {
      "fontWeight": "700",
      "textTransform": "uppercase",
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Pris"), __cssprop("td", {
    css: {
      "fontWeight": "700",
      "textTransform": "uppercase",
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Tillg\xE5ng"), __cssprop("td", {
    css: {
      "fontWeight": "700",
      "textTransform": "uppercase",
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }
  }, "Kommentar"))), __cssprop("tbody", null, regularServices.map((rs, i) => __cssprop("tr", {
    key: rs.service,
    css: {}
  }, __cssprop("td", {
    css: [{
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }, i % 2 === 0 && {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, rs.service), __cssprop("td", {
    css: [{
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }, i % 2 === 0 && {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, priceFormat(rs.price)), __cssprop("td", {
    css: [{
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }, i % 2 === 0 && {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, availabilityFormat(rs.availability)), __cssprop("td", {
    css: [{
      "paddingLeft": "0.5rem",
      "paddingRight": "0.5rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "borderBottomWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(156, 163, 175, var(--tw-border-opacity))"
    }, i % 2 === 0 && {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(229, 231, 235, var(--tw-bg-opacity))"
    }]
  }, rs.comment ?? ''))))))));
};

const availabilityFormat = a => {
  switch (a) {
    case `sällsynt`:
      {
        const count = getRandomInt() === 6 ? 1 : 0;
        return `Sällsynt (${count} ex)`;
      }

    case `ovanlig`:
      {
        const count = getRandomInt() >= 4 ? getRandomInt() : 0;
        return `Ovanlig (${count} ex)`;
      }

    case `vanlig`:
    default:
      return `Vanlig`;
  }
};

const priceFormat = sc => {
  const coins = formatCoinPurse(copperToCoinPurse(sc.copper));
  const per = perFormat(sc.per);
  return `${coins} ${per}`;
};

const formatCoinPurse = cp => {
  const gold = cp.gold > 0 ? `${cp.gold} guld` : ``;
  const silver = cp.silver > 0 ? `${cp.silver} silver` : ``;
  const copper = cp.copper > 0 ? `${cp.copper} koppar` : ``;
  return [gold, silver, copper].join(' ');
};

const copperToCoinPurse = copper => ({
  gold: Math.floor(copper / 100),
  silver: Math.floor(copper % 100 / 10),
  copper: copper % 100 % 10
});

const perFormat = per => {
  switch (per) {
    case 'day':
      return ' per dag';

    case 'hex':
      return ' per hexagon';

    default:
      return '';
  }
};

const regularServices = [{
  service: 'Bad på värdshus',
  availability: 'vanlig',
  price: {
    copper: 3
  }
}, {
  service: 'Klippning',
  availability: 'vanlig',
  price: {
    copper: 5
  }
}, {
  service: 'Läkarvård',
  availability: 'ovanlig',
  price: {
    copper: 5
  }
}, {
  service: 'Livvakt',
  availability: 'ovanlig',
  price: {
    copper: 10,
    per: 'day'
  }
}, {
  service: 'Tvätt av kläder',
  availability: 'vanlig',
  price: {
    copper: 5
  }
}, {
  service: 'Budbärare',
  availability: 'vanlig',
  price: {
    copper: 10,
    per: 'hex'
  }
}, {
  service: 'Vägtull',
  availability: 'vanlig',
  price: {
    copper: 2
  }
}, {
  service: 'Övernattning värdshus, sovsal',
  availability: 'vanlig',
  price: {
    copper: 2
  }
}, {
  service: 'Övernattning värdshus, eget rum',
  availability: 'vanlig',
  price: {
    copper: 5
  }
}, {
  service: 'Ståtligt härbärge',
  availability: 'ovanlig',
  price: {
    copper: 20
  }
}, {
  service: 'Skål stuvning',
  availability: 'vanlig',
  price: {
    copper: 3
  },
  comment: 'Täcker dagsbehovet av Mat.'
}, {
  service: 'Måltid på värdshus',
  availability: 'vanlig',
  price: {
    copper: 10
  },
  comment: 'Täcker dagsbehovet av Mat och Vatten.'
}, {
  service: 'Festmåltid',
  availability: 'ovanlig',
  price: {
    copper: 100
  },
  comment: 'Täcker dagsbehovet av Mat och Vatten.'
}, {
  service: 'Stop mjöd',
  availability: 'vanlig',
  price: {
    copper: 2
  },
  comment: 'Täcker dagsbehovet av Vatten.'
}, {
  service: 'Kalk vin',
  availability: 'ovanlig',
  price: {
    copper: 4
  },
  comment: 'Täcker dagsbehovet av Vatten.'
}, {
  service: 'Lärare',
  availability: 'ovanlig',
  price: {
    copper: 10,
    per: 'day'
  },
  comment: 'Kan vara dyrare'
}];