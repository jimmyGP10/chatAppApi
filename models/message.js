const Sequelize = require('sequelize');
const database = require('../config/database');
const User = require('./user');
const Room = require('./room');

const Message = database.define('message',{
    body:{
        type:Sequelize.STRING
    },
})

Message.belongsTo(User);
User.hasMany(Message);



module.exports= Message;