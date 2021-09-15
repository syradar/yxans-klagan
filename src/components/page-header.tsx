import React, { FC } from 'react'
import 'twin.macro'

interface PageHeaderProps {
  children?: React.ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children }: PageHeaderProps) => {
  return (
    <h1 tw="text-center text-6xl" className="yx-heading">
      {children}
    </h1>
  )
}

export default PageHeader
