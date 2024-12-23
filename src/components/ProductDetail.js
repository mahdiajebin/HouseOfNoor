import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for getting URL params
import { useCart } from '../contexts/CartContext'; // Import the custom hook for cart context
import './ProductDetail.css'; // Add styles for this page

const ProductDetail = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id)); // Find the product by ID

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // addToCart({ ...product, quantity }); // Pass product with selected quantity
    const productToAdd = { ...product, quantity: 1 }; 
    addToCart(productToAdd);
    alert(`${product.name} has been added to your cart!`);
  };

  if (!product) {
    return <p>Product not found</p>; // Handle the case where the product is not found
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
          <div className="more-images">
            {/* Display other images here */}
            {product.image2 && <img src={product.image2} alt="product-2" />}
            {product.image3 && <img src={product.image3} alt="product-3" />}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Regular price: ${product.price}</p>

          <h3>Color</h3>
          <div className="colors">
            {product.colors.map((color) => (
              <span key={color} className="color-option">{color}</span>
            ))}
          </div>

          <h3>Size</h3>
          <div className="sizes">
            {product.sizes.map((size) => (
              <span key={size} className="size-option">{size}</span>
            ))}
          </div>

          <h3>Quantity</h3>
          <div className="quantity-controls">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <h3>Description</h3>
          <p>{product.description}</p>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
          <button className="buy-with">Buy with More payment options</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
