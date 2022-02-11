import React from 'react'
import 'twin.macro'
import tw, { TwStyle } from 'twin.macro'

type StatValueSize = 'small' | 'medium' | 'large'

export interface StatProps {
  children: React.ReactNode
  label: string
  size?: StatValueSize
}

const statValueStyle: { [S in StatValueSize]: TwStyle } = {
  small: tw`text-base`,
  medium: tw`text-lg`,
  large: tw`text-2xl`,
}

export const Stat = ({ children, label, size = 'medium' }: StatProps) => (
  <div tw="text-center">
    <div tw="font-medium leading-none" css={[statValueStyle[size]]}>
      {children}
    </div>
    <div tw="text-sm">{label}</div>
  </div>
)
