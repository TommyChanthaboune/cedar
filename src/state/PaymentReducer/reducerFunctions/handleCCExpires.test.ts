import { describe, it, expect } from 'vitest';
import { handleCCExpires } from './handleCCExpires';
import type { TPaymentState } from '../PaymentReducer';

describe('handleCCExpires', () => {
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
    ccExpires: createPaymentItem(null, '', null),
    ccCVV: createPaymentItem(true, '123', null),
    ccName: createPaymentItem(true, 'John Doe', null),
    ccZipcode: createPaymentItem(true, '12345', null),
    canSubmit: false,
  };

  it('should update the ccExpires and set isValid to true for valid expiration date', () => {
    const value = '12/25';
    const newState = handleCCExpires(initialState, value);

    expect(newState.ccExpires.value).toBe(value);
    expect(newState.ccExpires.isValid).toBe(true);
    expect(newState.ccExpires.invalidMessage).toBeNull();
  });

  it('should update the ccExpires and set isValid to false for invalid expiration date', () => {
    const value = '13/25';
    const newState = handleCCExpires(initialState, value);

    expect(newState.ccExpires.value).toBe(value);
    expect(newState.ccExpires.isValid).toBe(false);
    expect(newState.ccExpires.invalidMessage).toBe('Invalid expiration date');
  });

  it('should update the ccExpires and set isValid to null for empty expiration date', () => {
    const value = '';
    const newState = handleCCExpires(initialState, value);

    expect(newState.ccExpires.value).toBe(value);
    expect(newState.ccExpires.isValid).toBeNull();
    expect(newState.ccExpires.invalidMessage).toBe('This field is required');
  });

  it('should keep invalidMessage as null for single-character expiration date', () => {
    const value = '1';
    const newState = handleCCExpires(initialState, value);

    expect(newState.ccExpires.value).toBe(value);
    expect(newState.ccExpires.isValid).toBeNull();
    expect(newState.ccExpires.invalidMessage).toBe('This field is required');
  });
});
