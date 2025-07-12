// Загружаем переменные из .env
require('dotenv').config();
// Импортируем Express
const express = require('express');
const app = express();
// Берём порт из .env, или используем 5000 по умолчанию
const PORT = process.env.PORT || 5000;
// Маршрут по умолчанию
app.get('/', (req, res) => {
    res.send('Привет! Сервер работает 👋');
  });
// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
  });