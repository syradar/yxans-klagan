import { ArmorType, Armor, HelmetType, Helmet } from '../armor'

export const armors: { [A in Exclude<ArmorType, 'natural'>]: Armor<A> } = {
  leather: {
    type: 'leather',
    rating: 2,
    bodyPart: 'Body',
    features: ['light'],
  },
  studdedLeather: {
    type: 'studdedLeather',
    rating: 3,
    bodyPart: 'Body',
    features: [],
  },
  chainmail: {
    type: 'chainmail',
    rating: 6,
    bodyPart: 'Body',
    features: ['heavy', 'penetrationProtection'],
  },
  plate: {
    type: 'plate',
    rating: 8,
    bodyPart: 'Body',
    features: ['heavy', 'hardToMove'],
  },
}

export const helmets: { [H in HelmetType]: Helmet<H> } = {
  studdedLeather: {
    type: 'studdedLeather',
    rating: 1,
    bodyPart: 'Head',
    features: ['light'],
  },
  openHelmet: {
    type: 'openHelmet',
    rating: 2,
    bodyPart: 'Head',
    features: ['light'],
  },
  closedHelmet: {
    type: 'closedHelmet',
    rating: 3,
    bodyPart: 'Head',
    features: [],
  },
  greatHelm: {
    type: 'greatHelm',
    rating: 4,
    bodyPart: 'Head',
    features: ['heavy', 'hardToSee'],
  },
}
