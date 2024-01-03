import { EncounterViewModel } from '../models/encounter.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'
import {
  getEncounterById,
  getRandomEncounter,
  getTerrainsByEncounterId,
} from './encounter.functions'
import { describe, it, expect } from 'vitest'

describe('Encounter Functions', () => {
  describe('getTerrainsByEncounterId', () => {
    it.each([0, 1])('should all terrain keys if given %s', id => {
      const expected = [...getTerrainKeys()]

      const result = getTerrainsByEncounterId(id)

      expect(result).toEqual(expected)
    })

    it('should all terrain keys if given id 16', () => {
      const id = 16

      const expected: Terrain[] = ['plains', 'forest', 'swamp', 'mire']

      const result = getTerrainsByEncounterId(id)

      expect(result).toEqual(expected)
    })
  })

  describe('getEncounterById', () => {
    it('should all terrain keys if given %s', () => {
      const id = 16

      const expected: EncounterViewModel = {
        id,
        title: 'Ballongdvärgen',
        page: 149,
        possibleTerrains: ['plains', 'forest', 'swamp', 'mire'],
        chosenTerrain: 'plains',
      }

      const result = getEncounterById(id, 'sv', 'plains').unwrap()

      expect(result).toEqual(expected)
    })
  })

  describe('getRandomEncounter', () => {
    it.each([
      [0, -1],
      [0, 6],
      [16, 42],
    ])('should return encounter %s if roll is %s', (expected, roll) => {
      const option = getRandomEncounter(roll, 'plains', 'sv')

      expect(option.unwrap().id).toEqual(expected)
    })
  })
})
