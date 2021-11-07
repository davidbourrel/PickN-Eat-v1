import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
// import ApplicationContext from '../context/ApplicationContext';
import Navbar from './Navigation/Navbar';
import ShopSvg from '../images/icons/ShopSvg';
import UserSvg from '../images/icons/UserSvg';
import BCLogo from '../images/BCLogo';
import BurgerToggleButton from '../elements/Buttons/BurgerToggleButton';
import cartContext from '../../contexts/cartContext';

interface FHeaderProps {
  handleToggleMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
}

const Header: FC<FHeaderProps> = ({ handleToggleMenu, isOpen, closeMenu }) => {
  const { cartTotalItems } = useContext(cartContext);

  const itemsClassName = useMemo(
    () =>
      cartTotalItems === 0
        ? 'hidden'
        : 'select-none absolute bottom-5 left-7 bg-red-600 rounded-full w-7 h-7 text-white flex items-center justify-center',
    [cartTotalItems]
  );

  return (
    <header className='w-full shadow-md bg-gray-50'>
      <div className='tracking-wider font-bold xl:mx-auto xl:max-w-7xl'>
        <div className='flex items-center justify-between py-3 px-4 sm:px-8'>
          <BurgerToggleButton
            isOpen={isOpen}
            handleToggleMenu={handleToggleMenu}
            color='black'
          />
          <Navbar closeMenu={closeMenu} />
          <Link to='/' onClick={closeMenu}>
            <BCLogo />
          </Link>

          <div className='grid grid-cols-2 gap-5 items-center'>
            <Link to='/cart' className='relative'>
              <ShopSvg />
              <span className={itemsClassName}>{cartTotalItems}</span>
            </Link>
            <Link to='/user-page'>
              <UserSvg />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
