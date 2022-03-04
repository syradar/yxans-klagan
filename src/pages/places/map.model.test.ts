import { isHexKey } from './map.model'
import { describe, it, expect } from 'vitest'

describe('isHexKey', () => {
  const cases: [boolean, string][] = [
    [true, 'A2'],
    [false, 'A3'],
    [true, 'B3'],
    [false, 'B4'],
    [false, 'Y162'],
    [true, 'W20'],
  ]
  it.each(cases)('should return %s for key: %s', (expected, key) => {
    const result = isHexKey(key)
    expect(result).toEqual(expected)
  })
})
