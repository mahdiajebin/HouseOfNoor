import React from 'react';
import './CartSummary.css'; 

const CartSummary = ({ totalItems, totalPrice, clearCart }) => {
  return (
    <div className="cart-summary">
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button className="checkout-button">Proceed to Checkout</button>
      <button className="clear-cart-button" onClick={clearCart}>
        Clear Cart
      </button>
      <p>Total Items: {totalItems}</p>
    </div>
  );
};

export default CartSummary;
