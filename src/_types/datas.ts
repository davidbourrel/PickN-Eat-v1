export interface BurgerType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  category: string;
  amount: number;
}
export interface DessertType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  category: string;
  amount: number;
}
export interface DrinkType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  category: string;
  amount: number;
}
export interface SaladType {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  allergens: string;
  category: string;
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
  category: string;
  amount: number;
}

export type CardItemTypes =
  | BurgerType
  | DessertType
  | DrinkType
  | SaladType
  | SideType;
