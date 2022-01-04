import {
  Armor,
  ArmorType,
  ArmorViewModel,
  Helmet,
  HelmetType,
  HelmetViewModel,
} from './armor.model'
import { Attributes, AttributesViewModel } from './attributes.model'
import { KinType, TypicalKins } from './name.model'
import { Shield, ShieldType, ShieldViewModel } from './shield.model'
import { AllSkillsValues, AllSkillsValuesViewModel } from './skills.model'
import { CollapseAble } from './utils.model'
import {
  Weapon,
  WeaponCategory,
  WeaponType,
  WeaponViewModel,
} from './weapon.model'

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
