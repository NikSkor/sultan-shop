import React, { FC } from 'react';
import style from './Support.module.scss';

interface SupportProps {
  children?: React.ReactNode,
  telColor: string,
  textColor: string,
  alItems : string,
  isHeader?: boolean
}

const Support: FC<SupportProps> = ({children, telColor, textColor, alItems, isHeader}) => {
  return (
    <div className={isHeader === true ? `${style.supportBlock} ${style.supportBlockHeader}` : style.supportBlock}>
      <div className={style.info} style={{alignItems: alItems}}>
        <a href="tel:+77774900091" className={style.tel} style={{color: telColor}}>+7 (777) 490-00-91</a>
        <p className={style.workTime} style={{color: textColor}}>время работы: 9:00-20:00</p>
        <button className={style.callBack} style={{color: textColor}}>Заказать звонок</button>
      </div>
      {children}
    </div>
  )
}

export default Support;