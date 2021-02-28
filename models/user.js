const Sequelize = require('sequelize');
const database = require('../config/database');


const User = database.define('users',{

    
uid:{
        type:Sequelize.STRING,
        unique: true
    },
name:{
    type:Sequelize.STRING
},
email:{
    type:Sequelize.STRING,
    unique: true,
}


})

module.exports= User;