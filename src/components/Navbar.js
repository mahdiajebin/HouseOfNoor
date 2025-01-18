import React, { useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Navbar.css'; // Import CSS file for styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Logo */}
        <div className="logo-section">
          <h1>House of Noor</h1>
          <span>Your Destination for Modest Luxury</span>
        </div>

        {/* User and Cart Icons */}
        <div className="icon-wrapper">
          <FaUserAlt size={20} />
          <Link to="/cart">
            <FaShoppingCart />
            {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
          </Link>
        </div>
      </div>

      {/* Slide-Out Menu */}
      <div className={`menu-wrapper ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-btn" onClick={toggleMenu} />
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/abayas" onClick={toggleMenu}>Abayas</Link>
        <Link to="/bags" onClick={toggleMenu}>Bags</Link>
        <Link to="/sale" onClick={toggleMenu}>Sale</Link>
        <Link to="/important-info" onClick={toggleMenu}>Important Info</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-menu">
        <Link to="/">Home</Link>
        <Link to="/abayas">Abayas</Link>
        <Link to="/bags">Bags</Link>
        <Link to="/sale">Sale</Link>
        <Link to="/important-info">Important Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
