import {
  choose,
  countSuccesses,
  parseChoiceString,
  parseD6String,
  weightedRandom,
  weightedRandomConsume,
} from './dice.functions'
import { describe, it, expect } from 'vitest'

describe('dice functions', () => {
  describe('countSuccesses', () => {
    it.each([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 1],
      [7, 1],
      [8, 2],
      [9, 2],
      [10, 3],
      [11, 3],
      [12, 4],
      [13, 4],
      [14, 5],
    ])('%i => %b', (input, expected) => {
      const result = countSuccesses(input)
      expect(result).toEqual(expected)
    })
  })

  describe('choose', () => {
    it.each([
      [[], 'undefined'],
      [['test'], 'string'],
    ])('%j => %s', (input, expected) => {
      const result = choose(input)
      expect(typeof result).toEqual(expected)
    })
  })

  describe('weightedRandom', () => {
    it.each([
      [[{ weight: 0, type: 'hej' }], 'hej'],
      [
        [
          { weight: -1, type: 'hej' },
          { weight: 100, type: 'då' },
        ],
        'då',
      ],
      // [['test'], 'string'],
    ])('%j => %s', (input, expected) => {
      const result = weightedRandom(input)
      expect(result.type).toEqual(expected)
    })
  })

  describe('weightedRandomConsume', () => {
    it.each([
      [[{ weight: 0, type: 'hej' }], [{ weight: 0, type: 'hej' }, []]],
      [
        [
          { weight: -1, type: 'hej' },
          { weight: 100, type: 'då' },
          { weight: -1, type: 're' },
        ],
        [
          { weight: 100, type: 'då' },
          [
            { weight: -1, type: 'hej' },
            { weight: -1, type: 're' },
          ],
        ],
      ],
    ])('%j => %s', (input, expected) => {
      const result = weightedRandomConsume(input)
      expect(result).toEqual(expected)
    })
  })

  describe('parseChoiceString', () => {
    it.each([
      ['1', [1]],
      ['1|2', [1, 2]],
      ['1^2|2|3', [1, 1, 2, 3]],
      ['1^2|2^0|3^1|4', [1, 1, 3, 4]],
    ])('%j => %s', (input, expected) => {
      const result = parseChoiceString(input)
      expect(result).toEqual(expected)
    })
  })

  describe('parseD6String', () => {
    it.each([
      ['D6', 1],
      ['2D6', 2],
      ['4D6', 4],
      ['10D6', 10],
      ['123D6', 123],
    ])('%j => %s', (input, expected) => {
      const result = parseD6String(input)

      expect(result).toEqual(expected)
    })
  })
})
