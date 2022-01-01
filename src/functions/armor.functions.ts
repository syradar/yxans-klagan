import {
  Armor,
  ArmorType,
  ArmorViewModel,
  Helmet,
  HelmetType,
  HelmetViewModel,
} from '../models/armor.model'
import { getId } from '../models/utils.model'

export const createArmorViewModel = (w: Armor<ArmorType>): ArmorViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})

export const createHelmetViewModel = (
  w: Helmet<HelmetType>,
): HelmetViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})
