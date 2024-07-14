import { describe, it, expect } from 'vitest';
import { handleCCZipcode } from './handleCCZipCode';
import type { TPaymentState } from '../PaymentReducer';

describe('handleCCZipcode', () => {
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
    ccName: createPaymentItem(true, 'John Doe', null),
    ccZipcode: createPaymentItem(null, '', null),
    canSubmit: false,
  };

  it('should update the ccZipcode and set isValid to true for a valid zip code', () => {
    const value = '12345';
    const newState = handleCCZipcode(initialState, value);

    expect(newState.ccZipcode.value).toBe(value);
    expect(newState.ccZipcode.isValid).toBe(true);
    expect(newState.ccZipcode.invalidMessage).toBeNull();
  });

  it('should update the ccZipcode and set isValid to false for an invalid zip code', () => {
    const value = '123';
    const newState = handleCCZipcode(initialState, value);

    expect(newState.ccZipcode.value).toBe(value);
    expect(newState.ccZipcode.isValid).toBe(false);
    expect(newState.ccZipcode.invalidMessage).toBe('Invalid zip code');
  });
});
