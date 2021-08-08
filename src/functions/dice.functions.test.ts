import { isSuccess } from './dice.functions'

describe('getRandomInt', () => {
  it.each([[1, false]])('%i => %b', (input, expected) => {
    const result = isSuccess(input)
    expect(result).toEqual(expected)
  })
})
