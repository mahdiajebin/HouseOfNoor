import React from 'react';
import ProductGrid from './ProductGrid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const SectionContainer = styled.section`
  text-align: center; /* Centers the content within the section horizontally */
  margin: 20px 0;
`;

const ViewAllButton = styled.button`
  background-color:  #968041;
  color:white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color:#f0f0f0;
    color: #968041 ;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block; /* Makes the link behave like a block to wrap the button properly */
  text-decoration: none;
  margin-top: 10px;
`;

const Section = ({ title, products, link }) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <ProductGrid products={products} />
      <StyledLink to={link}>
        <ViewAllButton>View All {title}</ViewAllButton>
      </StyledLink>
    </SectionContainer>
  );
};

export default Section;
