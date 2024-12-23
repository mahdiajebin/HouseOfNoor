import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for getting URL params
import { useCart } from '../contexts/CartContext'; // Import the custom hook for cart context
import './ProductDetail.css'; // Add styles for this page

const ProductDetail = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id)); // Find the product by ID

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Get addToCart function from context
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Default to first color
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // Default to first size
  
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both a color and a size.");
      return; // Prevent adding to cart if either is not selected
    }
  
    const productToAdd = {
      ...product,
      quantity: quantity,
      selectedColor: selectedColor, // Add selected color
      selectedSize: selectedSize,   // Add selected size
    };
    addToCart(productToAdd);
    alert(`${product.name} has been added to your cart!`);
  };
  
  // Disable "Add to Cart" button if either color or size is not selected
  const isButtonDisabled = !selectedColor || !selectedSize;
  
  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
          {/* Additional images */}
        </div>
  
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Regular price: ${product.price}</p>
  
                  <div className="colors">
          {product.colors.map((color) => (
            <span
              key={color}
              className={`color-option ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </span>
          ))}
        </div>

        <h3>Selected Color: {selectedColor}</h3> {/* Display selected color */}

        <div className="sizes">
          {product.sizes.map((size) => (
            <span
              key={size}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>

        <h3>Selected Size: {selectedSize}</h3> {/* Display selected size */}

          <h3>Quantity</h3>
          <div className="quantity-controls">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
    <h3>Selected Size: {selectedSize}</h3> {/* Display selected size */}

          <h3>Description</h3>
          <p>{product.description}</p>
  
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={isButtonDisabled} // Disable button if no color or size is selected
          >
            Add to cart
          </button>
          <button className="buy-with">Buy with More payment options</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
