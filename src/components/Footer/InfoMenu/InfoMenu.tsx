import React, { FC } from 'react';
import style from './InfoMenu.module.scss';
import MenuItem from './MenuItem/MenuItem';

interface IMenu {
  title: string,
  id: string
}

interface MenuItems {
  title: string,
  items: IMenu[],
}


const InfoMenu: FC<MenuItems> = ({title, items}) => {
  return (
    <div className={style.menuBlock}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {items.map((item) => {
          return <MenuItem key = {item.id} item = {item.title} />
        })}
      </ul>
    </div>
  )
}

export default InfoMenu;