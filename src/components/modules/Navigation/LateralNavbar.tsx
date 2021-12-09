import { FC, useCallback, useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuSvg from '../../images/icons/MenuSvg';
import RestaurantsSvg from '../../images/icons/RestaurantsSvg';
import DeliverySvg from '../../images/icons/DeliverySvg';
import AdminSvg from '../../images/icons/AdminSvg';
import BCLogo from '../../images/BCLogo';
import BurgerToggleButton from '../../elements/Buttons/BurgerToggleButton';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { OPENED_ITEM_CLASSNAME, LINK_CLASSNAME } from './const';
import userContext from '../../../contexts/userContext';
import { userRoleEnum } from '../../../_types/user';

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
  const { isAuth, userRole } = useContext(userContext);

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

  return (
    <nav className={navClassName} ref={NavbarRef}>
      <div className='absolute right-9 top-9'>
        <BurgerToggleButton
          isOpen={isOpen}
          handleToggleMenu={handleToggleMenu}
          color='white'
        />
      </div>
      <ul className='text-base xxs:text-md font-semibold mt-16 px-8'>
        <li className='mb-8 text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-yellow-500 text-2xl xxs:text-3xl'>
          <h2 className='truncate'>PickNEat</h2>
        </li>
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
        {isAuth && userRoleEnum.admin === userRole ? (
          <li className='mr-2 px-4 rounded transition mb-7 text-red-600 bg-gray-100'>
            <Link to='/admin' onClick={closeMenu} className={LINK_CLASSNAME}>
              ADMIN
              <AdminSvg />
            </Link>
          </li>
        ) : (
          ''
        )}

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
