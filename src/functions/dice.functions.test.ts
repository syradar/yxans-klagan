import { countSuccesses } from './dice.functions'

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
})
