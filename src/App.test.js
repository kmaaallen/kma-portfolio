import { render, screen, within } from '@testing-library/react';
import App from './App';
import { projectData } from './data/projectData';

describe('App test suite', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders Navbar component with menu items', () => {
    const navElement = screen.getByRole('banner');
    const about = within(navElement).getByText(/about/i);
    const projects = within(navElement).getByText(/projects/i);
    const skills = within(navElement).getByText(/skills/i);
    const contact = within(navElement).getByText(/contact/i);
    const menuButton = within(navElement).getByRole('button');
    expect(navElement && about && projects && skills && contact && menuButton).toBeInTheDocument();
  });

  it('renders About component', () => {
    const aboutElement = screen.getByTestId('about');
    const aboutInfographic = screen.getByAltText('Female web developer')
    expect(aboutElement && aboutInfographic).toBeInTheDocument();
  });

  it('renders Skills component', () => {
    const skillsElement = screen.getByTestId('skills');
    const html = within(skillsElement).getByText(/html/i);
    const css = within(skillsElement).getByText(/css/i);
    const javascript = within(skillsElement).getByText(/javascript/i);
    const react = within(skillsElement).getByText(/react/i);
    expect(skillsElement && html && css && javascript && react).toBeInTheDocument();
  });

  it('renders Projects component', () => {
    const projectsElement = screen.getByTestId('projects');
    const projectBadges = screen.getByTestId('project-badges');
    expect(projectsElement && projectBadges).toBeInTheDocument();
    expect(projectBadges.children.length).toBe(projectData.length);
  });

  it('renders Contact component', () => {
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeInTheDocument();
  });
});
