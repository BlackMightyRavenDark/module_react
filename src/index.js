import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import ShoppingCartPage from './components/shoppingCart/ShoppingCartPage/ShoppingCartPage';

import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <MainPage />
          </>
        } />

        <Route path="/cart" element={
          <>
            <ShoppingCartPage />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

