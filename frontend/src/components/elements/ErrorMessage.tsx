import { FC } from 'react';

const ErrorMessage: FC = ({ children }) => {
  return <span className='text-sm text-red-500 font-semibold'>{children}</span>;
};

export default ErrorMessage;
