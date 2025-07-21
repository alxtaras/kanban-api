# 🗂️ Kanban API

Простое API на Express.js для управления задачами в стиле Kanban (без базы данных, данные хранятся в памяти).

## 🚀 Быстрый старт

```bash
git clone https://github.com/yourname/kanban-api.git
cd kanban-api
npm install
npm run dev # или nodemon index.js
```
Создай .env:
PORT=3000
## 📚 Методы API
### GET /tasks
Получить список всех задач.
### POST /tasks
Создать новую задачу.
Тело запроса:
```json
{
  "title": "Новая задача"
}
```
### PATCH /tasks/:id
Обновить заголовок задачи по id.
Тело запроса:
```json
{
  "title": "Обновлённая задача"
}
```
### DELETE /tasks/:id
Удалить задачу по id.
### Структура проекта
```bash
kanban-api/
├── .env
├── index.js          # основной сервер
├── routes/
│   └── hello.js      # first step in js
│   └── tasks.js      # роуты CRUD
├── package.json
└── README.md         # этот файл
```
