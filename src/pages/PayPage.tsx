import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Step } from '../components/Step/Step';
import visa from '../assets/visa.svg';
import {
  PaymentReducer,
  defaultPaymentState,
} from '../state/PaymentReducer/PaymentReducer';
import type { TActionType } from '../state/PaymentReducer/PaymentReducer';

const PayPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [
    { ccNumber, ccExpires, ccCVV, ccName, ccZipcode, canSubmit },
    dispatch,
  ] = useReducer(PaymentReducer, defaultPaymentState);

  const handleChange =
    (action: TActionType) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({ type: action, payload: e.target.value });
    };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: 'CAN_SUBMIT' });
  };

  const handleEdit = (): void => {
    setStep(1);
  };

  const handleProgress = (): void => {
    navigate('/thank-you');
  };

  useEffect(() => {
    if (canSubmit) {
      setStep(2);
    }
  }, [canSubmit]);

  return (
    <div className="h-full w-full lg:mt-8 lg:flex lg:items-start lg:justify-center">
      <div className="overflow-hidden bg-white lg:w-[576px] lg:rounded-2xl">
        <Step
          step={1}
          label="Payment Information"
          active={step == 1}
          edit={step !== 1 ? handleEdit : null}
        />
        <div className={`border-b px-8 pb-8 ${step !== 1 && 'hidden'}`}>
          <form onSubmit={handleOnSubmit}>
            <Input
              label="Card number"
              id="cc-number"
              isRequired
              onChange={handleChange('CC_NUMBER')}
              value={ccNumber.value}
              isValid={ccNumber.isValid}
              invalidMessage={ccNumber.invalidMessage}
            />
            <div className="flex items-center justify-center gap-4">
              <Input
                label="Expires MM/YY"
                id="cc-expires"
                isRequired
                onChange={handleChange('CC_EXPIRES')}
                value={ccExpires.value}
                isValid={ccExpires.isValid}
                invalidMessage={ccExpires.invalidMessage}
              />
              <Input
                label="Security Code (CVV)"
                id="cc-ccv"
                isRequired
                onChange={handleChange('CC_CVV')}
                value={ccCVV.value}
                isValid={ccCVV.isValid}
                invalidMessage={ccCVV.invalidMessage}
              />
            </div>
            <Input
              label="Name on card"
              id="cc-name"
              isRequired
              onChange={handleChange('CC_NAME')}
              value={ccName.value}
              isValid={ccName.isValid}
              invalidMessage={ccName.invalidMessage}
            />
            <Input
              label="Zip Code"
              id="cc-zipcode"
              isRequired
              onChange={handleChange('CC_ZIP_CODE')}
              value={ccZipcode.value}
              isValid={ccZipcode.isValid}
              invalidMessage={ccZipcode.invalidMessage}
            />
            <Button className="mt-2">Continue</Button>
          </form>
        </div>
        <Step step={2} label="Review and pay" active={step == 2} />
        <div className={`border-b px-8 pb-8 ${step !== 2 && 'hidden'}`}>
          <p className="mb-3 text-xl">
            You’re about to make a payment of <b>$600.00</b>
          </p>

          <div className="py-4">
            <p className="mb-2 line-clamp-6 font-bold text-cedarDarkerGray">
              Payment method
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <img src={visa} alt="visa credit card" />
              </div>
              <p className="text-sm">Card ending in ****4242</p>
            </div>
          </div>
          <Button className="mt-2" onClick={handleProgress}>
            Pay $600
          </Button>
        </div>
      </div>
    </div>
  );
};

export { PayPage };
