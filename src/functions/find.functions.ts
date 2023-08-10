import { FindTable } from '../data/find.data'
import { CoinType, coinLabelDict } from '../models/coin.model'
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

import { add, range } from './array.functions'
import { parseD6String, rollD6, rollD66 } from './dice.functions'
import { toOption } from './utils.functions'

export const rollFindValue = (
  fv: FindValue,
): { coins: number; label: TranslationKey<'common'> }[] => {
  if (fv === 'None') return []

  const piles = fv.split(';')

  return piles.map(pile => {
    const [dice, coin] = pile.split(' ')

    const coins = toOption(dice)
      .map(parseD6String)
      .map(range)
      .map(diceRange => diceRange.map(_ => rollD6()).reduce(add, 0))
      // parseD6String defaults to 1 so it will roll at least a 1 on its only die
      .unwrapOr(1)

    return {
      coins,
      label: coinLabelDict[coin as CoinType],
    }
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
