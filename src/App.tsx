import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Catalog from './components/Pages/Catalog';
import Good from './components/Pages/Good';
import catalog from './catalog.json';
import CartPage from './components/Pages/CartPage';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch } from './hooks/redux';

interface ICatalog {
  [index: string]: string | number | string[],
  url: string,
  name: string,
  sizeType: string,
  size: number,
  barcode: number,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
  type: string[]
}


const App = () => {

  useEffect(() => {
  localStorage.setItem('catalog', JSON.stringify(catalog));
}, []);

    const doCatalog = () => {
    // useEffect(() => {
      let catalog: ICatalog[] = [];
      let key: string = 'catalog';

      if (localStorage.getItem(key) !== null) {
        let str: string | null = localStorage.getItem(key);
        if (str != null) {
          catalog = JSON.parse(str);
        }
      }
    // }, [inCatalog]);
    return catalog;
  }

  let inCatalog: ICatalog[] = doCatalog();

  console.log(inCatalog);

  const {catalogLoader} = userSlice.actions;
  const dispatch = useAppDispatch();

  dispatch(catalogLoader(inCatalog));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Catalog/>}/>
        {catalog.map((item)=> {
          return <Route key={item.barcode} path={`/good=${item.barcode}`} element={<Good/>}/>
        })}
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
