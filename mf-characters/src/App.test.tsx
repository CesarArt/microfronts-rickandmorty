import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders no characters found message', () => {
  render(<App />);
  expect(screen.getByText(/No characters found/i)).toBeInTheDocument();
});
