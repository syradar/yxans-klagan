import { isString } from '../../functions/utils.functions'
import { meleeWeapons } from './data/weapon.data'
import { createWeaponViewModel } from './weapon'

describe('createWeaponViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createWeaponViewModel(meleeWeapons.Dagger)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createWeaponViewModel(meleeWeapons.Dagger)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createWeaponViewModel(meleeWeapons.Dagger)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})
