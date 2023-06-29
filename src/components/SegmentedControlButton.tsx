import { ComponentProps } from 'react'
import { AriaButtonProps } from 'react-aria'
import { ParchmentButton } from './ParchmentButton'

type SegmentedControlButtonProps = AriaButtonProps &
  ComponentProps<'button'> & {
    active?: boolean
  }

export const SegmentedControlButton = ({
  children,
  active,
}: SegmentedControlButtonProps) => {
  return (
    <ParchmentButton small buttonType={active ? 'ghost' : 'link'}>
      {children}
    </ParchmentButton>
  )
}
