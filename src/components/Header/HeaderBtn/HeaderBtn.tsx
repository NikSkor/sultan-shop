import React, { FC } from 'react';
import style from './HeaderBtn.module.scss';

interface BtnProps {
  text: string,
  children: React.ReactNode,
  isPrice?: boolean,
  isHeader?: boolean
}

const HeaderBtn: FC<BtnProps> = ({text, children, isPrice, isHeader}) => {
  return (
    <button className={`${style.btn} ${isPrice === true ? style.price : ''} ${isHeader === true ? style.btnCatalog : ''}`}>
      <div className={style.text}>{text}</div>
      {children}
    </button>
  )
}

export default HeaderBtn;