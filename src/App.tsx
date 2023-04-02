import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Catalog from './components/Pages/Catalog';
import Good from './components/Pages/Good';



const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Catalog/>}/>
        <Route path='/good' element={<Good/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
