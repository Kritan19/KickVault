require('dotenv').config();
const express = require('express');
const cors =require('cors');
const pool = require('./db');

// --- Route Imports ---
const productsRouter = require('./routes/products'); // <-- ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// --- API Routes ---
app.use('/api/products', productsRouter); // <-- ADD THIS

// Test route for the database
app.get('/db', async (req, res) => {
  try {
    const dbTime = await pool.query('SELECT NOW()');
    res.json({
      message: 'Database connection successful!',
      databaseTime: dbTime.rows[0].now
    });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Failed to execute query.' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});