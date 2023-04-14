import React, { FC } from 'react'
import style from './Header.module.scss';
import HeaderBtn from './HeaderBtn/HeaderBtn';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import downloadImg from '../../img/download.svg';
import Search from './Search/Search';
import Support from './Support/Support';
import Cart from './Cart/Cart';
import pointImg from '../../img/point.svg';
import letterImg from '../../img/letter.svg';
import Adress from './Adress/Adress';
import Mail from './Mail/Mail';
import callBackImg from '../../img/callBack.png';
import sandwichBtn from '../../img/sandwich.svg';


const Header: FC = () => {

  return (
    <section className={style.headerBlock} id='testHeader'>
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
              isHeader = {true} 
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
          <HeaderBtn text='Каталог' isHeader={true}>
            <svg className={style.icon} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="currentColor"/>
              <path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="currentColor"/>
              <path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="currentColor"/>
              <path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="currentColor"/>
            </svg>
          </HeaderBtn>
          <Search isDisabled={true} isHeader={true}/>
          <Support isHeader={true} telColor='#111111' textColor='#3F4E65' alItems='flex-end'>
            <div className={style.imgContainer}>
              <img className={style.img} src={callBackImg} alt="Изображение оператора технической поддержки" />
            </div>
          </Support>
          <HeaderBtn text='Прайс-лист' isPrice={true}>
            <img className={style.icon} src={downloadImg} alt="Значок прайс листа" />
          </HeaderBtn>
          <Cart/>
          <img className={style.sandwichBtn} src={sandwichBtn} alt='Значок меню'/>
        </div>
      </div>
    </section>
  )
}

export default Header;