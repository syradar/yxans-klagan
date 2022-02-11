import { compose } from 'rambda'
import { choose } from '../../functions/dice.functions'

const chacteristics = [
  'IceBlueEyes',
  'FluffyHair',
  'ScarredFace',
  'SeveredEar',
  'EyePatch',
  'MissingTeeth',
  'Graceful',
  'Towering',
  'ImpressiveBeardOrHair',
  'RoundCheeks',
  'DistinctBirthmark',
  'StrangeFacialPaint',
  'SadEyes',
  'SmellsBad',
  'Perfumed',
  'Cocky',
  'ConstantlySmiling',
  'Sullen',
  'ConstantlyJoking',
  'Lovesick',
  'Elegant',
  'Tattooed',
  'ConstantlyEating',
  'Desperate',
  'Hateful',
  'Sweaty',
  'Drunk',
  'Suspicious',
  'VeryBeautiful',
  'Foppish',
  'Fat',
  'Seducing',
  'Lazy',
  'VeryTired',
  'Wiry',
  'UnkemptEyeBrows',
] as const

export type Chacteristics = typeof chacteristics[number]

export const getChacteristics = (): Chacteristics[] => [...chacteristics]

export const getRandomCharacteristic = compose(choose, getChacteristics)
