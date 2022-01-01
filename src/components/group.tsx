import React, { ReactNode, useState } from 'react'

import tw from 'twin.macro'
import { MonthCollapseButton } from './month-collapse-button'

interface GroupProps {
  children: ReactNode
  label: ReactNode
  open?: boolean
  useDefaultLabel?: boolean
  spaceBeforeItems?: boolean
  indent?: boolean
  onCollapse?: () => void
}

export const Group = ({
  children,
  label,
  onCollapse,
  open = false,
  useDefaultLabel = true,
  spaceBeforeItems = true,
  indent = true,
}: GroupProps) => {
  const [groupOpen, setGroupOpen] = useState(open)

  const collapseHandler = () => {
    setGroupOpen(!groupOpen)
    if (onCollapse) {
      onCollapse()
    }
  }

  return (
    <section tw="w-full">
      <MonthCollapseButton
        small
        collapsed={!groupOpen}
        onMonthCollapseClick={collapseHandler}
      >
        {useDefaultLabel ? <h3 tw="font-bold">{label}</h3> : <>{label}</>}
      </MonthCollapseButton>
      {groupOpen && (
        <div css={[spaceBeforeItems && tw`mt-4`, indent && tw`pl-6`]}>
          {children}
        </div>
      )}
    </section>
  )
}
