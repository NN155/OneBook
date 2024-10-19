const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Створюємо схему для кімнат
const roomSchema = new Schema({
  name: {
    type: String,
    required: true // Обов'язкове поле
  },
  type: {
    type: String,
    required: true // Наприклад: стандарт, люкс
  },
  price: {
    type: Number,
    required: true // Вартість за ніч
  },
  status: {
    type: String,
    enum: ['available', 'booked', 'unavailable'], // Можливі статуси кімнати
    default: 'available' // Стандартне значення
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Додає поля createdAt і updatedAt
});

// Створюємо модель Room на основі схеми
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
