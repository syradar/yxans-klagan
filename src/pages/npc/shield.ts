import { translationDict } from '../../functions/translation-dict'
import { CollapseAble, getId, Unique } from '../../models/utils.model'
import { WeaponFeature } from './weapon'

const shieldTypes = ['small', 'large'] as const
export type ShieldType = (typeof shieldTypes)[number]
export const shieldTypesTranslationDict = translationDict(
  shieldTypes,
  'common',
  'shield.',
)

type ShieldFeature = Extract<WeaponFeature, 'light'>

export type Shield<S extends ShieldType> = {
  type: S
  bonus: number
  features: ShieldFeature[]
}
export type ShieldViewModel = Shield<ShieldType> & CollapseAble & Unique

export const createShieldViewModel = (
  w: Shield<ShieldType>,
): ShieldViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})
