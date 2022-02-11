import { armors, helmets } from './data/armor.data'
import { meleeWeapons, rangedWeapons } from './data/weapon.data'
import { defaultSkillsValues } from '../../functions/skills.functions'
import { HumanKin } from './name'
import { createTypicalKinViewModel } from './typical-kin'
import { TypicalKin } from './typical-kin'

describe('createTypicalKinViewModel', () => {
  const tk: TypicalKin<HumanKin, 'Human'> = {
    kin: 'Ailander',
    kinType: 'Human',
    attributes: {
      strength: 3,
      agility: 3,
      empathy: 3,
      wits: 3,
    },
    skills: { ...defaultSkillsValues(), Melee: 2, Healing: 3 },
    talents: ['Snabbfotad'],
    gear: ['T6 silver'],
    weapons: [
      meleeWeapons['Knife'],
      meleeWeapons['Halberd'],
      rangedWeapons['HeavyCrossbow'],
    ],
    armors: [armors['Chainmail']],
    helmets: [helmets['GreatHelm']],
    shields: [
      {
        type: 'Small',
        bonus: 1,
        features: ['Light'],
      },
    ],
  }

  it('should have collapse property', () => {
    const expected = true
    const result = 'collapse' in createTypicalKinViewModel(tk)

    expect(result).toEqual(expected)
  })

  it('should set collapse property to true', () => {
    const expected = true
    const result = createTypicalKinViewModel(tk).collapse

    expect(result).toEqual(expected)
  })

  it('should convert Armor to ArmorViewModel', () => {
    const expected = true
    const result = createTypicalKinViewModel(tk).armors.every((x) => 'id' in x)

    expect(result).toEqual(expected)
  })

  it('should convert Weapon to WeaponViewModel', () => {
    const expected = true
    const result = createTypicalKinViewModel(tk).weapons.every((x) => 'id' in x)

    expect(result).toEqual(expected)
  })

  it('should convert Shield to ShieldViewModel', () => {
    const expected = true
    const result = createTypicalKinViewModel(tk).shields.every((x) => 'id' in x)

    expect(result).toEqual(expected)
  })

  it('should convert Helmet to HelmetViewModel', () => {
    const expected = true
    const result = createTypicalKinViewModel(tk).helmets.every((x) => 'id' in x)

    expect(result).toEqual(expected)
  })
})
