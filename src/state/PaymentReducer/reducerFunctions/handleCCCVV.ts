import type { TPaymentState } from '../PaymentReducer';
import valid from 'card-validator';

const handleCCCVV = (state: TPaymentState, value: string): TPaymentState => {
  let isValid: boolean | null;
  let invalidMessage: string | null | undefined = state.ccCVV.invalidMessage;

  if (value.length > 1) {
    isValid = valid.cvv(value).isValid;
    invalidMessage = isValid ? null : 'Invalid CVV';
  } else {
    isValid = null;
    invalidMessage = 'This field is required';
  }

  return {
    ...state,
    ccCVV: {
      invalidMessage,
      value,
      isValid,
    },
  };
};

export { handleCCCVV };
