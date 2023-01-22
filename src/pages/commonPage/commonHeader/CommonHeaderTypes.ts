import { ITableRowProps } from "../../../components/table/TableTypes";
import { Dispatch, SetStateAction } from "react";

export interface IGoodProps {
  searchArticles: string[];
}

export interface ICommonHeaderProps {
  setGoods: Dispatch<SetStateAction<ITableRowProps[]>>;
}
