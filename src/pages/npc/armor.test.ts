import { isString } from '../../functions/utils.functions'
import { createProtectionViewModel } from './armor'
import { armors, helmets } from './data/armor.data'
import { describe, it, expect } from 'vitest'

describe('createProtectionViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createProtectionViewModel(armors.Leather)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createProtectionViewModel(armors.Leather)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createProtectionViewModel(armors.Leather)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})

describe('createHelmetViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createProtectionViewModel(helmets.GreatHelm)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createProtectionViewModel(helmets.GreatHelm)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createProtectionViewModel(helmets.GreatHelm)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})
