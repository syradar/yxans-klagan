import { Definition } from '../../@types/definition.type'
import { camelCaseToSnakeCase } from '../../functions/casing'
import {
  TranslationDict,
  translationDict,
} from '../../functions/translation-dict'
import { MonsterAttackRange } from '../../models/attack-range'
import { Attributes, AttributesViewModel } from '../../models/attributes.model'
import { MonsterSkillsValues } from '../../models/skills.model'
import { TranslationKey } from '../../store/translations/translation.model'
import { CommunityMonsterAttackType } from './community-monster.model'

export interface Monster {
  id: string
  name: TranslationKey<'common'>
  attributes: Attributes
  pageReference?: number
}

export interface MonsterViewModel {
  id: string
  name: TranslationKey<'common'>
  attributes: AttributesViewModel
  pageReference?: number
}

export type ArmorTypeLabel =
  | 'skin'
  | 'softFur'
  | 'thickFur'
  | 'feathers'
  | 'scales'
  | 'shell'
  | 'bonePlates'
  | 'armoredHide'
export const monsterArmorTypeTranslationDict: Record<
  ArmorTypeLabel,
  TranslationKey<'monster'>
> = {
  skin: 'monster:armor.skin',
  softFur: 'monster:armor.soft_fur',
  thickFur: 'monster:armor.thick_fur',
  feathers: 'monster:armor.feathers',
  scales: 'monster:armor.scales',
  shell: 'monster:armor.shell',
  bonePlates: 'monster:armor.bone_plates',
  armoredHide: 'monster:armor.armored_hide',
}

export type MonsterArmor = {
  key: ArmorTypeLabel
  armor: number
}

export interface ArmorViewModel {
  values: boolean[]
  label: ArmorTypeLabel
}

const monsterSizes = [
  'puny',
  'small',
  'average',
  'large',
  'big',
  'huge',
  'gigantic',
] as const
export type MonsterSize = (typeof monsterSizes)[number]

export const createMonsterSizeTranslationDict = (monsterType: MonsterType) =>
  monsterSizes.reduce(
    (acc, label) => ({
      ...acc,
      [label]: `monster:size.${camelCaseToSnakeCase(label)}${
        isDefinitiveArticle[monsterType] ? '_def' : ''
      }`,
    }),
    {} as TranslationDict<MonsterSize, 'monster', 'size.'>,
  )

const isDefinitiveArticle: Record<MonsterType, boolean> = {
  grazing: true,
  herbivore: false,
  gatherer: false,
  scavenger: false,
  predator: true,
  aggressivePredator: true,
}

const monsterTypes = [
  'grazing',
  'herbivore',
  'gatherer',
  'scavenger',
  'predator',
  'aggressivePredator',
]
export type MonsterType = (typeof monsterTypes)[number]

export const monsterTypeTranslationDict = translationDict(
  monsterTypes,
  'monster',
  'type.',
)

export type LimbChoices =
  | 'none'
  | 'tentacles'
  | 'two_legs'
  | 'two_legs_two_arms'
  | 'four_legs'
  | 'four_legs_two_arms'
  | 'wings'
  | 'many'

export type LimbChoicesWithAmount = {
  key: LimbChoices
  monsterLimbs: () => MonsterLimbs
}

export type Limb = 'tentacles' | 'legs' | 'arms' | 'wings'

export type MonsterLimbs = {
  [L in Limb]: number
}

export type HeadChoices =
  | 'missing'
  | 'beak'
  | 'horn_with_count'
  | 'elk_horns'
  | 'tentacles_with_count'
  | 'insectoid_eyes'
  | 'side_eyes_with_count'
  | 'many_eyes'
  | 'big_mane'
  | 'long_tongue'
  | 'big_ears'
  | 'fin'
  | 'roll_twice'

export type HeadChoiceWithCount = {
  key: HeadChoices
  count?: number
}

export type TailChoices = 'none' | 'tail' | 'spiked_tail'

