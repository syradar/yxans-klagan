import { allEncounters, encounterTable } from '../data/encounter.data'
import {
  EncounterViewModel,
  isRollsWithEncounters,
} from '../models/encounter.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'
import { getRandomT66 } from './dice.functions'

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

const createEncounterViewModel = (id: number): EncounterViewModel => ({
  id,
  ...allEncounters[id],
  terrains: getTerrainsByEncounterId(id),
})

export const getRandomEncounter = (terrain: Terrain): EncounterViewModel => {
  const roll = getRandomT66()

  if (!isRollsWithEncounters(roll)) {
    return createEncounterViewModel(0)
  }

  const randomEncounterId = encounterTable[terrain][roll]

  const encounterExists = Object.keys(allEncounters).includes(
    randomEncounterId.toString(),
  )

  if (!encounterExists) {
    return createEncounterViewModel(0)
  }

  return createEncounterViewModel(randomEncounterId)
}
