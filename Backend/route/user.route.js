const express = require('express');
const router = express.Router();  
const user = require('../controller/user.controller');

router.post('/registerUser',user.createUser);
router.post('/loginUser',user.login);
router.get('/getAllUsers', user.findAllUser);
router.post('/deleteUserById/:Id', user.deleteUser);

module.exports = router;