const express = require('express');
const router = express.Router();
const userMethods = require('../services/app/usersServices');


router.post('/add', userMethods.addUser);
router.get('/', userMethods.getUsers);
router.get('/byId/:id?', userMethods.getUserById);



module.exports = router;