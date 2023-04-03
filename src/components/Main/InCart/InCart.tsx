import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './InCart.module.scss';

interface ICategory {
  options: ICatalog[]
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
      </div>
    </div>
  )

}

export default InCart;