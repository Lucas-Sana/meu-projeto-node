// src/controllers/userController.js
const db = require('../db/db');

const createUser = (req, res) => {
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, email });
  });
};

module.exports = { createUser };