/**
 * A polymorphic heading component.
 */

import { twMerge } from 'tailwind-merge';

type THeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

type THeading = (props: THeadingProps) => React.ReactElement;

const DefaultAsElement = 'h1' as const;

const Heading: THeading = ({ children, as, className, ...rest }) => {
  const Element = as || DefaultAsElement;
  const mergedClasses = twMerge(
    'font-heading text-[28px] font-bold leading-9 text-cedarBlue',
    className
  );

  return (
    <Element className={mergedClasses} {...rest}>
      {children}
    </Element>
  );
};

export { Heading };
export type { THeadingProps, THeading };
