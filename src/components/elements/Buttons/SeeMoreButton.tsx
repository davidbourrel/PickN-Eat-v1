import { FC, PropsWithChildren } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface SeeMoreButtonProps
  extends ClassNameComponentProps,
    React.HTMLProps<HTMLButtonElement> {}

const SeeMoreButton: FC<PropsWithChildren<SeeMoreButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className='inline text-center font-semibold pl-1 transition text-red-800 md:hover:text-red-600'
    >
      {children}
    </button>
  );
};

export default SeeMoreButton;
