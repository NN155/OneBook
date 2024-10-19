const express = require('express');
const router = express.Router();
const RoomController = require('../controller/roomController');

router.use('/create', RoomController.createRoom);

// router.use('/get',);

module.exports = router;