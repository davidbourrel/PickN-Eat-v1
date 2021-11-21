import { FC, useMemo } from 'react';

const burgerClassName = `w-8 h-2 border-t-2 transition duration-300`;

interface BurgerToggleButtonProps {
  handleToggleMenu: () => void;
  isOpen: boolean;
  color: string;
}

const BurgerToggleButton: FC<BurgerToggleButtonProps> = ({
  handleToggleMenu,
  isOpen,
  color,
}) => {
  const borderTopClassName = useMemo(
    () => `border-${color} ${burgerClassName}
      ${isOpen ? 'transform -rotate-45 translate-y-2' : ''}`,
    [isOpen, color]
  );
  const borderMiddleClassName = useMemo(
    () => `border-${color} ${burgerClassName}
      ${isOpen ? 'opacity-0' : 'opacity-100'}`,
    [isOpen, color]
  );
  const borderBottomClassName = useMemo(
    () => `border-${color} ${burgerClassName}
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

export default BurgerToggleButton;
