import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const HeaderTwo: FC<ClassNameComponentProps> = ({ className, children }) => {
  const computedClassName = useMemo(
    () =>
      `text-2xl py-2 text-gray-800 font-bold border-b border-gray-300 ${
        className ?? ''
      }`,
    [className]
  );

  return <h2 className={computedClassName}>{children}</h2>;
};

export default HeaderTwo;
