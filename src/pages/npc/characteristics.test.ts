import { getChacteristics } from './characteristics'

describe('getChacteristics', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getChacteristics().length
    expect(result).toEqual(expected)
  })
})
