const Sequelize = require('sequelize');
const database = require('../config/database');
const User = require('./user');
const Message = require('./message');

const Room = database.define('rooms', {
})

Room.belongsToMany(User, { through: 'roomUsers' });
User.belongsToMany(Room, { through: 'roomUsers' });

Message.belongsTo(Room);
Room.hasMany(Message);


module.exports = User;