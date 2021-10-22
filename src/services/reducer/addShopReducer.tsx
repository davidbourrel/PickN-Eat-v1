import { Reducer } from 'react';
import { INCREMENT, DECREMENT, RESET } from '../../_actions/shopItemsCounters';

export const init = (initialValue: number): number => {
  return initialValue;
};

// <number et any> à modifier plus tard
const addShopReducer: Reducer<number, any> = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      if (state <= 0) {
        return state;
      }
      return state - 1;
    case RESET:
      return 0;
    default:
      throw new Error(`L'action ${action.type} est inconnue`);
  }
};

export default addShopReducer;
