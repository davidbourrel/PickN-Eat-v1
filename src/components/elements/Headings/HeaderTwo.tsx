import { FC, useMemo } from 'react';
import { ClassNameComponentProps } from '../../../_types/components';

const HeaderTwo: FC<ClassNameComponentProps> = ({ className, children }) => {
  const computedClassName = useMemo(
    () =>
      `text-xl py-2 text-gray-800 font-bold border-b border-gray-300 md:text-2xl ${
        className ?? ''
      }`,
    [className]
  );

  return <h2 className={computedClassName}>{children}</h2>;
};

export default HeaderTwo;
