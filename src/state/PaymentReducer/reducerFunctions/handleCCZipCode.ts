import type { TPaymentState } from '../PaymentReducer';
import valid from 'card-validator';

const handleCCZipcode = (
  state: TPaymentState,
  value: string
): TPaymentState => {
  let isValid: boolean | null;
  let invalidMessage: string | null | undefined =
    state.ccZipcode.invalidMessage;

  if (value.length > 1) {
    isValid = valid.postalCode(value, { minLength: 5 }).isValid;
    invalidMessage = isValid ? null : 'Invalid zip code';
  } else {
    isValid = null;
    invalidMessage = 'This field is required';
  }

  return {
    ...state,
    ccZipcode: {
      invalidMessage,
      value,
      isValid,
    },
  };
};

export { handleCCZipcode };
