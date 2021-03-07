const Room = require('../../models/room');

var RoomMethods = {


    addRoom: function (request, response) {
        Room.create(request.body)
            .then(Room => {
                response
                    .status(200)
                    .send(Room);
            })
            .catch(error =>
                response.send("Error: " + error))
    },

    getRooms: function (request, response) {
        Room.findAll()
            .then(Room => {
                response.json(Room);
            })
            .catch((error) => {
                response.send("Error: " + error)
            })
    },
    getRoomById: function (request, response) {
        Room.findOne({
            where: {
                id: request.params.id
            }
        })
            .then(Room => {
                response.json(Room);
            })
            .catch((error) => {
                response.send("Error: " + error)
            })
    },



}

module.exports = RoomMethods;