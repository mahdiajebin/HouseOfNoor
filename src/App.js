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

// Data
import sampleProducts from './components/SampleProducts';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={sampleProducts} />} />
            <Route path="/abayas" element={<Abaya products={sampleProducts} />} />
            <Route path="/bags" element={<Bag products={sampleProducts} />} />
            <Route path="/sale" element={<Sale products={sampleProducts} />} />
            <Route path="/important-info" element={<Info />} />
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