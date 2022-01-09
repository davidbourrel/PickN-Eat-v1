import { FC } from 'react';

interface BlackFilterProps {
  isOpen: boolean;
}

const BlackFilter: FC<BlackFilterProps> = ({ isOpen }) => {
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return isOpen ? (
    <div className='absolute inset-0 bg-black bg-opacity-75 md:static md:bg-white md:bg-opacity-0' />
  ) : null;
};

export default BlackFilter;
