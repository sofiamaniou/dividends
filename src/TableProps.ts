/**
 * Interface for the Table component.
 */
export interface TableProps {
  /**
   * The company id.
   */
  company: string;

  /**
   * The dividends date.
   */
  date: string;

  /**
   * The dividends amount.
   */
  amount: number;

  /**
   * The dividends currency.
   */
  currency: string;

  /**
   * The stock price.
   */
  price: number;
}
