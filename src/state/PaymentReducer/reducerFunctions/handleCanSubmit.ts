import type { TPaymentState } from '../PaymentReducer';
import { canSubmit } from './canSubmit';

const handleCanSubmit = (state: TPaymentState): TPaymentState => {
  const { allFieldsValid, allFieldsFilled } = canSubmit(state);

  const emptyFields = findEmptyValues(state);

  const newState = emptyFields.reduce((newState, field) => {
    return {
      ...newState,
      [field]: {
        ...(state[field] as object),
        isValid: false,
        invalidMessage: 'This field is required',
      },
    };
  }, state);

  if (!allFieldsFilled) {
    return {
      ...newState,
      canSubmit: false,
    };
  }

  if (!allFieldsValid) {
    return {
      ...state,
      canSubmit: false,
    };
  }

  return {
    ...state,
    canSubmit: true,
  };
};

const findEmptyValues = (paymentState: TPaymentState) => {
  const fields = Object.keys(paymentState) as Array<keyof TPaymentState>;

  return fields.filter((field) => {
    const paymentItem = paymentState[field];
    return typeof paymentItem === 'object' && paymentItem.value === '';
  });
};

export { handleCanSubmit, findEmptyValues };
