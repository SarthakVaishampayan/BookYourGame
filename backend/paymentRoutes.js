const express = require('express');
const Stripe = require('stripe');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

console.log('Payment routes initialized');

// Create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  console.log('Create Payment Intent endpoint hit');
  console.log('Request body:', req.body);
  const { amount, currency } = req.body;

  try {
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to smallest currency unit (e.g., cents)
      currency: currency || 'usd',
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      message: 'Payment intent created successfully',
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ message: 'Failed to create payment intent', error });
  }
});

// Verify payment status
router.get('/verify/:paymentIntentId', async (req, res) => {
  const { paymentIntentId } = req.params;

  try {
    // Retrieve the payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    res.status(200).json({
      status: paymentIntent.status,
      message: 'Payment status retrieved successfully',
    });
  } catch (error) {
    console.error('Error verifying payment status:', error);
    res.status(500).json({ message: 'Failed to verify payment status', error });
  }
});

module.exports = router;