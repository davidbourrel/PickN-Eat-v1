import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/modules/ScrollToTop';
import './styles/index.css';
import App from './App';
import { CartProvider } from './contexts/cartContext';
import { UserProvider } from './contexts/userContext/';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CartProvider>
          <ScrollToTop />
          <App />
        </CartProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
