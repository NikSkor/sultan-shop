import React, { FC } from 'react';
import style from './GoodCard.module.scss';
import bottleImg from '../../../../img/bottle.svg';
import boxImg from '../../../../img/box.svg';
import cartImg from '../../../../img/basket.svg';


interface ICat {
  option: ICatalog
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

const GoodCard: FC<ICat> = ({option}) => {

  console.log(option);
  return (
    <li className={style.item}>
      <img src={option.url} alt="Фото товара" className={style.goodsImg}/>
      <div className={style.sizeBlock}>
        <img src={option.sizeType === 'мл' ? bottleImg : boxImg} 
        alt="Значок тары" />
        <p className={style.sizeText}>
          {`${option.size} ${option.sizeType}`}
        </p>
      </div>
      <button className={style.goodTitle}>
        <h4 className={style.goodName}>
          {`${option.brand} ${option.name}`}
        </h4>
      </button>
      <div className={style.details}>
        <ul className={style.detailsList}>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Штрихкод:</p>
            <p className={style.detailsValue}>{option.barcode}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Производитель:</p>
            <p className={style.detailsValue}>{option.manufacturer}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.detailsName}>Брэнд:</p>
            <p className={style.detailsValue}>{option.brand}</p>
          </li>
        </ul>
      </div>
      <div className={style.priceBlock}>
        <p className={style.price}>{`${option.price} ₸`}</p>
        <button className={style.btnCart}>
          <p>В корзину</p>
          <img src={cartImg} alt="Значок тележки для покупок"/>
        </button>
      </div>
    </li>
  )
}

export default GoodCard;