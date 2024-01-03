import { Option } from 'ts-results'
import { at } from '../functions/array.functions'
import { CalendarMonth } from '../models/forbidden-lands-date'
import { CalendarDayDisplay } from './calendar-day'
import { CalendarDayNames } from './calendar-day-names'
import { CalendarFillerDays } from './calendar-filler-day'

interface CalendarMonthProps {
  month: Option<CalendarMonth>
}

export const CalendarMonthDisplay = ({ month }: CalendarMonthProps) => {
  return (
    <div className="mt-4 grid grid-cols-3 lg:grid-cols-7">
      <CalendarDayNames />
      {month.some &&
        at(month.safeUnwrap().days, 0)
          .map(d => (
            <CalendarFillerDays
              key={d.index}
              day={d}
            />
          ))
          .unwrapOr(null)}

      {month.some &&
        month.safeUnwrap().days.map(d => (
          <CalendarDayDisplay
            day={d}
            key={`${d.month}${d.number}`}
          ></CalendarDayDisplay>
        ))}
    </div>
  )
}
