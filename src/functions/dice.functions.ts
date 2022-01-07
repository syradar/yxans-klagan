import { compose, pluck, sum } from 'rambda'
import { D2, D3, D4, D6, D66, D8 } from '../models/fbl-dice.model'
import { range } from './array.functions'

/**
 * Can be used for any roll
 */
export const countSuccesses = (roll: number): number =>
  roll < 6 ? 0 : Math.floor(roll / 2) - 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
export function getRandomInt(min = 1, max = 6) {
  min = Math.ceil(min)
  max = Math.floor(max)

  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const rollD2 = (): D2 => getRandomInt(1, 2) as D2

export const rollD3 = (): D3 => getRandomInt(1, 3) as D3

export const rollD4 = (): D4 => getRandomInt(1, 4) as D4

export const rollD6 = (): D6 => getRandomInt(1, 6) as D6

export const rollD8 = (): D8 => getRandomInt(1, 8) as D8

export const rollD66 = (): D66 => {
  const tens = rollD6() * 10
  const ones = rollD6()

  return (tens + ones) as D66
}

export const parseD6String = (str: string): number => {
  const parts = str.split('D')

  if (parts[0] === '') {
    return 1
  }

  return parseInt(parts[0], 10)
}

export const parseChoiceString = (str: string): number[] =>
  str
    .split('|')
    .map((c) => c.split('^').map((a) => parseInt(a, 10) ?? 1))
    .map((cs) => range(cs.length === 2 ? cs[1] : 1).map((_) => cs[0]))
    .flat()

export const choose = <T>(arr: readonly T[]): T =>
  arr[getRandomInt(0, arr.length - 1)]

export const chooseFromChoiceString = compose(choose, parseChoiceString)

export interface WeightedChoice {
  weight: number
}

export const weightedRandomConsume = <T extends WeightedChoice>(
  probabilities: T[],
): [T, T[]] => {
  const totalWeight = sum(pluck('weight', probabilities))
  const randomInt = getRandomInt(0, totalWeight)

  if (probabilities.length === 1) {
    console.log('consume - totalWeight', totalWeight)
    console.log('consume - randomInt', randomInt)
  }

  const chosen = probabilities.reduce(
    (acc, cur, index) => {
      if (acc.done > -1) {
        return acc
      }

      const newLeft = acc.left - cur.weight

      if (newLeft <= 0) {
        return {
          left: 0,
          done: index,
          data: cur,
        }
      }

      return {
        ...acc,
        left: newLeft,
      }
    },
    { left: randomInt, done: -1, data: { weight: 0 } as T },
  )

  const rest = probabilities.filter((_val, index) => index !== chosen.done)

  return [chosen.data, rest]
}

export const weightedRandom = <T extends WeightedChoice>(
  probabilities: T[],
): T => weightedRandomConsume(probabilities)[0]
