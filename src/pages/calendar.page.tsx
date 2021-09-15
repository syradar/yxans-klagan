import React, { useState } from 'react'
import 'twin.macro'
import tw from 'twin.macro'
import { CalendarDay, DayCounter, Parchment } from '../components'
import { range } from '../functions/array.functions'
import { notNullish } from '../functions/utils.functions'
import { getTempString, getWeatherIcon } from '../functions/weather.functions'
import {
  Day,
  getCal,
  getDayName,
  getDayNumber,
  Month,
} from '../models/calendar.model'

export const CalendarPage = () => {
  const cal = getCal(1165)

  const monthsFromStorage = localStorage.getItem('calendar') ?? undefined

  const monthsFromStorageOrDefault = notNullish(monthsFromStorage)
    ? JSON.parse(monthsFromStorage)
    : Object.values(cal.months)
  const [months, setMonths] = useState<Month[]>(monthsFromStorageOrDefault)

  const spendQuarter = (
    quarters: [boolean, boolean, boolean, boolean],
  ): [boolean, boolean, boolean, boolean] => {
    const spent = (quarters.filter((q) => q).length + 1) % 5

    return [
      ...range(spent).map((_) => true),
      ...range(4 - spent).map((_) => false),
    ] as [boolean, boolean, boolean, boolean]
  }

  const quarterClicked = (day: Day): void => {
    setTimeout(() => {
      const newMonths2: Month[] = []
      for (const month of months) {
        for (const d of month.days) {
          d.quarters =
            day.number === d.number ? spendQuarter(d.quarters) : d.quarters
        }

        newMonths2.push(month)
      }
      localStorage.setItem('calendar', JSON.stringify(newMonths2))

      setMonths(newMonths2)
    }, 1)
  }

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <h1 tw="text-center text-6xl" className="yx-heading">
        Kalender
      </h1>

      <div tw="">
        <Parchment>
          <div>
            <div tw="text-center text-xl mb-2 normal-case" className="yx-prose">
              År {cal.year} E.S. (Efter skiftet)
            </div>
            {months.map((m) => (
              <div tw="mb-4" key={m.name}>
                <h2 tw="text-center font-bold text-2xl uppercase mb-4">
                  {m.name}
                </h2>
                <div tw="grid grid-cols-7">
                  {range(7).map((i) => (
                    <div
                      tw="border p-2 flex items-center justify-center font-bold bg-gray-200"
                      key={getDayName(i)}
                    >
                      {getDayName(i)}
                    </div>
                  ))}
                  {range(getDayNumber(m.days[0].name) - 1).map((i) => (
                    <div
                      tw="border p-2 flex items-center justify-center"
                      key={`${m.name}-empty-day-${getDayName(i)}`}
                    ></div>
                  ))}
                  {m.days.map((d) => (
                    <CalendarDay
                      day={d}
                      key={`${d.monthName}${d.number}`}
                    ></CalendarDay>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Parchment>
      </div>
    </div>
  )
}
