import { CollapseAble, Unique } from './utils.model'
import { WeaponFeature } from './weapon.model'

export type ShieldType = 'Small' | 'Large'

type ShieldFeature = Extract<WeaponFeature, 'Light'>

export type Shield<S extends ShieldType> = {
  type: S
  bonus: number
  features: ShieldFeature[]
}
export type ShieldViewModel = Shield<ShieldType> & CollapseAble & Unique
