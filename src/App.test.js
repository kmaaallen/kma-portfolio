import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component with menu items', () => {
  render(<App />);
  const navElement = screen.getByText(/kirsten allen/i);
  const about = screen.getByText(/about/i);
  const projects = screen.getByText(/projects/i);
  const skills = screen.getByText(/skills/i);
  const contact = screen.getByText(/contact/i);
  const menuButton = screen.getByRole('button');
  expect(navElement && about && projects && skills && contact && menuButton).toBeInTheDocument();
});
