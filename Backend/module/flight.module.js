const mongoose = require('mongoose');
const Flight = mongoose.Schema({
    flightName: String,
    destination: String,
    totalSeats: String,
    bookingSeats: String,
    dateAndTime: String,
    isDeleted: false,
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('flight', Flight);