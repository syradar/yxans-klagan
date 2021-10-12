import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { Button, PageHeader } from '../components'
import CalendarMonth from '../components/calendar-month'
import { notNullish } from '../functions/utils.functions'
import { TemperatureUnit } from '../functions/weather.functions'
import { useLocalStorage } from '../hooks/use-local-storage'
import useWindowScrollPosition from '../hooks/use-window-scroll-position'
import {
  Calendar,
  CALENDAR_KEY_V3,
  loadCalendar,
  Month,
} from '../models/calendar.model'

const DEFAULT_SHOW_WEATHER = true

const CALENDAR_SHOW_WEATHER_KEY = 'calendar_show_weather'
const CALENDAR_SCROLL_POSITION = 'calendar_scroll'

export const CalendarPage = () => {
  const { t } = useTranslation('calendar')
  const showWeatherFromStorage =
    localStorage.getItem(CALENDAR_SHOW_WEATHER_KEY) ?? undefined

  const calendarFromStorageOrDefault: Calendar = loadCalendar()

  const showWeatherFromStorageOrDefault = notNullish(showWeatherFromStorage)
    ? JSON.parse(showWeatherFromStorage)
    : DEFAULT_SHOW_WEATHER

  const [calendarState, setCalendarState] = useState<Calendar>(
    calendarFromStorageOrDefault,
  )

  const [calendar, setCalendar] = useLocalStorage<Calendar>(
    CALENDAR_KEY_V3,
    calendarFromStorageOrDefault,
  )

  useEffect(() => {
    setCalendar(calendarState)
    setAllCollapsed(calendarState.months.every((m) => m.collapsed))
    // setTimeout(() => {
    // }, 10)
  }, [calendarState])

  const [showWeather, setShowWeather] = useLocalStorage<boolean>(
    CALENDAR_SHOW_WEATHER_KEY,
    showWeatherFromStorageOrDefault,
  )

  const [allCollapsed, setAllCollapsed] = useState<boolean | undefined>(
    undefined,
  )

  const handleMonthUpdate = (month: Month) => {
    setCalendarState({
      ...calendarState,
      months: calendarState.months.map((m) => {
        if (m.name !== month.name) {
          return m
        }

        return month
      }),
    })
  }

  const handleTemperatureChange = (unit: TemperatureUnit) => {
    setCalendarState({ ...calendar, temperatureUnit: unit })
  }

  const collapseAll = (cal: Calendar, collapse: boolean) => {
    return {
      ...cal,
      months: cal.months.map((month) => {
        return {
          ...month,
          collapsed: collapse,
        }
      }),
    }
  }

  const handleToggleCollapseAll = () => {
    setCalendarState(collapseAll(calendarState, !allCollapsed))
  }

  useWindowScrollPosition(CALENDAR_SCROLL_POSITION, notNullish(calendar))

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="text-center text-xl mb-2 normal-case" className="yx-prose">
        {t('Year')} {calendarState.year} {t('AS')}
      </div>
      <div tw="bg-gray-200 p-2 flex justify-end gap-2">
        <Button
          isSmall
          variant="secondary"
          onClick={() => handleToggleCollapseAll()}
        >
          {t(allCollapsed ? `ShowAll` : `HideAll`)}
        </Button>

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
      <div>
        {calendarState.months.map((month) => {
          return (
            <CalendarMonth
              key={month.name}
              month={month}
              showWeather={showWeather}
              onMonthUpdate={handleMonthUpdate}
              temperatureUnit={calendarState.temperatureUnit}
            ></CalendarMonth>
          )
        })}
      </div>
    </div>
  )
}
