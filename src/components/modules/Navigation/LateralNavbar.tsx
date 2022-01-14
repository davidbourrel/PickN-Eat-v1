import { FC, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuSvg from '../../images/icons/MenuSvg';
import RestaurantsSvg from '../../images/icons/RestaurantsSvg';
import DeliverySvg from '../../images/icons/DeliverySvg';
import AdminSvg from '../../images/icons/AdminSvg';
import BCLogo from '../../images/BCLogo';
import BurgerToggleButton from '../../elements/Buttons/BurgerToggleButton';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { OPENED_ITEM_CLASSNAME, LINK_CLASSNAME } from './const';
import { userRolesEnum } from '../../../_types/user';
import useUserIsAuth from '../../../contexts/userContext/useUserIsAuth';
import useUserRole from '../../../contexts/userContext/useUserRole';

interface FLateralNavbarProps {
  closeMenu: () => void;
  handleToggleMenu: () => void;
  isOpen: boolean;
}

const LateralNavbar: FC<FLateralNavbarProps> = ({
  closeMenu,
  isOpen,
  handleToggleMenu,
}) => {
  const isAuth = useUserIsAuth();
  const { userRole } = useUserRole();

  const navClassName = useMemo(
    () => `h-full fixed top-0 left-0 z-10 bg-gray-800 overflow-x-hidden overflow-y-auto transition-width duration-500 pt-7 shadow-2xl md:w-0
      ${isOpen ? 'w-full xs:w-3/4 sm:w-1/2' : 'w-0'}`,
    [isOpen]
  );

  // Close modal on outside click
  const NavbarRef = useRef(null as unknown as HTMLElement);
  const handleOutsideClick = useCallback(() => {
    if (isOpen) {
      handleToggleMenu();
    }
  }, [isOpen, handleToggleMenu]);
  useOutsideClick(NavbarRef, handleOutsideClick);

  const adminItem = useMemo(
    () =>
      isAuth && userRole === userRolesEnum.admin ? (
        <li className='mr-2 px-4 rounded transition mb-7 text-red-600 bg-gray-100'>
          <Link to='/admin' onClick={closeMenu} className={LINK_CLASSNAME}>
            ADMIN
            <AdminSvg />
          </Link>
        </li>
      ) : null,
    [closeMenu, isAuth, userRole]
  );

  return (
    <nav className={navClassName} ref={NavbarRef}>
      <div className='absolute right-9 top-9'>
        <BurgerToggleButton
          isOpen={isOpen}
          handleToggleMenu={handleToggleMenu}
        />
      </div>
      <h2 className='truncate mt-16 mb-8 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-yellow-500 text-3xl'>
        PickNEat
      </h2>
      <ul className='text-base xxs:text-md font-semibold px-8'>
        <li className={OPENED_ITEM_CLASSNAME}>
          <Link to='/' onClick={closeMenu} className={LINK_CLASSNAME}>
            MENU
            <MenuSvg />
          </Link>
        </li>
        <li className={OPENED_ITEM_CLASSNAME}>
          <Link to='/restaurant' onClick={closeMenu} className={LINK_CLASSNAME}>
            RESTAURANTS
            <RestaurantsSvg />
          </Link>
        </li>
        <li className={OPENED_ITEM_CLASSNAME}>
          <Link to='/delivery' onClick={closeMenu} className={LINK_CLASSNAME}>
            DELIVERY
            <DeliverySvg />
          </Link>
        </li>
        {adminItem}
        <li className='mr-3 transition mb-7 text-gray-800'>
          <Link
            to='/'
            onClick={closeMenu}
            className='flex justify-center items-center'
          >
            <BCLogo />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LateralNavbar;
