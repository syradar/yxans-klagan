import React, { FC } from 'react'
import 'twin.macro'
import { useTranslation } from 'react-i18next'
import {
  getFahrenheitTempString,
  getMoonEmoji,
  getTempString,
  getWeatherIcon,
  TemperatureUnit,
} from '../functions/weather.functions'
import { Day } from '../models/calendar.model'
import { DayCounter } from './day-counter'
import { Pancake, Train } from './stack'

interface CalendarDayProps {
  day: Day
  quarterClicked: (day: Day) => void
  showWeather: boolean
  temperatureUnit: TemperatureUnit
}

export const CalendarDay: FC<CalendarDayProps> = ({
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
    <div tw="p-2 border">
      <Pancake spacing="small">
        <Pancake spacing="none" wrap={false}>
          <div tw="lg:(hidden)">{t(day.name)}</div>
          <Train spacing="small">
            <div>{day.number}</div>
            {day.moon && <div>{getMoonEmoji(day.moon)}</div>}
            <div>{getWeatherIcon(day)}</div>
          </Train>
        </Pancake>
        <div tw="w-full">
          <DayCounter
            quarters={day.quarters}
            spendQuarter={() => quarterClicked(day)}
          ></DayCounter>
        </div>
        {showWeather && (
          <Train spacing="none">
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
          </Train>
        )}
      </Pancake>
    </div>
  )
}
