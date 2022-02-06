import { getOccupations } from './occupation.model'

describe('getOccupations', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getOccupations().length
    expect(result).toEqual(expected)
  })
})
