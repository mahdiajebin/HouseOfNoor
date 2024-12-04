import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  background: url('your-hero-image.jpg') center/cover no-repeat;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HeroButton = styled.button`
  background-color: transparent;
  border: 2px solid gold;
  color: gold;
  padding: 10px 20px;
  cursor: pointer;
`;

const HeroSection = () => (
  <HeroWrapper>
    <HeroButton>Shop Now</HeroButton>
  </HeroWrapper>
);

export default HeroSection;
