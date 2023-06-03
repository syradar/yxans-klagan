import { Err, Ok, Result } from 'ts-results'
import { range } from '../functions/array.functions'
import { TranslationKey } from '../store/translations/translation.model'

const monthIndices = [0, 1, 2, 3, 4, 5, 6, 7] as const
export const isMonthIndex = (val: number): val is MonthIndex =>
  monthIndices.includes(val as MonthIndex)

export type MonthIndex = (typeof monthIndices)[number]

export const monthLabelDict: Record<
  MonthIndex,
  TranslationKey<'calendar'>
> = Object.freeze({
  0: 'calendar:WinterWane',
  1: 'calendar:SpringRise',
  2: 'calendar:SpringWane',
  3: 'calendar:SummerRise',
  4: 'calendar:SummerWane',
  5: 'calendar:AutumnRise',
  6: 'calendar:AutumnWane',
  7: 'calendar:WinterRise',
})

const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8] as const
const isMonthNumber = (val: number): val is MonthNumber =>
  monthNumbers.includes(val as MonthNumber)

type MonthNumber = (typeof monthNumbers)[number]

export const monthNumber = (monthIndex: MonthIndex): MonthNumber =>
  (monthIndex + 1) as MonthNumber

export const monthIndex = (monthNumber: MonthNumber): MonthIndex =>
  (monthNumber - 1) as MonthIndex

export const ForbiddenLandsInvalidDateFormatError = () =>
  new SyntaxError('Invalid date format: Should be YEAR-MONTH-DAY')

export const ForbiddenLandsMinDayError = (day: number) =>
  new RangeError(`Invalid day number. Got ${day}. Min is 1`)

export const ForbiddenLandsMaxDayError = (month: MonthNumber, day: number) =>
  new RangeError(
    `Invalid day number for month ${month}. Got ${day}. Max is ${
      daysInMonth[(month - 1) as MonthIndex]
    }`,
  )

export const ForbiddenLandsMonthError = (month: number) =>
  new RangeError(`Invalid month number. Got ${month}. Min is 1. Max is 8`)

const isValidMonthNumber = (
  monthNumber: number,
): Result<MonthNumber, Error> => {
  if (!isMonthNumber(monthNumber)) {
    return Err(ForbiddenLandsMonthError(monthNumber))
  }

  return Ok(monthNumber)
}

const daysInMonth: Readonly<Record<MonthIndex, 45 | 46>> = Object.freeze({
  0: 46,
  1: 45,
  2: 46,
  3: 46,
  4: 46,
  5: 45,
  6: 46,
  7: 45,
})

export const dayLabelDict: Readonly<
  Record<DayIndex, TranslationKey<'calendar'>>
> = Object.freeze({
  0: 'calendar:SunDay',
  1: 'calendar:MoonDay',
  2: 'calendar:BloodDay',
  3: 'calendar:EarthDay',
  4: 'calendar:GrowthDay',
  5: 'calendar:HarvestDay',
  6: 'calendar:StillDay',
})

const dayIndices = [0, 1, 2, 3, 4, 5, 6] as const
export type DayIndex = (typeof dayIndices)[number]
export const isDayIndex = (val: number): val is DayIndex =>
  dayIndices.includes(val as DayIndex)

export type DayNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7

export const integerRegex = /^-?\d*$/

export const safeParseInt = (val: string): Result<number, Error> => {
  if (!val) {
    return Err(new RangeError('No value provided'))
  }

  if (val === 'Infinity' || val === '-Infinity') {
    return Err(new RangeError('Invalid number: only work with finite numbers.'))
  }

  if (val.includes('.')) {
    return Err(new RangeError('Invalid number: does not work with floats.'))
  }

  if (!integerRegex.test(val)) {
    return Err(
      new SyntaxError('Invalid number: contains non-numeric characters.'),
    )
  }

  const parsed = parseInt(val, 10)
  const toNum = Number(val)

  if (isNaN(parsed) || isNaN(toNum)) {
    return Err(new RangeError('Invalid number: NaN.'))
  }

  return Ok(parsed)
}

/**
 * Parses a date string into a ForbiddenLandsDate
 * @param date YEAR-MONTH-DAY
 */
export const parseForbiddenLandsDate = (
  date: string,
): Result<ForbiddenLandsDateSerializable, Error> => {
  const splitDate = date.split('-')

  if (splitDate.length !== 3) {
    return Err(ForbiddenLandsInvalidDateFormatError())
  }

  const year = safeParseInt(splitDate[0])

  if (year.err) {
    return year
  }

  const month = safeParseInt(splitDate[1]).andThen(isValidMonthNumber)

  if (month.err) {
    return month
  }

  const day = safeParseInt(splitDate[2])

  if (day.err) {
    return day
  }

  const m = month.safeUnwrap()
  const monthIndex = (m - 1) as MonthIndex
  const dayRangeValid = day.andThen((d) => {
    if (d < 1) {
      return Err(ForbiddenLandsMinDayError(d))
    }

    const daysForMonth = daysInMonth[monthIndex]

    if (d > daysForMonth) {
      return Err(ForbiddenLandsMaxDayError(m, d))
    }

    return Ok(day)
  })

  if (dayRangeValid.err) {
    return dayRangeValid
  }

  return Ok({
    year: year.safeUnwrap(),
    month: month.safeUnwrap(),
    monthIndex,
    day: day.safeUnwrap(),
  })
}

export type ForbiddenLandsDateSerializable = {
  readonly year: number
  readonly month: MonthNumber
  readonly monthIndex: MonthIndex
  readonly day: number
}

export type ForbiddenLandsDate = ForbiddenLandsDateSerializable & {
  readonly toString: () => string
  readonly format: () => string
}

