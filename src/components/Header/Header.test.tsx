import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Page component', () => {
  render(<Header />);
  const element = screen.getByTestId('header-container');
  const elementTwo = screen.getByTestId('header-inner-container');
  expect(element).toBeInTheDocument();
  expect(elementTwo).toBeInTheDocument();
});