const movementTypes = [
  'slithering',
  'digging',
  'swimming',
  'running',
  'flying',
  'climbing',
] as const
export type MovementType = (typeof movementTypes)[number]
export const movementTypeTranslationDict = translationDict(
  movementTypes,
  'monster',
  'movement.',
)

export type MovementDistanceFunction = (agility: number) => number

export type MonsterHome =
  | 'burrow'
  | 'ruin'
  | 'watering_hole'
  | 'tree_or_high_point'
  | 'cave'
  | 'ravine'
  | 'den'

export const monsterHomeLabels: Record<
  MonsterHome,
  TranslationKey<'monster'>
> = {
  burrow: 'monster:homes.burrow',
  ruin: 'monster:homes.ruin',
  watering_hole: 'monster:homes.watering_hole',
  tree_or_high_point: 'monster:homes.tree_or_high_point',
  cave: 'monster:homes.cave',
  ravine: 'monster:homes.ravine',
  den: 'monster:homes.den',
}

export type MonsterSkillListItem = {
  name: TranslationKey<'monster'>
  value: number
}

export type MonsterTrait = {
  name: TranslationKey<'monster'>
  description: () => MonsterDescriptionItemViewModel
  apply: (rm: RandomMonster) => RandomMonster
}

export type MonsterTraitViewModel = {
  name: TranslationKey<'monster'>
  description: MonsterDescriptionItemViewModel
}
export type MonsterWeakness = Definition<
  TranslationKey<'monster'>,
  TranslationKey<'monster'>
>
export type MonsterMotivation =
  | 'territory'
  | 'pregnant'
  | 'hunger'
  | 'injured'
  | 'parasite'
  | 'alone'
  | 'fun'
  | 'looking_for_host'
  | 'guarding_treasure'

export type MonsterAttackType =
  | 'slash'
  | 'eyeGourge'
  | 'clawFlurry'
  | 'bite'
  | 'lockedJaws'
  | 'throatBite'
  | 'horn'
  | 'headbutt'
  | 'roar'
  | 'tailsSlash'
  | 'tentacleLash'
  | 'tentacleFrenzy'
  | 'tentaclePenetrationArmsLength'
  | 'tentaclePenetrationNear'
  | 'bash'
  | 'sweep'
  | 'breathFire'
  | 'sprayFire'
  | 'spitAcid'
  | 'sprayAcid'
  | 'deadlyGaze'
  | 'coldStrike'
  | 'deathScream'
  | 'kick'
  | 'backwardsKick'
  | 'devour'
  | 'diveAttack'
  | 'whirlwind'
  | 'peck'
  | 'squash'
  | 'beakThrow'
  | 'adventureToss'
  | 'deathRattle'
  | 'infectedScratch'
  | 'diseasedBite'
  | 'infectedTailSwipe'
  | 'infectedTentacleSwipe'
  | 'diseasedTouch'
  | 'distraction'
  | 'punch'
  | 'flyingFists'
  | 'fistsOfFury'
  | 'poisonSpit'
  | 'venemousBite'
  | 'poisonScratch'
  | 'poisonTailAttack'
  | 'poisonTentacleAttack'
  | 'poisonHornAttack'
  | 'nightmareVisions'
  | 'mindBurst'
  | 'taunt'
  | 'plea'
  | 'burrow'
  | 'theGroundShatters'
  | 'rush'
  | 'wrapAttack'
  | 'fallFromTheSky'
  | 'rainOfRocks'
  | 'generic'
export const monsterAttackTypeTranslationDict: Record<
  CommunityMonsterAttackType,
  TranslationKey<'monster'>
