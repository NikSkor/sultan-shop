import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GoodPage from './components/Main/GoodPage/GoodPage';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Header/>
      {/* <Main/> */}
      <GoodPage/>
      <Footer/>
    </>
  )
}

export default App;
