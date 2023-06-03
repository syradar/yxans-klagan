import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

interface MapState {
  source: 'ravland' | 'bitterReach'
}

// Define the initial state using that type
export const initialMapState: MapState = {
  source: 'ravland',
}

const mapSlice = createSlice({
  name: 'map',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialMapState,
  reducers: {
    setSource(state, action: PayloadAction<MapState['source']>) {
      state.source = action.payload
    },
  },
})

export const { setSource } = mapSlice.actions

export const selectSource = (state: RootState) => state.map.source

export default mapSlice.reducer
