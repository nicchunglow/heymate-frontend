import { render, screen } from '@testing-library/react';
import StyledButton from './Button';

test('renders Page component', () => {
  render(<StyledButton children={''} />);
  const element = screen.getByTestId('button');
  expect(element).toBeInTheDocument();
});
