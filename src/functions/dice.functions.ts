import { compose } from 'ramda'
import { None, Option, Some } from 'ts-results'
import { D2, D3, D4, D6, D66, D8 } from '../models/fbl-dice.model'
import { at, range } from './array.functions'
import { safeParseInt, safeParseIntOption } from './math.functions'

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

export const parseD6String = (str: string): number =>
  at(str.split('D'), 0)
    .andThen(p => (p === '' ? None : Some(p)))
    .andThen(safeParseIntOption)
    .unwrapOr(1)

export const parseChoiceString = (str: string): number[] =>
  str
    .split('|')
    .map(c => c.split('^').map(a => safeParseInt(a).unwrapOr(1)))
    .map(cs => range(at(cs, 1).unwrapOr(1)).map(_ => at(cs, 0).unwrapOr(1)))
    .flat()

export const choose = <T>(arr: readonly T[]): Option<T> => {
  const index = getRandomInt(0, arr.length - 1)
  const item = at(arr, index)

  return item
}

export const chooseFromChoiceString = compose(choose, parseChoiceString)

export type WeightedChoice<T> = {
  weight: number
  value: T
}

export const weightedRandomConsume = <T>(
  items: WeightedChoice<T>[],
): { chosen: WeightedChoice<T>; rest: WeightedChoice<T>[] } => {
  const totalWeight = items.reduce((acc, item) => acc + item.weight, 0)
  let randomWeight = getRandomInt(0, totalWeight)

  let result = {} as { chosen: WeightedChoice<T>; rest: WeightedChoice<T>[] }

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (!item) {
      continue
    }

    randomWeight = randomWeight - item.weight

    if (randomWeight <= 0) {
      result = {
        chosen: item,
        rest: items.filter((_, index) => index !== i),
      }
      break
    }
  }

  return result
}

export const weightedRandom = <T>(
  items: WeightedChoice<T>[],
): WeightedChoice<T> => weightedRandomConsume(items).chosen

export type WeightedRandomFunc = typeof weightedRandom
