import { translationDict } from '../../functions/translation-dict'
import { CollapseAble, getId, Unique } from '../../models/utils.model'
import { TranslationKey } from '../../store/translations/translation.model'

export type ArmorType =
  | 'leather'
  | 'studdedLeather'
  | 'chainmail'
  | 'plate'
  | 'natural'

export type HelmetType =
  | 'studdedLeather'
  | 'openHelmet'
  | 'closedHelmet'
  | 'greatHelm'

export const armorTypeTranslationDict: Record<
  ArmorType,
  TranslationKey<'common'>
> = {
  leather: 'common:armor.leather',
  studdedLeather: 'common:armor.studded_leather',
  chainmail: 'common:armor.chainmail',
  plate: 'common:armor.plate',
  natural: 'common:armor.natural',
}

export const helmetTypeTranslationDict: Record<
  HelmetType,
  TranslationKey<'common'>
> = {
  studdedLeather: 'common:armor.studded_leather',
  openHelmet: 'common:helmet.open_helmet',
  closedHelmet: 'common:helmet.closed_helmet',
  greatHelm: 'common:helmet.great_helm',
}
const armorFeatures = [
  'penetrationProtection',
  'hardToMove',
  'hardToSee',
  'normal',
  'light',
  'heavy',
] as const
export type ArmorFeature = (typeof armorFeatures)[number]
export const armorFeaturesTranslationDict = translationDict(
  armorFeatures,
  'common',
  'armor_feature.',
)

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

type ProtectionViewModelReturn<W> =
  W extends Armor<ArmorType>
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
  }) as ProtectionViewModelReturn<W>
