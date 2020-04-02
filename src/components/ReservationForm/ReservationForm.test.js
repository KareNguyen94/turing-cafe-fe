import React from 'react';
import { render } from '@testing-library/react';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  it('renders the reservation form correctly', () => {
    const { getByText, getByPlaceholderText } = 
    render (
      <ReservationForm />
    );

    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Date')).toBeInTheDocument();
    expect(getByPlaceholderText('Time')).toBeInTheDocument();
    expect(getByPlaceholderText('Number of guests')).toBeInTheDocument();
    expect(getByText('Make Reservation')).toBeInTheDocument();
  })
})