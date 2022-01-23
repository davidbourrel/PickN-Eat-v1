export interface BurgerInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface DessertInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface DrinkInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface SaladInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface SideInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  pieces: number;
  categories_id: number;
  amount: number;
}

export type FoodCategoryType =
  | BurgerInterface
  | DessertInterface
  | DrinkInterface
  | SaladInterface
  | SideInterface;

export enum FoodCategoryEnum {
  burgers = 1,
  sides = 2,
  drinks = 3,
  desserts = 4,
  salads = 5,
}
