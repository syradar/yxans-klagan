import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { css } from 'twin.macro'
import { chunkArray } from '../functions/array.functions'
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
      <div
        id={`monster-${label}-grid`}
        tw="grid grid-cols-2 gap-x-4 gap-y-1 max-w-[fit-content]"
      >
        {chunkArray(values).map((chunk, chunkIndex) => (
          <div tw="flex gap-1" key={`${label}-${chunkIndex}`}>
            {chunk.map((_, index) => (
              <AttributeCheckbox
                key={`${label}-${chunkIndex}-${index}`}
              ></AttributeCheckbox>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
