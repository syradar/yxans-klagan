import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { z } from 'zod'
import { hexData } from '../../data/hex.data'
import { notNullish } from '../../functions/utils.functions'
import { Hex, HexData, HexKey, isHexKey } from '../../pages/places/map.model'
import { RootState } from '../../store/store'
import { createStateStorage } from '../../store/persist/state-storage'
import { Village } from '../../pages/village/village-generator'

// AÑADIMOS EL ALMACENAMIENTO DE DATOS DEL HEXÁGONO
export const hexSchema = z.object({
  hexKey: z.string().refine(isHexKey, {
    message: 'Hex key is not valid',
  }),
  explored: z.boolean(),
  villageData: z.any().optional(),
  castleData: z.any().optional(),
  dungeonData: z.any().optional(),
  encounterData: z.any().optional(), // <-- AÑADIDO PARA LOS ENCUENTROS
})

export const oldHexStorageSchema = z.object({
  hexes: z.array(hexSchema),
  fogOfWar: z.boolean(),
})

export type HexStorage = z.infer<typeof hexSchema> & {
  villageData?: Village
  castleData?: any
  dungeonData?: any
  encounterData?: any // <-- AÑADIDO PARA LOS ENCUENTROS
}
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

export const initialHexas = createInitialHexas(hexData)

const gameSourceSchema = z.union([
  z.literal('ravland'),
  z.literal('bitterReach'),
])

export type GameMap = {
  hasExploredHexes: boolean
  hexes: HexStorage[]
  selectedHex: HexKey | undefined
}

export type GameMapViewModel = {
  hasExploredHexes: boolean
  hexes: (Hex & { villageData?: Village; castleData?: any; dungeonData?: any; encounterData?: any })[]
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
    updateHex(state, action: PayloadAction<Hex & { villageData?: Village; castleData?: any; dungeonData?: any; encounterData?: any }>) {
      const { hexKey, explored, villageData, castleData, dungeonData, encounterData } = action.payload

      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      const updatedHexes = hasHex
        ? map.hexes.map((h) => {
            if (h.hexKey !== hexKey) {
              return h
            }

            return {
              ...h,
              explored: explored !== undefined ? explored : h.explored,
              villageData: villageData !== undefined ? villageData : (h as any).villageData,
              castleData: castleData !== undefined ? castleData : (h as any).castleData,
              dungeonData: dungeonData !== undefined ? dungeonData : (h as any).dungeonData,
              encounterData: encounterData !== undefined ? encounterData : (h as any).encounterData, // <-- AÑADIDO
            }
          })
        : [...state.maps[state.source].hexes, { hexKey, explored: explored || false, villageData, castleData, dungeonData, encounterData }]

      state.maps[state.source] = {
        hexes: updatedHexes,
        selectedHex: map.selectedHex,
        hasExploredHexes: updatedHexes.some((h) => h.explored),
      }
    },
    // Reducer específico para guardar la aldea
    saveVillageToHex(state, action: PayloadAction<{ hexKey: HexKey, village: Village }>) {
      const { hexKey, village } = action.payload
      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      if (hasHex) {
        map.hexes = map.hexes.map(h => 
          h.hexKey === hexKey ? { ...h, villageData: village } : h
        )
      } else {
        map.hexes.push({ hexKey, explored: true, villageData: village })
      }
    },
    // Reducer específico para guardar el castillo
    saveCastleToHex(state, action: PayloadAction<{ hexKey: HexKey, castle: any }>) {
      const { hexKey, castle } = action.payload
      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      if (hasHex) {
        map.hexes = map.hexes.map(h => 
          h.hexKey === hexKey ? { ...h, castleData: castle } : h
        )
      } else {
        map.hexes.push({ hexKey, explored: true, castleData: castle })
      }
    },
    // Reducer específico para guardar la mazmorra
    saveDungeonToHex(state, action: PayloadAction<{ hexKey: HexKey, dungeon: any }>) {
      const { hexKey, dungeon } = action.payload
      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      if (hasHex) {
        map.hexes = map.hexes.map(h => 
          h.hexKey === hexKey ? { ...h, dungeonData: dungeon } : h
        )
      } else {
        map.hexes.push({ hexKey, explored: true, dungeonData: dungeon })
      }
    },
    // Reducer específico para guardar el encuentro (¡NUEVO!)
    saveEncounterToHex(state, action: PayloadAction<{ hexKey: HexKey, encounter: any }>) {
      const { hexKey, encounter } = action.payload
      const map = state.maps[state.source]
      const hasHex = map.hexes.some((h) => h.hexKey === hexKey)

      if (hasHex) {
        map.hexes = map.hexes.map(h => 
          h.hexKey === hexKey ? { ...h, encounterData: encounter } : h
        )
      } else {
        map.hexes.push({ hexKey, explored: true, encounterData: encounter })
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
  saveVillageToHex,
  saveCastleToHex,
  saveDungeonToHex,
  saveEncounterToHex, // <-- AÑADIDO
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
          villageData: (userHex as any).villageData,
          castleData: (userHex as any).castleData,
          dungeonData: (userHex as any).dungeonData,
          encounterData: (userHex as any).encounterData, // <-- AÑADIDO
        }
      }

      return hex
    }),
  }
}

export const selectMapSerializable = (state: RootState): MapState => state.map

export default mapSlice.reducer
