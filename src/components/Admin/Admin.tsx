import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import style from './Admin.module.scss';
import trashImg from "../../img/delete.svg";
import { userSlice } from '../../store/reducers/UserSlice';
import { ICatalog } from '../../interfaces/interfaces';


const Admin: FC = () => {

  const catalogBase = useAppSelector(state => state.userReducer.catalog);

  const {catalogLoader} = userSlice.actions;
  const {setEditGood} = userSlice.actions;

  const dispatch = useAppDispatch();



  let goodCatalog: ICatalog[] = [...catalogBase];
  let oldCatalog : ICatalog[] = [...goodCatalog];
  


  const delHandler = (e: any) => {
    e.preventDefault();

    for (let i = 0; i < oldCatalog.length; i++) {
      if (oldCatalog[i].barcode === +e.target.dataset.id) {
        oldCatalog.splice(i, 1);
        i -= 1;
      } 
    }
    localStorage.clear()
    localStorage.setItem('catalog', JSON.stringify(oldCatalog));
    dispatch(catalogLoader(oldCatalog));
  }

  const navigate = useNavigate();

  const editHandler = (e: any) => {
    e.preventDefault();

    dispatch(setEditGood(+e.target.dataset.id));
    navigate('/edit')
  }
    
  return(
    <div className={style.page} data-testid='testAdminPage'>
      <div className='container'>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link data-testid='testBackLink' to='/*'>Главная</Link>
            </li>
          <li className={style.navItem}>Администратор</li>
        </ul>
        <h2 className={style.title}>Управление каталогом</h2>
        <h3 className={style.subTitle}>Список товаров</h3>
        <ul className={style.list}>
          {goodCatalog.map((item)=> {
            return <li key={item.barcode} className={style.item}>
                <h4 className={style.itemTitle}>{`${item.brand} ${item.name}`}</h4>
                <button className={style.redBtn} onClick={editHandler}>
                  <p data-id={item.barcode}>Редактировать</p>
                </button>
                <button className={style.delBtn} onClick={delHandler}>
                  <img src={trashImg} data-id={item.barcode} alt="Значок очистки"/>
                </button>
              </li>
          })}
        </ul>
        <Link to='/add' data-testid='testLinkSubmit'>
          <button className={style.submit}>
            Добавить
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Admin;