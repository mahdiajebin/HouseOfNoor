import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Abaya from './components/Abaya';
import Bag from './components/Bag';
import Sale from './components/Sale';
import Info from './components/Info';
import Footer from './components/Footer';
const sampleProducts = [
  {
    id: 1,
    name: 'Elegant Abaya',
    price: '$50.00',
    image: '/assets/IMG_6542.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: false,
  },
  {
    id: 2,
    name: 'Classic Black Abaya',
    price: '$45.00',
    image: '/assets/IMG_6606.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: true,
  },
  {
    id: 3,
    name: 'Luxury Leather Bag',
    price: '$120.00',
    image: '/assets/IMG_6694.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: false,
  },
  {
    id: 4,
    name: 'Chic Handbag',
    price: '$85.00',
    image: '/assets/IMG_6734.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: true,
  },
  {
    id: 5,
    name: 'Summer Sale Abaya',
    price: '$35.00',
    image: '/assets/IMG_6877.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: true,
  },
  {
    id: 6,
    name: 'Stylish Tote Bag',
    price: '$70.00',
    image: '/assets/IMG_7398.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: false,
  },
  {
    id: 7,
    name: 'Premium Leather Bag',
    price: '$150.00',
    image: '/assets/IMG_8816.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: true,
  },
  {
    id: 8,
    name: 'Exclusive Designer Abaya',
    price: '$90.00',
    image: '/assets/IMG_8819.png', // Updated with your image path
    category: 'Abayas',
    onSale: true,
  },
];


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={sampleProducts} />} />
        <Route path="/abayas" element={<Abaya products={sampleProducts} />} />
        <Route path="/bags" element={<Bag />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/important-info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
