import React from 'react';
import styled from 'styled-components';

// Define the styled button component
const StyleButton = styled.button`
  background-color: transparent;
  color: #968041; /* Navy Blue text */
  border: 2px solid #968041; /* Border color */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #968041;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const TransparentButton = ({ text, onClick }) => {
  return (
    <StyleButton onClick={onClick}>
      {text}
    </StyleButton>
  );
};

export default TransparentButton;
