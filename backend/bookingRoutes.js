const express = require('express');
const router = express.Router();
const { bookings } = require('./data'); // Import the shared bookings array

console.log('Bookings array on initialization:', bookings); // Debugging

// Create a new booking
router.post('/create', (req, res) => {
  const { user, console, date, time } = req.body;

  // Validate input
  if (!user || !console || !date || !time) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Ensure bookings array is defined
  if (!Array.isArray(bookings)) {
    return res.status(500).json({ message: 'Bookings data is not initialized' });
  }

  // Create a new booking
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

// Update a booking
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { date, time } = req.body;

  const booking = bookings.find(b => b.id === parseInt(id));
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  if (date) booking.date = date;
  if (time) booking.time = time;

  req.app.get('io').emit('bookingUpdate', { action: 'update', booking });

  res.status(200).json({ message: 'Booking updated successfully', booking });
});

// Cancel a booking
router.delete('/cancel/:id', (req, res) => {
  const { id } = req.params;

  const bookingIndex = bookings.findIndex(b => b.id === parseInt(id));
  if (bookingIndex === -1) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  const canceledBooking = bookings.splice(bookingIndex, 1)[0];

  req.app.get('io').emit('bookingUpdate', { action: 'cancel', booking: canceledBooking });

  res.status(200).json({ message: 'Booking canceled successfully', booking: canceledBooking });
});

// Get all bookings
router.get('/', (req, res) => {
  res.status(200).json({ bookings });
});

module.exports = router;