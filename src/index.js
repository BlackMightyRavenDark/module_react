import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './components/App/App';
import Header from './components/blocks/Header/Header';
import CardsWrapper from './components/blocks/CardsWrapper/CardsWrapper';

import './index.css';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("root", root);
root.render(
  <React.StrictMode>
    <Header />
    <CardsWrapper />
    {/* <App /> */}
  </React.StrictMode>
);
