import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CallsSlice {
  value: number
}

const initialState: CallsSlice = {
  value: 0,
}

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = callsSlice.actions

export default callsSlice.reducer