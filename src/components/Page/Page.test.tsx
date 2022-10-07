import { render, screen } from '@testing-library/react';
import Page from './Page';

test('renders Page component', () => {
  render(<Page children={''} />);
  const element = screen.getByTestId('page');
  expect(element).toBeInTheDocument();
});
