import React, { FC } from 'react';
import callBackImg from '../../../img/callBack.png';
import style from './Support.module.scss';

const Support: FC = () => {
  return (
    <div className={style.supportBlock}>
      <div className={style.info}>
        <a href="tel:+77774900091" className={style.tel}>+7 (777) 490-00-91</a>
        <p className={style.workTime}>время работы: 9:00-20:00</p>
        <button className={style.callBack}>Заказать звонок</button>
      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={callBackImg} alt="Изображение оператора технической поддержки" />
      </div>
    </div>

  )
}

export default Support;