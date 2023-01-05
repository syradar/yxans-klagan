import { Nullish, numberToBooleans, validNumber } from './utils.functions'
import { describe, it, expect } from 'vitest'

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

  const errorCases: [unknown][] = [[NaN], [Infinity], [-Infinity], [undefined]]

  it.each(errorCases)('should throw error for %s', (input) => {
    expect(() => numberToBooleans(input as number)).toThrowError(
      'Invalid number',
    )
  })
})

describe('validNumber', () => {
  const cases: [boolean, number | Nullish][] = [
    [true, -1],
    [true, 0],
    [true, 1],
    [false, Infinity],
    [false, NaN],
    [false, -Infinity],
    [false, null],
    [false, undefined],
  ]

  it.each(cases)('should return %s for %s', (expected, input) => {
    const result = validNumber(input as number)

    expect(result).toEqual(expected)
  })
})
