import { FC, PropsWithChildren, ReactNode, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

interface SubmitButtonProps extends ClassNameComponentProps {
  children?: ReactNode;
}

const SubmitButton: FC<PropsWithChildren<SubmitButtonProps>> = ({
  children,
  className,
}) => {
  const computedClassName = useMemo(
    () =>
      `py-2 px-8 mb-5 w-full bg-gray-800 text-white font-semibold rounded cursor-pointer transition hover:bg-gray-700 ${
        className ?? ''
      }`,
    [className]
  );
  return (
    <button type='submit' className={computedClassName}>
      {children}
    </button>
  );
};
export default SubmitButton;
