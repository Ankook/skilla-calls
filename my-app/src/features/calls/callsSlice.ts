import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export const fetchGetListOfCalls = createAsyncThunk(
  "user/registration",
  (dto: any) => {
      return register(dto);
  }
);



export interface initi {
  value: number
}

const initialState: CallsSlice = {
  value: 0,
}

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetListOfCalls.pending.type]: (state: initialStateType) => {
      state.isLoad = true;
    },
    [fetchGetListOfCalls.fulfilled.type]: (state: initialStateType, action) => {
      state.isLoad = false;
      state.error = {};
      let { id, login, telegramId, role } = action.payload;
      [state.userId, state.login, state.telegramId, state.role, state.isAuth] = [id, login, telegramId, role, true];
    },
    [fetchGetListOfCalls.rejected.type]: (state: initialStateType, action) => {
      state.isLoad = false;
      state.error = action.error;
    },
  }
})

// Action creators are generated for each case reducer function
export const { } = callsSlice.actions

export default callsSlice.reducer








