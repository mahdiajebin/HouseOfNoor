import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #151a2e ;/* Dark Navy */
  color: ##968041; /* Gold */
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 House of Noor. All Rights Reserved.</p>
      <p>Follow us on social media: Instagram | Facebook | Twitter</p>
    </FooterWrapper>
  );
};

export default Footer;
