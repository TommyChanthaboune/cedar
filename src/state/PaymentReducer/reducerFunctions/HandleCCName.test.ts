import { describe, it, expect } from 'vitest';
import { handleCCName } from './handleCCName';
import type { TPaymentState } from '../PaymentReducer';

describe('handleCCName', () => {
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
    ccNumber: createPaymentItem(true, '4111111111111111', null),
    ccExpires: createPaymentItem(true, '12/25', null),
    ccCVV: createPaymentItem(true, '123', null),
    ccName: createPaymentItem(null, '', null),
    ccZipcode: createPaymentItem(true, '12345', null),
    canSubmit: false,
  };

  it('should update the ccName and set isValid to true for a valid name', () => {
    const value = 'John Doe';
    const newState = handleCCName(initialState, value);

    expect(newState.ccName.value).toBe(value);
    expect(newState.ccName.isValid).toBe(true);
    expect(newState.ccName.invalidMessage).toBeNull();
  });

  it('should update the ccName and set isValid to null for an empty name', () => {
    const value = '';
    const newState = handleCCName(initialState, value);

    expect(newState.ccName.value).toBe(value);
    expect(newState.ccName.isValid).toBeNull();
    expect(newState.ccName.invalidMessage).toBe('This field is required');
  });
});
