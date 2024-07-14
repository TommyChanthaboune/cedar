import { useState } from 'react';
import { Icon } from '../Icon/Icon';

type TInputProps = {
  label: string;
  value: string;
  isValid?: boolean | null;
  invalidMessage?: string | null;
  isRequired?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

type TInput = (props: TInputProps) => React.ReactElement;

const Input: TInput = ({
  value,
  label,
  onChange,
  isValid,
  invalidMessage = 'There is an error with this field',
  id,
  inputProps,
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const isNeutral = isValid === null || isValid === undefined;

  const handleOnBlur = () => {
    setIsTyping(false);
  };

  const handleOnFocus = () => {
    setIsTyping(true);
  };

  return (
    <div className="relative mb-4 w-full">
      <label
        className="mb-2 block text-sm font-bold text-cedarDarkerGray"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          onChange={onChange}
          value={value}
          className={`${isValid == false ? 'border-errorRed' : 'border-cedarMediumGray'} w-full rounded-lg border px-4 py-3`}
          id={id}
          {...inputProps}
        />

        {isTyping ||
          (!isNeutral && (
            <Icon
              type={isValid ? 'check' : 'alertCircle'}
              label="success"
              className="absolute bottom-0 right-4 top-0 m-auto"
            />
          ))}
      </div>
      {isTyping ||
        (isValid === false && (
          <p className="mt-2 text-errorRed">{invalidMessage}</p>
        ))}
    </div>
  );
};

export { Input };
export type { TInputProps, TInput };
