import { pluck, sum } from 'rambda'
import { D6, D66 } from '../models/fbl-dice.model'

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

export const getRandomT6 = (): D6 => getRandomInt(1, 6) as D6

export const getRandomT8 = () => getRandomInt(1, 8)

export const getRandomT66 = (): D66 => {
  const tens = getRandomT6() * 10
  const ones = getRandomT6()

  return (tens + ones) as D66
}

export const choose = <T>(arr: readonly T[]): T =>
  arr[getRandomInt(0, arr.length - 1)]

export interface WeightedChoice {
  weight: number
}

export const weightedRandom = <T extends WeightedChoice>(
  probabilities: T[],
): T => {
  const totalWeight = sum(pluck('weight', probabilities))
  const randomInt = getRandomInt(0, totalWeight)

  const chosen = probabilities.reduce(
    (acc, cur) => {
      if (acc.done) {
        return acc
      }

      const newLeft = acc.left - cur.weight

      if (newLeft <= 0) {
        return {
          left: 0,
          done: true,
          data: cur,
        }
      }

      return {
        ...acc,
        left: newLeft,
      }
    },
    { left: randomInt, done: false, data: { weight: 0 } as T },
  )

  return chosen.data
}
