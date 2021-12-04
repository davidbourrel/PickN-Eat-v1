import { FC, useCallback, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import Homepage from './components/pages/Homepage';
import Restaurant from './components/pages/Restaurant';
import Delivery from './components/pages/Delivery';
import LateralNavbar from './components/modules/Navigation/LateralNavbar';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import User from './components/pages/User';
import Admin from './components/pages/Admin';
import RequireAuth from './components/pages/RequireAuth';
import ItemDetails from './components/pages/ItemDetails';
import NotFound from './components/pages/NotFound';
import SignUp from './components/pages/SignUp';

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
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route
              path='user'
              element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
            />
            <Route path='/:category/:id' element={<ItemDetails />} />
            <Route
              path='admin'
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
      {filterContent}
    </div>
  );
};

export default App;
