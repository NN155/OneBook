const express = require('express');
const router = express.Router();
const roomRoutes = require('./roomRoutes');

router.use('/api/rooms', roomRoutes);


module.exports = router;