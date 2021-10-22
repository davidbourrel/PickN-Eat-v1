export interface FComponentProps {
  className?: string;
}
export interface FullMenuInformation {
  id: number;
  menuImage: string;
  name: string;
  burger: string;
  sauce: string;
  price: number;
  description: string;
  drink: string;
}

export interface MenuDetail {
  menu: {
    id: number;
    menuImage: string;
    name: string;
    burger: string;
    sauce: string;
    price: number;
  };
}

export interface DessertDetail {
  id: number;
  dessertImage: string;
  title: string;
  description: string;
}

export interface SaladDetail {
  id: number;
  saladImage: string;
  title: string;
  description: string;
}
