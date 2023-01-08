import { useTranslation } from 'react-i18next'

type NameListProps = {
  names: string[][]
}

export const NameList = ({ names }: NameListProps) => {
  const { t } = useTranslation(['names'])

  return (
    <>
      {names.length > 0 && (
        <ul data-testid="namelist">
          {names.map((name, i) => (
            <li key={i}>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name.map((n) => t(`names:${n}` as any)).join(' ')
              }
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
