import React, { ReactNode } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'

interface ListProps {
  children: ReactNode
}

export const List = ({ children }: ListProps) => {
  return (
    <div
      tw="max-h-96 lg:max-h-[initial] xl:max-h-[initial] 2xl:max-h-[initial] flex flex-col gap-4"
      css={css`
        overflow: overlay;
      `}
    >
      {children}
    </div>
  )
}
