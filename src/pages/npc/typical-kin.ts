import { createAttributesViewModel } from '../../functions/attributes.functions'
import { createAllSkillsValuesViewModel } from '../../functions/skills.functions'
import { Attributes, AttributesViewModel } from '../../models/attributes.model'
import {
  AllSkillsValues,
  AllSkillsValuesViewModel,
} from '../../models/skills.model'
import { CollapseAble } from '../../models/utils.model'
import {
  Armor,
  ArmorType,
  ArmorViewModel,
  createProtectionViewModel,
  Helmet,
  HelmetType,
  HelmetViewModel,
} from './armor'
import { KinType, TypicalKins } from './name'
import {
  createShieldViewModel,
  Shield,
  ShieldType,
  ShieldViewModel,
} from './shield'
import {
  createWeaponViewModel,
  Weapon,
  WeaponCategory,
  WeaponType,
  WeaponViewModel,
} from './weapon'

export type TypicalKin<K extends TypicalKins, T extends KinType> = {
  kin: K
  kinType: T
  attributes: Attributes
  skills: AllSkillsValues
  talents: string[]
  gear: string[]
  weapons: Weapon<WeaponType, WeaponCategory>[]
  shields: Shield<ShieldType>[]
  armors: Armor<ArmorType>[]
  helmets: Helmet<HelmetType>[]
  description?: string
}

export type TypicalKinViewModel = CollapseAble & {
  kin: string
  kinType: string
  attributes: AttributesViewModel
  skills: AllSkillsValuesViewModel
  talents: string[]
  gear: string[]
  weapons: WeaponViewModel[]
  shields: ShieldViewModel[]
  armors: ArmorViewModel[]
  helmets: HelmetViewModel[]
  description?: string
}

export const createTypicalKinViewModel = <
  K extends TypicalKins,
  T extends KinType,
>(
  tk: TypicalKin<K, T>,
): TypicalKinViewModel => {
  return {
    ...tk,
    collapse: true,
    attributes: createAttributesViewModel(tk.attributes),
    skills: createAllSkillsValuesViewModel(tk.skills),
    weapons: tk.weapons.map(createWeaponViewModel),
    shields: tk.shields.map(createShieldViewModel),
    armors: tk.armors.map(createProtectionViewModel),
    helmets: tk.helmets.map(createProtectionViewModel),
  }
}
