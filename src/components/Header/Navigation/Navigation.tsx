import React, { FC } from 'react'
import style from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}><a href="#">О компании</a></li>
      <li className={style.item}><a href="#">Доставка и оплата</a></li>
      <li className={style.item}><a href="#">Возврат</a></li>
      <li className={style.item}><a href="#">Контакты</a></li>
    </ul>
  )
}

export default Navigation;