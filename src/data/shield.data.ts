import { Shield, ShieldType } from '../models/shield.model'

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
