export interface ICart {
  code: number;
  count: number;
}

export interface ICatalog {
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

export interface ICatNav {
  title: string,
  id: string
}

export interface ICategories {
  options: ICatNav[]
}

export interface ICategoryArr {
  options: ICatalog[]
}

export interface ICategory {
  options: ICatalog
}