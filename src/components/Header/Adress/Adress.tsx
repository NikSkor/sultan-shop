import React, { FC } from 'react';
import style from './Adress.module.scss';

interface AdressProps {
  title: string,
  description: string,
  children?: React.ReactNode
  titleColor: string,
  descrColor: string,
}

const Adress: FC<AdressProps> = ({title, description, titleColor, descrColor, children}) => {
  return (
    <div className={style.block}>
      {children}
      <div className={style.info}>
        <div className={style.title} style={{color: titleColor}}>{title}</div>
        <div className={style.description} style={{color: descrColor}}>{description}</div>
      </div>
    </div>
  )
}

export default Adress;