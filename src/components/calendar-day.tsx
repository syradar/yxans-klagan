import { useTranslation } from 'react-i18next'
import {
  downpourTranslationKeyDict,
  getFahrenheitTempString,
  getMoonEmoji,
  getTempString,
  getWeatherIcon,
  stormTypeTranslationKeyDict,
  TemperatureUnit,
} from '../functions/weather.functions'
import { Day, dayNameTranslationKeyDict } from '../models/calendar.model'
import { DayCounter } from './day-counter'
import { Pancake, Train } from './Stack'

interface CalendarDayProps {
  day: Day
  quarterClicked: (day: Day) => void
  showWeather: boolean
  temperatureUnit: TemperatureUnit
}

export const CalendarDay = ({
  day,
  quarterClicked,
  showWeather = true,
  temperatureUnit,
}: CalendarDayProps) => {
  const { t } = useTranslation(['calendar'])

  const formatTemperature = (temp: number) => {
    return temperatureUnit === TemperatureUnit.Metric
      ? getTempString(temp)
      : getFahrenheitTempString(temp)
  }

  return (
    <div className="border p-2">
      <Pancake spacing="small">
        <Pancake spacing="none" wrap={false}>
          <div className="lg:hidden">
            {t(dayNameTranslationKeyDict[day.name])}
          </div>
          <Train spacing="small">
            <div>{day.number}</div>

            <div>{getWeatherIcon(day)}</div>
          </Train>
        </Pancake>
        <div className="w-full">
          <DayCounter
            quarters={day.quarters}
            spendQuarter={() => quarterClicked(day)}
          ></DayCounter>
        </div>
        {day.moon && (
          <div className="flex gap-2">
            <div>{getMoonEmoji(day.moon)}</div>
            <div>
              {day.moon === 'new' && t('calendar:NewMoon')}
              {day.moon === 'full' && t('calendar:FullMoon')}
            </div>
          </div>
        )}
        {showWeather && (
          <Train spacing="none">
            <div>
              {t('calendar:Weather-High')}: {formatTemperature(day.temp)}
            </div>
            <div>
              {t('calendar:Weather-Low')}: {formatTemperature(day.lowTemp)}
            </div>
            <div>{t(downpourTranslationKeyDict[day.downpour])}</div>
            <div>{t(stormTypeTranslationKeyDict[day.stormType])}</div>
            <div>
              {day.eventType && day.eventType.name ? day.eventType.name : ''}
            </div>
          </Train>
        )}
      </Pancake>
    </div>
  )
}
