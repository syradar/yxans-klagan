import { getId } from '../../models/utils.model'

import { CollapseAble, Unique } from '../../models/utils.model'
import { WeaponFeature } from './weapon'

export type ShieldType = 'Small' | 'Large'

type ShieldFeature = Extract<WeaponFeature, 'Light'>

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
