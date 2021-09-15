import React, { FC, useContext } from 'react'
import 'twin.macro'
import { CalendarDay, CalendarDayNames, CalendarFillerDays } from '.'
import { range } from '../functions/array.functions'
import { Calendar, Day, MonthIndex } from '../models/calendar.model'
import { CalendarContext } from '../pages/calendar.page'

interface CalendarMonthProps {
  monthIndex: MonthIndex
}

const spendQuarter = (
  quarters: [boolean, boolean, boolean, boolean],
): [boolean, boolean, boolean, boolean] => {
  const spent = (quarters.filter((q) => q).length + 1) % 5

  return [
    ...range(spent).map((_) => true),
    ...range(4 - spent).map((_) => false),
  ] as [boolean, boolean, boolean, boolean]
}

const quarterReducer = (
  cal: Calendar,
  monthIndex: MonthIndex,
  day: Day,
): Calendar => {
  return {
    ...cal,
    months: {
      ...cal.months,
      [monthIndex]: {
        ...cal.months[monthIndex],
        days: cal.months[monthIndex].days.map((d) => {
          if (d.number === day.number) {
            d.quarters = spendQuarter(d.quarters)
          }

          return d
        }),
      },
    },
  }
}

const CalendarMonth: FC<CalendarMonthProps> = ({
  monthIndex,
}: CalendarMonthProps) => {
  const { calendar, setCalendar } = useContext(CalendarContext)

  const quarterClicked = (day: Day): void => {
    setCalendar(quarterReducer(calendar, monthIndex, day))
  }

  return (
    <div tw="mb-4">
      <h2 tw="text-center font-bold text-2xl uppercase mb-4">
        {calendar.months[monthIndex].name}
      </h2>
      <div tw="grid grid-cols-7">
        <CalendarDayNames />
        <CalendarFillerDays day={calendar.months[monthIndex].days[0]} />
        {calendar.months[monthIndex].days.map((d) => (
          <CalendarDay
            day={d}
            key={`${d.monthName}${d.number}`}
            quarterClicked={quarterClicked}
          ></CalendarDay>
        ))}
      </div>
    </div>
  )
}

export default CalendarMonth
