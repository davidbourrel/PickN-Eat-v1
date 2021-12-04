import { FC, PropsWithChildren, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface RemoveButtonProps
  extends ClassNameComponentProps,
    React.HTMLProps<HTMLButtonElement> {}

const RemoveButton: FC<PropsWithChildren<RemoveButtonProps>> = ({
  className,
  children,
  onClick,
}) => {
  const computedClassName = useMemo(() => `${className ?? ''}`, [className]);

  return (
    <button onClick={onClick} className={computedClassName}>
      {children}
    </button>
  );
};
export default RemoveButton;
