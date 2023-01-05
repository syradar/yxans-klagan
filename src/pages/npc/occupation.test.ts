import { getOccupations } from './occupation'
import { describe, it, expect } from 'vitest'

describe('getOccupations', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getOccupations().length
    expect(result).toEqual(expected)
  })
})
