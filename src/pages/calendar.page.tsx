import { last } from 'rambda'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import tw from 'twin.macro'
import { Button } from '../components/Button'
import { CalendarMonth } from '../components/calendar-month'
import { PageHeader } from '../components/page-header'
import { Stepper } from '../components/stepper'
import { notNullish } from '../functions/utils.functions'
import { TemperatureUnit } from '../functions/weather.functions'
import { useLocalStorage } from '../hooks/use-local-storage'
import { useWindowScrollPosition } from '../hooks/use-window-scroll-position'
import {
  CalendarV4,
  CALENDAR_KEY_V4,
  DayNames,
  getCal,
  getDayName,
  getDayNumber,
  loadCalendar,
  Month,
  updateStartingDay,
} from '../models/calendar.model'

const DEFAULT_SHOW_WEATHER = true

const CALENDAR_SHOW_WEATHER_KEY = 'calendar_show_weather'
const CALENDAR_SCROLL_POSITION = 'calendar_scroll'

export const CalendarPage = () => {
  const { t } = useTranslation('calendar')
  const showWeatherFromStorage =
    localStorage.getItem(CALENDAR_SHOW_WEATHER_KEY) ?? undefined

  const calendarFromStorageOrDefault: CalendarV4 = loadCalendar()

  const showWeatherFromStorageOrDefault = notNullish(showWeatherFromStorage)
    ? JSON.parse(showWeatherFromStorage)
    : DEFAULT_SHOW_WEATHER

  const [calendarState, setCalendarState] = useState<CalendarV4>(
    calendarFromStorageOrDefault,
  )

  const [calendar, setCalendar] = useLocalStorage<CalendarV4>(
    CALENDAR_KEY_V4,
    calendarFromStorageOrDefault,
  )

  useEffect(() => {
    setCalendar(calendarState)
    setAllCollapsed(calendarState.months.every((m) => m.collapsed))
  }, [calendarState])

  const [showWeather, setShowWeather] = useLocalStorage<boolean>(
    CALENDAR_SHOW_WEATHER_KEY,
    showWeatherFromStorageOrDefault,
  )

  const [allCollapsed, setAllCollapsed] = useState<boolean | undefined>(
    undefined,
  )

  const [showCalenderOptions, setShowCalenderOptions] = useState<boolean>(false)
  const [showYearOption, setShowYearOption] = useState<boolean>(false)

  useEffect(() => {
    if (!showCalenderOptions) {
      setShowYearOption(false)
    }
  }, [showCalenderOptions])

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

  const collapseAll = (cal: CalendarV4, collapse: boolean) => {
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

  const handleUpdatingStartingDay = (dayName: DayNames) => {
    setCalendarState(updateStartingDay(calendarState, dayName))
  }

  const handleUpdatingYear = (newYear: number) => {
    const lastDay = last(last(calendarState.months).days).name
    const nextYearsStartDay = getDayName(getDayNumber(lastDay))

    setCalendarState(getCal(newYear, nextYearsStartDay))
  }

  useWindowScrollPosition(CALENDAR_SCROLL_POSITION, notNullish(calendar))

  return (
    <div tw="flex flex-col gap-y-8 w-full">
      <PageHeader>{t('Title')}</PageHeader>
      <div tw="text-center text-xl mb-2 normal-case" className="yx-prose">
        {t('Year')} {calendarState.year} {t('AS')}
      </div>
      <div tw="flex flex-col gap-0">
        <div tw="bg-gray-200 p-2 flex flex-wrap justify-end gap-2">
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
          <Button
            css={[
              showCalenderOptions ? tw`bg-black border-black text-white` : tw``,
            ]}
            variant="secondary"
            isSmall
            onClick={() => setShowCalenderOptions(!showCalenderOptions)}
          >
            ...
          </Button>
        </div>
        {showCalenderOptions && (
          <div tw="bg-gray-200 py-8 px-4 flex flex-col gap-2">
            <h3 tw="font-bold uppercase tracking-wide">
              {t('Options-StartingYear')}
            </h3>
            <div tw="p-4 border-2 border-red-600 bg-red-100 font-bold flex flex-col gap-4">
              <p tw="mb-2 text-red-600">{t('Options-StartingYearWarning')}</p>

              <div>
                <Button
                  tw="border-red-600 bg-red-200 text-red-700 hover:(text-white bg-red-600 border-red-600)"
                  isSmall
                  onClick={() => setShowYearOption(true)}
                  disabled={showYearOption}
                  variant={showYearOption ? 'disabled' : undefined}
                >
                  {t('Options-StartingYearNag')}
                </Button>
              </div>
              {showYearOption && (
                <Stepper
                  max={10000}
                  min={-2000}
                  value={calendarState.year}
                  id="yearChanger"
                  onChange={(val) => {
                    handleUpdatingYear(val)
                  }}
                ></Stepper>
              )}
            </div>

            <h3 tw="mt-4 font-bold uppercase tracking-wide">
              {t('Options-StartingDay')}
            </h3>
            <div tw="flex flex-wrap gap-2">
              <Button
                onClick={() => handleUpdatingStartingDay('SunDay')}
                isSmall
              >
                {t('SunDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('MoonDay')}
                isSmall
              >
                {t('MoonDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('BloodDay')}
                isSmall
              >
                {t('BloodDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('EarthDay')}
                isSmall
              >
                {t('EarthDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('GrowthDay')}
                isSmall
              >
                {t('GrowthDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('HarvestDay')}
                isSmall
              >
                {t('HarvestDay')}
              </Button>
              <Button
                onClick={() => handleUpdatingStartingDay('StillDay')}
                isSmall
              >
                {t('StillDay')}
              </Button>
            </div>
          </div>
        )}
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
