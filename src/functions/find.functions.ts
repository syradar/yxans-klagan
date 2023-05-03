import { FindTable } from '../data/find.data'
import {
  Find,
  FindChance,
  FindLocation,
  FindType,
  FindValue,
  FindViewModel,
} from '../models/find.model'
import { weightLabelDict } from '../models/weight.model'
import { TranslationKey } from '../store/translations/translation.model'

import { range } from './array.functions'
import { parseD6String, rollD6, rollD66 } from './dice.functions'
import { capitalize } from './utils.functions'

export const rollFindValue = (
  fv: FindValue,
): { coins: number; label: TranslationKey }[] => {
  if (fv === 'None') return []

  const piles = fv.split(';')

  return piles.map((pile) => {
    const [dice, coin] = pile.split(' ')
    const numberOfD6ToRoll = parseD6String(dice)

    const coinValue = range(numberOfD6ToRoll)
      .map((_) => rollD6())
      .reduce((a, b) => a + b, 0)

    const coinLabel: TranslationKey = `common:Coin.${capitalize(
      coin,
    )}` as TranslationKey

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

export const createFindViewModel = (
  f: Find<FindType, FindChance, FindLocation>,
): FindViewModel => {
  return {
    ...f,
    weight: weightLabelDict[f.weight],
    value: rollFindValue(f.value),
  }
}
