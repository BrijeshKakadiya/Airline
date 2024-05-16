const jwt = require("jsonwebtoken");
const USER_COLLECTION = require('../module/user.module')
const commonService = require("../common/common");
const CONSTANT = require("../common/constant");



/*
TODO: POST
Topic: Register User
*/
exports.registerUser = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const gender = req.body.gender
    const password = req.body.password
    const status = req.body.status
    const phoneNo = req.body.phoneNo
    const age = req.body.age
    const type = req.body.type
    const flateNo = req.body.flateNo
    const firstLine = req.body.firstLine
    const secondLine = req.body.secondLine
    const city = req.body.city
    const state = req.body.state
    const pinCode = req.body.pinCode

    if (commonService.isUndefinedOrNull(password) || commonService.isUndefinedOrNull(email)) {
        return res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.REQUIRED_FIELDS_MISSING });
    } else {
        if (!commonService.isValidateEmail(email)) {
            return res.json({
                status: CONSTANT.FAIL,
                message: CONSTANT.MESSAGE.EMAIL_INVALID
            });
        } else {
            USER_COLLECTION.findOne({ email: email, isDeleted: false }).then(
                user => {
                    if (user) {
                        return res.json({
                            status: CONSTANT.FAIL,
                            message: CONSTANT.MESSAGE.EMAIL_EXIST
                        });
                    } else {
                        commonService.encryptPassword(password, newPassword => {
                            const user = {
                                firstName: firstName ? firstName : "",
                                lastName: lastName ? lastName : "",
                                email: email,
                                phoneNo: phoneNo ? phoneNo : "",
                                age: age ? age : "",
                                gender: gender ? gender : "",
                                type: type ? type : CONSTANT.ADMIN,
                                status: status ? status : CONSTANT.DEACTIVE,
                                password: newPassword,
                                address: {
                                    flateNo: flateNo ? flateNo : "",
                                    firstLine: firstLine ? firstLine : "",
                                    secondLine: secondLine ? secondLine : "",
                                    city: city ? city : "",
                                    state: state ? state : "",
                                    pinCode: pinCode ? pinCode : ""
                                },
                                isDeleted: false
                            };
                            USER_COLLECTION.create(user, function (err, result) {
                                if (err) {
                                    return res.json({ status: CONSTANT.FAIL, message: "", err: err });
                                } else {
                                    return res.json({ status: CONSTANT.SUCCESS, message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.REGISTER_SUCCESSFULLY, data: result });
                                }
                            });
                        });
                    }
                })
        }
    }
}

/*
TODO: POST
Topic: Login User
*/
exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    if (
        commonService.isUndefinedOrNull(password) ||
        commonService.isUndefinedOrNull(email)
    ) {
        return res.json({
            status: CONSTANT.FAIL,
            message: CONSTANT.MESSAGE.REQUIRED_FIELDS_MISSING
        });
    } else {
        if (!commonService.isValidateEmail(email)) {
            return res.json({
                status: CONSTANT.FAIL,
                message: CONSTANT.MESSAGE.EMAIL_INVALID
            });
        } else {
            //check user is reister or not
            USER_COLLECTION.findOne({ email: email, isDeleted: false })
                .then(user => {
                    if (user) {
                        commonService.decryptPassword(user.password, decryptedPassword => {
                            if (password == decryptedPassword) {
                                var userDetails = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                    phoneNo: user.phoneNo,
                                    age: user.age,
                                    gender: user.gender,
                                    type: user.type,
                                    address: user.address,
                                    status: user.status,
                                    id: user._id
                                };
                                // create token for session
                                var token = jwt.sign(userDetails, process.env.superSecret, {
                                    expiresIn: 2592000 // expires in 30 days
                                });
                                return res.send({
                                    status: CONSTANT.SUCCESS,
                                    message: CONSTANT.MESSAGE.LOGIN_SUCESSFULLY,
                                    data: userDetails,
                                    token: "Basic " + token
                                });
                            } else {
                                return res.send({
                                    status: CONSTANT.FAIL,
                                    message: CONSTANT.MESSAGE.PASSOWRD_INVALID
                                });
                            }
                        });
                    } else {
                        return res.send({
                            status: CONSTANT.FAIL,
                            message: CONSTANT.MESSAGE.EMAIL_INVALID
                        });
                    }
                })
                .catch(err => {
                    return res.send({
                        status: CONSTANT.FAIL,
                        message: err.message || CONSTANT.MESSAGE.ERROR_OCCURRED
                    });
                });
        }
    }
};

