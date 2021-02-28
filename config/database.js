
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://iiqlaobulrgzcj:5f1043270d805461c3c77c738bf79c1a8bbbe47035872a917418343b5531f324@ec2-34-203-255-149.compute-1.amazonaws.com:5432/dfamef7frp1c6t', {
    host: 'ec2-34-203-255-149.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize.sync({ alter: true })
    .then(() => {
        console.log(`Database & tables modified!`)
    })



module.exports = sequelize;