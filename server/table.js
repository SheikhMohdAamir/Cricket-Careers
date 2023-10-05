const {Sequelize,DataTypes} = require('sequelize')
const sequelize=require('./database/sql')

const table = sequelize.define('playerDetails',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dob:{
            type:DataTypes.DATE,
            allowNull:false
        },
        team:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })

module.exports = table;