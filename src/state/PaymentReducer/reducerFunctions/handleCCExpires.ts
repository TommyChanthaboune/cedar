import type { TPaymentState } from '../PaymentReducer';
import valid from 'card-validator';

const handleCCExpires = (
  state: TPaymentState,
  value: string
): TPaymentState => {
  let isValid: boolean | null;
  let invalidMessage: string | null | undefined =
    state.ccExpires.invalidMessage;

  if (value.length > 1) {
    isValid = valid.expirationDate(value).isValid;
    invalidMessage = isValid ? null : 'Invalid expiration date';
  } else {
    isValid = null;
    invalidMessage = 'This field is required';
  }

  return {
    ...state,
    ccExpires: {
      invalidMessage,
      value,
      isValid,
    },
  };
};

export { handleCCExpires };
