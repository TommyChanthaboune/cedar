import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Hero } from './Hero';
import { Heading } from '../Typography/Heading';

describe('Hero component', () => {
  it('renders default content when no children are provided', () => {
    const { getByText } = render(<Hero />);

    expect(getByText('Hi, Taylor')).toBeInTheDocument();
    expect(
      getByText(
        'You have 6 medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.'
      )
    ).toBeInTheDocument();
  });

  it('renders children content when provided', () => {
    const { getByText } = render(
      <Hero>
        <Heading>Custom Heading</Heading>
        <p>Custom paragraph</p>
      </Hero>
    );

    expect(getByText('Custom Heading')).toBeInTheDocument();
    expect(getByText('Custom paragraph')).toBeInTheDocument();
  });
});
