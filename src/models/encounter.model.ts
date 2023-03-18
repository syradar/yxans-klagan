import { ValidLanguage } from './language.model'
import { Terrain } from './terrain.model'

export type EncounterData = {
  [L in ValidLanguage]: { [key: number]: Encounter }
}

export interface Encounter {
  title: string
  page: number
}

export interface EncounterViewModel extends Encounter {
  id: number
  possibleTerrains: Terrain[]
  chosenTerrain: Terrain
}

export interface Encounters {
  41: number
  42: number
  43: number
  44: number
  45: number
  46: number
  51: number
  52: number
  53: number
  54: number
  55: number
  56: number
  61: number
  62: number
  63: number
  64: number
  65: number
  66: number
}

export type TerrainEncounterMap = { [T in Terrain]: Encounters }

const rollWithEncounters = [
  41, 42, 43, 44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66,
] as const

export type RollWithEncounters = (typeof rollWithEncounters)[number]

export const isRollsWithEncounters = (
  roll: number,
): roll is RollWithEncounters =>
  rollWithEncounters.includes(roll as RollWithEncounters)
