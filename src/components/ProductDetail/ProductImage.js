// ProductImage.js
import React from 'react';
import './ProductImage.css'; // Optional: You can add specific styling for the image component

const ProductImage = ({ product }) => {
  return (
    <div className="product-images">
      <img src={product.image} alt={product.name} />
      <div className="more-images">
        {[product.image1, product.image2].map((img, index) => (
          <img key={index} src={img} alt={`Additional view ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
