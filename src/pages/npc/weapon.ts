import { WeaponRange } from '../../models/attack-range'
import { getId } from '../../models/utils.model'

export const createWeaponViewModel = (
  w: Weapon<WeaponType, WeaponCategory>,
): WeaponViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})

import { CollapseAble, Unique } from '../../models/utils.model'

export type WeaponCategory = 'Melee' | 'Ranged'

export type WeaponFeature =
  | 'Light'
  | 'Heavy'
  | 'Edged'
  | 'Pointed'
  | 'Blunt'
  | 'Parrying'
  | 'Hook'
  | 'LoadingIsLongAction'

export type MeleeWeaponType =
  | 'Knife'
  | 'Dagger'
  | 'Falchion'
  | 'ShortSword'
  | 'BroadSword'
  | 'LongSword'
  | 'TwoHandedSword'
  | 'Scimitar'
  | 'Handaxe'
  | 'Battleaxe'
  | 'TwoHandedAxe'
  | 'Mace'
  | 'Morningstar'
  | 'Warhammer'
  | 'Flail'
  | 'Club'
  | 'LargeClub'
  | 'HeavyWarhammer'
  | 'Staff'
  | 'ShortSpear'
  | 'LongSpear'
  | 'Pike'
  | 'Halberd'
  | 'Trident'

export type RangedWeaponType =
  | 'ThrowingKnife'
  | 'ThrowingAxe'
  | 'ThrowingSpear'
  | 'Sling'
  | 'ShortBow'
  | 'LongBow'
  | 'LightCrossbow'
  | 'HeavyCrossbow'

export type WeaponType = MeleeWeaponType | RangedWeaponType

export type Weapon<W extends WeaponType, C extends WeaponCategory> = {
  name: W
  category: C
  grip?: '1H' | '2H'
  bonus?: number
  damage: number
  range: WeaponRange
  features: WeaponFeature[]
}

export type WeaponViewModel = Weapon<WeaponType, WeaponCategory> &
  CollapseAble &
  Unique
