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
  showWeather: boolean
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  quarterClicked,
  showWeather = true,
}: CalendarDayProps) => {
  return (
    <div tw="p-2 border flex flex-col gap-2">
      <div tw="flex justify-between">
        <div tw="flex flex-col w-5">
          <div tw="flex gap-1" css={[day.number === 1 ? tw`font-bold` : tw``]}>
            {day.number}
            <div>{getMoonEmoji(day.moon)}</div>
            <div>{getWeatherIcon(day)}</div>
          </div>
        </div>
      </div>
      <div tw="w-full">
        <DayCounter
          quarters={day.quarters}
          spendQuarter={() => quarterClicked(day)}
        ></DayCounter>
      </div>
      {showWeather && (
        <div tw="">
          <div>Högt: {getTempString(day.temp)}</div>
          <div>Lågt: {getTempString(day.lowTemp)}</div>
          <div>{day.downpour}</div>
          <div>{day.stormType}</div>
          <div>{day.stormType}</div>
          <div>{day.eventType?.name}</div>
        </div>
      )}
    </div>
  )
}

export default CalendarDay
