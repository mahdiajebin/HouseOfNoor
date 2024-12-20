import React, { useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav`
  background-color: #060e2e; /* Dark Navy */
  color: #968041; /* Gold */
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #968041;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Cursive', serif;
    font-weight: bold;
  }

  span {
    font-size: 0.7rem;
    font-style: italic;
    letter-spacing: 1px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 15px;

  svg {
    cursor: pointer;
    color: #968041;
    font-size: 1.2rem;

    &:hover {
      color: #ffffff;
    }
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #003366;
  color: #968041;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  .close-btn {
    align-self: flex-end;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #968041;
  margin: 10px 0;
  font-size: 1.2rem;

  &:hover {
    color: #ffffff;
  }
`;

const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: #968041;
      font-size: 1rem;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const HamburgerIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: #968041;

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarWrapper>
      <NavbarTop>
        {/* Hamburger Icon */}
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>

        {/* Logo */}
        <LogoSection>
          <h1>House of Noor</h1>
          <span>Your Destination for Modest Luxury</span>
        </LogoSection>

        {/* User and Cart Icons */}
        <IconWrapper>
          <FaUserAlt size={20} />
          <FaShoppingCart size={20} />
        </IconWrapper>
      </NavbarTop>

      {/* Slide-Out Menu */}
      <MenuWrapper isOpen={menuOpen}>
        <FaTimes className="close-btn" onClick={toggleMenu} />
        <MenuItem to="/" onClick={toggleMenu}>Home</MenuItem>
        <MenuItem to="/abayas" onClick={toggleMenu}>Abayas</MenuItem>
        <MenuItem to="/bags" onClick={toggleMenu}>Bags</MenuItem>
        <MenuItem to="/sale" onClick={toggleMenu}>Sale</MenuItem>
        <MenuItem to="/important-info" onClick={toggleMenu}>Important Info</MenuItem>
      </MenuWrapper>

      {/* Desktop Navigation */}
      <DesktopMenu>
        <Link to="/">Home</Link>
        <Link to="/abayas">Abayas</Link>
        <Link to="/bags">Bags</Link>
        <Link to="/sale">Sale</Link>
        <Link to="/important-info">Important Info</Link>
      </DesktopMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
