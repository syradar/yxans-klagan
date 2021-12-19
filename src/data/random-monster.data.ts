import { getRandomInt, getRandomT6 } from '../functions/dice.functions'
import { isEven } from '../functions/math.functions'
import {
  maybe,
  numberToBooleans,
  validNumber,
} from '../functions/utils.functions'
import { AttributeViewModel } from '../models/attributes.model'
import {
  ArmorTypeLabel,
  HeadChoices,
  LimbChoices,
  MonsterHome,
  MonsterSize,
  MonsterTrait,
  MonsterType,
  MovementDistanceFunction,
  MovementType,
  TailChoices,
  WeightedRandomMonsterChoice,
} from '../models/monster.model'

export const sizes: WeightedRandomMonsterChoice<{
  size: MonsterSize
  strength: (diceFn?: () => number) => number
}>[] = [
  {
    weight: 4,
    value: { size: 'Puny', strength: (_ = getRandomT6) => 1 },
  },
  {
    weight: 3,
    value: { size: 'Small', strength: (_ = getRandomT6) => 2 },
  },
  {
    weight: 8,
    value: { size: 'Average', strength: (_ = getRandomT6) => 3 },
  },
  {
    weight: 7,
    value: { size: 'Large', strength: (_ = getRandomT6) => 4 },
  },
  {
    weight: 7,
    value: { size: 'Big', strength: (_ = getRandomT6) => 8 },
  },
  {
    weight: 3,
    value: { size: 'Huge', strength: (diceFn = getRandomT6) => 14 + diceFn() },
  },
  {
    weight: 4,
    value: {
      size: 'Gigantic',
      strength: (diceFn = getRandomT6) => 30 + diceFn() + diceFn(),
    },
  },
]

export const types: WeightedRandomMonsterChoice<{
  type: MonsterType
  agility: number
}>[] = [
  {
    weight: 3,
    value: { type: 'Grazing', agility: 1 },
  },
  {
    weight: 3,
    value: { type: 'Herbivore', agility: 2 },
  },
  {
    weight: 5,
    value: { type: 'Gatherer', agility: 2 },
  },
  {
    weight: 7,
    value: { type: 'Scavenger', agility: 4 },
  },
  {
    weight: 12,
    value: { type: 'Predator', agility: 5 },
  },
  {
    weight: 6,
    value: { type: 'AggressivePredator', agility: 8 },
  },
]

export const limbs: WeightedRandomMonsterChoice<LimbChoices>[] = [
  {
    weight: 3,
    value: 'None',
  },
  {
    weight: 5,
    value: 'Tentacles',
  },
  {
    weight: 3,
    value: 'TwoLegs',
  },
  {
    weight: 3,
    value: 'TwoLegsTwoArms',
  },
  {
    weight: 10,
    value: 'FourLegs',
  },
  {
    weight: 5,
    value: 'FourLegsTwoArms',
  },
  {
    weight: 5,
    value: 'Wings',
  },
  {
    weight: 5,
    value: 'Many',
  },
]

export const headChoices: WeightedRandomMonsterChoice<{
  key: HeadChoices
  count?: number
}>[] = [
  {
    weight: 1,
    value: { key: 'Missing' },
  },
  {
    weight: 5,
    value: { key: 'Beak' },
  },
  {
    weight: 6,
    value: { key: 'HornWithCount', count: getRandomInt(1, 3) },
  },
  {
    weight: 3,
    value: { key: 'ElkHorns' },
  },
  {
    weight: 4,
    value: { key: 'TentaclesWithCount', count: getRandomT6() + 2 },
  },
  {
    weight: 2,
    value: { key: 'InsectoidEyes' },
  },
  {
    weight: 3,
    value: {
      key: 'SideEyesWithCount',
      count: [getRandomT6() + getRandomT6()].map((e) =>
        isEven(e) ? e : e + 1,
      )[0],
    },
  },
  {
    weight: 1,
    value: { key: 'ManyEyes' },
  },
  {
    weight: 2,
    value: { key: 'BigMane' },
  },
  {
    weight: 1,
    value: { key: 'LongTongue' },
  },
  {
    weight: 2,
    value: { key: 'BigEars' },
  },
  {
    weight: 2,
    value: { key: 'Fin' },
  },
  {
    weight: 3,
    value: { key: 'RollTwice' },
  },
]

export const tailChoices: WeightedRandomMonsterChoice<{
  key: TailChoices
  damage: number
}>[] = [
  {
    weight: 3,
    value: {
      key: 'None',
      damage: 0,
    },
  },
  {
    weight: 2,
    value: {
      key: 'Tail',
      damage: 0,
    },
  },
  {
    weight: 1,
    value: {
      key: 'SpikedTail',
      damage: 1,
    },
  },
]

export const armorChoices: WeightedRandomMonsterChoice<{
  key: ArmorTypeLabel
  armor: number
}>[] = [
  {
    weight: 4,
    value: {
      key: 'Skin',
      armor: 0,
    },
  },
  {
    weight: 4,
    value: {
      key: 'SoftFur',
      armor: 1,
    },
  },
  {
    weight: 10,
    value: {
      key: 'ThickFur',
      armor: 2,
    },
  },
  {
    weight: 4,
    value: {
      key: 'Feathers',
      armor: 2,
    },
  },
  {
    weight: 5,
    value: {
      key: 'Scales',
      armor: 3,
    },
  },
  {
    weight: 4,
    value: {
      key: 'Shell',
      armor: 5,
    },
  },
  {
    weight: 3,
    value: {
      key: 'BonePlates',
      armor: 7,
    },
  },
  {
    weight: 2,
    value: {
      key: 'ArmoredHide',
      armor: 9,
    },
  },
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
  {
    weight: 4,
    value: 'Burrow',
  },
  {
    weight: 5,
    value: 'Ruin',
  },
  {
    weight: 5,
    value: 'WateringHole',
  },
  {
    weight: 4,
    value: 'TreeOrHighPoint',
  },
  {
    weight: 5,
    value: 'Cave',
  },
  {
    weight: 5,
    value: 'Ravine',
  },
  {
    weight: 8,
    value: 'Den',
  },
]

export const monsterSkillValues: WeightedRandomMonsterChoice<number>[] = [
  {
    weight: 19,
    value: 0,
  },
  {
    weight: 5,
    value: 1,
  },
  {
    weight: 4,
    value: 2,
  },
  {
    weight: 4,
    value: 3,
  },
  {
    weight: 2,
    value: 4,
  },
  {
    weight: 2,
    value: 5,
  },
]

