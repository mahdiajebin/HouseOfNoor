// ProductGrid.js
import React from 'react';
import './ProductGrid.css';
import TransparentButton from './TransparentButton';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    // Navigate to the product details page using the product's ID or name
    navigate(`/products/${product.id}`); // or `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <TransparentButton text="View Details" onClick={() => handleProductClick(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
