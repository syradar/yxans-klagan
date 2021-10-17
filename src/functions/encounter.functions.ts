import { allEncounters, encounterTable } from '../data/encounter.data'
import {
  EncounterViewModel,
  isRollsWithEncounters,
} from '../models/encounter.model'
import { ValidLanguage } from '../models/language.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'

export const getTerrainsByEncounterId = (id: number): Terrain[] => {
  if (id === 0 || id === 1) {
    return [...getTerrainKeys()]
  }

  return Object.entries(encounterTable).reduce((acc, [terrain, encounters]) => {
    const hasEncounter = Object.values(encounters).some((e) => e === id)

    if (hasEncounter) {
      acc.push(terrain as Terrain)
    }

    return acc
  }, [] as Terrain[])
}

const createEncounterViewModel = (
  id: number,
  lang: ValidLanguage,
): EncounterViewModel => ({
  id,
  ...allEncounters[lang][id],
  terrains: getTerrainsByEncounterId(id),
})

export const getEncounterById = (
  id: number,
  lang: ValidLanguage,
): EncounterViewModel => {
  return createEncounterViewModel(id, lang)
}

export const getRandomEncounter = (
  roll: number,
  terrain: Terrain,
  lang: ValidLanguage,
): EncounterViewModel => {
  if (!isRollsWithEncounters(roll)) {
    return createEncounterViewModel(0, lang)
  }

  const randomEncounterId = encounterTable[terrain][roll]

  const encounterExists = Object.keys(allEncounters[lang]).includes(
    randomEncounterId.toString(),
  )

  if (!encounterExists) {
    return createEncounterViewModel(0, lang)
  }

  return createEncounterViewModel(randomEncounterId, lang)
}
