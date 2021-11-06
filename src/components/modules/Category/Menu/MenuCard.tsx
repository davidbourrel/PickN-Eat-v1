import { FC, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../../../contexts/cartContext';
import { MenuDetails } from '../../../../_types/components';
import HeaderThree from '../../../elements/HeaderThree';
import OrderButton from '../../../elements/OrderButton';

const MenuCard: FC<MenuDetails> = ({ menu }) => {
  const { addToCart, cart } = useContext(cartContext);
  const { picture, name, id } = menu;

  const handleAddToCart = useCallback(() => addToCart(menu), [menu, addToCart]);

  return (
    <div className='flex flex-col shadow-lg rounded transition sm:hover:shadow-xl overflow-hidden'>
      <div className='overflow-hidden'>
        <img
          src={picture}
          alt={name}
          className='h-44 w-full object-cover transition duration-300 transform-gpu hover:scale-125 filter contrast-75 hover:contrast-100'
        />
      </div>
      <div className='flex flex-wrap mx-3'>
        <HeaderThree text={name} />
        <Link to={`/menus/${id}`} className='flex-auto mb-3'>
          <OrderButton children='SEE DETAILS' />
        </Link>
        <span
          onClick={handleAddToCart}
          className={
            cart && cart.length >= 20
              ? 'flex-auto mx-4 mb-4 opacity-50 pointer-events-none select-none'
              : 'flex-auto mx-4 mb-4 opacity-100 pointer-events-auto select-auto'
          }
        >
          <OrderButton>Add to cart</OrderButton>
        </span>
      </div>
    </div>
  );
};

export default MenuCard;
