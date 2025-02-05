import React from 'react';
import HeroSection from './HeroSection';
import Section from './Section';

const Home = ({ products }) => {
  // Utility function to filter and slice products
  const getFilteredProducts = (filterFn, limit = 6) =>
    products.filter(filterFn).slice(0, limit);

  // Ensure the data matches your product structure
  const abayaProducts = getFilteredProducts(product => product.category === 'Abayas');
  const bagProducts = getFilteredProducts(product => product.category === 'Bags');
  const saleProducts = getFilteredProducts(product => product.onSale);

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
