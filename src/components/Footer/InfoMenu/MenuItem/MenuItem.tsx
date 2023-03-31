import React, { FC } from 'react';
import style from './MenuItem.module.scss';

interface MenuOneItem {
  item: string,
}

const MenuItem: FC<MenuOneItem> = ({item}) => {
  return (
    <li className={style.item}>
        <button className={style.itemBtn}>{item}</button>
      </li>
  )
}

export default MenuItem;