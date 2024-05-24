const Flight = require("../module/flight.module");
const CONSTANT = require('../common/constant');
/*
TYPE: POST
DETAILS: To create new Flight
*/

exports.createFlight = (req, res) => {
        const flight = {
            flightName: req.body.flightName,
            destination: req.body.destination,
            totalSeats: req.body.totalSeats,
            bookingSeats: req.body.bookingSeats,
            dateAndTime: req.body.dateAndTime,
            isDeleted: false
        };

        Flight.create(flight, function (err, result) {
            if (err)
                res.json({ status: CONSTANT.FAIL, message: "", err: err });
            else
                res.json({ status: CONSTANT.SUCCESS, message: "Flight added successfully!!!", data: result });
        });
}


/*
TODO: GET
Topic: get all flights
*/
exports.findAllFlights = (req, res) => {
    Flight.find({ isDeleted: false })
        .then(flight => {
            if (!flight || flight <= 0) {
                res.json({
                    status: CONSTANT.FAIL,
                    message: "Flights" + CONSTANT.MESSAGE.NOT_FOUND
                });
            } else {
                res.json({
                    status: CONSTANT.SUCCESS,
                    message:
                        "Flights" + CONSTANT.MESSAGE.FOUND_SUCCESSFULLY,
                    data: flight
                });
            }
        })
        .catch(err => {
            res.send({
                status: CONSTANT.FAIL,
                message: err.message || CONSTANT.MESSAGE.ERROR_OCCURRED
            });
        });
};


/*
TODO: POST
Topic: delete flight by id
*/
exports.deleteFlight = (req, res) => {
    const Id = req.params.Id;
    Flight.findByIdAndUpdate(
        Id,
        { $set: { isDeleted: true } },
        { new: false },
        function (err, result) {
            if (err) {
                res.send({ status: CONSTANT.ERROR, message: err });
            } else {
                res.send({
                    status: CONSTANT.SUCCESS,
                    message:
                        "Flight" + CONSTANT.MESSAGE.DELETE_SUCCESSFULLY
                });
            }
        }
    );

};
