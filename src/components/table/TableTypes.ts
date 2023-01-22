export interface IBrandProps {
  id: number;
  name: string;
}

export interface ITableRowProps {
  id: number;
  article: string;
  name: string;
  brand: IBrandProps | null;
  price: number;
  quantity: number;
}

export interface ITableHeaderProps {
  id: number;
  text: string;
}

export interface ITableProps {
  headers: ITableHeaderProps[];
  rows: ITableRowProps[];
}
