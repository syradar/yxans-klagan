import { CoinType } from './coin.model'
import { D66 } from './fbl-dice.model'

export type FindLocation = 'Carried' | 'Lair'

export type FindType = 'Simple' | 'Valuable' | 'Precious'

export type FindChance = Exclude<
  D66,
  11 | 12 | 13 | 14 | 15 | 16 | 21 | 22 | 23 | 24 | 25 | 26
>

export type FindCoinValueMultiplier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type FindValue =
  | `${FindCoinValueMultiplier}D6 ${CoinType}`
  | 'None'
  | '1D6 gold;2D6 silver;4D6 copper'

export type Weight = 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type WeightViewModel =
  | 'None'
  | 'Tiny'
  | 'Light'
  | 'Normal'
  | 'Heavy'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'

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
  weight: WeightViewModel
  value: { coins: number; label: string }[]
}

export type FindLabels =
  | 'Armchair'
  | 'Artifact'
  | 'Axe'
  | 'BeautifulDesk'
  | 'BeautifulTapestry'
  | 'BeautifulVase'
  | 'BeltBuckle'
  | 'BoneDice'
  | 'BoneStatuette'
  | 'BoneWhistle'
  | 'Book'
  | 'BottleOfExpensiveWine'
  | 'BronzeAltar'
  | 'BronzeArmor'
  | 'BronzeBeltBuckle'
  | 'BronzeBracelet'
  | 'BronzeDagger'
  | 'BronzeDrinkingHorn'
  | 'BronzeEarring'
  | 'BronzeHelmet'
  | 'BronzeLantern'
  | 'BronzeMedallion'
  | 'BronzeMirror'
  | 'BronzeNecklace'
  | 'BronzePot'
  | 'BronzeSarcophagus'
  | 'BronzeShield'
  | 'BronzeStatue'
  | 'BronzeStatuette'
  | 'Cabinet'
  | 'CalfSkinGloves'
  | 'Candelabrum'
  | 'Carpet'
  | 'CeilingCandelabrum'
  | 'Chest'
  | 'CopperBowl'
  | 'CopperCoins'
  | 'CopperCrown'
  | 'CopperHeadband'
  | 'CopperMug'
  | 'CopperPlate'
  | 'CopperRing'
  | 'CrownWithGemstones'
  | 'DragonscaleBoots'
  | 'DrinkingHornWithGoldDetails'
  | 'DrinkingHornWithSilverDetails'
  | 'ElegantBoots'
  | 'ElegantHelmet'
  | 'ElegantLargeShield'
  | 'ElegantOneHandedWeapon'
  | 'EmbroidedCarpet'
  | 'Embroidery'
  | 'FineHat'
  | 'FurCloakWithExpensiveEmbroideryAndGoldenBuckle'
  | 'GamingBoard'
  | 'Gemstone'
  | 'GlassBowl'
  | 'GoldAmulet'
  | 'GoldBracelet'
  | 'GoldCoins'
  | 'GoldenArmchair'
  | 'GoldenArmor'
  | 'GoldenBowl'
  | 'GoldenCradle'
  | 'GoldenCrown'
  | 'GoldenDiadem'
  | 'GoldenEmbroidery'
  | 'GoldenHelmet'
  | 'GoldenLargeShield'
  | 'GoldenMirror'
  | 'GoldenNecklace'
  | 'GoldenPalanquin'
  | 'GoldenSarcophagus'
  | 'GoldenStatue'
  | 'GoldenStatueOfAChild'
  | 'GoldenTable'
  | 'GoldenTray'
  | 'GoldenWeapon'
  | 'GoldGoblet'
  | 'GoldMug'
  | 'GoldNecklace'
  | 'GoldRing'
  | 'GoldStatuette'
  | 'GoodBoots'
  | 'GoodGloves'
  | 'Hammer'
  | 'Knapsack'
  | 'Lantern'
  | 'LargeRareGemstone'
  | 'Lute'
  | 'Mask'
  | 'NecklaceWithGemstones'
  | 'OneHandedBronzeWeapon'
  | 'Painting'
  | 'PaintingWithGoldenFrame'
  | 'PalanquinWithCopperDetails'
  | 'PalanquinWithSilverDetails'
  | 'Pearl'
  | 'Pearls'
  | 'PieceOfAmber'
  | 'PileOfCoins'
  | 'Pulpit'
  | 'RareBook'
  | 'RareGemstone'
  | 'RingWithGemstone'
  | 'Saw'
  | 'Scepter'
  | 'ScepterWithGemstones'
  | 'ShortSpear'
  | 'ShortSword'
  | 'SilverAltar'
  | 'SilverAmulet'
  | 'SilverBowl'
  | 'SilverBox'
  | 'SilverBracelet'
  | 'SilverBrooch'
  | 'SilverCoins'
  | 'SilverComb'
  | 'SilverCrown'
  | 'SilverEarring'
  | 'SilverGoblet'
  | 'SilverHeadband'
  | 'SilverHelmet'
  | 'SilverMedallion'
  | 'SilverMirror'
  | 'SilverMug'
  | 'SilverNecklace'
  | 'SilverRing'
  | 'SilverSarcophagus'
  | 'SilverStatue'
  | 'SilverStatuette'
  | 'SimpleGemstone'
  | 'SmallShield'
  | 'SmallSilverChest'
  | 'Tapestry'
  | 'UniqueBook'
  | 'VelvetGloves'
  | 'Waterskin'
  | 'WellTailoredCloakWithSilverBuckle'
