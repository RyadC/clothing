// REACT
import React from 'react';
import reportWebVitals from './reportWebVitals';

// REACT DOM
import ReactDOM from 'react-dom/client';

// REACT ROUTER DOM
import { BrowserRouter } from 'react-router-dom';

// STYLES
import './index.scss';

// DATA'S COMPONENTS
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

// COMPONENTS
import App from './App';


//MY COMPONENT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
