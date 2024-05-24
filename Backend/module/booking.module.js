const mongoose = require('mongoose');
const Booking = mongoose.Schema({
    userName: String,
    destination: String,
    email: String,
    seatNo: String,
    age: String,
    amount: String,
    dateAndTime: String,
    isDeleted: false,
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('booking', Booking);