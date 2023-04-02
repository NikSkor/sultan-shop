import React, { FC } from 'react';
import Search from '../../Header/Search/Search';
import style from './SortForm.module.scss';
import trashImg from '../../../img/trash.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';

const SortForm: FC = () => {
  
  const brands = useAppSelector(state => state.userReducer.search);
  const brandsFilter = useAppSelector(state => state.userReducer.brand);

  let brandArr: string[] = [
    'ARAVIA',
    'BeautiX',
    'DOMIX',
    'KORA',
    'MASLO MASLYANOE',
    'HOLY BEAUTY',
    'PUREDERM',
    'New Line'
  ];

  const filterBrand = (brands: string[], name: string) => {
    if(name === '') return brands;

    let searchBrands: string[] = [];

      brands.forEach((item: string) => {
      if(item.includes(name)) {
        searchBrands.push(item);
      }
    });
    return searchBrands;
  }

  brandArr = filterBrand(brandArr, brands);

  const {filterBrands} = userSlice.actions;
  const {filterCatalogBrands} = userSlice.actions;

  const dispatch = useAppDispatch();

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
      <form className={style.brandSort}>
        <h3 className={style.title} style={{marginBottom: '15px'}}>Бренд</h3>
        <Search/>
        <div className={style.checkboxBlock}>
          {brandArr.map((item) => {
            return (
              <label key={item} className={style.checkboxLabel}>
                <input 
                type="checkbox"
                data-id = {item}
                onChange = {(e)=> {
                  let str: string | undefined = e.target.dataset['id'];
                  if(typeof str === 'string') {
                    dispatch(filterBrands(str));
                  }
                }}
                />
                  {item}
              </label>
              ) 
          })}
        </div>
        <div className={style.submitBlock}>
          <button 
            className={style.showBtn}
            onClick={()=> {
              dispatch(filterCatalogBrands(brandsFilter));
            }}
            >Показать</button>
          <button className={style.cleaneBtn}>
            <img src={trashImg} alt="Значок очистки" />
          </button>
        </div>

      </form>
    </div>
  )
}

export default SortForm;