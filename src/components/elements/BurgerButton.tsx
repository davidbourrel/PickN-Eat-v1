import { FC, useMemo } from 'react';
import { BURGER_CLASSNAME } from '../modules/const';

interface BurgerButtonProps {
  handleToggleMenu: () => void;
  isOpen: boolean;
  color: string;
}

const BurgerButton: FC<BurgerButtonProps> = ({
  handleToggleMenu,
  isOpen,
  color,
}) => {
  const borderTopClassName = useMemo(
    () => `border-${color} ${BURGER_CLASSNAME}
      ${isOpen ? 'transform -rotate-45 translate-y-2' : ''}`,
    [isOpen, color]
  );
  const borderMiddleClassName = useMemo(
    () => `border-${color} ${BURGER_CLASSNAME}
      ${isOpen ? 'opacity-0' : 'opacity-100'}`,
    [isOpen, color]
  );
  const borderBottomClassName = useMemo(
    () => `border-${color} ${BURGER_CLASSNAME}
      ${isOpen ? 'transform rotate-45 -translate-y-2 -translate-x-1' : ''}`,
    [isOpen, color]
  );

  return (
    <button
      className='BURGER_TOGGLE cursor-pointer md:hidden'
      onClick={handleToggleMenu}
    >
      <div className={borderTopClassName} />
      <div className={borderMiddleClassName} />
      <div className={borderBottomClassName} />
    </button>
  );
};

export default BurgerButton;
