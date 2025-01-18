import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useCart } from '../../contexts/CartContext'; 
import ProductImage from './ProductImage'; // Import the new component
import './ProductDetail.css'; 

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    // Ensure both color and size are selected
    if (!selectedColor || !selectedSize) {
      alert("Please select both a color and a size.");
      return;
    }

    // Get the available stock for the selected color and size
    const availableStock = product.stock[selectedColor]?.[selectedSize] || 0;

    // Check if enough stock is available
    if (quantity > availableStock) {
      alert(`Sorry, only ${availableStock} items are available in ${selectedColor} and size ${selectedSize}.`);
      return;
    }

    // Create the product object to be added to the cart
    const productToAdd = {
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    };

    // Add the product to the cart
    addToCart(productToAdd);

    // Alert the user that the product has been added to the cart
    alert(`${product.name} has been added to your cart!`);
  };

  const buttonClass = !selectedColor || !selectedSize ? 'disabled' : '';

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        {/* Use the new ProductImage component here */}
        <ProductImage product={product} />

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">Price: ${product.price}</p>

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

          <h3>Selected Color: {selectedColor}</h3>

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

          <h3>Selected Size: {selectedSize}</h3>

          <h3>Quantity</h3>
          <div className="quantity-controls">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <h3>Description</h3>
          <p>{product.description}</p>

          <button
            className={`add-to-cart ${buttonClass}`}
            onClick={handleAddToCart}
            disabled={!selectedColor || !selectedSize}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
