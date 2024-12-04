import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected imports
import './App.css';
import React from 'react';
import AuthComponent from './AuthComponent';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {

  const productData = [
    {
      id: 1,
      name: 'Reyyan Abaya',
      price: '£29.99',
      image: 'https://via.placeholder.com/300x400?text=Reyyan+Abaya', // Dummy image
    },
    {
      id: 2,
      name: 'Suede Sweater Dress',
      price: '£34.99',
      image: 'https://via.placeholder.com/300x400?text=Suede+Sweater+Dress', // Dummy image
    },
    {
      id: 3,
      name: 'Bow Kimono',
      price: '£35.00',
      image: 'https://via.placeholder.com/300x400?text=Bow+Kimono', // Dummy image
    },
    {
      id: 4,
      name: 'Amani Abaya',
      price: '£36.00',
      image: 'https://via.placeholder.com/300x400?text=Amani+Abaya', // Dummy image
    },
  ];
  

  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductGrid products={productData} />
          </>
        } />
        <Route path="/abayas" element={<ProductGrid products={productData} />} />
        <Route path="/bags" element={<ProductGrid products={productData} />} />
        <Route path="/sale" element={<ProductGrid products={productData} />} />
        <Route path="/important-info" element={<div>Important Info</div>} />
        <Route path="/login" element={<AuthComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
