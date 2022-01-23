import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useUserIsAuth from '../../../contexts/userContext/useUserIsAuth';
import useUserRole from '../../../contexts/userContext/useUserRole';
import { UserRolesEnum } from '../../../_types/user';
import { LINK_CLASSNAME, NAV_ITEM_CLASSNAME } from './const';

interface FNavbarProps {
  closeMenu: () => void;
}

const Navbar: FC<FNavbarProps> = ({ closeMenu }) => {
  const { userRole } = useUserRole();
  const isAuth = useUserIsAuth();

  const linkAdmin = useMemo(
    () =>
      isAuth && userRole === UserRolesEnum.admin ? (
        <li className='mr-3 transition text-red-600 md:hover:text-red-700'>
          <Link to='/admin' onClick={closeMenu} className={LINK_CLASSNAME}>
            ADMIN
          </Link>
        </li>
      ) : null,
    [closeMenu, isAuth, userRole]
  );

  return (
    <nav className='header-navbar hidden md:flex md:static md:translate-x-0 md:px-0 md:py-0 '>
      <ul className='text-lg flex'>
        <li className={NAV_ITEM_CLASSNAME}>
          <Link to='/' onClick={closeMenu} className={LINK_CLASSNAME}>
            MENU
          </Link>
        </li>
        <li className={NAV_ITEM_CLASSNAME}>
          <Link to='/restaurant' onClick={closeMenu} className={LINK_CLASSNAME}>
            RESTAURANTS
          </Link>
        </li>
        <li className={NAV_ITEM_CLASSNAME}>
          <Link to='/delivery' onClick={closeMenu} className={LINK_CLASSNAME}>
            DELIVERY
          </Link>
        </li>
        {linkAdmin}
      </ul>
    </nav>
  );
};

export default Navbar;
