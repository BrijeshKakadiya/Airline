const mongoose = require('mongoose');
const Users = mongoose.Schema({
    UserName:String,
    email: String,
    isDeleted: false,
    password: String
}, {
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('users', Users);