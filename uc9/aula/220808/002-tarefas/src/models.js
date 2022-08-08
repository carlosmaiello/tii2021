const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.NODE_ENV == 'test' ? 'sqlite::memory:' : 'sqlite:./db.sqlite');

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
        unique: true,
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

const Tarefa = sequelize.define('tarefa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    concluida: {
        type: DataTypes.BOOLEAN,
    },
    data: {
        type: DataTypes.DATE,
    },
});

Usuario.belongsToMany(Tarefa, { through: "tarefa_usuarios", as: 'tarefas'});
Tarefa.belongsToMany(Usuario, { through: "tarefa_usuarios", as: 'usuarios' });

module.exports = { sequelize, Usuario, Tarefa }