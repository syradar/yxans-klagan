import React, { createContext, useEffect, useState } from 'react'
import 'twin.macro'
import { Button, PageHeader } from '../components'
import CalendarMonth from '../components/calendar-month'
import { notNullish } from '../functions/utils.functions'
import { Calendar, getCal } from '../models/calendar.model'

const DEFAULT_CALENDAR = getCal(1165)
const DEFAULT_SHOW_WEATHER = true

const CALENDAR_KEY = 'calendar'
const CALENDAR_SHOW_WEATHER_KEY = 'calendar_show_weather'

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
  const calendarFromStorage = localStorage.getItem(CALENDAR_KEY) ?? undefined
  const showWeatherFromStorage =
    localStorage.getItem(CALENDAR_SHOW_WEATHER_KEY) ?? undefined

  const calendarFromStorageOrDefault = notNullish(calendarFromStorage)
    ? JSON.parse(calendarFromStorage)
    : DEFAULT_CALENDAR

  const showWeatherFromStorageOrDefault = notNullish(showWeatherFromStorage)
    ? JSON.parse(showWeatherFromStorage)
    : DEFAULT_SHOW_WEATHER

  const [calendar, setCalendar] = useState<Calendar>(
    calendarFromStorageOrDefault,
  )

  const [showWeather, setShowWeather] = useState<boolean>(
    showWeatherFromStorageOrDefault,
  )

  useEffect(() => {
    localStorage.setItem(CALENDAR_KEY, JSON.stringify(calendar))
  }, [calendar])

  useEffect(() => {
    localStorage.setItem(CALENDAR_SHOW_WEATHER_KEY, JSON.stringify(showWeather))
  }, [showWeather])

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>Kalender</PageHeader>
      <div tw="text-center text-xl mb-2 normal-case" className="yx-prose">
        År {calendar.year} E.S. (Efter skiftet)
      </div>
      <div tw="bg-gray-200 p-2 flex justify-end">
        <Button isSmall onClick={() => setShowWeather(!showWeather)}>
          {showWeather ? 'Dölj väder' : 'Visa väder'}
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
