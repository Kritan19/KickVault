const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors()); // Allows requests from other origins (our React frontend)
app.use(express.json()); // Allows us to parse JSON in the request body

// A simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the KickVault server!' });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});