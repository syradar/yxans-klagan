import { TFunction } from 'react-i18next'
import {
  armorChoices,
  headChoices,
  homes,
  limbs,
  monsterMotivation,
  monsterSkillValues,
  monsterTraits,
  monsterWeakness,
  movementTypes,
  sizes,
  tailChoices,
  types,
} from '../data/random-monster.data'
import { D3 } from '../models/fbl-dice.model'
import {
  HeadChoices,
  LimbChoices,
  MonsterHome,
  MonsterLimbs,
  MonsterMovement,
  MonsterTrait,
  RandomMonster,
  RandomMonsterViewModel,
  MonsterWeakness,
  WeightedRandomMonsterChoice,
  MonsterMotivation,
  MonsterSkills,
  MonsterSkillListItem,
} from '../models/monster.model'
import { range } from './array.functions'
import { createAttributesViewModel } from './attributes.functions'
import {
  getRandomInt,
  rollD3,
  rollD6,
  WeightedChoice,
  weightedRandom,
  weightedRandomConsume,
} from './dice.functions'
import { maybe, numberToBooleans } from './utils.functions'

export const createRandomMonsterViewModel = (
  rm: RandomMonster,
  t: TFunction<('monsters' | 'common')[]>,
): RandomMonsterViewModel => {
  const randomMonsterWithAppliedTraits = rm.traits.reduce(
    (acc, cur) => cur.apply(acc),
    rm,
  )

  const rmvm: RandomMonsterViewModel = {
    ...randomMonsterWithAppliedTraits,
    movement: getMovement(weightedRandom, rm.attributes.agility),
    attributes: createAttributesViewModel(rm.attributes),
    traits: rm.traits.map(({ name, description }) => ({
      name,
      description: description(t),
    })),
    skills: getMonsterSkillListItems(rm.skills),
    motivation: {
      name: `Motivation.${rm.motivation}.Name`,
      description: `Motivation.${rm.motivation}.Description`,
    },
  }

  return rmvm
}

export const createRandomMonster = (
  t: TFunction<('monsters' | 'common')[]>,
): RandomMonster => {
  const { size, strength } = weightedRandom(sizes).value
  const { type, agility } = weightedRandom(types).value
  const [lastHead, ...restOfHeads] = getHeads().map(({ key, count }) =>
    t(`Head.${key}`, { count }),
  )
  const tail = weightedRandom(tailChoices).value
  const armor = weightedRandom(armorChoices).value
  const limbs = getMonsterLimbs()
  const tailDescription =
    tail.key !== 'None' ? t(`Tail.${tail.key}`) : undefined

  const motivation = weightedRandom(monsterMotivation).value

  const [hurt, traitsList] = getTraitListBasedOnMotivation(
    motivation,
    monsterTraits,
  )

  const traits = [getMonsterTraits(rollD3(), traitsList), hurt].flat()

  return {
    name: 'ted',
    attributes: { strength: strength(), agility },
    size,
    type,
    limbs,
    description: {
      head:
        restOfHeads.length > 0
          ? `${restOfHeads.join(', ')} & ${lastHead}`
          : lastHead,
      tail: tailDescription,
      limbs: getLimbsDescription(t, limbs, tailDescription),
    },
    damage: {
      Tail: 0 + tail.damage,
    },
    armor: {
      label: armor.key,
      values: numberToBooleans(armor.armor),
    },
    home: getMonsterHome(),
    skills: {
      Melee: weightedRandom(monsterSkillValues).value,
      Move: weightedRandom(monsterSkillValues).value,
      Scouting: weightedRandom(monsterSkillValues).value,
      Stealth: weightedRandom(monsterSkillValues).value,
    },
    traits,
    acidGlands: false,
    fireGlands: false,
    weakness: getMonsterWeakness(),
    motivation,
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

const getLimbsDescription = (
  t: TFunction<('monsters' | 'common')[]>,
  limbs: MonsterLimbs,
  tail: string | undefined,
): string => {
  const actualLimbs: [string, number][] = Object.entries(limbs)
    .filter(([_, value]) => value > 0)
    .map(([k, v]) => [`Limbs.${k}`, v]) as [string, number][]

  const limbsDescriptions =
    actualLimbs.length === 0
      ? [t('Limbs.None')]
      : actualLimbs.map(([key, value]) => `${value} ${t(key)}`)

  const tailDescription = [tail ? [tail] : []].flat()

  const [lastLimb, ...restOfLimbs] = [tailDescription, limbsDescriptions]
    .reverse()
    .flat()

  return restOfLimbs.length > 0
    ? `${t('TheMonsterHas')} ${restOfLimbs.join(', ')} & ${lastLimb}`
    : `${t('TheMonsterHas')} ${lastLimb}`
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
        Tentacles: rollD6() + 2,
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

export const getMovement = (
  randomFunc: <T extends WeightedChoice>(
    probabilities: T[],
  ) => T = weightedRandom,
  agility?: number,
): MonsterMovement => {
  const { type, distanceFn } = randomFunc(movementTypes).value

  return {
    distance: maybe(agility).map(distanceFn).withDefault(0),
    type,
  }
}

export const getMonsterHome = (
  randomFunc: <T extends WeightedChoice>(
    probabilities: T[],
  ) => T = weightedRandom,
): MonsterHome => {
  return randomFunc(homes).value
}

export const getTraitListBasedOnMotivation = (
  motivation: MonsterMotivation,
  traitsList: WeightedRandomMonsterChoice<MonsterTrait>[],
): [MonsterTrait[], WeightedRandomMonsterChoice<MonsterTrait>[]] => {
  if (motivation === 'Injured') {
    const hurt = monsterTraits.find((t) => t.value.name === 'Trait.Hurt.Name')
    const traitList = monsterTraits.filter(
      (t) => t.value.name !== 'Trait.Hurt.Name',
    )

    return [
      maybe(hurt)
        .map((a) => [a.value])
        .withDefault([]),
      traitList,
    ]
  }

  return [[], traitsList]
}

export const getMonsterTraits = (
  numberOfTraits: D3,
  traitsList: WeightedRandomMonsterChoice<MonsterTrait>[],
): MonsterTrait[] => {
  const result = range(numberOfTraits).reduce(
    (acc, _) => {
      const [chosen, rest] = weightedRandomConsume(acc.traitsLeft)

      return {
        traits: [...acc.traits, chosen.value],
        traitsLeft: rest,
      }
    },
    { traitsLeft: [...traitsList], traits: [] as MonsterTrait[] },
  )

  return result.traits
}

export const getMonsterWeakness = (): MonsterWeakness =>
  weightedRandom(monsterWeakness).value

export const getMonsterSkillListItems = (
  skills: MonsterSkills,
): MonsterSkillListItem[] => {
  return [
    skills.Melee > 0 ? [{ name: `Skills.Melee`, value: skills.Melee }] : [],
    skills.Move > 0 ? [{ name: `Skills.Move`, value: skills.Move }] : [],
    skills.Scouting > 0
      ? [{ name: `Skills.Scouting`, value: skills.Scouting }]
      : [],
    skills.Stealth > 0
      ? [{ name: `Skills.Stealth`, value: skills.Scouting }]
      : [],
  ].flat()
}
