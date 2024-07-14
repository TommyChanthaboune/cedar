import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  it('renders correctly with label and value', () => {
    const { getByLabelText } = render(
      <Input label="Test Label" value="Test Value" id="test-input" />
    );
    const inputElement = getByLabelText('Test Label') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('Test Value');
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(
      <Input
        label="Test Label"
        value=""
        onChange={handleChange}
        id="test-input"
      />
    );
    const inputElement = getByLabelText('Test Label') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders the valid state with check icon', () => {
    const { container } = render(
      <Input
        label="Test Label"
        value="Test Value"
        isValid={true}
        id="test-input"
      />
    );
    const checkIcon = container.querySelector(
      'img[alt="success"]'
    ) as HTMLImageElement;

    expect(checkIcon).toBeInTheDocument();
    expect(checkIcon.src).toContain('check');
  });

  it('renders the invalid state with alertCircle icon and error message', () => {
    const { container, getByText } = render(
      <Input
        label="Test Label"
        value="Test Value"
        isValid={false}
        invalidMessage="Custom error message"
        id="test-input"
      />
    );
    const alertIcon = container.querySelector(
      'img[alt="success"]'
    ) as HTMLImageElement;

    expect(alertIcon).toBeInTheDocument();
    expect(alertIcon.src).toContain('alert-circle');
    expect(getByText('Custom error message')).toBeInTheDocument();
  });

  it('does not render any icon when isValid is null or undefined', () => {
    const { container } = render(
      <Input
        label="Test Label"
        value="Test Value"
        isValid={null}
        id="test-input"
      />
    );
    const icon = container.querySelector('img[alt="success"]');

    expect(icon).not.toBeInTheDocument();
  });

  it('applies id attribute correctly to the input and label', () => {
    const { getByLabelText } = render(
      <Input label="Test Label" value="Test Value" id="test-input" />
    );
    const inputElement = getByLabelText('Test Label') as HTMLInputElement;

    expect(inputElement.id).toBe('test-input');
  });

  it('handles onBlur and onFocus events', () => {
    const { getByLabelText } = render(
      <Input label="Test Label" value="Test Value" id="test-input" />
    );
    const inputElement = getByLabelText('Test Label') as HTMLInputElement;

    fireEvent.focus(inputElement);
    expect(inputElement.classList.contains('border-cedarMediumGray')).toBe(
      true
    );

    fireEvent.blur(inputElement);
    expect(inputElement.classList.contains('border-cedarMediumGray')).toBe(
      true
    );
  });
});
