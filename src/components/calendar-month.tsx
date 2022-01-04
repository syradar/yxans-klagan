import React from 'react'
import { useTranslation } from 'react-i18next'
import 'twin.macro'
import { range } from '../functions/array.functions'
import { TemperatureUnit } from '../functions/weather.functions'
import { Day, Month } from '../models/calendar.model'
import { CalendarDay } from './calendar-day'
import { CalendarDayNames } from './calendar-day-names'
import { CalendarFillerDays } from './calendar-filler-day'
import { MonthCollapseButton } from './month-collapse-button'
import { Parchment } from './parchment'
import { Train } from './stack'

interface CalendarMonthProps {
  month: Month
  onMonthUpdate: (month: Month) => void
  temperatureUnit: TemperatureUnit
  showWeather: boolean
}

const spendQuarter = (
  quarters: [boolean, boolean, boolean, boolean],
): [boolean, boolean, boolean, boolean] => {
  const spent = (quarters.filter((q) => q).length + 1) % 5

  return [
    ...range(spent).map((_) => true),
    ...range(4 - spent).map((_) => false),
  ] as [boolean, boolean, boolean, boolean]
}

const quarterReducer = (month: Month, day: Day): Month => {
  return {
    ...month,
    days: month.days.map((d) => {
      if (d.number === day.number) {
        d.quarters = spendQuarter(d.quarters)
      }

      return d
    }),
  }
}

export const CalendarMonth = ({
  month,
  showWeather = true,
  temperatureUnit,
  onMonthUpdate,
}: CalendarMonthProps) => {
  const { t } = useTranslation('calendar')

  const quarterClicked = (day: Day): void => {
    onMonthUpdate(quarterReducer(month, day))
  }

  const toggleCollapse = () => {
    onMonthUpdate({ ...month, collapsed: !month.collapsed })
  }

  return (
    <div tw="mb-4">
      <Parchment deps={[showWeather, month, month.collapsed]}>
        <Train>
          <h2
            tw="text-4xl text-center flex gap-2 items-center"
            className="yx-heading"
          >
            <MonthCollapseButton
              collapsed={month.collapsed}
              onMonthCollapseClick={toggleCollapse}
            ></MonthCollapseButton>
            {t(month.name)}
          </h2>
        </Train>

        {!month.collapsed && (
          <div tw="mt-4 grid grid-cols-3 lg:(grid-cols-7)">
            <CalendarDayNames />
            <CalendarFillerDays day={month.days[0]} />
            {month.days.map((d) => (
              <CalendarDay
                day={d}
                temperatureUnit={temperatureUnit}
                key={`${d.monthName}${d.number}`}
                showWeather={showWeather}
                quarterClicked={quarterClicked}
              ></CalendarDay>
            ))}
          </div>
        )}
      </Parchment>
    </div>
  )
}
