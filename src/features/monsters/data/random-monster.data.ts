import { identity } from 'ramda'
import {
  WeightedChoice,
  rollD6,
  rollD3,
  getRandomInt,
  rollD2,
  choose,
  chooseFromChoiceString,
  rollD4,
} from '../../../functions/dice.functions'
import { isEven } from '../../../functions/math.functions'
import { validNumber, maybe } from '../../../functions/utils.functions'
import { TranslationKey } from '../../../store/translations/translation.model'
import {
  MonsterSize,
  MonsterType,
  MonsterLimbs,
  LimbChoicesWithAmount,
  HeadChoiceWithCount,
  TailChoices,
  MonsterArmor,
  MovementDistanceFunction,
  MovementType,
  MonsterHome,
  MonsterTrait,
  MonsterWeakness,
  MonsterMotivation,
  PoisonType,
  MonsterAttacks,
  poisonTypes,
} from '../monster.model'

export const sizes: WeightedChoice<{
  size: MonsterSize
  strength: (diceFn?: () => number) => number
  damage: number
}>[] = [
  {
    weight: 4,
    value: { size: 'puny', strength: (_ = rollD6) => 1, damage: 1 },
  },
  {
    weight: 3,
    value: { size: 'small', strength: (_ = rollD6) => 2, damage: 1 },
  },
  {
    weight: 8,
    value: { size: 'average', strength: (_ = rollD6) => 3, damage: 1 },
  },
  {
    weight: 7,
    value: { size: 'large', strength: (_ = rollD6) => 4, damage: 1 },
  },
  { weight: 7, value: { size: 'big', strength: (_ = rollD6) => 8, damage: 2 } },
  {
    weight: 3,
    value: {
      size: 'huge',
      strength: (diceFn = rollD6) => 14 + diceFn(),
      damage: 2,
    },
  },
  {
    weight: 4,
    value: {
      size: 'gigantic',
      strength: (diceFn = rollD6) => 30 + diceFn() + diceFn(),
      damage: 3,
    },
  },
]

export const types: WeightedChoice<{
  type: MonsterType
  agility: number
}>[] = [
  { weight: 3, value: { type: 'grazing', agility: 1 } },
  { weight: 3, value: { type: 'herbivore', agility: 2 } },
  { weight: 5, value: { type: 'gatherer', agility: 2 } },
  { weight: 7, value: { type: 'scavenger', agility: 4 } },
  { weight: 12, value: { type: 'predator', agility: 5 } },
  { weight: 6, value: { type: 'aggressive_predator', agility: 8 } },
]

export const defaultMonsterLimbs: MonsterLimbs = {
  arms: 0,
  legs: 0,
  tentacles: 0,
  wings: 0,
}

export const limbChoices: WeightedChoice<LimbChoicesWithAmount>[] = [
  {
    weight: 3,
    value: {
      key: 'none',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
      }),
    },
  },
  {
    weight: 5,
    value: {
      key: 'tentacles',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
        Tentacles: rollD6() + 2,
      }),
    },
  },
  {
    weight: 3,
    value: {
      key: 'two_legs',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
        Legs: 2,
      }),
    },
  },
  {
    weight: 3,
    value: {
      key: 'two_legs_two_arms',
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
      key: 'four_legs',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
        Legs: 4,
      }),
    },
  },
  {
    weight: 5,
    value: {
      key: 'four_legs_two_arms',
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
      key: 'wings',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
        Wings: 2,
      }),
    },
  },
  {
    weight: 5,
    value: {
      key: 'many',
      monsterLimbs: () => ({
        ...defaultMonsterLimbs,
        Legs: rollD3() * 2 + 2,
        Arms: rollD3() * 2 + 2,
      }),
    },
  },
]

export const headChoices: WeightedChoice<HeadChoiceWithCount>[] = [
  { weight: 1, value: { key: 'missing' } },
  { weight: 5, value: { key: 'beak' } },
  { weight: 6, value: { key: 'horn_with_count', count: getRandomInt(1, 3) } },
  { weight: 3, value: { key: 'elk_horns' } },
  { weight: 4, value: { key: 'tentacles_with_count', count: rollD6() + 2 } },
  { weight: 2, value: { key: 'insectoid_eyes' } },
  {
    weight: 3,
    value: {
      key: 'side_eyes_with_count',
      count: [rollD6() + rollD6()].map((e) => (isEven(e) ? e : e + 1))[0],
    },
  },
  { weight: 1, value: { key: 'many_eyes' } },
  { weight: 2, value: { key: 'big_mane' } },
  { weight: 1, value: { key: 'long_tongue' } },
  { weight: 2, value: { key: 'big_ears' } },
  { weight: 2, value: { key: 'fin' } },
  { weight: 3, value: { key: 'roll_twice' } },
]

