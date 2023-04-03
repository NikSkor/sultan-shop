import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InCart from '../Main/InCart/InCart';


const CartPage: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
  return (
    <>
      <Header/>
        <InCart/>
      <Footer/>
    </>
  )
}

export default CartPage;