import { TranslationKey } from '../store/translations/translation.model'
export type RawMaterial = {
  material: Material
  value: MaterialAmount
}

export type Material =
  | 'animalHorn'
  | 'bread'
  | 'cloth'
  | 'feather'
  | 'glass'
  | 'herbs'
  | 'iron'
  | 'leather'
  | 'meat'
  | 'fish'
  | 'vegetables'
  | 'meatOrFishOrVegetables'
  | 'parchment'
  | 'pelt'
  | 'stone'
  | 'tallow'
  | 'wood'
  | 'woodOrLeather'

export const materialLabelDict: Readonly<
  Record<Material, TranslationKey<'common'>>
> = Object.freeze({
  animalHorn: 'common:material.animal_horn',
  bread: 'common:material.bread',
  cloth: 'common:material.cloth',
  feather: 'common:material.feather',
  glass: 'common:material.glass',
  herbs: 'common:material.herbs',
  iron: 'common:material.iron',
  leather: 'common:material.leather',
  meat: 'common:material.meat',
  fish: 'common:material.fish',
  vegetables: 'common:material.vegetables',
  meatOrFishOrVegetables: 'common:material.meat_or_fish_or_vegetables',
  parchment: 'common:material.parchment',
  pelt: 'common:material.pelt',
  stone: 'common:material.stone',
  tallow: 'common:material.tallow',
  wood: 'common:material.wood',
  woodOrLeather: 'common:material.wood_or_leather',
})

export type MaterialAmount = 0.1 | 0.25 | 0.5 | 1 | 2
