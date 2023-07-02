import { isString } from '../../functions/utils.functions'
import { meleeWeapons } from './data/weapon.data'
import { createWeaponViewModel } from './weapon'
import { describe, it, expect } from 'vitest'

describe('createWeaponViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createWeaponViewModel(meleeWeapons.dagger)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createWeaponViewModel(meleeWeapons.dagger)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createWeaponViewModel(meleeWeapons.dagger)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})
