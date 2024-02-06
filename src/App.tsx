import { useMemo, useState } from 'react';

import { getResponse } from './Service.mockdata';
import { Response } from './Response';
import { Table } from './Table';
import { TableProps } from './TableProps';
import './App.css';

const STOCK_IDS = ['ABC', 'DEF', 'GHI'];

/**
 * Returns the App root component.
 * @returns The root component.
 */
export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response | undefined>();
  const [selectedStockId, setSelectedStockId] = useState(STOCK_IDS[0]);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response = await getResponse(selectedStockId);
      setResponse(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const mapResponseToTableProps = (response?: Response): TableProps => {
    return {
      company: response?.input?? "",
      date: response?.dividends[0].date ?? "",
      amount: response?.dividends[0].amount ?? 0,
      currency: response?.dividends[0].ccy ?? "",
      price: response?.price ?? 0
    };
  }

  const props = useMemo(() => mapResponseToTableProps(response), [response]);
  const showDividendsTable = !!response && !isLoading ? <Table {...props} /> : null;

  return (
    <>
      <div className='verticalContainer'>
        <div className='horizontalContainer'>
          <label htmlFor='stockIds' className='dropdownLabel'><strong>Stock identifier:</strong></label>
          <select name='stockIds' id='stockIds' onChange={event => setSelectedStockId(event.target.value)}>
            {STOCK_IDS.map(id => <option key={id}>{id}</option>)}
          </select>
          <button
            type='button'
            onClick={fetchData}
            disabled={isLoading}>LOAD</button>
        </div>
        {showDividendsTable}
      </div>
    </>
  );
}

export default App
