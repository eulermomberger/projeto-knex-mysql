const express = require('express');
const db = require('./db'); // Arquivo onde configuramos o Knex

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Rota para listar todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.json({ users });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios' });
  }

  try {
    await db('users').insert({ name, email });
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/', async (req, res) => {
  res.send(`
    <h1>Knex API</h1>
    <h2>Avaible routes</h2>
    <pre>
      GET, POST /users
    </pre>
  `.trim());
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
