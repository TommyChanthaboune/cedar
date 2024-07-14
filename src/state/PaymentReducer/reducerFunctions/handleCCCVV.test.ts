import { describe, it, expect } from 'vitest';
import { handleCCCVV } from './handleCCCVV';
import type { TPaymentState } from '../PaymentReducer';

describe('handleCCCVV', () => {
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
    ccCVV: createPaymentItem(null, '', null),
    ccName: createPaymentItem(true, 'John Doe', null),
    ccZipcode: createPaymentItem(true, '12345', null),
    canSubmit: false,
  };

  it('should update the ccCVV and set isValid to true for valid CVV', () => {
    const value = '123';
    const newState = handleCCCVV(initialState, value);

    expect(newState.ccCVV.value).toBe(value);
    expect(newState.ccCVV.isValid).toBe(true);
    expect(newState.ccCVV.invalidMessage).toBeNull();
  });

  it('should update the ccCVV and set isValid to false for invalid CVV', () => {
    const value = '12'; // Invalid CVV
    const newState = handleCCCVV(initialState, value);

    expect(newState.ccCVV.value).toBe(value);
    expect(newState.ccCVV.isValid).toBe(false);
    expect(newState.ccCVV.invalidMessage).toBe('Invalid CVV');
  });

  it('should update the ccCVV and set isValid to null for empty CVV', () => {
    const value = '';
    const newState = handleCCCVV(initialState, value);

    expect(newState.ccCVV.value).toBe(value);
    expect(newState.ccCVV.isValid).toBeNull();
    expect(newState.ccCVV.invalidMessage).toBe('This field is required');
  });

  it('should keep invalidMessage as null for single-character CVV', () => {
    const value = '1';
    const newState = handleCCCVV(initialState, value);

    expect(newState.ccCVV.value).toBe(value);
    expect(newState.ccCVV.isValid).toBeNull();
    expect(newState.ccCVV.invalidMessage).toBe('This field is required');
  });
});
