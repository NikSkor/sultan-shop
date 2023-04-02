import React, { FC } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import style from './CategoriesNav.module.scss';

interface ICatNav {
  title: string,
  id: string
}

interface ICategories {
  options: ICatNav[]
}

const CategoriesNav: FC<ICategories> = ({options}) => {

  const {getType} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <ul className={style.categoriesList}>
      {options.map(elem => {
        return <li key={elem.id} className={style.categoriesItem}>
            <button data-type = {elem.id} onClick = {()=> dispatch(getType(elem.id))}>
              {elem.title}
            </button>
          </li>
      })}
    </ul>
  )
}

export default CategoriesNav;