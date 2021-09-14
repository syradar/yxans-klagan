import { range } from '../functions/array.functions'
import {
  Downpour,
  GenerateWeather,
  StormType,
  WeatherDay,
  WeatherEvent,
} from '../functions/weather.functions'

const month = [
  'Åldervinter',
  'Ungvår',
  'Åldervår',
  'Ungsommar',
  'Åldersommar',
  'Unghöst',
  'Ålderhöst',
  'Ungvinter',
] as const
export type MonthNames = typeof month[number]

export type Month = {
  name: MonthNames
  days: Day[]
}

const numberOfMonths = (): 8 => 8

const dayNames = [
  'Soldag',
  'Måndag',
  'Bloddag',
  'Jorddag',
  'Växtdag',
  'Skördedag',
  'Stilledag',
] as const
export type DayNames = typeof dayNames[number]

export const getMonthName = (monthNumber: number): MonthNames =>
  month[monthNumber % 8]

export const getDayName = (dayNumber: number): DayNames =>
  dayNames[dayNumber % 7]

export const getDayNumber = (dayName: DayNames): number => {
  switch (dayName) {
    case 'Stilledag':
      return 7
    case 'Skördedag':
      return 6
    case 'Växtdag':
      return 5
    case 'Jorddag':
      return 4
    case 'Bloddag':
      return 3
    case 'Måndag':
      return 2
    case 'Soldag':
    default:
      return 1
  }
}

export type Day = {
  number: number
  name: DayNames
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
    case 'Åldervinter':
    case 'Åldervår':
    case 'Ungsommar':
    case 'Åldersommar':
    case 'Ålderhöst':
      return 46
    default:
      return 45
  }
}

export type Calendar = {
  year: number
  months: {
    [k: number]: Month
    0: Month
    1: Month
    2: Month
    4: Month
    5: Month
    6: Month
    7: Month
    8: Month
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
      cal.cal.months[m] = {
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
