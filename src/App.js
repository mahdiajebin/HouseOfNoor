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
const sampleProducts = [
  {
    id: 1,
    name: 'Elegant Abaya',
    price: '$50.00',
    image: '/assets/IMG_6542.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: false,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 2,
    name: 'Classic Black Abaya',
    price: '$45.00',
    image: '/assets/IMG_6606.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: true,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 3,
    name: 'Luxury Leather Bag',
    price: '$120.00',
    image: '/assets/IMG_6694.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: false,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 4,
    name: 'Chic Handbag',
    price: '$85.00',
    image: '/assets/IMG_6734.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: true,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 5,
    name: 'Summer Sale Abaya',
    price: '$35.00',
    image: '/assets/IMG_6877.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: true,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 6,
    name: 'Stylish Tote Bag',
    price: '$70.00',
    image: '/assets/IMG_7398.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: false,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 7,
    name: 'Premium Leather Bag',
    price: '$150.00',
    image: '/assets/IMG_8816.jpeg', // Updated with your image path
    category: 'Bags',
    onSale: true,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
  {
    id: 8,
    name: 'Exclusive Designer Abaya',
    price: '$90.00',
    image: '/assets/IMG_8816.jpeg', // Updated with your image path
    category: 'Abayas',
    onSale: true,
    image2: '/images/suede-sweater-dress-2.jpg',
    image3: '/images/suede-sweater-dress-3.jpg',
    colors: ['Cream', 'Mocha', 'Burnt Sienna', 'Black'],
    sizes: ['50', '52', '54', '56', '58', '60'],
    description: `Our Faux Suede Sweater Dress is a slim fit dress perfect for everyday. 
    It includes 2 pockets, and a closed high neck. The sleeves are rolled, adding a perfect touch of cozy, relaxed style. 
    Please note: NO hijab included. Material is faux suede, a soft and warm material. One must be careful with stains/marks. 
    Iron on LOW HEAT inside out. Material may shrink a little after a few washes, recommended to size up. 
    Sizing: Measurements are true to size, please size UP if you want the length to be at your feet/below your ankles. Otherwise, stick to your usual size.`
  },
];


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
