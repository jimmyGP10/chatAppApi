const express = require('express');
const router = express.Router();
const userMethods = require('../services/app/usersServices');


router.post('/add', userMethods.addUser);
router.get('/', userMethods.getUsers);
router.get('/byId/:id?', userMethods.getUserById);
router.get('/ByUid/:uid?', userMethods.getUserByUid);
router.get('/ByEmail/:email?', userMethods.getUserByEmail);



module.exports = router;