import { FC, useMemo } from 'react';

const BURGER_CLASSNAME = `w-8 h-2 border-t-2 transition duration-300`;

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
  const computedClassName = useMemo(
    () => `border-${color} ${BURGER_CLASSNAME}`,
    [color]
  );

  // BurgerButton
  const borderTopClassName = useMemo(
    () => `${computedClassName}
      ${isOpen ? 'transform -rotate-45 translate-y-2' : ''}`,
    [isOpen, computedClassName]
  );
  const borderMiddleClassName = useMemo(
    () => `${computedClassName}
      ${isOpen ? 'opacity-0' : 'opacity-100'}`,
    [isOpen, computedClassName]
  );
  const borderBottomClassName = useMemo(
    () => `${computedClassName}
      ${isOpen ? 'transform rotate-45 -translate-y-2 -translate-x-1' : ''}`,
    [isOpen, computedClassName]
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
