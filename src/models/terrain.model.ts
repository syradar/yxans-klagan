const terrain = [
  'plains',
  'forest',
  'darkForest',
  'hills',
  'mountain',
  'lake',
  'swamp',
  'mire',
  'ruinCity',
] as const
export type Terrain = typeof terrain[number]

export type TerrainNameMap = { [T in Terrain]: string }

export const getTerrainKeys = (): Terrain[] => [...terrain]

export const terrainNameMap: TerrainNameMap = {
  plains: 'Slätt',
  forest: 'Skog',
  darkForest: 'Mörk skog',
  hills: 'Kullar',
  mountain: 'Berg',
  lake: 'Sjö',
  swamp: 'Träsk',
  mire: 'Myr',
  ruinCity: 'Ruinstad',
}
