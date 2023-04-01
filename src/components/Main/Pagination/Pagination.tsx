import React, { FC } from 'react';
import style from './Pagination.module.scss';
import ArrowLeft from '../../../img/arrow-left.svg';
import ArrowRight from '../../../img/arrow-right.svg';


interface IPageNumbers {
  pagesSum: number,
  pageActive: number,
  getPage: Function
}


const Pagination: FC<IPageNumbers> = ({pagesSum, pageActive, getPage}) => {

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
    getPage(1);
  } else {
    getPage(pageActive-1);
  }
}

let pageNumRightHandler = (e : React.MouseEvent) => {
  e.preventDefault();
  if (pageActive + 1 === pagesSum) {
    getPage(pagesSum);
  } else {
    getPage(pageActive+1);
  }
}

let pagesArr: number[] = arrCreate(pagesSum);

  return (
    <div className={style.paginationBlock}>
      <button className={style.arrowLeft} onClick={pageNumLeftHandler}>
        <img src={ArrowLeft} alt="Стрелка влево" />
      </button>
      <ul className={style.list}>
        {
          pagesArr.map((item) => {
            return (item === pageActive) ? <li key={item} className={style.itemActive}>{item}</li> 
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