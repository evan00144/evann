/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'
// import { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  themeMode: string
}

// Define the initial state using that type
const initialState: CounterState = {
  themeMode: 'dark',
}

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode=state.themeMode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { toggleThemeMode } = uiSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default uiSlice.reducer