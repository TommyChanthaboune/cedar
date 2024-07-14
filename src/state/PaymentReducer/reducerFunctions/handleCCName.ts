import type { TPaymentState } from '../PaymentReducer';
import valid from 'card-validator';

const handleCCName = (state: TPaymentState, value: string): TPaymentState => {
  let isValid: boolean | null;
  let invalidMessage: string | null | undefined = state.ccName.invalidMessage;

  if (value.length > 1) {
    isValid = valid.cardholderName(value).isValid;
    invalidMessage = isValid ? null : 'Invalid name';
  } else {
    isValid = null;
    invalidMessage = 'This field is required';
  }

  return {
    ...state,
    ccName: {
      invalidMessage,
      value,
      isValid,
    },
  };
};

export { handleCCName };
