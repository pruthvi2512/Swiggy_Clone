import React, { useState } from 'react';
import './pay.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

var element={
    iconStyle:"solid",
    style: {
        base: {
          iconColor: 'black',
          color: 'black',
          fontWeight: '500',
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {
            color: '#fce883',
          },
          '::placeholder': {
            color: '#87BBFD',
          },
        },
        invalid: {
          iconColor: '#FFC7EE',
          color: '#FFC7EE',
        }
}
}
function PaymentPage() {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const cartItems=useSelector(Store=>Store.cart.items);

  const sum = cartItems.reduce((total, item) => total + item.price / 100, 0);
  const charge=Math.floor((sum*0.17));
  const total=Math.floor(sum+charge);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log(paymentMethod);
      setPaymentError(null);
      setPaymentSuccess('Payment successful your order is on the way!');
    }
  };

  return (
    <div className='paydiv'>
      <h2>Payment Page</h2>
      <h3>Total:&nbsp;&#8377;{total}</h3>
      <form  className="form" onSubmit={handleSubmit}>
        <label className='input'>
          
          <CardElement
            options={element}
          />
        </label><br />
        <button type="submit" className="btn btn-success but" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>{paymentSuccess}</div>}
    </div>

  );
}

export default PaymentPage;
