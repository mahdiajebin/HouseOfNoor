import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import TransparentButton from './TransparentButton';

const Product = ({ product, onClick }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <TransparentButton text="View Details" onClick={onClick} />
      </div>
    </div>
  );
};

export default Product;
