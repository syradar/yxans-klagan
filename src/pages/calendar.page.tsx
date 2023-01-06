import { last } from 'ramda'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { CalendarMonth } from '../components/calendar-month'
import { PageHeader } from '../components/page-header'
import { ParchmentButton } from '../components/ParchmentButton'
import { Stepper } from '../components/Stepper'
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
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import Stack from '../components/Stack'

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
  }, [calendarState, setCalendar])

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
    const lastMonth = last(calendarState.months)
    if (!lastMonth) return

    const lastDay = last(lastMonth.days)
    if (!lastDay) return

    const lastDayName = lastDay.name
    const nextYearsStartDay = getDayName(getDayNumber(lastDayName))

    setCalendarState(getCal(newYear, nextYearsStartDay))
  }

  useWindowScrollPosition(CALENDAR_SCROLL_POSITION, notNullish(calendar))

  return (
    <div className="flex w-full flex-col gap-y-8">
      <PageHeader>{t('Title')}</PageHeader>
      <div className="yx-prose mb-2 text-xl normal-case">
        {t('Year')} {calendarState.year} {t('AS')}
      </div>
      <div className="flex flex-col gap-0">
        <Stack.Horizontal distribute>
          <Stack.Horizontal>
            <ParchmentButton onClick={() => handleToggleCollapseAll()}>
              {t(allCollapsed ? `ShowAll` : `HideAll`)}
            </ParchmentButton>

            <ParchmentButton
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
            </ParchmentButton>
            <ParchmentButton onClick={() => setShowWeather(!showWeather)}>
              {showWeather ? t('Weather-Hide') : t('Weather-Show')}
            </ParchmentButton>
          </Stack.Horizontal>

          <ParchmentButton
            onClick={() => setShowCalenderOptions(!showCalenderOptions)}
          >
            <Cog6ToothIcon className="h-6 w-6" />
          </ParchmentButton>
        </Stack.Horizontal>
        {showCalenderOptions && (
          <div className="flex flex-col gap-2 bg-gray-200 py-8 px-4">
            <h3 className="font-bold uppercase tracking-wide">
              {t('Options-StartingYear')}
            </h3>
            <div className="flex flex-col gap-4 border-2 border-red-600 bg-red-100 p-4 font-bold">
              <p className="mb-2 text-red-600">
                {t('Options-StartingYearWarning')}
              </p>

              <div>
                <Button
                  extraCss="border-red-600 bg-red-600 text-red-700 hover:border-red-600 hover:text-white"
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

            <h3 className="mt-4 font-bold uppercase tracking-wide">
              {t('Options-StartingDay')}
            </h3>
            <div className="flex flex-wrap gap-2">
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

export default CalendarPage
