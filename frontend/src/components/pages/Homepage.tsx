import { FC } from 'react';
import HeaderOne from '../elements/Headings/HeaderOne';
import BurgersList from '../modules/CategoriesLists/BurgersList';
import DessertsList from '../modules/CategoriesLists/DessertsList';
import DrinksList from '../modules/CategoriesLists/DrinksList';
import SaladsList from '../modules/CategoriesLists/SaladsList';
import SidesList from '../modules/CategoriesLists/SidesList';
import ScrollToTop from '../modules/ScrollToTop';

const Homepage: FC = () => {
  return (
    <>
      <HeaderOne className='border-none text-center mt-6 px-4 pb-0 w-full sm:px-8 sm:py-6 xl:mx-auto xl:max-w-6xl'>
        Choose what you want, just{' '}
        <strong className='font-black'>pick and eat</strong> !
      </HeaderOne>
      <BurgersList />
      <SidesList />
      <DrinksList />
      <SaladsList />
      <DessertsList />
      <ScrollToTop />
    </>
  );
};
export default Homepage;
