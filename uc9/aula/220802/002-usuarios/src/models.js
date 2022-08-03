const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('sqlite::memory:');

const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
});

module.exports = { sequelize, Usuario }