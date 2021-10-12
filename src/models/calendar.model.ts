import { range } from '../functions/array.functions'
import {
  Downpour,
  GenerateWeather,
  StormType,
  TemperatureUnit,
  WeatherDay,
  WeatherEvent,
} from '../functions/weather.functions'

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
export type MonthNames = typeof month[number]

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
export type DayNames = typeof dayNames[number]

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

export type CalendarV1AndV2 = {
  temperatureUnit: TemperatureUnit
  year: number
  months: { [M in MonthIndex]: MonthV1AndV2 }
}

export type Calendar = {
  temperatureUnit: TemperatureUnit
  year: number
  months: Month[]
}

const createMonth = (
  monthName: MonthNames,
  weatherDays: WeatherDay[],
  daysPassed: number,
) => {
  return {
    name: monthName,
    collapsed: false,
    days: range(dayInMonth(monthName)).map((d) => {
      const {
        temp,
        lowTemp,
        downpour,
        stormType,
        eventType,
        isCloudy,
        isPartlyCloudy,
      } = weatherDays[daysPassed + d]

      return {
        number: d + 1,
        name: getDayName(daysPassed + d),
        monthName: monthName,
        quarters: [false, false, false, false],
        moon: getMoonPhase(daysPassed + d + 1 + 9),
        temp,
        lowTemp,
        downpour,
        stormType,
        eventType,
        isCloudy,
        isPartlyCloudy,
      }
    }) as Day[],
  }
}

export const getCal = (startYear = 1165): Calendar => {
  const dayOffset = (startYear % 1165) % 7

  const weather = new GenerateWeather(365, [], 48, 50, 6, '')
  const weatherDays = weather.weatherSystems
    .reduce((acc, cur) => {
      acc.push(cur.days)

      return acc
    }, [] as WeatherDay[][])
    .flat()

  const cal = range(numberOfMonths()).reduce(
    (cal, m) => {
      const monthName = getMonthName(m)
      cal.cal.months.push(createMonth(monthName, weatherDays, cal.daysPassed))
      cal.daysPassed += dayInMonth(monthName)

      return cal
    },

    {
      daysPassed: dayOffset,
      cal: {
        year: startYear,
        months: [] as Month[],
        temperatureUnit: TemperatureUnit.Metric,
      } as Calendar,
    },
  )

  return cal.cal
}
export const parseV1AndV2Calendar = (cal: CalendarV1AndV2): Calendar => {
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
  }
}

const CALENDAR_KEY_V1 = 'calendar'
const CALENDAR_KEY_V2 = 'calendar_v2'
export const CALENDAR_KEY_V3 = 'calendar_v3'

const parseCalendar = (json: string, oldFormat = false): Calendar => {
  localStorage.removeItem(CALENDAR_KEY_V1)
  localStorage.removeItem(CALENDAR_KEY_V2)

  return oldFormat ? parseV1AndV2Calendar(JSON.parse(json)) : JSON.parse(json)
}

export const loadCalendar = (): Calendar => {
  const calV1 = localStorage.getItem(CALENDAR_KEY_V1)
  const calV2 = localStorage.getItem(CALENDAR_KEY_V2)
  const calV3 = localStorage.getItem(CALENDAR_KEY_V3)

  if (calV3) {
    return parseCalendar(calV3)
  }

  if (calV2) {
    console.log(calV2)

    return parseCalendar(calV2, true)
  }

  if (calV1) {
    return parseCalendar(calV1, true)
  }

  return getCal(1165)
}
