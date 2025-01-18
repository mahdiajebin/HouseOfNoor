import React from 'react';
import './ProductGrid.css';
import TransparentButton from './TransparentButton';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    // Navigate to the product details page using the product's ID
    navigate(`/products/${product.id}`);
  };

  const formatPrice = (price) => {
    // Format the price as a currency
    return price && !isNaN(price) ? `$${Number(price).toFixed(2)}` : 'N/A';
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="product-price">{formatPrice(product.price)}</p>
          <TransparentButton
            text="View Details"
            onClick={() => handleProductClick(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
