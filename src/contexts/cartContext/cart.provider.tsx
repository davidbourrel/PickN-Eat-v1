import {
  FC,
  createContext,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { FullMenuInformation } from '../../_types/components';

export interface CartContextInterface {
  cart: FullMenuInformation[];
  setCart: Dispatch<SetStateAction<FullMenuInformation[]>>;
  cartTotalPrice: number;
  addToCart: (item: FullMenuInformation) => void;
  removeFromCart: (item: FullMenuInformation) => void;
  amountOfItems: (id: number) => void;
}

// Create an initial provider value.
const initialProviderValue: CartContextInterface = {
  cart: null as unknown as CartContextInterface['cart'],
  setCart: null as unknown as CartContextInterface['setCart'],
  cartTotalPrice: null as unknown as CartContextInterface['cartTotalPrice'],
  addToCart: null as unknown as CartContextInterface['addToCart'],
  removeFromCart: null as unknown as CartContextInterface['removeFromCart'],
  amountOfItems: null as unknown as CartContextInterface['amountOfItems'],
};
// Create the store or 'context'.
export const cartContext = createContext(initialProviderValue);
const { Provider } = cartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState([] as unknown as FullMenuInformation[]);

  const cartTotalPrice = cart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  const addToCart = useCallback(
    (item) => setCart((currentCart) => [...currentCart, item]),
    []
  );

  const removeFromCart = useCallback((item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
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

  const amountOfItems = useCallback(
    (id) => cart.filter((item) => item.id === id).length,
    [cart]
  );

  // const listItemsInCart = () =>
  //   items.map((item) => (
  //     <div key={item.id}>
  //       ({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}
  //       <button type='submit' onClick={() => removeFromCart(item)}>
  //         Remove
  //       </button>
  //     </div>
  //   ));

  return (
    <Provider
      value={{
        cart,
        setCart,
        cartTotalPrice,
        addToCart,
        removeFromCart,
        amountOfItems,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