/*
TODO: GET
Topic: get all users
*/

exports.findAllUser = (req, res) => {
    USER_COLLECTION.find({ isDeleted: false })
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
TODO: GET
Topic: get user by id
*/

exports.getUserById = (req, res) => {
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        USER_COLLECTION.findById(Id).then(user => {
            if (user) {
                res.send({
                    status: CONSTANT.SUCCESS,
                    message: CONSTANT.MESSAGE.DATA_FOUND,
                    data: user
                });
            } else {
                return res.send({
                    status: CONSTANT.FAIL,
                    message: CONSTANT.MESSAGE.DATA_NOT_FOUND
                });
            }
        });
    }
};


/*
TODO: POST
Topic: update user by id
*/
exports.updateUser = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const status = req.body.status
    const phoneNo = req.body.phoneNo
    const age = req.body.age
    const gender = req.body.gender
    const type = req.body.type
    const flateNo = req.body.flateNo
    const firstLine = req.body.firstLine
    const secondLine = req.body.secondLine
    const city = req.body.city
    const state = req.body.state
    const pinCode = req.body.pinCode
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        if (!firstName || !lastName || !phoneNo || !email) {
            res.json({
                status: CONSTANT.FAIL,
                message: CONSTANT.MESSAGE.REQUIRED_FIELDS_MISSING
            });
        } else {
            if (!commonService.isValidateEmail(email)) {
                return res.json({
                    status: CONSTANT.FAIL,
                    message: CONSTANT.MESSAGE.EMAIL_INVALID
                });
            } else {

                const user = {
                    firstName: firstName ? firstName : "",
                    lastName: lastName ? lastName : "",
                    email: email,
                    phoneNo: phoneNo ? phoneNo : "",
                    age: age ? age : "",
                    gender: gender ? gender : "",
                    type: type ? type : CONSTANT.ADMIN,
                    status: status ? status : CONSTANT.DEACTIVE,
                    address: {
                        flateNo: flateNo ? flateNo : "",
                        firstLine: firstLine ? firstLine : "",
                        secondLine: secondLine ? secondLine : "",
                        city: city ? city : "",
                        state: state ? state : "",
                        pinCode: pinCode ? pinCode : ""
                    },
                    isDeleted: false
                };
                USER_COLLECTION.findByIdAndUpdate(
                    Id,
                    { $set: user },
                    { new: true },
                    function (err, result) {
                        if (err) {
                            res.send({ status: CONSTANT.ERROR, message: err });
                        }
                        res.send({
                            status: CONSTANT.SUCCESS,
                            message:
                                CONSTANT.COLLECTION.USER +
                                CONSTANT.MESSAGE.IS_UPDATED_SUCCESSFULLY,
                            data: result
                        });
                    }
                );
            }
        }
    }
};

/*
TODO: POST
Topic: delete user by id
*/
exports.deleteUser = (req, res) => {
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        USER_COLLECTION.findByIdAndUpdate(
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
    }
};

exports.updateUserStatus = (req , res ) => {
    const Id = req.params.Id;
    const status = req.body.status;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        USER_COLLECTION.findByIdAndUpdate(
            Id,
            { $set: { status: status } },
            { new: false },
            function (err, result) {
                if (err) {
                    res.send({ status: CONSTANT.ERROR, message: err });
                }
                res.send({
                    status: CONSTANT.SUCCESS,
                    message:
                        CONSTANT.COLLECTION.USER + CONSTANT.MESSAGE.STATUS_UPDATE_SUCCESSFULLY
                });
            }
        );
    }
}
