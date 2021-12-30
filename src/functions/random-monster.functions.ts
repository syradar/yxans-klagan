import { compose, prop } from 'rambda'
import { TFunction } from 'react-i18next'
import {
  armorChoices,
  headChoices,
  homes,
  limbs,
  monsterAttacks,
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
  MonsterArmor,
  MonsterAttacks,
  MonsterAttackViewModel,
  MonsterHome,
  MonsterLimbs,
  MonsterMotivation,
  MonsterMovement,
  MonsterSkillListItem,
  MonsterSkills,
  MonsterTrait,
  MonsterWeakness,
  RandomMonster,
  RandomMonsterViewModel,
  TailChoices,
  WeightedRandomMonsterChoice,
} from '../models/monster.model'
import { range } from './array.functions'
import { createAttributesViewModel } from './attributes.functions'
import {
  chooseFromChoiceString,
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
    attacks: createMonsterAttacks(monsterAttacks, rm),
  }

  return rmvm
}

export const createRandomMonster = (
  t: TFunction<('monsters' | 'common')[]>,
): RandomMonster => {
  const { size, strength } = weightedRandom(sizes).value
  const { type, agility } = weightedRandom(types).value
  const headOptions = getHeads()
  const tail = weightedRandom(tailChoices).value
  const limbs = sumMonsterLimbs(rollForMonsterLimbs())

  const motivation = weightedRandom(monsterMotivation).value
  const [hurt, traitsList] = getTraitListBasedOnMotivation(
    motivation,
    monsterTraits,
  )
  const traits = [getMonsterTraits(rollD3(), traitsList), hurt].flat()

  return {
    name: 'ted',
    attributes: { strength: strength(), agility, empathy: 0, wits: 0 },
    size,
    type,
    limbs,
    description: createDescription(headOptions, tail.key, limbs, t),
    damageModifiers: createDamageModifiers(tail.damage),
    armor: rollForArmor(armorChoices),
    home: getMonsterHome(),
    skills: createMonsterSkills(monsterSkillValues),
    traits,
    weakness: getMonsterWeakness(),
    motivation,
    attackRequirements: createAttackRequirements(
      traits,
      tail.key,
      headOptions.map((ho) => ho.key),
      limbs,
    ),
  }
}

const sumMonsterLimbs = (mls: MonsterLimbs[]): MonsterLimbs =>
  mls.reduce(
    (acc, cur) => ({
      Arms: acc.Arms + cur.Arms,
      Tentacles: acc.Tentacles + cur.Tentacles,
      Legs: acc.Legs + cur.Legs,
      Wings: acc.Wings + cur.Wings,
    }),
    { Arms: 0, Legs: 0, Tentacles: 0, Wings: 0 },
  )

const rollForMonsterLimbs = (): MonsterLimbs[] => {
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
  const actualLimbs: [string, number][] = Object.entries(limbs).reduce(
    (acc, [limbName, amountOfLimb]) =>
      amountOfLimb > 0 ? [...acc, [`Limbs.${limbName}`, amountOfLimb]] : acc,
    [] as [string, number][],
  )

  const limbsDescriptions =
    actualLimbs.length === 0
      ? [t('Limbs.None')]
      : actualLimbs.map(([key, value]) => `${value} ${t(key)}`)

  const tailDescription = [tail ? [tail] : []].flat()

  const [lastLimb, ...restOfLimbs] = [tailDescription, limbsDescriptions].flat()

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
): MonsterHome => randomFunc(homes).value

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

const createAttackRequirements = (
  traits: MonsterTrait[],
  tailKey: TailChoices,
  headChoices: HeadChoices[],
  limbs: MonsterLimbs,
) => {
  return {
    acidGlands: traits.some((t) => t.name === 'Trait.AcidGlands.Name'),
    fireGlands: traits.some((t) => t.name === 'Trait.FireGlands.Name'),
    tail: tailKey !== 'None',
    claws: limbs.Arms > 0,
    fangs: headChoices.every((choice) => choice !== 'Missing'),
    horn: headChoices.some((choice) => choice !== 'HornWithCount'),
    legs: limbs.Legs > 0,
    tentacles: limbs.Tentacles > 0,
    undead: traits.some((t) => t.name === 'Trait.Undead.Name'),
    wings: limbs.Wings > 0,
  }
}

const createMonsterAttacks = (
  allMonsterAttacks: MonsterAttacks,
  rm: RandomMonster,
) =>
  Object.values(allMonsterAttacks).reduce((acc, cur) => {
    if (cur.valid(rm)) {
      acc.push({
        ...cur,
        damage: cur.damage && cur.damage(rm),
        attack: cur.attack && cur.attack(rm),
      })
    }

    return acc
  }, [] as MonsterAttackViewModel[])

const createMonsterSkills = (skillValueChoice: string): MonsterSkills => ({
  Melee: chooseFromChoiceString(skillValueChoice),
  Move: chooseFromChoiceString(skillValueChoice),
  Scouting: chooseFromChoiceString(skillValueChoice),
  Stealth: chooseFromChoiceString(skillValueChoice),
})

const rollForArmor = compose(
  (ma: MonsterArmor) => ({
    label: ma.key,
    values: numberToBooleans(ma.armor),
  }),
  prop('value'),
  (ac: WeightedRandomMonsterChoice<MonsterArmor>[]) => weightedRandom(ac),
)

const createDescription = (
  headOptions: {
    key: HeadChoices
    count?: number | undefined
  }[],
  tailKey: TailChoices,
  limbs: MonsterLimbs,
  t: TFunction<('monsters' | 'common')[]>,
) => {
  const [lastHead, ...restOfHeads] = headOptions.map(({ key, count }) =>
    t(`Head.${key}`, { count }),
  )

  const tailDescription = tailKey !== 'None' ? t(`Tail.${tailKey}`) : undefined

  return {
    head:
      restOfHeads.length > 0
        ? `${restOfHeads.join(', ')} & ${lastHead}`
        : lastHead,
    tail: tailDescription,
    limbs: getLimbsDescription(t, limbs, tailDescription),
  }
}

const createDamageModifiers = (tailDamage: number) => ({
  Crushing: 0,
  Slashing: 0,
  TailAttack: tailDamage,
})
