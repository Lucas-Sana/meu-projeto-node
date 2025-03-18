const db = require('../db/db');

const registerUser = (req, res) => {
  const { name, email } = req.body;

  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    } else {
      res.status(200).json({ message: 'Usuário cadastrado com sucesso', id: result.insertId });
    }
  });
};

module.exports = { registerUser };