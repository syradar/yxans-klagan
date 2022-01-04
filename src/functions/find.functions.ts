import { FindTable } from '../data/find.data'
import {
  Find,
  FindChance,
  FindLocation,
  FindType,
  FindValue,
  FindViewModel,
  Weight,
  WeightViewModel,
} from '../models/find.model'
import { range } from './array.functions'
import { parseD6String, rollD6, rollD66 } from './dice.functions'
import { capitalize } from './name.functions'

export const rollFindValue = (
  fv: FindValue,
): { coins: number; label: string }[] => {
  if (fv === 'None') return []

  const piles = fv.split(';')

  return piles.map((pile) => {
    const [dice, coin] = pile.split(' ')
    const numberOfD6ToRoll = parseD6String(dice)

    const coinValue = range(numberOfD6ToRoll)
      .map((_) => rollD6())
      .reduce((a, b) => a + b, 0)

    const coinLabel = `Coin.${capitalize(coin)}`

    return { coins: coinValue, label: coinLabel }
  })
}

export const getRandomFind = <F extends FindType, L extends FindLocation>(
  findTable: FindTable<F, L>,
): Find<F, FindChance, L> => {
  const roll = rollD66()
  const adjustedRoll = (roll < 31 ? 31 : roll) as FindChance

  return findTable[adjustedRoll]
}

const weightToViewModelDict: { [W in Weight]: WeightViewModel } = {
  0: 'None',
  0.25: 'Tiny',
  0.5: 'Light',
  1: 'Normal',
  2: 'Heavy',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
}

export const createFindViewModel = (
  f: Find<FindType, FindChance, FindLocation>,
): FindViewModel => {
  return {
    ...f,
    weight: weightToViewModelDict[f.weight],
    value: rollFindValue(f.value),
  }
}
