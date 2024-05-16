const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');
const PORT = 4000;
var path = require('path');
var static = require("serve-static");
const CONSTANT = require("./common/constant");
const dotenv = require('dotenv'); 
dotenv.config()


//Import Routing Files
// const User = require("./routes/user.route")
// const Customer = require("./routes/customer.route")

// create server
var server = http.createServer(app)

app.use(static(path.join(__dirname, 'public')))
app.use(express.static('public'))
// app.use("/upload_attachments", express.static(path.join(__dirname, "/upload_attachments")));
// app.use('/logo', express.static(path.join(__dirname, '/logo')));

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(cors())

app.set("view engine", "ejs");
app.set("views", "views");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
})

// set routes with server
// app.use("/user", User)
// app.use("/customer", Customer)

//config database
const database = require("./common/db");
mongoose.Promise = global.Promise;

// connecting to database
mongoose.connect(database.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database")
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
})

server.listen(PORT, '0.0.0.0', function () {
  if (!fs.existsSync(CONSTANT.DIR)) {
    fs.mkdirSync(CONSTANT.DIR, {
      recursive: true
    });
  }
  console.log("Express http server listening on *:" + PORT);
})
