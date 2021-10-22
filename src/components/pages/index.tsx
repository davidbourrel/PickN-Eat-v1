import { FC } from 'react';
import BurgersList from '../modules/Category/Burger/BurgersList';
import DessertsList from '../modules/Category/Dessert/DessertsList';
import MenusList from '../modules/Category/Menu/MenusList';
import SaladsList from '../modules/Category/Salad/SaladsList';

const HomePage: FC = () => {
  return (
    <>
      <MenusList />
      <BurgersList />
      <DessertsList />
      <SaladsList />
    </>
  );
};
export default HomePage;
