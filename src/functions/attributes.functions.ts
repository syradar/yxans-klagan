import {
  Attributes,
  AttributesViewModel,
  AttributeType,
  AttributeViewModel,
} from '../models/attributes.model'
import { numberToBooleans, validNumber } from './utils.functions'

export const createAttributesViewModel = (
  a: Attributes,
): AttributesViewModel => {
  return {
    strength: createAttributeViewModel('strength', a.strength),
    agility: createAttributeViewModel('agility', a.agility),
    wits: createAttributeViewModel('wits', a.wits),
    empathy: createAttributeViewModel('empathy', a.empathy),
  }
}

export const createAttributeViewModel = (
  label: AttributeType,
  num?: number,
): AttributeViewModel | undefined => {
  if (!validNumber(num) || num === 0) return undefined

  return {
    label,
    value: num,
    values: numberToBooleans(num),
  }
}
