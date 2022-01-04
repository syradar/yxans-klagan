import { getId } from '../models/utils.model'
import {
  Weapon,
  WeaponCategory,
  WeaponType,
  WeaponViewModel,
} from '../models/weapon.model'

export const createWeaponViewModel = (
  w: Weapon<WeaponType, WeaponCategory>,
): WeaponViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})
