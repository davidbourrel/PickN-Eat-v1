import { FC, useCallback } from 'react';
import Swal from 'sweetalert2';
import useTotalCart from '../../../contexts/cartContext/useCartTotal';
import useRemoveCart from '../../../contexts/cartContext/useRemoveCart';
import RemoveButton from '../../elements/Buttons/RemoveButton';
import SubmitButton from '../../elements/Buttons/SubmitButton';
import HeaderThree from '../../elements/Headings/HeaderThree';

const CartCheckout: FC = () => {
  const { cartTotalPrice } = useTotalCart();
  const { removeAllFromCart } = useRemoveCart();

  const checkoutDone = useCallback(() => {
    removeAllFromCart();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you!',
      showConfirmButton: false,
      timer: 2000,
    });
  }, [removeAllFromCart]);

  return (
    <div className='flex flex-col sm:w-1/2 sm:ml-auto'>
      <div className='flex justify-between'>
        <HeaderThree className='text-xl'>Total Price</HeaderThree>
        <strong className='text-xl'>${cartTotalPrice.toFixed(2)}</strong>
      </div>
      <div className='flex mb-4'>
        <RemoveButton
          className='cursor-pointer font-semibold ml-auto text-red-600 transition md:hover:text-red-700'
          onClick={removeAllFromCart}
        >
          Remove all
        </RemoveButton>
      </div>

      <SubmitButton
        onClick={checkoutDone}
        className='bg-green-800 md:hover:bg-green-700'
      >
        Checkout
      </SubmitButton>
    </div>
  );
};

export default CartCheckout;
