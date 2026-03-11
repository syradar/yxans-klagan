import { nanoid } from 'nanoid'
import { createAttributesViewModel } from '../../functions/attributes.functions'
import {
  weightedRandom,
  rollD3,
  WeightedChoice,
  WeightedRandomFunc,
  weightedRandomConsume,
  chooseFromChoiceString,
} from '../../functions/dice.functions'
import { maybe, numberToBooleans } from '../../functions/utils.functions'
import { D3 } from '../../models/fbl-dice.model'
import { MonsterSkillsValues } from '../../models/skills.model'
import { TranslationKey } from '../../store/translations/translation.model'
import {
  sizes,
  types,
  headChoices,
  tailChoices,
  limbChoices,
  monsterMotivation,
  monsterTraits,
  armorChoices,
  monsterSkillValues,
  monsterAttacks,
  defaultMonsterLimbs,
  movementTypes,
  homes,
  monsterWeakness,
} from './data/random-monster.data'
import {
  RandomMonster,
  RandomMonsterViewModel,
  LimbChoicesWithAmount,
  MonsterLimbs,
  MonsterDescriptionItemViewModel,
  HeadChoiceWithCount,
  MonsterMovement,
  MonsterHome,
  MonsterMotivation,
  MonsterTrait,
  MonsterWeakness,
  MonsterSkillListItem,
  TailChoices,
  HeadChoices,
  MonsterAttackRequirements,
  MonsterAttacks,
  IntermediateRandomMonster,
  MonsterAttackViewModel,
  MonsterAttack,
  MonsterArmor,
  MonsterDescription,
  MonsterDescriptionViewModel,
  MonsterDamageModifiers,
} from './monster.model'
import { range } from '../../functions/array.functions'
import { compose, prop } from 'ramda'
import { rangeTranslationDict } from '../../models/attack-range'

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
    id: nanoid(),
    name: 'common:empty',
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
      name: `monsters:motivation.${rm.motivation}.name`,
      description: `monsters:motivation.${rm.motivation}.description`,
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

    loopCondition = key === 'wings' && rolls < 10
  }

  return allLimbs.reduce(
    (acc, cur) => ({
      arms: acc.arms + cur.arms,
      tentacles: acc.tentacles + cur.tentacles,
      legs: acc.legs + cur.legs,
      wings: acc.wings + cur.wings,
    }),
    { ...defaultMonsterLimbs },
  )
}

