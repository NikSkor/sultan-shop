import React, { FC } from 'react';
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const AdminPage: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
  return (
    <>
      <Header/>
        <Admin/>
      <Footer/>
    </>
  )
}

export default AdminPage;