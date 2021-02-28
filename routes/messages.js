const express = require('express');
const router = express.Router();
const MessagesMethods = require('../services/app/messagesServices');


router.post('/add', MessagesMethods.addMessages);
router.get('/', MessagesMethods.getMessagess);
router.get('/byId/:id?', MessagesMethods.getMessagesById);



module.exports = router;