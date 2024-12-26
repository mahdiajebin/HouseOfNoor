import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Abaya from './components/Abaya';
import Bag from './components/Bag';
import Sale from './components/Sale';
import Info from './components/Info';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext'; // Import CartProvider
import './App.css';
import sampleProducts from './components/SampleProducts'; // Import the data from sampledata.js


function App() {
  return (
    <CartProvider>

    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={sampleProducts} />} />
        <Route path="/abayas" element={<Abaya products={sampleProducts} />} />
        <Route path="/bags" element={<Bag products={sampleProducts}/>} />
        <Route path="/sale" element={<Sale products={sampleProducts} />} />
        <Route path="/important-info" element={<Info />} />
        {/* Route for product detail page */}
        <Route path="/products/:id" element={<ProductDetail products={sampleProducts} />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>
      <Footer />
    </Router>
    </div>
    </CartProvider>

  );
}

export default App;
