import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { range } from '../../functions/array.functions'
import { MonthIndex, isMonthIndex } from '../../models/calendar.model'
import { ForbiddenLandsDateSerializable } from '../../models/forbidden-lands-date.model'
import { RootState } from '../../store/store'

export type DayQuarters = [boolean, boolean, boolean, boolean]

interface Calendar {
  currentYear: number
  currentMonth: MonthIndex
  quarters: Partial<
    Record<
      number,
      Partial<Record<MonthIndex, Partial<Record<number, DayQuarters>>>>
    >
  >
}

// Define the initial state using that type
const initialState: Calendar = {
  currentYear: 1165,
  currentMonth: 0,
  quarters: {},
}

const calendarSlice = createSlice({
  name: 'calendar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    nextMonth: (state, _action: PayloadAction) => {
      console.log('nextMonth', _action)
      const newMonth = (state.currentMonth + 1) % 7

      console.log('nextMonth if index')
      if (!isMonthIndex(newMonth)) {
        console.log('nextMonth not index')

        return
      }

      if (newMonth === 0) {
        state.currentYear += 1
      }

      state.currentMonth = newMonth

      console.log(state.currentMonth)
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
