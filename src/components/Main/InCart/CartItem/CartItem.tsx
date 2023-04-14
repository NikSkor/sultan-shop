import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import style from './CartItem.module.scss';
import bottleImg from '../../../../img/bottle.svg';
import boxImg from '../../../../img/box.svg';
import { userSlice } from '../../../../store/reducers/UserSlice';
import trashImg from "../../../../img/trash.svg";
import { ICart, ICatalog, ICategory } from '../../../../interfaces/interfaces';

// interface ICategory {
//   options: ICatalog
// }

// interface ICart {
//   code: number,
//   count: number
// }

// interface ICatalog {
//   url: string,
//   name: string,
//   sizeType: string,
//   size: number,
//   barcode: number,
//   manufacturer: string,
//   brand: string,
//   description: string,
//   price: number,
//   type: string[]
// }

const CartItem: FC<ICategory> = ({options}) => {
  const cart = useAppSelector(state => state.userReducer.cart);
  // let counter = useAppSelector(state => state.userReducer.counter);

    let cartPrice = (catalog: ICatalog, cart: ICart[]) => {
    let price: number = 0;

    for (let i = 0; i < cart.length; i++) {
      if (catalog.barcode === cart[i].code) {
        let nums = catalog.price * cart[i].count;
        price += nums;
      }
    }
    return price;
  }

  let cartSum = cartPrice(options, cart);

  let findCounter = (cart: ICart[], options: ICatalog) => {
    let count: number = 1;
    cart.forEach((item) => {
      if(item.code === options.barcode) {
        count = item.count;
      }
    })
    return count;
  }

  let countGood = findCounter(cart, options);

  const {cartCountIncrement} = userSlice.actions;
  const {cartCountDecrement} = userSlice.actions;
  const {deleteGood} = userSlice.actions;

  const dispatch = useAppDispatch();


  return(
    <li className={style.list}>
      <div className={style.item}>
        <div className={style.imgBlock}>
          <img src={options.url} alt="Картинка товара" />
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.sizeBlock}>
            <img src={options.sizeType === 'мл' ? bottleImg : boxImg} 
            alt="Значок тары" />
            <p className={style.sizeText}>
              {`${options.size} ${options.sizeType}`}
            </p>
          </div>
          <h2 className={style.title}>
            {`${options.brand} ${options.name}`}
          </h2>
          <div className={style.descriptionText}>{options.description}</div>
        </div>
        <div className={style.priceBlock}>
          <div className={style.control}>
            <button 
              className={style.controller}
              onClick={(e)=> {
                e.preventDefault();
                dispatch(cartCountDecrement(options.barcode));
              }}
              >-</button>
            <div className={style.count}>{countGood}</div>
            <button 
              className={style.controller}
              onClick={(e)=> {
                e.preventDefault();
                dispatch(cartCountIncrement(options.barcode));
              }}
            >+</button>
          </div>
          <p className={style.price}>{`${cartSum} ₸`}</p>
          <button 
            className={style.cleaneBtn}
            onClick={(e)=> {
              dispatch(deleteGood(options.barcode));
            }}
            >
            <img src={trashImg} alt="Значок очистки" />
          </button>
        </div>
      </div>
    </li>
  )

}

export default CartItem;