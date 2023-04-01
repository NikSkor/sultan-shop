import React, { FC } from 'react';
import Search from '../../Header/Search/Search';
import style from './SortForm.module.scss';
import trashImg from '../../../img/trash.svg';

const SortForm: FC = () => {
  return (
    <div className={style.form}>
      <div className={style.priceSort}>
        <h3 className={style.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <div className={style.price}>Цена<p className={style.currency}>₸</p></div>
        <div className={style.priceRangeBlock}>
          <input type="number" className={style.inputNumber}/>
          <p className={style.simbol}>-</p>
          <input type="number" className={style.inputNumber}/>
        </div>
      </div>
      <div className={style.brandSort}>
        <h3 className={style.title} style={{marginBottom: '15px'}}>Бренд</h3>
        <Search/>
        <div className={style.checkboxBlock}>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            Aravia
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            BeautiX
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            Domix
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            Kora
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            Maslo Maslyanoe
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            Holy Beauty
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            PUREDERM
          </label>
          <label className={style.checkboxLabel}>
            <input type="checkbox"/>
            New Line
          </label>
        </div>
        <div className={style.submitBlock}>
          <button className={style.showBtn}>Показать</button>
          <button className={style.cleaneBtn}>
            <img src={trashImg} alt="Значок очистки" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default SortForm;