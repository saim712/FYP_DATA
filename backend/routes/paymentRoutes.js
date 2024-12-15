const express = require('express');
const router = express.Router();
// const Stripe = require('stripe');

// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  //
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Access the secret key



// Routes
// Route to Create Payment Intent
// router.post('/create-payment-intent', async (req, res) => {
//     try {
//       const { amount } = req.body; // Get the payment amount from the request
  
//       // Create a PaymentIntent with the specified amount
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount, // Amount in cents
//         currency: 'usd', // Change to your desired currency
//       });
  
//       res.send({
//         clientSecret: paymentIntent.client_secret, // Send client secret to frontend
//       });
//     } catch (error) {
//         console.error('Stripe Payment Intent Error:', error.message); // More detailed logging
//         res.status(500).send({ error: error.message });
      
//     }
//   });





router.post('/create-payment-intent', async (req, res) => {
    try {
      const { amount } = req.body; // Get the payment amount from the request
      console.log(`Received amount: ${amount}`); // Log the received amount
  
      // Create a PaymentIntent with the specified amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // Amount in cents
        currency: 'usd', // Change to your desired currency
      });
  
      console.log('PaymentIntent created:', paymentIntent); // Log the PaymentIntent details
  
      res.send({
        clientSecret: paymentIntent.client_secret, // Send client secret to frontend
      });
    } catch (error) {
      console.error('Error creating payment intent:', error); // Log the error
      res.status(500).send({ error: error.message });
    }
  });
  

  module.exports=router;