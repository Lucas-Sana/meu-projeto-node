const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const db = require('./db/db'); // Importe a conexão com o banco de dados

const app = express();
const port = 4000;

// Middleware para processar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.use('/', userRoutes);

// Aguardar 10 segundos antes de iniciar o servidor
setTimeout(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}, 10000); // 10 segundos de delay