import React, { FC } from 'react';
import EditPage from '../Admin/EditPage/EditPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InCart from '../Main/InCart/InCart';


const EditGood: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
  return (
    <>
      <Header/>
        <EditPage/>
      <Footer/>
    </>
  )
}

export default EditGood;