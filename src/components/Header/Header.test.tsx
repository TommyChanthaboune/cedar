import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  it('renders correctly with logo and link', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoElement = getByAltText('abc-health-system-logo');

    expect(logoElement).toBeInTheDocument();
  });

  it('has the correct link to the home page', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoLink = getByAltText('abc-health-system-logo').closest('a');

    expect(logoLink).toHaveAttribute('href', '/');
  });
});
