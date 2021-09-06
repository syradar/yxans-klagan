import React, { useState } from '../../_snowpack/pkg/react.js';
import { Button, Stepper } from '../components/index.js';
import DiceDisplay from '../components/dice-display.js';
import { Parchment } from '../components/index.js';
import { range } from '../functions/array.functions.js';
import { countSuccesses, getRandomInt } from '../functions/dice.functions.js';
import { jsx as __cssprop } from "../../_snowpack/pkg/@emotion/react.js";
export const DiceRollerPage = () => {
  const [diceResults, setDiceResult] = useState({
    attribute: [],
    skill: [],
    gear: [],
    artifact: []
  });
  const [successes, setSuccesses] = useState(0);

  const rollDice = () => {
    const attributeResults = range(attributeDiceAmount).map(_ => getRandomInt());
    const skillResults = range(skillDiceAmount).map(_ => getRandomInt());
    const results = {
      attribute: attributeResults,
      skill: skillResults,
      gear: [],
      artifact: []
    };
    setDiceResult(results);
    setSuccesses([...results.attribute, ...results.skill].reduce((acc, cur) => acc + countSuccesses(cur), 0));
  };

  const [attributeDiceAmount, setAttributeDiceAmount] = useState(1);

  const attributeDiceAmountChanged = value => {
    setAttributeDiceAmount(value);
  };

  const [skillDiceAmount, setSkillDiceAmount] = useState(0);

  const skillDiceAmountChanged = value => {
    setSkillDiceAmount(value);
  };

  return __cssprop("div", {
    css: {
      "display": "flex",
      "flexDirection": "column",
      "rowGap": "2rem"
    }
  }, __cssprop("h1", {
    css: {
      "textAlign": "center",
      "fontSize": "3.75rem",
      "lineHeight": "1"
    },
    className: "yx-heading"
  }, "T\xE4rningar"), __cssprop(Parchment, null, __cssprop("h2", {
    css: {
      "fontSize": "2.25rem",
      "lineHeight": "2.5rem",
      "textAlign": "center"
    },
    className: "yx-heading"
  }, "T\xE4rningsrullare"), __cssprop("div", null, "Lyckade: ", successes), __cssprop("div", {
    css: {
      "display": "flex",
      "flexWrap": "wrap",
      "gap": "0.5rem",
      "marginBottom": "1rem"
    }
  }, __cssprop(Stepper, {
    id: 'attributes',
    label: 'Attribut',
    min: 1,
    max: 6,
    value: attributeDiceAmount,
    onChange: attributeDiceAmountChanged
  }), __cssprop(Stepper, {
    id: 'attributes',
    label: 'Färdighet',
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  }), __cssprop(Stepper, {
    id: 'attributes',
    label: 'Gear',
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  }), __cssprop(Stepper, {
    id: 'attributes',
    label: 'Artefakt',
    min: 0,
    max: 5,
    value: skillDiceAmount,
    onChange: skillDiceAmountChanged
  })), diceResults.attribute.length > 0 && __cssprop(React.Fragment, null, __cssprop("div", null, "Attribut"), diceResults.attribute.map((val, index) => __cssprop("div", {
    key: index
  }, __cssprop(DiceDisplay, {
    value: val
  })))), diceResults.skill.length > 0 && __cssprop(React.Fragment, null, __cssprop("div", null, "F\xE4rdighet"), diceResults.skill.map((val, index) => __cssprop("div", {
    key: index
  }, __cssprop(DiceDisplay, {
    value: val
  })))), __cssprop(Button, {
    variant: "primary",
    onClick: () => rollDice()
  }, "Sl\xE5 t\xE4rning"), __cssprop(Button, {
    variant: "secondary"
  }, "Pressa slag"), __cssprop(Button, {
    isSmall: true
  }, "st\xE4ng")));
};