import { isEven, min } from './math'
import { describe, it, expect } from 'vitest'

describe('math functions', () => {
  describe('min', () => {
    it.each([
      [0, 0, 0],
      [0, -1, 0],
      [0, 2, 2],
      [-10, -34, -10],
      [0, -Infinity, 0],
    ])('min: %i, val: %i, should be: %i', (minVal, val, expected) => {
      const result = min(minVal)(val).unwrap()

      expect(result).toEqual(expected)
    })

    it.each([
      [0, NaN],
      [NaN, NaN],
      [NaN, 0],
    ])('min: %i, val: %i, should throw error', (minVal, val) => {
      const expected = true
      const result = min(minVal)(val).none

      expect(result).toEqual(expected)
    })
  })

  describe('isEven', () => {
    it.each([
      [true, 0],
      [false, -1],
      [true, -4],
      [true, 2],
      [false, 3],
      [false, -Infinity],
      [false, Infinity],
    ])('min: %i, val: %i, should be: %i', (expected, val) => {
      const result = isEven(val)

      expect(result).toEqual(expected)
    })

    it('should return false if given NaN', () => {
      const expected = false
      const result = isEven(NaN)

      expect(result).toEqual(expected)
    })
  })
})
