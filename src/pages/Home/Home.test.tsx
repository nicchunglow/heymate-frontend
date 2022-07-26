import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';

test('renders learn react link', () => {
  render(<Home />);
  const home = screen.getByTestId('home-container');
  expect(home).toBeInTheDocument();
});
