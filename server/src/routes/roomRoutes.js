const express = require('express');
const router = express.Router();
const RoomController = require('../controller/roomController');
const upload  = require('../middlewares/multer');

router.use('/create', upload.single('image'), RoomController.createRoom);

// router.use('/get',);

module.exports = router;