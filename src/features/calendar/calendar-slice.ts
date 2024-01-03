import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { None, Option, Some } from 'ts-results'
import { z } from 'zod'
import { range } from '../../functions/array.functions'
import { isString } from '../../functions/utils'
import {
  CalendarDay,
  ForbiddenLandsDate,
  ForbiddenLandsDateClass,
  ForbiddenLandsDateSerializable,
  daysInMonth,
  isMonthIndex,
  monthNumber,
} from '../../models/forbidden-lands-date'
import { createStateStorage } from '../../store/persist/state-storage'
import { RootState } from '../../store/store'

const jsonNumberPreprocessor = (val: unknown) => {
  if (!isString(val)) {
    return val
  }

  const parsed = parseInt(val, 10)

  if (isNaN(parsed)) {
    return val
  }

  return parsed
}

const dayQuartersSchema = z.tuple([
  z.boolean(),
  z.boolean(),
  z.boolean(),
  z.boolean(),
])
export type DayQuarters = z.infer<typeof dayQuartersSchema>

const dayNumberSchema = z.preprocess(
  jsonNumberPreprocessor,

  z.number().min(1).max(46),
)

const monthQuarterSchema = z.record(
  dayNumberSchema,
  dayQuartersSchema.or(z.undefined()),
)

const monthIndexSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
])

const monthIndexJsonSchema = z.union([
  z.literal('0'),
  z.literal('1'),
  z.literal('2'),
  z.literal('3'),
  z.literal('4'),
  z.literal('5'),
  z.literal('6'),
  z.literal('7'),
])

const yearQuarterSchema = z.record(
  monthIndexJsonSchema,
  monthQuarterSchema.or(z.undefined()),
)

const currentYearSchema = z.preprocess(jsonNumberPreprocessor, z.number().int())

const quatersSchema = z.record(
  currentYearSchema,
  yearQuarterSchema.or(z.undefined()),
)
export type Quarters = z.infer<typeof quatersSchema>

export const calendarStateSchema = z.object({
  currentYear: currentYearSchema,
  currentMonth: monthIndexSchema,
  currentDay: dayNumberSchema,
  quarters: quatersSchema,
})
export type CalendarState = z.infer<typeof calendarStateSchema>

const CALENDAR_STATE_STORAGE_KEY = 'calendarState'
export const localStorageCalendarState = createStateStorage<CalendarState>({
  key: CALENDAR_STATE_STORAGE_KEY,
  label: 'CALENDAR',
  schema: calendarStateSchema,
})

// Define the initial state using that type
const initialCalendarState: CalendarState = {
  currentYear: 1165,
  currentMonth: 0,
  currentDay: 1,
  quarters: {},
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: localStorageCalendarState.load().unwrapOr(initialCalendarState),
  reducers: {
    nextMonth: (state, _action: PayloadAction) => {
      const newMonth = (state.currentMonth + 1) % 8

      if (!isMonthIndex(newMonth)) {
        return
      }

      if (newMonth === 0) {
        state.currentYear += 1
      }

      state.currentMonth = newMonth
    },
    previousMonth: (state, _action: PayloadAction) => {
      if (state.currentMonth === 0) {
        state.currentYear -= 1
        state.currentMonth = 7
      } else {
        state.currentMonth -= 1
      }
    },
    nextDay: (state, _action: PayloadAction) => {
      const newDay = state.currentDay + 1

      const isNextMonth = daysInMonth[state.currentMonth] < newDay

      if (isNextMonth) {
        state.currentDay = 1

        const newMonth = (state.currentMonth + 1) % 8

        if (!isMonthIndex(newMonth)) {
          return
        }

        if (newMonth === 0) {
          state.currentYear += 1
        }

        state.currentMonth = newMonth
      } else {
        state.currentDay = newDay
      }
    },
    previousDay: (state, _action: PayloadAction) => {
      const newDay = state.currentDay - 1

      const isPreviousMonth = newDay === 0

      if (isPreviousMonth) {
        let month = state.currentMonth
        let year = state.currentYear

        if (month === 0) {
          year -= 1
          month = 7
        } else {
          month -= 1
        }

        if (isMonthIndex(month)) {
          state.currentDay = daysInMonth[month]
          state.currentYear = year
          state.currentMonth = month
        }
      } else {
        state.currentDay = newDay
      }
    },
    toggleQuarter: (
      state,
      action: PayloadAction<ForbiddenLandsDateSerializable>,
    ) => {
      const { year, monthIndex, day } = action.payload

      state.quarters[year] = {
        ...state.quarters[year],
        [monthIndex]: {
          ...state.quarters[year]?.[monthIndex],
          [day]: spendQuarter(
            state.quarters[year]?.[monthIndex]?.[day] ?? [
              false,
              false,
              false,
              false,
            ],
          ),
        },
      }

      return state
    },
  },
})

export const { nextMonth, previousMonth, toggleQuarter, nextDay, previousDay } =
  calendarSlice.actions

export const selectCalendar = createSelector(
  (state: RootState) => state.calendar,
  calendar => calendar,
)

const getQuarters = (
  fbl: ForbiddenLandsDateSerializable,
  quarters: Quarters,
): Option<DayQuarters> => {
  const year = quarters[fbl.year]
  if (!year) {
    return None
  }

  const month = year[fbl.monthIndex]
  if (!month) {
    return None
  }

  const day = month[fbl.day]
  if (!day) {
    return None
  }

  return Some(day)
}

const currentForbiddenLandsDate = (
  calendar: CalendarState,
): ForbiddenLandsDate =>
  new ForbiddenLandsDateClass({
    year: calendar.currentYear,
    monthIndex: calendar.currentMonth,
    day: calendar.currentDay,
    month: monthNumber(calendar.currentMonth),
  })

export const selectCurrentDate = createSelector(selectCalendar, calendar => {
  const currentDate = currentForbiddenLandsDate(calendar)

  return {
    currentDate,
    quarters: getQuarters(currentDate, calendar.quarters),
  }
})

export const selectCalendarDay = (day: CalendarDay) =>
  createSelector(selectCalendar, calendar => {
    const currentDate = currentForbiddenLandsDate(calendar)

    const dayDate: ForbiddenLandsDate = new ForbiddenLandsDateClass({
      day: day.number,
      month: day.monthNumber,
      year: day.year,
      monthIndex: day.month,
    })

    return {
      dayDate,
      isCurrentDate: dayDate.equals(currentDate),
      quarters: getQuarters(dayDate, calendar.quarters),
    }
  })

export default calendarSlice.reducer
function spendQuarter(quarters: DayQuarters): DayQuarters {
  const spent = (quarters.filter(q => q).length + 1) % 5

  return [
    ...range(spent).map(_ => true),
    ...range(4 - spent).map(_ => false),
  ] as DayQuarters
}
