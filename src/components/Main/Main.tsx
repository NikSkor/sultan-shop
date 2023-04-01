import React from 'react'
import CategoriesNav from './CategoriesNav/CategoriesNav';
import CategoriesSubNav from './CategoriesSubNav/CategoriesSubNav';
import GoodsList from './GoodsList/GoodsList';
import style from './Main.module.scss';
import Selector from './Selector/Selector';
import SortForm from './SortForm/SortForm';
import catalog from '../../catalog.json';

export default function Main() {

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

  // let infoCatalog: ICatalog[] = JSON.parse(catalog).map(Object.values);
  // console.log('infoCatalog: ', infoCatalog);

  interface ISelectors {
    title: string,
    value: string
  }

  interface ICatNav {
  title: string,
  id: string
}

  const selectors: ISelectors[]  = [
    {
      title: 'name',
      value: 'Название'
    },
    {
      title: 'price',
      value: 'Цена'
    },
    {
      title: 'toLow',
      value: 'По убыванию'
    },
    {
      title: 'toGrow',
      value: 'По возрастанию'
    }
  ];

  const categories: ICatNav[]= [
    {
      title: 'Уход за телом',
      id: 'body'
    },
    {
      title: 'Уход за руками',
      id: 'hands'
    },
    {
      title: 'Уход за ногами',
      id: 'feets'
    },
    {
      title: 'Уход за лицом',
      id: 'face'
    },
    {
      title: 'Уход за волосами',
      id: 'hair'
    },
    {
      title: 'Средства для загара',
      id: 'sun'
    },
    {
      title: 'Средства для бритья',
      id: 'shave'
    },
    {
      title: 'Подарочные наборы',
      id: 'gift'
    },
    {
      title: 'Гигиеническая продукция',
      id: 'intimate'
    },
    {
      title: 'Гигиена полости рта',
      id: 'mouth'
    },
    {
      title: 'Бумажная продукция',
      id: 'paper'
    }
  ];

  return (
    <div className={style.main}>
      <div className='container'>
        <h1 className='visually-hidden'>Sultan - интернет магазин косметики</h1>
        <ul className={style.navList}>
          <li className={style.navItem}>Главная</li>
          <li className={style.navItem}>Косметика и гигиена</li>
      </ul>
      <div className={style.sectorTitle}>
        <h2 className={style.title}>Косметика и гигиена</h2>
        <Selector title='Сортировка:' options={selectors} />
      </div>
      <CategoriesNav options={categories}/>
      <div className={style.contentBlock}>
        <div className={style.sort}>
          <SortForm/>
          <CategoriesSubNav options={categories}/>
        </div>
        <div className={style.goods}>
          <GoodsList options={catalog}/>
        </div>
      </div>
      </div>
    </div>
  )
}