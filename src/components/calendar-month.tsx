import React, { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { CalendarDay, CalendarDayNames, CalendarFillerDays, Parchment } from '.'
import { range } from '../functions/array.functions'
import { Calendar, Day, MonthIndex } from '../models/calendar.model'
import { CalendarContext } from '../pages/calendar.page'

interface CalendarMonthProps {
  monthIndex: MonthIndex
  showWeather: boolean
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
  showWeather = true,
}: CalendarMonthProps) => {
  const { t } = useTranslation('calendar')
  const { calendar, setCalendar } = useContext(CalendarContext)

  const quarterClicked = (day: Day): void => {
    setCalendar(quarterReducer(calendar, monthIndex, day))
  }

  return (
    <div tw="mb-4">
      <Parchment deps={[showWeather]}>
        <h2 tw="text-4xl text-center flex mb-4" className="yx-heading">
          {t(calendar.months[monthIndex].name)}
        </h2>

        <div tw="grid grid-cols-3 lg:(grid-cols-7)">
          <CalendarDayNames />
          <CalendarFillerDays day={calendar.months[monthIndex].days[0]} />
          {calendar.months[monthIndex].days.map((d) => (
            <CalendarDay
              day={d}
              key={`${d.monthName}${d.number}`}
              showWeather={showWeather}
              quarterClicked={quarterClicked}
            ></CalendarDay>
          ))}
        </div>
      </Parchment>
    </div>
  )
}

export default CalendarMonth
