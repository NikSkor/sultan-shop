import React, { FC } from 'react';
import style from './HeaderBtn.module.scss';

interface BtnProps {
  text: string,
  children: React.ReactNode
}

const HeaderBtn: FC<BtnProps> = ({text, children}) => {
  return (
    <button className={style.btn}>
      <div className={style.text}>{text}</div>
      {children}
    </button>
  )
}

export default HeaderBtn;