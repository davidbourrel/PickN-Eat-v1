import { Dispatch, SetStateAction } from 'react';
import { FoodCategoryType } from '../../_types/datas';

export interface CartContextInterface {
  cart: FoodCategoryType[];
  setCart: Dispatch<SetStateAction<FoodCategoryType[]>>;
  cartTotalPrice: number;
  cartTotalItems: number;
  addToCart: (item: FoodCategoryType) => void;
  removeFromCart: (id: number) => void;
  removeItemsFromCart: (id: number) => void;
  removeAllFromCart: () => void;
}
