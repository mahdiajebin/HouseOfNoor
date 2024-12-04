import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // This will handle the form

const stripePromise = loadStripe('pk_test_51QS6OOBIGXl9Fkj3gTmHBjiiiywI4MZOdY1BJYXoyAiHypN1EecKHXuTA02xlUM4pGSArnHxCbUJCjv0VdbQTRO500tJk6rFrz');

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
