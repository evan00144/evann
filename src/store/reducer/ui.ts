/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  theme: string
}

// Define the initial state using that type
const initialState: CounterState = {
  theme: 'dark',
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { toggleTheme } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer