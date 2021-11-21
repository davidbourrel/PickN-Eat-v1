import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import { CardItemTypes } from '../../_types/dataType';

export interface CartContextInterface {
  cart: CardItemTypes[];
  setCart: Dispatch<SetStateAction<CardItemTypes[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (item: CardItemTypes) => void;
  removeFromCart: (id: number) => void;
  removeItemsFromCart: (id: number) => void;
  removeAllFromCart: () => void;
}

// Create an initial provider value.
const initialProviderValue: CartContextInterface = {
  cart: null as unknown as CartContextInterface['cart'],
  setCart: null as unknown as CartContextInterface['setCart'],
  cartTotalPrice: null as unknown as CartContextInterface['cartTotalPrice'],
  cartTotalItems: null as unknown as CartContextInterface['cartTotalItems'],
  addToCart: null as unknown as CartContextInterface['addToCart'],
  removeFromCart: null as unknown as CartContextInterface['removeFromCart'],
  removeItemsFromCart:
    null as unknown as CartContextInterface['removeItemsFromCart'],
  removeAllFromCart:
    null as unknown as CartContextInterface['removeAllFromCart'],
};
// Create the store or 'context'.
export const cartContext = createContext(initialProviderValue);
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
