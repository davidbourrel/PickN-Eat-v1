import { Dispatch, SetStateAction } from 'react';
import { FoodItemTypes } from '../../_types/datas';

export interface CartContextInterface {
  cart: FoodItemTypes[];
  setCart: Dispatch<SetStateAction<FoodItemTypes[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (item: FoodItemTypes) => void;
  removeFromCart: (id: number) => void;
  removeItemsFromCart: (id: number) => void;
  removeAllFromCart: () => void;
}
