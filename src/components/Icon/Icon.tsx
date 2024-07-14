import { twMerge } from 'tailwind-merge';

import alertCircle from '../../assets/alert-circle.svg';
import check from '../../assets/check.svg';

type TIconProps = {
  type: 'alertCircle' | 'check';
  label: string;
} & React.HTMLAttributes<HTMLElement>;

type TIcon = (props: TIconProps) => React.ReactElement;

const iconsLookup = {
  alertCircle: alertCircle,
  check: check,
};

const Icon: TIcon = ({ type, label, className, ...rest }) => {
  const mergedClasses = twMerge('size-6', className);

  return (
    <div className={mergedClasses} {...rest}>
      <img src={iconsLookup[type]} alt={label} />
    </div>
  );
};

export { Icon };
export type { TIconProps, TIcon };
