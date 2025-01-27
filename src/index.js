import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from "./context/shop-context"


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>
);



