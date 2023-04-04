import React, { FC } from 'react';
import AddGood from '../Admin/AddGood/AddGood';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



const AddGoodPage: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
  return (
    <>
      <Header/>
        <AddGood/>
      <Footer/>
    </>
  )
}

export default AddGoodPage;