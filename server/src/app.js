const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose'); // Підключаємо Mongoose
require('dotenv').config(); // Завантажуємо змінні середовища з .env
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Підключення до MongoDB успішне');
  })
  .catch((err) => {
    console.error('Помилка підключення до MongoDB:', err);
  });

app.use(cors("http://localhost:3001"));

app.use(express.json()); // Для роботи з JSON-запитами

app.use("/", routes)

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
