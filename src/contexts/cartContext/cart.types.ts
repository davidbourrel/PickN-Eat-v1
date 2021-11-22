import { Dispatch, SetStateAction } from 'react';
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
