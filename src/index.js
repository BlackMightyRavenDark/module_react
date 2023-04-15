import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/blocks/Header/Header';
import CardsWrapper from './components/blocks/CardsWrapper/CardsWrapper';

import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CardsWrapper />
  </React.StrictMode>
);
