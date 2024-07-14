import type { Reducer } from 'react';
import { defaultPaymentState } from './PaymentReducerDefaultState';
import { handleCCNumber } from './reducerFunctions/handleCCNumber';
import { handleCCExpires } from './reducerFunctions/handleCCExpires';
import { handleCCZipcode } from './reducerFunctions/handleCCZipCode';
import { handleCCName } from './reducerFunctions/handleCCName';
import { handleCCCVV } from './reducerFunctions/handleCCCVV';
import { handleCanSubmit } from './reducerFunctions/handleCanSubmit';

type TPaymentItem = {
  value: string;
  isValid: boolean | null | undefined;
  invalidMessage: string | null | undefined;
};

type TPaymentState = {
  ccNumber: TPaymentItem;
  ccExpires: TPaymentItem;
  ccCVV: TPaymentItem;
  ccName: TPaymentItem;
  ccZipcode: TPaymentItem;
  canSubmit: boolean;
};

type TActionType =
  | 'CC_NUMBER'
  | 'CC_EXPIRES'
  | 'CC_CVV'
  | 'CC_NAME'
  | 'CC_ZIP_CODE'
  | 'CAN_SUBMIT';

type TPaymentAction =
  | { type: 'CC_NUMBER'; payload: string }
  | { type: 'CC_EXPIRES'; payload: string }
  | { type: 'CC_CVV'; payload: string }
  | { type: 'CC_NAME'; payload: string }
  | { type: 'CC_ZIP_CODE'; payload: string }
  | { type: 'CAN_SUBMIT' };

type TPaymentReducer = Reducer<TPaymentState, TPaymentAction>;

const PaymentReducer: TPaymentReducer = (state, action) => {
  switch (action.type) {
    case 'CC_NUMBER': {
      return handleCCNumber(state, action.payload);
    }
    case 'CC_EXPIRES': {
      return handleCCExpires(state, action.payload);
    }
    case 'CC_CVV': {
      return handleCCCVV(state, action.payload);
    }
    case 'CC_NAME': {
      return handleCCName(state, action.payload);
    }
    case 'CC_ZIP_CODE': {
      return handleCCZipcode(state, action.payload);
    }
    case 'CAN_SUBMIT': {
      return handleCanSubmit(state);
    }
    default: {
      return state;
    }
  }
};

export { PaymentReducer, defaultPaymentState };
export type {
  TPaymentState,
  TPaymentAction,
  TPaymentReducer,
  TActionType,
  TPaymentItem,
};
