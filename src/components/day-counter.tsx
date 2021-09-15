import React, { FC } from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

interface DayCounterProps {
  quarters: [boolean, boolean, boolean, boolean]
  spendQuarter: () => void
}

const DayCounter: FC<DayCounterProps> = ({
  quarters,
  spendQuarter,
}: DayCounterProps) => {
  return (
    <button
      tw="grid grid-cols-2 rounded-full hover:bg-gray-200"
      onClick={() => spendQuarter()}
    >
      <Quarter spent={quarters[3]} index={0}></Quarter>
      <Quarter spent={quarters[0]} index={1}></Quarter>
      <Quarter spent={quarters[2]} index={2}></Quarter>
      <Quarter spent={quarters[1]} index={3}></Quarter>
    </button>
  )
}

interface QuarterProps {
  spent: boolean
  index: number
}

const Quarter = styled.div(({ spent, index }: QuarterProps) => [
  tw`w-6 h-6 border border-gray-600`,
  index === 0 && tw`rounded-tl-full border-r-0 border-b-0`,
  index === 1 && tw`rounded-tr-full border-b-0`,
  index === 2 && tw`rounded-bl-full border-r-0`,
  index === 3 && tw`rounded-br-full`,
  spent && tw`bg-gray-400`,
])

export default DayCounter
