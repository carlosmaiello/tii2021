const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("escola_seq", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
});

const Area = sequelize.define('Area', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50)
    }
}, {});

const Aluno = sequelize.define("Aluno", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    ra: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    rg: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {});


module.exports = { sequelize, Area, Aluno }