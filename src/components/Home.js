// Home.js
import React from 'react';
import HeroSection from './HeroSection';
import Section from './Section';

const Home = ({ products }) => {
  // Ensure products is defined and filter for different categories
  const abayaProducts = products ? products.filter(product => product.category === 'Abayas').slice(0, 6) : [];
  const bagProducts = products ? products.filter(product => product.category === 'Bags').slice(0, 6) : [];
  const saleProducts = products ? products.filter(product => product.onSale).slice(0, 6) : [];

  return (
    <div>
      <HeroSection />
      <Section title="Abayas" products={abayaProducts} link="/abayas" />
      <Section title="Bags" products={bagProducts} link="/bags" />
      <Section title="Sale" products={saleProducts} link="/sale" />
    </div>
  );
};

export default Home;
