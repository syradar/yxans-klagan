import { Find, FindChance, FindLocation, FindType } from '../models/find.model'

export type FindTable<T extends FindType, L extends FindLocation> = {
  [C in FindChance]: Find<T, C, L>
}

export const finds: {
  [L in FindLocation]: {
    [T in FindType]: FindTable<T, L>
  }
} = {
  Carried: {
    Simple: {
      31: {
        chance: 31,
        location: 'Carried',
        title: 'CopperCoins',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0,
      },
      32: {
        chance: 32,
        location: 'Carried',
        title: 'BoneStatuette',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0.5,
      },
      33: {
        chance: 33,
        location: 'Carried',
        title: 'PieceOfAmber',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0.5,
      },
      34: {
        chance: 34,
        location: 'Carried',
        title: 'BronzeBeltBuckle',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0.5,
      },
      35: {
        chance: 35,
        location: 'Carried',
        title: 'BoneDice',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0.5,
      },
      36: {
        chance: 36,
        location: 'Carried',
        title: 'BoneWhistle',
        type: 'Simple',
        value: '2D6 copper',
        weight: 0.5,
      },
      41: {
        chance: 41,
        location: 'Carried',
        title: 'BoneStatuette',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      42: {
        chance: 42,
        location: 'Carried',
        title: 'BronzeBracelet',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      43: {
        chance: 43,
        location: 'Carried',
        title: 'BronzeNecklace',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      44: {
        chance: 44,
        location: 'Carried',
        title: 'BronzeMedallion',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      45: {
        chance: 45,
        location: 'Carried',
        title: 'GoodBoots',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      46: {
        chance: 46,
        location: 'Carried',
        title: 'GoodGloves',
        type: 'Simple',
        value: '3D6 copper',
        weight: 0.5,
      },
      51: {
        type: 'Simple',
        chance: 51,
        location: 'Carried',
        title: 'BronzeDrinkingHorn',
        value: '4D6 copper',
        weight: 1,
      },
      52: {
        type: 'Simple',
        chance: 52,
        location: 'Carried',
        title: 'Lantern',
        value: '4D6 copper',
        weight: 0.5,
      },
      53: {
        type: 'Simple',
        chance: 53,
        location: 'Carried',
        title: 'BronzeDagger',
        value: '4D6 copper',
        weight: 0.5,
      },
      54: {
        type: 'Simple',
        chance: 54,
        location: 'Carried',
        title: 'BronzeShield',
        value: '4D6 copper',
        weight: 1,
      },
      55: {
        type: 'Simple',
        chance: 55,
        location: 'Carried',
        title: 'BronzeEarring',
        value: '4D6 copper',
        weight: 0.25,
      },
      56: {
        type: 'Simple',
        chance: 56,
        location: 'Carried',
        title: 'OneHandedBronzeWeapon',
        value: '1D6 silver',
        weight: 1,
      },
      61: {
        type: 'Simple',
        chance: 61,
        location: 'Carried',
        title: 'Book',
        value: '6D6 copper',
        weight: 1,
      },
      62: {
        type: 'Simple',
        chance: 62,
        location: 'Carried',
        title: 'SimpleGemstone',
        value: '6D6 copper',
        weight: 0.25,
      },
      63: {
        type: 'Simple',
        chance: 63,
        location: 'Carried',
        title: 'BronzeStatuette',
        value: '6D6 copper',
        weight: 0.5,
      },
      64: {
        type: 'Simple',
        chance: 64,
        location: 'Carried',
        title: 'BronzeHelmet',
        value: '1D6 silver',
        weight: 1,
      },
      65: {
        type: 'Simple',
        chance: 65,
        location: 'Carried',
        title: 'CopperHeadband',
        value: '1D6 silver',
        weight: 1,
      },
      66: {
        type: 'Simple',
        chance: 66,
        location: 'Carried',
        title: 'CopperCrown',
        value: '2D6 silver',
        weight: 1,
      },
    },
    Valuable: {
      31: {
        type: 'Valuable',
        chance: 31,
        location: 'Carried',
        title: 'SilverCoins',
        value: '3D6 silver',
        weight: 0,
      },
      32: {
        type: 'Valuable',
        chance: 32,
        location: 'Carried',
        title: 'SilverBox',
        value: '2D6 silver',
        weight: 0.5,
      },
      33: {
        type: 'Valuable',
        chance: 33,
        location: 'Carried',
        title: 'Pearl',
        value: '2D6 silver',
        weight: 0.25,
      },
      34: {
        type: 'Valuable',
        chance: 34,
        location: 'Carried',
        title: 'SilverBowl',
        value: '2D6 silver',
        weight: 0.5,
      },
      35: {
        type: 'Valuable',
        chance: 35,
        location: 'Carried',
        title: 'Painting',
        value: '2D6 silver',
        weight: 0.5,
      },
      36: {
        type: 'Valuable',
        chance: 36,
        location: 'Carried',
        title: 'SilverMug',
        value: '2D6 silver',
        weight: 0.5,
      },
      41: {
        type: 'Valuable',
        chance: 41,
        location: 'Carried',
        title: 'SilverBracelet',
        value: '3D6 silver',
        weight: 0.5,
      },
      42: {
        type: 'Valuable',
        chance: 42,
        location: 'Carried',
        title: 'SilverRing',
        value: '3D6 silver',
        weight: 0.25,
      },
      43: {
        type: 'Valuable',
        chance: 43,
        location: 'Carried',
        title: 'SilverNecklace',
        value: '3D6 silver',
        weight: 0.25,
      },
      44: {
        type: 'Valuable',
        chance: 44,
        location: 'Carried',
        title: 'WellTailoredCloakWithSilverBuckle',
        value: '3D6 silver',
        weight: 1,
      },
      45: {
        type: 'Valuable',
        chance: 45,
        location: 'Carried',
        title: 'ElegantBoots',
        value: '3D6 silver',
        weight: 1,
      },
      46: {
        type: 'Valuable',
        chance: 46,
        location: 'Carried',
        title: 'CalfSkinGloves',
        value: '3D6 silver',
        weight: 0.5,
      },
      51: {
        type: 'Valuable',
        chance: 51,
        location: 'Carried',
        title: 'DrinkingHornWithSilverDetails',
        value: '4D6 silver',
        weight: 1,
      },
      52: {
        type: 'Valuable',
        chance: 52,
        location: 'Carried',
        title: 'Embroidery',
        value: '4D6 silver',
        weight: 1,
      },
      53: {
        type: 'Valuable',
        chance: 53,
        location: 'Carried',
        title: 'ElegantHelmet',
        value: '4D6 silver',
        weight: 0.5,
      },
      54: {
        type: 'Valuable',
        chance: 54,
        location: 'Carried',
        title: 'ElegantLargeShield',
        value: '4D6 silver',
        weight: 1,
      },
      55: {
        type: 'Valuable',
        chance: 55,
        location: 'Carried',
        title: 'SilverEarring',
        value: '4D6 silver',
        weight: 0.25,
      },
      56: {
        type: 'Valuable',
        chance: 56,
        location: 'Carried',
        title: 'ElegantOneHandedWeapon',
        value: '4D6 silver',
        weight: 1,
      },
      61: {
        type: 'Valuable',
        chance: 61,
        location: 'Carried',
        title: 'RareBook',
        value: '5D6 silver',
        weight: 1,
      },
      62: {
        type: 'Valuable',
        chance: 62,
        location: 'Carried',
        title: 'Gemstone',
        value: '6D6 silver',
        weight: 0.25,
      },
      63: {
        type: 'Valuable',
        chance: 63,
        location: 'Carried',
        title: 'SilverStatuette',
        value: '7D6 silver',
        weight: 1,
      },
      64: {
        type: 'Valuable',
        chance: 64,
        location: 'Carried',
        title: 'SilverHelmet',
        value: '8D6 silver',
        weight: 1,
      },
      65: {
        type: 'Valuable',
        chance: 65,
        location: 'Carried',
        title: 'SilverHeadband',
        value: '9D6 silver',
        weight: 0.5,
      },
      66: {
        type: 'Valuable',
        chance: 66,
        location: 'Carried',
        title: 'SilverCrown',
        value: '1D6 gold',
        weight: 1,
      },
    },
    Precious: {
      31: {
        type: 'Precious',
        chance: 31,
        location: 'Carried',
        title: 'GoldCoins',
        value: '1D6 gold',
        weight: 0,
      },
      32: {
        type: 'Precious',
        chance: 32,
        location: 'Carried',
        title: 'GoldStatuette',
        value: '5D6 silver',
        weight: 0.5,
      },
      33: {
        type: 'Precious',
        chance: 33,
        location: 'Carried',
        title: 'Pearls',
        value: '5D6 silver',
        weight: 0.25,
      },
      34: {
        type: 'Precious',
        chance: 34,
        location: 'Carried',
        title: 'GoldenBowl',
        value: '5D6 silver',
        weight: 0.5,
      },
      35: {
        type: 'Precious',
        chance: 35,
        location: 'Carried',
        title: 'GoldAmulet',
        value: '5D6 silver',
        weight: 0.25,
      },
      36: {
        type: 'Precious',
        chance: 36,
        location: 'Carried',
        title: 'GoldMug',
        value: '5D6 silver',
        weight: 0.5,
      },
      41: {
        type: 'Precious',
        chance: 41,
        location: 'Carried',
        title: 'GoldBracelet',
        value: '5D6 silver',
        weight: 0.25,
      },
      42: {
        type: 'Precious',
        chance: 42,
        location: 'Carried',
        title: 'GoldRing',
        value: '6D6 silver',
        weight: 0.25,
      },
      43: {
        type: 'Precious',
        chance: 43,
        location: 'Carried',
        title: 'GoldNecklace',
        value: '6D6 silver',
        weight: 0.25,
      },
      44: {
        type: 'Precious',
        chance: 44,
        location: 'Carried',
        title: 'FurCloakWithExpensiveEmbroideryAndGoldenBuckle',
        value: '6D6 silver',
        weight: 1,
      },
      45: {
        type: 'Precious',
        chance: 45,
        location: 'Carried',
        title: 'DragonscaleBoots',
        value: '6D6 silver',
        weight: 0.5,
      },
      46: {
        type: 'Precious',
        chance: 46,
        location: 'Carried',
        title: 'VelvetGloves',
        value: '6D6 silver',
        weight: 0.5,
      },
      51: {
        type: 'Precious',
        chance: 51,
        location: 'Carried',
        title: 'DrinkingHornWithGoldDetails',
        value: '1D6 gold',
        weight: 0.5,
      },
      52: {
        type: 'Precious',
        chance: 52,
        location: 'Carried',
        title: 'GoldenEmbroidery',
        value: '1D6 gold',
        weight: 1,
      },
      53: {
        type: 'Precious',
        chance: 53,
        location: 'Carried',
        title: 'GoldenHelmet',
        value: '2D6 gold',
        weight: 0.5,
      },
      54: {
        type: 'Precious',
        chance: 54,
        location: 'Carried',
        title: 'GoldenLargeShield',
        value: '2D6 gold',
        weight: 1,
      },
      55: {
        type: 'Precious',
        chance: 55,
        location: 'Carried',
        title: 'GoldenArmor',
        value: '4D6 gold',
        weight: 2,
      },
      56: {
        type: 'Precious',
        chance: 56,
        location: 'Carried',
        title: 'GoldenWeapon',
        value: '2D6 gold',
        weight: 1,
      },
      61: {
        type: 'Precious',
        chance: 61,
        location: 'Carried',
        title: 'UniqueBook',
        value: '2D6 gold',
        weight: 1,
      },
      62: {
        type: 'Precious',
        chance: 62,
        location: 'Carried',
        title: 'RareGemstone',
        value: '2D6 gold',
        weight: 0.25,
      },
      63: {
        type: 'Precious',
        chance: 63,
        location: 'Carried',
        title: 'RingWithGemstone',
        value: '2D6 gold',
        weight: 0.25,
      },
      64: {
        type: 'Precious',
        chance: 64,
        location: 'Carried',
        title: 'Scepter',
        value: '3D6 gold',
        weight: 0.5,
      },
      65: {
        type: 'Precious',
        chance: 65,
        location: 'Carried',
        title: 'GoldenCrown',
        value: '4D6 gold',
        weight: 0.5,
      },
      66: {
        type: 'Precious',
        chance: 66,
        location: 'Carried',
        title: 'Artifact',
        value: 'None',
        weight: 0,
      },
    },
  },
  Lair: {
    Simple: {
      31: {
        type: 'Simple',
        chance: 31,
        location: 'Lair',
        title: 'CopperCoins',
        value: '4D6 copper',
        weight: 0,
      },
      32: {
        type: 'Simple',
        chance: 32,
        location: 'Lair',
        title: 'CopperBowl',
        value: '3D6 copper',
        weight: 0.5,
      },
      33: {
        type: 'Simple',
        chance: 33,
        location: 'Lair',
        title: 'CopperPlate',
        value: '3D6 copper',
        weight: 1,
      },
      34: {
        type: 'Simple',
        chance: 34,
        location: 'Lair',
        title: 'CopperMug',
        value: '3D6 copper',
        weight: 0.5,
      },
      35: {
        type: 'Simple',
        chance: 35,
        location: 'Lair',
        title: 'Knapsack',
        value: '3D6 copper',
        weight: 0.5,
      },
      36: {
        type: 'Simple',
        chance: 36,
        location: 'Lair',
        title: 'Waterskin',
        value: '3D6 copper',
        weight: 0.5,
      },
      41: {
        type: 'Simple',
        chance: 41,
        location: 'Lair',
        title: 'BeltBuckle',
        value: '4D6 copper',
        weight: 0.5,
      },
      42: {
        type: 'Simple',
        chance: 42,
        location: 'Lair',
        title: 'Hammer',
        value: '4D6 copper',
        weight: 1,
      },
      43: {
        type: 'Simple',
        chance: 43,
        location: 'Lair',
        title: 'Saw',
        value: '4D6 copper',
        weight: 1,
      },
      44: {
        type: 'Simple',
        chance: 44,
        location: 'Lair',
        title: 'ShortSword',
        value: '1D6 silver',
        weight: 1,
      },
      45: {
        type: 'Simple',
        chance: 45,
        location: 'Lair',
        title: 'SmallShield',
        value: '4D6 copper',
        weight: 0.5,
      },
      46: {
        type: 'Simple',
        chance: 46,
        location: 'Lair',
        title: 'Axe',
        value: '4D6 copper',
        weight: 1,
      },
      51: {
        type: 'Simple',
        chance: 51,
        location: 'Lair',
        title: 'ShortSpear',
        value: '5D6 copper',
        weight: 1,
      },
      52: {
        type: 'Simple',
        chance: 52,
        location: 'Lair',
        title: 'BronzePot',
        value: '5D6 copper',
        weight: 2,
      },
      53: {
        type: 'Simple',
        chance: 53,
        location: 'Lair',
        title: 'BronzeLantern',
        value: '5D6 copper',
        weight: 0.5,
      },
      54: {
        type: 'Simple',
        chance: 54,
        location: 'Lair',
        title: 'GamingBoard',
        value: '5D6 copper',
        weight: 1,
      },
      55: {
        type: 'Simple',
        chance: 55,
        location: 'Lair',
        title: 'Chest',
        value: '5D6 copper',
        weight: 2,
      },
      56: {
        type: 'Simple',
        chance: 56,
        location: 'Lair',
        title: 'Lute',
        value: '5D6 copper',
        weight: 1,
      },
      61: {
        type: 'Simple',
        chance: 61,
        location: 'Lair',
        title: 'BronzeArmor',
        value: '1D6 gold',
        weight: 2,
      },
      62: {
        type: 'Simple',
        chance: 62,
        location: 'Lair',
        title: 'BronzeMirror',
        value: '2D6 silver',
        weight: 3,
      },
      63: {
        type: 'Simple',
        chance: 63,
        location: 'Lair',
        title: 'PalanquinWithCopperDetails',
        value: '3D6 silver',
        weight: 4,
      },
      64: {
        type: 'Simple',
        chance: 64,
        location: 'Lair',
        title: 'BronzeSarcophagus',
        value: '4D6 silver',
        weight: 4,
      },
      65: {
        type: 'Simple',
        chance: 65,
        location: 'Lair',
        title: 'BronzeAltar',
        value: '5D6 silver',
        weight: 5,
      },
      66: {
        type: 'Simple',
        chance: 66,
        location: 'Lair',
        title: 'BronzeStatue',
        value: '6D6 silver',
        weight: 6,
      },
    },
    Valuable: {
      31: {
        type: 'Valuable',
        chance: 31,
        location: 'Lair',
        title: 'SilverCoins',
        value: '4D6 silver',
        weight: 0,
      },
      34: {
        type: 'Valuable',
        chance: 34,
        location: 'Lair',
        title: 'Painting',
        value: '3D6 silver',
        weight: 2,
      },
      32: {
        type: 'Valuable',
        chance: 32,
        location: 'Lair',
        title: 'SilverMedallion',
        value: '3D6 silver',
        weight: 0.5,
      },
      33: {
        type: 'Valuable',
        chance: 33,
        location: 'Lair',
        title: 'SmallSilverChest',
        value: '3D6 silver',
        weight: 0.5,
      },
      35: {
        type: 'Valuable',
        chance: 35,
        location: 'Lair',
        title: 'GlassBowl',
        value: '3D6 silver',
        weight: 0.5,
      },
      36: {
        type: 'Valuable',
        chance: 36,
        location: 'Lair',
        title: 'BeautifulVase',
        value: '3D6 silver',
        weight: 0.5,
      },
      41: {
        type: 'Valuable',
        chance: 41,
        location: 'Lair',
        title: 'SilverBrooch',
        value: '4D6 silver',
        weight: 0.25,
      },
      42: {
        type: 'Valuable',
        chance: 42,
        location: 'Lair',
        title: 'SilverComb',
        value: '4D6 silver',
        weight: 0.5,
      },
      43: {
        type: 'Valuable',
        chance: 43,
        location: 'Lair',
        title: 'SilverBox',
        value: '4D6 silver',
        weight: 0.5,
      },
      44: {
        type: 'Valuable',
        chance: 44,
        location: 'Lair',
        title: 'SilverAmulet',
        value: '4D6 silver',
        weight: 0.5,
      },
      45: {
        type: 'Valuable',
        chance: 45,
        location: 'Lair',
        title: 'SilverGoblet',
        value: '4D6 silver',
        weight: 0.5,
      },
      46: {
        type: 'Valuable',
        chance: 46,
        location: 'Lair',
        title: 'Mask',
        value: '4D6 silver',
        weight: 0.5,
      },
      51: {
        type: 'Valuable',
        chance: 51,
        location: 'Lair',
        title: 'BottleOfExpensiveWine',
        value: '5D6 silver',
        weight: 1,
      },
      52: {
        type: 'Valuable',
        chance: 52,
        location: 'Lair',
        title: 'FineHat',
        value: '5D6 silver',
        weight: 0.5,
      },
      53: {
        type: 'Valuable',
        chance: 53,
        location: 'Lair',
        title: 'Tapestry',
        value: '5D6 silver',
        weight: 2,
      },
      54: {
        type: 'Valuable',
        chance: 54,
        location: 'Lair',
        title: 'Cabinet',
        value: '5D6 silver',
        weight: 4,
      },
      55: {
        type: 'Valuable',
        chance: 55,
        location: 'Lair',
        title: 'Carpet',
        value: '5D6 silver',
        weight: 2,
      },
      56: {
        type: 'Valuable',
        chance: 56,
        location: 'Lair',
        title: 'Armchair',
        value: '5D6 silver',
        weight: 3,
      },
      61: {
        type: 'Valuable',
        chance: 61,
        location: 'Lair',
        title: 'Candelabrum',
        value: '6D6 silver',
        weight: 2,
      },
      62: {
        type: 'Valuable',
        chance: 62,
        location: 'Lair',
        title: 'SilverMirror',
        value: '6D6 silver',
        weight: 4,
      },
      63: {
        type: 'Valuable',
        chance: 63,
        location: 'Lair',
        title: 'PalanquinWithSilverDetails',
        value: '7D6 silver',
        weight: 5,
      },
      64: {
        type: 'Valuable',
        chance: 64,
        location: 'Lair',
        title: 'SilverSarcophagus',
        value: '8D6 silver',
        weight: 6,
      },
      65: {
        type: 'Valuable',
        chance: 65,
        location: 'Lair',
        title: 'SilverAltar',
        value: '9D6 silver',
        weight: 6,
      },
      66: {
        type: 'Valuable',
        chance: 66,
        location: 'Lair',
        title: 'SilverStatue',
        value: '1D6 gold',
        weight: 6,
      },
    },
    Precious: {
      31: {
        type: 'Precious',
        chance: 31,
        location: 'Lair',
        title: 'PileOfCoins',
        value: '1D6 gold;2D6 silver;4D6 copper',
        weight: 0,
      },
      32: {
        type: 'Precious',
        chance: 32,
        location: 'Lair',
        title: 'GoldenNecklace',
        value: '2D6 gold',
        weight: 0.5,
      },
      33: {
        type: 'Precious',
        chance: 33,
        location: 'Lair',
        title: 'BeautifulTapestry',
        value: '2D6 gold',
        weight: 3,
      },
      34: {
        type: 'Precious',
        chance: 34,
        location: 'Lair',
        title: 'EmbroidedCarpet',
        value: '2D6 gold',
        weight: 4,
      },
      35: {
        type: 'Precious',
        chance: 35,
        location: 'Lair',
        title: 'GoldGoblet',
        value: '2D6 gold',
        weight: 0.5,
      },
      36: {
        type: 'Precious',
        chance: 36,
        location: 'Lair',
        title: 'PaintingWithGoldenFrame',
        value: '2D6 gold',
        weight: 3,
      },
      41: {
        type: 'Precious',
        chance: 41,
        location: 'Lair',
        title: 'GoldenTray',
        value: '3D6 gold',
        weight: 2,
      },
      42: {
        type: 'Precious',
        chance: 42,
        location: 'Lair',
        title: 'GoldenStatueOfAChild',
        value: '3D6 gold',
        weight: 4,
      },
      43: {
        type: 'Precious',
        chance: 43,
        location: 'Lair',
        title: 'GoldenDiadem',
        value: '3D6 gold',
        weight: 0.5,
      },
      44: {
        type: 'Precious',
        chance: 44,
        location: 'Lair',
        title: 'CeilingCandelabrum',
        value: '3D6 gold',
        weight: 3,
      },
      45: {
        type: 'Precious',
        chance: 45,
        location: 'Lair',
        title: 'GoldenArmchair',
        value: '3D6 gold',
        weight: 3,
      },
      46: {
        type: 'Precious',
        chance: 46,
        location: 'Lair',
        title: 'GoldenCradle',
        value: '3D6 gold',
        weight: 3,
      },
      51: {
        type: 'Precious',
        chance: 51,
        location: 'Lair',
        title: 'NecklaceWithGemstones',
        value: '4D6 gold',
        weight: 0.5,
      },
      52: {
        type: 'Precious',
        chance: 52,
        location: 'Lair',
        title: 'ScepterWithGemstones',
        value: '4D6 gold',
        weight: 0.5,
      },
      53: {
        type: 'Precious',
        chance: 53,
        location: 'Lair',
        title: 'CrownWithGemstones',
        value: '4D6 gold',
        weight: 0.5,
      },
      54: {
        type: 'Precious',
        chance: 54,
        location: 'Lair',
        title: 'BeautifulDesk',
        value: '4D6 gold',
        weight: 4,
      },
      55: {
        type: 'Precious',
        chance: 55,
        location: 'Lair',
        title: 'Pulpit',
        value: '4D6 gold',
        weight: 4,
      },
      56: {
        type: 'Precious',
        chance: 56,
        location: 'Lair',
        title: 'GoldenTable',
        value: '4D6 gold',
        weight: 5,
      },
      61: {
        type: 'Precious',
        chance: 61,
        location: 'Lair',
        title: 'LargeRareGemstone',
        value: '2D6 gold',
        weight: 0.5,
      },
      62: {
        type: 'Precious',
        chance: 62,
        location: 'Lair',
        title: 'GoldenMirror',
        value: '5D6 gold',
        weight: 5,
      },
      63: {
        type: 'Precious',
        chance: 63,
        location: 'Lair',
        title: 'GoldenPalanquin',
        value: '5D6 gold',
        weight: 6,
      },
      64: {
        type: 'Precious',
        chance: 64,
        location: 'Lair',
        title: 'GoldenSarcophagus',
        value: '6D6 gold',
        weight: 7,
      },
      65: {
        type: 'Precious',
        chance: 65,
        location: 'Lair',
        title: 'GoldenStatue',
        value: '7D6 gold',
        weight: 8,
      },
      66: {
        type: 'Precious',
        chance: 66,
        location: 'Lair',
        title: 'Artifact',
        value: 'None',
        weight: 0,
      },
    },
  },
}
