import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useCart } from '../contexts/CartContext'; 
import './ProductDetail.css'; 

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id)); 

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  
  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select both a color and a size.");
      return;
    }
    const productToAdd = {
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    };
    addToCart(productToAdd);
    alert(`${product.name} has been added to your cart!`);
  };

  const buttonClass = !selectedColor || !selectedSize ? 'disabled' : '';

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-images">
          <img src={product.image} alt={product.name} />
          <div className="more-images">
            {[product.image2, product.image3].map((img, index) => (
              <img key={index} src={img} alt={`Additional view ${index + 1}`} />
            ))}
          </div>
        </div>

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
