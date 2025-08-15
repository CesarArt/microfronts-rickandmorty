import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders sign in page', () => {
  render(<App />);
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});
