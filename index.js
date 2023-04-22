const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para processar o formulário
app.post('/apostar', (req, res) => {
  const valor = req.body.valor;
  const tipo = req.body.tipo;

  // Processar a aposta e retornar uma resposta
  const resposta = `Sua aposta de ${valor} reais no tipo ${tipo} foi processada com sucesso!`;
  res.send(resposta);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});