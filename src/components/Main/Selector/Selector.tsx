import React, { ChangeEvent, FC } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import style from './Selector.module.scss';

interface ISelectors {
  title: string,
  value: string
}

interface ISelect {
  title: string,
  options: ISelectors[],
}




const Selector: FC<ISelect> = ({title, options}) => {
  const {sortGoods} = userSlice.actions;
  const dispatch = useAppDispatch();

  const chooseSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortGoods(e.target.value));
  };

  return (
    <div className={style.selectorBlock}>
      <div className={style.selectorTitle}>{title}</div>
      <select className={style.selector} defaultChecked={true} onChange={chooseSelector}>
        {options.map((option) => {
          return <option key = {option.title} value={option.title} className={style.option}>{option.value}</option>
        })}
      </select>
    </div>
  )
}

export default Selector;