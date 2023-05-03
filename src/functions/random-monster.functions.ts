import { compose, prop } from 'ramda'
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
  IntermediateRandomMonster,
  LimbChoicesWithAmount,
  MonsterArmor,
  MonsterAttack,
  MonsterAttackRequirements,
  MonsterAttacks,
  MonsterAttackViewModel,
  MonsterDamageModifiers,
  MonsterDescription,
  MonsterDescriptionItemViewModel,
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
  WeightedRandomFunc,
} from './dice.functions'
import { maybe, numberToBooleans } from './utils.functions'
import { TranslationKey } from '../store/translations/translation.model'

export const createRandomMonster = (): RandomMonster => {
  const { size, strength, damage: sizeDamage } = weightedRandom(sizes).value
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
    name: 'common:Empty',
    attributes: { strength: strength(), agility, empathy: 0, wits: 0 },
    size,
    type,
    limbs,
    description: {
      heads: headOptions,
      tail,
      limbs,
    },
    damageModifiers: createDamageModifiers(tail.damage, sizeDamage),
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

export const createRandomMonsterViewModelFromRandomMonster = (
  rm: RandomMonster,
): RandomMonsterViewModel => {
  const movement = getMovement(weightedRandom, rm.attributes.agility)

  return {
    ...rm,
    description: createDescription(rm.description),
    movement,
    attributes: createAttributesViewModel(rm.attributes),
    traits: rm.traits.map(({ name, description }) => ({
      name,
      description: description(),
    })),
    skills: getMonsterSkillListItems(rm.skills),
    motivation: {
      name: `monster:Motivation.${rm.motivation}.Name`,
      description: `monster:Motivation.${rm.motivation}.Description`,
    },
    attacks: createMonsterAttacks(monsterAttacks, { ...rm, movement }),
  }
}

const applyMonsterTraits = (rm: RandomMonster): RandomMonster =>
  rm.traits.reduce((acc, cur) => cur.apply(acc), rm)

export const createRandomMonsterViewModel = compose(
  createRandomMonsterViewModelFromRandomMonster,
  applyMonsterTraits,
  createRandomMonster,
)

const rollForMonsterLimbs = (
  choices: WeightedChoice<LimbChoicesWithAmount>[],
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
  limbs: MonsterLimbs,
  tail: TranslationKey<'monster'> | undefined,
): MonsterDescriptionItemViewModel[] => {
  const actualLimbs: [TranslationKey<'monster'>, number][] = Object.entries(
    limbs,
  ).reduce(
    (acc, [limbName, amountOfLimb]) =>
      amountOfLimb > 0
        ? [
            ...acc,
            [
              `monster:Limbs.${limbName}` as TranslationKey<'monster'>,
              amountOfLimb,
            ],
          ]
        : acc,
    [] as [TranslationKey<'monster'>, number][],
  )

  const limbsDescriptions: MonsterDescriptionItemViewModel[] =
    actualLimbs.length === 0
      ? [{ key: 'monster:Limbs.None' }]
      : actualLimbs.map(([key, value]) => ({
          key,
          count: value,
        }))

  const tailDescription = [tail ? [{ key: tail }] : []].flat()

  return [limbsDescriptions, tailDescription].flat()
}

const getHeads = (
  choices: WeightedChoice<HeadChoiceWithCount>[],
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
  randomFunc: WeightedRandomFunc = weightedRandom,
  agility?: number,
): MonsterMovement => {
  const { type, distanceFn } = randomFunc(movementTypes).value

  return {
    distance: maybe(agility).map(distanceFn).withDefault(0),
    type,
  }
}

export const getMonsterHome = (
  randomFunc: WeightedRandomFunc = weightedRandom,
): MonsterHome => randomFunc(homes).value

export const getTraitListBasedOnMotivation = (
  motivation: MonsterMotivation,
  traitsList: WeightedChoice<MonsterTrait>[],
): [MonsterTrait[], WeightedChoice<MonsterTrait>[]] => {
  if (motivation !== 'Injured') {
    return [[], traitsList]
  }

  const hurt = monsterTraits.find(
    (t) => t.value.name === 'monster:Trait.Hurt.Name',
  )
  const traitList = monsterTraits.filter(
    (t) => t.value.name !== 'monster:Trait.Hurt.Name',
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
  traitsList: WeightedChoice<MonsterTrait>[],
): MonsterTrait[] =>
  range(numberOfTraits).reduce(
    (acc, _) => {
      const { chosen, rest } = weightedRandomConsume(acc.traitsLeft)

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
    skills.Melee > 0
      ? [
          {
            name: `monster:Skills.Melee` as TranslationKey,
            value: skills.Melee,
          },
        ]
      : [],
    skills.Move > 0
      ? [{ name: `monster:Skills.Move` as TranslationKey, value: skills.Move }]
      : [],
    skills.Scouting > 0
      ? [
          {
            name: `monster:Skills.Scouting` as TranslationKey,
            value: skills.Scouting,
          },
        ]
      : [],
    skills.Stealth > 0
      ? [
          {
            name: `monster:Skills.Stealth` as TranslationKey,
            value: skills.Scouting,
          },
        ]
      : [],
  ].flat()
}

const createAttackRequirements = (
  traits: MonsterTrait[],
  tailKey: TailChoices,
  heads: HeadChoices[],
  limbs: MonsterLimbs,
): MonsterAttackRequirements => {
  return {
    acidGlands: traits.some((t) => t.name === 'monster:Trait.AcidGlands.Name'),
    fireGlands: traits.some((t) => t.name === 'monster:Trait.FireGlands.Name'),
    tail: tailKey !== 'None',
    spikedTail: tailKey === 'SpikedTail',
    claws: limbs.Arms > 0,
    fangs: heads.every((choice) => choice !== 'Missing'),
    horn: heads.some(
      (choice) => choice === 'HornWithCount' || choice === 'ElkHorns',
    ),
    legs: limbs.Legs > 0,
    tentacles: limbs.Tentacles > 0,
    undead: traits.some((t) => t.name === 'monster:Trait.Undead.Name'),
    wings: limbs.Wings > 0,
    hasLimbs:
      limbs.Arms > 0 ||
      limbs.Legs > 0 ||
      limbs.Tentacles > 0 ||
      limbs.Wings > 0,
    hasBeak: heads.some((h) => h === 'Beak'),
    canSpeak: traits.some(
      (t) =>
        t.name === 'monster:Trait.Intelligent.Name' ||
        t.name === 'monster:Trait.CanSpeak.Name',
    ),
    isPoisonous: traits.some((t) => t.name === 'monster:Trait.Poisonous.Name'),
    isSick: traits.some((t) => t.name === 'monster:Trait.Hurt.Name'),
  }
}

const createMonsterAttacks = (
  allMonsterAttacks: MonsterAttacks,
  rm: IntermediateRandomMonster,
): MonsterAttackViewModel[] => {
  const validAttacks: WeightedChoice<MonsterAttack>[] = Object.values(
    allMonsterAttacks,
  )
    .filter((a) => a.type !== 'Generic' && a.valid(rm))
    .map((a) => ({
      weight: a.chance * 1000,
      value: a,
    }))

  if (validAttacks.length < 6) {
    const genericAttacks = range(6 - validAttacks.length).map((_) => ({
      weight: allMonsterAttacks.Generic.chance * 1000,
      value: allMonsterAttacks.Generic,
    }))

    validAttacks.push(...genericAttacks)
  }

  return range(6).reduce(
    (
      acc: {
        validAttacksLeft: WeightedChoice<MonsterAttack>[]
        attackViewModels: MonsterAttackViewModel[]
      },
      _: number,
    ): {
      validAttacksLeft: WeightedChoice<MonsterAttack>[]
      attackViewModels: MonsterAttackViewModel[]
    } => {
      const { chosen, rest } = weightedRandomConsume(acc.validAttacksLeft)

      return {
        attackViewModels: [
          ...acc.attackViewModels,
          {
            description: chosen.value.description,
            type: chosen.value.type,
            range: chosen.value.range && `common:Range.${chosen.value.range}`,
            damage: chosen.value.damage && chosen.value.damage(rm),
            attack: chosen.value.attack && chosen.value.attack(rm),
            descriptionExtras:
              chosen.value.descriptionExtras &&
              chosen.value.descriptionExtras(rm),
          },
        ],
        validAttacksLeft: rest,
      }
    },
    {
      validAttacksLeft: [...validAttacks],
      attackViewModels: [] as MonsterAttackViewModel[],
    },
  ).attackViewModels
}

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
  (ac: WeightedChoice<MonsterArmor>[]) => weightedRandom(ac),
)

const createDescription = ({
  heads,
  limbs,
  tail,
}: MonsterDescription): MonsterDescriptionViewModel => {
  const tailDescription: TranslationKey<'monster'> | undefined =
    tail.key === 'SpikedTail'
      ? 'monster:Tail.SpikedTail'
      : tail.key === 'Tail'
      ? 'monster:Tail.Tail'
      : undefined

  return {
    head: heads.map(({ key, count }) => ({
      key: `monster:Head.${key}` as TranslationKey<'monster'>,
      count,
    })),
    tail: tailDescription,
    limbs: getLimbsDescription(limbs, tailDescription),
  }
}

const createDamageModifiers = (
  tailDamage: number,
  sizeDamage: number,
): MonsterDamageModifiers => ({
  Blunt: 0,
  Slash: 0,
  TailAttack: tailDamage,
  Size: sizeDamage,
  Telepathic: 0,
})