export class ForbiddenLandsDateClass implements ForbiddenLandsDate {
  readonly year: number
  readonly month: MonthNumber
  readonly monthIndex: MonthIndex
  readonly day: number

  constructor(
    date: ForbiddenLandsDateSerializable | ForbiddenLandsDate | string,
  ) {
    if (typeof date === 'string') {
      const parsed = parseForbiddenLandsDate(date)

      if (parsed.err) {
        throw parsed.val
      }

      date = parsed.val
    }

    this.year = date.year
    this.month = date.month
    this.monthIndex = date.monthIndex
    this.day = date.day
  }

  toString(): string {
    return `${this.year}-${this.month}-${this.day}`
  }

  format(): string {
    return `${this.year} ${this.month} ${this.day}`
  }

  serialize(): ForbiddenLandsDateSerializable {
    return {
      year: this.year,
      month: this.month,
      monthIndex: this.monthIndex,
      day: this.day,
    }
  }

  static deserialize(date: ForbiddenLandsDateSerializable): ForbiddenLandsDate {
    return new ForbiddenLandsDateClass(date)
  }

  static fromString(date: string): Result<ForbiddenLandsDate, Error> {
    return parseForbiddenLandsDate(date).map(
      (d) => new ForbiddenLandsDateClass(d),
    )
  }

  static fromSerializable(
    date: ForbiddenLandsDateSerializable,
  ): ForbiddenLandsDate {
    return new ForbiddenLandsDateClass(date)
  }
}

// export const getMonthName = (monthNumber: number): MonthNames =>
//   month[monthNumber % 8]

// export const getDayName = (dayNumber: number): DayNames =>
//   dayNames[dayNumber % 7]

// export const getDayNumber = (dayName: DayNames): number => {
//   switch (dayName) {
//     case 'StillDay':
//       return 7
//     case 'HarvestDay':
//       return 6
//     case 'GrowthDay':
//       return 5
//     case 'EarthDay':
//       return 4
//     case 'BloodDay':
//       return 3
//     case 'MoonDay':
//       return 2
//     case 'SunDay':
//     default:
//       return 1
//   }
// }

export const DEFAULT_START_YEAR = 1165
const MONTH_INDICES: MonthIndex[] = [0, 1, 2, 3, 4, 5, 6, 7]

export type MoonPhase = 'full' | 'new' | 'normal'

export type CalendarDay = {
  index: DayIndex
  number: number
  month: MonthIndex
  monthNumber: MonthNumber
  year: number
  quarters: [boolean, boolean, boolean, boolean]
  moonPhase: MoonPhase | undefined
}

const createDay = (
  number: number,
  month: MonthIndex,
  index: DayIndex,
  year: number,
): CalendarDay => ({
  index,
  number,
  month,
  year,
  monthNumber: monthNumber(month),
  quarters: [false, false, false, false],
  moonPhase: undefined,
})

const createDayIndex = (
  dayNumber: number,
  dayOffset: number,
  daysPassed: number,
): Result<DayIndex, Error> => {
  const dayIndex = (dayNumber + dayOffset + daysPassed) % 7
  if (!isDayIndex(dayIndex)) {
    return Err(new Error(`Invalid dayIndex: ${dayIndex}`))
  }

  return Ok(dayIndex)
}
export type CalendarMonth = {
  index: MonthIndex
  days: CalendarDay[]
}

export type Calendar = Readonly<{
  year: number
  startDay: DayIndex
  months: ReadonlyArray<CalendarMonth>
}>
const createCalendar = (
  year: number,
  startDay: DayIndex,
  months: ReadonlyArray<CalendarMonth>,
): Calendar => ({ year, startDay, months })
export const getCalendar = (
  startYear = DEFAULT_START_YEAR,
  startIndex?: DayIndex,
): Result<Calendar, Error> => {
  const dayOffset = startIndex ? startIndex : (startYear % 1165) % 7

  if (!isDayIndex(dayOffset)) {
    return Err(new Error(`Invalid dayOffset: ${dayOffset}`))
  }
  let daysPassed = 0
  const months = MONTH_INDICES.map((mIndex) => {
    const month = createMonth(mIndex, dayOffset, daysPassed, startYear)
    daysPassed += daysInMonth[mIndex]

    return month
  })

  return Result.all(...months).map((months) =>
    createCalendar(startYear, dayOffset, months),
  )
}

const createMonth = (
  index: MonthIndex,
  dayOffset: number,
  daysPassed: number,
  year: number,
): Result<CalendarMonth, Error> => {
  const res = Result.all(
    ...range(daysInMonth[index]).map((d) =>
      createDayIndex(d, dayOffset, daysPassed).map((i) =>
        createDay(d + 1, index, i, year),
      ),
    ),
  ).map((days) => ({ index, days }))

  return res
}

// export const getCal = (startYear = 1165, startDay?: DayNames): CalendarV4 => {
//   const dayOffset = startDay
//     ? getDayNumber(startDay) - 1
//     : (startYear % 1165) % 7

//   const cal = range(numberOfMonths()).reduce(
//     (calendar, m) => {
//       const monthName = getMonthName(m)
//       calendar.calendar.months.push(
//         createMonth(monthName, weatherDays, calendar.daysPassed, dayOffset),
//       )
//       calendar.daysPassed += dayInMonth(monthName)

//       return calendar
//     },

//     {
//       daysPassed: 0,
//       calendar: {
//         year: startYear,
//         months: [] as Month[],
//         temperatureUnit: TemperatureUnit.Metric,
//         startDay,
//       } as CalendarV4,
//     },
//   )

//   return cal.calendar
// }
