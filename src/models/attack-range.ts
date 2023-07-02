import { TranslationKey } from '../store/translations/translation.model'

export type WeaponRange = 'armsLength' | 'near' | 'short' | 'long'
export type MonsterAttackRange = Extract<
  WeaponRange,
  'armsLength' | 'near' | 'short'
>

export const rangeTranslationDict: Record<
  WeaponRange,
  TranslationKey<'common'>
> = {
  armsLength: 'common:range.arms_length',
  long: 'common:range.long',
  near: 'common:range.near',
  short: 'common:range.short',
}
