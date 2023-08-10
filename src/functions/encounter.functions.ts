import { None, Option, Some } from 'ts-results'
import { allEncounters, encounterTable } from '../data/encounter.data'
import { ValidLanguage } from '../hooks/useValidLanguage'
import {
  EncounterViewModel,
  isRollsWithEncounters,
} from '../models/encounter.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'

export const getTerrainsByEncounterId = (id: number): Terrain[] => {
  if (id === 0 || id === 1) {
    return [...getTerrainKeys()]
  }

  return Object.entries(encounterTable).reduce((acc, [terrain, encounters]) => {
    const hasEncounter = Object.values(encounters).some(e => e === id)

    if (hasEncounter) {
      acc.push(terrain as Terrain)
    }

    return acc
  }, [] as Terrain[])
}

const createEncounterViewModel = (
  id: number,
  lang: ValidLanguage,
  terrain: Terrain,
): Option<EncounterViewModel> => {
  const encounter = allEncounters[lang][id]

  if (!encounter) {
    return None
  }

  return Some({
    id,
    ...encounter,
    possibleTerrains: getTerrainsByEncounterId(id),
    chosenTerrain: terrain,
  })
}

export const getEncounterById = (
  id: number,
  lang: ValidLanguage,
  terrain: Terrain,
): EncounterViewModel => {
  return createEncounterViewModel(id, lang, terrain)
}

export const getRandomEncounter = (
  roll: number,
  terrain: Terrain,
  lang: ValidLanguage,
): EncounterViewModel => {
  if (!isRollsWithEncounters(roll)) {
    return createEncounterViewModel(0, lang, terrain)
  }

  const randomEncounterId = encounterTable[terrain][roll]

  const encounterExists = Object.keys(allEncounters[lang]).includes(
    randomEncounterId.toString(),
  )

  if (!encounterExists) {
    return createEncounterViewModel(0, lang, terrain)
  }

  return createEncounterViewModel(randomEncounterId, lang, terrain)
}
