import Cookies from 'js-cookie';
import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../../contexts/userContext';
import {
  LINK_itemClassName,
  LIST_itemClassName,
} from '../../../_constants/urls';

interface FNavbarProps {
  closeMenu: () => void;
}

const Navbar: FC<FNavbarProps> = ({ closeMenu }) => {
  const { isConnected } = useContext(userContext);

  const isAdmin = useMemo(
    () =>
      !!Cookies.get('id') && Cookies.get('role') === '1' && isConnected ? (
        <li className='mr-3 transition text-red-600 hover:text-red-700'>
          <Link to='/admin' onClick={closeMenu} className={LINK_itemClassName}>
            ADMIN
          </Link>
        </li>
      ) : null,
    [closeMenu, isConnected]
  );

  return (
    <nav className='header-navbar hidden md:flex md:static md:translate-x-0 md:px-0 md:py-0 '>
      <ul className='text-lg flex'>
        <li className={LIST_itemClassName}>
          <Link to='/' onClick={closeMenu} className={LINK_itemClassName}>
            MENU
          </Link>
        </li>
        <li className={LIST_itemClassName}>
          <Link
            to='/restaurant'
            onClick={closeMenu}
            className={LINK_itemClassName}
          >
            RESTAURANTS
          </Link>
        </li>
        <li className={LIST_itemClassName}>
          <Link
            to='/delivery'
            onClick={closeMenu}
            className={LINK_itemClassName}
          >
            DELIVERY
          </Link>
        </li>
        {isAdmin}
      </ul>
    </nav>
  );
};

export default Navbar;
