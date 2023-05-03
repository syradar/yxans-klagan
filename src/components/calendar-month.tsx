import { CalendarMonth } from '../models/forbidden-lands-date.model'
import { CalendarDayDisplay } from './calendar-day'
import { CalendarDayNames } from './calendar-day-names'
import { CalendarFillerDays } from './calendar-filler-day'

interface CalendarMonthProps {
  month: CalendarMonth
  // onMonthUpdate: (month: Month) => void
  // temperatureUnit: TemperatureUnit
  // showWeather: boolean
}

export const CalendarMonthDisplay = ({ month }: CalendarMonthProps) => {
  return (
    <div className="mt-4 grid grid-cols-3 lg:grid-cols-7">
      <CalendarDayNames />
      <CalendarFillerDays day={month.days[0]} />
      {month.days.map((d) => (
        <CalendarDayDisplay
          day={d}
          key={`${d.month}${d.number}`}
        ></CalendarDayDisplay>
      ))}
    </div>
  )
}
