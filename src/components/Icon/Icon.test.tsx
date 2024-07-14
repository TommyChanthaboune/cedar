import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';
import alertCircle from '../../assets/alert-circle.svg';
import check from '../../assets/check.svg';

describe('Icon component', () => {
  it('renders the alertCircle icon correctly', () => {
    const { getByAltText } = render(
      <Icon type="alertCircle" label="Alert Circle Icon" />
    );
    const imgElement = getByAltText('Alert Circle Icon');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', alertCircle);
  });

  it('renders the check icon correctly', () => {
    const { getByAltText } = render(<Icon type="check" label="Check Icon" />);
    const imgElement = getByAltText('Check Icon');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', check);
  });

  it('applies additional classes correctly', () => {
    const { container } = render(
      <Icon type="check" label="Check Icon" className="extra-class" />
    );
    const divElement = container.firstChild;

    expect(divElement).toHaveClass('size-6 extra-class');
  });
});
