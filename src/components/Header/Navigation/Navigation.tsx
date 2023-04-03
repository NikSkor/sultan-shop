import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}><button>О компании</button></li>
      <li className={style.item}><button>Доставка и оплата</button></li>
      <li className={style.item}><button>Возврат</button></li>
      <li className={style.item}><button>Контакты</button></li>
      <li className={style.item}><button>
        <Link to='/admin'>Администратор</Link>
        </button></li>
    </ul>
  )
}

export default Navigation;