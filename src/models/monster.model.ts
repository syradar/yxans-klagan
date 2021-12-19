import { WeightedChoice } from '../functions/dice.functions'
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

type MonsterAttackTypes = 'Tail'
type MonsterAttackDamage = { [T in MonsterAttackTypes]: number }

type Skills = 'Melee' | 'Stealth' | 'Move' | 'Scouting'
export type MonsterSkills = { [S in Skills]: number }

export interface RandomMonster extends Monster {
  size: MonsterSize
  type: MonsterType
  limbs: MonsterLimbs
  description: {
    head: string
    tail?: string
    limbs: string
  }
  damage: MonsterAttackDamage
  armor: ArmorViewModel
  home: MonsterHome
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
  description: {
    head: string
    tail?: string
    limbs: string
  }
  damage: MonsterAttackDamage
  armor: ArmorViewModel
  movement: MonsterMovement
  home: MonsterHome
  skills: MonsterSkills
}
