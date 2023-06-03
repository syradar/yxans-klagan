import {
  selectQuarter,
  toggleQuarter,
} from '../features/calendar/calendar-slice'
import {
  CalendarDay,
  ForbiddenLandsDateSerializable,
  dayLabelDict,
} from '../models/forbidden-lands-date.model'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'
import { Pancake, Train } from './Stack'
import { DayCounter } from './day-counter'

interface CalendarDayProps {
  day: CalendarDay
}

export const CalendarDayDisplay = ({ day }: CalendarDayProps) => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))
  const date: ForbiddenLandsDateSerializable = {
    day: day.number,
    month: day.monthNumber,
    year: day.year,
    monthIndex: day.month,
  }
  const quarters = useAppSelector(selectQuarter(date))
  const dispatch = useAppDispatch()

  return (
    <div className="border p-2">
      <Pancake spacing="small">
        <Pancake spacing="none" wrap={false}>
          <div className="lg:hidden">{t(dayLabelDict[day.index])}</div>
          <Train spacing="small">
            <div>{day.number}</div>
            {/* <div>{getWeatherIcon(day)}</div> */}
          </Train>
        </Pancake>
        <div className="w-full">
          <DayCounter
            quarters={quarters}
            onClick={() => dispatch(toggleQuarter(date))}
          ></DayCounter>
        </div>
        {/* {day.moon && (
          <div className="flex gap-2">
            <div>{getMoonEmoji(day.moon)}</div>
            <div>
              {day.moon === 'new' && t('calendar:NewMoon')}
              {day.moon === 'full' && t('calendar:FullMoon')}
            </div>
          </div>
        )}
        */}
      </Pancake>
    </div>
  )
}
