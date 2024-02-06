import * as service from './Service.mockdata';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { App } from './App';
import { Response } from './Response';

describe('App', () => {
  let response: Response;

  beforeEach(() => {
    response = {
      input: 'ABC',
      dividends: [
        {
          date: '2024-03-01',
          amount: 1,
          ccy: 'EUR'
        }
      ],
      price: 20,
    };

    jest.spyOn(service, 'getResponse').mockResolvedValue(response);
  });

  it('should render label, dropdown and button.', () => {
    // Act
    render(<App />);

    const label = screen.getByText('Stock identifier:');
    const dropdown = screen.getByDisplayValue('ABC');
    const button = screen.getByText('LOAD');

    // Assert
    expect(label).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render dropdown with three options.', () => {
    // Act
    render(<App />);

    const option1 = screen.getByText('ABC');
    const option2 = screen.getByText('DEF');
    const option3 = screen.getByText('GHI');

    // Assert
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('should render table when clicking load button.', async () => {
    // Act
    render(<App />);

    const button = screen.getByText('LOAD');
    fireEvent.click(button);

    const table = await waitFor(() => screen.getByText('Table: Dividends'));

    // Assert
    expect(table).toBeInTheDocument();
  });

  it('should render table for the selected stock id.', async () => {
    // Arrange
    response.input = 'DEF';

    //Act
    render(<App />);

    const option2 = screen.getByText('DEF');
    fireEvent.click(option2);

    const button = screen.getByText('LOAD');
    fireEvent.click(button);

    await waitFor(() => screen.getByText('Table: Dividends'));

    const ids = screen.getAllByText('DEF');

    // Assert
    expect(ids.length).toEqual(2);
  });
});