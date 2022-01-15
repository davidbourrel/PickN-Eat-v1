import { FC, HTMLProps, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface OrderButtonProps
  extends ClassNameComponentProps,
    HTMLProps<HTMLButtonElement> {}

const OrderButton: FC<OrderButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  const computedClassName = useMemo(
    () =>
      `bg-red-800 text-white text-sm font-bold px-5 py-2 transition transform-gpu active:scale-95 md:hover:bg-red-700 ${className}`,
    [className]
  );

  return (
    <button onClick={onClick} className={computedClassName} aria-label="add to cart">
      {children}
    </button>
  );
};

export default OrderButton;
