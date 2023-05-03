import {
  PreloadedState,
  StateFromReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit'
import { Err, None, Ok, Option, Result, Some } from 'ts-results'
import calendarSlice from '../features/calendar/calendar-slice'
import gearSlice from '../features/gear/gear-slice'
import translationSlice from './translations/translation.slice'

const safeJSONParse = <T extends object>(str: string): Result<T, Error> => {
  try {
    const parsed = JSON.parse(str)

    return Ok(parsed)
  } catch (e: unknown) {
    if (e instanceof SyntaxError) {
      return Err(e)
    }

    return Err(new Error('Unknown error'))
  }
}

const safeStorageGet = (key: string): Option<string> => {
  const value = sessionStorage.getItem(key)

  return value ? Some(value) : None
}

type SavedState = {
  savedAt: number
  state: RootState
}

const validateState = ({
  savedAt,
  state,
}: SavedState): Result<RootState, Error> => {
  const oneHourAgo = Date.now() - 1000 * 60 * 60
  if (savedAt < oneHourAgo) {
    return Err(new Error('State is too old'))
  }

  return Ok(state)
}

const rootReducer = {
  gear: gearSlice,
  translation: translationSlice,
  calendar: calendarSlice,
}
export type RootState = StateFromReducersMapObject<typeof rootReducer>
// ReturnType<typeof store.getState>

const savedState = safeStorageGet('reduxState')
  .toResult(new Error('Could not get reduxState from sessionStorage'))
  .andThen((s) => safeJSONParse<SavedState>(s))
  .andThen(validateState)

export const initStore = (
  preloadedState: Result<PreloadedState<RootState>, Error>,
) =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState.unwrapOr(undefined),
  })

export const store = initStore(savedState)

store.subscribe(() => {
  sessionStorage.setItem(
    'reduxState',
    JSON.stringify({
      savedAt: Date.now(),
      state: store.getState(),
    }),
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
