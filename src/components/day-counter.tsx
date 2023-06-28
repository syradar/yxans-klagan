import { useRef } from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import { DayQuarters } from '../features/calendar/calendar-slice'
import { Grid } from './Stack'
import { Option } from 'ts-results'

type DayCounterProps = AriaButtonProps & {
  quarters: Option<DayQuarters>
}

export const DayCounter = (props: DayCounterProps) => {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { quarters } = props

  const quartersToRender = quarters.unwrapOr([
    false,
    false,
    false,
    false,
  ] as const)

  return (
    <button
      ref={ref}
      {...buttonProps}
      className="group w-full rounded-lg p-1 transition-colors hover:bg-neutral-100 focus:outline-none
       focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      aria-label="Spend"
      type="button"
    >
      <Grid spacing="none" cols="4">
        <Quarter spent={quartersToRender[0]} index={0}></Quarter>
        <Quarter spent={quartersToRender[1]} index={1}></Quarter>
        <Quarter spent={quartersToRender[2]} index={2}></Quarter>
        <Quarter spent={quartersToRender[3]} index={3}></Quarter>
      </Grid>
    </button>
  )
}

type QuarterProps = {
  spent: boolean
  index: number
}
const Quarter = ({ spent, index }: QuarterProps) => (
  <div
    className={`h-4
   border border-neutral-300
  ${index === 0 ? 'rounded-l border-r-0' : ''}
  ${index === 1 ? 'border-r-0' : ''}
  ${index === 2 ? 'border-r-0' : ''}
  ${index === 3 ? 'rounded-r' : ''}
  ${spent ? 'bg-green-500' : ''}
  `}
  ></div>
)
