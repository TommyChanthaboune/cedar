import { Heading } from '../Typography/Heading';

type THeroProps = {
  children?: React.ReactNode;
};

type THero = (props: THeroProps) => React.ReactElement;

const Hero: THero = ({ children }) => (
  <div className="h:lg-[268px] relative flex h-[264px]">
    <div className="margin-auto absolute bottom-[44px] left-0 right-0 m-auto w-[343px] lg:w-[376px]">
      <div className="text-center">
        {children ? (
          children
        ) : (
          <>
            <Heading className="pb-4">Hi, Taylor</Heading>
            <p className="text-cedarBlue text-4 font-normal leading-6">
              You have 6 medical bills ready from ABC Health System. You can pay
              your bills here or verify your identity to view full bill details.
            </p>
          </>
        )}
      </div>
    </div>
  </div>
);

export { Hero };
export type { THero, THeroProps };
