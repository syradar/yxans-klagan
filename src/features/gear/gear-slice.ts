import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import {
  Gear,
  GearCategory,
  GearId,
  GearViewModel,
  gear,
  gearViewModel,
  maxPricePredicate,
} from './gear.data'
import { Supply } from '../../models/supply'
import { rollD6 } from '../../functions/dice.functions'
import { TFunction } from '../../store/translations/translation.model'
import { Talent, talents, isTalent } from '../../models/talent.model'

const rollSupply = (s: Supply): number => {
  if (s === 'rare') {
    return rollD6() === 6 ? 1 : 0
  }

  if (s === 'uncommon') {
    return rollD6() >= 4 ? rollD6() : 0
  }

  return Infinity
}

const generateSupply = (gear: Gear[]) => {
  return gear.reduce((acc, cur) => {
    if (cur.supply === 'common') {
      return acc
    }

    acc[cur.name.id] = rollSupply(cur.supply)

    return acc
  }, {} as Record<GearId, number>)
}

type CategoryFilter = Readonly<Record<GearCategory, boolean>>

interface GearState {
  gear: Gear[]
  filters: {
    search: string
    maxPrice: number
    talents: Record<Talent, boolean>
    categories: CategoryFilter
  }
  supply: Record<GearId, number>
}

// Define the initial state using that type
export const initialGearState: GearState = {
  gear,
  filters: {
    search: '',
    maxPrice: 0,
    talents: {
      ...talents.reduce(
        (acc, talent) => ({ ...acc, [talent]: false }),
        {} as Record<Talent, boolean>,
      ),
    },
    categories: {
      services: false,
      tradeGoods: false,
    },
  },
  supply: generateSupply(gear),
}

const gearSlice = createSlice({
  name: 'gear',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialGearState,
  reducers: {
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.filters.maxPrice = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload
    },
    toggleTalent: (state, { payload }: PayloadAction<string>) => {
      if (!isTalent(payload)) {
        return
      }

      state.filters.talents[payload] = !state.filters.talents[payload]
    },
    reRollSupply: (state) => {
      state.supply = generateSupply(state.gear)
    },
    toggleCategory: (state, { payload }: PayloadAction<GearCategory>) => {
      state.filters.categories[payload] = !state.filters.categories[payload]
    },
  },
})

export const {
  setMaxPrice,
  setSearch,
  toggleTalent,
  reRollSupply,
  toggleCategory,
} = gearSlice.actions

const buildSearchFilter = (search: string) => (translatedName: string) =>
  search.length > 0
    ? translatedName.toLowerCase().includes(search.toLowerCase())
    : true

const buildPriceFilter = (maxPrice: number) => (item: Gear) =>
  maxPrice > 0 ? maxPricePredicate(maxPrice)(item.price) : true

const isAnyTalentsActive = (talents: Record<Talent, boolean>) =>
  Object.values(talents).some((active) => active)

const buildTalentFilter = (talents: Record<Talent, boolean>) => (item: Gear) =>
  isAnyTalentsActive(talents)
    ? (Object.entries(talents) as [Talent, boolean][]).some(
        ([talent, active]) =>
          active && item.talents.length > 0
            ? item.talents.includes(talent)
            : false,
      )
    : true

const buildCategoryFilter = (categories: CategoryFilter) => (item: Gear) =>
  Object.values(categories).some((active) => active)
    ? (Object.entries(categories) as [GearCategory, boolean][]).some(
        ([category, active]) => active && item.category === category,
      )
    : true

type GearCategoryViewModel = {
  category: GearCategory
  active: boolean
}

const categorySortOrder: GearCategory[] = ['tradeGoods', 'services']
type Comparator<T> = (a: T, b: T) => number

const gearSort: Comparator<GearCategoryViewModel> = (a, b) => {
  const aIndex = categorySortOrder.indexOf(a.category)
  const bIndex = categorySortOrder.indexOf(b.category)

  if (aIndex === bIndex) {
    return 0
  }

  return aIndex > bIndex ? 1 : -1
}

export const selectGear = (t: TFunction<'gear'>) => (state: RootState) => {
  const { gear, supply, filters } = state.gear
  const { search, maxPrice, talents, categories } = filters

  const searchFilter = buildSearchFilter(search)
  const priceFilter = buildPriceFilter(maxPrice)
  const talentFilter = buildTalentFilter(talents)
  const categoryFilter = buildCategoryFilter(categories)

  return {
    search,
    maxPrice,
    talents,
    categories: (Object.entries(categories) as [GearCategory, boolean][])
      .map(([category, active]) => ({
        category,
        active,
      }))
      .sort(gearSort),
    items: gear.reduce((acc, cur) => {
      if (!categoryFilter(cur)) {
        return acc
      }

      if (!priceFilter(cur)) {
        return acc
      }

      if (!talentFilter(cur)) {
        return acc
      }

      const translatedName = t(cur.name.label)

      if (!searchFilter(translatedName)) {
        return acc
      }

      return [...acc, gearViewModel(cur, translatedName, supply[cur.name.id])]
    }, [] as GearViewModel[]),
  }
}

export default gearSlice.reducer
