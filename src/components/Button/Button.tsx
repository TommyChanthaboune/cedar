import { twMerge } from 'tailwind-merge';

type TButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type TButton = (props: TButtonProps) => React.ReactElement;

const Button: TButton = ({ children, className, ...rest }) => {
  const mergedClasses = twMerge(
    'bg-ctaBlue w-full rounded-xl px-10 py-3 text-center font-bold leading-6 text-white',
    className
  );

  return (
    <button className={mergedClasses} {...rest}>
      {children}
    </button>
  );
};

export { Button };
export type { TButtonProps, TButton };
