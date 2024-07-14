import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Heading } from './Heading'; // adjust the import according to your file structure

describe('Heading component', () => {
  it('renders correctly with default heading level (h1)', () => {
    const { getByText } = render(<Heading>Default Heading</Heading>);
    const headingElement = getByText('Default Heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveClass(
      'font-heading text-[28px] font-bold leading-9 text-cedarBlue'
    );
  });

  it('renders correctly with specified heading level (h2)', () => {
    const { getByText } = render(<Heading as="h2">H2 Heading</Heading>);
    const headingElement = getByText('H2 Heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H2');
    expect(headingElement).toHaveClass(
      'font-heading text-[28px] font-bold leading-9 text-cedarBlue'
    );
  });

  it('merges additional classes correctly', () => {
    const { getByText } = render(
      <Heading className="custom-class">Heading with Custom Class</Heading>
    );
    const headingElement = getByText('Heading with Custom Class');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass(
      'font-heading text-[28px] font-bold leading-9 text-cedarBlue custom-class'
    );
  });

  it('passes additional props correctly', () => {
    const { getByText } = render(
      <Heading id="custom-id">Heading with Custom ID</Heading>
    );
    const headingElement = getByText('Heading with Custom ID');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveAttribute('id', 'custom-id');
  });
});
