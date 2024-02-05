/**
 * Interface for the API response.
 */
export interface Response {
    /**
     * The company id.
     */
    input: string;
  
    /**
     * The dividends info.
     */
    dividends: [
      {
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
        ccy: string;
      }
    ];
  
    /**
     * The stock price.
     */
    price: number;
  }
  