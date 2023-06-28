import {
  selectCalendarDay,
  toggleQuarter,
} from '../features/calendar/calendar-slice'
import { CalendarDay, dayLabelDict } from '../models/forbidden-lands-date.model'
import { useAppDispatch, useAppSelector } from '../store/store.hooks'
import { selectTranslateFunction } from '../store/translations/translation.slice'
import { Pancake, Train } from './Stack'
import { DayCounter } from './day-counter'

interface CalendarDayProps {
  day: CalendarDay
}

export const CalendarDayDisplay = ({ day }: CalendarDayProps) => {
  const t = useAppSelector(selectTranslateFunction(['calendar']))

  const { quarters, isCurrentDate, dayDate } = useAppSelector(
    selectCalendarDay(day),
  )

  const dispatch = useAppDispatch()

  return (
    <div className={`border p-2`}>
      <Pancake spacing="small">
        <Pancake spacing="none" wrap={false}>
          <div className="lg:hidden">{t(dayLabelDict[day.index])}</div>
          <Train spacing="small">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full
            ${isCurrentDate ? 'bg-green-500 font-medium text-white' : ''}
            `}
            >
              {day.number}
            </div>
            {/* <div>{getWeatherIcon(day)}</div> */}
          </Train>
        </Pancake>
        <div className="w-full">
          <DayCounter
            quarters={quarters}
            onPress={() => dispatch(toggleQuarter(dayDate.serialize()))}
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
