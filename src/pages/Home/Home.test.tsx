import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';

describe('Home', () => {
  describe('Workshop', () => {
    test('should render workshop', () => {
      render(<Home />);
      const WorkshopCard = screen.getByRole('heading', { name: 'Workshop 1' });
      expect(WorkshopCard).toBeInTheDocument();
    });
  });
});
