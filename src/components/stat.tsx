import React from 'react'
import 'twin.macro'

export interface StatProps {
  children: React.ReactNode
  label: string
}

export const Stat = ({ children, label }: StatProps) => (
  <div tw="text-center">
    <div tw="font-medium text-lg leading-none">{children}</div>
    <div tw="text-sm">{label}</div>
  </div>
)
