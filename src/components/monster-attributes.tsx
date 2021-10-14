import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { css } from 'twin.macro'
import { AttributeViewModel } from '../models/attributes.model'
import { AttributeCheckbox } from './attribute-cheeckbox'

interface MonsterAttributeProps {
  attribute: AttributeViewModel
}

export const MonsterAttribute = ({
  attribute: { label, values },
}: MonsterAttributeProps) => {
  const { t } = useTranslation('monsters')

  return (
    <div
      css={css`
        -webkit-backface-visibility: hidden;
      `}
    >
      <label tw="font-medium" htmlFor="monster-strength">
        {t(`Attributes.${label}`)}
      </label>
      <div id="monster-strength" tw="flex flex-wrap gap-1">
        {values.map((_, index) => (
          <AttributeCheckbox
            key={`${label}-${index}`}
            name="strength"
          ></AttributeCheckbox>
        ))}
      </div>
    </div>
  )
}
