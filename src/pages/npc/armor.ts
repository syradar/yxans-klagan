import { CollapseAble, getId, Unique } from '../../models/utils.model'

export type ArmorType =
  | 'Leather'
  | 'StuddedLeather'
  | 'Chainmail'
  | 'Plate'
  | 'Natural'

export type HelmetType =
  | 'StuddedLeather'
  | 'OpenHelmet'
  | 'ClosedHelmet'
  | 'GreatHelm'

type ArmorFeature =
  | 'PenetrationProtection'
  | 'HardToMove'
  | 'HardToSee'
  | 'Normal'
  | 'Light'
  | 'Heavy'

export interface ProtectionBase<A extends ArmorType | HelmetType> {
  type: A
  rating: number
  features: ArmorFeature[]
}

export interface Armor<A extends ArmorType> extends ProtectionBase<A> {
  bodyPart: 'Body'
}

export interface Helmet<H extends HelmetType> extends ProtectionBase<H> {
  bodyPart: 'Head'
}

export type ArmorViewModel = Armor<ArmorType> & CollapseAble & Unique
export type HelmetViewModel = Helmet<HelmetType> & CollapseAble & Unique

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
