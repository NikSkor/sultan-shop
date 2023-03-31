import React from 'react'
import CategoriesNav from './CategoriesNav/CategoriesNav';
import style from './Main.module.scss';
import Selector from './Selector/Selector';

export default function Main() {

  interface ISelectors {
    title: string,
    value: string
  }

  interface ICatNav {
  title: string,
  id: number
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
      id: 1
    },
    {
      title: 'Уход за руками',
      id: 2
    },
    {
      title: 'Уход за ногами',
      id: 3
    },
    {
      title: 'Уход за лицом',
      id: 4
    },
    {
      title: 'Уход за волосами',
      id: 5
    },
    {
      title: 'Средства для загара',
      id: 6
    },
    {
      title: 'Средства для бритья',
      id: 7
    },
    {
      title: 'Подарочные наборы',
      id: 8
    },
    {
      title: 'Гигиеническая продукция',
      id: 9
    },
    {
      title: 'Гигиена полости рта',
      id: 10
    },
    {
      title: 'Бумажная продукция',
      id: 11
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
      
      </div>
    </div>
  )
}
