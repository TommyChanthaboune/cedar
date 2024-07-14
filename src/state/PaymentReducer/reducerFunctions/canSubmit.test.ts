import { describe, it, expect } from 'vitest';
import { canSubmit } from './canSubmit';
import type { TPaymentState, TPaymentItem } from '../PaymentReducer';

describe('canSubmit', () => {
  const validPaymentItem: TPaymentItem = {
    isValid: true,
    value: 'test',
    invalidMessage: '',
  };

  const invalidPaymentItem: TPaymentItem = {
    isValid: false,
    value: '123',
    invalidMessage: 'Invalid',
  };

  it('should return true for allFieldsValid and allFieldsFilled when all fields are valid and filled', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: true,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(true);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsValid and true for allFieldsFilled when ccNumber is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: invalidPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsValid and true for allFieldsFilled when ccExpires is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: invalidPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsValid and true for allFieldsFilled when ccCVV is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: invalidPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsValid and true for allFieldsFilled when ccName is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: invalidPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsValid and true for allFieldsFilled when ccZipcode is invalid', () => {
    const paymentState: TPaymentState = {
      ccNumber: validPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: invalidPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(true);
  });

  it('should return false for allFieldsFilled when any field is empty', () => {
    const emptyPaymentItem: TPaymentItem = {
      isValid: true,
      value: '',
      invalidMessage: '',
    };

    const paymentState: TPaymentState = {
      ccNumber: emptyPaymentItem,
      ccExpires: validPaymentItem,
      ccCVV: validPaymentItem,
      ccName: validPaymentItem,
      ccZipcode: validPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(true);
    expect(result.allFieldsFilled).toBe(false);
  });

  it('should return false for allFieldsValid and allFieldsFilled when 1 fields are invalid and empty', () => {
    const paymentState: TPaymentState = {
      ccNumber: {
        isValid: false,
        value: '',
        invalidMessage: 'Invalid',
      },
      ccExpires: invalidPaymentItem,
      ccCVV: invalidPaymentItem,
      ccName: invalidPaymentItem,
      ccZipcode: invalidPaymentItem,
      canSubmit: false,
    };

    const result = canSubmit(paymentState);
    expect(result.allFieldsValid).toBe(false);
    expect(result.allFieldsFilled).toBe(false);
  });
});
