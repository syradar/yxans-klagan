import React, { useState } from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'
import { range } from '../functions/array.functions'

const DayCounter = () => {
  const [quarters, setQuarters] = useState([false, false, false, false])

  const spendQuarter = () => {
    const spent = (quarters.filter((q) => q).length + 1) % 5
    const qs = [
      ...range(spent).map((_) => true),
      ...range(4 - spent).map((_) => false),
    ]

    setQuarters(qs)
  }

  return (
    <button tw="grid grid-cols-2" onClick={() => spendQuarter()}>
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
  tw`w-6 h-6 border border-gray-400`,
  index === 0 && tw`rounded-tl-full border-r-0 border-b-0`,
  index === 1 && tw`rounded-tr-full border-b-0`,
  index === 2 && tw`rounded-bl-full border-r-0`,
  index === 3 && tw`rounded-br-full`,
  spent && tw`bg-gray-200`,
])

export default DayCounter
