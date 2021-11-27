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
  const computedClassName = useMemo(
    () =>
      `w-full text-red-600 font-semibold rounded cursor-pointer transition md:hover:text-red-700 ${
        className ?? ''
      }`,
    [className]
  );

  return (
    <button onClick={onClick} className={computedClassName}>
      {children}
    </button>
  );
};
export default RemoveButton;
