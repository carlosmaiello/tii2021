const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('sqlite::memory:');

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notContains: ' ',
        }
    }
});

module.exports = { sequelize, Usuario }