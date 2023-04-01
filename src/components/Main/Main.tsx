import React, { useState } from 'react'
import CategoriesNav from './CategoriesNav/CategoriesNav';
import CategoriesSubNav from './CategoriesSubNav/CategoriesSubNav';
import GoodsList from './GoodsList/GoodsList';
import style from './Main.module.scss';
import Selector from './Selector/Selector';
import SortForm from './SortForm/SortForm';
import catalog from '../../catalog.json';
import Pagination from './Pagination/Pagination';
import { useAppSelector } from '../../hooks/redux';

export default function Main() {
  const pageNumber = useAppSelector(state => state.userReducer.page);
  const type = useAppSelector(state => state.userReducer.type);

  const filterCatalog = (catalog: ICatalog[]) => {

    if (type ==='') return catalog;
    let newCatalog: ICatalog[] = [];

    catalog.forEach((item) => {
      if(item.type.includes(type)) {
        newCatalog.push(item);
      }
    });

    return newCatalog;
  }

  let goodsCatalog: ICatalog[] = filterCatalog(catalog);


  let paginSize: number = 9;
  let pages: number = 0;


  const paginateCatalog = (catalog: ICatalog[], paginSize: number, pageNumber: number)=> {

    let resultCatalog: ICatalog[] = [];
    pages = Math.ceil(catalog.length / paginSize);

    for (let i = 0;  i < catalog.length; i++) {
      if(paginSize*(pageNumber) <= catalog.length) {
        if (i+1+(pageNumber-1)*paginSize > paginSize*pageNumber) break;
      } else {
        if (i+1+(pageNumber-1)*paginSize > (paginSize*(pageNumber-1) + (catalog.length - (pageNumber-1)*paginSize)) ) break;
      }

      resultCatalog.push(catalog[i+(pageNumber-1)*paginSize]);
  }
    return resultCatalog;
  }

  let finalCatalog: ICatalog[] = paginateCatalog(goodsCatalog, paginSize, pageNumber);

  const updatePage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
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
      id: 'foots'
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
          <GoodsList options={finalCatalog}/>
          <Pagination pagesSum={pages} pageActive={pageNumber} getPage={updatePage}/>
        </div>
      </div>
      </div>
    </div>
  )
}
