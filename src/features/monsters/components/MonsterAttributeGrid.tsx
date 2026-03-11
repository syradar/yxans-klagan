import { notNullish, withId } from '../../../functions/utils.functions'
import {
  AttributesViewModel,
  attributeTypeTranslationDict,
} from '../../../models/attributes.model'
import { useAppSelector } from '../../../store/store.hooks'
import { selectTranslateFunction } from '../../../store/translations/translation.slice'
import { MonsterAttribute } from './MonsterAttribute'

type MonsterAttributeGridProps = {
  attributes: AttributesViewModel
}
export const MonsterAttributeGrid = ({
  attributes,
}: MonsterAttributeGridProps) => {
  const t = useAppSelector(selectTranslateFunction(['monsters', 'common']))

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(attributes)
        .filter(([_, v]) => notNullish(v))
        .map(([key, value]) => (
          <MonsterAttribute
            key={key}
            values={value.values.map(withId)}
            label={t(attributeTypeTranslationDict[value.label])}
          />
        ))}
    </div>
  )
}
