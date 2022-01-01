import React, { ReactNode } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'
import { Pancake } from './stack'

interface ListProps {
  children: ReactNode
}

export const List = ({ children }: ListProps) => {
  return (
    <div
      tw="max-h-96 lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial]"
      css={css`
        overflow: overlay;
      `}
    >
      <Pancake>{children}</Pancake>
    </div>
  )
}
