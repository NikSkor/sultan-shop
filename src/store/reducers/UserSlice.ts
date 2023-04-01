import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  type: string,
  page: number,
  sort: string
}

const initialState: UserState = {
  type: '',
  page: 1,
  sort: 'brand'
};

export const userSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    sortGoods(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    }
  }
});

export default userSlice.reducer;