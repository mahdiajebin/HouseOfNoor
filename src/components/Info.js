import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h1`
  text-align: center;
  color: #003366;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 16px;
`;

const Info = () => {
  return (
    <InfoContainer>
      <InfoTitle>Important Information</InfoTitle>
      <InfoText>
        <strong>Shipping Policy:</strong> We process and ship orders within 3-5 business days. 
        Please allow additional time for international shipments.
      </InfoText>
      <InfoText>
        <strong>Return Policy:</strong> Returns are accepted within 30 days of delivery. 
        Items must be unused, unwashed, and in their original packaging. 
        Custom items are non-refundable.
      </InfoText>
      <InfoText>
        <strong>Contact Us:</strong> If you have any questions, please contact us at 
        <a href="mailto:info@houseofnoor.com"> info@houseofnoor.com</a>.
      </InfoText>
    </InfoContainer>
  );
};

export default Info;
