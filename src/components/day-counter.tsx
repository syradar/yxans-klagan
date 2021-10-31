import React, { FC } from 'react'
import tw, { styled } from 'twin.macro'

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
      tw="w-full grid grid-cols-4 gap-0 hover:bg-red-500"
      onClick={() => spendQuarter()}
    >
      <Quarter spent={quarters[0]} index={0}></Quarter>
      <Quarter spent={quarters[1]} index={1}></Quarter>
      <Quarter spent={quarters[2]} index={2}></Quarter>
      <Quarter spent={quarters[3]} index={3}></Quarter>
    </button>
  )
}

interface QuarterProps {
  spent: boolean
  index: number
}

const Quarter = styled.div(({ spent, index }: QuarterProps) => [
  tw`h-4 border border-gray-500`,
  index === 0 && tw`border-r-0`,
  index === 1 && tw`border-r-0`,
  index === 2 && tw`border-r-0`,
  index === 3 && tw``,
  spent && tw`bg-gray-300`,
])
