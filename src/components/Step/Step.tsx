type TStepProps = {
  step: number;
  label: string;
  active?: boolean;
  edit?: (() => void) | undefined | null;
};

type TStep = (props: TStepProps) => React.ReactElement;

const Step: TStep = ({ step, label, active, edit = null }) => {
  return (
    <div className="flex items-center bg-white px-8 py-6">
      <div className="mr-4 size-6">
        <div
          className={`${active ? 'bg-ctaBlue text-white' : 'bg-cedarLightGray text-cedarDarkerGray'} flex items-center justify-center rounded-full font-bold text-white`}
        >
          {step}
        </div>
      </div>
      <div className="flex flex-grow items-center justify-between">
        <p
          className={`text-4 ${active ? 'text-cedarBlack' : 'text-cedarDarkerGray'} text-xl font-bold leading-6`}
        >
          {label}
        </p>
        {edit && (
          <button
            className="ml-auto font-bold leading-6 text-ctaBlue"
            onClick={edit}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export { Step };
export type { TStepProps, TStep };
