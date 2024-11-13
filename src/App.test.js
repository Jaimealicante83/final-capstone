import { render, screen } from '@testing-library/react';
import App from './App';

test('renders booking page heading', () => {
  render(<App />);
  const headingElement = screen.getAllByText(/Chicago/i);
  expect(headingElement.length).toBeGreaterThan(0);
});
