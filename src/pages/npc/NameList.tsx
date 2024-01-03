import { withId } from '../../functions/utils'
import { useAppSelector } from '../../store/store.hooks'
import { TranslationKey } from '../../store/translations/translation.model'
import { selectTranslateFunction } from '../../store/translations/translation.slice'

type NameListProps = {
  names: string[][]
}

export const NameList = ({ names }: NameListProps) => {
  const t = useAppSelector(selectTranslateFunction(['names']))

  return (
    <>
      {names.length > 0 && (
        <ul data-testid="namelist">
          {names.map(withId).map(name => (
            <li key={name.id}>
              {name.value.map(n => t(n as TranslationKey<'names'>)).join(' ')}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
