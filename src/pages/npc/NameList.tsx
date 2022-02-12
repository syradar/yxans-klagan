import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'

interface NameListProps {
  names: string[][]
}

export const NameList = ({ names }: NameListProps) => {
  const { t } = useTranslation(['names'])

  return (
    <>
      {names.length > 0 && (
        <ul data-testid="namelist">
          {names.map((name, i) => (
            <li key={i}>{name.map((n) => t(n, { ns: 'names' })).join(' ')}</li>
          ))}
        </ul>
      )}
    </>
  )
}
