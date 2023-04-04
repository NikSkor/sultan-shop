import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Catalog from './components/Pages/Catalog';
import Good from './components/Pages/Good';
import catalog from './catalog.json';
import CartPage from './components/Pages/CartPage';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch } from './hooks/redux';
import AdminPage from './components/Pages/AdminPage';
import EditGood from './components/Pages/EditGood';
import AddGoodPage from './components/Pages/AddGoodPage';

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

  if(localStorage.getItem('catalog') === null || localStorage.catalog.length <= 2) {
    localStorage.setItem('catalog', JSON.stringify(catalog));
  }

    const doCatalog = () => {
      let catalogDownload: ICatalog[] = [];
      let key: string = 'catalog';

      if (localStorage.getItem(key) !== null) {
        let str: string | null = localStorage.getItem(key);
        if (str != null) {
          catalogDownload = JSON.parse(str);
        }
      }
    return catalogDownload;
  }

  let inCatalog: ICatalog[] = doCatalog();

  const {catalogLoader} = userSlice.actions;
  const dispatch = useAppDispatch();

  dispatch(catalogLoader(inCatalog));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Catalog/>}/>
        {inCatalog.map((item)=> {
          return <Route key={item.barcode} path={`/good=${item.barcode}`} element={<Good/>}/>
        })}
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/edit' element={<EditGood/>}/>
        <Route path='/add' element={<AddGoodPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
