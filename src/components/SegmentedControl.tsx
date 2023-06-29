import { ComponentPropsWithoutRef } from 'react'

type SegmentedControlProps = ComponentPropsWithoutRef<'div'> & {
  full?: boolean
}

export const SegmentedControl = ({ children, full }: SegmentedControlProps) => {
  return !children ? null : (
    <div
      className={`flex flex-row items-center gap-0
          ${full ? 'w-full' : 'min-w-fit'}
      `}
    >
      {children}
    </div>
  )
}
