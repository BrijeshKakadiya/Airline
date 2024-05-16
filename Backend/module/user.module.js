const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo:String,
    age:String,
    gender:String,
    password: String,
    status: String,
    type:String,
    address:{
        flateNo:String,
        firstLine:String,
        secondLine:String,
        city:String,
        state:String,
        pinCode:String,
    },
    isDeleted: {type: Boolean, default: false} 
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);