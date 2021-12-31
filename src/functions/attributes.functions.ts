import {
  Attributes,
  AttributesViewModel,
  AttributeTypeLabel,
  AttributeViewModel,
} from '../models/attributes.model'
import { numberToBooleans, validNumber } from './utils.functions'

export const createAttributesViewModel = (
  a: Attributes,
): AttributesViewModel => {
  return {
    strength: createAttributeViewModel('Strength', a.strength),
    agility: createAttributeViewModel('Agility', a.agility),
    wits: createAttributeViewModel('Wits', a.wits),
    empathy: createAttributeViewModel('Empathy', a.empathy),
  }
}

export const createAttributeViewModel = (
  label: AttributeTypeLabel,
  num?: number,
): AttributeViewModel | undefined => {
  if (!validNumber(num) || num === 0) return undefined

  return {
    label,
    values: numberToBooleans(num),
  }
}
