// Загружаем переменные из .env
require('dotenv').config();
// Импортируем Express
const express = require('express');
const app = express();
// Берём порт из .env, или используем 5000 по умолчанию
const PORT = process.env.PORT || 5000;
// Подключаем middleware для чтения JSON
app.use(express.json());
//Импорт маршрутов tasks
const taskRoutes = require('./routes/tasks')

app.use('/tasks', taskRoutes);

// Маршрут по умолчанию - корневой маршрут
app.get('/', (req, res) => {
    res.send('Server work! 👋 It`s simple kanban');
  });
// post запрос
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send(`Hi, ${name}!`);
});

app.get('/hello', (req, res) => {
    res.send(`Hello!`);
  });
// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀Server work: http://localhost:${PORT}`);
  });