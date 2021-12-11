import { FC, useMemo } from 'react';
import useCart from '../../../contexts/cartContext/useCart';
import useTotalCart from '../../../contexts/cartContext/useCartTotal';
import { CardItemTypes } from '../../../_types/datas';
import HeaderOne from '../../elements/Headings/HeaderOne';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../../modules/Section';
import CartCheckout from './CartCheckout';
import CartContent from './CartContent';

const Cart: FC = () => {
  const { cart } = useCart();
  const { cartTotalItems } = useTotalCart();

  const emptyCart = useMemo(
    () =>
      cartTotalItems === 0 ? (
        <HeaderTwo className='font-bold text-red-600 border-none text-center'>
          Your cart is empty
        </HeaderTwo>
      ) : null,
    [cartTotalItems]
  );

  const cartContent = useMemo(
    () =>
      cart.map((item) => (
        <CartContent key={item.id} item={item as CardItemTypes} />
      )),
    [cart]
  );

  const cartCheckout = useMemo(
    () => cart.length !== 0 && <CartCheckout />,
    [cart]
  );

  return (
    <Section>
      <HeaderOne className='mb-4'>Your cart</HeaderOne>
      {emptyCart}
      {cartContent}
      {cartCheckout}
    </Section>
  );
};

export default Cart;
