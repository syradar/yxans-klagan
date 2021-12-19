export type AttributeType = 'strength' | 'agility' | 'wits' | 'empathy'
export type AttributeTypeLabel = Capitalize<AttributeType>

export type Attributes = { [T in AttributeType]?: number }

export type AttributeViewModel = {
  label: AttributeTypeLabel
  values: boolean[]
}

export type AttributesViewModel = {
  [T in AttributeType]?: AttributeViewModel
}
