import { FC, useMemo } from 'react';
import useCart from '../../../contexts/cartContext/useCart';
import useTotalCart from '../../../contexts/cartContext/useCartTotal';
import { FoodCategoryType } from '../../../_types/datas';
import HeaderOne from '../../elements/Headings/HeaderOne';
import HeaderTwo from '../../elements/Headings/HeaderTwo';
import Section from '../../modules/Section';
import CartCheckout from './CartCheckout';
import CartContent from './CartContent';

const Cart: FC = () => {
  const { cart } = useCart();
  const { cartTotalItems } = useTotalCart();

  const emptyCartMessage = useMemo(
    () =>
      cartTotalItems === 0 ? (
        <HeaderTwo className='font-bold text-red-600 border-none text-center'>
          Your cart is empty
        </HeaderTwo>
      ) : null,
    [cartTotalItems]
  );

  const cartItemsContent = useMemo(
    () =>
      cart && cart.length > 0
        ? cart.map((item) => (
            <CartContent
              key={item.id}
              cart={cart}
              cartTotalItems={cartTotalItems}
              item={item as FoodCategoryType}
            />
          ))
        : null,
    [cart, cartTotalItems]
  );

  const cartCheckout = useMemo(
    () => (cart && cart.length > 0 ? <CartCheckout /> : null),
    [cart]
  );

  return (
    <Section>
      <HeaderOne className='mb-4'>Shopping Cart</HeaderOne>
      {emptyCartMessage}
      {cartItemsContent}
      {cartCheckout}
    </Section>
  );
};

export default Cart;
