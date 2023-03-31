import React, { FC } from 'react';
import style from './InputMail.module.scss';

const InputMail: FC = () => {
  return (
    <form className={style.form}>
      <input className={style.searchInput} type="text" placeholder='Введите ваш E-mail' />
      <button className={style.btn}>
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="39" height="39" rx="19.5" fill="#FFC85E"/>
          <path d="M16 24.8571L21 19.5L16 14.1429L17 12L24 19.5L17 27L16 24.8571Z" fill="white"/>
        </svg>
      </button>
    </form>
  )
}

export default InputMail;