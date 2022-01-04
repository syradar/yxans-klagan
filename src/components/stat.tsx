import React from 'react'
import 'twin.macro'
import tw from 'twin.macro'

export interface StatProps {
  children: React.ReactNode
  label: string
  large?: boolean
}

export const Stat = ({ children, label, large = false }: StatProps) => (
  <div tw="text-center">
    <div
      tw="font-medium leading-none"
      css={[large && tw`text-2xl`, !large && tw`text-lg`]}
    >
      {children}
    </div>
    <div tw="text-sm">{label}</div>
  </div>
)
