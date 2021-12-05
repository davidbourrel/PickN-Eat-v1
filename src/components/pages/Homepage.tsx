import { FC } from 'react';
import HeaderOne from '../elements/Headings/HeaderOne';
import BurgersList from '../modules/CategoriesLists/BurgersList';
import DessertsList from '../modules/CategoriesLists/DessertsList';
import DrinksList from '../modules/CategoriesLists/DrinksList';
import SaladsList from '../modules/CategoriesLists/SaladsList';
import SidesList from '../modules/CategoriesLists/SidesList';

const Homepage: FC = () => {
  return (
    <>
      <HeaderOne className='border-none text-center mt-2 p-4 pb-0 w-full sm:p-8 sm:pb-0 xl:mx-auto xl:max-w-6xl'>
        Choose whatever you want, just{' '}
        <strong className='font-black'>pick and eat</strong> !
      </HeaderOne>
      <BurgersList />
      <SidesList />
      <DrinksList />
      <SaladsList />
      <DessertsList />
    </>
  );
};
export default Homepage;