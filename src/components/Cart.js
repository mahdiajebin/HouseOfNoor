import React from 'react';
import './Cart.css'; // Add styles for the cart
import { useCart } from '../contexts/CartContext'; // Custom hook for cart context

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalItems } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="remove-item-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
          <p>Total Items: {getTotalItems()}</p>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
