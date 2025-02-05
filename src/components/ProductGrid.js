import React from 'react';
import './ProductGrid.css';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} onClick={() => handleProductClick(product)} />
      ))}
    </div>
  );
};

export default ProductGrid;
