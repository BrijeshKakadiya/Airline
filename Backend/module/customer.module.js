const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    age: String,
    gender: String,
    city: String,
    state: String,
    pinCode: String,
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('customer', CustomerSchema);