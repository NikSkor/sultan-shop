import React, { FC } from 'react';
import style from './Search.module.scss';

const Search: FC = () => {
  return (
    <form className={style.form}>
      <input className={style.searchInput} type="text" placeholder='Поиск...' />
      <button className={style.btn}>
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="39" height="39" rx="19.5" fill="#FFC85E"/>
          <path d="M27.5297 27.5294L24.0992 24.0928L27.5297 27.5294ZM26.0002 19.5C26.0002 21.2239 25.3154 22.8772 24.0964 24.0962C22.8775 25.3152 21.2242 26 19.5002 26C17.7763 26 16.123 25.3152 14.9041 24.0962C13.6851 22.8772 13.0002 21.2239 13.0002 19.5C13.0002 17.7761 13.6851 16.1228 14.9041 14.9038C16.123 13.6848 17.7763 13 19.5002 13C21.2242 13 22.8775 13.6848 24.0964 14.9038C25.3154 16.1228 26.0002 17.7761 26.0002 19.5V19.5Z" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  )
}

export default Search;