import { fireEvent, render, screen } from "@testing-library/react";

import { Table } from "./Table";
import { TableProps } from "./TableProps";

describe('Table', () => {
  let props: TableProps;

  beforeEach(() => {
    props = {
      company: 'ABC',
      date: '2024-03-01',
      amount: 1,
      currency: 'EUR',
      price: 20
    };
  });

  it('should render table data correctly.', () => {
    // Arrange
    const expectedDate = '1 March 2024';
    const expectedDividendYield = props.amount/props.price;

    // Act
    render(<Table {...props} />);

    const company = screen.getByText('COMPANY');
    const date = screen.getByText('DATE');
    const amount = screen.getByText('AMOUNT');
    const currency = screen.getByText('CURRENCY');
    const dividendYield = screen.getByText('DIVIDEND YIELD');

    const value1 = screen.getByText(props.company);
    const value2 = screen.getByText(expectedDate);
    const value3 = screen.getByDisplayValue(props.amount);
    const value4 = screen.getByText(props.currency);
    const value5 = screen.getByText(expectedDividendYield);

    // Assert
    expect(company).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(dividendYield).toBeInTheDocument();

    expect(value1).toBeInTheDocument();
    expect(value2).toBeInTheDocument();
    expect(value3).toBeInTheDocument();
    expect(value4).toBeInTheDocument();
    expect(value5).toBeInTheDocument();
  });

  it('should update amount when typing number with decimal point.', () => {
    // Arrange
    const newAmount = 0.5;

    // Act
    render(<Table {...props} />);

    const amount = screen.getByDisplayValue(props.amount);
    fireEvent.change(amount, { target: { value: newAmount } });

    const currenctAmount = screen.getByDisplayValue(newAmount);

    // Assert
    expect(currenctAmount).toBeInTheDocument();
  });

  it('should update amount when typing number without decimal point.', () => {
    // Arrange
    const newAmount = 2;

    // Act
    render(<Table {...props} />);

    const amount = screen.getByDisplayValue(props.amount);
    fireEvent.change(amount, { target: { value: newAmount } });

    const currenctAmount = screen.getByDisplayValue(newAmount);

    // Assert
    expect(currenctAmount).toBeInTheDocument();
  });

  it('should not update amount when typing an invalid number.', () => {
    // Arrange
    const newAmount = 'invalid';

    // Act
    render(<Table {...props} />);

    const amount = screen.getByDisplayValue(props.amount);
    fireEvent.change(amount, { target: { value: newAmount } });

    const currenctAmount = screen.queryByDisplayValue(newAmount);

    // Assert
    expect(currenctAmount).not.toBeInTheDocument();
  });

  it('should recalculate dividend yield when changing amount.', () => {
    // Arrange
    const newAmount = 4;
    const expectedDividendYield = newAmount/props.price;

    // Act
    render(<Table {...props} />);

    const amount = screen.getByDisplayValue(props.amount);
    fireEvent.change(amount, { target: { value: newAmount } });

    const dividendYield = screen.getByText(expectedDividendYield);

    // Assert
    expect(dividendYield).toBeInTheDocument();
  });
});