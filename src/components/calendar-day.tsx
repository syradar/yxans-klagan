import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import tw from 'twin.macro'
import { DayCounter } from '.'
import {
  getFahrenheitTempString,
  getMoonEmoji,
  getTempString,
  getWeatherIcon,
  TemperatureUnit,
} from '../functions/weather.functions'
import { Day } from '../models/calendar.model'

interface CalendarDayProps {
  day: Day
  quarterClicked: (day: Day) => void
  showWeather: boolean
  temperatureUnit: TemperatureUnit
}

const CalendarDay: FC<CalendarDayProps> = ({
  day,
  quarterClicked,
  showWeather = true,
  temperatureUnit,
}: CalendarDayProps) => {
  const { t } = useTranslation('calendar')

  const formatTemperature = (temp: number) => {
    return temperatureUnit === TemperatureUnit.Metric
      ? getTempString(temp)
      : getFahrenheitTempString(temp)
  }

  return (
    <div tw="p-2 border flex flex-col gap-2">
      <div tw="flex justify-between">
        <div tw="flex flex-col w-5">
          <div tw="lg:(hidden)">{t(day.name)}</div>
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
          <div>
            {t('Weather-High')}: {formatTemperature(day.temp)}
          </div>
          <div>
            {t('Weather-Low')}: {formatTemperature(day.lowTemp)}
          </div>
          <div>{t(day.downpour)}</div>
          <div>{t(day.stormType)}</div>
          <div>{t(day.stormType)}</div>
          <div>{t(day.eventType?.name ?? '')}</div>
        </div>
      )}
    </div>
  )
}

export default CalendarDay
