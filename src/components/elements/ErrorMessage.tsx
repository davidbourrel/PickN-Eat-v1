import { FC } from 'react';

export const ERROR_CLASSNAME = 'text-sm text-red-500 font-semibold';

const ErrorMessage: FC = ({ children }) => {
  return <span className={ERROR_CLASSNAME}>{children}</span>;
};

export default ErrorMessage;
