import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './InCart.module.scss';
import catalog from '../../../catalog.json';
import CartItem from './CartItem/CartItem';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';

interface ICart {
  code: number,
  count: number
}

interface ICatalog {
  url: string,
  name: string,
  sizeType: string,
  size: number,
  barcode: number,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
  type: string[]
}

const InCart: FC = () => {
  const cart = useAppSelector(state => state.userReducer.cart);

  const filterCatalog = (catalog: ICatalog[], cart: ICart[]) => {
    let newCatalog: ICatalog[] = [];
    for (let i = 0; i < catalog.length; i++) {
      for (let j = 0; j < cart.length; j++) {
        if (catalog[i].barcode === cart[j].code) {
          newCatalog.push(catalog[i]);
        }
      }
    }
    return newCatalog;
  }

  let goodCatalog: ICatalog[] = filterCatalog(catalog, cart);

    let cartPrice = (catalog: ICatalog[], cart: ICart[]) => {
    let price: number = 0;

    for (let i = 0; i < catalog.length; i++) {
      for (let j = 0; j < cart.length; j++) {
        if (catalog[i].barcode === cart[j].code) {
          let nums = catalog[i].price * cart[j].count;
          price += nums;
        }
      }
    }
    return price;
  }

  let cartSum = cartPrice(catalog, cart);

  const {clearCart} = userSlice.actions;

  const dispatch = useAppDispatch();

  return(
    <div className={style.page}>
      <div className='container'>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to='/*'>Главная</Link>
            </li>
          <li className={style.navItem}>Корзина</li>
        </ul>
        <h2 className={style.title}>Корзина</h2>
        <ul className={style.list}>
          {goodCatalog.map((item) => {
            return <CartItem key={item.barcode} options = {item}/>
          })}
      </ul>
      <div className={style.offerBlock}>
        <button 
          className={style.offerBtn}
          onClick = {(e) => {
            e.preventDefault();
            dispatch(clearCart());
          }}
          >Оформить заказ</button>
        <p className={style.price}>{`${cartSum} ₸`}</p>
      </div>
      </div>
    </div>
  )

}

export default InCart;