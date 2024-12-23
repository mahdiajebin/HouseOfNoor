import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook for accessing the cart context
export const useCart = () => useContext(CartContext);

// CartProvider to wrap the app components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        console.log('Updating quantity for:', existingProduct);
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      console.log('Adding new product to cart:', product);
      return [...prevCart, { ...product }];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total items in the cart
  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
