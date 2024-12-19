// Product.js
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        {/* Link to the individual product page using the dynamic product ID */}
        <a href={`/products/${product.id}`} className="view-all-link">View Details</a>
      </div>
    </div>
  );
};

export default Product;
