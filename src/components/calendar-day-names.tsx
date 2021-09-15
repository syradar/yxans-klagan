import React from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { getDayName } from '../models/calendar.model'

const CalendarDayNames = () => {
  return (
    <>
      {range(7).map((i) => (
        <div
          tw="border p-2 flex items-center justify-center font-bold bg-gray-200"
          key={getDayName(i)}
        >
          {getDayName(i)}
        </div>
      ))}
    </>
  )
}

export default CalendarDayNames
