// src/index.js
require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});