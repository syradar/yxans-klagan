import { StateFromReducersMapObject, configureStore } from '@reduxjs/toolkit'
import calendarSlice, {
  localStorageCalendarState,
} from '../features/calendar/calendar-slice'
import gearSlice from '../features/gear/gear-slice'
import journalSlice, {
  localStorageJournalState,
} from '../features/journal/journal-slice'
import mapSlice, {
  GameMap,
  localStorageMapState,
} from '../features/map/map-slice'
import { ForbiddenLandsDateSerializable } from '../models/forbidden-lands-date'
import translationSlice from './translations/translation.slice'

const rootReducer = {
  gear: gearSlice,
  translation: translationSlice,
  calendar: calendarSlice,
  map: mapSlice,
  journal: journalSlice,
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
  localStorageJournalState.save(state.journal)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// ! FUTURE STATE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FutureState = {
  users: User[]
  campaigns: Campaign[]
}

type User = {
  id: string
  name: string
}
type GM = User & {
  __type: 'gm'
}

type Player = User & {
  __type: 'player'
  character: {
    name: string
    id: string
  }
}
type CampaignMember = GM | Player

type Campaign = {
  id: string
  name: string
  users: CampaignMember[]
  map: GameMap
  journal: {
    sessions: {
      id: string
      name: string
      date: Date
      fblStartDate: ForbiddenLandsDateSerializable
      fblEndDate: ForbiddenLandsDateSerializable
    }[]
    explorationNotes: {
      id: string
      hexKey: string
      note: string
      createdAt: ForbiddenLandsDateSerializable
      updatedAt: ForbiddenLandsDateSerializable
    }[]
    sessionNotes: {
      id: string
      sessionId: string
      note: string
      createdAt: ForbiddenLandsDateSerializable
      updatedAt: ForbiddenLandsDateSerializable
    }[]
  }
}
