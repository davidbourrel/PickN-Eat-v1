export interface BurgerType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface DessertType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface DrinkType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface SaladType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  categories_id: number;
  amount: number;
}
export interface SideType {
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

export type FoodItemTypes =
  | BurgerType
  | DessertType
  | DrinkType
  | SaladType
  | SideType;

export enum categoryFoodEnum {
  burgers = 1,
  sides = 2,
  drinks = 3,
  desserts = 4,
  salads = 5,
}
