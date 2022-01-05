import {
  chooseFromChoiceString,
  getRandomInt,
  rollD2,
  rollD3,
  rollD6,
} from '../functions/dice.functions'
import { isEven } from '../functions/math.functions'
import { id, maybe, validNumber } from '../functions/utils.functions'
import {
  HeadChoiceWithCount,
  LimbChoicesWithAmount,
  MonsterArmor,
  MonsterAttacks,
  MonsterHome,
  MonsterLimbs,
  MonsterMotivation,
  MonsterSize,
  MonsterTrait,
  MonsterType,
  MonsterWeakness,
  MovementDistanceFunction,
  MovementType,
  TailChoices,
  WeightedRandomMonsterChoice,
} from '../models/monster.model'

export const sizes: WeightedRandomMonsterChoice<{
  size: MonsterSize
  strength: (diceFn?: () => number) => number
}>[] = [
  { weight: 4, value: { size: 'Puny', strength: (_ = rollD6) => 1 } },
  { weight: 3, value: { size: 'Small', strength: (_ = rollD6) => 2 } },
  { weight: 8, value: { size: 'Average', strength: (_ = rollD6) => 3 } },
  { weight: 7, value: { size: 'Large', strength: (_ = rollD6) => 4 } },
  { weight: 7, value: { size: 'Big', strength: (_ = rollD6) => 8 } },
  {
    weight: 3,
    value: { size: 'Huge', strength: (diceFn = rollD6) => 14 + diceFn() },
  },
  {
    weight: 4,
    value: {
      size: 'Gigantic',
      strength: (diceFn = rollD6) => 30 + diceFn() + diceFn(),
    },
  },
]

export const types: WeightedRandomMonsterChoice<{
  type: MonsterType
  agility: number
}>[] = [
  { weight: 3, value: { type: 'Grazing', agility: 1 } },
  { weight: 3, value: { type: 'Herbivore', agility: 2 } },
  { weight: 5, value: { type: 'Gatherer', agility: 2 } },
  { weight: 7, value: { type: 'Scavenger', agility: 4 } },
  { weight: 12, value: { type: 'Predator', agility: 5 } },
  { weight: 6, value: { type: 'AggressivePredator', agility: 8 } },
]

export const defaultMonsterLimbs: MonsterLimbs = {
  Arms: 0,
  Legs: 0,
  Tentacles: 0,
  Wings: 0,
}

export const limbChoices: WeightedRandomMonsterChoice<LimbChoicesWithAmount>[] =
  [
    {
      weight: 3,
      value: {
        key: 'None',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
        }),
      },
    },
    {
      weight: 5,
      value: {
        key: 'Tentacles',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Tentacles: rollD6() + 2,
        }),
      },
    },
    {
      weight: 3,
      value: {
        key: 'TwoLegs',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Legs: 2,
        }),
      },
    },
    {
      weight: 3,
      value: {
        key: 'TwoLegsTwoArms',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Legs: 2,
          Arms: 2,
        }),
      },
    },
    {
      weight: 10,
      value: {
        key: 'FourLegs',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Legs: 4,
        }),
      },
    },
    {
      weight: 5,
      value: {
        key: 'FourLegsTwoArms',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Legs: 4,
          Arms: 2,
        }),
      },
    },
    {
      weight: 5,
      value: {
        key: 'Wings',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Wings: 2,
        }),
      },
    },
    {
      weight: 5,
      value: {
        key: 'Many',
        monsterLimbs: () => ({
          ...defaultMonsterLimbs,
          Legs: rollD3() * 2 + 2,
          Arms: rollD3() * 2 + 2,
        }),
      },
    },
  ]

export const headChoices: WeightedRandomMonsterChoice<HeadChoiceWithCount>[] = [
  { weight: 1, value: { key: 'Missing' } },
  { weight: 5, value: { key: 'Beak' } },
  { weight: 6, value: { key: 'HornWithCount', count: getRandomInt(1, 3) } },
  { weight: 3, value: { key: 'ElkHorns' } },
  { weight: 4, value: { key: 'TentaclesWithCount', count: rollD6() + 2 } },
  { weight: 2, value: { key: 'InsectoidEyes' } },
  {
    weight: 3,
    value: {
      key: 'SideEyesWithCount',
      count: [rollD6() + rollD6()].map((e) => (isEven(e) ? e : e + 1))[0],
    },
  },
  { weight: 1, value: { key: 'ManyEyes' } },
  { weight: 2, value: { key: 'BigMane' } },
  { weight: 1, value: { key: 'LongTongue' } },
  { weight: 2, value: { key: 'BigEars' } },
  { weight: 2, value: { key: 'Fin' } },
  { weight: 3, value: { key: 'RollTwice' } },
]

