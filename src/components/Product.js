import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="product-image" />
      
      {/* Product Information */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        {/* Dynamic Link to Product Detail */}
        <Link to={`/products/${product.id}`} className="view-all-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
