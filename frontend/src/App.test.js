import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the shopping cart heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /shopping cart/i })).toBeInTheDocument();
});
