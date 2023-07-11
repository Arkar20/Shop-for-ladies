import React, { useContext } from 'react';
import { Routes,Route } from 'react-router';
import BagData from './BagData';
import Cart from './Cart';
import { ShopContext } from '../../../context/shop-context';

const ShoppingBagPage = ({addItem}) => {
  const {cart}= useContext(ShopContext);
  console.log("🚀 ~ file: BagPage.jsx:9 ~ ShoppingBagPage ~ cart:", cart)
  return (
   <div>
     {/* <h1>The things you buy-</h1>
     {addItem === 0? (<p>cart is empty</p>):
     (<div>
        {addItem}</div>)} */}

        {JSON.stringify(cart)}
   </div>
  )
}

export default ShoppingBagPage;