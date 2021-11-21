import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface RemoveButtonProps
  extends ClassNameComponentProps,
    React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

const RemoveButton: FC<PropsWithChildren<RemoveButtonProps>> = ({
  children,
  className,
  onClick,
}) => {
  const computedClassName = useMemo(
    () =>
      `w-full text-red-600 font-semibold rounded cursor-pointer transition hover:text-red-700 ${
        className ?? ''
      }`,
    [className]
  );

  return (
    <button className={computedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
export default RemoveButton;
