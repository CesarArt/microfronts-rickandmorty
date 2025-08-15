import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders no character found message', () => {
  render(<App />);
  expect(screen.getByText(/No character found/i)).toBeInTheDocument();
});
