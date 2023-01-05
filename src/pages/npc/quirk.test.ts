import { getQuirks } from './quirk'
import { describe, it, expect } from 'vitest'

describe('getQuirk', () => {
  it('should have 36 occupations', () => {
    const expected = 36
    const result = getQuirks().length
    expect(result).toEqual(expected)
  })
})
