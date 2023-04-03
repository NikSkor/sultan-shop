import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import GoodPage from '../Main/GoodPage/GoodPage';


const Good: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
  return (
    <>
      <Header/>
        <GoodPage/>
      <Footer/>
    </>
  )
}

export default Good;