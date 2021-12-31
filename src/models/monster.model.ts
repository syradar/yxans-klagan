import { TFunction } from 'react-i18next'
import { WeightedChoice } from '../functions/dice.functions'
import { Definition } from '../types/definition.type'
import { Attributes, AttributesViewModel } from './attributes.model'

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

type Skills = 'Melee' | 'Stealth' | 'Move' | 'Scouting'
export type MonsterSkills = { [S in Skills]: number }
export type MonsterSkillListItem = { name: string; value: number }

export type MonsterTrait = {
  name: string
  description: (t: TFunction<('monsters' | 'common')[]>) => string
  apply: (rm: RandomMonster) => RandomMonster
}

export type MonsterTraitViewModel = Definition
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
  | 'Bite'
  | 'Horn'
  | 'Headbutt'
  | 'Roar'
  | 'TailsSlash'
  | 'TentacleLash'
  | 'Bash'
  | 'Sweep'
  | 'BreathFire'
  | 'SpitAcid'
  | 'DeadlyGaze'
  | 'Kick'
  | 'Devour'
  | 'DiveAttack'

export type MonsterDamageType = 'Slashing' | 'Crushing' | 'TailAttack'

export type MonsterAttackRange = 'ArmsLength' | 'Near' | 'Short'

export type MonsterAttack = {
  type: MonsterAttackType
  attack?: (rm: RandomMonster) => number
  damage?: (rm: RandomMonster) => number | string
  range: MonsterAttackRange
  description: string
  valid: (rm: RandomMonster) => boolean
}

export type MonsterAttackViewModel = {
  type: MonsterAttackType
  attack?: number
  damage?: number | string
  range: `Range.${MonsterAttackRange}`
  description: string
}

export type MonsterAttacks = { [T in MonsterAttackType]: MonsterAttack }
type MonsterDamageModifiers = { [M in MonsterDamageType]: number }

export type MonsterDescription = {
  heads: HeadChoiceWithCount[]
  tail: {
    key: TailChoices
    damage: number
  }
  limbs: MonsterLimbs
}

export type MonsterDescriptionViewModel = {
  head: string
  tail?: string
  limbs: string
}

export interface RandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: MonsterDescription
  armor: ArmorViewModel
  home: MonsterHome
  skills: MonsterSkills
  traits: MonsterTrait[]
  weakness: MonsterWeakness
  motivation: MonsterMotivation
  damageModifiers: MonsterDamageModifiers
  attackRequirements: {
    tail: boolean
    tentacles: boolean
    undead: boolean
    acidGlands: boolean
    fireGlands: boolean
    fangs: boolean
    legs: boolean
    claws: boolean
    horn: boolean
    wings: boolean
  }
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
  attackRequirements: {
    tail: boolean
    tentacles: boolean
    undead: boolean
    acidGlands: boolean
    fireGlands: boolean
    fangs: boolean
    legs: boolean
    claws: boolean
    horn: boolean
    wings: boolean
  }
}
