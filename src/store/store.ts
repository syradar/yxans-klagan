import { StateFromReducersMapObject, configureStore } from '@reduxjs/toolkit'
import calendarSlice, {
  localStorageCalendarState,
} from '../features/calendar/calendar-slice'
import gearSlice from '../features/gear/gear-slice'
import mapSlice, { localStorageMapState } from '../features/map/map-slice'
import translationSlice from './translations/translation.slice'

const rootReducer = {
  gear: gearSlice,
  translation: translationSlice,
  calendar: calendarSlice,
  map: mapSlice,
}
export type RootState = StateFromReducersMapObject<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

store.subscribe(() => {
  const state = store.getState()

  localStorageMapState.save(state.map)
  localStorageCalendarState.save(state.calendar)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
