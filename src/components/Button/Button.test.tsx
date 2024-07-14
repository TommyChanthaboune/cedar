import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly with default classes', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText('Click me');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-ctaBlue w-full rounded-xl px-10 py-3 text-center font-bold leading-6 text-white'
    );
  });

  it('merges additional classes', () => {
    const { getByText } = render(
      <Button className="extra-class">Click me</Button>
    );
    const buttonElement = getByText('Click me');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-ctaBlue w-full rounded-xl px-10 py-3 text-center font-bold leading-6 text-white extra-class'
    );
  });

  it('passes other props to the button element', () => {
    const { getByText } = render(<Button type="submit">Submit</Button>);
    const buttonElement = getByText('Submit');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
