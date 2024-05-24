const express = require('express');
const router = express.Router();  
const flight = require('../controller/flight.controller');

router.post('/createFlight',flight.createFlight);
router.get('/getAllFlights', flight.findAllFlights);
router.post('/deleteFlightById/:Id', flight.deleteFlight);

module.exports = router;