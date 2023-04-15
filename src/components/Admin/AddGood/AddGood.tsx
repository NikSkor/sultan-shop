import React, { FC, useState } from 'react';
import style from './AddGood.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { userSlice } from '../../../store/reducers/UserSlice';
import { ICatNav, ICatalog } from '../../../interfaces/interfaces';


// interface ICatalog {
//   [index: string]: string | number | string[],
//   url: string,
//   name: string,
//   sizeType: string,
//   size: number,
//   barcode: number,
//   manufacturer: string,
//   brand: string,
//   description: string,
//   price: number,
//   type: string[]
// }

// interface ICatNav {
//   title: string,
//   id: string
// }


const AddGood: FC = () => {

  const catalogBase = useAppSelector(state => state.userReducer.catalog);

  const {catalogLoader} = userSlice.actions;

  const dispatch = useAppDispatch();

  let goodCatalog: ICatalog[] = [...catalogBase];

  const naviigate = useNavigate();


  const [url, setUrl] = useState('https://di9mr54a05a64.cloudfront.net/noimage.png');
  const [name, setName] = useState('Продукт');
  const [sizeType, setSizeType] = useState('мл');
  const [size, setSize] = useState(0);
  const [barcode, setBarcode] = useState(1000000000000);
  const [manufacturer, setManufacturer] = useState('Страна');
  const [brand, setBrand] = useState('ARAVIA');
  const [description, setDescription] = useState('Описание');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState(['body']);


  const brandList = useAppSelector(state => state.userReducer.brandArr);
  const categoriesList = useAppSelector(state => state.userReducer.categories);

  const categories: ICatNav[] = [...categoriesList];

  let brandArr: string[] = [...brandList];

  const selectHandler = (e: any) => {
    if (type.includes(e.target.value)){
      let newArr: string[] = [...type];
      let index = type.indexOf(e.target.value);
      newArr.splice(index, 1);
      setType([...newArr]);
    } else {
      setType([...type, e.target.value]);
    }
  };

  const barcodeHandler = (e: any) => {
    if (e.target.value.length <= 13) {
      for (let i = 0; i < catalogBase.length; i++) {
        if(+e.target.value === catalogBase[i].barcode) {
          setBarcode(catalogBase[catalogBase.length-1].barcode+1);
          return;
        }
      }
      setBarcode(+e.target.value); 
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    let object: ICatalog = {
      url: (url !== '') ? url : 'https://di9mr54a05a64.cloudfront.net/noimage.png',
      name: name,
      sizeType: sizeType,
      size: size,
      barcode: (barcode < 1000000000001) ? catalogBase[catalogBase.length-1].barcode+1 : barcode,
      manufacturer: manufacturer,
      brand: brand,
      description: description,
      price: price,
      type: type
    };

    goodCatalog.push(object);

    localStorage.clear()
    localStorage.setItem('catalog', JSON.stringify(goodCatalog));
    dispatch(catalogLoader(goodCatalog));

    naviigate('/admin');
  }

    
  return(
    <div className={style.page} data-testid='testAddGoodPage'>
      <div className='container'>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to='/*'>Главная</Link>
            </li>
          <li className={style.navItem}>
            <Link data-testid='testLinkBack' to='/admin'>Администратор</Link>
            </li>
          <li className={style.navItem}>Редактирование товара</li>

        </ul>

        <div className={style.form}>
          <label className={style.label} data-id='url'>
            Ссылка на картинку:
            <input className={style.inputs} data-testid='testUrl' type='text' value={url} onChange={(e) => {setUrl(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='name'>
            Название:
            <input className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='syzeType'>
            Тип размера:
            <select value={sizeType} data-testid='testSelect' onChange={(e) => {setSizeType(e.target.value)}}>
              <option value="мл">мл</option>
              <option value="г">г</option>
            </select>
          </label>
          
          <label className={style.label} data-id='size'>
            Вес или объём:
            <input className={style.inputs} type='number' value={size} onChange={(e) => {setSize(+e.target.value)}}/>
          </label>
          <label className={style.label} data-id='barcode'>
            Штрихкод 13 цифр:
            <input className={style.inputs} data-testid='testBarcode' type='number' value={barcode} onChange={(e) => {barcodeHandler(e)}}/>
          </label>
          <label className={style.label} data-id='manufacturer'>
            Производитель:
            <input className={style.inputs} type='text' value={manufacturer} onChange={(e) => {setManufacturer(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='brand'>
            Брэнд:
            <select value={brand} onChange={(e) => {setBrand(e.target.value)}}>
              {brandArr.map((item)=>{
                return <option key={item} value={item}>{item}</option>
              })}
            </select>
          </label>
          <label className={style.label} data-id='description'>
            Описание:
            <textarea className={style.textArea} value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
          </label>
          <label className={style.label} data-id='price'>
            Цена:
            <input className={style.inputs} type='number' value={price} onChange={(e) => {setPrice(+e.target.value)}}/>
          </label>
          <label className={style.label}>
            Тип ухода:
            <select className={style.select} multiple data-id='type' value={type} onChange={(e) => {selectHandler(e)}}>
              {categories.map((item)=>{
                return <option key={item.id} value={item.id}>{item.title}</option>
              })}
            </select>
          </label>
        </div>
      <button className={style.submit} onClick={(e) => {submitHandler(e)}}>Сохранить</button>
      <Link data-testid='testLink' to='/admin'>
        <button className={style.submit}>
          Назад
        </button>
      </Link>
      
      </div>
    </div>
  )
}

export default AddGood;