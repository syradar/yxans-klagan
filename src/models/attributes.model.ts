export type AttributeType = 'strength' | 'agility' | 'wits' | 'empathy'
export type AttributeTypeLabel = Capitalize<AttributeType>

export type Attributes = { [T in AttributeType]: number }

export const defaultAttributes: Readonly<Attributes> = {
  agility: 0,
  empathy: 0,
  strength: 0,
  wits: 0,
}

export type AttributeViewModel = {
  label: AttributeTypeLabel
  values: boolean[]
  value: number
}

export type AttributesViewModel = {
  [T in AttributeType]?: AttributeViewModel
}
