import React, { FC } from 'react'
import 'twin.macro'

interface PageHeaderProps {
  children?: React.ReactNode
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
}: PageHeaderProps) => {
  return (
    <h1 tw="text-center text-4xl lg:(text-6xl)" className="yx-heading">
      {children}
    </h1>
  )
}
