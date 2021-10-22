// import { useContext } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuDetail } from '../../../../_types/components';
import OrderButton from '../../../elements/OrderButton';
// import ApplicationContext from '../context/ApplicationContext';
// import { INCREMENT } from '../actions/shopItemsCounters';

const MenuCard: FC<MenuDetail> = ({ menu }) => {
  const { menuImage, name, burger, sauce, price, id } = menu;
  // const { onAdd, countGlobalItems, dispatchCount } =
  //   useContext(ApplicationContext);

  // const incrementCount = () => {
  //   onAdd(menu);
  //   dispatchCount({ type: INCREMENT });
  // };

  return (
    <div className='flex flex-col shadow-lg rounded transition sm:hover:shadow-xl overflow-hidden'>
      <div className='overflow-hidden'>
        <img
          src={menuImage}
          alt={name}
          className='h-44 w-full object-cover transition duration-300 transform-gpu hover:scale-125 filter contrast-75 hover:contrast-100'
        />
      </div>
      <ul className=' p-3'>
        <li className='font-bold mb-2 text-base'>{name}</li>
        <li className='text-sm mr-1'>
          <span>Burger:</span>
          <h3 className='inline ml-2 font-semibold'>{burger}</h3>
        </li>
        <li className='text-sm mr-1'>
          <span>Sauce:</span>
          <span className='ml-2 font-semibold'>{sauce}</span>
        </li>
        <li className='text-sm mr-1'>
          <span>Price:</span>
          <span className='font-bold ml-2'>{price}$</span>
        </li>
      </ul>

      <div className='flex flex-wrap'>
        <Link to={`/menus/${id}`} className='flex-auto mx-3 mb-3'>
          <OrderButton children='SEE DETAILS' />
        </Link>
        <span
          // onClick={incrementCount}
          // className={
          //   countGlobalItems >= 20
          //     ? 'flex-auto mx-4 mb-4 opacity-50 pointer-events-none select-none'
          //     : 'flex-auto mx-4 mb-4 opacity-100 pointer-events-auto select-auto'
          // }
          className='flex-auto mx-3 mb-3 opacity-100 pointer-events-auto select-auto'
        >
          <OrderButton>ADD MENU</OrderButton>
        </span>
      </div>
    </div>
  );
};

export default MenuCard;
