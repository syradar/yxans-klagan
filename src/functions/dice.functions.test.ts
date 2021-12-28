import {
  choose,
  countSuccesses,
  weightedRandom,
  weightedRandomConsume,
} from './dice.functions'

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
})
