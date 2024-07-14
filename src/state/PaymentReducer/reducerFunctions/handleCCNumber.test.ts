import { describe, it, expect } from 'vitest';
import { handleCCNumber } from './handleCCNumber';
import type { TPaymentState } from '../PaymentReducer';

describe('handleCCNumber', () => {
  const createPaymentItem = (
    isValid: boolean | null,
    value: string,
    invalidMessage: string | null
  ) => ({
    isValid,
    value,
    invalidMessage,
  });

  const initialState: TPaymentState = {
    ccNumber: createPaymentItem(null, '', null),
    ccExpires: createPaymentItem(true, '12/25', null),
    ccCVV: createPaymentItem(true, '123', null),
    ccName: createPaymentItem(true, 'John Doe', null),
    ccZipcode: createPaymentItem(true, '12345', null),
    canSubmit: false,
  };

  it('should update the ccNumber and set isValid to true for a valid card number', () => {
    const value = '4111111111111111';
    const newState = handleCCNumber(initialState, value);

    expect(newState.ccNumber.value).toBe(value);
    expect(newState.ccNumber.isValid).toBe(true);
    expect(newState.ccNumber.invalidMessage).toBeNull();
  });

  it('should update the ccNumber and set isValid to false for an invalid card number', () => {
    const value = '1234567890123456';
    const newState = handleCCNumber(initialState, value);

    expect(newState.ccNumber.value).toBe(value);
    expect(newState.ccNumber.isValid).toBe(false);
    expect(newState.ccNumber.invalidMessage).toBe('Invalid card');
  });
});
