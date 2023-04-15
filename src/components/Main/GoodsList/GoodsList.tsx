import React, { FC } from 'react';
import GoodCard from './GoodCard/GoodCard';
import style from './GoodsList.module.scss';
import { ICategoryArr } from '../../../interfaces/interfaces';


const GoodsList: FC<ICategoryArr> = ({options}) => {

  if (options.length!== 0) {
    return (
      <ul className={style.list}>
        {options.map((item) => {
          return <GoodCard key={item.barcode} options = {item} />
        })}
      </ul>
    )
  } else {
    return (
      <h3>Товары не найдены</h3>
    )
  }


}

export default GoodsList;