import { TFunction } from '../../store/translations/translation.model'
import { createAttributesViewModel } from '../../functions/attributes.functions'
import { Monster, MonsterViewModel } from './monster.model'

export const createMonstersViewModel = (
  monster: Monster,
): MonsterViewModel => ({
  ...monster,
  attributes: createAttributesViewModel(monster.attributes),
})

export const monsterComparer =
  (t: TFunction<'common'>) =>
  (a: MonsterViewModel, b: MonsterViewModel): number => {
    const ma = t(a.name)
    const mb = t(b.name)

    if (ma < mb) {
      return -1
    }
    if (ma > mb) {
      return 1
    }

    return 0
  }
