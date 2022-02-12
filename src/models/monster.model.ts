import { WeightedChoice } from '../functions/dice.functions'

import { Definition } from '../types/definition.type'
import { MonsterAttackRange } from './attack-range'
import { Attributes, AttributesViewModel } from './attributes.model'
import { MonsterSkillsValues } from './skills.model'

export interface Monster {
  name: string
  attributes: Attributes
  pageReference?: number
}

export interface MonsterViewModel {
  name: string
  attributes: AttributesViewModel
  pageReference?: number
}

export interface WeightedRandomMonsterChoice<T> extends WeightedChoice {
  value: T
}

export type ArmorTypeLabel =
  | 'Skin'
  | 'SoftFur'
  | 'ThickFur'
  | 'Feathers'
  | 'Scales'
  | 'Shell'
  | 'BonePlates'
  | 'ArmoredHide'

export type MonsterArmor = {
  key: ArmorTypeLabel
  armor: number
}

export interface ArmorViewModel {
  values: boolean[]
  label: ArmorTypeLabel
}

export type MonsterSize =
  | 'Puny'
  | 'Small'
  | 'Average'
  | 'Large'
  | 'Big'
  | 'Huge'
  | 'Gigantic'

export type MonsterType =
  | 'Grazing'
  | 'Herbivore'
  | 'Gatherer'
  | 'Scavenger'
  | 'Predator'
  | 'AggressivePredator'

export type LimbChoices =
  | 'None'
  | 'Tentacles'
  | 'TwoLegs'
  | 'TwoLegsTwoArms'
  | 'FourLegs'
  | 'FourLegsTwoArms'
  | 'Wings'
  | 'Many'

export type LimbChoicesWithAmount = {
  key: LimbChoices
  monsterLimbs: () => MonsterLimbs
}

export type Limb = 'Tentacles' | 'Legs' | 'Arms' | 'Wings'

export type MonsterLimbs = {
  [L in Limb]: number
}

export type HeadChoices =
  | 'Missing'
  | 'Beak'
  | 'HornWithCount'
  | 'ElkHorns'
  | 'TentaclesWithCount'
  | 'InsectoidEyes'
  | 'SideEyesWithCount'
  | 'ManyEyes'
  | 'BigMane'
  | 'LongTongue'
  | 'BigEars'
  | 'Fin'
  | 'RollTwice'

export type HeadChoiceWithCount = {
  key: HeadChoices
  count?: number
}

export type TailChoices = 'None' | 'Tail' | 'SpikedTail'

export type MovementType =
  | 'Slithering'
  | 'Digging'
  | 'Swimming'
  | 'Running'
  | 'Flying'
  | 'Climbing'

export type MovementDistanceFunction = (agility: number) => number

export type MonsterHome =
  | 'Burrow'
  | 'Ruin'
  | 'WateringHole'
  | 'TreeOrHighPoint'
  | 'Cave'
  | 'Ravine'
  | 'Den'

export type MonsterSkillListItem = { name: string; value: number }

export type MonsterTrait = {
  name: string
  description: () => MonsterDescriptionItemViewModel
  apply: (rm: RandomMonster) => RandomMonster
}

export type MonsterTraitViewModel = {
  name: string
  description: MonsterDescriptionItemViewModel
}
export type MonsterWeakness = Definition
export type MonsterMotivation =
  | 'Territory'
  | 'Pregnant'
  | 'Hunger'
  | 'Injured'
  | 'Parasite'
  | 'Alone'
  | 'Fun'
  | 'LookingForHost'
  | 'GuardingTreasure'

export type MonsterAttackType =
  | 'Slash'
  | 'EyeGourge'
  | 'ClawFlurry'
  | 'Bite'
  | 'LockedJaws'
  | 'ThroatBite'
  | 'Horn'
  | 'Headbutt'
  | 'Roar'
  | 'TailsSlash'
  | 'TentacleLash'
  | 'TentacleFrenzy'
  | 'TentaclePenetrationArmsLength'
  | 'TentaclePenetrationNear'
  | 'Bash'
  | 'Sweep'
  | 'BreathFire'
  | 'SprayFire'
  | 'SpitAcid'
  | 'SprayAcid'
  | 'DeadlyGaze'
  | 'ColdStrike'
  | 'DeathScream'
  | 'Kick'
  | 'BackwardsKick'
  | 'Devour'
  | 'DiveAttack'
  | 'Whirlwind'
  | 'Peck'
  | 'Squash'
  | 'BeakThrow'
  | 'AdventureToss'
  | 'DeathRattle'
  | 'InfectedScratch'
  | 'DiseasedBite'
  | 'InfectedTailSwipe'
  | 'InfectedTentacleSwipe'
  | 'DiseasedTouch'
  | 'Distraction'
  | 'Punch'
  | 'FlyingFists'
  | 'FistsOfFury'
  | 'PoisonSpit'
  | 'VenemousBite'
  | 'PoisonScratch'
  | 'PoisonTailAttack'
  | 'PoisonTentacleAttack'
  | 'PoisonHornAttack'
  | 'NightmareVisions'
  | 'MindBurst'
  | 'Taunt'
  | 'Plea'
  | 'Burrow'
  | 'TheGroundShatters'
  | 'Rush'
  | 'WrapAttack'
  | 'FallFromTheSky'
  | 'RainOfRocks'
  | 'Generic'

export type MonsterDamageType =
  | 'Slash'
  | 'Blunt'
  | 'Stab'
  | 'Poison'
  | 'Fear'
  | 'NonTypical'
  | 'Weapon'
  | 'Disease'

export type MonsterDamageModifierType =
  | Extract<MonsterDamageType, 'Slash' | 'Blunt'>
  | 'TailAttack'
  | 'Size'
  | 'Telepathic'

export type PoisonType = 'Lethal' | 'Paralyzing' | 'Sleeping' | 'Hallucinogenic'

export type PoisonDamage = {
  type: PoisonType
  potency: number
}

export type MonsterDamage = {
  [M in Exclude<MonsterDamageType, 'Poison' | 'TailAttack' | 'Fear'>]?: number
} & { Poison?: PoisonDamage; Fear?: boolean }

export type MonsterAttack = {
  type: MonsterAttackType
  attack?: (rm: IntermediateRandomMonster) => number
  damage?: (rm: IntermediateRandomMonster) => MonsterDamage
  range: MonsterAttackRange
  description: string
  descriptionExtras?: (rm: IntermediateRandomMonster) => { count: number }
  valid: (rm: IntermediateRandomMonster) => boolean
  singleUse: boolean
  chance: number
}

export type MonsterAttackViewModel = {
  type: MonsterAttackType
  attack?: number
  damage?: MonsterDamage
  range: `Range.${MonsterAttackRange}`
  description: string
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

export type MonsterDescriptionItemViewModel = { key: string; count?: number }

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
    name: `Motivation.${MonsterMotivation}.Name`
    description: `Motivation.${MonsterMotivation}.Description`
  }
  damageModifiers: MonsterDamageModifiers
  attacks: MonsterAttackViewModel[]
  attackRequirements: MonsterAttackRequirements
}
