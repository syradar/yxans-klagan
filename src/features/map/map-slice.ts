import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { None, Ok, Option, Some } from 'ts-results'
import { z } from 'zod'
import { hexData } from '../../data/hex.data'
import { notNullish } from '../../functions/utils.functions'
import { Hex, HexData, HexKey, isHexKey } from '../../pages/places/map.model'
import { createStateStorageWithSerializer } from '../../store/persist/state-storage'
import { RootState } from '../../store/store'

export const hexSchema = z.object({
  hexKey: z.string().refine(isHexKey, {
    message: 'Hex key is not valid',
  }),
  /**
   * @deprecated
   */
  explored: z
    .boolean()
    .transform((_) => undefined)
    .optional(),
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

export const gameSourceSchema = z.union([
  z.literal('ravland'),
  z.literal('bitterReach'),
])
export type GameSource = z.infer<typeof gameSourceSchema>
export const isGameSource = (value: string): value is GameSource =>
  gameSourceSchema.safeParse(value).success

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
      /**
       * @deprecated
       */
      hasExploredHexes: z
        .boolean()
        .transform((_) => undefined)
        .optional(),
      hexes: z.array(hexSchema),
      selectedHex: z
        .string()
        .refine(isHexKey, 'HexKey is not valid')
        .optional(),
    }),
    bitterReach: z.object({
      /**
       * @deprecated
       */
      hasExploredHexes: z
        .boolean()
        .transform((_) => undefined)
        .optional(),
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
export const localStorageMapState = createStateStorageWithSerializer<
  MapState,
  MapState
>({
  key: MAP_STATE_STORAGE_KEY,
  label: 'MAP',
  schema: mapStateSchema,
  schemaOutput: mapStateSchema,
  serializer: (state) => Ok(state),
  deserializer: (state) => Ok(state),
})

// Define the initial state using that type
export const initialMapState: MapState = {
  version: 2,
  source: 'ravland',
  fogOfWar: false,
  maps: {
    ravland: {
      hexes: [],
      selectedHex: undefined,
    },
    bitterReach: {
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
    handlePasteSuccess(_, action: PayloadAction<MapState>) {
      return action.payload
    },
  },
})

export const {
  setSource,

  toggleFogOfWar,
  setSelectedHex,
  unsetSelectedHex,
  handlePasteSuccess,
} = mapSlice.actions

const selectMapState = (state: RootState) => state.map
export const selectSource = createSelector(
  selectMapState,
  (state) => state.source,
)
export const selectFogOfWar = createSelector(
  selectMapState,
  (state) => state.fogOfWar,
)

export const selectMap = createSelector(selectMapState, (mapState) => {
  const map = mapState.maps[mapState.source]

  return {
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
})

export const selectMapSerializable = (state: RootState): MapState => state.map

export const selectHex = (hexKey: HexKey) =>
  createSelector(selectMap, (map): Option<Hex> => {
    const hex = map.hexes.find((hex) => hex.hexKey === hexKey)

    if (!hex) {
      return None
    }

    return Some(hex)
  })

export default mapSlice.reducer
