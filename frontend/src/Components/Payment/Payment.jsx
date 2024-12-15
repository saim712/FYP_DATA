import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe (use your publishable key)
const stripePromise = loadStripe('pk_test_51QVHNzFZJ4yU2KbNXCvHzS86onxtUTCWgOVkceONlptIg5n8TLLQ8Gx7rvc6V7wGrD1YVIBLwe2xLQdbx3frL2HH00HhMtQxZq');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again.");
      setIsProcessing(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 2000 }), // Example amount (20.00 USD)
      });

      if (!response.ok) {
        throw new Error("Failed to create payment intent. Please try again later.");
      }

      const { clientSecret } = await response.json();
      const cardElement = elements.getElement(CardElement);
       console.log(response)

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setSuccess(true);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border p-4 rounded-md bg-gray-50">
        <CardElement
          className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': { color: '#aab7c4' },
              },
              invalid: { color: '#9e2146' },
            },
          }}
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success ? (
        <div className="text-green-500 font-semibold">Payment successful! Thank you for your purchase.</div>
      ) : (
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className={`w-full px-4 py-2 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Pay $20.00'}
        </button>
      )}
    </form>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Payment</h2>
          <CheckoutForm />
        </div>
      </div>
    </Elements>
  );
};

export default Payment;
