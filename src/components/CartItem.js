import React from 'react';
import './CartItem.css'; 
const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1); // Increase quantity
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1); // Decrease quantity
    }
  };

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={handleDecrease} className="quantity-button">-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease} className="quantity-button">+</button>
        </div>
        <p>Color: {item.selectedColor}</p> {/* Display selected color */}
        <p>Size: {item.selectedSize}</p>   {/* Display selected size */}
        <button
          className="remove-item-button"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
