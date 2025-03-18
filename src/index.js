const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 4000;

// Middleware para processar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});