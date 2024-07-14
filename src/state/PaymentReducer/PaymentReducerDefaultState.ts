import type { TPaymentState } from './PaymentReducer';

const defaultPaymentState: TPaymentState = {
  ccNumber: {
    value: '',
    isValid: null,
    invalidMessage: null,
  },
  ccExpires: {
    value: '',
    isValid: null,
    invalidMessage: null,
  },
  ccCVV: {
    value: '',
    isValid: null,
    invalidMessage: null,
  },
  ccName: {
    value: '',
    isValid: null,
    invalidMessage: null,
  },
  ccZipcode: {
    value: '',
    isValid: null,
    invalidMessage: null,
  },
  canSubmit: false,
};

export { defaultPaymentState };
