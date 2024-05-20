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
                            userName: req.body.userName ? req.body.userName : '',
                            email: req.body.email ? req.body.email : '',
                            role: req.body.role ? req.body.role : '',
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

/*
TODO: GET
Topic: get all users
*/

exports.findAllUser = (req, res) => {
    User.find({ isDeleted: false })
        .then(user => {
            if (!user || user <= 0) {
                res.json({
                    status: CONSTANT.FAIL,
                    message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.NOT_FOUND
                });
            } else {
                res.json({
                    status: CONSTANT.SUCCESS,
                    message:
                        CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.FOUND_SUCCESSFULLY,
                    data: user
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
Topic: delete user by id
*/
exports.deleteUser = (req, res) => {
    const Id = req.params.Id;
    User.findByIdAndUpdate(
        Id,
        { $set: { isDeleted: true } },
        { new: false },
        function (err, result) {
            if (err) {
                res.send({ status: CONSTANT.ERROR, message: err });
            }
            res.send({
                status: CONSTANT.SUCCESS,
                message:
                    CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.DELETE_SUCCESSFULLY
            });
        }
    );

};
