// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Import authentication routes
const authRoutes = require('./authRoutes');
const bookingRoutes = require('./bookingRoutes');
const paymentRoutes = require('./paymentRoutes');
const adminRoutes = require('./adminRoutes');

// Use authentication routes
app.use('/api/auth', authRoutes);

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins (adjust for production)
  },
});

// Attach Socket.IO instance to the app
app.set('io', io);

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Use booking routes
app.use('/api/bookings', bookingRoutes);

// Use payment routes
app.use('/api/payments', paymentRoutes);
console.log('Payment routes loaded');

// Use admin routes
app.use('/api/admin', adminRoutes);

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  console.log('Role received:', req.body.role); // Debugging
  const { role } = req.body;
  if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the BookYourGame API!');
});

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});