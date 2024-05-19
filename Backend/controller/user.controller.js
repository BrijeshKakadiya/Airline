const User = require("../module/user.muldule");
const commonService = require('../common/common');
const jwt = require('jsonwebtoken');
const CONSTANT = require('../common/constant');
const crypto = require('crypto');

/*
TYPE: POST
DETAILS: To create new User
*/
exports.createUser = (req, res) => {
    if (!req.body.userName || !req.body.email || !req.body.password) {
        res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.REQUIRED_FIELDS_MISSING });
    } else if (!commonService.isValidateEmail(req.body.email)) {
        res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.INVALID_EMAIL });
    } else {
        User.findOne({ email: req.body.email, isDeleted: false })
            .then(user => {
                if (user) {
                    res.json({ status: CONSTANT.FAIL, message: "User already exists with same email!" });
                } else {
                    commonService.encryptPassword(req.body.password, (newPassword) => {
                        const user = {
                            userName: req.body.firstName ? req.body.firstName : '',
                            email: req.body.email ? req.body.email : '',
                            isDeleted: false,
                            password: newPassword
                        };
                        User.create(user, function (err, result) {
                            if (err)
                                res.json({ status: "fail", message: "Fail to added Data!", err: err });
                            else
                                res.json({ status: "success", message: "Registration successfully!!!", data: result });
                        });
                    });
                }
            });
    }
}

/*
TYPE: POST
DETAILS: To Login user using email
*/
exports.login = (req, res) => {
    var email = req.body.email;
    if (commonService.isUndefinedOrNull(req.body.email)) {
        return res.json({ status: CONSTANT.FAIL, message: "Email address is required!" });
    } else if (commonService.isUndefinedOrNull(req.body.password)) {
        return res.json({ status: CONSTANT.FAIL, message: "Password is required!" });
    } else {
        User.findOne({ email, isDeleted: false })
            .then(user => {
                if (user) {
                    commonService.decryptPassword(user.password, (decryptedPassword) => {
                        if (req.body.password == decryptedPassword) {
                            var userDetails = {
                                userName: user.userName,
                                email: user.email,
                                _id: user._id
                            }
                            const token = jwt.sign(userDetails, process.env.superSecret, {
                                expiresIn: 2592000
                            });
                            return res.send({ status: CONSTANT.SUCCESS, message: CONSTANT.MESSAGE.LOGIN_SUCCESS, data: userDetails, token: 'Basic ' + token });
                        } else {
                            res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.PASSOWRD_INVALID });
                        }
                    });
                } else {
                    res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.EMAIL_INVALID });
                }
            }).catch(err => {
                return res.send({
                    status: CONSTANT.FAIL,
                    message: err.message || "Some error occurred while retrieving user."
                });
            });
    }
}
