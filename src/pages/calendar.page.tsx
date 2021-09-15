import React, { createContext, useEffect, useState } from 'react'
import 'twin.macro'
import { PageHeader, Parchment } from '../components'
import CalendarMonth from '../components/calendar-month'
import { notNullish } from '../functions/utils.functions'
import { Calendar, getCal } from '../models/calendar.model'

const DEFAULT_CALENDAR = getCal(1165)

const CALENDAR_KEY = 'calendar'

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

  const calendarFromStorageOrDefault = notNullish(calendarFromStorage)
    ? JSON.parse(calendarFromStorage)
    : DEFAULT_CALENDAR

  const [calendar, setCalendar] = useState<Calendar>(
    calendarFromStorageOrDefault,
  )

  useEffect(() => {
    localStorage.setItem(CALENDAR_KEY, JSON.stringify(calendar))
  }, [calendar])

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>Kalender</PageHeader>

      <div tw="">
        <Parchment>
          <div>
            <CalendarContext.Provider
              value={{
                calendar,
                setCalendar,
              }}
            >
              <div
                tw="text-center text-xl mb-2 normal-case"
                className="yx-prose"
              >
                År {calendar.year} E.S. (Efter skiftet)
              </div>
              <CalendarMonth monthIndex={0}></CalendarMonth>
              <CalendarMonth monthIndex={1}></CalendarMonth>
              <CalendarMonth monthIndex={2}></CalendarMonth>
              <CalendarMonth monthIndex={3}></CalendarMonth>
              <CalendarMonth monthIndex={4}></CalendarMonth>
              <CalendarMonth monthIndex={5}></CalendarMonth>
              <CalendarMonth monthIndex={6}></CalendarMonth>
              <CalendarMonth monthIndex={7}></CalendarMonth>
            </CalendarContext.Provider>
          </div>
        </Parchment>
      </div>
    </div>
  )
}
