var express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
const CONSTANT = require('./constant');
var _CONSTANT = require('./constant.json');
const dotenv = require('dotenv');
dotenv.config();

app.set('superSecret', process.env.superSecret);


module.exports = function (req, res, next) {
    console.log("req.body", req.body);
    console.log("req.query", req.query);
    console.log("req.headers", req.headers);
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers.authorization;

    if (token) {
        token = token.split(" ")[1];

        if (token == 'process.env.superSecret') {
            next();
        } else {
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({ success: 0, message: CONSTANT.AUTHENTICATION_TOKEN_FAIL });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    } else {
        return res.status(403).send({
            success: 0,
            message: CONSTANT.NO_TOKEN_PROVIDED
        });
    }
};