const getLimbsDescription = (
  limbs: MonsterLimbs,
  tail: TranslationKey<'monsters'> | undefined,
): MonsterDescriptionItemViewModel[] => {
  const actualLimbs: [TranslationKey<'monsters'>, number][] = Object.entries(
    limbs,
  ).reduce(
    (acc, [limbName, amountOfLimb]) =>
      amountOfLimb > 0
        ? [
            ...acc,
            [
              `monsters:limbs.${limbName}` as TranslationKey<'monsters'>,
              amountOfLimb,
            ],
          ]
        : acc,
    [] as [TranslationKey<'monsters'>, number][],
  )

  const limbsDescriptions: MonsterDescriptionItemViewModel[] = actualLimbs.map(
    ([key, value]) => ({
      key,
      count: value,
    }),
  )

  const tailDescription = tail ? [{ key: tail }] : []
  const combined = [...limbsDescriptions, ...tailDescription]

  // CORRECCIÓN LÓGICA DE EXTREMIDADES:
  // Si no tiene brazos, ni piernas, NI COLA, dirá "ninguna extremidad".
  // Si tiene cola, simplemente omite la frase de extremidades y dice "Cola con pinchos".
  if (combined.length === 0) {
    return [{ key: 'monsters:limbs.none' as TranslationKey<'monsters'> }]
  }

  return combined
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

    if (head.key === 'roll_twice' && totalRolls < 10) {
      rollsLeft += 2
    }

    rollsLeft -= 1
  }

  return heads.filter((h) => h.key !== 'roll_twice')
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
  if (motivation !== 'injured') {
    return [[], traitsList]
  }

  const hurt = monsterTraits.find(
    (t) => t.value.name === 'monsters:trait.hurt.name',
  )
  const traitList = monsterTraits.filter(
    (t) => t.value.name !== 'monsters:trait.hurt.name',
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
    skills.melee > 0
      ? [
          {
            name: `monsters:skills.melee` as TranslationKey<'monsters'>,
            value: skills.melee,
          },
        ]
      : [],
    skills.move > 0
      ? [
          {
            name: `monsters:skills.move` as TranslationKey<'monsters'>,
            value: skills.move,
          },
        ]
      : [],
    skills.scouting > 0
      ? [
          {
            name: `monsters:skills.scouting` as TranslationKey<'monsters'>,
            value: skills.scouting,
          },
        ]
      : [],
    skills.stealth > 0
      ? [
          {
            name: `monsters:skills.stealth` as TranslationKey<'monsters'>,
            value: skills.stealth,
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
    acidGlands: traits.some((t) => t.name === 'monsters:trait.acid_glands.name'),
    fireGlands: traits.some((t) => t.name === 'monsters:trait.fire_glands.name'),
    tail: tailKey !== 'none',
    spikedTail: tailKey === 'spiked_tail',
    claws: limbs.arms > 0,
    fangs: heads.every((choice) => choice !== 'missing'),
    horn: heads.some(
      (choice) => choice === 'horn_with_count' || choice === 'elk_horns',
    ),
    legs: limbs.legs > 0,
    tentacles: limbs.tentacles > 0,
    undead: traits.some((t) => t.name === 'monsters:trait.undead.name'),
    wings: limbs.wings > 0,
    hasLimbs:
      limbs.arms > 0 ||
      limbs.legs > 0 ||
      limbs.tentacles > 0 ||
      limbs.wings > 0,
    hasBeak: heads.some((h) => h === 'beak'),
    canSpeak: traits.some(
      (t) =>
        t.name === 'monsters:trait.intelligent.name' ||
        t.name === 'monsters:trait.can_speak.name',
    ),
    isPoisonous: traits.some((t) => t.name === 'monsters:trait.poisonous.name'),
    isSick: traits.some((t) => t.name === 'monsters:trait.hurt.name'),
  }
}

const createMonsterAttacks = (
  allMonsterAttacks: MonsterAttacks,
  rm: IntermediateRandomMonster,
): MonsterAttackViewModel[] => {
  const validAttacks: WeightedChoice<MonsterAttack>[] = Object.values(
    allMonsterAttacks,
  )
    .filter((a) => a.type !== 'generic' && a.valid(rm))
    .map((a) => ({
      weight: a.chance * 1000,
      value: a,
    }))

  if (validAttacks.length < 6) {
    const genericAttacks = range(6 - validAttacks.length).map((_) => ({
      weight: allMonsterAttacks.generic.chance * 1000,
      value: allMonsterAttacks.generic,
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
            range:
              chosen.value.range && rangeTranslationDict[chosen.value.range],
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
  melee: chooseFromChoiceString(skillValueChoice),
  move: chooseFromChoiceString(skillValueChoice),
  scouting: chooseFromChoiceString(skillValueChoice),
  stealth: chooseFromChoiceString(skillValueChoice),
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
  const tailDescription: TranslationKey<'monsters'> | undefined =
    tail.key === 'spiked_tail'
      ? 'monsters:tail.spiked_tail'
      : tail.key === 'tail'
        ? 'monsters:tail.tail'
        : undefined

  return {
    head: heads.map(({ key, count }) => ({
      key: `monsters:head.${key}` as TranslationKey<'monsters'>,
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
  blunt: 0,
  slash: 0,
  tail_attack: tailDamage,
  size: sizeDamage,
  telepathic: 0,
})
