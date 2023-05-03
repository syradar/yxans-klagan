import { range } from '../functions/array.functions'
import {
  Downpour,
  GenerateWeather,
  StormType,
  TemperatureUnit,
  WeatherDay,
  WeatherEvent,
} from '../functions/weather.functions'
import { TranslationKey } from '../store/translations/translation.model'

const month = [
  'WinterWane',
  'SpringRise',
  'SpringWane',
  'SummerRise',
  'SummerWane',
  'AutumnRise',
  'AutumnWane',
  'WinterRise',
] as const
export type MonthNames = (typeof month)[number]

export type MonthV1AndV2 = {
  name: MonthNames
  days: Day[]
}

export type Month = {
  name: MonthNames
  days: Day[]
  collapsed: boolean
}

const numberOfMonths = (): 8 => 8

const dayNames = [
  'SunDay',
  'MoonDay',
  'BloodDay',
  'EarthDay',
  'GrowthDay',
  'HarvestDay',
  'StillDay',
] as const
export type DayNames = (typeof dayNames)[number]

export const dayNameTranslationKeyDict: Record<
  DayNames,
  TranslationKey<'calendar'>
> = {
  SunDay: 'calendar:SunDay',
  MoonDay: 'calendar:MoonDay',
  BloodDay: 'calendar:BloodDay',
  EarthDay: 'calendar:EarthDay',
  GrowthDay: 'calendar:GrowthDay',
  HarvestDay: 'calendar:HarvestDay',
  StillDay: 'calendar:StillDay',
}

export const getMonthName = (monthNumber: number): MonthNames =>
  month[monthNumber % 8]

export const getDayName = (dayNumber: number): DayNames =>
  dayNames[dayNumber % 7]

export const getDayNumber = (dayName: DayNames): number => {
  switch (dayName) {
    case 'StillDay':
      return 7
    case 'HarvestDay':
      return 6
    case 'GrowthDay':
      return 5
    case 'EarthDay':
      return 4
    case 'BloodDay':
      return 3
    case 'MoonDay':
      return 2
    case 'SunDay':
    default:
      return 1
  }
}

export type Day = {
  number: number
  name: DayNames
  monthName: MonthNames
  quarters: [boolean, boolean, boolean, boolean]
  moon?: 'full' | 'new'
  temp: number
  lowTemp: number
  downpour: Downpour
  stormType: StormType
  isCloudy: boolean
  isPartlyCloudy: boolean
  eventType?: WeatherEvent
}

export const getMoonPhase = (day: number): 'full' | 'new' | undefined => {
  switch (true) {
    case day % 30 === 0:
      return 'full'
    case day % 15 === 0:
      return 'new'

    default:
      return undefined
  }
}

export const dayInMonth = (m: MonthNames): 45 | 46 => {
  switch (m) {
    case 'WinterWane':
    case 'SpringWane':
    case 'SummerRise':
    case 'SummerWane':
    case 'AutumnWane':
      return 46
    default:
      return 45
  }
}

export type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
export const isMonthIndex = (val: number): val is MonthIndex => {
  switch (val) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true
    default:
      return false
  }
}

type CalendarV1AndV2 = {
  temperatureUnit: TemperatureUnit
  year: number
  months: { [M in MonthIndex]: MonthV1AndV2 }
}

export type CalendarV4 = {
  temperatureUnit: TemperatureUnit
  year: number
  months: Month[]
  startDay: DayNames
}

const createMonth = (
  monthName: MonthNames,
  weatherDays: WeatherDay[],
  daysPassed: number,
  dayOffset: number,
) => {
  return {
    name: monthName,
    collapsed: false,
    days: range(dayInMonth(monthName)).map((d) => {
      const weatherDay = weatherDays[daysPassed + d]

      return {
        number: d + 1,
        name: getDayName(daysPassed + d + dayOffset),
        monthName: monthName,
        quarters: [false, false, false, false],
        moon: getMoonPhase(daysPassed + d + 1 + 9),
        temp: weatherDay.temp,
        lowTemp: weatherDay.lowTemp,
        downpour: weatherDay.downpour,
        stormType: weatherDay.stormType,
        eventType: weatherDay.eventType,
        isCloudy: weatherDay.isCloudy,
        isPartlyCloudy: weatherDay.isPartlyCloudy,
      }
    }) as Day[],
  }
}

