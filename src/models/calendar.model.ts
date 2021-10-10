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

export type Month = {
  name: MonthNames
  days: Day[]
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

export type Calendar = {
  temperatureUnit: TemperatureUnit
  year: number
  months: {
    [k in MonthIndex]: Month
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
      cal.cal.months[m as MonthIndex] = {
        name: monthName,
        days: range(dayInMonth(monthName)).map((d) => {
          const {
            temp,
            lowTemp,
            downpour,
            stormType,
            eventType,
            isCloudy,
            isPartlyCloudy,
          } = weatherDays[cal.daysPassed + d]

          return {
            number: d + 1,
            name: getDayName(cal.daysPassed + d),
            monthName: monthName,
            quarters: [false, false, false, false],
            moon: getMoonPhase(cal.daysPassed + d + 1 + 9),
            temp,
            lowTemp,
            downpour,
            stormType,
            eventType,
            isCloudy,
            isPartlyCloudy,
          }
        }),
      }
      cal.daysPassed += dayInMonth(monthName)

      return cal
    },

    { daysPassed: dayOffset, cal: { year: startYear, months: {} } as Calendar },
  )

  return cal.cal
}
