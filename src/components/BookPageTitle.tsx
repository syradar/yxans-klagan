import React, { ComponentPropsWithoutRef } from 'react'
import { Typography } from './Typography'

type BookPageTitleProps = ComponentPropsWithoutRef<'div'> & {
  subTitle?: React.ReactNode
}
export const BookPageTitle = ({ children, subTitle }: BookPageTitleProps) => {
  return (
    <div className="my-4">
      {subTitle ? <Typography variant="subTitle">{subTitle}</Typography> : null}
      <Typography variant="h2" parchment>
        {children}
      </Typography>
    </div>
  )
}
