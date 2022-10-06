import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Page component', () => {
  render(<Header />);
  const element = screen.getByTestId('page');
  expect(element).toBeInTheDocument();
});
