import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginPage } from './login';
import { MemoryRouter } from 'react-router-dom';
import * as useStorageTokenModule from '../custom-hooks/use-storage-token';
import { usersDummyData } from '../utils/dummy-data';
import { toast } from 'sonner';

jest.mock('sonner', () => ({ toast: { error: jest.fn(), success: jest.fn() } }));

const setup = () => {
  return render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
};

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    setup();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/User/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('shows required errors if fields are clicked and left empty', async () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    await waitFor(() => {
      expect(screen.getAllByText(/Required Field/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('shows error if user or password is incorrect', async () => {
    setup();
    fireEvent.change(screen.getByPlaceholderText(/User/i), { target: { value: 'wronguser' } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Username or password is wrong');
    });
  });

  it('shows success if login is successful', async () => {
    jest.spyOn(useStorageTokenModule, 'default').mockReturnValue({
      userToken: null,
      loadToken: false,
      addUserToken: jest.fn(() => true),
      removeUserToken: jest.fn(() => true),
      loadUserToken: jest.fn()
    });
    setup();
    fireEvent.change(screen.getByPlaceholderText(/User/i), { target: { value: usersDummyData[0].user } });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: usersDummyData[0].password } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Login successful');
    });
  });

  it('changes input type to text when Show Password is clicked', () => {
    setup();
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    // Find the Eye icon span
    const eyeSpan = screen.getByTestId('eye-icon');
    fireEvent.click(eyeSpan);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('shows EyeOff icon when Show Password is clicked', () => {
    setup();
    const eyeSpan = screen.getByTestId('eye-icon');
    fireEvent.click(eyeSpan);
    expect(screen.getByTestId('eyeoff-icon')).toBeInTheDocument();
  });
});
