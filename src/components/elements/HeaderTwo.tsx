import { FC } from 'react';

interface HeaderOneProps {
  text: string;
}

const HeaderTwo: FC<HeaderOneProps> = ({ text }) => (
  <h2 className='py-2 text-3xl text-gray-800 font-bold border-b border-gray-300'>
    {text}
  </h2>
);
export default HeaderTwo;
