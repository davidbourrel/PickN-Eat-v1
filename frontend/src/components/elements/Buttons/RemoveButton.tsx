import { FC, HTMLProps, PropsWithChildren, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface RemoveButtonProps
  extends ClassNameComponentProps,
    HTMLProps<HTMLButtonElement> {}

const RemoveButton: FC<PropsWithChildren<RemoveButtonProps>> = ({
  className,
  children,
  onClick,
}) => {
  const computedClassName = useMemo(() => `${className ?? ''}`, [className]);

  return (
    <button onClick={onClick} className={computedClassName} aria-label="remove to cart">
      {children}
    </button>
  );
};
export default RemoveButton;
