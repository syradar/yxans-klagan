import React, { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { DayCounter } from '.'
import {
  getMoonEmoji,
  getTempString,
  getWeatherIcon,
} from '../functions/weather.functions'
import { Day } from '../models/calendar.model'

interface CalendarDayProps {
  day: Day
  quarterClicked: (day: Day) => void
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  quarterClicked,
}: CalendarDayProps) => {
  return (
    <div tw="border p-2 flex flex-col gap-2">
      <div tw="flex justify-between">
        <div tw="flex flex-col w-5">
          <div css={[day.number === 1 ? tw`font-bold` : tw``]}>
            {day.number}
          </div>
          <div>{getMoonEmoji(day.moon)}</div>
          <div>{getWeatherIcon(day)}</div>
        </div>
        <div>
          <DayCounter
            quarters={day.quarters}
            // !eslint-disable-next-line @typescript-eslint/no-empty-function
            // !eslint-disable-next-line @typescript-eslint/no-empty-function
            // !eslint-disable-next-line @typescript-eslint/no-empty-function
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            spendQuarter={() => quarterClicked(day)} // quarterClicked(day)}
          ></DayCounter>
        </div>
      </div>
      <div>
        <div>Högt: {getTempString(day.temp)}</div>
        <div>Lågt: {getTempString(day.lowTemp)}</div>
        <div>{day.downpour}</div>
        <div>{day.stormType}</div>
        <div>{day.stormType}</div>
        <div>{day.eventType?.name}</div>
      </div>
    </div>
  )
}

export default CalendarDay
