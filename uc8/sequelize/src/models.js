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

const Curso = sequelize.define("Curso", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ementa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    }
}, {});

const Turma = sequelize.define("Turma", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    inicio: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    fim: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
}, {});

const Endereco = sequelize.define("Endereco", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    logradouro: {
        type: DataTypes.STRING(100)
    },
    numero: {
        type: DataTypes.STRING(10)
    },
    complemento: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(50)
    },
    cep: {
        type: DataTypes.STRING(7)
    },
    cidade: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.STRING(2)
    }
}, {});

const TurmaAluno = sequelize.define("TurmaAluno", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    num: {
        type: DataTypes.INTEGER
    }
}, {});

Area.hasMany(Curso);
Curso.belongsTo(Area);

Curso.hasMany(Turma);
Turma.belongsTo(Curso);

Endereco.hasOne(Aluno);
Aluno.belongsTo(Endereco);

Turma.belongsToMany(Aluno, { through: TurmaAluno });
Aluno.belongsToMany(Turma, { through: TurmaAluno });

module.exports = { sequelize, Area, Aluno, Curso, Turma, Endereco }