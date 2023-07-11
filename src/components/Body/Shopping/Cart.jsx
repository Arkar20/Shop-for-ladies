import React, { useContext } from "react";
import { AddShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { ShopContext } from "../../../context/shop-context";

const Cart = ({ product }) => {
  // const [addItem, setAddItem] = useState(0);

  const { addToCart } = useContext(ShopContext);

  const handleClick = () => {
    addToCart(product);
  };
  return (
    <>
      <AddShoppingCart onClick={handleClick} />
    </>
  );
};

export default Cart;
