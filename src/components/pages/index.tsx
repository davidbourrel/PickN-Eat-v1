import { FC } from 'react';
import BurgersList from '../modules/Categories/BurgersList';
import DessertsList from '../modules/Categories/DessertsList';
import DrinksList from '../modules/Categories/DrinksList';
import SaladsList from '../modules/Categories/SaladsList';
import SidesList from '../modules/Categories/SidesList';

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
