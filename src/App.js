import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Global styles

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import Abaya from './components/Abaya';
import Bag from './components/Bag';
import Sale from './components/Sale';
import Info from './components/Info';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart';

// Context
import { CartProvider } from './contexts/CartContext';
function App() {
  const [products, setProducts] = useState([]);
 // const API_URL = "https://strapihouseofnoor.onrender.com";
   const Local_URL = "http://localhost:1337";


  // useEffect(() => {
  //   fetch(`${API_URL}/api/products?populate=*`) // Ensure images are included
  //     .then(response => response.json())
  //     .then(data => {
  //       const formattedProducts = data.data.map(item => ({
  //         id: item.id,
  //         name: item.name,
  //         price: item.price,
  //         category: item.category,
  //         onSale: item.onSale,
  //         colors: item.colors,
  //         sizes: item.sizes,
  //         stock: item.stock,
  //         description: item.description,
  //         image: item.image && item.image[0] ? `${API_URL}${item.image[0].url}` : null,
  //         image1: item.image1 && item.image1[0] ? `${API_URL}${item.image1[0].url}` : null,
  //         image2: item.image2 && item.image2[0] ? `${API_URL}${item.image2[0].url}` : null,
  //         createdAt: item.createdAt,
  //       }));
  //       setProducts(formattedProducts);
  //     })
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);

  //local
  useEffect(() => {
    fetch(`${Local_URL}/api/products?populate=*`) // Ensure images are included
      .then(response => response.json())
      .then(data => {
        const formattedProducts = data.data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          category: item.category,
          onSale: item.onSale,
          colors: item.colors,
          sizes: item.sizes,
          stock: item.stock,
          description: item.description,
          image: item.image && item.image[0] ? `${Local_URL}${item.image[0].url}` : null,
          image1: item.image1 && item.image1[0] ? `${Local_URL}${item.image1[0].url}` : null,
          image2: item.image2 && item.image2[0] ? `${Local_URL}${item.image2[0].url}` : null,
          createdAt: item.createdAt,
        }));
        setProducts(formattedProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:1337/api/products')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Strapi Response:", data); // Check response in console
  //     })
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);
  
  fetch(`${Local_URL}/api/products?populate=*`)
  .then(res => res.json())
  .then(data => console.log(" strapi image",data));

  // fetch('http://localhost:1337/api/products?populate=*')
  // .then(response => response.json())
  // .then(data => {
  //   console.log("Strapi Response:", data); // Log full response

  // })
  // .catch(error => console.error('Error fetching products:', error));

  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/abayas" element={<Abaya products={products} />} />
            <Route path="/bags" element={<Bag products={products} />} />
            <Route path="/sale" element={<Sale products={products} />} />
            <Route path="/important-info" element={<Info />} />
            <Route path="/products/:id" element={<ProductDetail products={products} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
