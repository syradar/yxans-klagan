import React, { FC } from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { Day, getDayName, getDayNumber } from '../models/calendar.model'

interface CalendarFillerDaysProps {
  day: Day
}

const CalendarFillerDays: FC<CalendarFillerDaysProps> = ({
  day,
}: CalendarFillerDaysProps) => {
  return (
    <>
      {range(getDayNumber(day.name) - 1).map((i) => (
        <div
          tw="border p-2 flex items-center justify-center"
          key={`${day.monthName}-empty-day-${getDayName(i)}`}
        ></div>
      ))}
    </>
  )
}

export default CalendarFillerDays
