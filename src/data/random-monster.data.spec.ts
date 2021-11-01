import { MonsterSize, MonsterType } from '../models/monster.model'
import { sizes, types } from './random-monster.data'

describe('sizes', () => {
  describe('smaller ones', () => {
    const cases: [number, MonsterSize][] = [
      [1, 'Puny'],
      [2, 'Small'],
      [3, 'Average'],
      [4, 'Large'],
      [8, 'Big'],
    ]
    it.each(cases)('should return %s STR for size %s', (expected, size) => {
      const result = sizes.find((s) => s.value.size === size)?.value.strength()

      expect(result).toEqual(expected)
    })
  })

  describe('larger ones', () => {
    const cases: [number, MonsterSize, () => number][] = [
      [17, 'Huge', () => 3],
      [36, 'Gigantic', () => 3],
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
      [1, 'Grazing'],
      [2, 'Herbivore'],
      [2, 'Gatherer'],
      [4, 'Scavenger'],
      [5, 'Predator'],
      [8, 'AggressivePredator'],
    ]
    it.each(cases)('should return %s AGI for type %s', (expected, type) => {
      const result = types.find((s) => s.value.type === type)?.value.agility

      expect(result).toEqual(expected)
    })
  })
})
