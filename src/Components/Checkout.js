import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import 'bootstrap/dist/css/bootstrap.css';

const Checkout = ({totalPrice}) => {
    const tokenHandler = (token) => {
        console.log(token);
    }
  return (
    <StripeCheckout
    amount={totalPrice * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51Oggo2SGP4UEUbDW6ZmrjRhDbAtOJm6sK76XIfeOzHGGCUlOZfbMCICHK0JUxwjG1bX5FK031Kd95tki7sma23bA00nC4zBtmq'
    currency='INR'
    >
        <button className='btn btn-primary'>Pay Now</button>
    </StripeCheckout>
  );
};

export default Checkout;
