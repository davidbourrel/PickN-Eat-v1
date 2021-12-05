import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../../contexts/userContext';
import { userRoleEnum } from '../../../_types/user';
import { LINK_CLASS_NAME, NAV_ITEM_CLASS_NAME } from './const';

interface FNavbarProps {
  closeMenu: () => void;
}

const Navbar: FC<FNavbarProps> = ({ closeMenu }) => {
  const { isAuth, userRole } = useContext(userContext);

  const isAdmin = useMemo(
    () =>
      isAuth && userRoleEnum.admin === userRole ? (
        <li className='mr-3 transition text-red-600 md:hover:text-red-700'>
          <Link to='/admin' onClick={closeMenu} className={LINK_CLASS_NAME}>
            ADMIN
          </Link>
        </li>
      ) : null,
    [closeMenu, isAuth, userRole]
  );

  return (
    <nav className='header-navbar hidden md:flex md:static md:translate-x-0 md:px-0 md:py-0 '>
      <ul className='text-lg flex'>
        <li className={NAV_ITEM_CLASS_NAME}>
          <Link to='/' onClick={closeMenu} className={LINK_CLASS_NAME}>
            MENU
          </Link>
        </li>
        <li className={NAV_ITEM_CLASS_NAME}>
          <Link
            to='/restaurant'
            onClick={closeMenu}
            className={LINK_CLASS_NAME}
          >
            RESTAURANTS
          </Link>
        </li>
        <li className={NAV_ITEM_CLASS_NAME}>
          <Link to='/delivery' onClick={closeMenu} className={LINK_CLASS_NAME}>
            DELIVERY
          </Link>
        </li>
        {isAdmin}
      </ul>
    </nav>
  );
};

export default Navbar;
