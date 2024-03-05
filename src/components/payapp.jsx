import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './pay';

const stripePromise = loadStripe('pk_test_51OqVUtSIYEMswIFxftBybCOXFd3MtysU2bQvl5B4fRu93xlwph3RRnf0cfq4t27GSaAFY4dQxB0RTNLyij8bWinp00qNi0Ejs1');

function Payapp() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentPage />
    </Elements>
  );
}

export default Payapp;
