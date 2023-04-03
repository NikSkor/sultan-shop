import React, { FC } from 'react'
import style from './Header.module.scss';
import HeaderBtn from './HeaderBtn/HeaderBtn';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import catalogImg from '../../img/catalog.svg';
import downloadImg from '../../img/download.svg';
import Search from './Search/Search';
import Support from './Support/Support';
import Cart from './Cart/Cart';
import pointImg from '../../img/point.svg';
import letterImg from '../../img/letter.svg';
import Adress from './Adress/Adress';
import Mail from './Mail/Mail';
import callBackImg from '../../img/callBack.png';


const Header: FC = () => {

  return (
    <section className={style.headerBlock}>
      <div className={style.upline}>
        <div className={`container ${style.uplineBody}`}>
          <div className={style.contacts}>
            <Adress 
              title = 'г. Кокчетав, ул. Ж. Ташенова 129Б' 
              description='(Рынок Восточный)'
              titleColor='#111111' descrColor='#3F4E65'
              >
                <img src={pointImg} alt="Значок гео-точки"/>
            </Adress>
            <Mail 
              href='opt.sultan@mail.ru' 
              description='На связи в любое время'
              titleColor='#111111' descrColor='#3F4E65'
              >
                <img src={letterImg} alt="Значок почты"/>
            </Mail>
          </div>
          <div className={style.nav}>
            <Navigation/>
          </div>
        </div>
      </div>
      <div className={style.downline}>
        <div className={`container ${style.downlineBody}`}>
          <Logo/>
          <div className={style.goods}>
            <HeaderBtn text='Каталог'>
              <img className={style.icon} src={catalogImg} alt="Значок каталога" />
            </HeaderBtn>
            <Search isDisabled={true}/>
          </div>
          <div className={style.userService}>
            <Support telColor='#111111' textColor='#3F4E65' alItems='flex-end'>
              <div className={style.imgContainer}>
                <img className={style.img} src={callBackImg} alt="Изображение оператора технической поддержки" />
              </div>
            </Support>
            <HeaderBtn text='Прайс-лист'>
              <img className={style.icon} src={downloadImg} alt="Значок прайс листа" />
            </HeaderBtn>
            <Cart/>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Header;