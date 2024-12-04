import React, { useState } from 'react';
import { FaUserAlt, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #003366; /* Dark Navy */
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

  a {
    text-decoration: none;
    color: #968041;
    margin: 10px 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;

    &:hover {
      color: #ffffff;
    }
  }

  .close-btn {
    align-self: flex-end;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
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

  /* Hide on desktop screens */
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
          <h1><strong>HouseofNoor</strong></h1>
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
        {/* Close Button */}
        <FaTimes className="close-btn" onClick={toggleMenu} />
        <a href="#home">Home <span>→</span></a>
        <a href="#abyas">Abayas <span>→</span></a>
        <a href="#bags">Bags <span>→</span></a>
        <a href="#sale">Sale <span>→</span></a>
        <a href="#importantinfo">Important Info <span>→</span></a>
      </MenuWrapper>

      {/* Desktop Navigation */}
      <DesktopMenu>
        <a href="#home">Home</a>
        <a href="#abaya">Abayas</a>
        <a href="#bags">Bags</a>
        <a href="#sale">Sale</a>
        <a href="#importantinfo">Important Info</a>
      </DesktopMenu>
    </NavbarWrapper>
  );
};

export default Navbar;