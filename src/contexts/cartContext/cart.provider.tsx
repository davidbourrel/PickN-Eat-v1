import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import { CartCardTypes } from '../../_types/components';

export interface CartContextInterface {
  cart: CartCardTypes[];
  setCart: Dispatch<SetStateAction<CartCardTypes[]>>;
  cartTotalPrice: number;
  addToCart: (item: CartCardTypes) => void;
  removeFromCart: (id: number) => void;
  cartTotalItems: (items: CartCardTypes[]) => number;
}

// Create an initial provider value.
const initialProviderValue: CartContextInterface = {
  cart: null as unknown as CartContextInterface['cart'],
  setCart: null as unknown as CartContextInterface['setCart'],
  cartTotalPrice: null as unknown as CartContextInterface['cartTotalPrice'],
  addToCart: null as unknown as CartContextInterface['addToCart'],
  removeFromCart: null as unknown as CartContextInterface['removeFromCart'],
  cartTotalItems: null as unknown as CartContextInterface['cartTotalItems'],
};
// Create the store or 'context'.
export const cartContext = createContext(initialProviderValue);
const { Provider } = cartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState([] as unknown as CartCardTypes[]);

  /*****************
   GET TOTAL PRICE
  ******************/
  const cartTotalPrice = cart.reduce(
    (total: number, item) => total + item.amount * item.price,
    0
  );

  // const calculateTotal = (cart: CartCardTypes[]) =>
  //   cart.reduce((total: number, item) => total + item.amount * item.price, 0);
  // const cartTotalPrice = Number(calculateTotal(cart).toFixed(2));

  /*****************
   GET TOTAL ITEMS
  ******************/
  const cartTotalItems = useCallback(
    (items: CartCardTypes[]) =>
      items.reduce((total: number, item) => total + item.amount, 0),
    []
  );

  /*****************
   ADD AND REMOVE FROM CART FUNCTION
  ******************/
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
