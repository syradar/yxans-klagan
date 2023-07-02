import { translationDict } from '../functions/translation-dict'
import { TranslationKey } from '../store/translations/translation.model'
import { CoinType } from './coin.model'
import { D66 } from './fbl-dice.model'
import { Weight } from './weight.model'

const findLocations = ['carried', 'lair'] as const
export type FindLocation = (typeof findLocations)[number]
export const findLocationTranslactionDict = translationDict(
  findLocations,
  'finds',
  'find.location.',
)

const findTypes = ['simple', 'valuable', 'precious'] as const
export type FindType = (typeof findTypes)[number]
export const findTypeTranslactionDict = translationDict(
  findTypes,
  'finds',
  'find.type.',
)

export type FindChance = Exclude<
  D66,
  11 | 12 | 13 | 14 | 15 | 16 | 21 | 22 | 23 | 24 | 25 | 26
>

export type FindCoinValueMultiplier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type FindValue =
  | `${FindCoinValueMultiplier}D6 ${CoinType}`
  | 'None'
  | '1D6 gold;2D6 silver;4D6 copper'

export type Find<
  T extends FindType,
  C extends FindChance,
  L extends FindLocation,
> = {
  type: T
  chance: C
  title: FindLabels
  weight: Weight
  value: FindValue
  location: L
}

export type FindViewModel = {
  type: FindType
  location: FindLocation
  title: FindLabels
  weight: TranslationKey<'common'>
  value: { coins: number; label: TranslationKey<'common'> }[]
}

export const findLabels = [
  'armchair',
  'artifact',
  'axe',
  'beautifulDesk',
  'beautifulTapestry',
  'beautifulVase',
  'beltBuckle',
  'boneDice',
  'boneStatuette',
  'boneWhistle',
  'book',
  'bottleOfExpensiveWine',
  'bronzeAltar',
  'bronzeArmor',
  'bronzeBeltBuckle',
  'bronzeBracelet',
  'bronzeDagger',
  'bronzeDrinkingHorn',
  'bronzeEarring',
  'bronzeHelmet',
  'bronzeLantern',
  'bronzeMedallion',
  'bronzeMirror',
  'bronzeNecklace',
  'bronzePot',
  'bronzeSarcophagus',
  'bronzeShield',
  'bronzeStatue',
  'bronzeStatuette',
  'cabinet',
  'calfSkinGloves',
  'candelabrum',
  'carpet',
  'ceilingCandelabrum',
  'chest',
  'copperBowl',
  'copperCoins',
  'copperCrown',
  'copperHeadband',
  'copperMug',
  'copperPlate',
  'copperRing',
  'crownWithGemstones',
  'dragonscaleBoots',
  'drinkingHornWithGoldDetails',
  'drinkingHornWithSilverDetails',
  'elegantBoots',
  'elegantHelmet',
  'elegantLargeShield',
  'elegantOneHandedWeapon',
  'embroidedCarpet',
  'embroidery',
  'fineHat',
  'furCloakWithExpensiveEmbroideryAndGoldenBuckle',
  'gamingBoard',
  'gemstone',
  'glassBowl',
  'goldAmulet',
  'goldBracelet',
  'goldCoins',
  'goldenArmchair',
  'goldenArmor',
  'goldenBowl',
  'goldenCradle',
  'goldenCrown',
  'goldenDiadem',
  'goldenEmbroidery',
  'goldenHelmet',
  'goldenLargeShield',
  'goldenMirror',
  'goldenNecklace',
  'goldenPalanquin',
  'goldenSarcophagus',
  'goldenStatue',
  'goldenStatueOfAchild',
  'goldenTable',
  'goldenTray',
  'goldenWeapon',
  'goldGoblet',
  'goldMug',
  'goldNecklace',
  'goldRing',
  'goldStatuette',
  'goodBoots',
  'goodGloves',
  'hammer',
  'knapsack',
  'lantern',
  'largeRareGemstone',
  'lute',
  'mask',
  'necklaceWithGemstones',
  'oneHandedBronzeWeapon',
  'painting',
  'paintingWithGoldenFrame',
  'palanquinWithCopperDetails',
  'palanquinWithSilverDetails',
  'pearl',
  'pearls',
  'pieceOfAmber',
  'pileOfCoins',
  'pulpit',
  'rareBook',
  'rareGemstone',
  'ringWithGemstone',
  'saw',
  'scepter',
  'scepterWithGemstones',
  'shortSpear',
  'shortSword',
  'silverAltar',
  'silverAmulet',
  'silverBowl',
  'silverBox',
  'silverBracelet',
  'silverBrooch',
  'silverCoins',
  'silverComb',
  'silverCrown',
  'silverEarring',
  'silverGoblet',
  'silverHeadband',
  'silverHelmet',
  'silverMedallion',
  'silverMirror',
  'silverMug',
  'silverNecklace',
  'silverRing',
  'silverSarcophagus',
  'silverStatue',
  'silverStatuette',
  'simpleGemstone',
  'smallShield',
  'smallSilverChest',
  'tapestry',
  'uniqueBook',
  'velvetGloves',
  'waterskin',
  'wellTailoredCloakWithSilverBuckle',
] as const
export type FindLabels = (typeof findLabels)[number]

export const findLabelsDict = translationDict(findLabels, 'finds', 'find.')
