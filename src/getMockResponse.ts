import { Response } from "./Response";

type Stock = {
  [id: string]: Response;
};

const API_RESPONSE_PAYLOAD: Stock = {
  'ABC': {
    input: 'ABC',
    dividends: [
      {
        date: '2024-03-01',
        amount: 1,
        ccy: 'EUR'
      }
    ],
    price: 20,
  },
  'DEF': {
    input: 'DEF',
    dividends: [
      {
        date: '2024-06-01',
        amount: 2,
        ccy: 'USD'
      }
    ],
    price: 50,
  },
  'GHI': {
    input: 'GHI',
    dividends: [
      {
        date: '2024-06-15',
        amount: 0.5,
        ccy: 'EUR'
      }
    ],
    price: 20,
  }
};

export const getMockResponse = (id: string): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(API_RESPONSE_PAYLOAD[id]);
    }, 100);
  });
};
