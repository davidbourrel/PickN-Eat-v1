import { FC, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import MenuSvg from '../../images/icons/MenuSvg';
import RestaurantsSvg from '../../images/icons/RestaurantsSvg';
import DeliverySvg from '../../images/icons/DeliverySvg';
import AdminSvg from '../../images/icons/AdminSvg';
import BCLogo from '../../images/BCLogo';
import { OPENED_itemClassName, LINK_itemClassName } from '../const';
import BurgerButton from '../../elements/BurgerButton';
import useOutsideClick from '../../../hooks/useOutsideClick';

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
  const navClassName = useMemo(
    () => `h-full fixed top-0 left-0 z-10 bg-gray-800 overflow-x-hidden transition-width duration-500 pt-7 shadow-2xl md:w-0
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

  return (
    <nav className={navClassName} ref={NavbarRef}>
      <div className='absolute right-9 top-9'>
        <BurgerButton
          isOpen={isOpen}
          handleToggleMenu={handleToggleMenu}
          color='white'
        />
      </div>
      <ul className='text-base xxs:text-lg font-semibold mt-16 px-8'>
        <li className='mb-8 text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-yellow-500 text-2xl xxs:text-3xl'>
          <h2 className='truncate'>Breaking Cook</h2>
        </li>
        <li className={OPENED_itemClassName}>
          <Link to='/' onClick={closeMenu} className={LINK_itemClassName}>
            MENU
            <MenuSvg />
          </Link>
        </li>
        <li className={OPENED_itemClassName}>
          <Link
            to='/restaurant'
            onClick={closeMenu}
            className={LINK_itemClassName}
          >
            RESTAURANTS
            <RestaurantsSvg />
          </Link>
        </li>
        <li className={OPENED_itemClassName}>
          <Link
            to='/delivery'
            onClick={closeMenu}
            className={LINK_itemClassName}
          >
            DELIVERY
            <DeliverySvg />
          </Link>
        </li>
        {!!Cookies.get('id') && Cookies.get('role') === '1' ? (
          <li className='mr-3 transition mb-7 text-red-600 hover:text-red-800'>
            <Link
              to='/admin'
              onClick={closeMenu}
              className={LINK_itemClassName}
            >
              ADMIN
              <AdminSvg />
            </Link>
          </li>
        ) : (
          ''
        )}

        <li className='mr-3 transition mb-7 text-gray-800 hover:text-red-800'>
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
