import { Monster, MonsterViewModel } from '../models/monster.model'
import { createAttributesViewModel } from './attributes.functions'

export const createMonstersViewModel = (
  monsters: Monster[],
): MonsterViewModel[] => {
  return monsters.map((m) => {
    return {
      ...m,
      attributes: createAttributesViewModel(m.attributes),
    }
  })
}
