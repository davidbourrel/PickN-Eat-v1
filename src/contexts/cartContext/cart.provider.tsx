import { FC, useState, useCallback, useMemo } from 'react';
import { CardItemTypes } from '../../_types/dataType';
import cartContext from './cart.context';

const { Provider } = cartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState([] as unknown as CardItemTypes[]);

  const cartTotalPrice = useMemo(
    () =>
      cart.reduce((total: number, item) => total + item.amount * item.price, 0),
    [cart]
  );

  const cartTotalItems = useMemo(
    () => cart.reduce((total: number, item) => total + item.amount, 0),
    [cart]
  );

  const addToCart = useCallback((clickedItem: CardItemTypes) => {
    setCart((currentCart) => {
      // Is the item already added in the cart?
      const exist = currentCart.find((item) => item.id === clickedItem.id);

      if (exist) {
        return currentCart.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...currentCart, { ...clickedItem, amount: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((currentCart) =>
      currentCart.reduce((total, item) => {
        if (item.id === id) {
          if (item.amount === 1) return total;
          return [...total, { ...item, amount: item.amount - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as CardItemTypes[])
    );
  }, []);

  const removeItemsFromCart = useCallback((id) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  }, []);

  const removeAllFromCart = useCallback(
    () => setCart([] as unknown as CardItemTypes[]),
    []
  );

  return (
    <Provider
      value={{
        cart,
        setCart,
        cartTotalPrice,
        cartTotalItems,
        addToCart,
        removeFromCart,
        removeItemsFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
