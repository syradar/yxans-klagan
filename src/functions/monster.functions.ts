import {
  AttributeTypeLabel,
  AttributeViewModel,
} from '../models/attributes.model'
import { Monster, MonsterViewModel } from '../models/monster.model'
import { range } from './array.functions'

export const createMonstersViewModel = (
  monsters: Monster[],
): MonsterViewModel[] => {
  return monsters.map((m) => {
    return {
      ...m,
      attributes: {
        strength: numToBooleans('Strength', m.attributes.strength),
        agility: numToBooleans('Agility', m.attributes.agility),
        wits: numToBooleans('Wits', m.attributes.wits),
        empathy: numToBooleans('Empathy', m.attributes.empathy),
      },
    }
  })
}

const numToBooleans = (
  label: AttributeTypeLabel,
  num?: number,
): AttributeViewModel | undefined => {
  if (!num) return undefined

  return {
    label,
    values: range(num).map((_) => false),
  }
}
