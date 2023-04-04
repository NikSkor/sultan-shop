/* eslint-disable react-hooks/exhaustive-deps */
import CategoriesNav from './CategoriesNav/CategoriesNav';
import CategoriesSubNav from './CategoriesSubNav/CategoriesSubNav';
import GoodsList from './GoodsList/GoodsList';
import style from './Main.module.scss';
import Selector from './Selector/Selector';
import SortForm from './SortForm/SortForm';
import Pagination from './Pagination/Pagination';
import { useAppSelector } from '../../hooks/redux';

interface ICatalog {
  [index: string]: string | number | string[],
  url: string,
  name: string,
  sizeType: string,
  size: number,
  barcode: number,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
  type: string[]
}

interface ISelectors {
  title: string,
  value: string
}

interface ICatNav {
  title: string,
  id: string
}

export default function Main() {
  const pageNumber = useAppSelector(state => state.userReducer.page);
  const type = useAppSelector(state => state.userReducer.type);
  const sortName = useAppSelector(state => state.userReducer.sort);
  const brandsArray = useAppSelector(state => state.userReducer.brandFilter);
  const minPrice = useAppSelector(state => state.userReducer.minPrice);
  const maxPrice = useAppSelector(state => state.userReducer.maxPrice);
  const catalogBase = useAppSelector(state => state.userReducer.catalog);
  const categoriesList = useAppSelector(state => state.userReducer.categories);

  const categories: ICatNav[] = [...categoriesList];
  let goodCatalog: ICatalog[] = [...catalogBase];

  const priceFilter = (catalog: ICatalog[], min: number, max: number) => {
    if (min === 0 && max === 0) return catalog;
    let newCatalog: ICatalog[] = [];

    catalog.forEach((item) => {
      if(item.price >= min && item.price <= max) {
        newCatalog.push(item);
      }
    });

    return newCatalog;
  };

  let goodsCatalog: ICatalog[] = priceFilter(goodCatalog, minPrice, maxPrice);


  const brandsFilter = (catalog: ICatalog[], brandsArray: string[]) => {
    let newCatalog: ICatalog[] = [];
    if (brandsArray.length === 0) return catalog;

    for (let i = 0; i < catalog.length; i++) {
      for (let j = 0; j < brandsArray.length; j++) {
        if(catalog[i].brand === brandsArray[j])
        newCatalog.push(catalog[i]);
      }
    }

    return newCatalog;
  }

  goodsCatalog = brandsFilter(goodsCatalog, brandsArray);

  const filterCatalog = (catalog: ICatalog[]) => {

    if (type ==='') return catalog;
    let newCatalog: ICatalog[] = [];

    catalog.forEach((item) => {
      if(item.type.includes(type)) {
        newCatalog.push(item);
      }
    });

    return newCatalog;
  }

  goodsCatalog = filterCatalog(goodsCatalog);

  let sortCatalog = (catalog: ICatalog[], name: string) => {

  if(name === 'name' || name === 'brand') {
    const key = name;
    catalog = catalog.sort((item1, item2) => item1[key] > item2[key] ? 1 : -1);
  }

  if(name === 'toUp') {
    const key = 'price';
    catalog = catalog.sort((item1, item2) => item1[key] > item2[key] ? 1 : -1);
  }

  if(name === 'toDown') {
    const key = 'price';
    catalog = catalog.sort((item1, item2) => item1[key] < item2[key] ? 1 : -1);
  }
    return catalog;
}

  goodsCatalog = sortCatalog(goodsCatalog, sortName);


  let paginSize: number = 9;
  let pages: number = 0;


  const paginateCatalog = (catalog: ICatalog[], paginSize: number, pageNumber: number)=> {

    let resultCatalog: ICatalog[] = [];
    pages = Math.ceil(catalog.length / paginSize);

    for (let i = 0;  i < catalog.length; i++) {
      if(paginSize*(pageNumber) <= catalog.length) {
        if (i+1+(pageNumber-1)*paginSize > paginSize*pageNumber) break;
      } else {
        if (i+1+(pageNumber-1)*paginSize > (paginSize*(pageNumber-1) + (catalog.length - (pageNumber-1)*paginSize)) ) break;
      }

      resultCatalog.push(catalog[i+(pageNumber-1)*paginSize]);
  }
    return resultCatalog;
  }

  goodsCatalog = paginateCatalog(goodsCatalog, paginSize, pageNumber);

  const updatePage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };


  const selectors: ISelectors[]  = [
    {
      title: 'brand',
      value: 'Брэнд'
    },
    {
      title: 'name',
      value: 'Название'
    },
    {
      title: 'toDown',
      value: 'По убыванию'
    },
    {
      title: 'toUp',
      value: 'По возрастанию'
    }
  ];

  return (
    <div className={style.main}>
      <div className='container'>
        <h1 className='visually-hidden'>Sultan - интернет магазин косметики</h1>
        <ul className={style.navList}>
          <li className={style.navItem}>Главная</li>
          <li className={style.navItem}>Косметика и гигиена</li>
        </ul>
      <div className={style.sectorTitle}>
        <h2 className={style.title}>Косметика и гигиена</h2>
        <Selector title='Сортировка:' options={selectors} />
      </div>
      <CategoriesNav options={categories}/>
      <div className={style.contentBlock}>
        <div className={style.sort}>
          <SortForm/>
          <CategoriesSubNav options={categories}/>
        </div>
        <div className={style.goods}>
          <GoodsList options={goodsCatalog}/>
          <Pagination pagesSum={pages} pageActive={pageNumber} getPage={updatePage}/>
        </div>
      </div>
      </div>
    </div>
  )
}
