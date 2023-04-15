import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';


const Catalog: FC = () => {

    // const location = useLocation();
    // const navigate = useNavigate();
    // navigate(location.pathname, {});

    const {cleanCounter} = userSlice.actions;
    const dispatch = useAppDispatch();

    dispatch(cleanCounter());
  return (
    <>
      <Header/>
        <Main/>
      <Footer/>
    </>
  )
}

export default Catalog;