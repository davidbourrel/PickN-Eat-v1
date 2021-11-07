import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import { CartCardTypes } from '../../_types/components';

export interface CartContextInterface {
  cart: CartCardTypes[];
  setCart: Dispatch<SetStateAction<CartCardTypes[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (item: CartCardTypes) => void;
  removeFromCart: (id: number) => void;
}

// Create an initial provider value.
const initialProviderValue: CartContextInterface = {
  cart: null as unknown as CartContextInterface['cart'],
  setCart: null as unknown as CartContextInterface['setCart'],
  cartTotalPrice: null as unknown as CartContextInterface['cartTotalPrice'],
  cartTotalItems: null as unknown as CartContextInterface['cartTotalItems'],
  addToCart: null as unknown as CartContextInterface['addToCart'],
  removeFromCart: null as unknown as CartContextInterface['removeFromCart'],
};
// Create the store or 'context'.
export const cartContext = createContext(initialProviderValue);
const { Provider } = cartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState([] as unknown as CartCardTypes[]);

  const cartTotalPrice = useMemo(
    () =>
      cart.reduce((total: number, item) => total + item.amount * item.price, 0),
    [cart]
  );

  const cartTotalItems = useMemo(
    () => cart.reduce((total: number, item) => total + item.amount, 0),
    [cart]
  );

  const addToCart = useCallback((clickedItem: CartCardTypes) => {
    setCart((currentCart) => {
      // 1. Is the item already added in the cart?
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
      }, [] as CartCardTypes[])
    );
  }, []);

  return (
    <Provider
      value={{
        cart,
        setCart,
        cartTotalPrice,
        addToCart,
        removeFromCart,
        cartTotalItems,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
