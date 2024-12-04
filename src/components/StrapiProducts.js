// src/components/StrapiProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductCard = styled.div`
  background-color: #fff;
  color: #003366;
  border: 1px solid #003366;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
`;

const StrapiProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Strapi API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/products'); // Adjust URL based on your Strapi backend
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductCard>
      ))}
    </ProductList>
  );
};

export default StrapiProducts;
