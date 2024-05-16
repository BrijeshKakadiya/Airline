const User = require("../controller/user.controller");
const express = require("express");
const router = express.Router();
const auth = require("../common/authentication")

router.post("/registerUser", User.registerUser);
router.post("/loginUser", User.login);
router.get('/getAllUsers', auth, User.findAllUser);
router.get('/getUserById/:Id', auth, User.getUserById);
router.post('/updateUserById/:Id', auth, User.updateUser);
router.post('/deleteUserById/:Id', auth, User.deleteUser);
router.post('/updateUserStatusById/:Id', auth, User.updateUserStatus);

module.exports = router;