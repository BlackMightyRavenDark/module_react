import React from 'react';
import ReactDOM from 'react-dom/client';

// import Header from './components/blocks/Header/Header';
// import CardsWrapper from './components/blocks/CardsWrapper/CardsWrapper';
import ShoppingCartHeader from './components/blocks/ShoppingCartHeader/ShoppingCartHeader';
import ShoppingList from './components/blocks/ShoppingList/ShoppingList';
import ShoppingCartFooter from './components/blocks/ShoppingCartFooter/ShoppingCartFooter';

import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <CardsWrapper /> */}
    <ShoppingCartHeader />
    <ShoppingList />
    <ShoppingCartFooter />
  </React.StrictMode>
);
