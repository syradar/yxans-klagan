import { ArmorType, Armor, HelmetType, Helmet } from '../armor'

export const armors: { [A in Exclude<ArmorType, 'Natural'>]: Armor<A> } = {
  Leather: {
    type: 'Leather',
    rating: 2,
    bodyPart: 'Body',
    features: ['Light'],
  },
  StuddedLeather: {
    type: 'StuddedLeather',
    rating: 3,
    bodyPart: 'Body',
    features: [],
  },
  Chainmail: {
    type: 'Chainmail',
    rating: 6,
    bodyPart: 'Body',
    features: ['Heavy', 'PenetrationProtection'],
  },
  Plate: {
    type: 'Plate',
    rating: 8,
    bodyPart: 'Body',
    features: ['Heavy', 'HardToMove'],
  },
}

export const helmets: { [H in HelmetType]: Helmet<H> } = {
  StuddedLeather: {
    type: 'StuddedLeather',
    rating: 1,
    bodyPart: 'Head',
    features: ['Light'],
  },
  OpenHelmet: {
    type: 'OpenHelmet',
    rating: 2,
    bodyPart: 'Head',
    features: ['Light'],
  },
  ClosedHelmet: {
    type: 'ClosedHelmet',
    rating: 3,
    bodyPart: 'Head',
    features: [],
  },
  GreatHelm: {
    type: 'GreatHelm',
    rating: 4,
    bodyPart: 'Head',
    features: ['Heavy', 'HardToSee'],
  },
}
