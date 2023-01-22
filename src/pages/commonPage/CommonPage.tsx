import { FC, useState } from "react";
import { TABLE_HEADERS } from "../../constants/common";
import { ITableRowProps } from "../../components/table/TableTypes";
import Table from "../../components/table/Table";
import CommonHeader from "./commonHeader/CommonHeader";

const CommonPage: FC = () => {
  const [goods, setGoods] = useState<ITableRowProps[]>([]);

  return (
    <div className="container common">
      <CommonHeader setGoods={setGoods} />
      <Table headers={TABLE_HEADERS} rows={goods} />
    </div>
  );
}

export default CommonPage;
