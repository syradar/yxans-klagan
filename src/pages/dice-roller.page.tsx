import React, { useState } from 'react'
import 'twin.macro'
import { Button } from '../components/Button'
import { DiceDisplay } from '../components/dice-display'
import { PageHeader } from '../components/page-header'
import { Parchment } from '../components/parchment'
import { Stepper } from '../components/stepper'
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
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>Tärningar</PageHeader>
      <Parchment>
        <div tw="flex flex-col gap-4">
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

          <div>
            <Button onClick={() => rollDice()}>Slå tärning</Button>
            <Button variant="secondary">Pressa slag</Button>
            <Button isSmall>stäng</Button>
          </div>

          <div>
            <div>Lyckade: {successes}</div>

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
          </div>
        </div>
      </Parchment>
    </div>
  )
}

export default DiceRollerPage
