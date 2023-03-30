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


const Header: FC = () => {
  return (
    <div className={style.header}>
      <div className={style.upline}>
        <div className={`container ${style.uplineBody}`}>
          <div className={style.contacts}>
            <div className={style.block}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.99992 1.66675C8.23181 1.66675 6.53612 2.36913 5.28587 3.61937C4.03563 4.86961 3.33325 6.5653 3.33325 8.33342C3.33325 9.91008 3.66825 10.9417 4.58325 12.0834L9.99992 18.3334L15.4166 12.0834C16.3316 10.9417 16.6666 9.91008 16.6666 8.33342C16.6666 6.5653 15.9642 4.86961 14.714 3.61937C13.4637 2.36913 11.768 1.66675 9.99992 1.66675V1.66675Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={style.info}>
                <div className={style.title}>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
                <div className={style.description}>(Рынок Восточный)</div>
              </div>
            </div>
            <div className={style.block}>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.37508 0.333252H14.6251C15.3169 0.333207 15.9824 0.59788 16.4853 1.07298C16.9881 1.54808 17.2901 2.19758 17.3293 2.88825L17.3334 3.04158V10.9583C17.3335 11.65 17.0688 12.3156 16.5937 12.8184C16.1186 13.3213 15.4691 13.6233 14.7784 13.6624L14.6251 13.6666H3.37508C2.6833 13.6666 2.01772 13.402 1.51489 12.9269C1.01205 12.4518 0.71008 11.8023 0.670915 11.1116L0.666748 10.9583V3.04158C0.666703 2.3498 0.931376 1.68423 1.40647 1.18139C1.88157 0.678558 2.53108 0.376584 3.22175 0.337419L3.37508 0.333252H14.6251H3.37508ZM16.0834 4.81075L9.29175 8.38575C9.21506 8.42626 9.13078 8.45037 9.04427 8.45654C8.95776 8.46271 8.87091 8.4508 8.78925 8.42159L8.70925 8.38658L1.91675 4.81158V10.9583C1.91676 11.3242 2.05439 11.6768 2.30231 11.9461C2.55024 12.2153 2.89033 12.3815 3.25508 12.4116L3.37508 12.4166H14.6251C14.9912 12.4166 15.3439 12.2788 15.6132 12.0307C15.8824 11.7826 16.0485 11.4423 16.0784 11.0774L16.0834 10.9583V4.81075ZM14.6251 1.58325H3.37508C3.00909 1.58327 2.65648 1.72089 2.38726 1.96882C2.11803 2.21674 1.95186 2.55683 1.92175 2.92159L1.91675 3.04158V3.39908L9.00008 7.12659L16.0834 3.39825V3.04158C16.0834 2.67546 15.9456 2.32274 15.6975 2.0535C15.4494 1.78425 15.1091 1.61817 14.7442 1.58825L14.6251 1.58325Z" fill="#3F4E65"/>
              </svg>
              <div className={style.info}>
                <a href="mailto:opt.sultan@mail.ru" className={style.title}>opt.sultan@mail.ru</a>
                <div className={style.description}>На связи в любое время</div>
              </div>
            </div>
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
          <Search/>
          </div>
          <div className={style.userService}>
            <Support/>
            <HeaderBtn text='Прайс-лист'>
              <img className={style.icon} src={downloadImg} alt="Значок каталога" />
            </HeaderBtn>
            <Cart/>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Header;