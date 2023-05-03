import { range } from '../functions/array.functions'
import { CalendarDay } from '../models/forbidden-lands-date.model'

interface CalendarFillerDaysProps {
  day: CalendarDay
}

export const CalendarFillerDays = ({ day }: CalendarFillerDaysProps) => {
  const fillerDays = day.index
  const fillerDaysMobile = fillerDays % 3
  const fillerDaysDesktop = fillerDays - fillerDaysMobile

  return (
    <>
      {range(fillerDaysMobile).map((_) => (
        <div
          className="flex items-center justify-center border p-2"
          key={`${day.index}-empty-mobile-day`}
        ></div>
      ))}
      {range(fillerDaysDesktop).map((i) => (
        <div
          className="hidden items-center justify-center border p-2 lg:flex"
          key={`${i}-empty-desktop-day`}
        ></div>
      ))}
    </>
  )
}
