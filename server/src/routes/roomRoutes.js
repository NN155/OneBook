const express = require('express');
const router = express.Router();
const RoomController = require('../controller/roomController');
const multer = require('multer');
const storage = multer.memoryStorage(); // Використовуємо пам'ять для зберігання файлів
const upload = multer({ storage });

router.use('/create', upload.single('image'), RoomController.createRoom);

// router.use('/get',);

module.exports = router;