import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Catalog from './components/Pages/Catalog';
import Good from './components/Pages/Good';
import catalog from './catalog.json';



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Catalog/>}/>
        {catalog.map((item)=> {
          return <Route key={item.barcode} path={`/good=${item.barcode}`} element={<Good/>}/>
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
