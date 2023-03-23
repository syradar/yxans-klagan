import { useTranslation } from 'react-i18next'
import { keyExists } from '../../functions/translation.functions'
import { withId } from '../../functions/utils.functions'

type NameListProps = {
  names: string[][]
}

export const NameList = ({ names }: NameListProps) => {
  const { t } = useTranslation(['names'])

  const tOrString = (key: string) => {
    if (keyExists('names', key)) {
      return t(key)
    }

    return key
  }

  return (
    <>
      {names.length > 0 && (
        <ul data-testid="namelist">
          {names.map(withId).map((name) => (
            <li key={name.id}>
              {name.value.map((n) => tOrString(n)).join(' ')}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
