import { Shield, ShieldType } from '../shield'

export const shields: { [S in ShieldType]: Shield<S> } = {
  Small: {
    type: 'Small',
    bonus: 1,
    features: ['Light'],
  },
  Large: {
    type: 'Large',
    bonus: 2,
    features: [],
  },
}
