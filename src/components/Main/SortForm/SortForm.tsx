import React, { FC } from 'react';
import Search from '../../Header/Search/Search';
import style from './SortForm.module.scss';
import trashImg from '../../../img/trash.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';

const SortForm: FC = () => {
  
  const brands = useAppSelector(state => state.userReducer.search);
  const brandsFilter = useAppSelector(state => state.userReducer.brand);
  const minPriceInput = useAppSelector(state => state.userReducer.minPriceInput);
  const maxPriceInput = useAppSelector(state => state.userReducer.maxPriceInput);
  const brandList = useAppSelector(state => state.userReducer.brandArr);

  let brandArr: string[] = [...brandList];

  const filterBrand = (brands: string[], name: string) => {
    if(name === '') return brands;

    let searchBrands: string[] = [];

      brands.forEach((item: string) => {
      if(item.toLowerCase().includes(name.toLocaleLowerCase())) {
        searchBrands.push(item);
      }
    });
    return searchBrands;
  }

  brandArr = filterBrand(brandArr, brands);

  const {filterBrands} = userSlice.actions;
  const {filterCatalogBrands} = userSlice.actions;
  const {clearBrands} = userSlice.actions;
  const {clearSearch} = userSlice.actions;
  const {inputMinPrice} = userSlice.actions;
  const {inputMaxPrice} = userSlice.actions;
  const {minPrice} = userSlice.actions;
  const {maxPrice} = userSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <div className={style.form}>
      <div className={style.priceSort}>
        <h3 className={style.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        <div className={style.price}>Цена<p className={style.currency}>₸</p></div>
        <div className={style.priceRangeBlock}>
          <input 
            data-testid = 'testNumberFrom'
            type="number" 
            className={style.inputNumber}
            value = {minPriceInput}
            onChange={(e) => {
              dispatch(inputMinPrice(e.target.value));
            }}
            />
          <p className={style.simbol}>-</p>
          <input 
            data-testid = 'testNumberTo'
            type="number" 
            className={style.inputNumber}
            value = {maxPriceInput}
            onChange={(e) => {
              dispatch(inputMaxPrice(e.target.value));
            }}
            />
        </div>
      </div>
      <div className={style.brandSort}>
        <h3 className={style.title} style={{marginBottom: '15px'}}>Бренд</h3>
        <Search/>
        <div className={style.checkboxBlock}>
          {brandArr.map((item) => {
            return (
              <label key={item} className={style.checkboxLabel}>
                <input 
                type="checkbox"
                data-id = {item}
                checked = {
                  (brandsFilter.includes(item))
                  ? true
                  : false
                }
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
            onClick={(e)=> {
              e.preventDefault();
              if (brandsFilter.length !== 0){
                dispatch(filterCatalogBrands());
              };
              
              dispatch(minPrice());
              dispatch(maxPrice());
            }}
            >Показать</button>
          <button 
            className={style.cleaneBtn}
            onClick={(e)=> {
              dispatch(clearBrands());
              dispatch(clearSearch());
            }}
            >
            <img src={trashImg} alt="Значок очистки" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default SortForm;