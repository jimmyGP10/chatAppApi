const User = require('../../models/user');

var userMethods ={


    addUser: function(request, response){
        User.create(request.body)
            .then(user=>{
                response
                .status(200)
                .send(user);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getUsers: function(request, response){
        User.findAll()
            .then(user=>{
                response.json(user);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getUserById: function(request, response){
        User.findOne({
            where: {
                id: request.params.id
              } 
        })
        .then(user=>{
            response.json(user);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },



}

module.exports= userMethods;