import { Terrain, terrainNameMap } from '../models/terrain.model'

export const getTerrainName = (terrain: Terrain): string => {
  return terrainNameMap[terrain]
}
