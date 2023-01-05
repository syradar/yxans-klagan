import { range } from '../functions/array.functions'
import { Day, getDayName, getDayNumber } from '../models/calendar.model'

interface CalendarFillerDaysProps {
  day: Day
}

export const CalendarFillerDays = ({ day }: CalendarFillerDaysProps) => {
  const fillerDays = getDayNumber(day.name) - 1
  const fillerDaysMobile = fillerDays % 3
  const fillerDaysDesktop = fillerDays - fillerDaysMobile

  return (
    <>
      {range(fillerDaysMobile).map((i) => (
        <div
          className="flex items-center justify-center border p-2"
          key={`${day.monthName}-empty-day-${getDayName(i)}`}
        ></div>
      ))}
      {range(fillerDaysDesktop).map((i) => (
        <div
          className="hidden items-center justify-center border p-2 lg:flex"
          key={`${day.monthName}-empty-day-${getDayName(i)}`}
        ></div>
      ))}
    </>
  )
}
