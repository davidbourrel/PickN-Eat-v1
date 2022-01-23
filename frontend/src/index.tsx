import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollRestoration from './components/modules/ScrollRestoration';
import './styles/index.css';
import App from './App';
import { CartProvider } from './contexts/cartContext';
import { UserProvider } from './contexts/userContext/';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ScrollRestoration />
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
