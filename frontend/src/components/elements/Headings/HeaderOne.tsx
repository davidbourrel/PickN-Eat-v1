import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const HeaderOne: FC<ClassNameComponentProps> = ({ className, children }) => {
  const computedClassName = useMemo(
    () =>
      `text-3xl py-2 text-gray-800 font-semibold border-b border-gray-300 ${
        className ?? ''
      }`,
    [className]
  );

  return <h1 className={computedClassName}>{children}</h1>;
};
export default HeaderOne;
