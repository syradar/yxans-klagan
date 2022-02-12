import React, { FC } from 'react'
import tw, { styled } from 'twin.macro'
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
      className="group"
      tw="w-full "
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

interface QuarterProps {
  spent: boolean
  index: number
}

const Quarter = styled.div(({ spent, index }: QuarterProps) => [
  tw`h-4 border border-gray-500 group-hover:border-red-500`,
  index === 0 && tw`border-r-0`,
  index === 1 && tw`border-r-0`,
  index === 2 && tw`border-r-0`,
  index === 3 && tw``,
  spent && tw`bg-gray-300`,
])
