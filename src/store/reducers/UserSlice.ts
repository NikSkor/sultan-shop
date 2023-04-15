import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICatalog, ICatNav } from '../../interfaces/interfaces';

interface UserState {
  catalog: ICatalog[],
  brandArr: string[],
  categories: ICatNav[],
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
  goodsBarcode: number,
  counter: number,
  cart: [
    {
      code: number,
      count: number
    }
  ],
  editGood: number,
}

const initialState: UserState = {
  catalog: [],
  brandArr: [
    'ARAVIA',
    'BeautiX',
    'DOMIX',
    'KORA',
    'MASLO MASLYANOE',
    'HOLY BEAUTY',
    'PUREDERM',
    'New Line'
  ],
  categories: [
    {
      title: 'Уход за телом',
      id: 'body'
    },
    {
      title: 'Уход за руками',
      id: 'hands'
    },
    {
      title: 'Уход за ногами',
      id: 'foots'
    },
    {
      title: 'Уход за лицом',
      id: 'face'
    },
    {
      title: 'Уход за волосами',
      id: 'hair'
    },
    {
      title: 'Средства для загара',
      id: 'sun'
    },
    {
      title: 'Средства для бритья',
      id: 'shave'
    },
    {
      title: 'Подарочные наборы',
      id: 'gift'
    },
    {
      title: 'Гигиеническая продукция',
      id: 'intimate'
    },
    {
      title: 'Гигиена полости рта',
      id: 'mouth'
    },
    {
      title: 'Бумажная продукция',
      id: 'paper'
    }
  ],
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
  goodsBarcode: 0,
  counter: 1,
  cart: [
    {
      code: 0,
      count: 0
    }
  ],
  editGood: 0,
};

export const userSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    catalogLoader(state, action: PayloadAction<ICatalog[]>) {
      state.catalog = action.payload;
    }
    ,
    getType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
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

      if(+state.minPriceInput < +state.maxPriceInput) {
        state.minPrice = +state.minPriceInput;
      } else if (+state.minPriceInput > +state.maxPriceInput) {
        state.minPrice = +state.maxPriceInput;
      } else {
        state.minPrice = +state.minPriceInput;
      }
    },
    maxPrice(state) {

      if(+state.maxPriceInput > +state.minPriceInput) {
        state.maxPrice = +state.maxPriceInput;
      } else if (+state.maxPriceInput < +state.minPriceInput) {
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
    openGood(state, action: PayloadAction<number>) {
      state.goodsBarcode = 0;
      state.goodsBarcode = action.payload;
    },
    countIncrement(state){
      console.log('zuzu');
      state.counter++;
    },
    countDecrement(state){
      
      if(state.counter <=0) {
        state.counter = 0;
      } else {
        state.counter--;
      }
    },
    addToCart(state, action: PayloadAction<number>) {
      if (state.cart[0].code === 0) {
        state.cart.splice(0, state.cart.length); 
      }

      let isDublicate = false;

      state.cart.forEach((item)=> {
        if(item.code === action.payload) {
          item.count = state.counter;
          isDublicate = true;
        }
      });

      if (!isDublicate) {
        let obj = {
            code: action.payload,
            count: state.counter
          }
        state.cart.push(obj);
      }
    },
    addToCartOnCard(state, action: PayloadAction<number>) {
      if (state.cart[0].code === 0) {
        state.cart.splice(0, state.cart.length); 
      }

      let isDublicate = false;

      state.cart.forEach((item)=> {
        if(item.code === action.payload) {
          item.count++;
          isDublicate = true;
        }
      });

      if (!isDublicate) {
        let obj = {
            code: action.payload,
            count: state.counter
          }
        state.cart.push(obj);
      }

    },
    cleanCounter(state){
      state.counter = 1;
    },
    cartCountIncrement(state, action: PayloadAction<number>) {
      for (let i = 0; i< state.cart.length; i++) {
        if(state.cart[i].code === action.payload) {
          state.cart[i].count++;
        }
      }
    },
    cartCountDecrement(state, action: PayloadAction<number>) {
      for (let i = 0; i< state.cart.length; i++) {
        if(state.cart[i].code === action.payload) {
          if (state.cart[i].count > 1){
            state.cart[i].count--;
          }
        }
      }
    },
    deleteGood(state, action: PayloadAction<number>) {
      for (let i = 0; i< state.cart.length; i++) {
        if(state.cart[i].code === action.payload) {
          state.cart.splice(i, 1);
          i -= 1;
        }
      }
    },
    clearCart(state) {
      state.cart = [
        {
          code: 0,
          count: 0
        }
      ]
    },
    setEditGood(state, action: PayloadAction<number>) {
      state.editGood = 0;
      state.editGood = action.payload;
    }
  }
});

export default userSlice.reducer;