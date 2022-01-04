import { KinType, TypicalKins } from '../models/name.model'
import { TypicalKin, TypicalKinViewModel } from '../models/typical-kin.model'
import { createArmorViewModel, createHelmetViewModel } from './armor.functions'
import { createAttributesViewModel } from './attributes.functions'
import { createShieldViewModel } from './shield.functions'
import { createAllSkillsValuesViewModel } from './skills.functions'
import { createWeaponViewModel } from './weapon.functions'

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
    armors: tk.armors.map(createArmorViewModel),
    helmets: tk.helmets.map(createHelmetViewModel),
  }
}
