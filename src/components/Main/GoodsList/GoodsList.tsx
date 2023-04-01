import React, { FC } from 'react';
import GoodCard from './GoodCard/GoodCard';
import style from './GoodsList.module.scss';
interface ICat {
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

const GoodsList: FC<ICat> = ({options}) => {

  return (
    <ul className={style.list}>
      {options.map((item) => {
        return <GoodCard key={item.barcode} option = {item} />
      })}
    </ul>
  )
}

export default GoodsList;