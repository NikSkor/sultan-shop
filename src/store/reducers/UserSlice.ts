import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  type: string,
  page: number,
  sort: string,
  search: string,
  brand: string[],
  brandFilter: string[]
}

const initialState: UserState = {
  type: '',
  page: 1,
  sort: 'brand',
  search: '',
  brand: [],
  brandFilter: []
};

export const userSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
      state.brand.length = 0;
      state.brandFilter.length = 0;
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    sortGoods(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    searchBrands(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    filterBrands(state, action: PayloadAction<string>) {
      if (state.brand.includes(action.payload)) {
        let i:number =state.brand.indexOf(action.payload);
        state.brand.splice(i, 1);
      } else {
        state.brand.push(action.payload);
      }
    },
    filterCatalogBrands(state, action: PayloadAction<string[]>) {
      state.brandFilter.length = 0;
      state.brandFilter = [...state.brandFilter, ...action.payload];
    }
  }
});

export default userSlice.reducer;