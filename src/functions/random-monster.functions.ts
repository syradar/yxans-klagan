import { compose, prop } from 'rambda'
import { TFunction } from 'react-i18next'
import {
  armorChoices,
  defaultMonsterLimbs,
  headChoices,
  homes,
  limbChoices,
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
  HeadChoiceWithCount,
  LimbChoicesWithAmount,
  MonsterArmor,
  MonsterAttacks,
  MonsterAttackViewModel,
  MonsterDescription,
  MonsterDescriptionViewModel,
  MonsterHome,
  MonsterLimbs,
  MonsterMotivation,
  MonsterMovement,
  MonsterSkillListItem,
  MonsterTrait,
  MonsterWeakness,
  RandomMonster,
  RandomMonsterViewModel,
  TailChoices,
  WeightedRandomMonsterChoice,
} from '../models/monster.model'
import { MonsterSkillsValues } from '../models/skills.model'
import { range } from './array.functions'
import { createAttributesViewModel } from './attributes.functions'
import {
  chooseFromChoiceString,
  rollD3,
  WeightedChoice,
  weightedRandom,
  weightedRandomConsume,
} from './dice.functions'
import { maybe, numberToBooleans } from './utils.functions'

export const createRandomMonster = (): RandomMonster => {
  const { size, strength } = weightedRandom(sizes).value
  const { type, agility } = weightedRandom(types).value
  const headOptions = getHeads(headChoices)
  const tail = weightedRandom(tailChoices).value
  const limbs = rollForMonsterLimbs(limbChoices)

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
    description: {
      heads: headOptions,
      tail,
      limbs,
    },
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

export const createRandomMonsterViewModelFromRandomMonster =
  (t: TFunction<('monsters' | 'common')[]>) =>
  (rm: RandomMonster): RandomMonsterViewModel => ({
    ...rm,
    description: createDescription(rm.description, t),
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
  })

const applyMonsterTraits = (rm: RandomMonster): RandomMonster =>
  rm.traits.reduce((acc, cur) => cur.apply(acc), rm)

export const createRandomMonsterViewModel = (
  t: TFunction<('monsters' | 'common')[]>,
) =>
  compose(
    createRandomMonsterViewModelFromRandomMonster(t),
    applyMonsterTraits,
    createRandomMonster,
  )()

const rollForMonsterLimbs = (
  choices: WeightedRandomMonsterChoice<LimbChoicesWithAmount>[],
): MonsterLimbs => {
  const allLimbs: MonsterLimbs[] = []

  let rolls = 0
  let loopCondition = true

  while (loopCondition) {
    const { key, monsterLimbs } = weightedRandom(choices).value

    allLimbs.push(monsterLimbs())
    rolls += 1

    loopCondition = key === 'Wings' && rolls < 10
  }

  return allLimbs.reduce(
    (acc, cur) => ({
      Arms: acc.Arms + cur.Arms,
      Tentacles: acc.Tentacles + cur.Tentacles,
      Legs: acc.Legs + cur.Legs,
      Wings: acc.Wings + cur.Wings,
    }),
    { ...defaultMonsterLimbs },
  )
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

const getHeads = (
  choices: WeightedRandomMonsterChoice<HeadChoiceWithCount>[],
): HeadChoiceWithCount[] => {
  let totalRolls = 0
  let rollsLeft = 1
  const heads: HeadChoiceWithCount[] = []

  while (rollsLeft > 0) {
    const head = weightedRandom(choices).value
    heads.push(head)
    totalRolls += 1

    if (head.key === 'RollTwice' && totalRolls < 10) {
      rollsLeft += 2
    }

    rollsLeft -= 1
  }

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
  if (motivation !== 'Injured') {
    return [[], traitsList]
  }

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

export const getMonsterTraits = (
  numberOfTraits: D3,
  traitsList: WeightedRandomMonsterChoice<MonsterTrait>[],
): MonsterTrait[] =>
  range(numberOfTraits).reduce(
    (acc, _) => {
      const [chosen, rest] = weightedRandomConsume(acc.traitsLeft)

      return {
        traits: [...acc.traits, chosen.value],
        traitsLeft: rest,
      }
    },
    { traitsLeft: [...traitsList], traits: [] as MonsterTrait[] },
  ).traits

export const getMonsterWeakness = (): MonsterWeakness =>
  weightedRandom(monsterWeakness).value

export const getMonsterSkillListItems = (
  skills: MonsterSkillsValues,
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
  heads: HeadChoices[],
  limbs: MonsterLimbs,
) => {
  return {
    acidGlands: traits.some((t) => t.name === 'Trait.AcidGlands.Name'),
    fireGlands: traits.some((t) => t.name === 'Trait.FireGlands.Name'),
    tail: tailKey !== 'None',
    claws: limbs.Arms > 0,
    fangs: heads.every((choice) => choice !== 'Missing'),
    horn: heads.some((choice) => choice !== 'HornWithCount'),
    legs: limbs.Legs > 0,
    tentacles: limbs.Tentacles > 0,
    undead: traits.some((t) => t.name === 'Trait.Undead.Name'),
    wings: limbs.Wings > 0,
    hasLimbs:
      limbs.Arms > 0 ||
      limbs.Legs > 0 ||
      limbs.Tentacles > 0 ||
      limbs.Wings > 0,
  }
}

const createMonsterAttacks = (
  allMonsterAttacks: MonsterAttacks,
  rm: RandomMonster,
): MonsterAttackViewModel[] =>
  Object.values(allMonsterAttacks).reduce((acc, cur) => {
    if (cur.valid(rm)) {
      acc.push({
        ...cur,
        range: `Range.${cur.range}`,
        damage: cur.damage && cur.damage(rm),
        attack: cur.attack && cur.attack(rm),
      })
    }

    return acc
  }, [] as MonsterAttackViewModel[])

const createMonsterSkills = (
  skillValueChoice: string,
): MonsterSkillsValues => ({
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
  { heads, limbs, tail }: MonsterDescription,
  t: TFunction<('monsters' | 'common')[]>,
): MonsterDescriptionViewModel => {
  const [lastHead, ...restOfHeads] = heads.map(({ key, count }) =>
    t(`Head.${key}`, { count }),
  )

  const tailDescription =
    tail.key !== 'None' ? t(`Tail.${tail.key}`) : undefined

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
