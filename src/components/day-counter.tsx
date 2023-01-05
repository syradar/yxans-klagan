import { FC } from 'react'
import { Grid } from './Stack'

interface DayCounterProps {
  quarters: [boolean, boolean, boolean, boolean]
  spendQuarter: () => void
}

export const DayCounter: FC<DayCounterProps> = ({
  quarters,
  spendQuarter,
}: DayCounterProps) => {
  return (
    <button
      className="group w-full"
      onClick={() => spendQuarter()}
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
  ${index === 3 ? '' : ''}
  ${spent ? 'bg-gray-300' : ''}
  `}
  ></div>
)
