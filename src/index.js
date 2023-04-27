import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import ShoppingCartPage from './components/pages/ShoppingCartPage/ShoppingCartPage';

import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/module_react" element={
          <>
            <MainPage />
          </>
        } />

        <Route path="/module_react/cart" element={
          <>
            <ShoppingCartPage />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

