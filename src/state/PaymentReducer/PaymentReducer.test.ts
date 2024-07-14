import { describe, it, expect } from 'vitest';
import { PaymentReducer } from './PaymentReducer';
import type { TPaymentState, TPaymentAction } from './PaymentReducer';

describe('PaymentReducer', () => {
  const initialState: TPaymentState = {
    ccNumber: { value: '', isValid: null, invalidMessage: null },
    ccExpires: { value: '', isValid: null, invalidMessage: null },
    ccCVV: { value: '', isValid: null, invalidMessage: null },
    ccName: { value: '', isValid: null, invalidMessage: null },
    ccZipcode: { value: '', isValid: null, invalidMessage: null },
    canSubmit: false,
  };

  it('should handle CC_NUMBER action', () => {
    const action: TPaymentAction = {
      type: 'CC_NUMBER',
      payload: '4111111111111111',
    };
    const newState = PaymentReducer(initialState, action);

    expect(newState.ccNumber.value).toBe('4111111111111111');
    expect(newState.ccNumber.isValid).toBe(true);
    expect(newState.ccNumber.invalidMessage).toBeNull();
  });

  it('should handle CC_EXPIRES action', () => {
    const action: TPaymentAction = { type: 'CC_EXPIRES', payload: '12/25' };
    const newState = PaymentReducer(initialState, action);

    expect(newState.ccExpires.value).toBe('12/25');
    expect(newState.ccExpires.isValid).toBe(true);
    expect(newState.ccExpires.invalidMessage).toBeNull();
  });

  it('should handle CC_CVV action', () => {
    const action: TPaymentAction = { type: 'CC_CVV', payload: '123' };
    const newState = PaymentReducer(initialState, action);

    expect(newState.ccCVV.value).toBe('123');
    expect(newState.ccCVV.isValid).toBe(true);
    expect(newState.ccCVV.invalidMessage).toBeNull();
  });

  it('should handle CC_NAME action', () => {
    const action: TPaymentAction = { type: 'CC_NAME', payload: 'John Doe' };
    const newState = PaymentReducer(initialState, action);

    expect(newState.ccName.value).toBe('John Doe');
    expect(newState.ccName.isValid).toBe(true);
    expect(newState.ccName.invalidMessage).toBeNull();
  });

  it('should handle CC_ZIP_CODE action', () => {
    const action: TPaymentAction = { type: 'CC_ZIP_CODE', payload: '12345' };
    const newState = PaymentReducer(initialState, action);

    expect(newState.ccZipcode.value).toBe('12345');
    expect(newState.ccZipcode.isValid).toBe(true);
    expect(newState.ccZipcode.invalidMessage).toBeNull();
  });

  it('should handle CAN_SUBMIT action', () => {
    let state = PaymentReducer(initialState, {
      type: 'CC_NUMBER',
      payload: '4111111111111111',
    });
    state = PaymentReducer(state, { type: 'CC_EXPIRES', payload: '12/25' });
    state = PaymentReducer(state, { type: 'CC_CVV', payload: '123' });
    state = PaymentReducer(state, { type: 'CC_NAME', payload: 'John Doe' });
    state = PaymentReducer(state, { type: 'CC_ZIP_CODE', payload: '12345' });

    state = PaymentReducer(state, { type: 'CAN_SUBMIT' });

    expect(state.canSubmit).toBe(true);
  });

  it('should handle multiple actions and update canSubmit correctly', () => {
    let state = PaymentReducer(initialState, {
      type: 'CC_NUMBER',
      payload: '4111111111111111',
    });
    state = PaymentReducer(state, { type: 'CC_EXPIRES', payload: '12/25' });
    state = PaymentReducer(state, { type: 'CC_CVV', payload: '123' });
    state = PaymentReducer(state, { type: 'CC_NAME', payload: 'John Doe' });
    state = PaymentReducer(state, { type: 'CC_ZIP_CODE', payload: '12345' });

    expect(state.canSubmit).toBe(false); // Before CAN_SUBMIT action

    state = PaymentReducer(state, { type: 'CAN_SUBMIT' });

    expect(state.canSubmit).toBe(true); // After CAN_SUBMIT action
  });
});
