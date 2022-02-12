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

type ProtectionViewModelReturn<W> = W extends Armor<ArmorType>
  ? ArmorViewModel
  : W extends Helmet<HelmetType>
  ? HelmetViewModel
  : never

export const createProtectionViewModel = <
  W extends Armor<ArmorType> | Helmet<HelmetType>,
>({
  bodyPart,
  features,
  rating,
  type,
}: W) =>
  ({
    bodyPart,
    features,
    rating,
    type,
    collapse: true,
    id: getId(),
  } as ProtectionViewModelReturn<W>)
