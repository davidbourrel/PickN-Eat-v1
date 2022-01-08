import { FC, PropsWithChildren, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface SubmitButtonProps
  extends ClassNameComponentProps,
    React.HTMLProps<HTMLButtonElement> {}

const SubmitButton: FC<PropsWithChildren<SubmitButtonProps>> = ({
  className,
  children,
  onClick,
}) => {
  const computedClassName = useMemo(
    () =>
      `py-2 px-8 mb-5 bg-gray-800 text-white font-semibold rounded cursor-pointer transition transform-gpu active:scale-95 md:hover:bg-gray-700 ${
        className ?? ''
      }`,
    [className]
  );
  return (
    <button type='submit' onClick={onClick} className={computedClassName}>
      {children}
    </button>
  );
};
export default SubmitButton;
