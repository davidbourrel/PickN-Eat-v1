import { FC, useCallback, useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import Home from './components/pages';
import NotFound from './components/pages/404';
import Restaurant from './components/pages/Restaurant';
import Delivery from './components/pages/Delivery';
import UserPage from './components/pages/UserPage';
import Admin from './components/pages/Admin';
import LateralNavbar from './components/modules/Navigation/LateralNavbar';
import SeeMore from './components/pages/SeeMore';
import Cart from './components/pages/Cart';

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpen((c) => !c);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const filterContent = useMemo(
    () =>
      isOpen ? (
        <div className='absolute inset-0 bg-black bg-opacity-75 md:static md:bg-white md:bg-opacity-0' />
      ) : null,
    [isOpen]
  );

  return (
    <div id='app' className='text-gray-800 flex flex-col min-h-screen'>
      <Header
        handleToggleMenu={handleToggleMenu}
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
      <main className='flex flex-1'>
        <LateralNavbar
          isOpen={isOpen}
          closeMenu={closeMenu}
          handleToggleMenu={handleToggleMenu}
        />
        <div className='flex flex-col flex-1 relative'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/restaurant' exact component={Restaurant} />
            <Route path='/delivery' exact component={Delivery} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/user-page' exact component={UserPage} />
            <Route path='/burgers/:id' exact component={SeeMore} />
            <Route path='/desserts/:id' exact component={SeeMore} />
            <Route path='/salads/:id' exact component={SeeMore} />
            <Route path='/drinks/:id' exact component={SeeMore} />
            <Route path='/sides/:id' exact component={SeeMore} />
            <Route path='/admin' exact component={Admin} />
            <Route component={NotFound} />
          </Switch>
          {filterContent}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
