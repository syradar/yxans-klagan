import React from 'react'
import { css } from 'twin.macro'
import { chunkArray } from '../functions/array.functions'
import { AttributeCheckbox } from './attribute-cheeckbox'

interface MonsterAttributeProps {
  label: string
  values: boolean[]
}

export const MonsterAttribute = ({ label, values }: MonsterAttributeProps) => {
  return (
    <div
      css={css`
        -webkit-backface-visibility: hidden;
      `}
    >
      <label tw="font-medium mb-1 block" htmlFor="monster-strength">
        {label}: {values.length}
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
