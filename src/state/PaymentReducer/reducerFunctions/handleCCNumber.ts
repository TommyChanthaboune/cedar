import type { TPaymentState } from '../PaymentReducer';
import valid from 'card-validator';

const handleCCNumber = (state: TPaymentState, value: string): TPaymentState => {
  let isValid: boolean | null;
  let invalidMessage: string | null | undefined = state.ccNumber.invalidMessage;

  if (value.length > 1) {
    isValid = valid.number(value).isValid;
    invalidMessage = isValid ? null : 'Invalid card';
  } else {
    isValid = null;
    invalidMessage = 'This field is required';
  }

  return {
    ...state,
    ccNumber: {
      invalidMessage,
      value,
      isValid,
    },
  };
};

export { handleCCNumber };
