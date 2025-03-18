const mysql = require('mysql2');
require('dotenv').config();

let db;

const connectWithRetry = () => {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
  });

  db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados. Tentando novamente em 5 segundos...', err);
      setTimeout(connectWithRetry, 5000); // Tenta reconectar após 5 segundos
    } else {
      console.log('Conectado ao banco de dados MySQL');
    }
  });

  // Lidar com erros de conexão após a conexão inicial
  db.on('error', (err) => {
    console.error('Erro na conexão com o banco de dados:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectWithRetry(); // Reconecta se a conexão for perdida
    } else {
      throw err;
    }
  });
};

connectWithRetry();

module.exports = db;