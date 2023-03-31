import React, { FC } from 'react';
import style from './GoodsList.module.scss';

interface ISelectors {
  title: string,
  value: string
}

interface ISelect {
  title: string,
  options: ISelectors[],
}


const GoodsList: FC<ISelect> = ({title, options}) => {
  return (
    <ul className={style.list}>
      
    </ul>
    // <div className={style.selectorBlock}>
    //   <div className={style.selectorTitle}>{title}</div>
    //   <select className={style.selector} defaultChecked={true}>
    //     {options.map((option) => {
    //       return <option key = {option.title} value={option.title} className={style.option}>{option.value}</option>
    //     })}
    //   </select>
    // </div>
  )
}

export default GoodsList;