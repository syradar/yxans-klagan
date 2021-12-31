import React, { ReactNode, useState } from 'react'
import 'twin.macro'
import { MonthCollapseButton } from './month-collapse-button'

interface ListGroupProps {
  label: string
  open: boolean
  children: ReactNode
}

export const ListGroup = ({ children, label, open }: ListGroupProps) => {
  const [groupOpen, setGroupOpen] = useState(open)

  return (
    <section>
      <MonthCollapseButton
        small
        collapsed={!groupOpen}
        onMonthCollapseClick={() => setGroupOpen(!groupOpen)}
      >
        <h3 tw=" font-bold">{label}</h3>
      </MonthCollapseButton>
      {groupOpen && <div tw="mt-4 pl-6">{children}</div>}
    </section>
  )
}
