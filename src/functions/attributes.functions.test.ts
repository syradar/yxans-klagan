import {
  Attributes,
  AttributesViewModel,
  AttributeViewModel,
} from '../models/attributes.model'
import {
  createAttributesViewModel,
  createAttributeViewModel,
} from './attributes.functions'

describe('createAttributeViewModel', () => {
  const cases: [number | undefined, AttributeViewModel | undefined][] = [
    [undefined, undefined],
    [0, undefined],
    [1, { label: 'Strength', value: 1, values: [false] }],
    [2, { label: 'Strength', value: 2, values: [false, false] }],
    [NaN, undefined],
    [Infinity, undefined],
  ]
  it.each(cases)('%i => %b', (input, expected) => {
    const result = createAttributeViewModel('Strength', input)
    expect(result).toEqual(expected)
  })
})

describe('createAttributesViewModel', () => {
  const cases: [Attributes, AttributesViewModel][] = [
    [
      {
        strength: 0,
        agility: 0,
        wits: 0,
        empathy: 0,
      },
      {
        strength: undefined,
        agility: undefined,
        wits: undefined,
        empathy: undefined,
      },
    ],
    [
      {
        strength: 1,
        agility: 2,
        wits: 3,
        empathy: 4,
      },
      {
        strength: { label: 'Strength', value: 1, values: [false] },
        agility: { label: 'Agility', value: 2, values: [false, false] },
        wits: { label: 'Wits', value: 3, values: [false, false, false] },
        empathy: {
          label: 'Empathy',
          value: 4,
          values: [false, false, false, false],
        },
      },
    ],
  ]
  it.each(cases)('%i => %b', (input, expected) => {
    const result = createAttributesViewModel(input)
    expect(result).toEqual(expected)
  })
})