> = {
  slash: 'monster:attack.slash.type',
  eyeGourge: 'monster:attack.eye_gourge.type',
  clawFlurry: 'monster:attack.claw_flurry.type',
  bite: 'monster:attack.bite.type',
  lockedJaws: 'monster:attack.locked_jaws.type',
  throatBite: 'monster:attack.throat_bite.type',
  horn: 'monster:attack.horn.type',
  headbutt: 'monster:attack.headbutt.type',
  roar: 'monster:attack.roar.type',
  tailsSlash: 'monster:attack.tails_slash.type',
  tentacleLash: 'monster:attack.tentacle_lash.type',
  tentacleFrenzy: 'monster:attack.tentacle_frenzy.type',
  tentaclePenetrationArmsLength:
    'monster:attack.tentacle_penetration_arms_length.type',
  tentaclePenetrationNear: 'monster:attack.tentacle_penetration_near.type',
  bash: 'monster:attack.bash.type',
  sweep: 'monster:attack.sweep.type',
  breathFire: 'monster:attack.breath_fire.type',
  sprayFire: 'monster:attack.spray_fire.type',
  spitAcid: 'monster:attack.spit_acid.type',
  sprayAcid: 'monster:attack.spray_acid.type',
  deadlyGaze: 'monster:attack.deadly_gaze.type',
  coldStrike: 'monster:attack.cold_strike.type',
  deathScream: 'monster:attack.death_scream.type',
  kick: 'monster:attack.kick.type',
  backwardsKick: 'monster:attack.backwards_kick.type',
  devour: 'monster:attack.devour.type',
  diveAttack: 'monster:attack.dive_attack.type',
  whirlwind: 'monster:attack.whirlwind.type',
  peck: 'monster:attack.peck.type',
  squash: 'monster:attack.squash.type',
  beakThrow: 'monster:attack.beak_throw.type',
  adventureToss: 'monster:attack.adventure_toss.type',
  deathRattle: 'monster:attack.death_rattle.type',
  infectedScratch: 'monster:attack.infected_scratch.type',
  diseasedBite: 'monster:attack.diseased_bite.type',
  infectedTailSwipe: 'monster:attack.infected_tail_swipe.type',
  infectedTentacleSwipe: 'monster:attack.infected_tentacle_swipe.type',
  diseasedTouch: 'monster:attack.diseased_touch.type',
  distraction: 'monster:attack.distraction.type',
  punch: 'monster:attack.punch.type',
  flyingFists: 'monster:attack.flying_fists.type',
  fistsOfFury: 'monster:attack.fists_of_fury.type',
  poisonSpit: 'monster:attack.poison_spit.type',
  venemousBite: 'monster:attack.venemous_bite.type',
  poisonScratch: 'monster:attack.poison_scratch.type',
  poisonTailAttack: 'monster:attack.poison_tail_attack.type',
  poisonTentacleAttack: 'monster:attack.poison_tentacle_attack.type',
  poisonHornAttack: 'monster:attack.poison_horn_attack.type',
  nightmareVisions: 'monster:attack.nightmare_visions.type',
  mindBurst: 'monster:attack.mind_burst.type',
  taunt: 'monster:attack.taunt.type',
  plea: 'monster:attack.plea.type',
  burrow: 'monster:attack.burrow.type',
  theGroundShatters: 'monster:attack.the_ground_shatters.type',
  rush: 'monster:attack.rush.type',
  wrapAttack: 'monster:attack.wrap_attack.type',
  fallFromTheSky: 'monster:attack.fall_from_the_sky.type',
  rainOfRocks: 'monster:attack.rain_of_rocks.type',
  generic: 'monster:attack.generic.type',
  call_the_brood: 'monster:attack.call_the_brood.type',
  piercing_shriek: 'monster:attack.piercing_shriek.type',
  pounce: 'monster:attack.pounce.type',
  stab: 'monster:attack.stab.type',
  webshot: 'monster:attack.webshot.type',
}
export type MonsterDamageType =
  | 'slash'
  | 'blunt'
  | 'stab'
  | 'poison'
  | 'fear'
  | 'non_typical'
  | 'weapon'
  | 'disease'

