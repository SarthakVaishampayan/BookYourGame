const express = require('express');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const { bookings } = require('./data'); // Import shared data

// Load environment variables
dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  console.log('Role received:', req.body.role); // Debugging
  const { role } = req.body;
  if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};

// Get all bookings (Admin only)
router.get('/bookings', isAdmin, (req, res) => {
  res.status(200).json({ bookings });
});

// Update booking status (Admin only)
router.put('/bookings/:id', isAdmin, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const booking = bookings.find(b => b.id === parseInt(id));
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  booking.status = status || booking.status;

  res.status(200).json({ message: 'Booking status updated successfully', booking });
});

// Delete a booking (Admin only)
router.delete('/bookings/:id', isAdmin, (req, res) => {
  const { id } = req.params;

  const bookingIndex = bookings.findIndex(b => b.id === parseInt(id));
  if (bookingIndex === -1) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  const deletedBooking = bookings.splice(bookingIndex, 1);

  res.status(200).json({ message: 'Booking deleted successfully', booking: deletedBooking });
});

// Get all payment intents (Admin only)
router.get('/payments', isAdmin, async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({ limit: 10 });
    res.status(200).json({ paymentIntents });
  } catch (error) {
    console.error('Error fetching payment intents:', error);
    res.status(500).json({ message: 'Failed to fetch payment intents', error });
  }
});

// Create a new booking
router.post('/create', (req, res) => {
  const { user, console, date, time } = req.body;

  if (!user || !console || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBooking = {
    id: bookings.length + 1,
    user,
    console,
    date,
    time,
    status: 'confirmed',
  };

  bookings.push(newBooking);

  req.app.get('io').emit('bookingUpdate', { action: 'create', booking: newBooking });

  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
});

module.exports = router;