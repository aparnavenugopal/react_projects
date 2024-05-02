// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price * product.quantity);
  };

  const removeItem = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    const removedItem = cartItems.find(item => item.id === productId);
    setTotalPrice(totalPrice - removedItem.price * removedItem.quantity);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
