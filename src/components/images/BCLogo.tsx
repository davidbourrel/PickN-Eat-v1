import { FC } from 'react';
import Logo from './logo.png';

const BCLogo: FC = () => (
  <img
    src={Logo}
    alt='KFC logo'
    className='w-16 h-17 cursor-pointer'
  />
);

export default BCLogo;
