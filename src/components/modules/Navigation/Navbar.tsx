import Cookies from 'js-cookie';
import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../../contexts/userContext';
import { linkClassName, navItemClassName } from './const';

interface FNavbarProps {
  closeMenu: () => void;
}

const Navbar: FC<FNavbarProps> = ({ closeMenu }) => {
  const { isConnected } = useContext(userContext);

  const isAdmin = useMemo(
    () =>
      !!Cookies.get('id') && Cookies.get('role') === '1' && isConnected ? (
        <li className='mr-3 transition text-red-600 hover:text-red-700'>
          <Link to='/admin' onClick={closeMenu} className={linkClassName}>
            ADMIN
          </Link>
        </li>
      ) : null,
    [closeMenu, isConnected]
  );

  return (
    <nav className='header-navbar hidden md:flex md:static md:translate-x-0 md:px-0 md:py-0 '>
      <ul className='text-lg flex'>
        <li className={navItemClassName}>
          <Link to='/' onClick={closeMenu} className={linkClassName}>
            MENU
          </Link>
        </li>
        <li className={navItemClassName}>
          <Link to='/restaurant' onClick={closeMenu} className={linkClassName}>
            RESTAURANTS
          </Link>
        </li>
        <li className={navItemClassName}>
          <Link to='/delivery' onClick={closeMenu} className={linkClassName}>
            DELIVERY
          </Link>
        </li>
        {isAdmin}
      </ul>
    </nav>
  );
};

export default Navbar;
