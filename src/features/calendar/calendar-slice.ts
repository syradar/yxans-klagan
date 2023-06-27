import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { z } from 'zod'
import { range } from '../../functions/array.functions'
import {
  ForbiddenLandsDateSerializable,
  isMonthIndex,
} from '../../models/forbidden-lands-date.model'
import { RootState } from '../../store/store'
import { createStateStorage } from '../../store/persist/state-storage'
import { isString } from '../../functions/utils.functions'

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

const monthQuarterSchema = z.record(
  z.preprocess(
    jsonNumberPreprocessor,

    z.number().min(1).max(46),
  ),
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

export const calendarStateSchema = z.object({
  currentYear: currentYearSchema,
  currentMonth: monthIndexSchema,
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

export const { nextMonth, previousMonth, toggleQuarter } = calendarSlice.actions

export const selectCalendar = createSelector(
  (state: RootState) => state.calendar,
  (calendar) => calendar,
)

export const selectQuarter = (date: ForbiddenLandsDateSerializable) =>
  createSelector(
    selectCalendar,
    (calendar) => calendar.quarters[date.year]?.[date.monthIndex]?.[date.day],
  )

export default calendarSlice.reducer
function spendQuarter(quarters: DayQuarters): DayQuarters {
  const spent = (quarters.filter((q) => q).length + 1) % 5

  return [
    ...range(spent).map((_) => true),
    ...range(4 - spent).map((_) => false),
  ] as DayQuarters
}
