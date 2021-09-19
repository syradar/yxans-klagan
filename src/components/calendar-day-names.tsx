import React from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { getDayName } from '../models/calendar.model'

const CalendarDayNames = () => {
  return (
    <>
      {range(7).map((i) => (
        <div
          tw="uppercase px-2 py-1 border-b-2 border-b-black p-2 flex items-center justify-center font-bold"
          key={getDayName(i)}
        >
          {getDayName(i)}
        </div>
      ))}
    </>
  )
}

export default CalendarDayNames
