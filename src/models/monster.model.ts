import { Attributes, AttributesViewModel } from './attributes.model'

export interface Monster {
  name: string
  attributes: Attributes
  pageReference?: number
}

export interface MonsterViewModel {
  name: string
  attributes: AttributesViewModel
  pageReference?: number
}
