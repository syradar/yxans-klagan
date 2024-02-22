import { compose, sum, pluck } from 'ramda'
import { Definition } from '../../../@types/definition.type'
import { WeightedChoice } from '../../../functions/dice.functions'
import {
  MonsterSize,
  MonsterType,
  MovementType,
  MovementDistanceFunction,
  MonsterHome,
  MonsterMotivation,
} from '../monster.model'
import {
  sizes,
  types,
  movementTypes,
  homes,
  defaultMovementDistanceFunction,
  monsterSkillValues,
  monsterWeakness,
  monsterMotivation,
} from './random-monster.data'
import { describe, expect, it } from 'vitest'
describe('sizes', () => {
  describe('smaller ones', () => {
    const cases: [number, MonsterSize][] = [
      [1, 'puny'],
      [2, 'small'],
      [3, 'average'],
      [4, 'large'],
      [8, 'big'],
    ]
    it.each(cases)('should return %s STR for size %s', (expected, size) => {
      const result = sizes.find((s) => s.value.size === size)?.value.strength()

      expect(result).toEqual(expected)
    })
  })

  describe('larger ones', () => {
    const cases: [number, MonsterSize, () => number][] = [
      [17, 'huge', () => 3],
      [36, 'gigantic', () => 3],
    ]
    it.each(cases)(
      'should return %s STR for size %s',
      (expected, size, diceFn) => {
        const result = sizes
          .find((s) => s.value.size === size)
          ?.value.strength(diceFn)

        expect(result).toEqual(expected)
      },
    )
  })
})

describe('agility', () => {
  describe('smaller ones', () => {
    const cases: [number, MonsterType][] = [
      [1, 'grazing'],
      [2, 'herbivore'],
      [2, 'gatherer'],
      [4, 'scavenger'],
      [5, 'predator'],
      [8, 'aggressive_predator'],
    ]
    it.each(cases)('should return %s AGI for type %s', (expected, type) => {
      const result = types.find((s) => s.value.type === type)?.value.agility

      expect(result).toEqual(expected)
    })
  })
})

describe('movementTypes', () => {
  it('should have 36 choices', () => {
    const movementTypeChoices = compose(
      sum,
      (
        mts: WeightedChoice<{
          type: MovementType
          distanceFn: MovementDistanceFunction
        }>[],
      ) => pluck('weight', mts),
    )

    const expected = 36
    const result = movementTypeChoices(movementTypes)

    expect(result).toEqual(expected)
  })
})

describe('monsterHomes', () => {
  it('should have 36 choices', () => {
    const movementTypeChoices = compose(
      sum,
      (mts: WeightedChoice<MonsterHome>[]) => pluck('weight', mts),
    )

    const expected = 36
    const result = movementTypeChoices(homes)

    expect(result).toEqual(expected)
  })
})

describe('defaultMovementDistanceFunction', () => {
  const defaultMovementDistanceFn = defaultMovementDistanceFunction([1, 2, 3])

  it.each([
    [0, -1],
    [0, Infinity],
    [0, NaN],
    [1, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [3, 5],
    [3, 15],
  ])('should return %s for %s', (expected, input) => {
    const result = defaultMovementDistanceFn(input)

    expect(result).toEqual(expected)
  })
})

describe('monsterSkillValues', () => {
  it('should have 36 choices', () => {
    const movementTypeChoices = (str: string) =>
      str
        .split('|')
        .map((c) => {
          const cs = c.split('^')

          return cs.length > 1 ? parseInt(cs[1], 10) : 1
        })
        .reduce((acc, cur) => acc + cur, 0)

    const expected = 36
    const result = movementTypeChoices(monsterSkillValues)

    expect(result).toEqual(expected)
  })
})

describe('monsterSkillValues', () => {
  it('should have 36 choices', () => {
    const weaknessChoices = compose(sum, (mts: WeightedChoice<Definition>[]) =>
      pluck('weight', mts),
    )

    const expected = 36
    const result = weaknessChoices(monsterWeakness)

    expect(result).toEqual(expected)
  })
})

describe('monsterSkillValues', () => {
  it('should have 36 choices', () => {
    const motivationChoices = compose(
      sum,
      (mts: WeightedChoice<MonsterMotivation>[]) => pluck('weight', mts),
    )

    const expected = 36
    const result = motivationChoices(monsterMotivation)

    expect(result).toEqual(expected)
  })
})
