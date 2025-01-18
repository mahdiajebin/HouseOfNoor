import React, { createContext, useState, useContext } from 'react';
import SampleProducts from '../components/SampleProducts';
// Create the CartContext
const CartContext = createContext();

// Custom hook for accessing the cart context
export const useCart = () => useContext(CartContext);

// CartProvider to wrap the app components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(SampleProducts); // Storing products with stock

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // Check if stock is available
      const availableStock = products.find(item => item.id === product.id).stock[product.selectedColor][product.selectedSize];

      if (availableStock >= product.quantity) {
        // Deduct stock for the selected color and size
        const updatedProducts = products.map((item) =>
          item.id === product.id
            ? {
                ...item,
                stock: {
                  ...item.stock,
                  [product.selectedColor]: {
                    ...item.stock[product.selectedColor],
                    [product.selectedSize]: item.stock[product.selectedColor][product.selectedSize] - product.quantity
                  }
                }
              }
            : item
        );

        setProducts(updatedProducts);

        return [...prevCart, { ...product }];
      } else {
        console.log('Not enough stock available.');
        return prevCart; // Do nothing if stock is insufficient
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId, quantity, selectedColor, selectedSize) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      
      // Add the stock back for the removed item
      const updatedProducts = products.map((item) =>
        item.id === productId
          ? {
              ...item,
              stock: {
                ...item.stock,
                [selectedColor]: {
                  ...item.stock[selectedColor],
                  [selectedSize]: item.stock[selectedColor][selectedSize] + quantity
                }
              }
            }
          : item
      );
      setProducts(updatedProducts);

      return updatedCart;
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total items in the cart
  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  // Update the quantity of a product in the cart
  const updateQuantity = (id, quantity, selectedColor, selectedSize) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity, selectedColor, selectedSize };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        updateQuantity,
        products, // Expose products with stock info
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
