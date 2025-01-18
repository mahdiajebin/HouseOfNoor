import React from 'react';
import { useCart } from '../contexts/CartContext'; 
import CartItem from './CartItem'; 
import CartSummary from './CartSummary'; 
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalItems, updateQuantity } = useCart();

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
              <CartItem 
                key={item.id} 
                item={item} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity} // Pass the update function
              />
            ))}
          </ul>
          <CartSummary 
            totalItems={getTotalItems()}
            totalPrice={totalPrice}
            clearCart={clearCart}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
