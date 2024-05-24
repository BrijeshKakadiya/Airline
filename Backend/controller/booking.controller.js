const Booking = require("../module/booking.module");
const CONSTANT = require('../common/constant');
/*
TYPE: POST
DETAILS: To create new Booking
*/

exports.createBooking = (req, res) => {
    const flight = {
        UserName: req.body.userName,
        destination: req.body.destination,
        email: req.body.email,
        seatNo: req.body.seatNo,
        age: req.body.age,
        amount: req.body.amount,
        dateAndTime: req.body.dateAndTime,
        isDeleted: false
    };

    Booking.create(flight, function (err, result) {
        if (err)
            res.json({ status: CONSTANT.FAIL, message: "", err: err });
        else
            res.json({ status: CONSTANT.SUCCESS, message: "Booking successfully!!!", data: result });
    });
}