import React, { createContext, useState } from "react";

export const ShopContext = createContext([]);

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const cartItem = {
      id: product.id,
      img: product.img,
      name: product.clothName,
      qty: 1,
    };
  
    

    // if product exists add only qty
    let productExits = cart.findIndex((item) => item.id === product.id);

    if (productExits !== -1) {
      const newCart = cart;

      newCart[productExits].qty++;

      setCart(() => newCart);

      return;
    }

    // else add product
    setCart(() => [...cart, cartItem]);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
