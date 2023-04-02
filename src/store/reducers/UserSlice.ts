import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  type: string,
  page: number,
  sort: string,
  search: string,
  brand: string[],
  brandFilter: string[], 
  searchText: string,
  minPrice: number,
  maxPrice: number,
  minPriceInput: number | string,
  maxPriceInput: number | string,
}

const initialState: UserState = {
  type: '',
  page: 1,
  sort: 'brand',
  search: '',
  brand: [],
  brandFilter: [],
  searchText: '',
  minPrice: 0,
  maxPrice: 0,
  minPriceInput: '',
  maxPriceInput: '',
};

export const userSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
      // state.brand.length = 0;
      // state.brandFilter.length = 0;
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
    filterCatalogBrands(state) {
      state.brandFilter.length = 0;
      state.brandFilter = [...state.brandFilter, ...state.brand];
    },
    clearBrands(state){
      state.brandFilter.length = 0;
      state.brand.length = 0;
    },
    setSearchText(state, action: PayloadAction<string>){
      state.searchText = action.payload;
    },
    inputMinPrice(state, action: PayloadAction<number|string>) {
      if(action.payload === ''){
        state.minPriceInput = '';
      };

      if(+action.payload <= 0) {
        state.minPriceInput = '';
      } else {
        state.minPriceInput = +action.payload;
      }
    },
    inputMaxPrice(state, action: PayloadAction<number|string>) {
      if(action.payload === ''){
        state.maxPriceInput = '';
      };

      if(+action.payload <= 0) {
        state.maxPriceInput = '';
      } else {
        state.maxPriceInput = +action.payload;
      }

    },
    minPrice(state) {

      if(state.minPriceInput < +state.maxPriceInput) {
        state.minPrice = +state.minPriceInput;
      } else if (state.minPriceInput > +state.maxPriceInput) {
        state.minPrice = +state.maxPriceInput;
      } else {
        state.minPrice = +state.minPriceInput;
      }
    },
    maxPrice(state) {

      if(+state.maxPriceInput > +state.minPriceInput) {
        state.maxPrice = +state.maxPriceInput;
      } else if (state.maxPriceInput < +state.minPriceInput) {
        state.maxPrice = +state.minPriceInput;
      } else {
        state.maxPrice = +state.maxPriceInput;
      }
    },
    clearSearch(state) {
      state.search = '';
      state.searchText = '';
      state.minPriceInput = '';
      state.maxPriceInput = '';
      state.minPrice = 0;
      state.maxPrice = 0;
    },
  }
});

export default userSlice.reducer;