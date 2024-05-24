const express = require('express');
const router = express.Router();  
const booking = require('../controller/booking.controller');

router.post('/createBooking',booking.createBooking);

module.exports = router;