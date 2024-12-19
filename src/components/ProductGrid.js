// ProductGrid.js
import React from 'react';
import './ProductGrid.css'; // Add necessary styles for responsive grid
import TransparentButton from './TransparentButton';
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          
      <TransparentButton text="Click Me" />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
