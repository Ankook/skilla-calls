import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getListOfCalls } from '../../api/calls';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchGetListOfCalls = createAsyncThunk(
  "calls/getListOfCalls",
  (dto: any) => {
      return getListOfCalls(dto);
  }
);



const initialState = {
  value: null as number | null,
  calls: [] as Array<ICall>,
  isLoad: false as boolean,  
};

export type initialStateType = typeof initialState



export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetListOfCalls.pending.type]: (state: initialStateType) => {
    },
    [fetchGetListOfCalls.fulfilled.type]: (state: initialStateType, action) => {
      
    },
    [fetchGetListOfCalls.rejected.type]: (state: initialStateType, action) => {
      
  }
})

// Action creators are generated for each case reducer function
export const { } = callsSlice.actions

export default callsSlice.reducer








