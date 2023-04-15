import React, { FC, useState } from 'react';
import style from './EditPage.module.scss';
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


const EditPage: FC = () => {

  const catalogBase = useAppSelector(state => state.userReducer.catalog);
  const codeGood = useAppSelector(state => state.userReducer.editGood);

  const {catalogLoader} = userSlice.actions;
  const {setEditGood} = userSlice.actions;

  const dispatch = useAppDispatch();

  let goodCatalog: ICatalog[] = [...catalogBase];

  let navigate = useNavigate();

  let getParams = (catalog: ICatalog[], barcode: number) => {

    let object: ICatalog = {
      url: '',
      name: '',
      sizeType: '',
      size: 0,
      barcode: 0,
      manufacturer: '',
      brand: '',
      description: '',
      price: 0,
      type: []
    };


    catalog.forEach((item)=> {
      if(item.barcode === barcode) {
        Object.assign(object, item);
      }
    })
    return object;
  }

  let goodParam: ICatalog = getParams(catalogBase, codeGood);

  const [url, setUrl] = useState(goodParam.url);
  const [name, setName] = useState(goodParam.name);
  const [sizeType, setSizeType] = useState(goodParam.sizeType);
  const [size, setSize] = useState(goodParam.size);
  const [barcode, setBarcode] = useState(goodParam.barcode);
  const [manufacturer, setManufacturer] = useState(goodParam.manufacturer);
  const [brand, setBrand] = useState(goodParam.brand);
  const [description, setDescription] = useState(goodParam.description);
  const [price, setPrice] = useState(goodParam.price);
  const [type, setType] = useState(goodParam.type);


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
      url: url,
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

    

    for (let i = 0; i < goodCatalog.length; i++) {
      if (goodCatalog[i].barcode === codeGood) {
        goodCatalog.splice(i, 1);
        i -= 1;
      } 
    }

    goodCatalog.push(object);

    localStorage.clear()
    localStorage.setItem('catalog', JSON.stringify(goodCatalog));
    dispatch(catalogLoader(goodCatalog));

    navigate('/admin');
  }

    
  return(
    <div className={style.page}>
      <div className='container'>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to='/*'>Главная</Link>
            </li>
          <li className={style.navItem}>
            <Link to='/admin'>Администратор</Link>
            </li>
          <li className={style.navItem}>Редактирование товара</li>

        </ul>
        <h2 className={style.title}>{`${goodParam.brand} ${goodParam.name}`}</h2>

        <div className={style.form}>
          <label className={style.label} data-id='url'>
            Ссылка на картинку:
            <input className={style.inputs} type='text' value={url} onChange={(e) => {setUrl(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='name'>
            Название:
            <input className={style.inputs} type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
          </label>
          <label className={style.label} data-id='syzeType'>
            Тип размера:
            <select value={sizeType} onChange={(e) => {setSizeType(e.target.value)}}>
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
            <input className={style.inputs} type='number' value={barcode} onChange={(e) => {barcodeHandler(e)}}/>
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
        <Link to='/admin' onClick={() => {
        dispatch(setEditGood(0));
        }}>
        <button className={style.submit}>
          Назад
        </button>
      </Link>
      </div>
    </div>
  )
}

export default EditPage;