import { numberToBooleans } from './utils.functions'

describe('numberToBooleans', () => {
  const cases: [boolean[], unknown][] = [
    [[false], 1],
    [[false, false], 2],
    [[], 0],
    [[], -1],
    [[], null],
  ]

  it.each(cases)('should return %s for %s', (expected, input) => {
    const result = numberToBooleans(input as number)

    expect(result).toEqual(expected)
  })

  const errorCases: [unknown][] = [[NaN]]

  it.each(errorCases)('should throw error for %s', (input) => {
    expect(() => numberToBooleans(input as number)).toThrowError()
  })
})
