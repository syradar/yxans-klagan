import { isString } from '../../functions/utils.functions'
import { createArmorViewModel, createHelmetViewModel } from './armor'
import { armors, helmets } from './data/armor.data'

describe('createArmorViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createArmorViewModel(armors.Leather)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createArmorViewModel(armors.Leather)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createArmorViewModel(armors.Leather)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})

describe('createHelmetViewModel', () => {
  it('should add collapse property', () => {
    const expected = true
    const result = 'collapse' in createHelmetViewModel(helmets.GreatHelm)

    expect(result).toEqual(expected)
  })

  it('should add id property', () => {
    const expected = true
    const result = 'id' in createHelmetViewModel(helmets.GreatHelm)

    expect(result).toEqual(expected)
  })

  it('should use 21 character string as id', () => {
    const expected = true
    const vm = createHelmetViewModel(helmets.GreatHelm)
    const result = isString(vm.id) && vm.id.length === 21

    expect(result).toEqual(expected)
  })
})
