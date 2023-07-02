import { Shield, ShieldType } from '../shield'

export const shields: { [S in ShieldType]: Shield<S> } = {
  small: {
    type: 'small',
    bonus: 1,
    features: ['light'],
  },
  large: {
    type: 'large',
    bonus: 2,
    features: [],
  },
}
