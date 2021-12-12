import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // localStorage.setItem("cart", JSON.stringify([]));
  // const initialState =React.useState(null)
  // JSON.parse(localStorage.getItem("cart"));
  // localStorage.getItem("cart");

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  useEffect(() => {
    if (cart.length >= 0) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (singleCart) => {
    setCart([...cart, singleCart]);
  };
  const deleteCart = (cartItemIndex) => {
    cart.splice(cartItemIndex, 1);
    setCart([...cart]);
  };
  const updateQuantity = (item, value) => {
    const index = cart.indexOf(item)
    if (cart[index].quantity >= 0) {
      cart[index].quantity = value
      setCart([...cart])
    }
    else {
      window.alert("Quantui tno tallow")
      cart[index].quantity = value + 1
      setCart([...cart])
    }

  }
  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
