import { TFunction } from 'react-i18next'
import { Monster, MonsterViewModel } from '../models/monster.model'
import { createAttributesViewModel } from './attributes.functions'

export const createMonstersViewModel = (
  monster: Monster,
): MonsterViewModel => ({
  ...monster,
  attributes: createAttributesViewModel(monster.attributes),
})

export const monsterComparer =
  (t: TFunction<'monsters' | 'common'>) =>
  (a: MonsterViewModel, b: MonsterViewModel): number => {
    const ma = t(`Monster.${a.name}`, { ns: 'common' })
    const mb = t(`Monster.${b.name}`, { ns: 'common' })

    if (ma < mb) {
      return -1
    }
    if (ma > mb) {
      return 1
    }

    return 0
  }