export type MonsterDamageModifierType =
  | Extract<MonsterDamageType, 'slash' | 'blunt'>
  | 'tail_attack'
  | 'size'
  | 'telepathic'

export const poisonTypes = [
  'lethal',
  'paralyzing',
  'sleeping',
  'hallucinogenic',
] as const
export type PoisonType = (typeof poisonTypes)[number]
export const poisonTypeTranslationDict: Record<
  PoisonType,
  TranslationKey<'monster'>
> = {
  lethal: 'monster:poisons.lethal',
  paralyzing: 'monster:poisons.paralyzing',
  sleeping: 'monster:poisons.sleeping',
  hallucinogenic: 'monster:poisons.hallucinogenic',
}

export type PoisonDamage = {
  type: PoisonType
  potency: number
}

export type MonsterDamage = {
  [M in Exclude<MonsterDamageType, 'poison' | 'tail_attack' | 'fear'>]?: number
} & { poison?: PoisonDamage; fear?: boolean }

export type MonsterAttackMinimalContext = Pick<
  IntermediateRandomMonster,
  | 'attributes'
  | 'movement'
  | 'attackRequirements'
  | 'limbs'
  | 'damageModifiers'
  | 'description'
  | 'traits'
  | 'skills'
>
export type MonsterAttack<T = MonsterAttackType> = {
  type: T
  attack?: (rm: MonsterAttackMinimalContext) => number
  damage?: (rm: MonsterAttackMinimalContext) => MonsterDamage
  range: MonsterAttackRange
  description: TranslationKey<'monster'>
  descriptionExtras?: (rm: MonsterAttackMinimalContext) => { count: number }
  valid: (rm: MonsterAttackMinimalContext) => boolean
  singleUse: boolean
  chance: number
}

export type MonsterAttackViewModel<T = MonsterAttackType> = {
  type: T
  attack?: number
  damage?: MonsterDamage
  range: TranslationKey<'common'>
  description: TranslationKey<'monster'>
  descriptionExtras?: { count: number }
}

export type MonsterAttacks = { [T in MonsterAttackType]: MonsterAttack }
export type MonsterDamageModifiers = {
  [M in MonsterDamageModifierType]: number
}

export type MonsterAttackRequirements = {
  tail: boolean
  spikedTail: boolean
  tentacles: boolean
  undead: boolean
  acidGlands: boolean
  fireGlands: boolean
  fangs: boolean
  legs: boolean
  claws: boolean
  horn: boolean
  wings: boolean
  hasLimbs: boolean
  hasBeak: boolean
  canSpeak: boolean
  isPoisonous: boolean
  isSick: boolean
}

export type MonsterDescription = {
  heads: HeadChoiceWithCount[]
  tail: {
    key: TailChoices
    damage: number
  }
  limbs: MonsterLimbs
}

export type MonsterDescriptionItemViewModel = {
  key: TranslationKey<'monster'>
  count?: number
}

export type MonsterDescriptionViewModel = {
  head: MonsterDescriptionItemViewModel[]
  tail?: string
  limbs: MonsterDescriptionItemViewModel[]
}

export interface RandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
}

export interface IntermediateRandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkillsValues
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: MonsterAttackRequirements
  movement: MonsterMovement
}

export type MonsterMovement = {
  type: MovementType
  distance: number
}

export interface RandomMonsterViewModel
  extends Omit<MonsterViewModel, 'name' | 'pageReference'> {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescriptionViewModel
  armor: ArmorViewModel
  movement: MonsterMovement
  home: MonsterHome
  skills: MonsterSkillListItem[]
  traits: MonsterTraitViewModel[]
  weakness: MonsterWeakness
  motivation: {
    name: `monster:motivation.${MonsterMotivation}.name`
    description: `monster:motivation.${MonsterMotivation}.description`
  }
  damageModifiers: MonsterDamageModifiers
  attacks: MonsterAttackViewModel[]
  attackRequirements: MonsterAttackRequirements
}
