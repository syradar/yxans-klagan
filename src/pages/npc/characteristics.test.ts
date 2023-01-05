import { getChacteristics } from './characteristics'
import { describe, it, expect } from 'vitest'

describe('getChacteristics', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getChacteristics().length
    expect(result).toEqual(expected)
  })
})