export const tailChoices: WeightedRandomMonsterChoice<{
  key: TailChoices
  damage: number
}>[] = [
  { weight: 3, value: { key: 'None', damage: 0 } },
  { weight: 2, value: { key: 'Tail', damage: 0 } },
  { weight: 1, value: { key: 'SpikedTail', damage: 1 } },
]

export const armorChoices: WeightedRandomMonsterChoice<MonsterArmor>[] = [
  { weight: 4, value: { key: 'Skin', armor: 0 } },
  { weight: 4, value: { key: 'SoftFur', armor: 1 } },
  { weight: 10, value: { key: 'ThickFur', armor: 2 } },
  { weight: 4, value: { key: 'Feathers', armor: 2 } },
  { weight: 5, value: { key: 'Scales', armor: 3 } },
  { weight: 4, value: { key: 'Shell', armor: 5 } },
  { weight: 3, value: { key: 'BonePlates', armor: 7 } },
  { weight: 2, value: { key: 'ArmoredHide', armor: 9 } },
]

export const defaultMovementDistanceFunction = (
  movementAgility: [number, number, number],
): MovementDistanceFunction => {
  return (agility: number): number => {
    if (!validNumber(agility) || agility < 0) return 0

    if (agility <= 2) return movementAgility[0]

    if (agility <= 4) return movementAgility[1]

    return movementAgility[2]
  }
}

