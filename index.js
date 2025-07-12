// Загружаем переменные из .env
require('dotenv').config();
// Импортируем Express
const express = require('express');
const app = express();
app.use(express.json());
// Берём порт из .env, или используем 5000 по умолчанию
const PORT = process.env.PORT || 5000;

// Маршрут по умолчанию
app.get('/', (req, res) => {
    res.send('Сервер работает 👋');
  });
// post запрос
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send(`Привет, ${name}!`);
});

app.get('/hello', (req, res) => {
    res.send(`Привет`);
  });
// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀Сервер запущен: http://localhost:${PORT}`);
  });