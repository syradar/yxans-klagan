import { EncounterViewModel } from '../models/encounter.model'
import { getTerrainKeys, Terrain } from '../models/terrain.model'
import {
  getEncounterById,
  getTerrainsByEncounterId,
} from './encounter.functions'

describe('Encounter Functions', () => {
  describe('getTerrainsByEncounterId', () => {
    it.each([0, 1])('should all terrain keys if given %s', (id) => {
      const expected = [...getTerrainKeys()]

      const result = getTerrainsByEncounterId(id)

      expect(result).toEqual(expected)
    })

    it('should all terrain keys if given %s', () => {
      const id = 16

      const expected: Terrain[] = ['Plains', 'Forest', 'Swamp', 'Mire']

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
        terrains: ['Plains', 'Forest', 'Swamp', 'Mire'],
      }

      const result = getEncounterById(id, 'sv')

      expect(result).toEqual(expected)
    })
  })
})
