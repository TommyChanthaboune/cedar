import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Step } from './Step'; // adjust the import according to your file structure

describe('Step component', () => {
  it('renders step number and label correctly', () => {
    const { getByText } = render(<Step step={1} label="Step 1" />);
    const stepElement = getByText('1');
    const labelElement = getByText('Step 1');

    expect(stepElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it('applies active styles correctly', () => {
    const { getByText } = render(<Step step={1} label="Step 1" active />);
    const stepNumber = getByText('1');
    const labelElement = getByText('Step 1');

    expect(stepNumber).toHaveClass('bg-ctaBlue');
    expect(stepNumber).toHaveClass('text-white');
    expect(labelElement).toHaveClass('text-cedarBlack');
  });

  it('applies inactive styles correctly', () => {
    const { getByText } = render(<Step step={1} label="Step 1" />);
    const stepNumber = getByText('1');
    const labelElement = getByText('Step 1');

    expect(stepNumber).toHaveClass('bg-cedarLightGray');
    expect(stepNumber).toHaveClass('text-cedarDarkerGray');
    expect(labelElement).toHaveClass('text-cedarDarkerGray');
  });

  it('renders and handles edit button click', () => {
    const editMock = vi.fn();
    const { getByText } = render(
      <Step step={1} label="Step 1" edit={editMock} />
    );
    const editButton = getByText('Edit');

    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    expect(editMock).toHaveBeenCalledTimes(1);
  });

  it('does not render edit button when edit prop is not provided', () => {
    const { queryByText } = render(<Step step={1} label="Step 1" />);
    const editButton = queryByText('Edit');

    expect(editButton).not.toBeInTheDocument();
  });
});
