export interface ClassNameComponentProps {
  className?: string;
}
export interface FullMenuInformation {
  id: number;
  picture: string;
  name: string;
  burger: string;
  sauce: string;
  description: string;
  extra: string;
  price: number;
  // drink: string;
}

export interface MenuDetails {
  menu: {
    id: number;
    picture: string;
    name: string;
    burger: string;
    sauce: string;
    description: string;
    extra: string;
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
