import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { z } from 'zod'
import { hexData } from '../../data/hex.data'
import { notNullish } from '../../functions/utils.functions'
import { Hex, HexData, HexKey, isHexKey } from '../../pages/places/map.model'
import { RootState } from '../../store/store'
import { createStateStorage } from '../../store/persist/state-storage'

export const hexSchema = z.object({
  hexKey: z.string().refine(isHexKey, {
    message: 'Hex key is not valid',
  }),
  explored: z.boolean(),
})

export const oldHexStorageSchema = z.object({
  hexes: z.array(hexSchema),
  fogOfWar: z.boolean(),
})

export type HexStorage = z.infer<typeof hexSchema>
export type OldHexStorage = z.infer<typeof oldHexStorageSchema>

const createInitialHexas = (data: HexData): Hex[] => {
  return (Object.entries(data) as [HexKey, string][]).map(
    ([hexKey, points]) => ({
      hexKey,
      points,
      explored: false,
    }),
  )
}

/**
 * All the Hexes in the grid. This is the source of truth for the map points.
 */
export const initialHexas = createInitialHexas(hexData)

const gameSourceSchema = z.union([
  z.literal('ravland'),
  z.literal('bitterReach'),
])
// type GameSource = z.infer<typeof gameSourceSchema>
// const isGameSource = (value: string): value is GameSource =>
//   gameSourceSchema.safeParse(value).success

export type GameMap = {
  hasExploredHexes: boolean
  hexes: HexStorage[]
  selectedHex: HexKey | undefined
}

export type GameMapViewModel = {
  hasExploredHexes: boolean
  hexes: Hex[]
  selectedHex: Option<HexKey>
}

export const mapStateSchema = z.object({
  version: z.literal(2),
  source: gameSourceSchema,
  fogOfWar: z.boolean(),
  maps: z.object({
    ravland: z.object({
      hasExploredHexes: z.boolean(),
      hexes: z.array(hexSchema),
      selectedHex: z
        .string()
        .refine(isHexKey, 'HexKey is not valid')
        .optional(),
    }),
    bitterReach: z.object({
      hasExploredHexes: z.boolean(),
      hexes: z.array(hexSchema),
      selectedHex: z
        .string()
        .refine(isHexKey, 'HexKey is not valid')
        .optional(),
    }),
  }),
})
export type MapState = z.infer<typeof mapStateSchema>

const MAP_STATE_STORAGE_KEY = 'mapState'
export const localStorageMapState = createStateStorage<MapState>({
  key: MAP_STATE_STORAGE_KEY,
  label: 'MAP',
  schema: mapStateSchema,
})

// Define the initial state using that type
export const initialMapState: MapState = {
  version: 2,
  source: 'ravland',
  fogOfWar: false,
  maps: {
    ravland: {
      hasExploredHexes: false,
      hexes: [],
      selectedHex: undefined,
    },
    bitterReach: {
      hasExploredHexes: false,
      hexes: [],
      selectedHex: undefined,
    },
  },
}

const mapSlice = createSlice({
  name: 'map',
  initialState: localStorageMapState.load().unwrapOr(initialMapState),
  reducers: {
    setSource(state, action: PayloadAction<MapState['source']>) {
      state.source = action.payload
    },
    toggleFogOfWar(state) {
      state.fogOfWar = !state.fogOfWar
    },
    setSelectedHex(state, action: PayloadAction<HexKey>) {
      state.maps[state.source].selectedHex = action.payload
    },
    unsetSelectedHex(state) {
      state.maps[state.source].selectedHex = undefined
    },
    updateHex(state, action: PayloadAction<Hex>) {
      const { hexKey, explored } = action.payload

      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      const updatedHexes = hasHex
        ? map.hexes.map((h) => {
            if (h.hexKey !== hexKey) {
              return h
            }

            return {
              ...h,
              explored,
            }
          })
        : [...state.maps[state.source].hexes, { hexKey, explored }]

      state.maps[state.source] = {
        hexes: updatedHexes,
        selectedHex: map.selectedHex,
        hasExploredHexes: updatedHexes.some((h) => h.explored),
      }
    },
    handlePasteSuccess(_, action: PayloadAction<MapState>) {
      return action.payload
    },
  },
})

export const {
  setSource,

  toggleFogOfWar,
  updateHex,
  setSelectedHex,
  unsetSelectedHex,
  handlePasteSuccess,
} = mapSlice.actions

export const selectSource = (state: RootState) => state.map.source
export const selectFogOfWar = (state: RootState) => state.map.fogOfWar
export const selectMap = (state: RootState): GameMapViewModel => {
  const map = state.map.maps[state.map.source]

  return {
    hasExploredHexes: map.hasExploredHexes,
    selectedHex: notNullish(map.selectedHex) ? Some(map.selectedHex) : None,
    hexes: initialHexas.map((hex) => {
      const userHex = map.hexes.find((h) => h.hexKey === hex.hexKey)

      if (userHex) {
        return {
          ...hex,
          ...userHex,
        }
      }

      return hex
    }),
  }
}

export const selectMapSerializable = (state: RootState): MapState => state.map

export default mapSlice.reducer
