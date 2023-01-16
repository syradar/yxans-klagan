import { RawMaterial } from './resources'
import { Time } from './time'
import { Tool } from './tools'

export type StrongholdFunctionType =
  | 'bakery'
  | 'dovecote'
  | 'fireplace'
  | 'dungeon'
  | 'field'
  | 'forge'
  | 'gallows'
  | 'garden'
  | 'inn'
  | 'marketplace'
  | 'mill'
  | 'guardTower'
  | 'library'
  | 'mine'
  | 'moat'
  | 'ramparts'
  | 'scriptorium'
  | 'pigsty'
  | 'quarry'
  | 'stables'
  | 'shootingRange'
  | 'rootCellar'
  | 'pasture'
  | 'shrine'
  | 'portcullis'
  | 'sheepfold'
  | 'tailorShop'
  | 'vault'
  | 'trainingGrounds'
  | 'well'
  | 'tannery'

export type StrongholdFunctionTalent = 'builderTalent'

export type StrongholdFunctionRequirement =
  | StrongholdFunctionType
  | StrongholdFunctionTalent

export type StrongholdFunction = {
  type: StrongholdFunctionType
  label: string // TODO: Replace with TranslationKey
  description: string // TODO: Replace with TranslationKey
  requirements: StrongholdFunctionRequirement[]
  rawMaterials: RawMaterial[] // TODO: Enable A or B
  tools: Tool[]
  time: Time
  effect: string // TODO: Replace with Redux action
  limit?: number
}

export const bakeryFunction: StrongholdFunction = {
  type: 'bakery',
  label: 'Bakery',
  description: 'Bake bread',
  requirements: ['fireplace', 'builderTalent'],
  rawMaterials: [
    { type: 'stone', amount: 200 },
    { type: 'wood', amount: 40 },
  ],
  tools: ['sledgehammer', 'saw'],
  time: 'week',
  effect: 'Bake bread',
  limit: 1,
}

export const fireplaceFunction: StrongholdFunction = {
  type: 'fireplace',
  label: 'Fireplace',
  description: 'Warm up the stronghold',
  requirements: [],
  rawMaterials: [{ type: 'stone', amount: 20 }],
  tools: [],
  time: 'day',
  effect: 'Eliminate cold',
  limit: 1,
}

export const strongholdFunctions: StrongholdFunction[] = [
  bakeryFunction,
  fireplaceFunction,
]
