import React, { FC } from 'react';
import style from './Pagination.module.scss';
import ArrowLeft from '../../../img/arrow-left.svg';
import ArrowRight from '../../../img/arrow-right.svg';
import { userSlice } from '../../../store/reducers/UserSlice';
import { useAppDispatch } from '../../../hooks/redux';


interface IPageNumbers {
  pagesSum: number,
  pageActive: number,
  getPage: Function
}


const Pagination: FC<IPageNumbers> = ({pagesSum, pageActive, getPage}) => {
  
  const {newPage} = userSlice.actions;
  const dispatch = useAppDispatch();

  let arrCreate = (pages: number) => {
  let res: number[] = [1];

  if (pages === 0) res.length = 0;
  
  for (let i = 2; i <= pages; i++) {
    res.push(i);
  }

  return res;
  }

  let pageNumLeftHandler = (e : React.MouseEvent) => {
    e.preventDefault();
    if (pageActive - 1 === 0) {
      dispatch(newPage(1));
    } else {
      dispatch(newPage(pageActive-1));
    }
    getPage();
  }

  let pageNumRightHandler = (e : React.MouseEvent) => {
    e.preventDefault();
    if (pageActive + 1 === pagesSum) {
      dispatch(newPage(pagesSum));
    } else {
      dispatch(newPage(pageActive+1));
    }
    getPage();
  }

  let pagesArr: number[] = arrCreate(pagesSum);

  if (pagesSum === 0 || pagesSum === 1) return null;


  return (
    <div className={style.paginationBlock}>
      <button className={style.arrowLeft} onClick={pageNumLeftHandler}>
        <img src={ArrowLeft} alt="Стрелка влево" />
      </button>
      <ul className={style.list}>
        {
          pagesArr.map((item) => {
            return (item === pageActive) ? <li key={item} className={`${style.item} ${style.itemActive}`}>{item}</li> 
            : <li key={item} className={style.item}>{item}</li>
          })
        }
      </ul>
      <button onClick={pageNumRightHandler}>
        <img src={ArrowRight} alt="Стрелка вправо" />
      </button>
    </div>
    
  )
}

export default Pagination;