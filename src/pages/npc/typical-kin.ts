import { createAttributesViewModel } from '../../functions/attributes.functions'
import { camelCaseToSnakeCase } from '../../functions/casing'
import { createAllSkillsValuesViewModel } from '../../functions/skills.functions'
import { Attributes, AttributesViewModel } from '../../models/attributes.model'
import {
  AllSkillsValues,
  AllSkillsValuesViewModel,
} from '../../models/skills.model'
import { Talent, talentLabelDict } from '../../models/talent.model'
import { CollapseAble } from '../../models/utils.model'
import { TranslationKey } from '../../store/translations/translation.model'
import {
  Armor,
  ArmorType,
  ArmorViewModel,
  Helmet,
  HelmetType,
  HelmetViewModel,
  createProtectionViewModel,
} from './armor'
import { KinType, SubKin, TypicalKins, kinTypeTranslationDict } from './name'
import {
  Shield,
  ShieldType,
  ShieldViewModel,
  createShieldViewModel,
} from './shield'
import {
  Weapon,
  WeaponCategory,
  WeaponType,
  WeaponViewModel,
  createWeaponViewModel,
} from './weapon'

export type TypicalKin<K extends TypicalKins, T extends KinType> = {
  kin: K
  kinType: T
  attributes: Attributes
  skills: AllSkillsValues
  talents: Talent[]
  gear: TranslationKey<'common'>[]
  weapons: Weapon<WeaponType, WeaponCategory>[]
  shields: Shield<ShieldType>[]
  armors: Armor<ArmorType>[]
  helmets: Helmet<HelmetType>[]
  description?: TranslationKey<'common'>
}

export type TypicalKinViewModel = CollapseAble & {
  title: TranslationKey<'common'>
  kin: string
  kinType: string
  attributes: AttributesViewModel
  skills: AllSkillsValuesViewModel
  talents: TranslationKey<'common'>[]
  gear: TranslationKey<'common'>[]
  weapons: WeaponViewModel[]
  shields: ShieldViewModel[]
  armors: ArmorViewModel[]
  helmets: HelmetViewModel[]
  description?: TranslationKey<'common'>
}

export const createTypicalKinViewModel = <
  T extends KinType,
  K extends SubKin<T>,
>(
  tk: TypicalKin<K, T>,
): TypicalKinViewModel => {
  return {
    ...tk,
    title: `common:kin.${
      kinTypeTranslationDict[tk.kinType]
    }.${camelCaseToSnakeCase(tk.kin)}` as TranslationKey<'common'>,
    description: tk.description,
    collapse: true,
    attributes: createAttributesViewModel(tk.attributes),
    skills: createAllSkillsValuesViewModel(tk.skills),
    weapons: tk.weapons.map(createWeaponViewModel),
    shields: tk.shields.map(createShieldViewModel),
    armors: tk.armors.map(createProtectionViewModel),
    helmets: tk.helmets.map(createProtectionViewModel),
    talents: tk.talents.map((t) => talentLabelDict[t]),
  }
}
