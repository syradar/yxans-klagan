import { Supply, SupplyViewModel, supplyLabelDict } from '../../models/supply'
import { Talent } from '../../models/talent.model'
import { Time, timeLabelDict } from '../../models/time.model'
import { RawMaterial } from '../../models/material.model'
import { Weight } from '../../models/weight.model'
import { TranslationKey } from '../../store/translations/translation.model'
import { Tool } from '../../models/tool.model'
import { Price } from '../../models/price.model'
import { ServiceId } from './services.data'
import { translationDict } from '../../functions/translation-dict'

const gearCategories = ['trade_goods', 'services'] as const
export type GearCategory = (typeof gearCategories)[number]
export const gearCategoryTranslationDict = translationDict(
  gearCategories,
  'gear',
  'category.',
)

export const gearCategoryLabelDict: Readonly<
  Record<GearCategory, TranslationKey<'gear'>>
> = Object.freeze({
  trade_goods: 'gear:category.trade_goods',
  services: 'gear:category.services',
})

export type GearId = TradeGoodsId | ServiceId

export type TradeGoodsId =
  | 'backpack'
  | 'bandages'
  | 'barrel'
  | 'bearTrap'
  | 'blanket'
  | 'cauldron'
  | 'chalk'
  | 'chest'
  | 'clayJug'
  | 'clayPot'
  | 'crystalBall'
  | 'drum'
  | 'fieldKitchen'
  | 'fieldRation'
  | 'fishingHookAndLine'
  | 'fishingNet'
  | 'flintAndSteel'
  | 'flute'
  | 'foodKnife'
  | 'grapplingHook'
  | 'hallucinogenicPoisonOrAntidote'
  | 'harp'
  | 'holySymbol'
  | 'horn'
  | 'hourglass'
  | 'inkAndQuill'
  | 'knapsack'
  | 'lampOil'
  | 'lantern'
  | 'largeTent'
  | 'lethalPoisonOrAntidote'
  | 'lockpicks'
  | 'lyre'
  | 'magnifyingGlass'
  | 'map'
  | 'metalChalice'
  | 'metalPlate'
  | 'oilLamp'
  | 'paralyzingPoisonOrAntidote'
  | 'parchment'
  | 'quiver'
  | 'ropeTenMeters'
  | 'scales'
  | 'sleepingFur'
  | 'sleepingPoisonOrAntidote'
  | 'smallTent'
  | 'snares'
  | 'spoon'
  | 'spyglass'
  | 'tallowCandle'
  | 'tankard'
  | 'threeArrowsIronHead'
  | 'threeArrowsWoodenHead'
  | 'torches'
  | 'waterskin'

const marketTypes = [
  'dailyLiving',
  'tradeGoods',
  'luxuryGoods',
  'war',
  'food',
] as const
export type MarketType = (typeof marketTypes)[number]
export const marketTypeTranslationDict = translationDict(
  marketTypes,
  'gear',
  'market_type.',
)

export type GearEffect = {
  label: TranslationKey<'gear'>
}

export type Gear = {
  category: GearCategory
  name: {
    id: string
    label: TranslationKey<'gear'>
  }
  price: Price
  supply: Supply
  marketType: MarketType
  effects: GearEffect
}
export type TradeGoods = Gear & {
  name: {
    id: TradeGoodsId
    label: TranslationKey<'gear'>
  }
  weight: Weight
  rawMaterials: RawMaterial[]
  time: Time
  talents: Talent[]
  tools: Tool[]
}

export type TradeGoodsViewModel = Omit<
  TradeGoods,
  'name' | 'supply' | 'time'
> & {
  category: GearCategory
  name: {
    id: TradeGoodsId
    label: TranslationKey<'gear'>
    translation: string
  }
  supply: SupplyViewModel
  time: TranslationKey<'common'>
}

