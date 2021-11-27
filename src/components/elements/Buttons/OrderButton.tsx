import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface OrderButtonProps
  extends ClassNameComponentProps,
    React.HTMLProps<HTMLButtonElement> {}

const OrderButton: FC<OrderButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  const computedClassName = useMemo(
    () =>
      `bg-red-800 text-white text-sm font-bold px-5 py-2 transition transform-gpu md:hover:bg-red-700 md:active:scale-95 ${className}`,
    [className]
  );

  return (
    <button onClick={onClick} className={computedClassName}>
      {children}
    </button>
  );
};

export default OrderButton;
