import { TranslationKey } from '../store/translations/translation.model'

export type AttributeType = 'strength' | 'agility' | 'wits' | 'empathy'
export const attributeTypeTranslationDict: Record<
  AttributeType,
  TranslationKey<'common'>
> = {
  agility: 'common:attributes.agility',
  empathy: 'common:attributes.empathy',
  strength: 'common:attributes.strength',
  wits: 'common:attributes.wits',
}

export type Attributes = { [T in AttributeType]: number }

export const defaultAttributes: Readonly<Attributes> = {
  agility: 0,
  empathy: 0,
  strength: 0,
  wits: 0,
}

export type AttributeViewModel = {
  label: AttributeType
  values: boolean[]
  value: number
}

export type AttributesViewModel = {
  [T in AttributeType]?: AttributeViewModel
}
