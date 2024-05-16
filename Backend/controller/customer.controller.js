const CUSTOMER_COLLECTION = require('../module/customer.module')
const commonService = require("../common/common");
const CONSTANT = require("../common/constant");

/*
TODO: POST
Topic: create customer
*/
exports.createCustomer = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const gender = req.body.gender
    const phoneNo = req.body.phoneNo
    const age = req.body.age
    const city = req.body.city
    const state = req.body.state
    const pinCode = req.body.pinCode

    if (commonService.isUndefinedOrNull(firstName) || commonService.isUndefinedOrNull(lastName) || commonService.isUndefinedOrNull(email) || commonService.isUndefinedOrNull(gender) || commonService.isUndefinedOrNull(phoneNo)) {
        return res.json({ status: CONSTANT.FAIL, message: CONSTANT.MESSAGE.REQUIRED_FIELDS_MISSING });
    } else {
        if (!commonService.isValidateEmail(email)) {
            return res.json({
                status: CONSTANT.FAIL,
                message: CONSTANT.MESSAGE.EMAIL_INVALID
            });
        } else {
            CUSTOMER_COLLECTION.findOne({ email: email, isDeleted: false }).then(
                customer => {
                    if (customer) {
                        return res.json({
                            status: CONSTANT.FAIL,
                            message: CONSTANT.MESSAGE.EMAIL_EXIST
                        });
                    } else {
                        const customer = {
                            firstName: firstName ? firstName : "",
                            lastName: lastName ? lastName : "",
                            email: email,
                            phoneNo: phoneNo ? phoneNo : "",
                            age: age ? age : "",
                            gender: gender ? gender : "",
                            city: city ? city : "",
                            state: state ? state : "",
                            pinCode: pinCode ? pinCode : "",
                            isDeleted: false
                        };
                        CUSTOMER_COLLECTION.create(customer, function (err, result) {
                            if (err) {
                                return res.json({ status: CONSTANT.FAIL, message: "", err: err });
                            } else {
                                return res.json({ status: CONSTANT.SUCCESS, message: CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.ADDED_SUCCESSFULLY, data: result });
                            }
                        });

                    }
                })
        }
    }
}


/*
TODO: POST
Topic: update customer by id
*/
exports.updateCustomer = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const gender = req.body.gender
    const phoneNo = req.body.phoneNo
    const age = req.body.age
    const city = req.body.city
    const state = req.body.state
    const pinCode = req.body.pinCode
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
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

                const customer = {
                    firstName: firstName ? firstName : "",
                    lastName: lastName ? lastName : "",
                    email: email,
                    phoneNo: phoneNo ? phoneNo : "",
                    age: age ? age : "",
                    gender: gender ? gender : "",
                    city: city ? city : "",
                    state: state ? state : "",
                    pinCode: pinCode ? pinCode : "",
                    isDeleted: false
                };
                CUSTOMER_COLLECTION.findByIdAndUpdate(
                    Id,
                    { $set: customer },
                    { new: true },
                    function (err, result) {
                        if (err) {
                            res.send({ status: CONSTANT.ERROR, message: err });
                        }
                        res.send({
                            status: CONSTANT.SUCCESS,
                            message:
                                CONSTANT.COLLECTION.CUSTOMER +
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
TODO: GET
Topic: get customer by id
*/

exports.getCustomerById = (req, res) => {
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        CUSTOMER_COLLECTION.findById(Id).then(customer => {
            if (customer) {
                res.send({
                    status: CONSTANT.SUCCESS,
                    message: CONSTANT.MESSAGE.DATA_FOUND,
                    data: customer
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
TODO: GET
Topic: get all customers
*/

exports.findAllCustomer = (req, res) => {
    CUSTOMER_COLLECTION.find({ isDeleted: false })
        .then(customer => {
            if (!customer || customer <= 0) {
                res.json({
                    status: CONSTANT.FAIL,
                    message: CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.NOT_FOUND
                });
            } else {
                res.json({
                    status: CONSTANT.SUCCESS,
                    message:
                        CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.FOUND_SUCCESSFULLY,
                    data: customer
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
Topic: delete customer by id
*/
exports.deleteCustomer = (req, res) => {
    const Id = req.params.Id;
    if (!commonService.isValidObjId(Id)) {
        return res.send({
            status: CONSTANT.FAIL,
            message: CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.NOT_FOUND_BY_ID
        });
    } else {
        CUSTOMER_COLLECTION.findByIdAndUpdate(
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
                        CONSTANT.COLLECTION.CUSTOMER + CONSTANT.MESSAGE.DELETE_SUCCESSFULLY
                });
            }
        );
    }
};
