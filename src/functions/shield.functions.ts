import { Shield, ShieldType, ShieldViewModel } from '../models/shield.model'
import { getId } from '../models/utils.model'

export const createShieldViewModel = (
  w: Shield<ShieldType>,
): ShieldViewModel => ({
  ...w,
  collapse: true,
  id: getId(),
})
