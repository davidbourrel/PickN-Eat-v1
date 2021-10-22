import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/modules/ScrollToTop';
import './styles/index.css';
import App from './App';
import { MenuProvider } from './contexts/menuContext/';
import { UserProvider } from './contexts/userContext/';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <MenuProvider>
          <ScrollToTop />
          <App />
        </MenuProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
