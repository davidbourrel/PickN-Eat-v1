import { FC, ReactNode } from 'react';

type SeeMoreButtonProps = {
  children?: ReactNode;
};

const SeeMoreButton: FC<SeeMoreButtonProps> = ({ children }) => {
  return (
    <button
      type='button'
      className='inline text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-yellow-500 text-lg'
    >
      {children}
    </button>
  );
};

export default SeeMoreButton;
