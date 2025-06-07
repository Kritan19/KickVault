const express = require('express');
const router = express.Router();
// This is the critical line. Make sure it has ../
const pool = require('../db');

// GET all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while fetching products' });
  }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (product.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error while fetching product' });
  }
});

module.exports = router;