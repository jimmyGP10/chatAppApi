const Messages = require('../../models/message');

var MessagesMethods ={


    addMessages: function(request, response){
        Messages.create(request.body)
            .then(Messages=>{
                response
                .status(200)
                .send(Messages);
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getMessagess: function(request, response){
        Messages.findAll()
            .then(Messages=>{
                response.json(Messages);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
    },
    getMessagesById: function(request, response){
        Messages.findOne({
            where: {
                id: request.params.id
              } 
        })
        .then(Messages=>{
            response.json(Messages);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },



}

module.exports= MessagesMethods;