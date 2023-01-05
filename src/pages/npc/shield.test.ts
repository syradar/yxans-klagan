import { shields } from './data/shield.data'
import { createShieldViewModel } from './shield'
import { isString } from '../../functions/utils.functions'
import { describe, it, expect } from 'vitest'

describe('createShieldViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createShieldViewModel(shields.Small)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createShieldViewModel(shields.Small)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createShieldViewModel(shields.Small)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})
