import React, { FC } from 'react'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { Day, getDayName, getDayNumber } from '../models/calendar.model'

interface CalendarFillerDaysProps {
  day: Day
}

export const CalendarFillerDays: FC<CalendarFillerDaysProps> = ({
  day,
}: CalendarFillerDaysProps) => {
  const fillerDays = getDayNumber(day.name) - 1
  const fillerDaysMobile = fillerDays % 3
  const fillerDaysDesktop = fillerDays - fillerDaysMobile

  return (
    <>
      {range(fillerDaysMobile).map((i) => (
        <div
          tw="border p-2 flex items-center justify-center"
          key={`${day.monthName}-empty-day-${getDayName(i)}`}
        ></div>
      ))}
      {range(fillerDaysDesktop).map((i) => (
        <div
          tw="border p-2 items-center justify-center hidden lg:(flex)"
          key={`${day.monthName}-empty-day-${getDayName(i)}`}
        ></div>
      ))}
    </>
  )
}
