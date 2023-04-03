import React, { FC } from 'react';
import GoodCard from './GoodCard/GoodCard';
import style from './GoodsList.module.scss';
interface ICategory {
  options: ICatalog[]
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

const GoodsList: FC<ICategory> = ({options}) => {

  if (options.length!== 0) {
    return (
      <ul className={style.list}>
        {options.map((item) => {
          return <GoodCard key={item.barcode} option = {item} />
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