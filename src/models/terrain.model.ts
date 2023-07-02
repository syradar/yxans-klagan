import { TranslationKey } from '../store/translations/translation.model'

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
export type Terrain = (typeof terrain)[number]

export const terrainTranslationDict: Record<
  Terrain,
  TranslationKey<'common'>
> = {
  darkForest: 'common:terrain.dark_forest',
  forest: 'common:terrain.forest',
  hills: 'common:terrain.hills',
  lake: 'common:terrain.lake',
  mire: 'common:terrain.mire',
  mountain: 'common:terrain.mountain',
  plains: 'common:terrain.plains',
  ruinCity: 'common:terrain.ruin_city',
  swamp: 'common:terrain.swamp',
}

export const getTerrainKeys = (): Terrain[] => [...terrain]
