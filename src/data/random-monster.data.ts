import {
  choose,
  chooseFromChoiceString,
  getRandomInt,
  rollD2,
  rollD3,
  rollD4,
  rollD6,
  WeightedChoice,
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
  PoisonType,
  TailChoices,
} from '../models/monster.model'
import { TranslationKey } from '../store/translations/translation.model'

export const sizes: WeightedChoice<{
  size: MonsterSize
  strength: (diceFn?: () => number) => number
  damage: number
}>[] = [
  {
    weight: 4,
    value: { size: 'Puny', strength: (_ = rollD6) => 1, damage: 1 },
  },
  {
    weight: 3,
    value: { size: 'Small', strength: (_ = rollD6) => 2, damage: 1 },
  },
  {
    weight: 8,
    value: { size: 'Average', strength: (_ = rollD6) => 3, damage: 1 },
  },
  {
    weight: 7,
    value: { size: 'Large', strength: (_ = rollD6) => 4, damage: 1 },
  },
  { weight: 7, value: { size: 'Big', strength: (_ = rollD6) => 8, damage: 2 } },
  {
    weight: 3,
    value: {
      size: 'Huge',
      strength: (diceFn = rollD6) => 14 + diceFn(),
      damage: 2,
    },
  },
  {
    weight: 4,
    value: {
      size: 'Gigantic',
      strength: (diceFn = rollD6) => 30 + diceFn() + diceFn(),
      damage: 3,
    },
  },
]

