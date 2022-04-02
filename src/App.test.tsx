import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render Article Component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Article Component/i);
  expect(headerElement).toBeInTheDocument();
});
