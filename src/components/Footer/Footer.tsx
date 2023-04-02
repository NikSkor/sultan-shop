import React, { FC } from 'react';
import HeaderBtn from '../Header/HeaderBtn/HeaderBtn';
import Logo from '../Header/Logo/Logo';
import style from './Footer.module.scss';
import InfoMenu from './InfoMenu/InfoMenu';
import InputMail from './InputMail/InputMail';
import downloadImg from '../../img/download.svg'
import { generateRandomId } from '../../utils/generateRandomId';
import whatsAppImg from '../../img/whatsApp.png';
import telegramImg from '../../img/telegram.png';
import visaImg from '../../img/visa.png';
import mcImg from '../../img/mc.png';
import Mail from '../Header/Mail/Mail';
import Support from '../Header/Support/Support';



interface IMenu {
  title: string,
  id: string
}

const siteMenuTitle = 'Меню сайта:';
const siteMenu: IMenu[] = [{title: 'О компании', 
id: generateRandomId()},
{title: 'Доставка и оплата', 
id: generateRandomId()},
{title: 'Возврат', 
id: generateRandomId()},
{title: 'Контакты', 
id: generateRandomId()}];
const categoryMenuTitle = 'Категории';
const categoryMenu: IMenu[] = [
{title: 'Бытовая химия', 
id: generateRandomId()},
{title: 'Косметика и гигиена', 
id: generateRandomId()},
{title: 'Товары для дома', 
id: generateRandomId()},
{title: 'Товары для детей и мам', 
id: generateRandomId()},
{title: 'Посуда', 
id: generateRandomId()}];

const Footer: FC = () => {
  return (
    <section className={style.footerBlock}>
      <div className={`container ${style.footerContainer}`}>
        <div className={style.company}>
          <Logo/>
          <div className={style.text}>Компания «Султан» — снабжаем розничные магазины товарами 
              "под ключ" в Кокчетаве и Акмолинской области</div>
          <p className={style.subText}>Подпишись на скидки и акции</p>
          <InputMail/>
        </div>

        <div className={style.footerMenu}>
          <InfoMenu title = {siteMenuTitle} items = {siteMenu}/>
          <InfoMenu title = {categoryMenuTitle} items = {categoryMenu}/>
          <div className={style.info}>
            <h2 className={style.menuTitle}>Скачать прайс-лист:</h2>
            <HeaderBtn text='Прайс-лист'>
              <img className={style.icon} src={downloadImg} alt="Значок прайс листа" />
            </HeaderBtn>
            <p className={style.socialText}>Связь в мессенджерах:</p>
            <div className={style.socials}>
              <button>
                <img src={whatsAppImg} alt="Значок WhatsApp"/>
              </button>
              <button>
                <img src={telegramImg} alt="Значок telegram"/>
              </button>
            </div>
          </div>
          <div className={style.contacts}>
            <h2 className={style.contactsTitle}>Контакты:</h2>
            <Support telColor='#FFFFFF' textColor='#FFFFFF' alItems='flex-start'/>
            <Mail 
              href='opt.sultan@mail.ru' 
              description='На связи в любое время'
              titleColor='#FFFFFF' descrColor='#FFFFFF'
              />
            <div className={style.banks}>
              <img src={visaImg} alt="visa"/>
              <img src={mcImg} alt="master card"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
