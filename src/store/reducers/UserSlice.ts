import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  type: string,
  page: number
}

const initialState: UserState = {
  type: '',
  page: 1
};

export const userSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
});

export default userSlice.reducer;