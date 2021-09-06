import React, { useState } from 'react'
import 'twin.macro'
import { Button, Stepper } from '../components'
import DiceDisplay from '../components/dice-display'
import { Parchment } from '../components'
import { range } from '../functions/array.functions'
import { countSuccesses, getRandomInt } from '../functions/dice.functions'

interface DiceResult {
  attribute: number[]
  skill: number[]
  gear: number[]
  artifact: number[]
}

export const DiceRollerPage = () => {
  const [diceResults, setDiceResult] = useState<DiceResult>({
    attribute: [],
    skill: [],
    gear: [],
    artifact: [],
  })
  const [successes, setSuccesses] = useState<number>(0)

  const rollDice = () => {
    const attributeResults = range(attributeDiceAmount).map((_) =>
      getRandomInt(),
    )
    const skillResults = range(skillDiceAmount).map((_) => getRandomInt())
    const results: DiceResult = {
      attribute: attributeResults,
      skill: skillResults,
      gear: [],
      artifact: [],
    }
    setDiceResult(results)
    setSuccesses(
      [...results.attribute, ...results.skill].reduce(
        (acc, cur) => acc + countSuccesses(cur),
        0,
      ),
    )
  }

  const [attributeDiceAmount, setAttributeDiceAmount] = useState(1)
  const attributeDiceAmountChanged = (value: number) => {
    setAttributeDiceAmount(value)
  }

  const [skillDiceAmount, setSkillDiceAmount] = useState(0)
  const skillDiceAmountChanged = (value: number) => {
    setSkillDiceAmount(value)
  }

  return (
    <div tw="flex flex-col gap-y-8">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Tärningar
      </h1>
      <Parchment>
        <h2 tw="text-4xl text-center" className="yx-heading">
          Tärningsrullare
        </h2>
        <div>Lyckade: {successes}</div>

        <div tw="flex flex-wrap gap-2 mb-4">
          <Stepper
            id={'attributes'}
            label={'Attribut'}
            min={1}
            max={6}
            value={attributeDiceAmount}
            onChange={attributeDiceAmountChanged}
          ></Stepper>
          <Stepper
            id={'attributes'}
            label={'Färdighet'}
            min={0}
            max={5}
            value={skillDiceAmount}
            onChange={skillDiceAmountChanged}
          ></Stepper>
          <Stepper
            id={'attributes'}
            label={'Gear'}
            min={0}
            max={5}
            value={skillDiceAmount}
            onChange={skillDiceAmountChanged}
          ></Stepper>
          <Stepper
            id={'attributes'}
            label={'Artefakt'}
            min={0}
            max={5}
            value={skillDiceAmount}
            onChange={skillDiceAmountChanged}
          ></Stepper>
        </div>

        {diceResults.attribute.length > 0 && (
          <>
            <div>Attribut</div>
            {diceResults.attribute.map((val, index) => (
              <div key={index}>
                <DiceDisplay value={val}></DiceDisplay>
              </div>
            ))}
          </>
        )}

        {diceResults.skill.length > 0 && (
          <>
            <div>Färdighet</div>
            {diceResults.skill.map((val, index) => (
              <div key={index}>
                <DiceDisplay value={val}></DiceDisplay>
              </div>
            ))}
          </>
        )}

        <Button variant="primary" onClick={() => rollDice()}>
          Slå tärning
        </Button>
        <Button variant="secondary">Pressa slag</Button>
        <Button isSmall>stäng</Button>
      </Parchment>
    </div>
  )
}
