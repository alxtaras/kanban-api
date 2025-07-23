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
const taskRoutes = require('./routes/tasks');
const helloRoutes = require('./routes/hello');
const columnsRoutes = require('./routes/columns');
app.use('/tasks', taskRoutes);
app.use('/hello', helloRoutes);
app.use('/columns', columnsRoutes);

// Маршрут по умолчанию - корневой маршрут
app.get('/', (req, res) => {
    res.send('Server work! 👋 It`s simple kanban');
  });

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀Server work: http://localhost:${PORT}`);
    console.log('PORT from .env: ', process.env.PORT);
  });