export const tradeGoodsViewModel = (
  gear: TradeGoods,
  translation: string,
  supplyAmount: number | undefined,
): TradeGoodsViewModel => ({
  ...gear,
  name: {
    ...gear.name,
    translation,
  },
  supply: {
    label: supplyLabelDict[gear.supply],
    amount: supplyAmount,
    supply: gear.supply,
  },
  time: timeLabelDict[gear.time],
})

export const tradeGoods: TradeGoods[] = [
  {
    category: 'trade_goods',
    name: { id: 'chalk', label: 'gear:gear.chalk.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'stone',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: [],
    effects: { label: 'gear:gear.chalk.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'flintAndSteel', label: 'gear:gear.flint_and_steel.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.1,
      },
      {
        material: 'stone',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: [],
    effects: { label: 'gear:gear.flint_and_steel.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'lampOil', label: 'gear:gear.lamp_oil.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'tallow',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['fire'],
    effects: { label: 'gear:gear.lamp_oil.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'tankard', label: 'gear:gear.tankard.name' },
    price: {
      _type: 'instant',
      copper: 2,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'wood',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: [],
    effects: { label: 'gear:gear.tankard.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'fishingHookAndLine',
      label: 'gear:gear.fishing_hook_and_line.name',
    },
    price: {
      _type: 'instant',
      copper: 4,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.1,
      },
      {
        material: 'cloth',
        value: 0.1,
      },
    ],
    time: 'quarterDay',
    talents: ['smith', 'tailor'],
    tools: ['hammer', 'forge'],
    effects: { label: 'gear:gear.fishing_hook_and_line.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'clayPot', label: 'gear:gear.clay_pot.name' },
    price: {
      _type: 'instant',
      copper: 4,
    },
    supply: 'common',
    weight: 'none',
    rawMaterials: [
      {
        material: 'stone',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: ['fire'],
    effects: { label: 'gear:gear.clay_pot.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'clayJug', label: 'gear:gear.clay_jug.name' },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'stone',
        value: 1,
      },
    ],
    time: 'day',
    talents: [],
    tools: ['fire'],
    effects: { label: 'gear:gear.clay_jug.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'oilLamp', label: 'gear:gear.oil_lamp.name' },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'stone',
        value: 1,
      },
    ],
    time: 'day',
    talents: [],
    tools: ['fire'],
    effects: { label: 'gear:gear.oil_lamp.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'torches', label: 'gear:gear.torches.name' },
    price: {
      _type: 'instant',
      copper: 5,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: ['knifeOrAxe'],
    effects: { label: 'gear:gear.torches.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'threeArrowsWoodenHead',
      label: 'gear:gear.three_arrows_wooden_head.name',
    },
    price: {
      _type: 'instant',
      copper: 6,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['bowyer'],
    tools: ['knife'],
    effects: { label: 'gear:gear.three_arrows_wooden_head.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'foodKnife', label: 'gear:gear.food_knife.name' },
    price: {
      _type: 'instant',
      copper: 6,
    },
    supply: 'common',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.food_knife.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'tallowCandle', label: 'gear:gear.tallow_candle.name' },
    price: {
      _type: 'instant',
      copper: 6,
    },
    supply: 'common',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'cloth',
        value: 0.1,
      },
      {
        material: 'tallow',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: [],
    tools: ['fire'],
    effects: { label: 'gear:gear.tallow_candle.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'blanket', label: 'gear:gear.blanket.name' },
    price: {
      _type: 'instant',
      copper: 7,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'cloth',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: ['tailor'],
    tools: ['knife'],
    effects: { label: 'gear:gear.blanket.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'metalChalice', label: 'gear:gear.metal_chalice.name' },
    price: {
      _type: 'instant',
      copper: 7,
    },
    supply: 'uncommon',
    weight: 'light',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.metal_chalice.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'barrel', label: 'gear:gear.barrel.name' },
    price: {
      _type: 'instant',
      copper: 8,
    },
    supply: 'common',
    weight: 'heavy',
    rawMaterials: [
      {
        material: 'wood',
        value: 2,
      },
    ],
    time: 'day',
    talents: [],
    tools: ['saw', 'hammer'],
    effects: { label: 'gear:gear.barrel.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'quiver', label: 'gear:gear.quiver.name' },
    price: {
      _type: 'instant',
      copper: 8,
    },
    supply: 'common',
    weight: 'none',
    rawMaterials: [
      {
        material: 'leather',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['knife'],
    effects: { label: 'gear:gear.quiver.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'chest', label: 'gear:gear.chest.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    weight: 'heavy',
    rawMaterials: [
      {
        material: 'wood',
        value: 2,
      },
    ],
    time: 'day',
    talents: [],
    tools: ['saw', 'hammer'],
    effects: { label: 'gear:gear.chest.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'fishingNet', label: 'gear:gear.fishing_net.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'cloth',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['tailor'],
    tools: ['knife'],
    effects: { label: 'gear:gear.fishing_net.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'snares', label: 'gear:gear.snares.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'cloth',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: ['masterOfTheHunt'],
    tools: ['knife'],
    effects: { label: 'gear:gear.snares.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'cauldron', label: 'gear:gear.cauldron.name' },
    price: {
      _type: 'instant',
      copper: 18,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['chef', 'smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.cauldron.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'lantern', label: 'gear:gear.lantern.name' },
    price: {
      _type: 'instant',
      copper: 20,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'iron',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.lantern.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'ropeTenMeters', label: 'gear:gear.rope_ten_meters.name' },
    price: {
      _type: 'instant',
      copper: 20,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'cloth',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['tailor'],
    tools: ['knife'],
    effects: { label: 'gear:gear.rope_ten_meters.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'smallTent', label: 'gear:gear.small_tent.name' },
    price: {
      _type: 'instant',
      copper: 20,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'cloth',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['tailorOrTanner'],
    tools: ['knife', 'needleAndThread'],
    effects: { label: 'gear:gear.small_tent.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'sleepingFur', label: 'gear:gear.sleeping_fur.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'pelt',
        value: 2,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['knife'],
    effects: { label: 'gear:gear.sleeping_fur.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'waterskin', label: 'gear:gear.waterskin.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'common',
    weight: 'none',
    rawMaterials: [
      {
        material: 'leather',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['needleAndThread'],
    effects: { label: 'gear:gear.waterskin.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'grapplingHook', label: 'gear:gear.grappling_hook.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'uncommon',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.grappling_hook.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'scales', label: 'gear:gear.scales.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'uncommon',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.scales.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'backpack', label: 'gear:gear.backpack.name' },
    price: {
      _type: 'instant',
      copper: 40,
    },
    supply: 'common',
    weight: 'none',
    rawMaterials: [
      {
        material: 'cloth',
        value: 2,
      },
    ],
    time: 'quarterDay',
    talents: ['tailor'],
    tools: ['knife', 'needleAndThread'],
    effects: { label: 'gear:gear.backpack.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'fieldKitchen', label: 'gear:gear.field_kitchen.name' },
    price: {
      _type: 'instant',
      copper: 40,
    },
    supply: 'uncommon',
    weight: 'heavy',
    rawMaterials: [
      {
        material: 'iron',
        value: 2,
      },
    ],
    time: 'day',
    talents: ['chef', 'smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.field_kitchen.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'map', label: 'gear:gear.map.name' },
    price: {
      _type: 'instant',
      copper: 40,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'parchment',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['pathfinder'],
    tools: ['inkAndQuill'],
    effects: { label: 'gear:gear.map.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'bearTrap', label: 'gear:gear.bear_trap.name' },
    price: {
      _type: 'instant',
      copper: 50,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.bear_trap.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'largeTent', label: 'gear:gear.large_tent.name' },
    price: {
      _type: 'instant',
      copper: 50,
    },
    supply: 'uncommon',
    weight: 'heavy',
    rawMaterials: [
      {
        material: 'cloth',
        value: 2,
      },
    ],
    time: 'day',
    talents: ['tailorOrTanner'],
    tools: ['knife', 'needleAndThread'],
    effects: { label: 'gear:gear.large_tent.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'magnifyingGlass', label: 'gear:gear.magnifying_glass.name' },
    price: {
      _type: 'instant',
      copper: 300,
    },
    supply: 'rare',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.25,
      },
      {
        material: 'glass',
        value: 0.5,
      },
    ],
    time: 'week',
    talents: ['builder', 'smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.magnifying_glass.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'spyglass', label: 'gear:gear.spyglass.name' },
    price: {
      _type: 'instant',
      copper: 300,
    },
    supply: 'rare',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.25,
      },
    ],
    time: 'twoWeeks',
    talents: ['smith', 'builder'],
    tools: ['forge'],
    effects: { label: 'gear:gear.spyglass.effect' },
    marketType: 'dailyLiving',
  },
  {
    category: 'trade_goods',
    name: { id: 'fieldRation', label: 'gear:gear.field_ration.name' },
    price: {
      _type: 'instant',
      copper: 3,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'meatOrFishOrVegetables',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['chef'],
    tools: ['fire'],
    effects: { label: 'gear:gear.field_ration.effect' },
    marketType: 'food',
  },
  {
    category: 'trade_goods',
    name: { id: 'parchment', label: 'gear:gear.parchment.name' },
    price: {
      _type: 'instant',
      copper: 6,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'leather',
        value: 0.25,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['knife'],
    effects: { label: 'gear:gear.parchment.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'metalPlate', label: 'gear:gear.metal_plate.name' },
    price: {
      _type: 'instant',
      copper: 8,
    },
    supply: 'uncommon',
    weight: 'light',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.metal_plate.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'spoon', label: 'gear:gear.spoon.name' },
    price: {
      _type: 'instant',
      copper: 8,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.25,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.spoon.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'holySymbol', label: 'gear:gear.holy_symbol.name' },
    price: {
      _type: 'instant',
      copper: 10,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.holy_symbol.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'flute', label: 'gear:gear.flute.name' },
    price: {
      _type: 'instant',
      copper: 15,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'wood',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['pathOfTheSong'],
    tools: ['knife'],
    effects: { label: 'gear:gear.flute.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'drum', label: 'gear:gear.drum.name' },
    price: {
      _type: 'instant',
      copper: 18,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
      {
        material: 'leather',
        value: 0.5,
      },
    ],
    time: 'day',
    talents: ['pathOfTheSong'],
    tools: ['knife'],
    effects: { label: 'gear:gear.drum.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'horn', label: 'gear:gear.horn.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['pathOfTheSong'],
    tools: ['knife'],
    effects: { label: 'gear:gear.horn.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'inkAndQuill', label: 'gear:gear.ink_and_quill.name' },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'feather',
        value: 1,
      },
      {
        material: 'iron',
        value: 0.1,
      },
    ],
    time: 'quarterDay',
    talents: ['tanner'],
    tools: ['knife', 'fire'],
    effects: { label: 'gear:gear.ink_and_quill.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'lyre', label: 'gear:gear.lyre.name' },
    price: {
      _type: 'instant',
      copper: 50,
    },
    supply: 'uncommon',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
      {
        material: 'leather',
        value: 0.25,
      },
    ],
    time: 'week',
    talents: ['pathOfTheSong'],
    tools: ['knife'],
    effects: { label: 'gear:gear.lyre.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'crystalBall', label: 'gear:gear.crystal_ball.name' },
    price: {
      _type: 'instant',
      copper: 60,
    },
    supply: 'uncommon',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'glass',
        value: 1,
      },
    ],
    time: 'day',
    talents: ['smith'],
    tools: ['forge'],
    effects: { label: 'gear:gear.crystal_ball.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'harp', label: 'gear:gear.harp.name' },
    price: {
      _type: 'instant',
      copper: 80,
    },
    supply: 'rare',
    weight: 'heavy',
    rawMaterials: [
      {
        material: 'wood',
        value: 2,
      },
      {
        material: 'leather',
        value: 0.5,
      },
    ],
    time: 'twoWeeks',
    talents: ['pathOfTheSong'],
    tools: ['knife'],
    effects: { label: 'gear:gear.harp.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'hourglass', label: 'gear:gear.hourglass.name' },
    price: {
      _type: 'instant',
      copper: 120,
    },
    supply: 'rare',
    weight: 'light',
    rawMaterials: [
      {
        material: 'wood',
        value: 1,
      },
      {
        material: 'glass',
        value: 0.5,
      },
    ],
    time: 'week',
    talents: ['builder'],
    tools: ['forge'],
    effects: { label: 'gear:gear.hourglass.effect' },
    marketType: 'luxuryGoods',
  },
  {
    category: 'trade_goods',
    name: { id: 'bandages', label: 'gear:gear.bandages.name' },
    price: {
      _type: 'instant',
      copper: 6,
    },
    supply: 'common',
    weight: 'light',
    rawMaterials: [
      {
        material: 'cloth',
        value: 0.5,
      },
    ],
    time: 'quarterDay',
    talents: ['tailor'],
    tools: ['knife'],
    effects: { label: 'gear:gear.bandages.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'threeArrowsIronHead',
      label: 'gear:gear.three_arrows_iron_head.name',
    },
    price: {
      _type: 'instant',
      copper: 12,
    },
    supply: 'common',
    weight: 'normal',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.5,
      },
      {
        material: 'wood',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['smith', 'bowyer'],
    tools: ['forge', 'knife'],
    effects: { label: 'gear:gear.three_arrows_iron_head.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'sleepingPoisonOrAntidote',
      label: 'gear:gear.sleeping_poison_or_antidote.name',
    },
    price: {
      _type: 'instant',
      copper: 30,
    },
    supply: 'rare',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'herbs',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['poisoner'],
    tools: ['cauldron', 'fire'],
    effects: { label: 'gear:gear.sleeping_poison_or_antidote.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'hallucinogenicPoisonOrAntidote',
      label: 'gear:gear.hallucinogenic_poison_or_antidote.name',
    },
    price: {
      _type: 'instant',
      copper: 40,
    },
    supply: 'rare',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'herbs',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['poisoner'],
    tools: ['cauldron', 'fire'],
    effects: { label: 'gear:gear.hallucinogenic_poison_or_antidote.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'paralyzingPoisonOrAntidote',
      label: 'gear:gear.paralyzing_poison_or_antidote.name',
    },
    price: {
      _type: 'instant',
      copper: 40,
    },
    supply: 'rare',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'herbs',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['poisoner'],
    tools: ['cauldron', 'fire'],
    effects: { label: 'gear:gear.paralyzing_poison_or_antidote.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: {
      id: 'lethalPoisonOrAntidote',
      label: 'gear:gear.lethal_poison_or_antidote.name',
    },
    price: {
      _type: 'instant',
      copper: 50,
    },
    supply: 'rare',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'herbs',
        value: 1,
      },
    ],
    time: 'quarterDay',
    talents: ['poisoner'],
    tools: ['cauldron', 'fire'],
    effects: { label: 'gear:gear.lethal_poison_or_antidote.effect' },
    marketType: 'war',
  },
  {
    category: 'trade_goods',
    name: { id: 'lockpicks', label: 'gear:gear.lockpicks.name' },
    price: {
      _type: 'instant',
      copper: 100,
    },
    supply: 'uncommon',
    weight: 'tiny',
    rawMaterials: [
      {
        material: 'iron',
        value: 0.25,
      },
    ],
    time: 'day',
    talents: ['smith', 'lockpicker'],
    tools: ['forge'],
    effects: { label: 'gear:gear.lockpicks.effect' },
    marketType: 'war',
  },
]
