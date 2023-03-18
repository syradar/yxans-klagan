const terrain = [
  'Plains',
  'Forest',
  'DarkForest',
  'Hills',
  'Mountain',
  'Lake',
  'Swamp',
  'Mire',
  'RuinCity',
] as const
export type Terrain = (typeof terrain)[number]

export type TerrainNameMap = { [T in Terrain]: string }

export const getTerrainKeys = (): Terrain[] => [...terrain]