export const tailChoices: WeightedChoice<{
  key: TailChoices
  damage: number
}>[] = [
  { weight: 3, value: { key: 'none', damage: 0 } },
  { weight: 2, value: { key: 'tail', damage: 0 } },
  { weight: 1, value: { key: 'spiked_tail', damage: 1 } },
]

export const armorChoices: WeightedChoice<MonsterArmor>[] = [
  { weight: 4, value: { key: 'skin', armor: 0 } },
  { weight: 4, value: { key: 'softFur', armor: 1 } },
  { weight: 10, value: { key: 'thickFur', armor: 2 } },
  { weight: 4, value: { key: 'feathers', armor: 2 } },
  { weight: 5, value: { key: 'scales', armor: 3 } },
  { weight: 4, value: { key: 'shell', armor: 5 } },
  { weight: 3, value: { key: 'bonePlates', armor: 7 } },
  { weight: 2, value: { key: 'armoredHide', armor: 9 } },
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
      type: 'slithering',
      distanceFn: defaultMovementDistanceFunction([1, 1, 2]),
    },
  },
  {
    weight: 3,
    value: {
      type: 'digging',
      distanceFn: defaultMovementDistanceFunction([1, 1, 2]),
    },
  },
  {
    weight: 5,
    value: {
      type: 'swimming',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
  {
    weight: 13,
    value: {
      type: 'running',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
  {
    weight: 6,
    value: {
      type: 'flying',
      distanceFn: defaultMovementDistanceFunction([2, 3, 3]),
    },
  },
  {
    weight: 6,
    value: {
      type: 'climbing',
      distanceFn: defaultMovementDistanceFunction([1, 2, 2]),
    },
  },
]

export const homes: WeightedChoice<MonsterHome>[] = [
  { weight: 4, value: 'burrow' },
  { weight: 5, value: 'ruin' },
  { weight: 5, value: 'watering_hole' },
  { weight: 4, value: 'tree_or_high_point' },
  { weight: 5, value: 'cave' },
  { weight: 5, value: 'ravine' },
  { weight: 8, value: 'den' },
]

export const monsterSkillValues = '0^19|1^5|2^4|3^4|4^2|5^2'

export const monsterTraits: WeightedChoice<MonsterTrait>[] = [
  {
    weight: 1,
    value: {
      name: 'monsters:trait.undead.name',
      description: () => ({ key: 'monsters:trait.undead.description' }),
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
      name: 'monsters:trait.hurt.name',
      description: () => ({ key: 'monsters:trait.hurt.description' }),
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
      name: 'monsters:trait.colorful.name',
      description: () => ({
        key: 'monsters:trait.colorful.description',
        count: rollD6() + rollD6() + rollD6(),
      }),
      apply: identity,
    },
  },
  {
    weight: 4,
    value: {
      name: 'monsters:trait.poisonous.name',
      description: () => ({
        key: {
          1: 'monsters:poisons.lethal',
          2: 'monsters:poisons.paralyzing',
          3: 'monsters:poisons.sleeping',
        }[rollD3()] as TranslationKey<'monsters'>,
        count: rollD6() + 2,
      }),
      apply: identity,
    },
  },
  {
    weight: 3,
    value: {
      name: 'monsters:trait.regeneration.name',
      description: () => ({ key: 'monsters:trait.regeneration.description' }),
      apply: identity,
    },
  },
  {
    weight: 2,
    value: {
      name: 'monsters:trait.resistance_magic.name',
      description: () => ({
        key: 'monsters:trait.resistance_magic.description',
      }),
      apply: identity,
    },
  },
  {
    weight: 3,
    value: {
      name: 'monsters:trait.camouflage.name',
      description: () => ({ key: 'monsters:trait.camouflage.description' }),
      apply: identity,
    },
  },
  {
    weight: 2,
    value: {
      name: 'monsters:trait.fast.name',
      description: () => ({ key: 'monsters:trait.fast.description' }),
      apply: identity,
    },
  },
  {
    weight: 4,
    value: {
      name: 'monsters:trait.sensitive_hearing.name',
      description: () => ({
        key: 'monsters:trait.sensitive_hearing.description',
      }),
      apply: (rm) => ({
        ...rm,
        skills: {
          ...rm.skills,
          Scouting: rm.skills.scouting + 2,
        },
      }),
    },
  },
  {
    weight: 2,
    value: {
      name: 'monsters:trait.sensitive_smell.name',
      description: () => ({ key: 'monsters:trait.sensitive_smell.description' }),
      apply: (rm) => ({
        ...rm,
        skills: {
          ...rm.skills,
          Scouting: rm.skills.scouting + 2,
        },
      }),
    },
  },
  {
    weight: 3,
    value: {
      name: 'monsters:trait.dark_vision.name',
      description: () => ({ key: 'monsters:trait.dark_vision.description' }),
      apply: identity,
    },
  },
  {
    weight: 1,
    value: {
      name: 'monsters:trait.acid_glands.name',
      description: () => ({ key: 'monsters:trait.acid_glands.description' }),
      apply: (rm) => ({
        ...rm,
        acidGlands: true,
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'monsters:trait.fire_glands.name',
      description: () => ({ key: 'monsters:trait.fire_glands.description' }),
      apply: (rm) => ({
        ...rm,
        attackRequirements: { ...rm.attackRequirements, fireGlands: true },
      }),
    },
  },
  {
    weight: 1,
    value: {
      name: 'monsters:trait.intelligent.name',
      description: () => ({
        key: (rollD2() === 1
          ? 'monsters:trait.can_speak.description'
          : 'monsters:trait.intelligent.telepathy') as TranslationKey<'monsters'>,
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
      name: 'monsters:trait.can_speak.name',
      description: () => ({ key: 'monsters:trait.can_speak.description' }),
      apply: identity,
    },
  },
  {
    weight: 1,
    value: {
      name: 'monsters:trait.possessed_by_demon.name',
      description: () => ({
        key: 'monsters:trait.possessed_by_demon.description',
      }),
      apply: identity,
    },
  },
]

export const monsterWeakness: WeightedChoice<MonsterWeakness>[] = [
  {
    weight: 13,
    value: {
      name: 'monsters:weakness.none.name',
      description: 'monsters:weakness.none.description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monsters:weakness.vulnerable_to_fire.name',
      description: 'monsters:weakness.vulnerable_to_fire.description',
    },
  },
  {
    weight: 2,
    value: {
      name: 'monsters:weakness.vulnerable_to_light.name',
      description: 'monsters:weakness.vulnerable_to_light.description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'monsters:weakness.afraid_of_loud_noises.name',
      description: 'monsters:weakness.afraid_of_loud_noises.description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monsters:weakness.protects_offspring.name',
      description: 'monsters:weakness.protects_offspring.description',
    },
  },
  {
    weight: 5,
    value: {
      name: 'monsters:weakness.sensitive_eyes.name',
      description: 'monsters:weakness.sensitive_eyes.description',
    },
  },
  {
    weight: 3,
    value: {
      name: 'monsters:weakness.obsessed_with_all_that_glimmers.name',
      description:
        'monsters:weakness.obsessed_with_all_that_glimmers.description',
    },
  },
]

export const monsterMotivation: WeightedChoice<MonsterMotivation>[] = [
  { weight: 13, value: 'territory' },
  { weight: 4, value: 'pregnant' },
  { weight: 5, value: 'hunger' },
  { weight: 2, value: 'injured' },
  { weight: 1, value: 'parasite' },
  { weight: 5, value: 'alone' },
  { weight: 2, value: 'fun' },
  { weight: 2, value: 'looking_for_host' },
  { weight: 2, value: 'guarding_treasure' },
]

const getRandomPoison = (): PoisonType => choose(poisonTypes)

export const monsterAttacks: MonsterAttacks = {
  bash: {
    type: 'bash',
    chance: 1,
    damage: (_) => ({ blunt: 1 }),
    range: 'armsLength',
    attack: (rm) => rm.attributes.agility,
    description: 'monsters:attack.bash.description',
    valid: (rm) =>
      rm.attributes.strength >= 5 && rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  generic: {
    type: 'generic',
    chance: 1,
    damage: (_) => {
      const damage = chooseFromChoiceString('1^2|2^3|3')

      return rollD2() === 1 ? { slash: damage } : { blunt: damage }
    },
    range: 'armsLength',
    attack: (rm) => 4 + rm.attributes.agility,
    description: 'monsters:attack.generic.description',
    valid: (_) => true,
    singleUse: false,
  },
  bite: {
    type: 'bite',
    chance: 1,
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2^3|3') }),
    range: 'armsLength',
    attack: (rm) => 4 + rm.attributes.agility,
    description: 'monsters:attack.bite.description',
    valid: (rm) => rm.attackRequirements.fangs,
    singleUse: false,
  },
  lockedJaws: {
    type: 'lockedJaws',
    chance: 0.005,
    range: 'armsLength',
    attack: (rm) => 7 + rm.attributes.agility,
    damage: (_) => {
      const damage = chooseFromChoiceString('1^2|2^3|3')

      return rollD2() === 1 ? { slash: damage } : { blunt: damage }
    },
    description: 'monsters:attack.locked_jaws.description',
    valid: (rm) => rm.attackRequirements.fangs,
    singleUse: false,
  },
  throatBite: {
    type: 'throatBite',
    chance: 1,
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2^3|3') }),
    range: 'armsLength',
    attack: (rm) => 7 + rm.attributes.agility,
    description: 'monsters:attack.throat_bite.description',
    valid: (rm) => rm.attackRequirements.fangs && rm.attributes.agility > 3,
    singleUse: false,
  },
  breathFire: {
    type: 'breathFire',
    chance: 1,
    damage: (_) => ({ non_typical: 1 }),
    range: 'short',
    attack: (_) => 6 + rollD6(),
    description: 'monsters:attack.breath_fire.description',
    valid: (rm) => rm.attackRequirements.fireGlands,
    singleUse: false,
  },
  sprayFire: {
    type: 'sprayFire',
    chance: 0.01,
    damage: (_) => ({ non_typical: 1 }),
    range: 'short',
    attack: (_) => 6 + rollD6(),
    description: 'monsters:attack.spray_fire.description',
    valid: (rm) => rm.attackRequirements.fireGlands,
    singleUse: true,
  },
  deadlyGaze: {
    type: 'deadlyGaze',
    chance: 1,
    range: 'near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.deadly_gaze.description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  coldStrike: {
    type: 'coldStrike',
    chance: 1,
    range: 'near',
    attack: (_) => 6 + rollD6(),
    damage: (_) => ({ non_typical: 1 }),
    description: 'monsters:attack.cold_strike.description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  deathScream: {
    type: 'deathScream',
    chance: 0.005,
    range: 'near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.death_scream.description',
    valid: (rm) => rm.attackRequirements.undead,
    singleUse: false,
  },
  headbutt: {
    type: 'headbutt',
    chance: 1,
    damage: (_) => ({ blunt: chooseFromChoiceString('1^2|2') }),
    range: 'armsLength',
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'monsters:attack.headbutt.description',
    valid: (rm) => !rm.attackRequirements.horn,
    singleUse: false,
  },
  horn: {
    type: 'horn',
    chance: 1,
    range: 'armsLength',
    damage: (_) => ({ stab: chooseFromChoiceString('2^2|3') }),
    attack: (rm) => 5 + rm.attributes.agility,
    description: 'monsters:attack.horn.description',
    valid: (rm) => rm.attackRequirements.horn,
    singleUse: false,
  },
  roar: {
    type: 'roar',
    chance: 1,
    range: 'armsLength',
    attack: (_) => 3 + rollD3(),
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.roar.description',
    valid: (rm) => rm.attributes.strength >= 6,
    singleUse: false,
  },
  kick: {
    type: 'kick',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ blunt: 1 }),
    description: 'monsters:attack.kick.description',
    valid: (rm) => rm.attackRequirements.legs,
    singleUse: false,
  },
  backwardsKick: {
    type: 'backwardsKick',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ blunt: 1 }),
    description: 'monsters:attack.backwards_kick.description',
    valid: (rm) => rm.attackRequirements.legs && rm.limbs.legs >= 4,
    singleUse: false,
  },
  sweep: {
    type: 'sweep',
    chance: 1,
    range: 'near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monsters:attack.sweep.description',
    valid: (rm) => rm.attributes.agility >= 3,
    singleUse: false,
  },
  slash: {
    type: 'slash',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monsters:attack.slash.description',
    valid: (rm) =>
      rm.attackRequirements.claws || rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  eyeGourge: {
    type: 'eyeGourge',
    chance: 0.05,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ slash: 1 }),
    description: 'monsters:attack.eye_gourge.description',
    valid: (rm) =>
      rm.attackRequirements.claws || rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  clawFlurry: {
    type: 'clawFlurry',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rm.attributes.agility,
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2^3|3') }),
    description: 'monsters:attack.claw_flurry.description',
    valid: (rm) =>
      (rm.attackRequirements.claws || rm.attackRequirements.hasLimbs) &&
      rm.attributes.agility > 4,
    singleUse: false,
  },
  tailsSlash: {
    type: 'tailsSlash',
    chance: 1,
    range: 'near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (rm) => ({ blunt: 1 + rm.damageModifiers.tail_attack }),
    description: 'monsters:attack.tails_slash.description',
    valid: (rm) => rm.attackRequirements.tail,
    singleUse: false,
  },
  tentacleLash: {
    type: 'tentacleLash',
    chance: 1,
    range: 'near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ blunt: chooseFromChoiceString('1^2|2') }),
    description: 'monsters:attack.tentacle_lash.description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  tentacleFrenzy: {
    type: 'tentacleFrenzy',
    chance: 1,
    range: 'near',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: (_) => ({ blunt: chooseFromChoiceString('1^2|2') }),
    description: 'monsters:attack.tentacle_frenzy.description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  tentaclePenetrationArmsLength: {
    type: 'tentaclePenetrationArmsLength',
    chance: 0.05,
    range: 'armsLength',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: (_) => ({ slash: chooseFromChoiceString('1|2') }),
    description: 'monsters:attack.tentacle_penetration_arms_length.description',
    valid: (rm) =>
      !rm.attackRequirements.tentacles &&
      rm.description.heads.some((h) => h.key === 'tentacles_with_count'),
    singleUse: false,
  },
  tentaclePenetrationNear: {
    type: 'tentaclePenetrationNear',
    chance: 0.05,
    range: 'near',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: (_) => ({ slash: chooseFromChoiceString('1|2') }),
    description: 'monsters:attack.tentacle_penetration_near.description',
    valid: (rm) => rm.attackRequirements.tentacles,
    singleUse: false,
  },
  devour: {
    type: 'devour',
    chance: 1,
    range: 'armsLength',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ slash: chooseFromChoiceString('1^2|2') }),
    description: 'monsters:attack.devour.description',
    valid: (rm) => rm.attributes.strength >= 14,
    singleUse: false,
  },
  spitAcid: {
    type: 'spitAcid',
    chance: 1,
    range: 'near',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ non_typical: 1 }),
    description: 'monsters:attack.spit_acid.description',
    valid: (rm) => rm.attackRequirements.acidGlands,
    singleUse: false,
  },
  sprayAcid: {
    type: 'sprayAcid',
    chance: 0.01,
    range: 'short',
    attack: (_) => 4 + rollD6(),
    damage: (_) => ({ non_typical: 1 }),
    description: 'monsters:attack.spray_acid.description',
    valid: (rm) => rm.attackRequirements.acidGlands,
    singleUse: true,
  },
  diveAttack: {
    type: 'diveAttack',
    chance: 1,
    range: 'near',
    attack: (rm) => 4 + rm.attributes.agility,
    damage: (rm) => ({ slash: Math.round(rm.attributes.agility) }),
    description: 'monsters:attack.dive_attack.description',
    valid: (rm) => rm.attackRequirements.wings,
    singleUse: false,
  },
  whirlwind: {
    type: 'whirlwind',
    chance: 1,
    range: 'near',
    attack: (_) => 6,
    damage: (_) => ({ weapon: 1 }),
    description: 'monsters:attack.whirlwind.description',
    valid: (rm) => rm.attackRequirements.wings && rm.attributes.strength > 4,
    singleUse: false,
  },
  peck: {
    type: 'peck',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rm.attributes.agility,
    damage: (_) => ({ blunt: 1 }),
    description: 'monsters:attack.peck.description',
    valid: (rm) => rm.attackRequirements.hasBeak,
    singleUse: false,
  },
  beakThrow: {
    type: 'beakThrow',
    chance: 1,
    damage: (_) => ({ weapon: 1 }),
    range: 'armsLength',
    attack: (rm) => 8 + rm.attributes.agility,
    description: 'monsters:attack.beak_throw.description',
    valid: (rm) => rm.attackRequirements.hasBeak && rm.attributes.strength > 11,
    singleUse: false,
  },
  rush: {
    type: 'rush',
    chance: 1,
    range: 'near',
    attack: (rm) => rollD6() + rm.attributes.agility,
    damage: (_) => ({ blunt: 1 }),
    description: 'monsters:attack.rush.description',
    valid: (rm) => rm.movement.type === 'running',
    singleUse: false,
  },
  burrow: {
    type: 'burrow',
    chance: 1,
    range: 'near',
    attack: (rm) => rm.movement.distance + rm.attributes.agility,
    damage: (_) => ({ weapon: 1 }),
    description: 'monsters:attack.burrow.description',
    valid: (rm) => rm.movement.type === 'digging',
    singleUse: false,
  },
  theGroundShatters: {
    type: 'theGroundShatters',
    chance: 1,
    range: 'near',
    attack: (rm) => rm.movement.distance + rm.attributes.agility,
    description: 'monsters:attack.the_ground_shatters.description',
    valid: (rm) =>
      rm.movement.type === 'digging' && rm.attributes.strength > 13,
    singleUse: false,
  },
  taunt: {
    type: 'taunt',
    chance: 1,
    range: 'near',
    attack: (rm) => rollD6() + rm.damageModifiers.size,
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.taunt.description',
    valid: (rm) => rm.attackRequirements.canSpeak,
    singleUse: false,
  },
  plea: {
    type: 'plea',
    chance: 0.001,
    range: 'near',
    description: 'monsters:attack.plea.description',
    valid: (rm) => rm.attackRequirements.canSpeak,
    singleUse: false,
  },
  nightmareVisions: {
    type: 'nightmareVisions',
    chance: 0.25,
    range: 'near',
    attack: (_) => rollD4() + rollD4() + rollD3(),
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.nightmare_visions.description',
    valid: (rm) =>
      rm.traits.some((t) =>
        t.description().key.includes('Trait.Intelligent.Telepathy'),
      ),
    singleUse: false,
  },
  mindBurst: {
    type: 'mindBurst',
    chance: 1,
    range: 'near',
    attack: (_) => rollD3() * 2,
    damage: (_) => ({ fear: true }),
    description: 'monsters:attack.mind_burst.description',
    valid: (rm) =>
      rm.traits.some((t) =>
        t.description().key.includes('Trait.Intelligent.Telepathy'),
      ) && rm.damageModifiers.telepathic > 1,
    singleUse: false,
  },
  wrapAttack: {
    type: 'wrapAttack',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rollD6() + rm.attributes.agility,
    damage: (rm) => ({ blunt: rm.movement.distance }),
    description: 'monsters:attack.wrap_attack.description',
    valid: (rm) =>
      rm.movement.type === 'slithering' || !rm.attackRequirements.hasLimbs,
    singleUse: false,
  },
  poisonSpit: {
    type: 'poisonSpit',
    chance: 0.05,
    range: 'near',
    attack: (_) => rollD6() + 4,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.poison_spit.description',
    valid: (rm) => rm.attackRequirements.isPoisonous,
    singleUse: false,
  },
  venemousBite: {
    type: 'venemousBite',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.venemous_bite.description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.fangs,
    singleUse: false,
  },
  poisonScratch: {
    type: 'poisonScratch',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.poison_scratch.description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.claws,
    singleUse: false,
  },
  poisonTailAttack: {
    type: 'poisonTailAttack',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.poison_tail_attack.description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.spikedTail,
    singleUse: false,
  },
  poisonTentacleAttack: {
    type: 'poisonTentacleAttack',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.poison_tentacle_attack.description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  poisonHornAttack: {
    type: 'poisonHornAttack',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: 1,
      poison: {
        potency: rollD6() + 2,
        type: getRandomPoison(),
      },
    }),
    description: 'monsters:attack.poison_horn_attack.description',
    valid: (rm) =>
      rm.attackRequirements.isPoisonous && rm.attackRequirements.horn,
    singleUse: false,
  },
  punch: {
    type: 'punch',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.melee,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.punch.description',
    valid: (rm) => rm.limbs.arms > 0,
    singleUse: false,
  },
  flyingFists: {
    type: 'flyingFists',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.melee,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.flying_fists.description_count',
    descriptionExtras: (rm) => ({ count: Math.ceil(rm.limbs.arms / 2) }),
    valid: (rm) => rm.limbs.arms > 2,
    singleUse: false,
  },
  fistsOfFury: {
    type: 'fistsOfFury',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => rollD4() + rollD4() + rm.skills.melee,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.fists_of_fury.description_count',
    descriptionExtras: (rm) => ({ count: Math.ceil(rm.limbs.arms / 2) }),
    valid: (rm) => rm.limbs.arms > 2,
    singleUse: false,
  },
  distraction: {
    type: 'distraction',
    chance: 1,
    range: 'near',
    description: 'monsters:attack.distraction.description',
    valid: (rm) => rm.attributes.agility > 3,
    singleUse: false,
  },
  infectedScratch: {
    type: 'infectedScratch',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monsters:attack.infected_scratch.description',
    valid: (rm) => rm.attackRequirements.isSick && rm.attackRequirements.claws,
    singleUse: false,
  },
  diseasedBite: {
    type: 'diseasedBite',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monsters:attack.diseased_bite.description',
    valid: (rm) => rm.attackRequirements.isSick && rm.attackRequirements.fangs,
    singleUse: false,
  },
  infectedTailSwipe: {
    type: 'infectedTailSwipe',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monsters:attack.infected_tail_swipe.description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.spikedTail,
    singleUse: false,
  },
  infectedTentacleSwipe: {
    type: 'infectedTentacleSwipe',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({
      slash: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monsters:attack.infected_tentacle_swipe.description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  diseasedTouch: {
    type: 'diseasedTouch',
    chance: 0.005,
    range: 'armsLength',
    attack: (rm) => 1 + rm.attributes.agility,
    damage: () => ({
      blunt: chooseFromChoiceString('1^2|2^3|3'),
      Disease: chooseFromChoiceString('4|5|6'),
    }),
    description: 'monsters:attack.diseased_touch.description',
    valid: (rm) =>
      rm.attackRequirements.isSick && rm.attackRequirements.tentacles,
    singleUse: false,
  },
  adventureToss: {
    type: 'adventureToss',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 8 + rm.attributes.agility,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.adventure_toss.description',
    valid: (rm) => rm.limbs.arms > 0 && rm.attributes.strength > 11,
    singleUse: false,
  },
  deathRattle: {
    type: 'deathRattle',
    chance: 1,
    range: 'armsLength',
    attack: (rm) => 3 + rm.attributes.agility,
    damage: () => ({ slash: 1 }),
    description: 'monsters:attack.death_rattle.description',
    valid: (rm) => rm.attackRequirements.fangs && rm.attributes.strength > 7,
    singleUse: false,
  },
  squash: {
    type: 'squash',
    chance: 1,
    range: 'near',
    attack: (_) => rollD6() + 6,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.squash.description',
    valid: (rm) => rm.attributes.strength > 13,
    singleUse: false,
  },
  fallFromTheSky: {
    type: 'fallFromTheSky',
    chance: 1,
    range: 'near',
    attack: (_) => 8,
    description: 'monsters:attack.fall_from_the_sky.description',
    valid: (rm) => rm.attributes.strength > 4 && rm.attackRequirements.wings,
    singleUse: false,
  },
  rainOfRocks: {
    type: 'rainOfRocks',
    chance: 1,
    range: 'near',
    attack: (_) => 6,
    damage: () => ({ blunt: 1 }),
    description: 'monsters:attack.rain_of_rocks.description',
    valid: (rm) => rm.attackRequirements.wings,
    singleUse: false,
  },
}
