import { useState } from 'react';

import { TableProps } from './TableProps';

/**
 * Returns the Table component.
 * @param props The component properties.
 * @returns The component.
 */
export const Table: React.FC<TableProps> = (props: TableProps): JSX.Element => {
  const { company, date, amount, currency, price } = props;
  const [stockAmount, setStockAmount] = useState(amount.toString());

  const calculateDividendYield = (price: number): number => {
    const decimal = /^[0-9]{1}\.[0-9]*/;
    const isDecimal = decimal.test(stockAmount);
    let num = !!stockAmount ? parseInt(stockAmount) : 0;

    if (isDecimal) {
      num = parseFloat(stockAmount);
    }

    return num/price;
  };

  const updateStockAmount = (value: string): void => {
    const num = Number(value);
    const isPositiveNumber = !isNaN(num) && num >= 0;
 
    if (isPositiveNumber) setStockAmount(value);
  };

  const formatDate = (value: string): string =>{
    const date = new Date(value);

    return date.toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <table>
      <caption className='tableCaption'>Table: Dividends</caption>
      <thead>
        <tr>
          <th>COMPANY</th>
          <th>DATE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
          <th>DIVIDEND YIELD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{company}</td>
          <td>{formatDate(date)}</td>
          <td>
            <input 
              type='text'
              value={stockAmount??amount}
              onChange={event => updateStockAmount(event.target.value)}
            />
          </td>
          <td>{currency}</td>
          <td>{calculateDividendYield(price)}</td>
        </tr>
      </tbody>
    </table>
  )
}