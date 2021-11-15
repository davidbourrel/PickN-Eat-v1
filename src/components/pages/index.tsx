import { FC } from 'react';
import BurgersList from '../modules/CategoriesLists/BurgersList';
import DessertsList from '../modules/CategoriesLists/DessertsList';
import DrinksList from '../modules/CategoriesLists/DrinksList';
import SaladsList from '../modules/CategoriesLists/SaladsList';
import SidesList from '../modules/CategoriesLists/SidesList';

const HomePage: FC = () => {
  return (
    <>
      <BurgersList />
      <SaladsList />
      <SidesList />
      <DessertsList />
      <DrinksList />
    </>
  );
};
export default HomePage;
