import type { TPaymentState } from '../PaymentReducer';

type TCanSubmitReturn = {
  allFieldsValid: boolean;
  allFieldsFilled: boolean;
};

type TCanSubmit = (state: TPaymentState) => TCanSubmitReturn;

const canSubmit: TCanSubmit = ({
  ccNumber,
  ccExpires,
  ccCVV,
  ccName,
  ccZipcode,
}) => {
  const allFieldsValid = (ccNumber.isValid &&
    Boolean(ccExpires.isValid) &&
    Boolean(ccCVV.isValid) &&
    Boolean(ccName.isValid) &&
    Boolean(ccZipcode.isValid)) as boolean;

  const allFieldsFilled = (Boolean(ccNumber.value) &&
    Boolean(ccExpires.value) &&
    Boolean(ccCVV.value) &&
    Boolean(ccName.value) &&
    Boolean(ccZipcode.value)) as boolean;

  return { allFieldsValid, allFieldsFilled };
};

export { canSubmit };
