import { describe, it, expect } from 'vitest';
import { handleCanSubmit, findEmptyValues } from './handleCanSubmit';
import type { TPaymentState, TPaymentItem } from '../PaymentReducer';

describe('handleCanSubmit', () => {
  const validPaymentItem: TPaymentItem = {
    isValid: true,
    value: 'test',
    invalidMessage: '',
  };

  const invalidPaymentItem: TPaymentItem = {
    isValid: false,
    value: '',
    invalidMessage: 'Invalid',
  };

  const emptyPaymentItem: TPaymentItem = {
    isValid: null,
    value: '',
    invalidMessage: null,
  };

  it('should return state with canSubmit true when all fields are valid and filled', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const newState = handleCanSubmit(paymentState);
    expect(newState.canSubmit).toBe(true);
  });

  it('should return state with canSubmit false and mark empty fields invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: emptyPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const newState = handleCanSubmit(paymentState);
    expect(newState.canSubmit).toBe(false);
    expect(newState.ccNumber.isValid).toBe(false);
    expect(newState.ccNumber.invalidMessage).toBe('This field is required');
  });

  it('should return state with canSubmit false when any field is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: invalidPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: true,
    };

    const newState = handleCanSubmit(paymentState);
    expect(newState.canSubmit).toBe(false);
  });

  it('should return state with canSubmit false and mark multiple empty fields invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: emptyPaymentItem,
      ccExpires: emptyPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const newState = handleCanSubmit(paymentState);
    expect(newState.canSubmit).toBe(false);
    expect(newState.ccNumber.isValid).toBe(false);
    expect(newState.ccNumber.invalidMessage).toBe('This field is required');
    expect(newState.ccExpires.isValid).toBe(false);
    expect(newState.ccExpires.invalidMessage).toBe('This field is required');
  });
});

describe('findEmptyValues', () => {
  it('should return an array of keys with empty values', () => {
    const paymentState: TPaymentState = {
      ccNumber: { value: '', isValid: null, invalidMessage: null },
      ccExpires: { value: '12/25', isValid: true, invalidMessage: '' },
      ccCVV: { value: '123', isValid: true, invalidMessage: '' },
      ccName: { value: '', isValid: null, invalidMessage: null },
      ccZipcode: { value: '12345', isValid: true, invalidMessage: '' },
      canSubmit: false,
    };

    const emptyFields = findEmptyValues(paymentState);
    expect(emptyFields).toEqual(['ccNumber', 'ccName']);
  });

  it('should return an empty array if no fields are empty', () => {
    const paymentState: TPaymentState = {
      ccNumber: {
        value: '4111111111111111',
        isValid: true,
        invalidMessage: '',
      },
      ccExpires: { value: '12/25', isValid: true, invalidMessage: '' },
      ccCVV: { value: '123', isValid: true, invalidMessage: '' },
      ccName: { value: 'John Doe', isValid: true, invalidMessage: '' },
      ccZipcode: { value: '12345', isValid: true, invalidMessage: '' },
      canSubmit: false,
    };

    const emptyFields = findEmptyValues(paymentState);
    expect(emptyFields).toEqual([]);
  });
});
