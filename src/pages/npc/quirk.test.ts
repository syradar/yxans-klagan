import { getQuirk } from './quirk'

describe('getQuirk', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getQuirk().length
    expect(result).toEqual(expected)
  })
})
