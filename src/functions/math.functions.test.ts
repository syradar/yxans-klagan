import { min } from './math.functions'

describe('math functions', () => {
  describe('min', () => {
    it.each([
      [0, 0, 0],
      [0, -1, 0],
      [0, 2, 2],
      [-10, -34, -10],
      [0, -Infinity, 0],
    ])('min: %i, val: %i, should be: %i', (minVal, val, expected) => {
      const result = min(minVal)(val)
      expect(result).toEqual(expected)
    })

    it.each([
      [0, NaN],
      [NaN, NaN],
      [NaN, 0],
    ])('min: %i, val: %i, should throw error', (minVal, val) => {
      expect(() => min(minVal)(val)).toThrowError()
    })
  })
})
