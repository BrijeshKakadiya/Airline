const Customer = require("../controller/customer.controller");
const express = require("express");
const router = express.Router();
const auth = require("../common/authentication")

router.post("/createCustomer",auth, Customer.createCustomer);
router.get('/getAllCustomers', auth, Customer.findAllCustomer);
router.get('/getCustomerById/:Id', auth, Customer.getCustomerById);
router.post('/updateCustomerById/:Id', auth, Customer.updateCustomer);
router.post('/deleteCustomerById/:Id', auth, Customer.deleteCustomer);

module.exports = router;