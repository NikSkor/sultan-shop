import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import style from './GoodPage.module.scss';
import catalog from '../../../catalog.json';
import bottleImg from '../../../img/bottle.svg';
import boxImg from '../../../img/box.svg';
import cartImg from '../../../img/basket.svg';
import shareImg from '../../../img/share.svg';
import arrowImg from '../../../img/arrow-download.svg';
import { useParams, useSearchParams } from 'react-router-dom';



interface ICatalog {
  [index: string]: string | number | string[],
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

const GoodPage: FC = () => {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  let loc: string = document.location.pathname;
  let urlBarcode: number = +loc.slice(6);


  const barcode = useAppSelector(state => state.userReducer.goodsBarcode);

  let getParams = (catalog: ICatalog[], barcode: number, urlCode: number) => {
    if(barcode === 0) {
      barcode = urlCode
    }

    let object: ICatalog = {
      url: '',
      name: '',
      sizeType: '',
      size: 0,
      barcode: 0,
      manufacturer: '',
      brand: '',
      description: '',
      price: 0,
      type: []
    };


    catalog.forEach((item)=> {
      if(item.barcode === barcode) {
        Object.assign(object, item);
      }
    })
    return object;
  }

  let goodParam: ICatalog = getParams(catalog, barcode, urlBarcode);


  return (
    <div className={style.page}>
      <div className='container'>
        <ul className={style.navList}>
          <li className={style.navItem}>Главная</li>
          <li className={style.navItem}>Каталог</li>
          <li className={style.navItem}>{`${goodParam.brand} ${goodParam.name}`}</li>
        </ul>
        <div className={style.goodContainer}>
          <div className={style.imgBlock}>
            <img src={goodParam.url} alt="Картинка товара" />
          </div>
          <div className={style.goodBlock}>
            <p className={style.availability}>В наличии</p>
            <h2 className={style.title}>
              {`${goodParam.brand} ${goodParam.name}`}
            </h2>
            <div className={style.sizeBlock}>
              <img src={goodParam.sizeType === 'мл' ? bottleImg : boxImg} 
              alt="Значок тары" />
              <p className={style.sizeText}>
                {`${goodParam.size} ${goodParam.sizeType}`}
              </p>
            </div>
            <div className={style.priceBlock}>
              <p className={style.price}>{`${goodParam.price} ₸`}</p>
              <div className={style.control}>
                  <button className={style.controller}>-</button>
                  <div className={style.count}>1</div>
                  <button className={style.controller}>+</button>
                </div>
              <button className={style.btnCart}>
                <p>В корзину</p>
                <img src={cartImg} alt="Значок тележки для покупок"/>
              </button>
            </div>
            <div className={style.downloads}>
              <div className={style.downloadsImg}>
                <img src={shareImg} alt="Знвчок переслать" />
              </div>
              <div className={style.downloadsText}>
                При покупке от <span className={style.textSpan}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
              </div>
              <div className={style.downloadsPrice}>
                <p className={style.priceText}>Прайс-лист</p>
                <img src={arrowImg} alt="Значок скачать" />
              </div>
            </div>
            <div className={style.details}>
              <ul className={style.detailsList}>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Производитель:</p>
                  <p className={style.detailsValue}>{goodParam.manufacturer}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Брэнд:</p>
                  <p className={style.detailsValue}>{goodParam.brand}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Артикул:</p>
                  <p className={style.detailsValue}>{goodParam.barcode}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Штрихкод:</p>
                  <p className={style.detailsValue}>{goodParam.barcode}</p>
                </li>
              </ul>
            </div>
            <div className={style.description}>
              <h3 className={style.descriptionTitle}>Описание</h3>
              <div className={style.descriptionText}>{goodParam.description}</div>
            </div>
            <div className={style.params}>
              <h3 className={style.paramsTitle}>Характеристики</h3>
              <ul className={style.detailsList}>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Назначение:</p>
                  <p className={style.detailsValue}>{goodParam.brand}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Тип:</p>
                  <p className={style.detailsValue}>{goodParam.brand}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Производитель:</p>
                  <p className={style.detailsValue}>{goodParam.manufacturer}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Брэнд:</p>
                  <p className={style.detailsValue}>{goodParam.brand}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Артикул:</p>
                  <p className={style.detailsValue}>{goodParam.barcode}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Штрихкод:</p>
                  <p className={style.detailsValue}>{goodParam.barcode}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Вес:</p>
                  <p className={style.detailsValue}>{`${goodParam.size} ${goodParam.sizeType}`}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Объём:</p>
                  <p className={style.detailsValue}>{`${goodParam.size} ${goodParam.sizeType}`}</p>
                </li>
                <li className={style.detailsItem}>
                  <p className={style.detailsName}>Кол-во в коробке:</p>
                  <p className={style.detailsValue}>{`${goodParam.size} ${goodParam.sizeType}`}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodPage;