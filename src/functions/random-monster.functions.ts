import { TFunction } from 'react-i18next'
import { headChoices, limbs, sizes, types } from '../data/random-monster.data'
import {
  HeadChoices,
  LimbChoices,
  MonsterLimbs,
  RandomMonster,
} from '../models/monster.model'
import { getRandomInt, getRandomT6, weightedRandom } from './dice.functions'

export const createRandomMonster = (
  t: TFunction<('monsters' | 'common')[]>,
): RandomMonster => {
  const { size, strength } = weightedRandom(sizes).value
  const { type, agility } = weightedRandom(types).value
  const [lastHead, ...restOfHeads] = getHeads().map(({ key, count }) =>
    t(`Head.${key}`, { count }),
  )

  return {
    name: 'ted',
    attributes: { strength: strength(), agility },
    size,
    type,
    limbs: getMonsterLimbs(),
    description: {
      head:
        restOfHeads.length > 0
          ? `${restOfHeads.join(', ')} & ${lastHead}`
          : lastHead,
    },
  }
}

const getMonsterLimbs = (): MonsterLimbs =>
  getLimbs().reduce(
    (acc, cur) => {
      acc.Arms += cur.Arms
      acc.Tentacles += cur.Tentacles
      acc.Legs += cur.Legs
      acc.Wings += cur.Wings

      return acc
    },
    {
      Arms: 0,
      Legs: 0,
      Tentacles: 0,
      Wings: 0,
    },
  )

const getLimbs = (): MonsterLimbs[] => {
  const allLimbs: MonsterLimbs[] = []

  let rolls = 0
  let chosenLimbs = weightedRandom(limbs).value

  do {
    chosenLimbs = weightedRandom(limbs).value

    const monsterLimbs = chosenLimbsToMonsterLimbs(chosenLimbs)

    allLimbs.push(monsterLimbs)
    rolls += 1
  } while (chosenLimbs === 'Wings' && rolls < 10)

  return allLimbs
}

const chosenLimbsToMonsterLimbs = (lc: LimbChoices): MonsterLimbs => {
  const monsterLimbs: MonsterLimbs = {
    Arms: 0,
    Legs: 0,
    Tentacles: 0,
    Wings: 0,
  }
  switch (lc) {
    case 'Tentacles':
      return {
        ...monsterLimbs,
        Tentacles: getRandomT6() + 2,
      }
    case 'TwoLegs':
      return {
        ...monsterLimbs,
        Legs: 2,
      }
    case 'TwoLegsTwoArms':
      return {
        ...monsterLimbs,
        Legs: 2,
        Arms: 2,
      }
    case 'FourLegs':
      return {
        ...monsterLimbs,
        Legs: 4,
      }
    case 'FourLegsTwoArms':
      return {
        ...monsterLimbs,
        Legs: 4,
        Arms: 2,
      }
    case 'Wings':
      return {
        ...monsterLimbs,
        Wings: 2,
      }
    case 'Many':
      return {
        ...monsterLimbs,
        Legs: getRandomInt(1, 3) * 2 + 2,
        Arms: getRandomInt(1, 3) * 2 + 2,
      }
    case 'None':
    default:
      return {
        ...monsterLimbs,
      }
  }
}

const getHeads = (): {
  key: HeadChoices
  count?: number
}[] => {
  const heads: {
    key: HeadChoices
    count?: number
  }[] = []

  let rolls = 1
  let head: { key: HeadChoices; count?: number }

  do {
    head = weightedRandom(headChoices).value

    if (head.key === 'RollTwice') {
      rolls += 2
    } else {
      heads.push(head)
    }

    rolls -= 1
  } while (rolls > 0 && rolls < 10)

  return heads.filter((h) => h.key !== 'RollTwice')
}
