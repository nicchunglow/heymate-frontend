import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders button component', () => {
  render(<Card children={''} />);
  const element = screen.getByTestId('card');
  expect(element).toBeInTheDocument();
});
