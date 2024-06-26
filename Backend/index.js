const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

let User = require('./route/user.route')
let Flight = require('./route/flight.route')
let Booking = require('./route/booking.route')

//create express app
var http = require('http');
var server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }))
    // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

//configuration of database
const database = require('./config/database');
mongoose.Promise = global.Promise;

//connecting to database
mongoose.connect(database.DB, {
   useNewUrlParser: true, 
}).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

app.use('/user', User);
app.use('/flight', Flight);
app.use('/booking', Booking);


server = app.listen(PORT, '0.0.0.0', function() {
    console.log("Server is running on Port: " + PORT);
});