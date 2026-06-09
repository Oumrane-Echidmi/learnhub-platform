import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const toggleWishlist = (course) => {
    if (wishlist.find(item => item.id === course.id)) {
      setWishlist(wishlist.filter(item => item.id !== course.id));
    } else {
      setWishlist([...wishlist, course]);
    }
  };

  const isInCart = (courseId) => cart.some(item => item.id === courseId);
  const isInWishlist = (courseId) => wishlist.some(item => item.id === courseId);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ 
      cart, 
      wishlist, 
      addToCart, 
      removeFromCart, 
      toggleWishlist,
      isInCart,
      isInWishlist,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
