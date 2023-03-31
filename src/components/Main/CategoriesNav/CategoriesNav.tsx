import React, { FC } from 'react';
import style from './CategoriesNav.module.scss';

interface ICatNav {
  title: string,
  id: number
}

interface ICategories {
  options: ICatNav[]
}


const CategoriesNav: FC<ICategories> = ({options}) => {
  return (
    <ul className={style.categoriesList}>
      {options.map(elem => {
        return <li key={elem.id} className={style.categoriesItem}>
            <button>
              {elem.title}
            </button>
          </li>
      })}
    </ul>
  )
}

export default CategoriesNav;