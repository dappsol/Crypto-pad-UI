import { render, screen } from '@testing-library/react';
import App from './App';

test('test', () => {
  render(<App />);
  const linkElement = screen.getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