export const movementTypes: WeightedRandomMonsterChoice<{
  type: MovementType
  distanceFn: MovementDistanceFunction
}>[] = [
  {
    weight: 3,
    value: {
      type: 'Slithering',
      distanceFn: defaultMovementDistanceFunction([1, 1, 2]),
    },
  },
  {
    weight: 3,
    value: {
      type: 'Digging',
      distanceFn: defaultMovementDistanceFunction([1, 1, 2]),
    },
  },
  {
    weight: 5,
    value: {
      type: 'Swimming',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
  {
    weight: 13,
    value: {
      type: 'Running',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
  {
    weight: 6,
    value: {
      type: 'Flying',
      distanceFn: defaultMovementDistanceFunction([2, 3, 3]),
    },
  },
  {
    weight: 6,
    value: {
      type: 'Climbing',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
]

export const homes: WeightedRandomMonsterChoice<MonsterHome>[] = [
  { weight: 4, value: 'Burrow' },
  { weight: 5, value: 'Ruin' },
  { weight: 5, value: 'WateringHole' },
  { weight: 4, value: 'TreeOrHighPoint' },
  { weight: 5, value: 'Cave' },
  { weight: 5, value: 'Ravine' },
  { weight: 8, value: 'Den' },
]

export const monsterSkillValues = '0^19|1^5|2^4|3^4|4^2|5^2'

export const monsterTraits: WeightedRandomMonsterChoice<MonsterTrait>[] = [
  {
    weight: 1,
    value: {
      name: 'Trait.Undead.Name',
      description: (t) => t('Trait.Undead.Description'),
      apply: (rm) => ({
        ...rm,
        attributes: {
          ...rm.attributes,
          strength: maybe(rm.attributes.strength)
            .map((s) => s + 2)
            .withDefault(2),
        },
      }),
    },
  },
  {
    weight: 3,
    value: {
      name: 'Trait.Hurt.Name',
      description: (t) => t('Trait.Hurt.Description'),
      apply: (rm) => ({
        ...rm,
        attributes: {
          ...rm.attributes,
          strength: maybe(rm.attributes.strength)
            .map((s) => Math.ceil(s / 2))
            .withDefault(1),
        },
      }),
    },
  },
  {
    weight: 3,
    value: {
      name: 'Trait.Colorful.Name',
      description: (t) => {
        const silver = rollD6() + rollD6() + rollD6()

        return t('Trait.Colorful.Description', { count: silver })
      },
      apply: id,
    },
  },
  {
    weight: 4,
    value: {
      name: 'Trait.Poisonous.Name',
      description: (t) => {
        const poisons = {
          1: 'Poisons.Lethal',
          2: 'Poisons.Paralyzing',
          3: 'Poisons.Sleeping',
        }
        const roll = rollD3()

        const strength = rollD6() + 2

        return `${t(poisons[roll])} (${strength})`
      },
      apply: id,
    },
  },
  {
    weight: 3,
    value: {
      name: 'Trait.Regeneration.Name',
      description: (t) => t('Trait.Regeneration.Description'),
      apply: id,
    },
  },
  {
    weight: 2,
    value: {
      name: 'Trait.ResistanceMagic.Name',
      description: (t) => t('Trait.ResistanceMagic.Description'),
      apply: id,
    },
  },
  {
    weight: 3,
    value: {
      name: 'Trait.Camouflage.Name',
      description: (t) => t('Trait.Camouflage.Description'),
      apply: id,
    },
  },
  {
    weight: 2,
    value: {
      name: 'Trait.Fast.Name',
      description: (t) => t('Trait.Fast.Description'),
      apply: id,
    },
  },
  {
    weight: 4,
    value: {
      name: 'Trait.SensitiveHearing.Name',
      description: (t) => t('Trait.SensitiveHearing.Description'),
      apply: (rm) => ({
        ...rm,
        skills: {
          ...rm.skills,
          Scouting: rm.skills.Scouting + 2,
        },
      }),
    },
  },
  {
    weight: 2,
    value: {
      name: 'Trait.SensitiveSmell.Name',
      description: (t) => t('Trait.SensitiveSmell.Description'),
      apply: (rm) => ({
        ...rm,
        skills: {
          ...rm.skills,
          Scouting: rm.skills.Scouting + 2,
        },
      }),
    },
  },
  {
    weight: 3,
    value: {
      name: 'Trait.DarkVision.Name',
      description: (t) => t('Trait.DarkVision.Description'),
      apply: id,
    },
  },
  {
    weight: 1,
    value: {
      name: 'Trait.AcidGlands.Name',
      description: (t) => t('Trait.AcidGlands.Description'),
      apply: (rm) => ({
        ...rm,
        acidGlands: true,
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'Trait.FireGlands.Name',
      description: (t) => t('Trait.FireGlands.Description'),
      apply: (rm) => ({
        ...rm,
        fireGlands: true,
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'Trait.Intelligent.Name',
      description: (t) => {
        const speech =
          rollD2() === 1
            ? 'Trait.CanSpeak.Description'
            : 'Trait.Intelligent.Telepathy'

        const skillValues = t('Trait.Intelligent.SkillValues')

        return `${t(speech)}. ${skillValues}`
      },
      apply: id,
    },
  },
  {
    weight: 1,
    value: {
      name: 'Trait.CanSpeak.Name',
      description: (t) => t('Trait.CanSpeak.Description'),
      apply: id,
    },
  },
  {
    weight: 1,
    value: {
      name: 'Trait.PossessedByDemon.Name',
      description: (t) => t('Trait.PossessedByDemon.Description'),
      apply: id,
    },
  },
]

export const monsterWeakness: WeightedRandomMonsterChoice<MonsterWeakness>[] = [
  {
    weight: 13,
    value: {
      name: 'Weakness.None.Name',
      description: 'Weakness.None.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'Weakness.VulnerableToFire.Name',
      description: 'Weakness.VulnerableToFire.Description',
    },
  },
  {
    weight: 2,
    value: {
      name: 'Weakness.VulnerableToLight.Name',
      description: 'Weakness.VulnerableToLight.Description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'Weakness.AfraidOfLoudNoises.Name',
      description: 'Weakness.AfraidOfLoudNoises.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'Weakness.ProtectsOffspring.Name',
      description: 'Weakness.ProtectsOffspring.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'Weakness.SensitiveEyes.Name',
      description: 'Weakness.SensitiveEyes.Description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'Weakness.ObsessedWithAllThatGlimmers.Name',
      description: 'Weakness.ObsessedWithAllThatGlimmers.Description',
    },
  },
]

export const monsterMotivation: WeightedRandomMonsterChoice<MonsterMotivation>[] =
  [
    { weight: 13, value: 'Territory' },
    { weight: 4, value: 'Pregnant' },
    { weight: 5, value: 'Hunger' },
    { weight: 2, value: 'Injured' },
    { weight: 1, value: 'Parasite' },
    { weight: 5, value: 'Alone' },
    { weight: 2, value: 'Fun' },
    { weight: 2, value: 'LookingForHost' },
    { weight: 2, value: 'GuardingTreasure' },
  ]

export const monsterAttacks: MonsterAttacks = {
  Bash: {
    type: 'Bash',
    damage: (_) => 1,
    range: 'ArmsLength',
    attack: (rm) => rm.attributes.agility,
    description: 'Attack.Bash.Description',
    valid: (rm) =>
      rm.attributes.strength >= 5 && rm.attackRequirements.hasLimbs,
  },
  Bite: {
    type: 'Bite',
    damage: (_) => chooseFromChoiceString('1^2|2^3|3'),
    range: 'ArmsLength',
    attack: (rm) => 4 + rm.attributes.agility,
    description: 'Attack.Bite.Description',
    valid: (rm) => rm.attackRequirements.fangs,
  },
  BreathFire: {
    type: 'BreathFire',
    damage: (_) => 1,
    range: 'Short',
    attack: (_) => 6 + rollD6(),
    description: 'Attack.BreathFire.Description',
    valid: (rm) => rm.attackRequirements.fireGlands,
  },
  DeadlyGaze: {
    type: 'DeadlyGaze',
    attack: (_) => 4 + rollD6(),
    range: 'Near',
    description: 'Attack.DeadlyGaze.Description',
    valid: (rm) => rm.attackRequirements.undead,
  },
  Headbutt: {
    type: 'Headbutt',
    damage: (_) => chooseFromChoiceString('1^2|2'),
    range: 'ArmsLength',
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'Attack.Headbutt.Description',
    valid: (rm) => !rm.attackRequirements.horn,
  },
  Horn: {
    type: 'Horn',
    damage: (_) => chooseFromChoiceString('2^2|3'),
    range: 'ArmsLength',
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'Attack.Horn.Description',
    valid: (rm) => rm.attackRequirements.horn,
  },
  Roar: {
    type: 'Roar',
    range: 'ArmsLength',
    attack: (_) => 3 + rollD3(),
    description: 'Attack.Roar.Description',
    valid: (rm) => rm.attributes.strength >= 6,
  },
  Kick: {
    type: 'Kick',
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => 1,
    description: 'Attack.Kick.Description',
    valid: (rm) => rm.attackRequirements.legs,
  },
  Sweep: {
    type: 'Sweep',
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => chooseFromChoiceString('1^2|2^3|3'),
    description: 'Attack.Sweep.Description',
    valid: (rm) => rm.attributes.agility >= 3,
  },
  Slash: {
    type: 'Slash',
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => chooseFromChoiceString('1^2|2^3|3'),
    description: 'Attack.Slash.Description',
    valid: (rm) =>
      rm.attackRequirements.claws || rm.attackRequirements.hasLimbs,
  },
  TailsSlash: {
    type: 'TailsSlash',
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => 1,
    description: 'Attack.TailsSlash.Description',
    valid: (rm) => rm.attackRequirements.tail,
  },
  TentacleLash: {
    type: 'TentacleLash',
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => chooseFromChoiceString('1^2|2'),
    description: 'Attack.TentacleLash.Description',
    valid: (rm) => rm.attackRequirements.tentacles,
  },
  Devour: {
    type: 'Devour',
    range: 'ArmsLength',
    attack: (_) => 4 + rollD6(),
    damage: (_) => chooseFromChoiceString('1^2|2'),
    description: 'Attack.Devour.Description',
    valid: (rm) => rm.attributes.strength >= 14,
  },
  SpitAcid: {
    type: 'SpitAcid',
    range: 'Near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => 1,
    description: 'Attack.SpitAcid.Description',
    valid: (rm) => rm.attackRequirements.acidGlands,
  },
  DiveAttack: {
    type: 'DiveAttack',
    range: 'Near',
    attack: (rm) => 4 + rm.attributes.agility,
    damage: (rm) => Math.floor(rm.attributes.agility),
    description: 'Attack.DiveAttack.Description',
    valid: (rm) => rm.attackRequirements.wings,
  },
}
