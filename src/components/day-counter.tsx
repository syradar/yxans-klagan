import { ComponentProps, FC } from 'react'
import { Grid } from './Stack'
import { DayQuarters } from '../features/calendar/calendar-slice'

type DayCounterProps = ComponentProps<'button'> & {
  quarters: DayQuarters | undefined
}

export const DayCounter: FC<DayCounterProps> = ({
  quarters,
  onClick,
}: DayCounterProps) => {
  if (!quarters) {
    quarters = [false, false, false, false]
  }

  return (
    <button
      className="group w-full"
      onClick={onClick}
      aria-label="Spend"
      type="button"
    >
      <Grid spacing="none" cols="4">
        <Quarter spent={quarters[0]} index={0}></Quarter>
        <Quarter spent={quarters[1]} index={1}></Quarter>
        <Quarter spent={quarters[2]} index={2}></Quarter>
        <Quarter spent={quarters[3]} index={3}></Quarter>
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
    className={`
  h-4 border border-gray-500 group-hover:border-red-500
  ${index === 0 ? 'border-r-0' : ''}
  ${index === 1 ? 'border-r-0' : ''}
  ${index === 2 ? 'border-r-0' : ''}
  ${spent ? 'bg-gray-300' : ''}
  `}
  ></div>
)
