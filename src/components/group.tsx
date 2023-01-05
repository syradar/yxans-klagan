import { ReactNode, useState } from 'react'

import { MonthCollapseButton } from './month-collapse-button'

type GroupProps = {
  children: ReactNode
  label: ReactNode
  open?: boolean
  useDefaultLabel?: boolean
  spaceBeforeItems?: boolean
  indent?: boolean
  onCollapse?: () => void
  marginBottom?: boolean
}

export const Group = ({
  children,
  label,
  onCollapse,
  open = false,
  useDefaultLabel = true,
  spaceBeforeItems = true,
  indent = true,
  marginBottom = false,
}: GroupProps) => {
  const [groupOpen, setGroupOpen] = useState(open)

  const collapseHandler = () => {
    setGroupOpen(!groupOpen)
    if (onCollapse) {
      onCollapse()
    }
  }

  return (
    <section className={`w-full ${marginBottom ? 'mb-8' : ''}`}>
      <MonthCollapseButton
        small
        collapsed={!groupOpen}
        onMonthCollapseClick={collapseHandler}
      >
        {useDefaultLabel ? (
          <h3 className="font-bold">{label}</h3>
        ) : (
          <>{label}</>
        )}
      </MonthCollapseButton>
      {groupOpen && (
        <div
          className={`
        ${spaceBeforeItems ? 'mt-4' : ''}
        ${indent ? 'pl-6' : ''}
        `}
        >
          {children}
        </div>
      )}
    </section>
  )
}
