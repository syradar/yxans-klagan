import React, { createContext } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button, PageHeader } from '../components'
import CalendarMonth from '../components/calendar-month'
import { notNullish } from '../functions/utils.functions'
import { TemperatureUnit } from '../functions/weather.functions'
import { useLocalStorage } from '../hooks/use-local-storage'
import useWindowScrollPosition from '../hooks/use-window-scroll-position'
import { Calendar, getCal } from '../models/calendar.model'

const DEFAULT_CALENDAR = getCal(1165)
const DEFAULT_SHOW_WEATHER = true

const CALENDAR_KEY_V1 = 'calendar'
const CALENDAR_KEY = 'calendar_v2'
const CALENDAR_SHOW_WEATHER_KEY = 'calendar_show_weather'
const CALENDAR_SCROLL_POSITION = 'calendar_scroll'

type CalendarContext = {
  calendar: Calendar
  setCalendar: (cal: Calendar) => void
}

export const CalendarContext = createContext<CalendarContext>({
  calendar: DEFAULT_CALENDAR,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCalendar: (_: Calendar) => {},
})

export const CalendarPage = () => {
  const { t } = useTranslation('calendar')
  const calendarFromStorage = localStorage.getItem(CALENDAR_KEY) ?? undefined
  const showWeatherFromStorage =
    localStorage.getItem(CALENDAR_SHOW_WEATHER_KEY) ?? undefined

  localStorage.removeItem(CALENDAR_KEY_V1)

  const calendarFromStorageOrDefault = notNullish(calendarFromStorage)
    ? JSON.parse(calendarFromStorage)
    : DEFAULT_CALENDAR

  const showWeatherFromStorageOrDefault = notNullish(showWeatherFromStorage)
    ? JSON.parse(showWeatherFromStorage)
    : DEFAULT_SHOW_WEATHER

  const [calendar, setCalendar] = useLocalStorage<Calendar>(
    CALENDAR_KEY,
    calendarFromStorageOrDefault,
  )

  const [showWeather, setShowWeather] = useLocalStorage<boolean>(
    CALENDAR_SHOW_WEATHER_KEY,
    showWeatherFromStorageOrDefault,
  )

  const handleTemperatureChange = (unit: TemperatureUnit) => {
    setCalendar({ ...calendar, temperatureUnit: unit })
  }

  useWindowScrollPosition(CALENDAR_SCROLL_POSITION, notNullish(calendar))

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="text-center text-xl mb-2 normal-case" className="yx-prose">
        {t('Year')} {calendar.year} {t('AS')}
      </div>
      <div tw="bg-gray-200 p-2 flex justify-end gap-2">
        <Button
          isSmall
          variant="secondary"
          onClick={() =>
            handleTemperatureChange(
              calendar.temperatureUnit === TemperatureUnit.Metric
                ? TemperatureUnit.Imperial
                : TemperatureUnit.Metric,
            )
          }
        >
          {t('Use')}{' '}
          {calendar.temperatureUnit === TemperatureUnit.Metric
            ? t('F')
            : t('C')}
        </Button>
        <Button
          variant="secondary"
          isSmall
          onClick={() => setShowWeather(!showWeather)}
        >
          {showWeather ? t('Weather-Hide') : t('Weather-Show')}
        </Button>
      </div>

      <div tw="">
        <CalendarContext.Provider
          value={{
            calendar,
            setCalendar,
          }}
        >
          <CalendarMonth
            monthIndex={0}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={1}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={2}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={3}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={4}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={5}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={6}
            showWeather={showWeather}
          ></CalendarMonth>

          <CalendarMonth
            monthIndex={7}
            showWeather={showWeather}
          ></CalendarMonth>
        </CalendarContext.Provider>
      </div>
    </div>
  )
}
