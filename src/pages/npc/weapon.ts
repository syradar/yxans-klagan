import {
  CamelCaseToSnakeCase,
  camelCaseToSnakeCase,
} from '../../functions/casing'
import { translationDict } from '../../functions/translation-dict'
import { WeaponRange } from '../../models/attack-range'
import { CollapseAble, Unique, getId } from '../../models/utils.model'
import { TranslationKey } from '../../store/translations/translation.model'

export const createWeaponViewModel = (
  w: Weapon<WeaponType, WeaponCategory>,
): WeaponViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})

export type WeaponCategory = 'melee' | 'ranged'

const weaponFeatures = [
  'light',
  'heavy',
  'edged',
  'pointed',
  'blunt',
  'parrying',
  'hook',
  'loadingIsLongAction',
] as const

export type WeaponFeature = (typeof weaponFeatures)[number]
export const weaponFeatureTranslationDict = translationDict(
  weaponFeatures,
  'common',
  'weapon.feature.',
)
export type MeleeWeaponType =
  | 'knife'
  | 'dagger'
  | 'falchion'
  | 'shortSword'
  | 'broadSword'
  | 'longSword'
  | 'twoHandedSword'
  | 'scimitar'
  | 'handaxe'
  | 'battleaxe'
  | 'twoHandedAxe'
  | 'mace'
  | 'morningstar'
  | 'warhammer'
  | 'flail'
  | 'club'
  | 'largeClub'
  | 'heavyWarhammer'
  | 'staff'
  | 'shortSpear'
  | 'longSpear'
  | 'pike'
  | 'halberd'
  | 'trident'

export type RangedWeaponType =
  | 'throwingKnife'
  | 'throwingAxe'
  | 'throwingSpear'
  | 'sling'
  | 'shortBow'
  | 'longBow'
  | 'lightCrossbow'
  | 'heavyCrossbow'

export type WeaponType = MeleeWeaponType | RangedWeaponType

export type Weapon<W extends WeaponType, C extends WeaponCategory> = {
  name: W
  category: C
  grip?: '1h' | '2h'
  bonus?: number
  damage: number
  range: WeaponRange
  features: WeaponFeature[]
}

export type WeaponViewModel = Weapon<WeaponType, WeaponCategory> &
  CollapseAble &
  Unique

type MeleeWeaponPath<W extends MeleeWeaponType> =
  `common:weapon.melee.${CamelCaseToSnakeCase<W>}` & TranslationKey<'common'>
type RangedWeaponPath<W extends RangedWeaponType> =
  `common:weapon.ranged.${CamelCaseToSnakeCase<W>}` & TranslationKey<'common'>
export const weaponName = <C extends WeaponCategory, W extends WeaponType>(
  category: C,
  name: W,
): MeleeWeaponPath<MeleeWeaponType> | RangedWeaponPath<RangedWeaponType> => {
  if (category === 'melee') {
    return `common:weapon.melee.${camelCaseToSnakeCase(
      name,
    )}` as MeleeWeaponPath<W & MeleeWeaponType>
  }

  return `common:weapon.ranged.${camelCaseToSnakeCase(
    name,
  )}` as RangedWeaponPath<W & RangedWeaponType>
}
