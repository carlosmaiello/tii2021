const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');
const Tarefa = sequelize.define('tarefa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: DataTypes.TEXT,
    data: DataTypes.DATE,
    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = { sequelize, Tarefa }