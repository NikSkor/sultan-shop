import React, { FC } from 'react';
import style from './GoodCard.module.scss';
import bottleImg from '../../../../img/bottle.svg';
import boxImg from '../../../../img/box.svg';
import cartImg from '../../../../img/basket.svg';
import { userSlice } from '../../../../store/reducers/UserSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../../interfaces/interfaces';


// interface ICategory {
//   option: ICatalog
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

const GoodCard: FC<ICategory> = ({options}) => {

  const {openGood} = userSlice.actions;
  const {addToCartOnCard} = userSlice.actions;


  const dispatch = useAppDispatch();

  return (
    <li className={style.item}>
      <img src={options.url} alt="Фото товара" className={style.goodsImg}/>
      <div className={style.sizeBlock}>
        <img src={options.sizeType === 'мл' ? bottleImg : boxImg} 
        alt="Значок тары" />
        <p className={style.sizeText}>
          {`${options.size} ${options.sizeType}`}
        </p>
      </div>
      <button className={style.goodTitle} onClick={()=> {
        dispatch(openGood(options.barcode));
      }}>
      <Link to={`/good=${options.barcode}`}>
        <h4 className={style.goodName}>
          {`${options.brand} ${options.name}`}
        </h4>
      </Link>
      </button>
      <div className={style.details}>
        <ul className={style.detailsList}>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Штрихкод:</p>
            <p className={style.detailsValue}>{options.barcode}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Производитель:</p>
            <p className={style.detailsValue}>{options.manufacturer}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Брэнд:</p>
            <p className={style.detailsValue}>{options.brand}</p>
          </li>
        </ul>
      </div>
      <div className={style.priceBlock}>
        <p className={style.price}>{`${options.price} ₸`}</p>
        <button 
          className={style.btnCart}
          onClick={(e)=> {
            e.preventDefault();
            dispatch(addToCartOnCard(options.barcode));
          }}
          >
          <p>В корзину</p>
          <img src={cartImg} alt="Значок тележки для покупок"/>
        </button>
      </div>
    </li>
  )
}

export default GoodCard;