import { useNavigate } from 'react-router-dom';

import { Hero } from '../components/Hero/Hero';
import { Heading } from '../components/Typography/Heading';
import { Button } from '../components/Button/Button';

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/pay');
  };

  return (
    <div className="h-full overflow-hidden">
      <Hero />
      <div className="flex h-full justify-center rounded-t-[32px] bg-white p-8">
        <div className="w-[343px] lg:w-[376px]">
          <div className="mb-6 flex items-center justify-between align-middle">
            <p className="text-cedarGray text-4 font-normal leading-6">
              Total due
            </p>
            <Heading as="p">$600.00</Heading>
          </div>
          <Button onClick={handleOnClick}> Pay Total</Button>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
