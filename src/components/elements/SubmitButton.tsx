import { FC, PropsWithChildren, ReactNode } from 'react';

type SubmitButtonProps = {
  children?: ReactNode;
};

const SubmitButton: FC<PropsWithChildren<SubmitButtonProps>> = ({
  children,
}) => {
  return (
    <button
      type='submit'
      className='py-2 px-8 mb-5 w-full bg-gray-800 text-white font-semibold rounded cursor-pointer transition hover:bg-gray-700'
    >
      {children}
    </button>
  );
};
export default SubmitButton;
