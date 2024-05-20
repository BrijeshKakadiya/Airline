const mongoose = require('mongoose');
const Users = mongoose.Schema({
    userName:String,
    email: String,
    role: String,
    password: String,
    isDeleted: false,
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('users', Users);