import React, { useContext } from "react";
import { CartContext } from "../cartContext/cartProvider";

const Cart = () => {
  const prop = useContext(CartContext);
  console.log("asaksjaks", prop);
  return <div>Heloooo</div>;
};

export default Cart;