export const types: WeightedChoice<{
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

export const limbChoices: WeightedChoice<LimbChoicesWithAmount>[] = [
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

export const headChoices: WeightedChoice<HeadChoiceWithCount>[] = [
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

export const tailChoices: WeightedChoice<{
  key: TailChoices
  damage: number
}>[] = [
  { weight: 3, value: { key: 'None', damage: 0 } },
  { weight: 2, value: { key: 'Tail', damage: 0 } },
  { weight: 1, value: { key: 'SpikedTail', damage: 1 } },
]

export const armorChoices: WeightedChoice<MonsterArmor>[] = [
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

export const movementTypes: WeightedChoice<{
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

export const homes: WeightedChoice<MonsterHome>[] = [
  { weight: 4, value: 'Burrow' },
  { weight: 5, value: 'Ruin' },
  { weight: 5, value: 'WateringHole' },
  { weight: 4, value: 'TreeOrHighPoint' },
  { weight: 5, value: 'Cave' },
  { weight: 5, value: 'Ravine' },
  { weight: 8, value: 'Den' },
]

export const monsterSkillValues = '0^19|1^5|2^4|3^4|4^2|5^2'

export const monsterTraits: WeightedChoice<MonsterTrait>[] = [
  {
    weight: 1,
    value: {
      name: 'monster:Trait.Undead.Name',
      description: () => ({ key: 'monster:Trait.Undead.Description' }),
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
      name: 'monster:Trait.Hurt.Name',
      description: () => ({ key: 'monster:Trait.Hurt.Description' }),
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
      name: 'monster:Trait.Colorful.Name',
      description: () => ({
        key: 'monster:Trait.Colorful.Description',
        count: rollD6() + rollD6() + rollD6(),
      }),
      apply: id,
    },
  },
  {
    weight: 4,
    value: {
      name: 'monster:Trait.Poisonous.Name',
      description: () => ({
        key: {
          1: 'monster:Poisons.Lethal',
          2: 'monster:Poisons.Paralyzing',
          3: 'monster:Poisons.Sleeping',
        }[rollD3()] as TranslationKey<'monster'>,
        count: rollD6() + 2,
      }),
      apply: id,
    },
  },
  {
    weight: 3,
    value: {
      name: 'monster:Trait.Regeneration.Name',
      description: () => ({ key: 'monster:Trait.Regeneration.Description' }),
      apply: id,
    },
  },
  {
    weight: 2,
    value: {
      name: 'monster:Trait.ResistanceMagic.Name',
      description: () => ({
        key: 'monster:Trait.ResistanceMagic.Description',
      }),
      apply: id,
    },
  },
  {
    weight: 3,
    value: {
      name: 'monster:Trait.Camouflage.Name',
      description: () => ({ key: 'monster:Trait.Camouflage.Description' }),
      apply: id,
    },
  },
  {
    weight: 2,
    value: {
      name: 'monster:Trait.Fast.Name',
      description: () => ({ key: 'monster:Trait.Fast.Description' }),
      apply: id,
    },
  },
  {
    weight: 4,
    value: {
      name: 'monster:Trait.SensitiveHearing.Name',
      description: () => ({
        key: 'monster:Trait.SensitiveHearing.Description',
      }),
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
      name: 'monster:Trait.SensitiveSmell.Name',
      description: () => ({ key: 'monster:Trait.SensitiveSmell.Description' }),
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
      name: 'monster:Trait.DarkVision.Name',
      description: () => ({ key: 'monster:Trait.DarkVision.Description' }),
      apply: id,
    },
  },
  {
    weight: 1,
    value: {
      name: 'monster:Trait.AcidGlands.Name',
      description: () => ({ key: 'monster:Trait.AcidGlands.Description' }),
      apply: (rm) => ({
        ...rm,
        acidGlands: true,
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'monster:Trait.FireGlands.Name',
      description: () => ({ key: 'monster:Trait.FireGlands.Description' }),
      apply: (rm) => ({
        ...rm,
        attackRequirements: { ...rm.attackRequirements, fireGlands: true },
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'monster:Trait.Intelligent.Name',
      description: () => ({
        key: (rollD2() === 1
          ? 'monster:Trait.CanSpeak.Description'
          : 'monster:Trait.Intelligent.Telepathy') as TranslationKey<'monster'>,
        count: 0, //'Trait.Intelligent.SkillValues'
      }),
      apply: (rm) => ({
        ...rm,
        damageModifiers: {
          ...rm.damageModifiers,
          Telepathic: rollD3(),
        },
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'monster:Trait.CanSpeak.Name',
      description: () => ({ key: 'monster:Trait.CanSpeak.Description' }),
      apply: id,
    },
  },
  {
    weight: 1,
    value: {
      name: 'monster:Trait.PossessedByDemon.Name',
      description: () => ({
        key: 'monster:Trait.PossessedByDemon.Description',
      }),
      apply: id,
    },
  },
]

export const monsterWeakness: WeightedChoice<MonsterWeakness>[] = [
  {
    weight: 13,
    value: {
      name: 'monster:Weakness.None.Name',
      description: 'monster:Weakness.None.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monster:Weakness.VulnerableToFire.Name',
      description: 'monster:Weakness.VulnerableToFire.Description',
    },
  },
  {
    weight: 2,
    value: {
      name: 'monster:Weakness.VulnerableToLight.Name',
      description: 'monster:Weakness.VulnerableToLight.Description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'monster:Weakness.AfraidOfLoudNoises.Name',
      description: 'monster:Weakness.AfraidOfLoudNoises.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monster:Weakness.ProtectsOffspring.Name',
      description: 'monster:Weakness.ProtectsOffspring.Description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monster:Weakness.SensitiveEyes.Name',
      description: 'monster:Weakness.SensitiveEyes.Description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'monster:Weakness.ObsessedWithAllThatGlimmers.Name',
      description: 'monster:Weakness.ObsessedWithAllThatGlimmers.Description',
    },
  },
]

export const monsterMotivation: WeightedChoice<MonsterMotivation>[] = [
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

const getRandomPoison = (): PoisonType =>
  choose(['Lethal', 'Paralyzing', 'Sleeping', 'Hallucinogenic'])

export const monsterAttacks: MonsterAttacks = {
  Bash: {
    type: 'Bash',
    chance: 1,
    damage: (_) => ({ Blunt: 1 }),
    range: 'ArmsLength',
    attack: (rm) => rm.attributes.agility,
    description: 'monster:Attack.Bash.Description',
    valid: (rm) =>
      rm.attributes.strength >= 5 && rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  Generic: {
    type: 'Generic',
    chance: 1,
    damage: (_) => {
      const damage = chooseFromChoiceString('1^2|2^3|3')

      return rollD2() === 1 ? { Slash: damage } : { Blunt: damage }
    },
    range: 'ArmsLength',
    attack: (rm) => 4 + rm.attributes.agility,
    description: 'monster:Attack.Generic.Description',
    valid: (_) => true,
    singleUse: false,
  },
  Bite: {
    type: 'Bite',
    chance: 1,
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2^3|3') }),
    range: 'ArmsLength',
    attack: (rm) => 4 + rm.attributes.agility,
    description: 'monster:Attack.Bite.Description',
    valid: (rm) => rm.attackRequirements.fangs,
    singleUse: false,
  },
  LockedJaws: {
    type: 'LockedJaws',
    chance: 0.005,
    range: 'ArmsLength',
    attack: (rm) => 7 + rm.attributes.agility,
    damage: (_) => {
      const damage = chooseFromChoiceString('1^2|2^3|3')

      return rollD2() === 1 ? { Slash: damage } : { Blunt: damage }
    },
    description: 'monster:Attack.LockedJaws.Description',
    valid: (rm) => rm.attackRequirements.fangs,
    singleUse: false,
  },
  ThroatBite: {
    type: 'ThroatBite',
    chance: 1,
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2^3|3') }),
    range: 'ArmsLength',
    attack: (rm) => 7 + rm.attributes.agility,
    description: 'monster:Attack.ThroatBite.Description',
    valid: (rm) => rm.attackRequirements.fangs && rm.attributes.agility > 3,
    singleUse: false,
  },
  BreathFire: {
    type: 'BreathFire',
    chance: 1,
    damage: (_) => ({ NonTypical: 1 }),
    range: 'Short',
    attack: (_) => 6 + rollD6(),
    description: 'monster:Attack.BreathFire.Description',
    valid: (rm) => rm.attackRequirements.fireGlands,
    singleUse: false,
  },
  SprayFire: {
    type: 'SprayFire',
    chance: 0.01,
    damage: (_) => ({ NonTypical: 1 }),
    range: 'Short',
    attack: (_) => 6 + rollD6(),
    description: 'monster:Attack.SprayFire.Description',
    valid: (rm) => rm.attackRequirements.fireGlands,
    singleUse: true,
  },
  DeadlyGaze: {
    type: 'DeadlyGaze',
    chance: 1,
    range: 'Near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.DeadlyGaze.Description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  ColdStrike: {
    type: 'ColdStrike',
    chance: 1,
    range: 'Near',
    attack: (_) => 6 + rollD6(),
    damage: (_) => ({ NonTypical: 1 }),
    description: 'monster:Attack.ColdStrike.Description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  DeathScream: {
    type: 'DeathScream',
    chance: 0.005,
    range: 'Near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.DeathScream.Description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  Headbutt: {
    type: 'Headbutt',
    chance: 1,
    damage: (_) => ({ Blunt: chooseFromChoiceString('1^2|2') }),
    range: 'ArmsLength',
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'monster:Attack.Headbutt.Description',
    valid: (rm) => !rm.attackRequirements.horn,
    singleUse: false,
  },
  Horn: {
    type: 'Horn',
    chance: 1,
    range: 'ArmsLength',
    damage: (_) => ({ Stab: chooseFromChoiceString('2^2|3') }),
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'monster:Attack.Horn.Description',
    valid: (rm) => rm.attackRequirements.horn,
    singleUse: false,
  },
  Roar: {
    type: 'Roar',
    chance: 1,
    range: 'ArmsLength',
    attack: (_) => 3 + rollD3(),
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.Roar.Description',
    valid: (rm) => rm.attributes.strength >= 6,
    singleUse: false,
  },
  Kick: {
    type: 'Kick',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Blunt: 1 }),
    description: 'monster:Attack.Kick.Description',
    valid: (rm) => rm.attackRequirements.legs,
    singleUse: false,
  },
  BackwardsKick: {
    type: 'BackwardsKick',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Blunt: 1 }),
    description: 'monster:Attack.BackwardsKick.Description',
    valid: (rm) => rm.attackRequirements.legs && rm.limbs.Legs >= 4,
    singleUse: false,
  },
  Sweep: {
    type: 'Sweep',
    chance: 1,
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monster:Attack.Sweep.Description',
    valid: (rm) => rm.attributes.agility >= 3,
    singleUse: false,
  },
  Slash: {
    type: 'Slash',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monster:Attack.Slash.Description',
    valid: (rm) =>
      rm.attackRequirements.claws || rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  EyeGourge: {
    type: 'EyeGourge',
    chance: 0.05,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Slash: 1 }),
    description: 'monster:Attack.EyeGourge.Description',
    valid: (rm) =>
      rm.attackRequirements.claws || rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  ClawFlurry: {
    type: 'ClawFlurry',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rm.attributes.agility,
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monster:Attack.ClawFlurry.Description',
    valid: (rm) =>
      (rm.attackRequirements.claws || rm.attackRequirements.hasLimbs) &&
      rm.attributes.agility > 4,
    singleUse: false,
  },
  TailsSlash: {
    type: 'TailsSlash',
    chance: 1,
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (rm) => ({ Blunt: 1 + rm.damageModifiers.TailAttack }),
    description: 'monster:Attack.TailsSlash.Description',
    valid: (rm) => rm.attackRequirements.tail,
    singleUse: false,
  },
  TentacleLash: {
    type: 'TentacleLash',
    chance: 1,
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Blunt: chooseFromChoiceString('1^2|2') }),
    description: 'monster:Attack.TentacleLash.Description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  TentacleFrenzy: {
    type: 'TentacleFrenzy',
    chance: 1,
    range: 'Near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ Blunt: chooseFromChoiceString('1^2|2') }),
    description: 'monster:Attack.TentacleFrenzy.Description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  TentaclePenetrationArmsLength: {
    type: 'TentaclePenetrationArmsLength',
    chance: 0.05,
    range: 'ArmsLength',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: (_) => ({ Slash: chooseFromChoiceString('1|2') }),
    description: 'monster:Attack.TentaclePenetrationArmsLength.Description',
    valid: (rm) =>
      !rm.attackRequirements.tentacles &&
      rm.description.heads.some((h) => h.key === 'TentaclesWithCount'),
    singleUse: false,
  },
  TentaclePenetrationNear: {
    type: 'TentaclePenetrationNear',
    chance: 0.05,
    range: 'Near',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: (_) => ({ Slash: chooseFromChoiceString('1|2') }),
    description: 'monster:Attack.TentaclePenetrationNear.Description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  Devour: {
    type: 'Devour',
    chance: 1,
    range: 'ArmsLength',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ Slash: chooseFromChoiceString('1^2|2') }),
    description: 'monster:Attack.Devour.Description',
    valid: (rm) => rm.attributes.strength >= 14,
    singleUse: false,
  },
  SpitAcid: {
    type: 'SpitAcid',
    chance: 1,
    range: 'Near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ NonTypical: 1 }),
    description: 'monster:Attack.SpitAcid.Description',
    valid: (rm) => rm.attackRequirements.acidGlands,
    singleUse: false,
  },
  SprayAcid: {
    type: 'SprayAcid',
    chance: 0.01,
    range: 'Short',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ NonTypical: 1 }),
    description: 'monster:Attack.SprayAcid.Description',
    valid: (rm) => rm.attackRequirements.acidGlands,
    singleUse: true,
  },
  DiveAttack: {
    type: 'DiveAttack',
    chance: 1,
    range: 'Near',
    attack: (rm) => 4 + rm.attributes.agility,
    damage: (rm) => ({ Slash: Math.round(rm.attributes.agility) }),
    description: 'monster:Attack.DiveAttack.Description',
    valid: (rm) => rm.attackRequirements.wings,
    singleUse: false,
  },
  Whirlwind: {
    type: 'Whirlwind',
    chance: 1,
    range: 'Near',
    attack: (_) => 6,
    damage: (_) => ({ Weapon: 1 }),
    description: 'monster:Attack.Whirlwind.Description',
    valid: (rm) => rm.attackRequirements.wings && rm.attributes.strength > 4,
    singleUse: false,
  },
  Peck: {
    type: 'Peck',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rm.attributes.agility,
    damage: (_) => ({ Blunt: 1 }),
    description: 'monster:Attack.Peck.Description',
    valid: (rm) => rm.attackRequirements.hasBeak,
    singleUse: false,
  },
  BeakThrow: {
    type: 'BeakThrow',
    chance: 1,
    damage: (_) => ({ Weapon: 1 }),
    range: 'ArmsLength',
    attack: (rm) => 8 + rm.attributes.agility,
    description: 'monster:Attack.BeakThrow.Description',
    valid: (rm) => rm.attackRequirements.hasBeak && rm.attributes.strength > 11,
    singleUse: false,
  },
  Rush: {
    type: 'Rush',
    chance: 1,
    range: 'Near',
    attack: (rm) => rollD6() + rm.attributes.agility,
    damage: (_) => ({ Blunt: 1 }),
    description: 'monster:Attack.Rush.Description',
    valid: (rm) => rm.movement.type === 'Running',
    singleUse: false,
  },
  Burrow: {
    type: 'Burrow',
    chance: 1,
    range: 'Near',
    attack: (rm) => rm.movement.distance + rm.attributes.agility,
    damage: (_) => ({ Weapon: 1 }),
    description: 'monster:Attack.Burrow.Description',
    valid: (rm) => rm.movement.type === 'Digging',
    singleUse: false,
  },
  TheGroundShatters: {
    type: 'TheGroundShatters',
    chance: 1,
    range: 'Near',
    attack: (rm) => rm.movement.distance + rm.attributes.agility,
    description: 'monster:Attack.TheGroundShatters.Description',
    valid: (rm) =>
      rm.movement.type === 'Digging' && rm.attributes.strength > 13,
    singleUse: false,
  },
  Taunt: {
    type: 'Taunt',
    chance: 1,
    range: 'Near',
    attack: (rm) => rollD6() + rm.damageModifiers.Size,
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.Taunt.Description',
    valid: (rm) => rm.attackRequirements.canSpeak,
    singleUse: false,
  },
  Plea: {
    type: 'Plea',
    chance: 0.001,
    range: 'Near',
    description: 'monster:Attack.Plea.Description',
    valid: (rm) => rm.attackRequirements.canSpeak,
    singleUse: false,
  },
  NightmareVisions: {
    type: 'NightmareVisions',
    chance: 0.25,
    range: 'Near',
    attack: (_) => rollD4() + rollD4() + rollD3(),
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.NightmareVisions.Description',
    valid: (rm) =>
      rm.traits.some((t) =>
        t.description().key.includes('Trait.Intelligent.Telepathy'),
      ),
    singleUse: false,
  },
  MindBurst: {
    type: 'MindBurst',
    chance: 1,
    range: 'Near',
    attack: (_) => rollD3() * 2,
    damage: (_) => ({ Fear: true }),
    description: 'monster:Attack.MindBurst.Description',
    valid: (rm) =>
      rm.traits.some((t) =>
        t.description().key.includes('Trait.Intelligent.Telepathy'),
      ) && rm.damageModifiers.Telepathic > 1,
    singleUse: false,
  },
  WrapAttack: {
    type: 'WrapAttack',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rollD6() + rm.attributes.agility,
    damage: (rm) => ({ Blunt: rm.movement.distance }),
    description: 'monster:Attack.WrapAttack.Description',
    valid: (rm) =>
      rm.movement.type === 'Slithering' || !rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  PoisonSpit: {
    type: 'PoisonSpit',
    chance: 0.05,
    range: 'Near',
    attack: (_) => rollD6() + 4,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.PoisonSpit.Description',
    valid: (rm) => rm.attackRequirements.isPoisonous,
    singleUse: false,
  },
  VenemousBite: {
    type: 'VenemousBite',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.VenemousBite.Description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.fangs,
    singleUse: false,
  },
  PoisonScratch: {
    type: 'PoisonScratch',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.PoisonScratch.Description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.claws,
    singleUse: false,
  },
  PoisonTailAttack: {
    type: 'PoisonTailAttack',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.PoisonTailAttack.Description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.spikedTail,
    singleUse: false,
  },
  PoisonTentacleAttack: {
    type: 'PoisonTentacleAttack',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.PoisonTentacleAttack.Description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  PoisonHornAttack: {
    type: 'PoisonHornAttack',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: 1,
      Poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monster:Attack.PoisonHornAttack.Description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.horn,
    singleUse: false,
  },
  Punch: {
    type: 'Punch',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.Melee,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.Punch.Description',
    valid: (rm) => rm.limbs.Arms > 0,
    singleUse: false,
  },
  FlyingFists: {
    type: 'FlyingFists',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.Melee,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.FlyingFists.Description_count',
    descriptionExtras: (rm) => ({ count: Math.ceil(rm.limbs.Arms / 2) }),
    valid: (rm) => rm.limbs.Arms > 2,
    singleUse: false,
  },
  FistsOfFury: {
    type: 'FistsOfFury',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.Melee,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.FistsOfFury.Description_count',
    descriptionExtras: (rm) => ({ count: Math.ceil(rm.limbs.Arms / 2) }),
    valid: (rm) => rm.limbs.Arms > 2,
    singleUse: false,
  },
  Distraction: {
    type: 'Distraction',
    chance: 1,
    range: 'Near',
    description: 'monster:Attack.Distraction.Description',
    valid: (rm) => rm.attributes.agility > 3,
    singleUse: false,
  },
  InfectedScratch: {
    type: 'InfectedScratch',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monster:Attack.InfectedScratch.Description',
    valid: (rm) => rm.attackRequirements.isSick && rm.attackRequirements.claws,
    singleUse: false,
  },
  DiseasedBite: {
    type: 'DiseasedBite',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monster:Attack.DiseasedBite.Description',
    valid: (rm) => rm.attackRequirements.isSick && rm.attackRequirements.fangs,
    singleUse: false,
  },
  InfectedTailSwipe: {
    type: 'InfectedTailSwipe',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monster:Attack.InfectedTailSwipe.Description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.spikedTail,
    singleUse: false,
  },
  InfectedTentacleSwipe: {
    type: 'InfectedTentacleSwipe',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      Slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monster:Attack.InfectedTentacleSwipe.Description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  DiseasedTouch: {
    type: 'DiseasedTouch',
    chance: 0.005,
    range: 'ArmsLength',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: () => ({
      Blunt: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monster:Attack.DiseasedTouch.Description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  AdventureToss: {
    type: 'AdventureToss',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 8 + rm.attributes.agility,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.AdventureToss.Description',
    valid: (rm) => rm.limbs.Arms > 0 && rm.attributes.strength > 11,
    singleUse: false,
  },
  DeathRattle: {
    type: 'DeathRattle',
    chance: 1,
    range: 'ArmsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({ Slash: 1 }),
    description: 'monster:Attack.DeathRattle.Description',
    valid: (rm) => rm.attackRequirements.fangs && rm.attributes.strength > 7,
    singleUse: false,
  },
  Squash: {
    type: 'Squash',
    chance: 1,
    range: 'Near',
    attack: (_) => rollD6() + 6,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.Squash.Description',
    valid: (rm) => rm.attributes.strength > 13,
    singleUse: false,
  },
  FallFromTheSky: {
    type: 'FallFromTheSky',
    chance: 1,
    range: 'Near',
    attack: (_) => 8,
    description: 'monster:Attack.FallFromTheSky.Description',
    valid: (rm) => rm.attributes.strength > 4 && rm.attackRequirements.wings,
    singleUse: false,
  },
  RainOfRocks: {
    type: 'RainOfRocks',
    chance: 1,
    range: 'Near',
    attack: (_) => 6,
    damage: () => ({ Blunt: 1 }),
    description: 'monster:Attack.RainOfRocks.Description',
    valid: (rm) => rm.attackRequirements.wings,
    singleUse: false,
  },
}
