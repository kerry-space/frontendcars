import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import CarList from './component/carComponent/CarList';




describe('CarList', () => {
  // Mock data and functions
  const cars = [
    { ID: 1, Name: 'Electric Dream', Model: 'E-200', Color: 'Sky Blue' },
    { ID: 2, Name: 'Future Ride', Model: 'F-550', Color: 'Metallic Silver' }
  ];

  const onDelete = jest.fn();
  const refreshCars = jest.fn();

  // Test to check if the CarList renders correctly
  it('renders cars and allows interactions', () => {
    render(<CarList cars={cars} onDelete={onDelete} refreshCars={refreshCars} />);

    // Check if the car names and models are rendered
    expect(screen.getByText('Electric Dream')).toBeInTheDocument();
    expect(screen.getByText(/E-200/)).toBeInTheDocument();
    expect(screen.getByText('Future Ride')).toBeInTheDocument();
    expect(screen.getByText(/F-550/)).toBeInTheDocument();

  });
});