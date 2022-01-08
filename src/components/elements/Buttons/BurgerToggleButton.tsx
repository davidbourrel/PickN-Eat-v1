import { FC, useMemo } from 'react';

const BURGER_CLASSNAME = `h-2 border-t-2 transition duration-300`;

interface BurgerToggleButtonProps {
  handleToggleMenu: () => void;
  isOpen: boolean;
}

const BurgerToggleButton: FC<BurgerToggleButtonProps> = ({
  handleToggleMenu,
  isOpen,
}) => {
  const borderTopClassName = useMemo(
    () => `${BURGER_CLASSNAME}
      ${
        isOpen
          ? 'w-8 border-white transform-gpu -rotate-45 translate-y-2'
          : 'w-8 border-black'
      }`,
    [isOpen]
  );
  const borderMiddleClassName = useMemo(
    () => `${BURGER_CLASSNAME}
      ${
        isOpen ? 'w-8 border-white opacity-0' : 'w-4 border-black opacity-100'
      }`,
    [isOpen]
  );
  const borderBottomClassName = useMemo(
    () => `${BURGER_CLASSNAME}
      ${
        isOpen
          ? 'w-8 border-white transform-gpu rotate-45 -translate-y-2 -translate-x-1'
          : 'w-6 border-black'
      }`,
    [isOpen]
  );

  return (
    <button className='cursor-pointer md:hidden' onClick={handleToggleMenu}>
      <div className={borderTopClassName} />
      <div className={borderMiddleClassName} />
      <div className={borderBottomClassName} />
    </button>
  );
};

export default BurgerToggleButton;
