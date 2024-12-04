import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';

const NavbarWrapper = styled.nav`
  background-color: #0d2030;  /* Dark Navy */
  color:#968041 ;/* Gold */
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;  /* Adjust as needed */
`;

const NavbarTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color:  #917651;
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: #968041;/* Gold */
  text-decoration: none;
  font-weight: bold;
  
  &.active {
    text-decoration: underline;
  }

  &:hover {
    color: #968041; /* Slightly lighter gold */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarTop>
        <span>House of Noor</span>
      </NavbarTop>
      <NavbarLinks>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/abayas">Abayas</StyledLink>
        <StyledLink to="/bags">Bags</StyledLink>
        <StyledLink to="/sale">Sale</StyledLink>
        <StyledLink to="/important-info">Important Info</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <IconWrapper>
          <FaUserAlt size={24} />
          <FaShoppingCart size={24} />
        </IconWrapper>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
