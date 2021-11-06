import { FC, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
// import ApplicationContext from '../context/ApplicationContext';
import Navbar from './Navigation/Navbar';
import ShopSvg from '../images/icons/ShopSvg';
import UserSvg from '../images/icons/UserSvg';
import BCLogo from '../images/BCLogo';
import BurgerButton from '../elements/BurgerButton';
import cartContext from '../../contexts/cartContext';

interface FHeaderProps {
  handleToggleMenu: () => void;
  closeMenu: () => void;
  isOpen: boolean;
}

const Header: FC<FHeaderProps> = ({ handleToggleMenu, isOpen, closeMenu }) => {
  const { cart } = useContext(cartContext);

  const itemsClassName = useMemo(
    () =>
      cart.length === 0
        ? 'hidden'
        : 'select-none absolute bottom-5 left-7 bg-red-600 rounded-full w-7 h-7 text-white flex items-center justify-center',
    [cart]
  );

  return (
    <header className='w-full shadow-md bg-gray-50'>
      <div className='tracking-wider font-bold xl:mx-auto xl:max-w-7xl'>
        <div className='flex items-center justify-between py-3 px-8'>
          <BurgerButton
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
              <div className={itemsClassName}>
                <span>{cart.length}</span>
              </div>
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
