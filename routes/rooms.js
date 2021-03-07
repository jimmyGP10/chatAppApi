const express = require('express');
const router = express.Router();
const RoomMethods = require('../services/app/roomServices');


router.post('/add', RoomMethods.addRoom);
router.get('/', RoomMethods.getRooms);
router.get('/byId/:id?', RoomMethods.getRoomById);



module.exports = router;