export const getCal = (startYear = 1165, startDay?: DayNames): CalendarV4 => {
  const dayOffset = startDay
    ? getDayNumber(startDay) - 1
    : (startYear % 1165) % 7

  const weather = new GenerateWeather(365, 48, 50)
  const weatherDays = weather.weatherSystems
    .reduce((acc, cur) => {
      acc.push(cur.days)

      return acc
    }, [] as WeatherDay[][])
    .flat()

  const cal = range(numberOfMonths()).reduce(
    (calendar, m) => {
      const monthName = getMonthName(m)
      calendar.calendar.months.push(
        createMonth(monthName, weatherDays, calendar.daysPassed, dayOffset),
      )
      calendar.daysPassed += dayInMonth(monthName)

      return calendar
    },

    {
      daysPassed: 0,
      calendar: {
        year: startYear,
        months: [] as Month[],
        temperatureUnit: TemperatureUnit.Metric,
        startDay,
      } as CalendarV4,
    },
  )

  return cal.calendar
}
export const parseV1AndV2Calendar = (cal: CalendarV1AndV2): CalendarV4 => {
  return {
    ...cal,
    months: [
      { ...cal.months[0], collapsed: false },
      { ...cal.months[1], collapsed: false },
      { ...cal.months[2], collapsed: false },
      { ...cal.months[3], collapsed: false },
      { ...cal.months[4], collapsed: false },
      { ...cal.months[5], collapsed: false },
      { ...cal.months[6], collapsed: false },
    ],
    temperatureUnit: TemperatureUnit.Metric,
    startDay: 'SunDay',
  }
}

const CALENDAR_KEY_V1 = 'calendar'
const CALENDAR_KEY_V2 = 'calendar_v2'
const CALENDAR_KEY_V3 = 'calendar_v3'
export const CALENDAR_KEY_V4 = 'calendar_v4'

const parseCalendar = (json: string, oldFormat = false): CalendarV4 => {
  localStorage.removeItem(CALENDAR_KEY_V1)
  localStorage.removeItem(CALENDAR_KEY_V2)
  localStorage.removeItem(CALENDAR_KEY_V3)

  return oldFormat ? parseV1AndV2Calendar(JSON.parse(json)) : JSON.parse(json)
}

export const loadCalendar = (): CalendarV4 => {
  const calV1 = localStorage.getItem(CALENDAR_KEY_V1)
  const calV2 = localStorage.getItem(CALENDAR_KEY_V2)
  const calV3 = localStorage.getItem(CALENDAR_KEY_V3)
  const calV4 = localStorage.getItem(CALENDAR_KEY_V4)

  if (calV4) {
    return parseCalendar(calV4)
  }

  if (calV3) {
    return parseCalendar(calV3, true)
  }

  if (calV2) {
    return parseCalendar(calV2, true)
  }

  if (calV1) {
    return parseCalendar(calV1, true)
  }

  return getCal(1165)
}

export const updateStartingDay = (
  cal: CalendarV4,
  startDay: DayNames,
): CalendarV4 => {
  const dayOffset = getDayNumber(startDay) - 1
  let daysPassed = 0

  return {
    ...cal,
    months: cal.months.map((m) => {
      return {
        ...m,
        days: m.days.map((d) => {
          daysPassed += 1

          return {
            ...d,
            name: getDayName(
              getDayNumber('SunDay') + dayOffset + daysPassed - 2,
            ),
          }
        }),
      }
    }),
    startDay,
  }
}
