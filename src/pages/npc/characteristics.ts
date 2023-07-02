import { translationDict } from '../../functions/translation-dict'

const chacteristics = [
  'iceBlueEyes',
  'fluffyHair',
  'scarredFace',
  'severedEar',
  'eyePatch',
  'missingTeeth',
  'graceful',
  'towering',
  'impressiveBeardOrHair',
  'roundCheeks',
  'distinctBirthmark',
  'strangeFacialPaint',
  'sadEyes',
  'smellsBad',
  'perfumed',
  'cocky',
  'constantlySmiling',
  'sullen',
  'constantlyJoking',
  'lovesick',
  'elegant',
  'tattooed',
  'constantlyEating',
  'desperate',
  'hateful',
  'sweaty',
  'drunk',
  'suspicious',
  'veryBeautiful',
  'foppish',
  'fat',
  'seducing',
  'lazy',
  'veryTired',
  'wiry',
  'unkemptEyeBrows',
] as const

export type Chacteristic = (typeof chacteristics)[number]

export const getChacteristics = (): Chacteristic[] => [...chacteristics]

export const chacteristicTranslationDict = translationDict(
  chacteristics,
  'npc',
  'characteristic.',
)
