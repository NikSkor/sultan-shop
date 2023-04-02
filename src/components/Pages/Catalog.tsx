import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';


const Catalog = () => {

    const location = useLocation();
    const navigate = useNavigate();
    navigate(location.pathname, {}); 

  return (
    <>
      <Header/>
        <Main/>
      <Footer/>
    </>
  )
}

export default Catalog;