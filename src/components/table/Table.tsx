import { FC } from 'react';
import { ITableProps } from "./TableTypes";

const Table: FC<ITableProps> = ({ headers, rows }) => {
  return (
    <div className="table__wrapper">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            {headers.map(({id, text}) => <th key={id} className="table__text">{text}</th>)}
          </tr>
        </thead>
        <tbody className="table__body">
          {rows.map(({
                       id,
                       article,
                       name,
                       brand = {name: 'Brand'},
                       price,
                       quantity
                     }, index) => (
            <tr key={id} className="table__row">
              <td className="table__text table__body-item">{index + 1}</td>
              <td className="table__text table__body-item">{id}</td>
              <td className="table__text table__body-item">{article}</td>
              <td className="table__text table__body-item">{name}</td>
              <td className="table__text table__body-item">{brand?.name}</td>
              <td className="table__text table__body-item">{price}</td>
              <td className="table__text table__body-item">{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
