import { FC, ReactNode } from 'react';

type OrderButtonProps = {
  children?: ReactNode;
};

const OrderButton: FC<OrderButtonProps> = ({ children }) => {
  return (
    <button
      type='button'
      className='w-full rounded text-gray-200 text-sm font-bold px-8 py-2 transition bg-gradient-to-r from-red-900 via-red-700 to-yellow-700 hover:from-red-800 hover:via-red-600 hover:to-yellow-600 hover:text-white'
    >
      {children}
    </button>
  );
};

export default OrderButton;
